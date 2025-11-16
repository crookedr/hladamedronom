"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Pt = { x: number; y: number };

const VB_W = 1200;
const VB_H = 300;

type Step = {
  n: number;
  title: string;
  text: string;
  t: number;
  offsetY?: number;
};

const STEPS: Step[] = [
  {
    n: 1,
    title: "Ozvite sa nám čo najskôr",
    text:
      "Čím skôr, tým lepšie. Ideálne do 24 hodín od posledného overeného videnia. " +
      "Napíšte lokalitu a stručný popis situácie.",
    t: 0.08,
    offsetY: 0,
  },
  {
    n: 2,
    title: "Zachovajte pokoj",
    text:
      "Preskúmajte okolie, volajte na neho známym, pokojným tónom a zaznamenajte presné miesto videnia.",
    t: 0.30,
    offsetY: 0,
  },
  {
    n: 3,
    title: "Rozšírte pátranie",
    text:
      "Oboznámte okolité obce a poľovnícke združenia. Poproste veterinára, aby do evidencie doplnil informáciu, že je hľadaný.",
    t: 0.55,
    offsetY: 0,
  },
  {
    n: 4,
    title: "Vedomosť o strate",
    text:
      "Zdieľajte príspevok na sociálnych sieťach, vytvorte a rozmiestnite plagáty po širokom okolí miesta straty.",
    t: 0.80,
    offsetY: 0,
  },
  {
    n: 5,
    title: "Príchod dronistu",
    text:
      "Po príchode nášho pilota, prosím, rešpektujte a dodržiavajte jeho pokyny pri pátraní vášho zvieratka.",
    t: 0.96,
    offsetY: 0,
  },
];

export default function PostupInteractive() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  const [pts, setPts] = useState<Pt[]>([]);
  const [active, setActive] = useState<number | null>(null);
  const [modalTop, setModalTop] = useState<number | null>(null);

  const recomputePts = useMemo(
    () => () => {
      const p = pathRef.current;
      if (!p) return;
      const L = p.getTotalLength();
      setPts(
        STEPS.map((s) => {
          const pt = p.getPointAtLength(L * s.t);
          return { x: pt.x, y: pt.y + (s.offsetY ?? 0) };
        })
      );
    },
    []
  );

  const recomputeModalTop = useMemo(
    () => () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const center = rect.top + window.scrollY + rect.height / 2;

      const minTop = window.scrollY + 80;
      const maxTop = window.scrollY + window.innerHeight - 80;
      const clamped = Math.max(minTop, Math.min(center, maxTop));
      setModalTop(clamped);
    },
    []
  );

  useEffect(() => {
    recomputePts();
    recomputeModalTop();

    const ro = new ResizeObserver(() => {
      recomputePts();
      recomputeModalTop();
    });
    if (sectionRef.current) ro.observe(sectionRef.current);

    window.addEventListener("resize", recomputePts, { passive: true });
    window.addEventListener("resize", recomputeModalTop, { passive: true });
    window.addEventListener("scroll", recomputeModalTop, { passive: true });

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", recomputePts);
      window.removeEventListener("resize", recomputeModalTop);
      window.removeEventListener("scroll", recomputeModalTop);
    };
  }, [recomputePts, recomputeModalTop]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toLeftPct = (x: number) => `${(x / VB_W) * 100}%`;
  const toTopPct = (y: number) => `${(y / VB_H) * 100}%`;

  return (
    <section
      id="postup"
      className="mx-auto max-w-6xl px-6 pt-10 pb-6 scroll-mt-24 select-none"
      aria-labelledby="postup-h"
    >
      <div ref={sectionRef} className="relative">
        <header className="text-center mb-4">
          <h2 id="postup-h" className="text-3xl md:text-4xl font-semibold tracking-tight">
            Ako postupovať
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mt-1 text-sm md:text-base">
            Kliknite na bod 1–5 pre krátky popis kroku.
          </p>
        </header>

        <div
          className="
            relative w-full
            h-[200px] xs:h-[220px] sm:h-[230px] md:h-[240px]
            touch-manipulation
          "
        >
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            preserveAspectRatio="none"
          >
            <path
              ref={pathRef}
              d="
                M 40 220
                C 260 90, 430 90, 560 180
                S 900 95, 1080 165
                S 1160 205, 1160 205
              "
              fill="none"
              stroke="rgba(255,255,255,0.60)"
              strokeWidth="2"
              strokeDasharray="7 10"
            />

            {Array.from({ length: 8 }).map((_, i) => (
              <ArrowAlongPath key={i} pathRef={pathRef} t={0.08 + i * 0.11} />
            ))}
          </svg>

          {pts.length === STEPS.length &&
            STEPS.map((s, i) => {
              const isOpen = active === i;
              return (
                <div
                  key={s.n}
                  className="absolute"
                  style={{
                    left: toLeftPct(pts[i].x),
                    top: toTopPct(pts[i].y),
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <button
                    onClick={() => setActive(isOpen ? null : i)}
                    aria-haspopup="dialog"
                    aria-expanded={isOpen}
                    className="
                      grid place-items-center
                      h-10 w-10 text-sm
                      sm:h-11 sm:w-11 sm:text-base
                      rounded-full bg-white text-black font-bold
                      ring-1 ring-white/30 shadow shadow-black/30
                      active:scale-95 transition
                    "
                  >
                    {s.n}
                  </button>
                </div>
              );
            })}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && modalTop !== null && (
          <motion.div
            className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`Krok ${STEPS[active].n}: ${STEPS[active].title}`}
              className="
                fixed left-1/2 -translate-x-1/2
                mx-auto w-[92vw] max-w-3xl
                px-4 sm:px-6 md:px-8
                cursor-pointer
              "
              style={{ top: modalTop }}
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={() => setActive(null)} // klik na kartu tiež zavrie
            >
              <div className="rounded-2xl bg-white/10 ring-1 ring-white/15 shadow-2xl shadow-black/40 px-5 py-5 sm:px-6 sm:py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-white text-black font-bold">
                      {STEPS[active].n}
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                      {STEPS[active].title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setActive(null)}
                    aria-label="Zavrieť"
                    className="rounded-md px-2 py-1 text-white/80 hover:text-white hover:bg-white/10 transition"
                  >
                    ✕
                  </button>
                </div>
                <p className="mt-3 text-white/90 leading-relaxed text-sm md:text-base">
                  {STEPS[active].text}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ArrowAlongPath({
  pathRef,
  t,
}: {
  pathRef: React.RefObject<SVGPathElement | null>;
  t: number;
}) {
  const [pt, setPt] = useState<Pt | null>(null);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const p = pathRef.current;
    if (!p) return;
    const L = p.getTotalLength();
    const a = p.getPointAtLength(L * t);
    const b = p.getPointAtLength(Math.min(L, L * t + 1));
    setPt({ x: a.x, y: a.y });
    setAngle((Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI);
  }, [pathRef, t]);

  if (!pt) return null;

  return (
    <g transform={`translate(${pt.x}, ${pt.y}) rotate(${angle})`}>
      <path
        d="M0 -4 L10 0 L0 4"
        fill="none"
        stroke="rgba(255,255,255,0.55)"
        strokeWidth="2"
      />
    </g>
  );
}
