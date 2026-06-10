"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Case = {
  name: string;
  animal: string;
  location: string;
  date: string;
  description: string;
  image: string;
  imgPos?: string;
};

const cases: Case[] = [
  {
    name: "Bella",
    animal: "Labradorka",
    location: "Trenčín",
    date: "Máj 2025",
    description: "Bella sa stratila počas búrky. Po dvojhodinovom lete termovíznym dronom sme ju našli v lese 3 km od domu. Šťastný koniec pre celú rodinu.",
    image: "/team/rastyy.webp",
    imgPos: "50% 35%",
  },
  {
    name: "Max",
    animal: "Nemecký ovčiak",
    location: "Nitra",
    date: "Apríl 2025",
    description: "Max ušiel cez otvorenú bránku. Majiteľ ho hľadal 3 dni bezvýsledne. Dron ho lokalizoval za 40 minút skrytého v kukuričnom poli.",
    image: "/gallery/gal01.webp",
    imgPos: "center",
  },
  {
    name: "Luna",
    animal: "Mačka",
    location: "Piešťany",
    date: "Marec 2025",
    description: "Luna sa nezjavovala 5 dní. Termovízia zachytila jej teplotný podpis ukrytý v stavebnej jame neďaleko domu. Vrátila sa domov zdravá.",
    image: "/gallery/gal02.webp",
    imgPos: "center",
  },
];

function wrap(i: number, len: number) {
  return ((i % len) + len) % len;
}

const ACTIVE_W = 900;
const SIDE_W = 260;
const SAFE_GAP = 40;
const SIDE_GAP = 18;
const CANVAS_H = 580;

type SharedProps = {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  onInteract: () => void;
};

