"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import MapGL, { Source, Layer, NavigationControl, type MapRef } from "react-map-gl/maplibre";
import type { Feature, FeatureCollection, Geometry, GeoJsonProperties } from "geojson";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { booleanIntersects, difference, featureCollection as turfFeatureCollection } from "@turf/turf";

type DistrictKind = "covered" | "west" | "nodrone";

function norm(s: string) {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/^okres\s+/, "")
    .trim();
}

function districtName(props: GeoJsonProperties): string {
  if (!props) return "";
  for (const k of ["NM3", "name", "Name", "LAU_NAME", "DISTRICT", "District", "Okres", "okres"]) {
    const v = props[k];
    if (typeof v === "string" && v.trim()) return v.trim();
  }
  return "";
}

function featureBounds(f: Feature<Geometry, GeoJsonProperties>): [[number, number], [number, number]] | null {
  let minLon = Infinity, maxLon = -Infinity, minLat = Infinity, maxLat = -Infinity;
  function visit(c: unknown) {
    if (!Array.isArray(c)) return;
    if (typeof c[0] === "number") {
      minLon = Math.min(minLon, c[0]); maxLon = Math.max(maxLon, c[0]);
      minLat = Math.min(minLat, c[1]); maxLat = Math.max(maxLat, c[1]);
    } else c.forEach(visit);
  }
  const geom = f.geometry as { coordinates: unknown };
  if (geom?.coordinates) visit(geom.coordinates);
  return isFinite(minLon) ? [[minLon, minLat], [maxLon, maxLat]] : null;
}

function kindLabel(k: DistrictKind) {
  return k === "covered" ? "Aktívne pokrytie" : k === "west" ? "Pokrytie v rámci možností" : "Bezdronová zóna";
}
function kindColor(k: DistrictKind) {
  return k === "covered" ? "#10b981" : k === "west" ? "#9ca3af" : "#ef4444";
}

const ZONE_CATEGORY_REASON: Record<string, string> = {
  "LZR - Restricted": "Vyhradený vzdušný priestor (napríklad vojenský priestor). Lety dronov si tu vyžadujú osobitné povolenie.",
  "LZP - PROHIBITED": "Trvalo zakázaná zóna, lety dronov tu nie sú povolené.",
  "ZVJS": "Areál väzenského zariadenia. Lety dronov sú tu zo bezpečnostných dôvodov zakázané.",
  "Transport Authority": "Zónu určil Dopravný úrad SR, napríklad kvôli ochrane objektu alebo podujatia. Lety dronov sú tu obmedzené alebo zakázané.",
};

const BRATISLAVA_REASON =
  "Hlavné mesto má riadený vzdušný priestor a hustú zástavbu. Lety dronov tu vyžadujú osobitné povolenie.";

const COVERED_NAMES = [
  "Bánovce nad Bebravou", "Galanta", "Ilava", "Myjava", "Nitra",
  "Nové Mesto nad Váhom", "Piešťany", "Považská Bystrica", "Púchov", "Trenčín", "Šaľa",
  "Poprad", "Senec",
].map(norm);

const WEST_NAMES = [
  "Dunajská Streda", "Hlohovec", "Senica", "Skalica", "Trnava",
  "Partizánske", "Prievidza", "Komárno", "Levice", "Nové Zámky",
  "Topoľčany", "Zlaté Moravce",
].map(norm);

const BRATISLAVA = [
  "Bratislava I", "Bratislava II", "Bratislava III", "Bratislava IV", "Bratislava V",
  "Malacky", "Pezinok",
].map(norm);

const MAP_STYLE = "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";
const INITIAL_VIEW = { longitude: 19.7, latitude: 48.67, zoom: 6.9, pitch: 0, bearing: 0 };

type SelectedState = { name: string; kind: DistrictKind; id: string | number; src: string; reason?: string } | null;
type HoverState = { name: string; kind: DistrictKind; x: number; y: number } | null;

