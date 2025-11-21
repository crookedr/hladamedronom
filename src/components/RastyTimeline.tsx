"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Step = {
  day: string;
  title: string;
  text: string;
};

const steps: Step[] = [
  { day: "Deň 1", title: "Strata", text: "Rasty sa stratil mimo svojho domova. Okamžite sa rozbieha pátranie v teréne a zbieranie prvých informácií." },
  { day: "Deň 2", title: "Dobrovoľníci", text: "Zapájame susedov a známych, overujeme hlásenia a vznikajú prvé zóny, kde je pravdepodobný výskyt." },
  { day: "Deň 3", title: "Neúnavné pátranie", text: "Rozdeľujeme oblasť na menšie úseky, prechádzame lúky a okraje lesov. Rasty je plachý, no hlásenie jeho pohybu veľmi pomáha." },
  { day: "Deň 4", title: "Nočné hliadky", text: "Po zotmení bezpečne kontrolujeme tiché lokality. Sledujeme hluk a minimalizujeme stres pre Rastyho." },
  { day: "Deň 5", title: "Rozšírenie informácií", text: "Letáky, sociálne siete, kontakt s útulkami a veterinármi. Tieto úkony boli urobené hneď po strate." },
  { day: "Deň 6", title: "Dronista a nájdenie", text: "Nasadzujeme dron s termovíziou, plán letu a bezpečnosť. Rasty je lokalizovaný o pár minút a príbeh končí šťastne. Vďaka, Dominik." },
];

export default function RastyTimeline() {
  const [active, setActive] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const TH = 40;
    if (Math.abs(dx) > TH) setActive((i) => Math.min(Math.max(i + (dx < 0 ? 1 : -1), 0), steps.length - 1));
    touchStartX.current = null;
  };

  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">6 dní pátrania</h3>
        <p className="text-white/70 mt-2">Prehľad krokov, ktoré viedli k nájdeniu Rastyho</p>
      </div>

      <div className="md:hidden select-none" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div className="relative px-5 pt-4 pb-3">
          <div className="h-px w-full bg-white/20" />
          <div className="relative -mt-[7px] grid grid-cols-6">
            {steps.map((_, i) => {
              const isActive = i === active;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Krok ${i + 1}`}
                  className="relative flex items-center justify-center py-3"
                >
                  <span className={`h-3 w-3 rounded-full transition ${isActive ? "bg-white" : "bg-white/60"}`} />
                  <span className={`absolute top-[42px] text-[11px] font-semibold tracking-wide ${isActive ? "text-white" : "text-white/60"}`}>{i + 1}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="mx-5 h-px bg-white/10" />
        <div className="px-5 pt-4">
          <div className="text-[11px] uppercase tracking-wider text-white/60">{steps[active].day}</div>
          <div className="mt-0.5 font-semibold">{steps[active].title}</div>
          <AnimatePresence mode="wait">
            <motion.p
              key={active}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="mt-1.5 text-[13px] leading-6 text-white/80"
            >
              {steps[active].text}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      <div className="hidden md:block">
        <div
          className="grid gap-x-4"
          style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}
        >
          {steps.map((s, i) => {
            const top = i % 2 === 0;
            return (
              <div key={s.day} className="grid" style={{ gridTemplateRows: "auto 80px auto" }}>
                <div className={`px-2 ${top ? "" : "invisible h-0"}`}>
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, ease: "easeOut", delay: i * 0.02 }}
                    className="max-w-[360px] mx-auto text-center"
                  >
                    <div className="text-xs uppercase tracking-wider text-white/60">{s.day}</div>
                    <div className="mt-1 font-semibold">{s.title}</div>
                    <p className="mt-1.5 text-sm text-white/80 leading-6">{s.text}</p>
                  </motion.div>
                </div>

                <div className="relative">
                  <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <div className="relative grid place-items-center h-full">
                    <div className="relative">
                      <div className="absolute -inset-2 rounded-full bg-[#0b0d10]" aria-hidden />
                      <div className="relative h-3 w-3 rounded-full bg-white shadow-[0_0_0_4px_rgba(255,255,255,0.08)]" />
                    </div>
                  </div>
                </div>

                <div className={`px-2 ${top ? "invisible h-0" : ""}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, ease: "easeOut", delay: i * 0.02 }}
                    className="max-w-[360px] mx-auto text-center"
                  >
                    <div className="text-xs uppercase tracking-wider text-white/60">{s.day}</div>
                    <div className="mt-1 font-semibold">{s.title}</div>
                    <p className="mt-1.5 text-sm text-white/80 leading-6">{s.text}</p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