function MobileView({ active, setActive, onInteract }: SharedProps) {
  const startX = useRef<number | null>(null);
  const c = cases[active];

  const next = () => { onInteract(); setActive(i => wrap(i + 1, cases.length)); };
  const prev = () => { onInteract(); setActive(i => wrap(i - 1, cases.length)); };

  return (
    <div className="md:hidden px-6">
      <div
        className="rounded-2xl overflow-hidden bg-white/[0.04] ring-1 ring-white/15 shadow-2xl shadow-black/40"
        onTouchStart={e => { startX.current = e.touches[0].clientX; }}
        onTouchEnd={e => {
          if (startX.current == null) return;
          const dx = e.changedTouches[0].clientX - startX.current;
          startX.current = null;
          if (Math.abs(dx) > 40) { if (dx < 0) next(); else prev(); }
        }}
      >
        <div className="relative w-full aspect-[4/5] bg-black/40">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <Image
                src={c.image}
                alt={c.name}
                fill
                className="object-cover"
                style={{ objectPosition: c.imgPos ?? "center" }}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="p-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-1">{c.animal}</p>
              <h3 className="text-2xl font-bold">{c.name}</h3>
              <p className="text-white/40 text-xs mt-0.5">{c.location} · {c.date}</p>
              <p className="mt-3 text-white/75 leading-7">{c.description}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-5 flex items-center justify-center gap-2">
            {cases.map((_, i) => (
              <button
                key={i}
                onClick={() => { onInteract(); setActive(i); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-white" : "w-1.5 bg-white/30 hover:bg-white/55"}`}
                aria-label={`Príbeh ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopView({ active, setActive, onInteract, winW }: SharedProps & { winW: number }) {
  const next = () => { onInteract(); setActive(i => wrap(i + 1, cases.length)); };
  const prev = () => { onInteract(); setActive(i => wrap(i - 1, cases.length)); };

  const positions = useMemo(() => {
    const half = winW / 2;
    const margin = 16;
    const leftEdgeCenter = -half + margin + SIDE_W / 2;
    const rightEdgeCenter = half - margin - SIDE_W / 2;
    const leftInnerBySafe = -(ACTIVE_W / 2) - SAFE_GAP - SIDE_W / 2;
    const rightInnerBySafe = ACTIVE_W / 2 + SAFE_GAP + SIDE_W / 2;
    const leftInner = Math.min(leftEdgeCenter + SIDE_W + SIDE_GAP, leftInnerBySafe);
    const rightInner = Math.max(rightEdgeCenter - SIDE_W - SIDE_GAP, rightInnerBySafe);
    return { "-2": leftEdgeCenter, "-1": leftInner, "0": 0, "1": rightInner, "2": rightEdgeCenter } as const;
  }, [winW]);

  const sideCount = winW >= 1024 ? 2 : 1;

  const getDelta = (i: number) => {
    const right = wrap(i - active, cases.length);
    const left = right - cases.length;
    return Math.abs(left) < right ? left : right;
  };

  return (
    <div className="hidden md:block relative w-screen overflow-hidden left-1/2 -translate-x-1/2">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#0b0d10] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#0b0d10] to-transparent" />

      <div className="absolute inset-y-0 left-0 z-20 flex items-center pl-4">
        <button
          type="button"
          onClick={prev}
          className="h-12 w-12 rounded-full ring-1 ring-white/20 bg-black/50 hover:bg-black/70 transition grid place-items-center text-white/70 hover:text-white"
          aria-label="Predchádzajúci"
        >
          ←
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 z-20 flex items-center pr-4">
        <button
          type="button"
          onClick={next}
          className="h-12 w-12 rounded-full ring-1 ring-white/20 bg-black/50 hover:bg-black/70 transition grid place-items-center text-white/70 hover:text-white"
          aria-label="Ďalší"
        >
          →
        </button>
      </div>

      <div className="relative mx-auto w-full" style={{ height: CANVAS_H }}>
        <AnimatePresence initial={false}>
          {cases.map((c, i) => {
            const d = getDelta(i);
            if (Math.abs(d) > sideCount) return null;

            const isActive = d === 0;
            const x = d === -2 ? positions["-2"] : d === -1 ? positions["-1"] : d === 1 ? positions["1"] : d === 2 ? positions["2"] : 0;
            const scale = isActive ? 1 : 0.92;
            const opacity = isActive ? 1 : 0.55;
            const z = isActive ? 60 : Math.abs(d) === 1 ? 40 : 30;

            return (
              <motion.article
                key={c.name}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
                style={{ zIndex: z, width: isActive ? ACTIVE_W : SIDE_W, maxWidth: "92vw" }}
                initial={{ x, scale, opacity }}
                animate={{ x, scale, opacity }}
                transition={{ type: "spring", stiffness: 260, damping: 26, mass: 0.8 }}
              >
                {isActive ? (
                  <div className="rounded-2xl overflow-hidden bg-white/[0.04] shadow-2xl shadow-black/50 ring-1 ring-white/15">
                    <div className="grid md:grid-cols-2">
                      <div className="relative h-[480px] bg-black/40">
                        <Image
                          src={c.image}
                          alt={c.name}
                          fill
                          sizes="450px"
                          priority
                          style={{ objectFit: "cover", objectPosition: c.imgPos ?? "center" }}
                        />
                        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.35 }}
                          >
                            <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-3">{c.animal}</p>
                            <h3 className="text-4xl font-bold tracking-tight">{c.name}</h3>
                            <p className="text-white/35 text-sm mt-1.5">{c.location} · {c.date}</p>
                            <p className="mt-5 text-white/70 leading-8">{c.description}</p>

                            <div className="mt-8 flex items-center gap-2">
                              {cases.map((_, j) => (
                                <button
                                  key={j}
                                  onClick={() => { onInteract(); setActive(j); }}
                                  className={`h-1.5 rounded-full transition-all duration-300 ${j === active ? "w-6 bg-white" : "w-1.5 bg-white/25 hover:bg-white/50"}`}
                                  aria-label={`Príbeh ${j + 1}`}
                                />
                              ))}
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => { onInteract(); setActive(i); }}
                    className="block w-full rounded-2xl overflow-hidden bg-white/[0.04] shadow-xl shadow-black/30 ring-1 ring-white/10 hover:bg-white/[0.07] transition"
                    aria-label={`Zobraziť ${c.name}`}
                  >
                    <div className="relative w-full h-[360px] bg-black/40">
                      <Image
                        src={c.image}
                        alt={c.name}
                        fill
                        sizes="260px"
                        style={{ objectFit: "cover", objectPosition: c.imgPos ?? "center" }}
                        className="grayscale"
                      />
                    </div>
                    <div className="p-3 text-left">
                      <h4 className="font-semibold text-white/85 line-clamp-1">{c.name}</h4>
                      <p className="text-white/45 text-sm line-clamp-1">{c.animal} · {c.location}</p>
                    </div>
                  </button>
                )}
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Zachraneni() {
  const [active, setActive] = useState(0);
  const [winW, setWinW] = useState(typeof window === "undefined" ? 1280 : window.innerWidth);
  const [hasInteracted, setHasInteracted] = useState(false);
  const onInteract = () => setHasInteracted(true);

  useEffect(() => {
    if (hasInteracted) return;
    const t = setInterval(() => setActive(i => wrap(i + 1, cases.length)), 8000);
    return () => clearInterval(t);
  }, [hasInteracted]);

  useEffect(() => {
    const onR = () => setWinW(window.innerWidth);
    window.addEventListener("resize", onR, { passive: true });
    return () => window.removeEventListener("resize", onR);
  }, []);

  if (cases.length === 0) return null;

  return (
    <section className="pt-20 pb-4">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-6xl px-6 mb-10 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Zachránení</h2>
        <p className="mt-2 text-white/45 text-base">
          Každý z nich má svoj príbeh. Všetky majú šťastný koniec.
        </p>
      </motion.div>

      <MobileView active={active} setActive={setActive} onInteract={onInteract} />
      <DesktopView active={active} setActive={setActive} onInteract={onInteract} winW={winW} />
    </section>
  );
}
