"use client";

import { useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import type { PathOptions } from "leaflet";
import "leaflet/dist/leaflet.css";

type DistrictProps = { [k: string]: unknown };

function normalizeName(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/^okres\s+/, "")
    .trim();
}

function getDistrictNameRaw(f: Feature<Geometry, DistrictProps>): string {
  const props = (f.properties || {}) as Record<string, unknown>;
  const candidates = ["NM3", "name", "Name", "LAU_NAME", "DISTRICT", "District", "Okres", "okres", "NUTS_NAME"];
  for (const key of candidates) {
    const val = props[key];
    if (typeof val === "string" && val.trim()) return val;
  }
  for (const [, v] of Object.entries(props)) {
    if (typeof v === "string" && v.trim()) return v;
  }
  return "";
}

function SetupPanes() {
  const map = useMap();
  useEffect(() => {
    const ensure = (name: string, z: number) => {
      if (!map.getPane(name)) {
        map.createPane(name);
        const p = map.getPane(name);
        if (p) p.style.zIndex = String(z);
      }
    };

    ensure("west", 399);
    ensure("covered", 401);
    ensure("nodrone", 405);
  }, [map]);
  return null;
}

export default function MapCoverage() {
  const [mounted, setMounted] = useState(false);

  const [westLayer, setWestLayer] = useState<FeatureCollection<Geometry, DistrictProps> | null>(null);
  const [coveredLayer, setCoveredLayer] = useState<FeatureCollection<Geometry, DistrictProps> | null>(null);
  const [noDroneLayer, setNoDroneLayer] = useState<FeatureCollection<Geometry, DistrictProps> | null>(null);
  const [bratislavaLayer, setBratislavaLayer] = useState<FeatureCollection<Geometry, DistrictProps> | null>(null);

  const [error, setError] = useState<string | null>(null);

  const [height, setHeight] = useState<number>(380);

  const [isMobile, setIsMobile] = useState(false);
  const [isLegendOpen, setIsLegendOpen] = useState(true);

  // detect mobile + height responsive
  useEffect(() => {
    setMounted(true);

    const compute = () => {
      const w = window.innerWidth;

      setIsMobile(w < 640);

      if (w < 640) setHeight(380);
      else if (w < 1024) setHeight(500);
      else setHeight(600);
    };

    compute();
    window.addEventListener("resize", compute, { passive: true });
    return () => window.removeEventListener("resize", compute);
  }, []);

  // legend behavior depending on device
  useEffect(() => {
    if (isMobile) setIsLegendOpen(false);
    else setIsLegendOpen(true);
  }, [isMobile]);

  const coveredNames = useMemo(
    () =>
      [
        "Bánovce nad Bebravou",
        "Galanta",
        "Handlová",
        "Ilava",
        "Myjava",
        "Nitra",
        "Nové Mesto nad Váhom",
        "Piešťany",
        "Považská Bystrica",
        "Púchov",
        "Trenčín",
        "Šaľa",
      ].map(normalizeName),
    []
  );

  const westNames = useMemo(
    () =>
      [
        "Dunajská Streda",
        "Galanta",
        "Hlohovec",
        "Piešťany",
        "Senica",
        "Skalica",
        "Trnava",
        "Bánovce nad Bebravou",
        "Ilava",
        "Myjava",
        "Nové Mesto nad Váhom",
        "Partizánske",
        "Považská Bystrica",
        "Prievidza",
        "Púchov",
        "Trenčín",
        "Komárno",
        "Levice",
        "Nitra",
        "Nové Zámky",
        "Šaľa",
        "Topoľčany",
        "Zlaté Moravce",
        "Senec",
      ].map(normalizeName),
    []
  );

  // load districts
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/districts_epsg_4326.geojson", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as FeatureCollection<Geometry, DistrictProps>;

        const bratislavaNames = [
          "bratislava i",
          "bratislava ii",
          "bratislava iii",
          "bratislava iv",
          "bratislava v",
          "malacky",
          "pezinok",
        ];

        const west: FeatureCollection<Geometry, DistrictProps> = {
          type: "FeatureCollection",
          features: data.features.filter((f) => {
            const n = normalizeName(getDistrictNameRaw(f));
            const isBA = bratislavaNames.includes(n);
            return westNames.includes(n) && !isBA;
          }),
        };

        const covered: FeatureCollection<Geometry, DistrictProps> = {
          type: "FeatureCollection",
          features: data.features.filter((f) =>
            coveredNames.includes(normalizeName(getDistrictNameRaw(f)))
          ),
        };

        const bratislava: FeatureCollection<Geometry, DistrictProps> = {
          type: "FeatureCollection",
          features: data.features.filter((f) =>
            bratislavaNames.includes(normalizeName(getDistrictNameRaw(f)))
          ),
        };

        if (!cancelled) {
          setWestLayer(west);
          setCoveredLayer(covered);
          setBratislavaLayer(bratislava);
          setError(null);
        }
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : String(e));
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [westNames, coveredNames]);

  // load no-drone zones
  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch("/nodronezones.geojson", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = (await res.json()) as FeatureCollection<Geometry, DistrictProps>;
        if (!cancelled) setNoDroneLayer(data);
      } catch (e) {
        if (!cancelled) setError((prev) => prev ?? (e instanceof Error ? e.message : String(e)));
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const styleWest: PathOptions = {
    color: "#9ca3af",
    weight: 1.2,
    opacity: 1,
    fillColor: "#9ca3af",
    fillOpacity: 0.28,
    stroke: true,
  };

  const styleCovered: PathOptions = {
    color: "#10b981",
    weight: 2,
    opacity: 1,
    fillColor: "#10b981",
    fillOpacity: 0.45,
    stroke: true,
  };

  const styleNoDrone: PathOptions = {
    color: "#ef4444",
    weight: 2,
    opacity: 1,
    fillColor: "#ef4444",
    fillOpacity: 0.35,
    stroke: true,
  };

  if (!mounted) return <div className="w-full h-[380px] rounded-2xl bg-white/5" />;

  return (
    <div className="relative rounded-2xl overflow-hidden">
      <MapContainer
        center={[48.7, 19.7]}
        zoom={8}
        scrollWheelZoom={isMobile ? false : true}
        style={{ height: `${height}px`, width: "100%" }}
        className="touch-pan-x touch-pan-y"
      >
        <SetupPanes />

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
          noWrap
        />

        {westLayer && <GeoJSON data={westLayer} style={styleWest} pane="west" />}
        {coveredLayer && <GeoJSON data={coveredLayer} style={styleCovered} pane="covered" />}
        {bratislavaLayer && <GeoJSON data={bratislavaLayer} style={styleNoDrone} pane="nodrone" />}
        {noDroneLayer && <GeoJSON data={noDroneLayer} style={styleNoDrone} pane="nodrone" />}
      </MapContainer>

      {/* TLAČIDLO LEGENDY – IBA MOBILE */}
      <div className="pointer-events-none absolute right-3 top-3 z-[500] flex flex-col items-end gap-2">

        {isMobile && (
          <button
            type="button"
            onClick={() => setIsLegendOpen((p) => !p)}
            className="pointer-events-auto rounded-full bg-black/70 ring-1 ring-white/20 backdrop-blur px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-white/90 shadow-md shadow-black/40 hover:bg-black/80 transition"
            aria-expanded={isLegendOpen}
            aria-controls="map-legend"
          >
            Legenda
          </button>
        )}

        {isLegendOpen && (
          <div
            id="map-legend"
            className="pointer-events-auto mt-1 rounded-xl bg-black/60 ring-1 ring-white/15 text-white/90 backdrop-blur px-3.5 py-3 shadow-lg shadow-black/30"
            role="note"
          >
            <div className="text-xs uppercase tracking-wider text-white/60 mb-2">Legenda</div>
            <ul className="space-y-1.5 text-sm">
              <li className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 rounded-sm" style={{ background: "#10b981" }} />
                <span>Aktívne pokrytie</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 rounded-sm" style={{ background: "#9ca3af" }} />
                <span>Pokrytie v rámci možností</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 rounded-sm" style={{ background: "#ef4444" }} />
                <span>Bezdronové zóny</span>
              </li>
            </ul>
          </div>
        )}
      </div>

      {error && (
        <div className="px-4 py-2 text-sm text-red-400 bg-red-400/10">
          Nepodarilo sa načítať mapové dáta: {error}
        </div>
      )}
    </div>
  );
}
