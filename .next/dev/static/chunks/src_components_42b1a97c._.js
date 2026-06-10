(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Navigbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function isActive(href, pathname) {
    const base = href.split("#")[0] || "/";
    if (base === "/") return pathname === "/";
    return pathname.startsWith(base);
}
function Navigbar() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [elevated, setElevated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const desktopLinks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Navigbar.useMemo[desktopLinks]": ()=>{
            if (pathname === "/") {
                return [
                    {
                        label: "Pokrytie",
                        href: "/#pokrytie"
                    },
                    {
                        label: "Zachránení",
                        href: "/zachraneni"
                    },
                    {
                        label: "O nás",
                        href: "/nas-tim"
                    },
                    {
                        label: "Srnčiatka",
                        href: "/srnciatka"
                    },
                    {
                        label: "Rasty",
                        href: "/rasty"
                    }
                ];
            }
            if (pathname.startsWith("/nas-tim")) {
                return [
                    {
                        label: "Pokrytie",
                        href: "/#pokrytie"
                    },
                    {
                        label: "Zachránení",
                        href: "/zachraneni"
                    },
                    {
                        label: "Fotogaléria",
                        href: "/nas-tim#fotogaleria"
                    },
                    {
                        label: "Srnčiatka",
                        href: "/srnciatka"
                    },
                    {
                        label: "Rasty",
                        href: "/rasty"
                    }
                ];
            }
            if (pathname.startsWith("/srnciatka")) {
                return [
                    {
                        label: "Pokrytie",
                        href: "/#pokrytie"
                    },
                    {
                        label: "O nás",
                        href: "/nas-tim"
                    },
                    {
                        label: "Zachránení",
                        href: "/zachraneni"
                    },
                    {
                        label: "Rasty",
                        href: "/rasty"
                    }
                ];
            }
            if (pathname.startsWith("/rasty")) {
                return [
                    {
                        label: "Pokrytie",
                        href: "/#pokrytie"
                    },
                    {
                        label: "O nás",
                        href: "/nas-tim"
                    },
                    {
                        label: "Zachránení",
                        href: "/zachraneni"
                    },
                    {
                        label: "Srnčiatka",
                        href: "/srnciatka"
                    }
                ];
            }
            if (pathname.startsWith("/zachraneni")) {
                return [
                    {
                        label: "Pokrytie",
                        href: "/#pokrytie"
                    },
                    {
                        label: "O nás",
                        href: "/nas-tim"
                    },
                    {
                        label: "Srnčiatka",
                        href: "/srnciatka"
                    },
                    {
                        label: "Rasty",
                        href: "/rasty"
                    }
                ];
            }
            return [
                {
                    label: "Pokrytie",
                    href: "/#pokrytie"
                },
                {
                    label: "Zachránení",
                    href: "/zachraneni"
                },
                {
                    label: "O nás",
                    href: "/nas-tim"
                },
                {
                    label: "Srnčiatka",
                    href: "/srnciatka"
                },
                {
                    label: "Rasty",
                    href: "/rasty"
                }
            ];
        }
    }["Navigbar.useMemo[desktopLinks]"], [
        pathname
    ]);
    const cta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Navigbar.useMemo[cta]": ()=>{
            if (pathname.startsWith("/nas-tim")) {
                return {
                    label: "Ako fungujeme",
                    href: "/nas-tim#fungovanie"
                };
            }
            if (pathname.startsWith("/srnciatka")) {
                return {
                    label: "Kontaktujte nás",
                    href: "/#kontakt"
                };
            }
            if (pathname.startsWith("/rasty")) {
                return {
                    label: "Video o Rastym",
                    href: "/rasty#video"
                };
            }
            if (pathname.startsWith("/zachraneni")) {
                return {
                    label: "Požiadať o pomoc",
                    href: "/#kontakt"
                };
            }
            return {
                label: "Ako postupovať",
                href: "/#postup"
            };
        }
    }["Navigbar.useMemo[cta]"], [
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigbar.useEffect": ()=>{
            const onScroll = {
                "Navigbar.useEffect.onScroll": ()=>setElevated((window?.scrollY || 0) > 8)
            }["Navigbar.useEffect.onScroll"];
            onScroll();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "Navigbar.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Navigbar.useEffect"];
        }
    }["Navigbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigbar.useEffect": ()=>setOpen(false)
    }["Navigbar.useEffect"], [
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigbar.useEffect": ()=>setMounted(true)
    }["Navigbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigbar.useEffect": ()=>{
            if (open) {
                const y = window.scrollY;
                document.body.style.cssText = `position:fixed;top:-${y}px;left:0;right:0;overflow:hidden;`;
            } else {
                const top = document.body.style.top;
                document.body.style.cssText = "";
                if (top) window.scrollTo(0, -parseInt(top, 10));
            }
            return ({
                "Navigbar.useEffect": ()=>{
                    const top = document.body.style.top;
                    document.body.style.cssText = "";
                    if (top) window.scrollTo(0, -parseInt(top, 10));
                }
            })["Navigbar.useEffect"];
        }
    }["Navigbar.useEffect"], [
        open
    ]);
    const handleNavClick = ()=>setOpen(false);
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: [
                    "fixed top-0 left-0 right-0 w-full z-[2147483647]",
                    "transition-colors duration-300",
                    elevated ? "bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/30 shadow-lg shadow-black/20" : "bg-black"
                ].join(" "),
                children: [
                    !elevated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navigbar.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                onClick: ()=>setOpen(false),
                                className: "flex items-center gap-3 flex-shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/ozlogo.png",
                                        alt: "OZ logo",
                                        width: 36,
                                        height: 36,
                                        className: "rounded-full",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navigbar.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold tracking-tight",
                                        children: "Hľadáme Dronom"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navigbar.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navigbar.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: [
                                    "hidden md:flex items-center gap-8 text-sm text-white/80",
                                    "md:absolute md:left-1/2 md:top-1/2 md:-translate-y-1/2",
                                    pathname === "/" ? "md:-translate-x-[calc(50%+16px)]" : "md:-translate-x-1/2"
                                ].join(" "),
                                children: desktopLinks.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: l.href,
                                        className: [
                                            "transition-colors",
                                            isActive(l.href, pathname) ? "text-white font-semibold" : "text-white/80 hover:text-white"
                                        ].join(" "),
                                        children: l.label
                                    }, l.label, false, {
                                        fileName: "[project]/src/components/Navigbar.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigbar.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:block flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: cta.href,
                                    className: "inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-semibold bg-white text-black hover:bg-emerald-400 transition-colors",
                                    children: cta.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navigbar.tsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigbar.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "md:hidden inline-flex items-center justify-center rounded-xl p-2 ring-1 ring-white/15 hover:bg-white/10 transition",
                                "aria-expanded": open,
                                "aria-label": open ? "Zavrieť menu" : "Otvoriť menu",
                                onClick: ()=>setOpen((v)=>!v),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        className: "h-5 w-5",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            d: "M6 18L18 6M6 6l12 12"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navigbar.tsx",
                                            lineNumber: 190,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            d: "M3 6h18M3 12h18M3 18h18"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navigbar.tsx",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navigbar.tsx",
                                        lineNumber: 188,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sr-only",
                                        children: "Menu"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navigbar.tsx",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navigbar.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navigbar.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navigbar.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        duration: 0.2,
                        ease: "easeOut"
                    },
                    className: "fixed inset-0 z-[2147483646] bg-[#0b0d10] flex flex-col md:hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-4 h-16 border-b border-white/8 shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    onClick: handleNavClick,
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/ozlogo.png",
                                            alt: "OZ logo",
                                            width: 36,
                                            height: 36,
                                            className: "rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navigbar.tsx",
                                            lineNumber: 214,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold tracking-tight",
                                            children: "Hľadáme Dronom"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navigbar.tsx",
                                            lineNumber: 215,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navigbar.tsx",
                                    lineNumber: 213,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setOpen(false),
                                    className: "inline-flex items-center justify-center rounded-xl p-2 ring-1 ring-white/15 hover:bg-white/10 transition",
                                    "aria-label": "Zavrieť menu",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        className: "h-5 w-5",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            d: "M6 18L18 6M6 6l12 12"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navigbar.tsx",
                                            lineNumber: 223,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navigbar.tsx",
                                        lineNumber: 222,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navigbar.tsx",
                                    lineNumber: 217,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navigbar.tsx",
                            lineNumber: 212,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex-1 flex flex-col items-center justify-center gap-1",
                            children: desktopLinks.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.05 + i * 0.06,
                                        duration: 0.4,
                                        ease: [
                                            0.16,
                                            1,
                                            0.3,
                                            1
                                        ]
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: l.href,
                                        onClick: handleNavClick,
                                        className: [
                                            "block px-8 py-3 text-3xl font-semibold transition-colors text-center",
                                            isActive(l.href, pathname) ? "text-white" : "text-white/70 hover:text-white"
                                        ].join(" "),
                                        children: l.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navigbar.tsx",
                                        lineNumber: 241,
                                        columnNumber: 19
                                    }, this)
                                }, l.label, false, {
                                    fileName: "[project]/src/components/Navigbar.tsx",
                                    lineNumber: 231,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navigbar.tsx",
                            lineNumber: 229,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 12
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: 0.25,
                                duration: 0.4,
                                ease: [
                                    0.16,
                                    1,
                                    0.3,
                                    1
                                ]
                            },
                            className: "px-6 pb-10 shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: cta.href,
                                onClick: handleNavClick,
                                className: "inline-flex w-full items-center justify-center rounded-2xl px-5 py-3.5 text-sm font-semibold bg-white text-black hover:bg-emerald-400 transition-colors",
                                children: cta.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigbar.tsx",
                                lineNumber: 262,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navigbar.tsx",
                            lineNumber: 256,
                            columnNumber: 13
                        }, this)
                    ]
                }, "mobile-menu", true, {
                    fileName: "[project]/src/components/Navigbar.tsx",
                    lineNumber: 203,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navigbar.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(content, document.body);
}
_s(Navigbar, "ryM6obliTyIrtBc/XgEEk6hccoc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navigbar;
var _c;
__turbopack_context__.k.register(_c, "Navigbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @next/next/no-img-element */ __turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ORG_IBAN = "SK06 0200 0000 0049 4368 5058";
const ORG_BIC = "SUBASKBX";
const ORG_PHONE = "+421 911 919 140";
function buildPayBySquareUrl() {
    const base = "https://api.freebysquare.sk/pay/v1/generate-png";
    const params = new URLSearchParams();
    params.set("size", "400");
    params.set("color", "1");
    params.set("transparent", "true");
    params.set("currencyCode", "EUR");
    params.set("amount", "");
    params.set("paymentNote", "Prispevok na OZ Hladame Dronom");
    params.set("iban", ORG_IBAN.replace(/\s+/g, ""));
    params.set("beneficiaryName", "Hladame Dronom");
    params.set("beneficiaryAddressLine1", "");
    params.set("beneficiaryAddressLine2", "");
    return `${base}?${params.toString()}`;
}
function Footer() {
    _s();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [qrSrc, setQrSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Footer.useState": ()=>buildPayBySquareUrl()
    }["Footer.useState"]);
    const handleCopyIban = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Footer.useCallback[handleCopyIban]": async ()=>{
            try {
                await navigator.clipboard.writeText(ORG_IBAN.replace(/\s+/g, ""));
                setCopied(true);
                setTimeout({
                    "Footer.useCallback[handleCopyIban]": ()=>setCopied(false)
                }["Footer.useCallback[handleCopyIban]"], 1300);
            } catch  {
            // ignore
            }
        }
    }["Footer.useCallback[handleCopyIban]"], []);
    const handleQrError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Footer.useCallback[handleQrError]": ()=>{
            setQrSrc("/qr/dar.svg");
        }
    }["Footer.useCallback[handleQrError]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "mt-24 bg-[rgb(18,18,18)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent"
            }, void 0, false, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full bg-white/[0.035]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-7xl px-15 py-10 md:py-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-16 lg:grid-cols-[1fr_2fr_1fr] items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold",
                                            children: "OZ Hľadáme Dronom"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/70 leading-6",
                                            children: "Pátranie po nezvestných zvieratách a lokalizovanie srnčej zveri na poliach pred začatím kosby pomocou termovíznych dronov."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 text-white/80",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEnvelope"], {
                                                    className: "shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "mailto:hladamedronom@gmail.com",
                                                    className: "hover:text-white transition",
                                                    children: "hladamedronom@gmail.com"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 text-white/80",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPhone"], {
                                                    className: "shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "tel:+421911919140",
                                                    className: "hover:text-white transition",
                                                    children: ORG_PHONE
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col md:flex-row md:justify-between md:items-start md:gap-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 text-white/80 leading-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm uppercase tracking-wider text-white/60 mb-2",
                                                    children: "Podporte nás"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Mnoho ľudí sa nás pýta, koľko táto aktivita stojí. Nie sme firma a nerobíme to pre peniaze a nikdy tak nebude! Sme tím dobrovoľníkov a v prípade, že našu aktivitu chcete podporiť, poteší nás dobrovoľný finančný dar na účet nášho združenia."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs uppercase tracking-wider text-white/60",
                                                            children: "IBAN"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.tsx",
                                                            lineNumber: 89,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1 font-mono text-sm text-white select-all break-words",
                                                            children: ORG_IBAN
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 19
                                                        }, this),
                                                        ORG_BIC && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-2 text-xs uppercase tracking-wider text-white/60",
                                                                    children: "BIC"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Footer.tsx",
                                                                    lineNumber: 95,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-mono text-sm text-white",
                                                                    children: ORG_BIC
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Footer.tsx",
                                                                    lineNumber: 96,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-5 md:mt-0 flex flex-col items-center shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-md bg-white p-2 shadow-sm transition-transform hover:scale-105",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: qrSrc,
                                                        alt: "Pay by Square QR – dobrovoľný dar pre OZ Hľadáme Dronom",
                                                        width: 200,
                                                        height: 200,
                                                        className: "h-[200px] w-[200px] object-contain",
                                                        loading: "lazy",
                                                        onError: handleQrError
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleCopyIban,
                                                            className: "rounded-md border border-white/15 px-3 py-1.5 text-xs hover:bg-white/10 transition",
                                                            children: copied ? "IBAN skopírovaný" : "Skopírovať IBAN"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: qrSrc,
                                                            download: "oz-hladame-dronom-qr.png",
                                                            className: "rounded-md border border-white/15 px-3 py-1.5 text-xs hover:bg-white/10 transition",
                                                            children: "Stiahnuť QR"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 text-center text-[10px] text-white/60",
                                                    children: [
                                                        "Nefunguje sken? Použi IBAN ručne.",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 52
                                                        }, this),
                                                        "Naskenuj priamo v aplikácii svojej banky."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-start justify-start",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm uppercase tracking-wider text-white/60",
                                            children: "Sledujte nás"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://www.facebook.com/hladamedronom/",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    "aria-label": "Facebook",
                                                    className: "group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-black/30 hover:bg-black/20 transition",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFacebook"], {
                                                        className: "text-xl text-white/80 group-hover:text-blue-200"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://www.instagram.com/hladamedronom/",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    "aria-label": "Instagram",
                                                    className: "group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-black/30 hover:bg-black/20 transition",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInstagram"], {
                                                        className: "text-xl text-white/80 group-hover:text-pink-300"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://www.youtube.com/@HladameDronom",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    "aria-label": "YouTube",
                                                    className: "group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-black/30 hover:bg-black/20 transition",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaYoutube"], {
                                                        className: "text-xl text-white/80 group-hover:text-red-500 transition-colors duration-200"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://www.youtube.com/watch?v=oELEBVXgLwU",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    "aria-label": "Zverissimo",
                                                    className: "group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-black/30 hover:bg-black/20 transition",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaYoutube"], {
                                                        className: "text-xl text-white/80 group-hover:text-yellow-500 transition-colors duration-200"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-white/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-7xl px-10 py-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/60",
                                    children: [
                                        "© ",
                                        new Date().getFullYear(),
                                        " OZ Hľadáme Dronom"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-x-4 gap-y-1 text-white/55",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/zasady-ochrany-osobnych-udajov",
                                            className: "hover:text-white/90 underline-offset-4 hover:underline transition",
                                            children: "Zásady ochrany osobných údajov (GDPR)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 189,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/cookies",
                                            className: "hover:text-white/90 underline-offset-4 hover:underline transition",
                                            children: "Cookies"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/55",
                                            children: "Vytvorené s láskou."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 203,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Footer.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(Footer, "aveXeP8A2+OhQVp034WZlb4jwqY=");
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ZachraneniList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ZachraneniList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const cases = [
    {
        name: "Lucky",
        animal: "Pyrenejský horský pes",
        location: "Šaľa",
        date: "31. 12. 2025",
        story: [
            "Fenku Lucky vystrašili hlučné silvestrovské oslavy a v zmätku sa stratila svojej rodine. Nasledujúce tri dni blúdila vonku v zime, unavená a opatrná, zatiaľ čo ju niekoľko dobrovoľníkov neprestajne hľadalo po okolitých uliciach, lúkach aj lesoch.",
            "Pátranie prebiehalo od rána do noci, pešo aj s pomocou techniky. Na tretí deň priniesol veľkú nádej dronista Tomáš, ktorému sa podarilo Lucky úspešne lokalizovať z výšky.",
            "Vďaka presným informáciám mohol okamžite zasiahnuť profesionálny odchytár pán Ľuboš, ktorý zabezpečil pokojné, bezpečné a isté odchytenie vystrašenej fenky. Lucky sa napokon vrátila domov k svojej rodine, hladná a vyčerpaná, no zdravá.",
            "Tento príbeh ukázal silu spolupráce, odhodlania a ľudskej pomoci. Všetci, ktorí sa do pátrania zapojili, dokázali, že trpezlivosť, skúsenosti a spoločné úsilie môžu zachrániť stratený život v náročných podmienkach."
        ],
        image: "/saved/lucky.webp",
        imgPos: "48%"
    },
    {
        name: "Melissa",
        animal: "Husky fenka",
        location: "Trenčín",
        date: "2. 12. 2025",
        story: [
            "V utorok 2.12.2025 sme boli požiadaní o pomoc pri hľadaní stratenej, veľmi plachej husky fenky Melissy. Po neúspešnom pešom pátraní sme večer nasadili termovízny dron a Tomáš ju už po 9 minútach lokalizoval. Napriek snahe sa ju však pre hustú hmlu a vybitú techniku nepodarilo bezpečne odchytiť.",
            "Na druhý deň pátranie pokračovalo spolu s dievčatami z Útulku Tuláčik a fenkou Yuki, na ktorú bola Melissa naviazaná. Okrem lietania s dronom tím prehľadával okolie, zanechával pachové stopy a rozvešal letáky.",
            "Rozhodujúci moment prišiel 4.12.2025, keď Tomáš počas ranného letu Melissu opäť našiel a naviedol tím presne na miesto v kríkoch. Keď prišla Yuki, Melissa okamžite vybehla za ňou a Laurou, ktorá ju bezpečne pripla na vodítko. Vďaka skvelej spolupráci a vytrvalosti sa pátranie skončilo šťastne."
        ],
        image: "/saved/melissa.webp"
    },
    {
        name: "Pongo",
        animal: "",
        location: "Horné Saliby",
        date: "13. 12. 2025",
        story: [
            "Aj 13-ročný psík Pongo je dnes opäť zdravý, v bezpečí a šťastný po boku svojich majiteľov. Na pomoc sme vyrazili do Horných Salíb, kde ho niekoľko dní intenzívne hľadali.",
            "Po príchode nášho dronistu Tomáša sa situácia rýchlo pohla správnym smerom – vďaka dronu sa podarilo Ponga v krátkom čase úspešne lokalizovať. Následne ho majitelia bezpečne odchytili a mohli si konečne vydýchnuť.",
            "Veľké poďakovanie patrí aj odchytárovi Ľubošovi, ktorý ešte pred naším príchodom aktívne pomáhal pri pátraní a celý čas bol pripravený pomôcť. Práve spolupráca ľudí, ktorí majú srdce na správnom mieste, často rozhoduje o šťastnom konci. Sme radi, že aj tento príbeh dopadol dobre a Pongo sa mohol vrátiť domov."
        ],
        image: "/saved/pongo.webp",
        imgPos: "50% 35%"
    },
    {
        name: "Donna",
        animal: "Nemecký ovčiak",
        location: "Prašice, Závada, Podhradie",
        date: "4. 6. 2026",
        story: [
            "V nočných hodinách sa podarilo nášmu pilotovi úspešne lokalizovať stratenú Donnu. Vďaka skúsenostiam dronistu Tomáša a využitiu špičkovej dronovej techniky sa podarilo psíka nájsť v hustom lese, kde sa nachádzala po niekoľkých dňoch túlania.",
            "Majitelia ju dovtedy neúnavne hľadali vo dne aj v noci a nádej na šťastný koniec postupne slábla.",
            "Práve spojenie modernej technológie, kvalitného vybavenia a šikovnosti pilota však opäť ukázalo svoju silu. Aj v náročných podmienkach a počas nočných hodín dokázal dron presne lokalizovať miesto, kde sa Donna nachádzala.",
            "Sme veľmi radi, že sa tento príbeh skončil šťastne a Donna sa mohla bezpečne vrátiť späť k svojej rodine."
        ],
        image: "/saved/donna.webp"
    },
    {
        name: "Brit",
        animal: "Nemecký ovčiak",
        location: "Trenčín",
        date: "20. 4. 2025",
        story: [
            "Pri pomoci strateným zvieratám nie je naším jediným pomocníkom dron. Veľmi dôležitú úlohu zohráva aj čítačka čipov, vďaka ktorej sa nám podarilo pomôcť psíkovi menom Brit nájsť cestu späť domov.",
            "Brit sa túlal po lúke v obci, kde býva náš predseda, a našťastie si ho všimli ľudia, ktorí vedeli, že disponujeme čítačkou čipov. Okamžite nás kontaktovali a my sme bez váhania vyrazili na miesto.",
            "Po príchode sme psíkovi skontrolovali čip, vďaka ktorému sa nám podarilo rýchlo dohľadať jeho majiteľa. Následne sme Brita bezpečne odviezli späť domov, kde ho už netrpezlivo očakávali.",
            "Aj takéto situácie nám potvrdzujú, že moderné vybavenie a ochota pomáhať môžu výrazne skrátiť čas odlúčenia medzi zvieratkom a jeho rodinou."
        ],
        image: "/saved/brit.webp",
        imgPos: "1%"
    },
    {
        name: "Elvis",
        animal: "Boston teriér",
        location: "Považská Bystrica",
        date: "23. 2. 2026",
        story: [
            "Pri pátraní po stratenom bostonskom teriérovi Elvisovi sme opäť vyrazili na pomoc do Považskej Bystrice. Psík sa stratil ráno a jeho majitelia ho celý deň neúspešne hľadali v okolí.",
            "Vo večerných hodinách sa do pátrania zapojil aj náš dronista Tomáš, ktorý pomocou dronu prehľadával terén z výšky a snažil sa zachytiť akýkoľvek pohyb.",
            "Vďaka skúsenostiam pilota a modernej technológii sa podarilo Elvisa úspešne lokalizovať. Tomáš následne z oblohy navigoval majiteľov priamo k miestu, kde sa psík nachádzal, čo výrazne pomohlo pri jeho bezpečnom odchyte.",
            "Po náročnom dni sa tak celý príbeh skončil šťastne a Elvis sa mohol ešte v ten večer vrátiť späť domov k svojej rodine."
        ],
        image: "/saved/elvis.webp",
        imgPos: "40%"
    },
    {
        name: "Thessa",
        animal: "",
        location: "Gbely",
        date: "12. 11. 2025",
        story: [
            "Adoptovaná fenka Thessa nešťastne ušla svojej novej majiteľke a dva dni blúdila v neznámom prostredí. Počas pátrania sa do akcie zapojil aj náš pilot Tomáš, ktorému sa ju podarilo nájsť za necelé dve hodiny.",
            "Veľkú úlohu zohrala spolupráca dobrovoľníkov a najmä pán z neďalekého bufetu, ktorý si Thessu všimol a pilotovi poskytol dôležité informácie o mieste jej posledného pohybu.",
            "Vďaka rýchlej koordinácii a využitiu dronu sa podarilo fenku úspešne lokalizovať. Thessu následne bezpečne odchytili jej opatrovateľky z útulku a bola vrátená späť do opatery útulku v Novom Meste nad Váhom.",
            " Aj tento príbeh ukázal, aká dôležitá je spolupráca ľudí a rýchla reakcia pri hľadaní stratených zvierat."
        ],
        image: "/saved/thessa.webp"
    },
    {
        name: "Tea",
        animal: "Čivava",
        location: "Topoľčany",
        date: "2. 1. 2025",
        story: [
            "Boli sme požiadaní o pomoc pri hľadaní fenky čivavy, ktorá sa stratila v obci Nemčice pri Topoľčanoch a bola nezvestná už dva dni. Po príchode z Trenčína sme si od majiteľov prevzali informácie o jej poslednom pohybe a okamžite začali pátrať v okolí posledného videnia.",
            "Už po niekoľkých minútach sa nám podarilo fenku lokalizovať približne 400 metrov od našej pozície v otvorenom poli. Nález sme ihneď oznámili majiteľom a navigovali ich na miesto. Keďže bola stále plná energie a v pohybe, neustále sme sledovali jej trasu, aby sme nestratili kontakt.",
            "Po úspešnom odchyte absolvovala veterinárnu kontrolu a následne sa vrátila do bezpečia domova. Sme radi, že sme mohli byť súčasťou ďalšieho šťastného príbehu a priniesť majiteľom obrovskú radosť z návratu ich milovaného člena rodiny."
        ],
        image: "/gallery/gal01.webp"
    },
    {
        name: "Ruby",
        animal: "",
        location: "Čachtice",
        date: "22. 2. 2025",
        story: [
            "V nočných hodinách bol náš dronista Tomáš oslovený majiteľmi so žiadosťou o pomoc pri hľadaní stratenej fenky Ruby. Krátko po prijatí výzvy vyrazil na miesto a až do skorých ranných hodín prebiehalo intenzívne pátranie. Napriek veľkej snahe sa Ruby počas noci nepodarilo nájsť, preto sa v hľadaní pokračovalo opäť po siedmej hodine ráno.",
            "Po výmene batérie a presune na ďalšiu lokalitu prišiel nečakaný zlom. Ešte pred plánovaným vzletom si Tomáš všimol v blízkosti pohybujúceho sa psíka s červeným srdiečkom na obojku a dlhou oranžovou vôdzkou. Po chvíli bolo jasné, že ide o hľadanú Ruby. Fenka prišla na privolanie a následne bola bezpečne odovzdaná svojim šťastným majiteľom.",
            "Pre Tomáša išlo o prvú úspešne ukončenú záchrannú aktivitu. Veľmi si vážime jeho okamžitú reakciu, nočný výjazd aj ranné pokračovanie v pátraní, ktoré sa napokon skončilo tým najkrajším spôsobom."
        ],
        image: "/gallery/gal02.webp"
    },
    {
        name: "Dvaja psíkovia",
        animal: "Husky",
        location: "",
        date: "12. 3. 2025",
        story: [
            "Vďaka výbornej spolupráci a ochote pomôcť sa podarilo úspešne ukončiť ďalšie pátranie po stratených psíkoch. Na základe informácií od miestnych poľovníkov, ktorí poskytli dôležité poznatky o pohybe zvierat v oblasti, bol náš pilot navedený na správne miesto.",
            "Po preverení označenej lokality sa podarilo lokalizovať dvoch psíkov plemena husky, ktorí boli mimo domova. Následne boli bezpečne odovzdaní svojej majiteľke, ktorá ich mohla opäť vziať do náručia.",
            "Tento prípad je ďalším dôkazom toho, aký význam má spolupráca medzi ľuďmi v teréne. Každá informácia môže byť rozhodujúca a práve vďaka všímavosti poľovníkov a rýchlej reakcii nášho tímu sa podarilo dosiahnuť šťastný koniec."
        ],
        image: "/gallery/gal03.webp"
    },
    {
        name: "Thor",
        animal: "",
        location: "Žilina",
        date: "2. 4. 2025",
        story: [
            "S veľkou radosťou prinášame správu o ďalšom úspešne ukončenom pátraní. Po niekoľkých dňoch hľadania sa dnes podarilo nájsť psíka Thora, ktorý sa pohyboval v okolí obcí Turie a Višňové.",
            "Náš dronista Tomáš vyrazil už v ranných hodinách na miesto, kde bol naposledy hlásený jeho výskyt. Vďaka aktuálnym informáciám o pohybe psíka v okolí obchodného centra Metro v Žiline sa mu podarilo Thora lokalizovať a následne presne naviesť majiteľa na miesto nálezu.",
            "Najkrajším momentom celého pátrania bolo ich opätovné stretnutie. Práve pohľad na šťastné zvítanie psíka s majiteľom je pre nás najväčšou odmenou a dôvodom, prečo túto činnosť robíme.",
            "Ďakujeme všetkým, ktorí poskytovali informácie o pohybe Thora, a tiež pánovi Michalovi, ktorý ho tri dni neúnavne hľadal. Práve vďaka spoločnému úsiliu sa toto pátranie skončilo šťastným návratom domov."
        ],
        image: "/gallery/gal04.webp",
        zoom: "50%",
        imgPos: "50% 30%"
    },
    {
        name: "Býci",
        animal: "",
        location: "Galanta",
        date: "Dlhodobo hľadaní",
        story: [
            "Aj napriek náročným podmienkam a vysokým letným teplotám sa podarilo úspešne ukončiť pátranie po dlhodobo hľadaných býkoch. Náš dronista Jakub V. počas monitorovania terénu lokalizoval zvieratá, po ktorých sa pátralo už dlhší čas.",
            "Na aktivite sa podieľalo viacero ľudí, ktorí spojili svoje sily s cieľom bezpečne nájsť a zabezpečiť hľadané zvieratá. Významnú úlohu zohrali aj jazdci na koňoch, ktorí po lokalizácii býkov pomohli s ich odchytom v náročnom teréne.",
            "Práve spojenie moderných technológií, skúseností ľudí v teréne a vzájomnej spolupráce bolo kľúčom k úspešnému výsledku. Ďakujeme všetkým zúčastneným za ich čas, nasadenie a ochotu pomôcť. Vďaka spoločnému úsiliu sa podarilo túto náročnú aktivitu doviesť do úspešného konca."
        ],
        image: "/gallery/gal06.webp",
        zoom: "50%",
        imgPos: "50% 30%"
    }
];
const variants = {
    enter: (dir)=>({
            opacity: 0,
            x: dir * 48
        }),
    center: {
        opacity: 1,
        x: 0
    },
    exit: (dir)=>({
            opacity: 0,
            x: dir * -48
        })
};
function ZachraneniList() {
    _s();
    const [idx, setIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [dir, setDir] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const go = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ZachraneniList.useCallback[go]": (next)=>{
            if (next < 0 || next >= cases.length) return;
            setDir(next > idx ? 1 : -1);
            setIdx(next);
        }
    }["ZachraneniList.useCallback[go]"], [
        idx
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ZachraneniList.useEffect": ()=>{
            const onKey = {
                "ZachraneniList.useEffect.onKey": (e)=>{
                    if (e.key === "ArrowRight") go(idx + 1);
                    if (e.key === "ArrowLeft") go(idx - 1);
                }
            }["ZachraneniList.useEffect.onKey"];
            window.addEventListener("keydown", onKey);
            return ({
                "ZachraneniList.useEffect": ()=>window.removeEventListener("keydown", onKey)
            })["ZachraneniList.useEffect"];
        }
    }["ZachraneniList.useEffect"], [
        idx,
        go
    ]);
    const c = cases[idx];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-5xl px-6 pt-8 pb-28",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "text-center mb-8",
                initial: {
                    opacity: 0,
                    y: 12
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.55,
                    ease: [
                        0.16,
                        1,
                        0.3,
                        1
                    ]
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-5xl md:text-6xl font-bold tracking-tight",
                    children: "Zachránení"
                }, void 0, false, {
                    fileName: "[project]/src/components/ZachraneniList.tsx",
                    lineNumber: 219,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ZachraneniList.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex md:hidden items-center justify-between mb-6 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>go(idx - 1),
                        disabled: idx === 0,
                        className: "flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-medium border border-white/15 hover:border-white/35 hover:bg-white/5 transition-all disabled:opacity-25 disabled:pointer-events-none cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 16 16",
                                className: "w-4 h-4",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "1.8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M10 12L6 8l4-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ZachraneniList.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ZachraneniList.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this),
                            "Predošlé"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ZachraneniList.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-white/35 tabular-nums font-medium",
                        children: [
                            idx + 1,
                            " / ",
                            cases.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ZachraneniList.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>go(idx + 1),
                        disabled: idx === cases.length - 1,
                        className: "flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-medium border border-white/15 hover:border-white/35 hover:bg-white/5 transition-all disabled:opacity-25 disabled:pointer-events-none cursor-pointer",
                        children: [
                            "Ďalšie",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 16 16",
                                className: "w-4 h-4",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "1.8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M6 4l4 4-4 4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ZachraneniList.tsx",
                                    lineNumber: 244,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ZachraneniList.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ZachraneniList.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ZachraneniList.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    custom: dir,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        custom: dir,
                        variants: variants,
                        initial: "enter",
                        animate: "center",
                        exit: "exit",
                        transition: {
                            duration: 0.38,
                            ease: [
                                0.16,
                                1,
                                0.3,
                                1
                            ]
                        },
                        className: "flex flex-col md:flex-row gap-10 md:gap-12 items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full aspect-[4/3] md:w-[44%] md:aspect-[3/4] rounded-2xl overflow-hidden shrink-0 bg-white/5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0",
                                    style: c.zoom ? {
                                        transform: `scale(${1 + parseInt(c.zoom) / 100})`
                                    } : undefined,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: c.image,
                                        alt: c.name,
                                        fill: true,
                                        sizes: "(max-width: 768px) 100vw, 44vw",
                                        className: "object-cover",
                                        style: {
                                            objectPosition: c.imgPos ?? "center"
                                        },
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ZachraneniList.tsx",
                                        lineNumber: 268,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ZachraneniList.tsx",
                                    lineNumber: 264,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ZachraneniList.tsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0 flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/30 text-sm shrink-0",
                                        children: [
                                            c.date,
                                            " · ",
                                            c.location
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ZachraneniList.tsx",
                                        lineNumber: 282,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mt-2 text-4xl md:text-5xl font-bold tracking-tight leading-none shrink-0",
                                        children: c.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ZachraneniList.tsx",
                                        lineNumber: 285,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-white/35 text-sm shrink-0",
                                        children: c.animal
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ZachraneniList.tsx",
                                        lineNumber: 288,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 space-y-4 text-white/65 text-[15px] leading-[1.85]",
                                        children: c.story.map((paragraph, pi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: paragraph
                                            }, pi, false, {
                                                fileName: "[project]/src/components/ZachraneniList.tsx",
                                                lineNumber: 292,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ZachraneniList.tsx",
                                        lineNumber: 290,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ZachraneniList.tsx",
                                lineNumber: 281,
                                columnNumber: 13
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/src/components/ZachraneniList.tsx",
                        lineNumber: 252,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ZachraneniList.tsx",
                    lineNumber: 251,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ZachraneniList.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-14 hidden md:flex items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>go(idx - 1),
                        disabled: idx === 0,
                        className: "flex items-center gap-2.5 rounded-2xl px-5 py-3 text-sm font-medium border border-white/15 hover:border-white/35 hover:bg-white/5 transition-all disabled:opacity-25 disabled:pointer-events-none cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 16 16",
                                className: "w-4 h-4",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "1.8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M10 12L6 8l4-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ZachraneniList.tsx",
                                    lineNumber: 308,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ZachraneniList.tsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, this),
                            "Predošlé"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ZachraneniList.tsx",
                        lineNumber: 302,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: cases.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>go(i),
                                className: [
                                    "cursor-pointer rounded-full transition-all duration-300",
                                    i === idx ? "w-5 h-2 bg-white" : "w-2 h-2 bg-white/20 hover:bg-white/45"
                                ].join(" "),
                                "aria-label": `Príbeh ${i + 1}`
                            }, i, false, {
                                fileName: "[project]/src/components/ZachraneniList.tsx",
                                lineNumber: 315,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ZachraneniList.tsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>go(idx + 1),
                        disabled: idx === cases.length - 1,
                        className: "flex items-center gap-2.5 rounded-2xl px-5 py-3 text-sm font-medium border border-white/15 hover:border-white/35 hover:bg-white/5 transition-all disabled:opacity-25 disabled:pointer-events-none cursor-pointer",
                        children: [
                            "Ďalšie",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 16 16",
                                className: "w-4 h-4",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "1.8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M6 4l4 4-4 4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ZachraneniList.tsx",
                                    lineNumber: 336,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ZachraneniList.tsx",
                                lineNumber: 335,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ZachraneniList.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ZachraneniList.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ZachraneniList.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
_s(ZachraneniList, "LxJC2MKMFh3AXPeFkoJICCLhKBU=");
_c = ZachraneniList;
var _c;
__turbopack_context__.k.register(_c, "ZachraneniList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_42b1a97c._.js.map