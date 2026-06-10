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
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
const members = [
    {
        name: "Jakub",
        role: "Predseda združenia",
        img: "/team/01.webp",
        bio: "Čaute, ja som Jakub a som predseda občianskeho združenia OZ Hľadáme Dronom. Spolu s mojou partnerkou a kamarátom Romanom sme založili združenie, ktoré pomáha pri hľadaní nezvestných zvierat pomocou termovíznych dronov. Okrem pátrania sa venujeme aj lokalizovaniu srnčej zvery na poliach pred kosbou, o čo sa starajú všetci naši piloti v sezóne. Veľmi si vážim každého dobrovoľníka, ktorý venuje svoj čas a energiu na pomoc majiteľom stratených zvierat. Mojím cieľom je rozšíriť naše aktivity do všetkých regiónov Slovenska a vybudovať silnú komunitu ľudí, ktorým záleží na zvieratách.",
        imgPos: "center"
    },
    {
        name: "Roman",
        role: "Člen združenia",
        img: "/team/02.webp",
        bio: "Roman je jeden zo zakladateľov a aktívnych členov združenia. Má na starosti najmä technickú stránku fungovania, ktorá začína od nastavovania sociálnych sietí a potrebných online nástrojov až po vývoj a prevádzku tejto webovej stránky, na ktorú sa práve pozeráte. V združení sa zameriava na to, aby všetko fungovalo moderne. Jeho cieľom je podieľať sa na stabilnom a správnom chode združenia, pomáhať rozvíjať naše projekty a hľadať nové riešenia, ktoré posunú naše fungovanie o krok ďalej. Zároveň chce postupne budovať silnú online prítomnosť, ktorá priblíži naše fungovanie verejnosti a posilní dôveru v to, čo robíme.",
        imgPos: "center"
    },
    {
        name: "Simona",
        role: "Podpredsedníčka združenia",
        img: "/team/03.webp",
        bio: "Simona je jednou zo zakladateliek združenia a pochádza z Trenčína. Stará sa o komunikáciu s majiteľmi stratených zvierat a spravuje naše sociálne siete, kde s citom zdieľa ich príbehy a prináša aktuálne informácie o našej činnosti. Je neoddeliteľnou súčasťou tímu, pretože svojimi nápadmi, energiou a zodpovedným prístupom pomáha združeniu napredovať. Vždy je ochotná pomôcť, prináša pozitívnu atmosféru a motivuje ostatných svojím odhodlaním a úprimným vzťahom k zvieratám.",
        imgPos: "center 35%"
    },
    {
        name: "Tomáš",
        role: "Dronista",
        img: "/team/04.webp",
        bio: "Tomáš pochádza z Nového Mesta nad Váhom. Je profesionálny, špičkový pilot, ktorý sa zaujíma o drony od roku 2014 a je veľkým leteckým fanúšikom. Zabezpečuje časť západného Slovenska v širokom okolí svojho bydliska a pre naše združenie lieta od začiatku roka 2025 a za sebou má desiatky letov a niekoľko úspešných nájdení stratených zvierat. Na podporné aktivity z oblohy využíva špičkový termovízny dron DJI MATRICE 4T. Pre naše združenie je veľkým prínosom aj v rámci poradenstva v oblasti dronov a technológií potrebných na účely združenia.",
        imgPos: "center"
    },
    {
        name: "Marek",
        role: "Dronista",
        img: "/team/05.webp",
        bio: "Marek je rodákom z Novej Dubnice a jeho \"revírom\" pátracích aktivít je široké okolie jeho bydliska smerujúce vyššie na sever, vďaka čomu dokáže prísť na pomoc napríklad aj do Považskej Bystrice. Je špičkový pilot, ktorý dokonca s dronmi podniká a venuje sa 3D skenovaniu, mapovaniu a ďalším aktivitám v spoločnosti MACH-TECH. Je veľkým prínosom pre združenie a majiteľov stratených zvierat a najbližšie ho čaká veľa aktivít spojených s lokalizovaním srnčej zveri na poliach pred začatím kosby, na ktoré využíva výhradne svoju techniku a materiál a to presne DJI MATRICE 4T s príslušenstvom. Marek lieta pre združenie od leta 2025.",
        imgPos: "center",
        imgPosMobile: "center 30%"
    },
    {
        name: "Juraj",
        role: "Dronista",
        img: "/team/06.webp",
        bio: "Juraj pochádza z Veľkých Loviec a býva v obci Alekšince a je najnovším dobrovoľníkom a zabezpečuje širokú oblasť jeho bydliska smerujúcu na Trnavu a južnejšie od Nitry. Juraj je v našom tíme od novembra 2025 a je pilotom termovízneho dronu DJI MAVIC 3T. Juraj bude mať na starosť podporu z oblohy za účelom pátrania po nezvestných zvieratách a lokalizovanie srnčej zveri na poliach pred začatím kosby, rovnako ako ostatní piloti.",
        imgPos: "center top"
    }
];
function wrap(i, len) {
    return (i % len + len) % len;
}
const ACTIVE_W = 900;
const SIDE_W = 260;
const SAFE_GAP = 40;
const SIDE_GAP = 18;
const CANVAS_H = 680;
function MobileView({ active, setActive, onInteract }) {
    _s();
    const startX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const next = ()=>{
        onInteract();
        setActive((i)=>wrap(i + 1, members.length));
    };
    const prev = ()=>{
        onInteract();
        setActive((i)=>wrap(i - 1, members.length));
    };
    const onTouchStart = (e)=>{
        startX.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e)=>{
        if (startX.current == null) return;
        const dx = e.changedTouches[0].clientX - startX.current;
        startX.current = null;
        if (Math.abs(dx) > 40) {
            if (dx < 0) next();
            else prev();
        }
    };
    const m = members[active];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "md:hidden px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl overflow-hidden bg-white/[0.04] ring-1 ring-white/15 shadow-2xl shadow-black/40",
            onTouchStart: onTouchStart,
            onTouchEnd: onTouchEnd,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full aspect-[4/5] bg-black/40",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: m.img,
                        alt: m.name,
                        fill: true,
                        sizes: "100vw",
                        priority: true,
                        style: {
                            objectFit: "cover",
                            objectPosition: m.imgPosMobile ?? m.imgPos ?? "center"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/TeamGrid.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/TeamGrid.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-semibold",
                            children: m.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/TeamGrid.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/60 mt-1",
                            children: m.role
                        }, void 0, false, {
                            fileName: "[project]/src/components/TeamGrid.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-white/80 leading-7",
                            children: m.bio
                        }, void 0, false, {
                            fileName: "[project]/src/components/TeamGrid.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 flex items-center justify-center gap-2",
                            children: members.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        onInteract();
                                        setActive(i);
                                    },
                                    className: `cursor-pointer h-2 rounded-full transition-all ${i === active ? "w-6 bg-white" : "w-2 bg-white/35 hover:bg-white/55"}`,
                                    "aria-label": `Zvoliť ${i + 1}`
                                }, i, false, {
                                    fileName: "[project]/src/components/TeamGrid.tsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/TeamGrid.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TeamGrid.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TeamGrid.tsx",
            lineNumber: 113,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/TeamGrid.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
_s(MobileView, "OBAcJArbm2d1R/3X1xJDTyyiYXc=");
_c = MobileView;
function DesktopView({ active, setActive, onInteract, winW }) {
    _s1();
    const next = ()=>{
        onInteract();
        setActive((i)=>wrap(i + 1, members.length));
    };
    const prev = ()=>{
        onInteract();
        setActive((i)=>wrap(i - 1, members.length));
    };
    const positions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DesktopView.useMemo[positions]": ()=>{
            const half = winW / 2;
            const margin = 16;
            const leftEdgeCenter = -half + margin + SIDE_W / 2;
            const rightEdgeCenter = half - margin - SIDE_W / 2;
            const leftInnerByEdge = leftEdgeCenter + SIDE_W + SIDE_GAP;
            const rightInnerByEdge = rightEdgeCenter - SIDE_W - SIDE_GAP;
            const leftInnerBySafe = -(ACTIVE_W / 2) - SAFE_GAP - SIDE_W / 2;
            const rightInnerBySafe = ACTIVE_W / 2 + SAFE_GAP + SIDE_W / 2;
            const leftInner = Math.min(leftInnerByEdge, leftInnerBySafe);
            const rightInner = Math.max(rightInnerByEdge, rightInnerBySafe);
            return {
                "-2": leftEdgeCenter,
                "-1": leftInner,
                "0": 0,
                "1": rightInner,
                "2": rightEdgeCenter
            };
        }
    }["DesktopView.useMemo[positions]"], [
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
        "aria-roledescription": "carousel",
        "aria-label": "Náš tím",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0b0d10] to-transparent"
            }, void 0, false, {
                fileName: "[project]/src/components/TeamGrid.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0b0d10] to-transparent"
            }, void 0, false, {
                fileName: "[project]/src/components/TeamGrid.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-y-0 left-0 z-50 flex items-center pl-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: prev,
                    className: "cursor-pointer h-12 w-12 rounded-full ring-1 ring-white/20 bg-black/50 hover:bg-black/70 transition grid place-items-center",
                    "aria-label": "Predchádzajúci",
                    children: "←"
                }, void 0, false, {
                    fileName: "[project]/src/components/TeamGrid.tsx",
                    lineNumber: 215,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/TeamGrid.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-y-0 right-0 z-50 flex items-center pr-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: next,
                    className: "cursor-pointer h-12 w-12 rounded-full ring-1 ring-white/20 bg-black/50 hover:bg-black/70 transition grid place-items-center",
                    "aria-label": "Ďalší",
                    children: "→"
                }, void 0, false, {
                    fileName: "[project]/src/components/TeamGrid.tsx",
                    lineNumber: 225,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/TeamGrid.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto w-full",
                style: {
                    height: CANVAS_H
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    initial: false,
                    children: members.map((m, i)=>{
                        const d = getDelta(i);
                        if (Math.abs(d) > sideCount) return null;
                        const isActive = d === 0;
                        let x = 0;
                        if (d === -2) x = positions["-2"];
                        else if (d === -1) x = positions["-1"];
                        else if (d === 1) x = positions["1"];
                        else if (d === 2) x = positions["2"];
                        else x = positions["0"];
                        const scale = isActive ? 1 : 0.92;
                        const opacity = isActive ? 1 : 0.6;
                        const z = isActive ? 60 : Math.abs(d) === 1 ? 40 : 30;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
                            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform",
                            style: {
                                zIndex: z,
                                width: isActive ? ACTIVE_W : SIDE_W,
                                maxWidth: "92vw"
                            },
                            initial: {
                                x,
                                scale,
                                opacity
                            },
                            animate: {
                                x,
                                scale,
                                opacity
                            },
                            transition: {
                                type: "spring",
                                stiffness: 260,
                                damping: 26,
                                mass: 0.8
                            },
                            "aria-roledescription": isActive ? "slide" : undefined,
                            "aria-label": `${m.name} – ${m.role}`,
                            children: isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl overflow-hidden bg-white/[0.04] shadow-2xl shadow-black/40 ring-1 ring-white/15",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative h-[560px] bg-black/40",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: m.img,
                                                alt: m.name,
                                                fill: true,
                                                style: {
                                                    objectFit: "cover",
                                                    objectPosition: m.imgPos ?? "center"
                                                },
                                                sizes: "520px",
                                                priority: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TeamGrid.tsx",
                                                lineNumber: 273,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TeamGrid.tsx",
                                            lineNumber: 272,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-3xl font-semibold",
                                                    children: m.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TeamGrid.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/60 mt-1",
                                                    children: m.role
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TeamGrid.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-4 text-white/80 leading-7",
                                                    children: m.bio
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TeamGrid.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/TeamGrid.tsx",
                                            lineNumber: 282,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TeamGrid.tsx",
                                    lineNumber: 271,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/TeamGrid.tsx",
                                lineNumber: 270,
                                columnNumber: 19
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    onInteract();
                                    setActive(i);
                                },
                                className: "cursor-pointer block w-full rounded-2xl overflow-hidden bg-white/[0.05] shadow-xl shadow-black/30 ring-1 ring-white/10 hover:bg-white/[0.08] transition",
                                "aria-label": `Zvoliť ${m.name}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-full h-[320px] bg-black/40",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: m.img,
                                            alt: m.name,
                                            fill: true,
                                            style: {
                                                objectFit: "cover",
                                                objectPosition: m.imgPos ?? "center"
                                            },
                                            sizes: "260px",
                                            className: "grayscale"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TeamGrid.tsx",
                                            lineNumber: 300,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TeamGrid.tsx",
                                        lineNumber: 299,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-semibold text-white/85 line-clamp-1",
                                                children: m.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TeamGrid.tsx",
                                                lineNumber: 310,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/60 text-sm line-clamp-1",
                                                children: m.role
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TeamGrid.tsx",
                                                lineNumber: 311,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TeamGrid.tsx",
                                        lineNumber: 309,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TeamGrid.tsx",
                                lineNumber: 290,
                                columnNumber: 19
                            }, this)
                        }, m.name, false, {
                            fileName: "[project]/src/components/TeamGrid.tsx",
                            lineNumber: 255,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/TeamGrid.tsx",
                    lineNumber: 236,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/TeamGrid.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TeamGrid.tsx",
        lineNumber: 206,
        columnNumber: 5
    }, this);
}
_s1(DesktopView, "I+b6tccrQaP/02ry3fdPeTMKx2g=");
_c1 = DesktopView;
function TeamGrid() {
    _s2();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [winW, setWinW] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : window.innerWidth);
    const [hasInteracted, setHasInteracted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const onInteract = ()=>setHasInteracted(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeamGrid.useEffect": ()=>{
            if (hasInteracted) return;
            const interval = setInterval({
                "TeamGrid.useEffect.interval": ()=>{
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
            onR();
            window.addEventListener("resize", onR, {
                passive: true
            });
            return ({
                "TeamGrid.useEffect": ()=>window.removeEventListener("resize", onR)
            })["TeamGrid.useEffect"];
        }
    }["TeamGrid.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileView, {
                active: active,
                setActive: setActive,
                onInteract: onInteract
            }, void 0, false, {
                fileName: "[project]/src/components/TeamGrid.tsx",
                lineNumber: 350,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesktopView, {
                active: active,
                setActive: setActive,
                onInteract: onInteract,
                winW: winW
            }, void 0, false, {
                fileName: "[project]/src/components/TeamGrid.tsx",
                lineNumber: 351,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s2(TeamGrid, "ugXk+yJr9qHrInaJ+9jVfm1q+hQ=");
_c2 = TeamGrid;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MobileView");
__turbopack_context__.k.register(_c1, "DesktopView");
__turbopack_context__.k.register(_c2, "TeamGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TeamGrid.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/TeamGrid.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_TeamGrid_tsx_0c183c58._.js.map