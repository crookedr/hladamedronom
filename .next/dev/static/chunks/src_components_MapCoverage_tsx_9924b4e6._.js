(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/MapCoverage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapCoverage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/MapContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/TileLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$GeoJSON$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/GeoJSON.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function normalizeName(s) {
    return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/^okres\s+/, "").trim();
}
function getDistrictNameRaw(f) {
    const props = f.properties || {};
    const candidates = [
        "NM3",
        "name",
        "Name",
        "LAU_NAME",
        "DISTRICT",
        "District",
        "Okres",
        "okres",
        "NUTS_NAME"
    ];
    for (const key of candidates){
        const val = props[key];
        if (typeof val === "string" && val.trim()) return val;
    }
    for (const [, v] of Object.entries(props)){
        if (typeof v === "string" && v.trim()) return v;
    }
    return "";
}
function SetupPanes() {
    _s();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SetupPanes.useEffect": ()=>{
            const ensure = {
                "SetupPanes.useEffect.ensure": (name, z)=>{
                    if (!map.getPane(name)) {
                        map.createPane(name);
                        const p = map.getPane(name);
                        if (p) p.style.zIndex = String(z);
                    }
                }
            }["SetupPanes.useEffect.ensure"];
            ensure("west", 399);
            ensure("covered", 401);
            ensure("nodrone", 405);
        }
    }["SetupPanes.useEffect"], [
        map
    ]);
    return null;
}
_s(SetupPanes, "IoceErwr5KVGS9kN4RQ1bOkYMAg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c = SetupPanes;
function MapAccess({ onMap }) {
    _s1();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapAccess.useEffect": ()=>{
            onMap(map);
        }
    }["MapAccess.useEffect"], [
        map,
        onMap
    ]);
    return null;
}
_s1(MapAccess, "IoceErwr5KVGS9kN4RQ1bOkYMAg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c1 = MapAccess;
function kindLabel(k) {
    if (k === "covered") return "Aktívne pokrytie";
    if (k === "west") return "Pokrytie v rámci možností";
    return "Bezdronové zóny";
}
function MapCoverage() {
    _s2();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [westLayer, setWestLayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [coveredLayer, setCoveredLayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [noDroneLayer, setNoDroneLayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [bratislavaLayer, setBratislavaLayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [height, setHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(380);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLegendOpen, setIsLegendOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [map, setMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const selectedLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selectedKindRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // responsive
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapCoverage.useEffect": ()=>{
            setMounted(true);
            const compute = {
                "MapCoverage.useEffect.compute": ()=>{
                    const w = window.innerWidth;
                    setIsMobile(w < 640);
                    if (w < 640) setHeight(380);
                    else if (w < 1024) setHeight(500);
                    else setHeight(600);
                }
            }["MapCoverage.useEffect.compute"];
            compute();
            window.addEventListener("resize", compute, {
                passive: true
            });
            return ({
                "MapCoverage.useEffect": ()=>window.removeEventListener("resize", compute)
            })["MapCoverage.useEffect"];
        }
    }["MapCoverage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapCoverage.useEffect": ()=>{
            setIsLegendOpen(!isMobile);
        }
    }["MapCoverage.useEffect"], [
        isMobile
    ]);
    const coveredNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MapCoverage.useMemo[coveredNames]": ()=>[
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
                "Šaľa"
            ].map(normalizeName)
    }["MapCoverage.useMemo[coveredNames]"], []);
    const westNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MapCoverage.useMemo[westNames]": ()=>[
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
                "Senec"
            ].map(normalizeName)
    }["MapCoverage.useMemo[westNames]"], []);
    // load districts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapCoverage.useEffect": ()=>{
            let cancelled = false;
            ({
                "MapCoverage.useEffect": async ()=>{
                    try {
                        const res = await fetch("/districts_epsg_4326.geojson", {
                            cache: "no-store"
                        });
                        if (!res.ok) throw new Error(`HTTP ${res.status}`);
                        const data = await res.json();
                        const bratislavaNames = [
                            "bratislava i",
                            "bratislava ii",
                            "bratislava iii",
                            "bratislava iv",
                            "bratislava v",
                            "malacky",
                            "pezinok"
                        ];
                        const west = {
                            type: "FeatureCollection",
                            features: data.features.filter({
                                "MapCoverage.useEffect": (f)=>{
                                    const n = normalizeName(getDistrictNameRaw(f));
                                    const isBA = bratislavaNames.includes(n);
                                    return westNames.includes(n) && !isBA;
                                }
                            }["MapCoverage.useEffect"])
                        };
                        const covered = {
                            type: "FeatureCollection",
                            features: data.features.filter({
                                "MapCoverage.useEffect": (f)=>coveredNames.includes(normalizeName(getDistrictNameRaw(f)))
                            }["MapCoverage.useEffect"])
                        };
                        const bratislava = {
                            type: "FeatureCollection",
                            features: data.features.filter({
                                "MapCoverage.useEffect": (f)=>bratislavaNames.includes(normalizeName(getDistrictNameRaw(f)))
                            }["MapCoverage.useEffect"])
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
                }
            })["MapCoverage.useEffect"]();
            return ({
                "MapCoverage.useEffect": ()=>{
                    cancelled = true;
                }
            })["MapCoverage.useEffect"];
        }
    }["MapCoverage.useEffect"], [
        westNames,
        coveredNames
    ]);
    // load no-drone zones
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapCoverage.useEffect": ()=>{
            let cancelled = false;
            ({
                "MapCoverage.useEffect": async ()=>{
                    try {
                        const res = await fetch("/nodronezones.geojson", {
                            cache: "no-store"
                        });
                        if (!res.ok) throw new Error(`HTTP ${res.status}`);
                        const data = await res.json();
                        if (!cancelled) setNoDroneLayer(data);
                    } catch (e) {
                        if (!cancelled) setError({
                            "MapCoverage.useEffect": (prev)=>prev ?? (e instanceof Error ? e.message : String(e))
                        }["MapCoverage.useEffect"]);
                    }
                }
            })["MapCoverage.useEffect"]();
            return ({
                "MapCoverage.useEffect": ()=>{
                    cancelled = true;
                }
            })["MapCoverage.useEffect"];
        }
    }["MapCoverage.useEffect"], []);
    const styleWest = {
        color: "#9ca3af",
        weight: 1.2,
        opacity: 1,
        fillColor: "#9ca3af",
        fillOpacity: 0.25,
        stroke: true
    };
    const styleCovered = {
        color: "#10b981",
        weight: 2,
        opacity: 1,
        fillColor: "#10b981",
        fillOpacity: 0.42,
        stroke: true
    };
    const styleNoDrone = {
        color: "#ef4444",
        weight: 2,
        opacity: 1,
        fillColor: "#ef4444",
        fillOpacity: 0.32,
        stroke: true
    };
    const hoverPatch = {
        weight: 3,
        fillOpacity: 0.55
    };
    const selectedPatch = {
        weight: 4,
        fillOpacity: 0.62
    };
    const applyStyle = (layer, style)=>{
        layer.setStyle(style);
    };
    const baseStyleByKind = (k)=>k === "covered" ? styleCovered : k === "west" ? styleWest : styleNoDrone;
    const clearSelected = ()=>{
        if (selectedLayerRef.current && selectedKindRef.current) {
            applyStyle(selectedLayerRef.current, baseStyleByKind(selectedKindRef.current));
        }
        selectedLayerRef.current = null;
        selectedKindRef.current = null;
        setSelected(null);
    };
    const makeOnEachFeature = (kind, base)=>(feature, layer)=>{
            const nameRaw = getDistrictNameRaw(feature);
            const name = nameRaw?.trim() ? nameRaw.trim() : "Neznámy okres";
            layer.on("mouseover", ()=>{
                if (selectedLayerRef.current === layer) return;
                applyStyle(layer, {
                    ...base,
                    ...hoverPatch
                });
            });
            layer.on("mouseout", ()=>{
                if (selectedLayerRef.current === layer) return;
                applyStyle(layer, base);
            });
            layer.on("click", ()=>{
                // clear old
                if (selectedLayerRef.current && selectedKindRef.current) {
                    applyStyle(selectedLayerRef.current, baseStyleByKind(selectedKindRef.current));
                }
                selectedLayerRef.current = layer;
                selectedKindRef.current = kind;
                setSelected({
                    name,
                    kind
                });
                applyStyle(layer, {
                    ...base,
                    ...selectedPatch
                });
                // fit bounds (no any)
                if (map) {
                    const maybeBoundsLayer = layer;
                    const b = maybeBoundsLayer.getBounds?.();
                    if (b && b.isValid()) {
                        map.fitBounds(b.pad(0.25), {
                            animate: true,
                            duration: 0.5
                        });
                    }
                }
            });
        };
    if (!mounted) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-[380px] rounded-2xl bg-white/5"
    }, void 0, false, {
        fileName: "[project]/src/components/MapCoverage.tsx",
        lineNumber: 328,
        columnNumber: 24
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-black/10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 8
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.35
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContainer"], {
                    center: [
                        48.7,
                        19.7
                    ],
                    zoom: 8,
                    scrollWheelZoom: !isMobile,
                    style: {
                        height: `${height}px`,
                        width: "100%"
                    },
                    className: "touch-pan-x touch-pan-y",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SetupPanes, {}, void 0, false, {
                            fileName: "[project]/src/components/MapCoverage.tsx",
                            lineNumber: 340,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapAccess, {
                            onMap: setMap
                        }, void 0, false, {
                            fileName: "[project]/src/components/MapCoverage.tsx",
                            lineNumber: 341,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                            attribution: "© OpenStreetMap contributors",
                            noWrap: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/MapCoverage.tsx",
                            lineNumber: 343,
                            columnNumber: 11
                        }, this),
                        westLayer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$GeoJSON$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeoJSON"], {
                            data: westLayer,
                            style: styleWest,
                            pane: "west",
                            onEachFeature: makeOnEachFeature("west", styleWest)
                        }, void 0, false, {
                            fileName: "[project]/src/components/MapCoverage.tsx",
                            lineNumber: 345,
                            columnNumber: 25
                        }, this),
                        coveredLayer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$GeoJSON$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeoJSON"], {
                            data: coveredLayer,
                            style: styleCovered,
                            pane: "covered",
                            onEachFeature: makeOnEachFeature("covered", styleCovered)
                        }, void 0, false, {
                            fileName: "[project]/src/components/MapCoverage.tsx",
                            lineNumber: 347,
                            columnNumber: 13
                        }, this),
                        bratislavaLayer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$GeoJSON$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeoJSON"], {
                            data: bratislavaLayer,
                            style: styleNoDrone,
                            pane: "nodrone",
                            onEachFeature: makeOnEachFeature("nodrone", styleNoDrone)
                        }, void 0, false, {
                            fileName: "[project]/src/components/MapCoverage.tsx",
                            lineNumber: 350,
                            columnNumber: 13
                        }, this),
                        noDroneLayer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$GeoJSON$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeoJSON"], {
                            data: noDroneLayer,
                            style: styleNoDrone,
                            pane: "nodrone",
                            onEachFeature: makeOnEachFeature("nodrone", styleNoDrone)
                        }, void 0, false, {
                            fileName: "[project]/src/components/MapCoverage.tsx",
                            lineNumber: 353,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MapCoverage.tsx",
                    lineNumber: 333,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MapCoverage.tsx",
                lineNumber: 332,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute right-3 top-3 z-[500] flex flex-col items-end gap-2",
                children: [
                    isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setIsLegendOpen((p)=>!p),
                        className: "pointer-events-auto rounded-full bg-black/70 ring-1 ring-white/20 backdrop-blur px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-white/90 shadow-md shadow-black/40 hover:bg-black/80 transition",
                        "aria-expanded": isLegendOpen,
                        "aria-controls": "map-legend",
                        children: "Legenda"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MapCoverage.tsx",
                        lineNumber: 361,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: isLegendOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            id: "map-legend",
                            className: "pointer-events-auto mt-1 rounded-xl bg-black/60 ring-1 ring-white/15 text-white/90 backdrop-blur px-3.5 py-3 shadow-lg shadow-black/30",
                            role: "note",
                            initial: {
                                opacity: 0,
                                y: -6,
                                scale: 0.985
                            },
                            animate: {
                                opacity: 1,
                                y: 0,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                y: -5,
                                scale: 0.99
                            },
                            transition: {
                                duration: 0.2
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs uppercase tracking-wider text-white/60 mb-2",
                                    children: "Legenda"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MapCoverage.tsx",
                                    lineNumber: 383,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-1.5 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-block h-3 w-3 rounded-sm",
                                                    style: {
                                                        background: "#10b981"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MapCoverage.tsx",
                                                    lineNumber: 386,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Aktívne pokrytie"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MapCoverage.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MapCoverage.tsx",
                                            lineNumber: 385,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-block h-3 w-3 rounded-sm",
                                                    style: {
                                                        background: "#9ca3af"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MapCoverage.tsx",
                                                    lineNumber: 390,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Pokrytie v rámci možností"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MapCoverage.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MapCoverage.tsx",
                                            lineNumber: 389,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-block h-3 w-3 rounded-sm",
                                                    style: {
                                                        background: "#ef4444"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MapCoverage.tsx",
                                                    lineNumber: 394,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Bezdronové zóny"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MapCoverage.tsx",
                                                    lineNumber: 395,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MapCoverage.tsx",
                                            lineNumber: 393,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MapCoverage.tsx",
                                    lineNumber: 384,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 text-xs text-white/55",
                                    children: "Tip: Kliknite na okres pre detail."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MapCoverage.tsx",
                                    lineNumber: 398,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MapCoverage.tsx",
                            lineNumber: 374,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MapCoverage.tsx",
                        lineNumber: 372,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MapCoverage.tsx",
                lineNumber: 359,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute left-3 bottom-3 z-[520] max-w-[92vw]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "pointer-events-auto rounded-2xl bg-black/65 backdrop-blur ring-1 ring-white/15 shadow-xl shadow-black/40 px-4 py-3",
                        initial: {
                            opacity: 0,
                            y: 14,
                            scale: 0.99
                        },
                        animate: {
                            opacity: 1,
                            y: 0,
                            scale: 1
                        },
                        exit: {
                            opacity: 0,
                            y: 10,
                            scale: 0.995
                        },
                        transition: {
                            duration: 0.2
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs uppercase tracking-wider text-white/60",
                                            children: "Vybraný okres"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MapCoverage.tsx",
                                            lineNumber: 417,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-base font-semibold text-white leading-tight",
                                            children: selected.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MapCoverage.tsx",
                                            lineNumber: 418,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 text-sm text-white/80",
                                            children: kindLabel(selected.kind)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MapCoverage.tsx",
                                            lineNumber: 419,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MapCoverage.tsx",
                                    lineNumber: 416,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: clearSelected,
                                    className: "rounded-lg px-2 py-1 text-white/80 hover:text-white hover:bg-white/10 transition",
                                    "aria-label": "Zrušiť výber",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MapCoverage.tsx",
                                    lineNumber: 421,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MapCoverage.tsx",
                            lineNumber: 415,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MapCoverage.tsx",
                        lineNumber: 408,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/MapCoverage.tsx",
                    lineNumber: 406,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MapCoverage.tsx",
                lineNumber: 405,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-2 text-sm text-red-400 bg-red-400/10",
                children: [
                    "Nepodarilo sa načítať mapové dáta: ",
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MapCoverage.tsx",
                lineNumber: 435,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MapCoverage.tsx",
        lineNumber: 331,
        columnNumber: 5
    }, this);
}
_s2(MapCoverage, "6zFjhwXYdtT1jSVvaAtKswqBqX0=");
_c2 = MapCoverage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "SetupPanes");
__turbopack_context__.k.register(_c1, "MapAccess");
__turbopack_context__.k.register(_c2, "MapCoverage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MapCoverage.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/MapCoverage.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_MapCoverage_tsx_9924b4e6._.js.map