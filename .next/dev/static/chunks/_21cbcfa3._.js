(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/TeamGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TeamGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function TeamGrid() {
    _s();
    var _s1 = __turbopack_context__.k.signature();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [winW, setWinW] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : window.innerWidth);
    const [hasInteracted, setHasInteracted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeamGrid.useEffect": ()=>{
            if (hasInteracted) return;
            const interval = setInterval({
                "TeamGrid.useEffect.interval": ()=>{
                    setDirection(1);
                    setActive({
                        "TeamGrid.useEffect.interval": (i)=>wrap(i + 1, members.length)
                    }["TeamGrid.useEffect.interval"]);
                }
            }["TeamGrid.useEffect.interval"], 10000);
            return ({
                "TeamGrid.useEffect": ()=>clearInterval(interval)
            })["TeamGrid.useEffect"];
        }
    }["TeamGrid.useEffect"], [
        hasInteracted
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeamGrid.useEffect": ()=>{
            const onR = {
                "TeamGrid.useEffect.onR": ()=>setWinW(window.innerWidth)
            }["TeamGrid.useEffect.onR"];
            window.addEventListener("resize", onR, {
                passive: true
            });
            return ({
                "TeamGrid.useEffect": ()=>window.removeEventListener("resize", onR)
            })["TeamGrid.useEffect"];
        }
    }["TeamGrid.useEffect"], []);
    // --- DESKTOP KOMPONENT (Tu je hlavná zmena pre plynulosť) ---
    const Desktop = ({ winW })=>{
        _s1();
        const ACTIVE_W = 900;
        const SIDE_W = 260;
        const SAFE_GAP = 40;
        const SIDE_GAP = 18;
        const CANVAS_H = 680;
        const positions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
            "TeamGrid.Desktop.useMemo[positions]": ()=>{
                const half = winW / 2;
                const margin = 16;
                const leftEdgeCenter = -half + margin + SIDE_W / 2;
                const rightEdgeCenter = half - margin - SIDE_W / 2;
                const leftInner = Math.min(leftEdgeCenter + SIDE_W + SIDE_GAP, -(ACTIVE_W / 2) - SAFE_GAP - SIDE_W / 2);
                const rightInner = Math.max(rightEdgeCenter - SIDE_W - SIDE_GAP, ACTIVE_W / 2 + SAFE_GAP + SIDE_W / 2);
                return {
                    "-2": leftEdgeCenter,
                    "-1": leftInner,
                    "0": 0,
                    "1": rightInner,
                    "2": rightEdgeCenter
                };
            }
        }["TeamGrid.Desktop.useMemo[positions]"], [
            winW
        ]);
        const sideCount = winW >= 1024 ? 2 : 1;
        const getDelta = (i)=>{
            const right = wrap(i - active, members.length);
            const left = right - members.length;
            return Math.abs(left) < right ? left : right;
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "hidden md:block relative w-screen overflow-hidden left-1/2 -translate-x-1/2",
            style: {
                height: CANVAS_H
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-y-0 left-0 z-50 flex items-center pl-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setDirection(-1);
                            setActive((i)=>wrap(i - 1, members.length));
                            setHasInteracted(true);
                        },
                        className: "h-12 w-12 rounded-full ring-1 ring-white/20 bg-black/50 hover:bg-black/70 transition grid place-items-center",
                        children: "←"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TeamGrid.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/TeamGrid.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-y-0 right-0 z-50 flex items-center pr-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setDirection(1);
                            setActive((i)=>wrap(i + 1, members.length));
                            setHasInteracted(true);
                        },
                        className: "h-12 w-12 rounded-full ring-1 ring-white/20 bg-black/50 hover:bg-black/70 transition grid place-items-center",
                        children: "→"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TeamGrid.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/TeamGrid.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mx-auto w-full h-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutGroup"], {
                        children: members.map((m, i)=>{
                            const d = getDelta(i);
                            if (Math.abs(d) > sideCount) return null;
                            const isActive = d === 0;
                            const x = positions[d.toString()] || 0;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
                                layoutId: m.name,
                                initial: false,
                                animate: {
                                    x,
                                    scale: isActive ? 1 : 0.92,
                                    opacity: isActive ? 1 : 0.6,
                                    zIndex: isActive ? 60 : 30
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 150,
                                    damping: 25,
                                    mass: 1
                                },
                                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform cursor-pointer",
                                style: {
                                    width: isActive ? ACTIVE_W : SIDE_W,
                                    maxWidth: "92vw"
                                },
                                onClick: ()=>{
                                    if (!isActive) {
                                        setDirection(d);
                                        setActive(i);
                                        setHasInteracted(true);
                                    }
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl overflow-hidden bg-white/[0.04] shadow-2xl shadow-black/40 ring-1 ring-white/15 h-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: isActive ? "grid md:grid-cols-2 h-full" : "flex flex-col h-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                layout: true,
                                                className: `relative bg-black/40 ${isActive ? 'h-[560px]' : 'h-[320px]'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: m.img,
                                                    alt: m.name,
                                                    fill: true,
                                                    style: {
                                                        objectFit: "cover",
                                                        objectPosition: m.imgPos ?? "center"
                                                    },
                                                    sizes: isActive ? "500px" : "260px",
                                                    className: `transition-all duration-700 ${!isActive ? 'grayscale' : ''}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TeamGrid.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TeamGrid.tsx",
                                                lineNumber: 96,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                layout: true,
                                                className: "p-8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                    mode: "wait",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        initial: {
                                                            opacity: 0
                                                        },
                                                        animate: {
                                                            opacity: 1
                                                        },
                                                        exit: {
                                                            opacity: 0
                                                        },
                                                        transition: {
                                                            duration: 0.2
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: `${isActive ? 'text-3xl' : 'text-lg'} font-semibold transition-all`,
                                                                children: m.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/TeamGrid.tsx",
                                                                lineNumber: 117,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-white/60 mt-1",
                                                                children: m.role
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/TeamGrid.tsx",
                                                                lineNumber: 118,
                                                                columnNumber: 29
                                                            }, this),
                                                            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                                                initial: {
                                                                    opacity: 0,
                                                                    y: 10
                                                                },
                                                                animate: {
                                                                    opacity: 1,
                                                                    y: 0
                                                                },
                                                                className: "mt-4 text-white/80 leading-7",
                                                                children: m.bio
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/TeamGrid.tsx",
                                                                lineNumber: 121,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, isActive ? "active" : "inactive", true, {
                                                        fileName: "[project]/src/components/TeamGrid.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TeamGrid.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TeamGrid.tsx",
                                                lineNumber: 108,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TeamGrid.tsx",
                                        lineNumber: 93,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TeamGrid.tsx",
                                    lineNumber: 92,
                                    columnNumber: 19
                                }, this)
                            }, m.name, false, {
                                fileName: "[project]/src/components/TeamGrid.tsx",
                                lineNumber: 77,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/TeamGrid.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/TeamGrid.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TeamGrid.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this);
    };
    _s1(Desktop, "I+b6tccrQaP/02ry3fdPeTMKx2g=");
    // Mobile verzia (nechaná podľa tvojho dizajnu)
    const Mobile = ()=>{};
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Mobile, {}, void 0, false, {
                fileName: "[project]/src/components/TeamGrid.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Desktop, {
                winW: winW
            }, void 0, false, {
                fileName: "[project]/src/components/TeamGrid.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TeamGrid.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
_s(TeamGrid, "2V7rMZ0OWgXNnYbsQelm5Nya7MA=");
_c = TeamGrid;
function wrap(i, len) {
    return (i % len + len) % len;
}
var _c;
__turbopack_context__.k.register(_c, "TeamGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TeamGrid.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/TeamGrid.tsx [app-client] (ecmascript)"));
}),
"[project]/node_modules/framer-motion/dist/es/context/DeprecatedLayoutGroupContext.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeprecatedLayoutGroupContext",
    ()=>DeprecatedLayoutGroupContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
