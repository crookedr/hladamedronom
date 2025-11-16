"use client";

import { motion } from "framer-motion";

type Props = { id?: string };

const steps = [
  {
    n: "1",
    title: "Kedy nás kontaktovať",
    points: [
      "do 24 hodín od poslednej 100% potvrdenej informácie",
      "ak existuje reálna stopa alebo posledná lokalita",
      "keď viete byť na telefóne a súčinní na mieste",
    ],
  },
  {
    n: "2",
    title: "Kedy nevieme pomôcť",
    points: [
      "ak je informácia stará a bez ďalších stôp",
      "ak je zásah nebezpečný / nesplní bezpečnosť",
      "pri plnej vyťaženosti tímu (prioritizujeme šancu na výsledok)",
    ],
    note:
      "Denne sa stratia desiatky zvierat. Ideme tam, kde čerstvé stopy dávajú najväčší zmysel.",
  },
  {
    n: "3",
    title: "Čo budeme potrebovať",
    points: [
      "presnú lokalitu a čas posledného videnia",
      "správanie (plaché/priateľské, zvyky, reakcia na meno)",
      "kontakty a dostupnosť na telefóne",
      "krátke zhrnutie situácie (riziká, terén, okolie)",
    ],
  },
];

export default function Fungovanie({ id = "fungovanie" }: Props) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 pt-10 pb-16 scroll-mt-40">
      <header className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Ako fungujeme?</h2>
        <p className="text-white/70 max-w-2xl mx-auto mt-2 leading-7">
          Rýchly a jasný postup – bez balastu, aby ste vedeli, čo od nás čakať.
        </p>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative mb-10 overflow-hidden rounded-xl border border-white/12 bg-white/[0.03] px-5 py-4"
        aria-label="Dôležité upozornenie"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-white/60 animate-pulse" />
            Dôležité
          </div>
          <p className="text-white/85">
            <span className="font-semibold">Ide o čas:</span> kontaktujte nás čo najskôr,
            ideálne do 24 hodín od poslednej spoľahlivej informácie o pohybe zvieraťa.
          </p>
        </div>
      </motion.div>

      <div className="relative">
        <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/15" />

        <ol className="space-y-12 md:space-y-16">
          {steps.map((s, i) => {
            const leftSide = i % 2 === 0;
            return (
              <li key={s.n} className="relative">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[2px]">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="h-3.5 w-3.5 rounded-full bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.06)]"
                  />
                </div>

                <div className="grid gap-2 md:grid-cols-12 items-start">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={[
                      "md:col-span-5",
                      leftSide ? "md:col-start-1 md:pr-8" : "md:col-start-8 md:pl-8",
                    ].join(" ")}
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none select-none text-6xl md:text-7xl font-black tracking-tighter text-white/[0.05] leading-none mb-1"
                    >
                      {s.n}
                    </div>

                    <h3 className="text-lg md:text-xl font-semibold">{s.title}</h3>
                    <ul className="mt-2 space-y-1.5 text-white/80 leading-7">
                      {s.points.map((p, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-[10px] h-1 w-1 rounded-full bg-white/60" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                    {s.note ? (
                      <p className="mt-2 text-white/55 text-sm">{s.note}</p>
                    ) : null}
                  </motion.div>

                  <div className="hidden md:block md:col-span-2" aria-hidden />
                  <div className="hidden md:block md:col-span-5" aria-hidden />
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="mt-10 space-y-3">
        <p className="text-white/80 leading-7">
          Pilotov vysielame vtedy, keď sa máme od čoho odraziť. Bez čerstvých stôp je pátranie
          ako hľadanie ihly v kope sena.
        </p>
        <p className="text-white/70 leading-7">
          Pomôcť nevieme vždy každému. Ak je šanca na úspech, urobíme maximum.
        </p>
      </div>
    </section>
  );
}
