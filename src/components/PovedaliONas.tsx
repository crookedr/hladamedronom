"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;
const AUTO_MS = 16000;

const reviews = [
  {
    quote: "Ďakujeme Tomášovi že bol ochotný prísť a pomôcť v hľadaní aj počas sviatku. Sme šťastní že nám našiel nášho psíka. Prišiel keď sme boli v koncoch a cítili sme beznádej. Bol to úžasný pocit keď Tomáš zameral našu Donu a my sme videli že je živá a v poriadku. Ďakujeme aj celému OZ za to, čo robíte. ❤️",
    name: "Ivan B.",
    detail: "",
  },
  {
    quote: "Robia skvelú prácu! 🙂 odporúčam",
    name: "Sofia K.",
    detail: "",
  },
  {
    quote: "Ďakujem Tomášovi za ochotu prísť večer a aj na druhý deň v rámci svojej dovolenky. Ochotný a šikovný. V našom prípade bez výsledku, psíka sme týmto spôsobom nenašli ale keby bolo treba obrátim sa na OZ Hľadáme dronom znovu. Veľa šťastia prajem.",
    name: "Dáša H.",
    detail: "",
  },
  {
    quote: "Chcem sa veľmi pekne poďakovať p. Chovancovi za prejavenú ochotu a snahu nám pomôcť pri hľadaní našej Sheily. Keďže žijeme v oblasti CHKO Záhorie nedalo sa  pracovať s dronom. Boli nám poskytnuté cenné informácie kde a ako máme hľadať našu tuláčku. P. Chovanec nám prejavil skutočný záujem, veľkú profesionalitu, ľudskosť, ochotu pomôcť a úžasný typ na GPS tracker. Je super že máme takýchto ľudí medzi nami. Ďakujem. Hlboko zo srdca ďakujem.",
    name: "Anna T.",
    detail: "",
  },
];

const variants = {
  enter: (d: number) => ({ opacity: 0, x: d * 36 }),
  center: { opacity: 1, x: 0 },
  exit: (d: number) => ({ opacity: 0, x: d * -36 }),
};

export default function PovedaliONas() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const [timer, setTimer] = useState(0);

  const go = useCallback((next: number, d: number) => {
    setDir(d);
    setIdx(((next % reviews.length) + reviews.length) % reviews.length);
    setTimer(t => t + 1);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setDir(1);
      setIdx(i => (i + 1) % reviews.length);
    }, AUTO_MS);
    return () => clearInterval(id);
  }, [timer]);

  const r = reviews[idx];

  return (
    <section className="mx-auto max-w-4xl px-6 pt-4 pb-12 md:pb-24">

      {/* Header */}
      <motion.div
        className="text-center mb-8 md:mb-14"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: EASE }}
      >
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Povedali o nás</h2>
        <p className="text-white/55 max-w-md mx-auto mt-3 leading-6">
          Slová ľudí, ktorým sme pomohli
        </p>
      </motion.div>

      {/* Carousel */}
      <div className="relative">
        {/* Arrows */}
        <button
          onClick={() => go(idx - 1, -1)}
          aria-label="Predchádzajúci"
          className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-white/15 hover:border-white/35 hover:bg-white/5 transition flex items-center justify-center text-white/40 hover:text-white/80"
        >
          <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 12L6 8l4-4" />
          </svg>
        </button>
        <button
          onClick={() => go(idx + 1, 1)}
          aria-label="Ďalší"
          className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-white/15 hover:border-white/35 hover:bg-white/5 transition flex items-center justify-center text-white/40 hover:text-white/80"
        >
          <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 4l4 4-4 4" />
          </svg>
        </button>

        {/* Quote */}
        <div className="px-12 md:px-16 min-h-[180px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={idx}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.38, ease: EASE }}
              className="text-center"
            >
              <p className="text-white/75 text-base md:text-lg leading-relaxed md:leading-[1.9]">
                {r.quote}
              </p>
              <div className="mt-6 space-y-0.5">
                <p className="text-sm font-medium text-white/65">{r.name}</p>
                <p className="text-sm text-white/32">{r.detail}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dots */}
      <div className="mt-6 md:mt-10 flex items-center justify-center gap-2">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i, i > idx ? 1 : -1)}
            aria-label={`Citát ${i + 1}`}
            className={[
              "cursor-pointer rounded-full transition-all duration-300",
              i === idx ? "w-5 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/22 hover:bg-white/45",
            ].join(" ")}
          />
        ))}
      </div>
    </section>
  );
}