/**
 * Note: Still used by components generated by old versions of Framer
 *
 * @deprecated
 */ const DeprecatedLayoutGroupContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
;
}),
"[project]/node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsMounted",
    ()=>useIsMounted
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs [app-client] (ecmascript)");
"use client";
;
;
function useIsMounted() {
    const isMounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useIsMounted.useIsomorphicLayoutEffect": ()=>{
            isMounted.current = true;
            return ({
                "useIsMounted.useIsomorphicLayoutEffect": ()=>{
                    isMounted.current = false;
                }
            })["useIsMounted.useIsomorphicLayoutEffect"];
        }
    }["useIsMounted.useIsomorphicLayoutEffect"], []);
    return isMounted;
}
;
}),
"[project]/node_modules/framer-motion/dist/es/utils/use-force-update.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useForceUpdate",
    ()=>useForceUpdate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$is$2d$mounted$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function useForceUpdate() {
    const isMounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$is$2d$mounted$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMounted"])();
    const [forcedRenderCount, setForcedRenderCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const forceRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useForceUpdate.useCallback[forceRender]": ()=>{
            isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
        }
    }["useForceUpdate.useCallback[forceRender]"], [
        forcedRenderCount
    ]);
    /**
     * Defer this to the end of the next animation frame in case there are multiple
     * synchronous calls.
     */ const deferredForceRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useForceUpdate.useCallback[deferredForceRender]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].postRender(forceRender)
    }["useForceUpdate.useCallback[deferredForceRender]"], [
        forceRender
    ]);
    return [
        deferredForceRender,
        forcedRenderCount
    ];
}
;
}),
"[project]/node_modules/framer-motion/dist/es/projection/node/group.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nodeGroup",
    ()=>nodeGroup
]);
const notify = (node)=>!node.isLayoutDirty && node.willUpdate(false);
function nodeGroup() {
    const nodes = new Set();
    const subscriptions = new WeakMap();
    const dirtyAll = ()=>nodes.forEach(notify);
    return {
        add: (node)=>{
            nodes.add(node);
            subscriptions.set(node, node.addEventListener("willUpdate", dirtyAll));
        },
        remove: (node)=>{
            nodes.delete(node);
            const unsubscribe = subscriptions.get(node);
            if (unsubscribe) {
                unsubscribe();
                subscriptions.delete(node);
            }
            dirtyAll();
        },
        dirty: dirtyAll
    };
}
;
}),
"[project]/node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LayoutGroup",
    ()=>LayoutGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$LayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$DeprecatedLayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/context/DeprecatedLayoutGroupContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$force$2d$update$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-force-update.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$node$2f$group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/projection/node/group.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const shouldInheritGroup = (inherit)=>inherit === true;
const shouldInheritId = (inherit)=>shouldInheritGroup(inherit === true) || inherit === "id";
const LayoutGroup = ({ children, id, inherit = true })=>{
    const layoutGroupContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$LayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutGroupContext"]);
    const deprecatedLayoutGroupContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$DeprecatedLayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeprecatedLayoutGroupContext"]);
    const [forceRender, key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$force$2d$update$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForceUpdate"])();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const upstreamId = layoutGroupContext.id || deprecatedLayoutGroupContext;
    if (context.current === null) {
        if (shouldInheritId(inherit) && upstreamId) {
            id = id ? upstreamId + "-" + id : upstreamId;
        }
        context.current = {
            id,
            group: shouldInheritGroup(inherit) ? layoutGroupContext.group || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$node$2f$group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodeGroup"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$node$2f$group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodeGroup"])()
        };
    }
    const memoizedContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LayoutGroup.useMemo[memoizedContext]": ()=>({
                ...context.current,
                forceRender
            })
    }["LayoutGroup.useMemo[memoizedContext]"], [
        key
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$LayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutGroupContext"].Provider, {
        value: memoizedContext,
        children: children
    });
};
;
}),
]);

//# sourceMappingURL=_21cbcfa3._.js.map