export default function MapCoverage() {
  const mapRef      = useRef<MapRef>(null);
  const hoverRef    = useRef<{ id: string | number; src: string } | null>(null);
  const selectedRef = useRef<SelectedState>(null);
  const selectedZoneIdRef = useRef<string | number | null>(null);
  const featuresRef = useRef(new Map<string, Feature>());

  const [mounted,      setMounted]      = useState(false);
  const [isMobile,     setIsMobile]     = useState(false);
  const [mapHeight,    setMapHeight]    = useState(520);
  const [legendOpen,   setLegendOpen]   = useState(true);
  const [selected,     setSelected]     = useState<SelectedState>(null);
  const [hovered,      setHovered]      = useState<HoverState>(null);
  const [mapFocused,   setMapFocused]   = useState(false);
  const [coveredGeo,   setCoveredGeo]   = useState<FeatureCollection | null>(null);
  const [westGeo,      setWestGeo]      = useState<FeatureCollection | null>(null);
  const [nodroneGeo,   setNodroneGeo]   = useState<FeatureCollection | null>(null);
  const [nodroneZones, setNodroneZones] = useState<FeatureCollection | null>(null);
  const [coveredRender, setCoveredRender] = useState<FeatureCollection | null>(null);
  const [westRender,    setWestRender]    = useState<FeatureCollection | null>(null);
  const [countryGeo,    setCountryGeo]    = useState<FeatureCollection | null>(null);
  const scrollEnabledRef = useRef(false);
  const mapFocusedRef = useRef(false);

  useEffect(() => {
    setMounted(true);
    const compute = () => {
      const w = window.innerWidth;
      setIsMobile(w < 640);
      setMapHeight(w < 640 ? Math.round(window.innerHeight * 0.62) : w < 1024 ? 560 : 660);
    };
    compute();
    window.addEventListener("resize", compute, { passive: true });
    return () => window.removeEventListener("resize", compute);
  }, []);

  useEffect(() => { setLegendOpen(!isMobile); }, [isMobile]);

  useEffect(() => { mapFocusedRef.current = mapFocused; }, [mapFocused]);

  useEffect(() => {
    fetch("/districts_epsg_4326.geojson")
      .then(r => r.json())
      .then((data: FeatureCollection<Geometry, Record<string, unknown>>) => {
        let ci = 0, wi = 0, bi = 0;
        const covered: FeatureCollection = { type: "FeatureCollection", features: [] };
        const west: FeatureCollection    = { type: "FeatureCollection", features: [] };
        const nodrone: FeatureCollection = { type: "FeatureCollection", features: [] };

        for (const f of data.features) {
          const n = norm(districtName(f.properties));
          if (COVERED_NAMES.includes(n)) {
            const feat = { ...f, id: ci };
            featuresRef.current.set(`covered-source:${ci}`, feat as Feature);
            covered.features.push(feat);
            ci++;
          } else if (WEST_NAMES.includes(n)) {
            const feat = { ...f, id: wi };
            featuresRef.current.set(`west-source:${wi}`, feat as Feature);
            west.features.push(feat);
            wi++;
          } else if (BRATISLAVA.includes(n)) {
            const feat = { ...f, id: bi };
            featuresRef.current.set(`nodrone-source:${bi}`, feat as Feature);
            nodrone.features.push(feat);
            bi++;
          }
        }
        setCoveredGeo(covered);
        setWestGeo(west);
        setNodroneGeo(nodrone);
        setCountryGeo(data as unknown as FeatureCollection);
      });

    fetch("/nodronezones.geojson")
      .then(r => r.json())
      .then((data: FeatureCollection) => {
        setNodroneZones({
          ...data,
          features: data.features.map((f, i) => ({ ...f, id: i })),
        });
      });
  }, []);

  // Vyreže z pokrytia diery tam, kde ho prekrýva bezdronová zóna — zelená/sivá
  // farba potom len obteká okolo červenej, namiesto aby sa farby prekrývali.
  useEffect(() => {
    if (!coveredGeo || !westGeo || !nodroneZones || nodroneZones.features.length === 0) {
      setCoveredRender(coveredGeo);
      setWestRender(westGeo);
      return;
    }
    const punchHoles = (fc: FeatureCollection): FeatureCollection => ({
      type: "FeatureCollection",
      features: fc.features.map((f) => {
        let result = f as Feature;
        for (const zone of nodroneZones.features) {
          if (!booleanIntersects(result, zone as Feature)) continue;
          try {
            const diff = difference(turfFeatureCollection([result as never, zone as never]));
            if (diff) result = { ...diff, id: f.id, properties: f.properties } as Feature;
          } catch {
            // geometry edge case (e.g. degenerate ring) — keep previous shape
          }
        }
        return result;
      }),
    });
    setCoveredRender(punchHoles(coveredGeo));
    setWestRender(punchHoles(westGeo));
  }, [coveredGeo, westGeo, nodroneZones]);

  const clearHover = useCallback(() => {
    const map = mapRef.current;
    if (!map || !hoverRef.current) return;
    map.setFeatureState({ source: hoverRef.current.src, id: hoverRef.current.id }, { hover: false });
    hoverRef.current = null;
    setHovered(null);
  }, []);

  const handleMouseMove = useCallback((e: { point: { x: number; y: number } }) => {
    const map = mapRef.current;
    if (!map) return;
    const pt: [number, number] = [e.point.x, e.point.y];

    // Koliesko myši priblíži mapu len nad územím Slovenska — inde nad mapou
    // (susedné krajiny, prázdny okraj) necháme scrollovať stránku.
    const overCountry = map.queryRenderedFeatures(pt, { layers: ["country-mask-fill"] }).length > 0;
    const shouldEnableScroll = mapFocusedRef.current && overCountry;
    if (shouldEnableScroll !== scrollEnabledRef.current) {
      if (shouldEnableScroll) map.getMap().scrollZoom.enable();
      else map.getMap().scrollZoom.disable();
      scrollEnabledRef.current = shouldEnableScroll;
    }

    const hits = map.queryRenderedFeatures(pt, { layers: ["covered-fill", "west-fill", "nodrone-fill", "nodrone-zones-fill"] });
    if (hits.length > 0) {
      const f = hits[0];
      if (f.layer?.id === "nodrone-fill" || f.layer?.id === "nodrone-zones-fill") {
        clearHover();
        map.getCanvas().style.cursor = "pointer";
        return;
      }
      if (f.id === undefined || f.id === null) return;
      if (hoverRef.current && (hoverRef.current.id !== f.id || hoverRef.current.src !== f.source)) {
        map.setFeatureState({ source: hoverRef.current.src, id: hoverRef.current.id }, { hover: false });
      }
      map.setFeatureState({ source: f.source, id: f.id }, { hover: true });
      hoverRef.current = { id: f.id, src: f.source };
      map.getCanvas().style.cursor = "pointer";
      setHovered({ name: districtName(f.properties), kind: f.source === "covered-source" ? "covered" : "west", x: e.point.x, y: e.point.y });
    } else {
      clearHover();
      map.getCanvas().style.cursor = "";
    }
  }, [clearHover]);

  const handleMouseLeave = useCallback(() => {
    clearHover();
    if (mapRef.current) {
      mapRef.current.getCanvas().style.cursor = "";
      mapRef.current.getMap().scrollZoom.disable();
      scrollEnabledRef.current = false;
    }
  }, [clearHover]);

  const handleClick = useCallback((e: { point: { x: number; y: number } }) => {
    const map = mapRef.current;
    if (!map) return;
    const pt: [number, number] = [e.point.x, e.point.y];
    if (selectedRef.current) {
      map.setFeatureState({ source: selectedRef.current.src, id: selectedRef.current.id }, { selected: false });
    }
    if (selectedZoneIdRef.current !== null) {
      map.setFeatureState({ source: "nodrone-zones-source", id: selectedZoneIdRef.current }, { selected: false });
      selectedZoneIdRef.current = null;
    }
    const tryLayer = (
      layer: string,
      kind: DistrictKind,
      src: string,
      opts?: { name?: string; reason?: string; zoom?: boolean }
    ): boolean => {
      const hits = map.queryRenderedFeatures(pt, { layers: [layer] });
      if (!hits.length || hits[0].id === undefined || hits[0].id === null) return false;
      const f = hits[0];
      const id = f.id as string | number;
      const name = opts?.name ?? districtName(f.properties);
      const reason = opts?.reason ?? (f.properties?.category ? ZONE_CATEGORY_REASON[f.properties.category as string] : undefined);
      map.setFeatureState({ source: src, id }, { selected: true });
      const info: SelectedState = { name, kind, id, src, reason };
      selectedRef.current = info;
      setSelected(info);
      if (opts?.zoom) {
        const stored = featuresRef.current.get(`${src}:${id}`);
        if (stored) {
          const bounds = featureBounds(stored);
          if (bounds) map.fitBounds(bounds, { padding: 80, pitch: 0, bearing: 0, duration: 900 });
        }
      }
      return true;
    };
    const tryZoneLayer = (): boolean => {
      const hits = map.queryRenderedFeatures(pt, { layers: ["nodrone-zones-fill"] });
      if (!hits.length || hits[0].id === undefined || hits[0].id === null) return false;
      const f = hits[0];
      const category = (f.properties?.category as string) ?? "";
      const reason = ZONE_CATEGORY_REASON[category] ?? "Lety dronov sú tu zakázané alebo obmedzené.";
      map.setFeatureState({ source: "nodrone-zones-source", id: f.id }, { selected: true });
      selectedZoneIdRef.current = f.id as string | number;
      selectedRef.current = null;
      setSelected({ name: "Bezdronová zóna", kind: "nodrone", id: "", src: "", reason });
      return true;
    };
    if (
      !tryLayer("covered-fill", "covered", "covered-source") &&
      !tryLayer("west-fill", "west", "west-source") &&
      !tryLayer("nodrone-fill", "nodrone", "nodrone-source", { reason: BRATISLAVA_REASON, zoom: true }) &&
      !tryZoneLayer()
    ) {
      selectedRef.current = null;
      setSelected(null);
    }
  }, []);

  const clearSelected = useCallback(() => {
    if (selectedRef.current && mapRef.current) {
      mapRef.current.setFeatureState({ source: selectedRef.current.src, id: selectedRef.current.id }, { selected: false });
    }
    if (selectedZoneIdRef.current !== null && mapRef.current) {
      mapRef.current.setFeatureState({ source: "nodrone-zones-source", id: selectedZoneIdRef.current }, { selected: false });
      selectedZoneIdRef.current = null;
    }
    selectedRef.current = null;
    setSelected(null);
  }, []);

  const SK_BOUNDS: [[number, number], [number, number]] = [[16.83, 47.73], [22.56, 49.60]];

  const resetView = useCallback(() => {
    clearSelected();
    if (isMobile) {
      mapRef.current?.fitBounds(SK_BOUNDS, { padding: 12, duration: 800 });
    } else {
      mapRef.current?.flyTo({ ...INITIAL_VIEW, duration: 900 });
    }
  }, [clearSelected, isMobile]);

  const onMapLoad = useCallback(() => {
    if (isMobile && mapRef.current) {
      mapRef.current.fitBounds(SK_BOUNDS, { padding: 12, duration: 0 });
    }
  }, [isMobile]);

  if (!mounted) {
    return <div style={{ height: 520 }} className="w-full bg-white/5 animate-pulse" />;
  }

  const initialView = isMobile ? { ...INITIAL_VIEW, longitude: 18.2, zoom: 6.0 } : INITIAL_VIEW;

  return (
    <div
      className="relative overflow-hidden"
      onMouseLeave={() => {
        setMapFocused(false);
        mapFocusedRef.current = false;
        if (mapRef.current) {
          mapRef.current.getMap().scrollZoom.disable();
          scrollEnabledRef.current = false;
        }
      }}
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <MapGL
          ref={mapRef}
          mapStyle={MAP_STYLE}
          initialViewState={initialView}
          style={{ width: "100%", height: mapHeight }}
          scrollZoom={false}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          onLoad={onMapLoad}
          interactiveLayerIds={["covered-fill", "west-fill", "nodrone-fill", "nodrone-zones-fill"]}
          attributionControl={false}
        >
          {countryGeo && (
            <Source id="country-mask-source" type="geojson" data={countryGeo}>
              <Layer id="country-mask-fill" type="fill" paint={{ "fill-opacity": 0 }} />
            </Source>
          )}

          {westGeo && (
            <Source id="west-source" type="geojson" data={westRender ?? westGeo}>
              <Layer id="west-fill" type="fill" paint={{
                "fill-color": "#9ca3af",
                "fill-opacity": ["case",
                  ["boolean", ["feature-state", "selected"], false], 0.50,
                  ["boolean", ["feature-state", "hover"], false], 0.35,
                  0.18],
              }} />
              <Layer id="west-line" type="line" paint={{
                "line-color": "#9ca3af",
                "line-width": ["case", ["boolean", ["feature-state", "hover"], false], 1.8, 0.8],
                "line-opacity": 0.55,
              }} />
            </Source>
          )}

          {coveredGeo && (
            <Source id="covered-source" type="geojson" data={coveredRender ?? coveredGeo}>
              <Layer id="covered-fill" type="fill" paint={{
                "fill-color": ["case",
                  ["boolean", ["feature-state", "selected"], false], "#34d399",
                  ["boolean", ["feature-state", "hover"], false], "#6ee7b7",
                  "#10b981"],
                "fill-opacity": ["case",
                  ["boolean", ["feature-state", "selected"], false], 0.75,
                  ["boolean", ["feature-state", "hover"], false], 0.65,
                  0.52],
              }} />
              <Layer id="covered-glow" type="line" paint={{
                "line-color": "#10b981", "line-width": 8, "line-opacity": 0.2, "line-blur": 6,
              }} />
              <Layer id="covered-line" type="line" paint={{
                "line-color": ["case", ["boolean", ["feature-state", "hover"], false], "#6ee7b7", "#34d399"],
                "line-width": 1.8, "line-opacity": 0.9,
              }} />
            </Source>
          )}

          {nodroneGeo && (
            <Source id="nodrone-source" type="geojson" data={nodroneGeo}>
              <Layer id="nodrone-fill" type="fill" paint={{
                "fill-color": "#ef4444",
                "fill-opacity": ["case",
                  ["boolean", ["feature-state", "selected"], false], 0.45,
                  0.28],
              }} />
              <Layer id="nodrone-line" type="line" paint={{ "line-color": "#ef4444", "line-width": 1.2, "line-opacity": 0.6 }} />
            </Source>
          )}

          {nodroneZones && (
            <Source id="nodrone-zones-source" type="geojson" data={nodroneZones}>
              <Layer
                id="nodrone-zones-fill"
                type="fill"
                paint={{
                  "fill-color": ["case",
                    ["boolean", ["feature-state", "selected"], false], "#fca5a5",
                    ["get", "color"]],
                  "fill-opacity": ["case",
                    ["boolean", ["feature-state", "selected"], false], 0.7,
                    0.4],
                }}
              />
              <Layer
                id="nodrone-zones-line"
                type="line"
                paint={{
                  "line-color": ["case",
                    ["boolean", ["feature-state", "selected"], false], "#fca5a5",
                    ["get", "color"]],
                  "line-width": ["case", ["boolean", ["feature-state", "selected"], false], 2, 1.2],
                  "line-opacity": 0.9,
                }}
              />
            </Source>
          )}

          <NavigationControl position="bottom-right" />
        </MapGL>
      </motion.div>

      {/* Click-to-activate overlay — zmizne po prvom kliku na mapu */}
      <AnimatePresence>
        {!mapFocused && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 z-30 flex items-end justify-center pb-6 pointer-events-none"
          >
            <div className="bg-black/55 backdrop-blur-sm rounded-full px-5 py-2.5 text-xs text-white/70 flex items-center gap-2">
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 shrink-0" fill="currentColor">
                <path d="M6 1a1 1 0 00-1 1v1H3.5A1.5 1.5 0 002 4.5v8A1.5 1.5 0 003.5 14h9a1.5 1.5 0 001.5-1.5v-8A1.5 1.5 0 0012.5 3H11V2a1 1 0 00-2 0v1H7V2a1 1 0 00-1-1zM8 7a1 1 0 110 2 1 1 0 010-2z"/>
              </svg>
              Kliknite na mapu pre priblíženie a pohyb
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click capture — aktivuje scroll zoom */}
      {!mapFocused && (
        <div
          className="absolute inset-0 z-20 cursor-pointer"
          onClick={() => setMapFocused(true)}
        />
      )}

      {/* Hover tooltip */}
      {!isMobile && hovered && !selected && mapFocused && (
        <div
          className="pointer-events-none absolute z-40 rounded-lg bg-black/80 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white whitespace-nowrap"
          style={{ left: hovered.x + 14, top: hovered.y - 10 }}
        >
          <span className="mr-2" style={{ color: kindColor(hovered.kind) }}>●</span>
          {hovered.name}
        </div>
      )}


      {/* Reset button — mobile only, appears after interaction */}
      <AnimatePresence>
        {isMobile && mapFocused && !selected && (
          <motion.button
            type="button"
            onClick={resetView}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.18 }}
            className="absolute bottom-14 left-3 z-10 rounded-full bg-black/70 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white/80 hover:text-white hover:bg-black/85 transition flex items-center gap-1.5"
          >
            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 8a6 6 0 1012 0A6 6 0 002 8zm6-2.5v5m-2.5-2.5h5" />
            </svg>
            Celá mapa
          </motion.button>
        )}
      </AnimatePresence>

      {/* Legend — top-right */}
      <div className="pointer-events-none absolute right-3 top-3 z-10 flex flex-col items-end gap-2">
        {isMobile && (
          <button
            type="button"
            onClick={() => setLegendOpen(p => !p)}
            className="pointer-events-auto rounded-full bg-black/70 backdrop-blur-sm px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-white/90 hover:bg-black/85 transition"
          >
            {legendOpen ? "Skryť" : "Legenda"}
          </button>
        )}
        <AnimatePresence>
          {legendOpen && (
            <motion.div
              className="pointer-events-auto rounded-xl bg-black/75 backdrop-blur-md px-4 py-3 shadow-xl w-[200px]"
              initial={{ opacity: 0, y: -4, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.98 }}
              transition={{ duration: 0.18 }}
            >
              <p className="text-xs font-serif tracking-wide text-white/40 font-semibold mb-3">Legenda</p>
              <ul className="space-y-2.5 text-sm">
                <li className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2.5">
                    <span className="h-3 w-3 rounded-sm shrink-0" style={{ background: "#10b981" }} />
                    <span className="text-white/90">Aktívne</span>
                  </span>
                  <span className="text-white/35 text-xs tabular-nums">{COVERED_NAMES.length}&nbsp;ok.</span>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2.5">
                    <span className="h-3 w-3 rounded-sm shrink-0" style={{ background: "#9ca3af" }} />
                    <span className="text-white/90">V rámci možností</span>
                  </span>
                  <span className="text-white/35 text-xs tabular-nums">{WEST_NAMES.length}&nbsp;ok.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-3 w-3 rounded-sm shrink-0" style={{ background: "#ef4444" }} />
                  <span className="text-white/90">Bezdronové zóny</span>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Selected district card */}
      <div className={`pointer-events-none absolute z-10 ${isMobile ? "left-0 right-0 bottom-0" : "left-3 bottom-3 max-w-xs"}`}>
        <AnimatePresence>
          {selected && (
            <motion.div
              className={`pointer-events-auto bg-black/85 backdrop-blur-md shadow-xl overflow-hidden ${isMobile ? "rounded-t-2xl" : "rounded-2xl"}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-4 pt-3 pb-0 flex items-center justify-between">
                <button
                  type="button"
                  onClick={resetView}
                  className="text-xs text-white/45 hover:text-white/80 transition"
                >
                  ← Celá oblasť
                </button>
                <button
                  type="button"
                  onClick={clearSelected}
                  className="rounded-lg px-2 py-1 text-white/40 hover:text-white hover:bg-white/10 transition text-sm leading-none"
                  aria-label="Zavrieť"
                >
                  ✕
                </button>
              </div>
              <div className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ background: kindColor(selected.kind) }} />
                  <p className="text-base font-semibold text-white leading-tight">{selected.name}</p>
                </div>
                {selected.src !== "" && (
                  <p className="mt-0.5 text-xs font-medium" style={{ color: kindColor(selected.kind) }}>
                    {kindLabel(selected.kind)}
                  </p>
                )}
              </div>

              {selected.kind !== "nodrone" ? (
                <div className="border-t border-white/10 px-4 py-3">
                  <Link
                    href="/#kontakt"
                    className="flex items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-400 transition-colors px-4 py-2.5 text-sm font-semibold text-white"
                  >
                    Požiadať o pomoc
                  </Link>
                  <p className="mt-2 text-[11px] text-white/35 leading-4">
                    Pokrytie je orientačné, dostupnosť pre konkrétnu lokalitu si overíme po kontaktovaní.
                  </p>
                </div>
              ) : (
                <div className="border-t border-white/10 px-4 py-3">
                  <p className="text-xs text-white/40 font-semibold mb-1">
                    Toto je bezdronová zóna, tu nemôžeme lietať.
                  </p>
                  <p className="text-xs text-white/55 leading-5">
                    {selected.reason ?? "Lety dronov sú tu zakázané alebo obmedzené."}
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
