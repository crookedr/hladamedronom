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
  useEffect(() => {
    setMounted(true);

    const compute = () => {
      const w = window.innerWidth;
      if (w < 640) return 380;
      if (w < 1024) return 500;
      return 600;
    };
    const apply = () => setHeight(compute());
    apply();
    window.addEventListener("resize", apply, { passive: true });
    return () => window.removeEventListener("resize", apply);
  }, []);

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

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/districts_epsg_4326.geojson", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as FeatureCollection<Geometry, DistrictProps>;

        const west: FeatureCollection<Geometry, DistrictProps> = {
          type: "FeatureCollection",
          features: data.features.filter((f) => {
            const n = normalizeName(getDistrictNameRaw(f));
            const isBA =
              n === "bratislava i" ||
              n === "bratislava ii" ||
              n === "bratislava iii" ||
              n === "bratislava iv" ||
              n === "bratislava v" ||
              n === "malacky" ||
              n === "pezinok";
            return westNames.includes(n) && !isBA;
          }),
        };

        const covered: FeatureCollection<Geometry, DistrictProps> = {
          type: "FeatureCollection",
          features: data.features.filter((f) =>
            coveredNames.includes(normalizeName(getDistrictNameRaw(f)))
          ),
        };

        const bratislavaNames = [
          "bratislava i",
          "bratislava ii",
          "bratislava iii",
          "bratislava iv",
          "bratislava v",
          "malacky",
          "pezinok",
        ];

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

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/nodronezones.geojson", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as FeatureCollection<Geometry, DistrictProps>;

        if (!cancelled) {
          setNoDroneLayer(data);
        }
      } catch (e) {
        if (!cancelled) {
          const msg = e instanceof Error ? e.message : String(e);
          setError((prev) => prev ?? msg);
        }
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
        center={[48.6, 18.0]}
        zoom={8}
        scrollWheelZoom={false}
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

      <div
        className="pointer-events-auto absolute right-3 top-3 z-[500] rounded-xl bg-black/60 ring-1 ring-white/15 text-white/90 backdrop-blur px-3.5 py-3 shadow-lg shadow-black/30"
        role="note"
        aria-label="Legenda mapy pokrytia"
      >
        <div className="text-xs uppercase tracking-wider text-white/60 mb-2">Legenda</div>
        <ul className="space-y-1.5 text-sm">
          <li className="flex items-center gap-2">
            <span
              className="inline-block h-3 w-3 rounded-sm"
              style={{ background: "#10b981" }}
              aria-hidden="true"
            />
            <span>Aktívne pokrytie</span>
          </li>
          <li className="flex items-center gap-2">
            <span
              className="inline-block h-3 w-3 rounded-sm"
              style={{ background: "#9ca3af" }}
              aria-hidden="true"
            />
            <span>Pokrytie v rámci možností</span>
          </li>
          <li className="flex items-center gap-2">
            <span
              className="inline-block h-3 w-3 rounded-sm"
              style={{ background: "#ef4444" }}
              aria-hidden="true"
            />
            <span>Bezdronové zóny</span>
          </li>
        </ul>
      </div>

      {error && (
        <div className="px-4 py-2 text-sm text-red-400 bg-red-400/10">
          Nepodarilo sa načítať mapové dáta: {error}
        </div>
      )}
    </div>
  );
}
