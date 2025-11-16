"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

type Slide = { src: string; alt: string; w: number; h: number; desc: string };
const AUTO_DELAY = 4000;

export default function PhotoCarousel() {
  const slides: Slide[] = useMemo(
    () => [
      {
        src: "/gallery/gal01.webp",
        alt: "Šťastní majitelia",
        w: 1600,
        h: 1067,
        desc:
          "Naša prvá úspešná akcia! Po príchode na miesto sme našli pomocou dronu s termovíziou psíka plemena čivava do 15 minút. Veľmi pomohlo, že tento psík bol videný okoloidúcimi, ktorí majiteľov informovali o jeho pohybe.",
      },
      {
        src: "/gallery/gal02.webp",
        alt: "Akcia s úsmevným koncom",
        w: 1600,
        h: 1067,
        desc:
          "Po príchode na miesto straty tohto psíka sa pilotovi Tomášovi stalo niečo, čo nečakal. Technika rozložená, dron nachystaný na vzlet a psík sa zrazu zjavil v blízkosti Tomáša! Stačilo ho len privolať.",
      },
      {
        src: "/gallery/gal03.webp",
        alt: "Perfektná spolupráca",
        w: 1600,
        h: 1067,
        desc:
          "Na základe informácii od polovníkov, ktorí naviedli nášho pilota na správne miesto sa podarilo nájsť dvoch psíkov plemena Husky majiteľke.",
      },
      {
        src: "/gallery/gal04.webp",
        alt: "Pohľad termovízie dronu",
        w: 1600,
        h: 1067,
        desc:
          "Psíka, ktorý bol dlhodobo vonku sa nášmu pilotovi podarilo lokalizovať vďaka kvalitnej spolupráci všetkých, ktorí pohyb psíka hlásili.",
      },
      {
        src: "/gallery/gal05.webp",
        alt: "Lokalizovanie srnčiat",
        w: 1600,
        h: 1067,
        desc:
          "Pred začatím kosby je veľmi dôležité danú lúku skontrolovať dronmi, ktoré pomocou termovízie vidia aj do vysokého porastu. Vďaka tejto aktivite dokážeme zachrániť desiatky nevinných mladých srnčiat.",
      },
      {
        src: "/gallery/gal06.webp",
        alt: "Dlhodobo hľadaní býci",
        w: 1600,
        h: 1067,
        desc:
          "Aj napriek vysokým teplotám sa podarilo dronistovi Jakubovi V. nájsť dlhodobo hľadaných býkov. Na tejto aktivite sa podieľalo aj niekoľko jazdcov na koňoch, ktorí prišli na pomoc s odchytom býkov.",
      },
      {
        src: "/gallery/gal07.webp",
        alt: "Podpora od dobrovoľných hasičov",
        w: 1600,
        h: 1067,
        desc:
          "Bolo horúco a kone potrebovali vodu. DHZ Hlohovec prišli a zabezpečili pitný režim pre všetky kone.",
      },
      {
        src: "/gallery/gal08.webp",
        alt: "Spolupráca je veľmi dôležitá!",
        w: 1600,
        h: 1067,
        desc:
          "V spolupráci s civilnou ochranou sme dokázali pátrať až so štyrmi termovíznymi dronmi naraz. Vďaka tomu sme dôkladne prezreli obrovskú oblasť.",
      },
      {
        src: "/gallery/gal09.webp",
        alt: "Kosiť až po kontrole",
        w: 1600,
        h: 1067,
        desc:
          "Traktori s kosačkami dostávajú zelenú od našich pilotov až po kvalitnej kontrole poľa.",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [isHover, setIsHover] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const timer = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const next = useCallback(() => {
    setDir(1);
    setIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setDir(-1);
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (timer.current) clearInterval(timer.current);
    if (!isHover) timer.current = window.setInterval(next, AUTO_DELAY);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [next, isHover]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setShowInfo(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // pri prepnutí fotky skryj info panel
  useEffect(() => {
    setShowInfo(false);
  }, [index]);

  const onTouchStart = (e: React.TouchEvent) =>
    (touchStartX.current = e.touches[0].clientX);

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) {
      if (dx < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  const EASE_OUT = [0.16, 1, 0.3, 1] as const;
  const EASE_IN = [0.4, 0, 1, 1] as const;

  const variants: Variants = {
    enter: (direction: 1 | -1) => ({
      x: direction === 1 ? 40 : -40,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.55, ease: EASE_OUT },
    },
    exit: (direction: 1 | -1) => ({
      x: direction === 1 ? -40 : 40,
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.45, ease: EASE_IN },
    }),
  };

  // pomer necháme, ale nepoužívame padding hack – spravíme aspect pomer cez Tailwind
  const ratio = slides[index].h / slides[index].w;
  const aspectClass =
    ratio > 0.8 ? "aspect-[4/3]" : "aspect-[16/9]"; // pre istotu, ale skôr kozmetika

  return (
    <section
      className="relative bg-transparent py-20 px-6 md:px-0"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          Fotogaléria
        </h2>
        <p className="text-white/70 mb-12">
          Zábery z našich akcií — drony, terén, pátrania, výsledky.
        </p>
      </div>

      <div
        className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-3xl"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* BOX S ASPEKTOM – na mobilo ch sa správa ako 4:3, na väčších 16:9 */}
        <div className={`relative w-full ${aspectClass} sm:aspect-[16/9]`}>
          <AnimatePresence custom={dir} initial={false} mode="popLayout">
            <motion.div
              key={index}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              <Image
                src={slides[index].src}
                alt={slides[index].alt}
                fill
                sizes="(max-width: 768px) 100vw, 900px"
                className="object-cover"
                priority
              />

              {/* gradient dole na text / button */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />

              {/* INFO BUTTON – spoločný pre všetkých */}
              <div className="absolute left-3 bottom-3 z-30">
                <button
                  onClick={() => setShowInfo((v) => !v)}
                  className="group inline-flex items-center gap-2 rounded-lg bg-black/55 px-3 py-2 ring-1 ring-white/15 hover:bg-black/70 transition text-left"
                >
                  <span className="text-sm font-medium">
                    {slides[index].alt}
                  </span>
                  <span className="text-xs text-white/70 group-hover:text-white/90">
                    {showInfo ? "Skryť" : "ℹ︎ O fotke"}
                  </span>
                </button>
              </div>

              {/* INFO PANELY – desktop verzia (overlay na fotke) + mobil verzia (bottom sheet) */}
              <AnimatePresence>
                {showInfo && (
                  <>
                    {/* DESKTOP / VÄČŠIE DISPLEJE – overlay na fotke */}
                    <motion.div
                      className="hidden sm:block absolute left-3 bottom-14 z-30 max-w-[420px]"
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <div className="rounded-xl bg-black/75 backdrop-blur-md ring-1 ring-white/20 shadow-xl shadow-black/40 p-4">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-sm font-semibold">
                            {slides[index].alt}
                          </h3>
                          <button
                            aria-label="Zavrieť info"
                            onClick={() => setShowInfo(false)}
                            className="rounded-md px-2 py-1 text-white/80 hover:text-white hover:bg-white/10 transition text-sm"
                          >
                            ✕
                          </button>
                        </div>
                        <p className="mt-2 text-sm text-white/90 leading-relaxed">
                          {slides[index].desc}
                        </p>
                      </div>
                    </motion.div>

                    {/* MOBILE – bottom sheet cez šírku mobilu (nič nepresekne obrázok) */}
                    <motion.div
                      className="sm:hidden fixed inset-x-0 bottom-0 z-[60]"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 40 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                    >
                      {/* polopriehľadné pozadie – kliknutím zavrie */}
                      <button
                        aria-label="Zavrieť info"
                        className="absolute inset-0 w-full h-full bg-black/40"
                        onClick={() => setShowInfo(false)}
                      />

                      <div className="relative mx-4 mb-6 rounded-2xl bg-black/90 backdrop-blur-md ring-1 ring-white/20 shadow-2xl shadow-black/60 p-4">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-sm font-semibold">
                            {slides[index].alt}
                          </h3>
                          <button
                            aria-label="Zavrieť info"
                            onClick={() => setShowInfo(false)}
                            className="rounded-md px-2 py-1 text-white/80 hover:text-white hover:bg-white/10 transition text-sm"
                          >
                            ✕
                          </button>
                        </div>
                        <p className="mt-2 text-sm text-white/90 leading-relaxed">
                          {slides[index].desc}
                        </p>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* šípky left/right */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3">
          <button
            aria-label="Predchádzajúca"
            onClick={prev}
            className="rounded-full bg-black/50 px-3 py-2 text-white/90 hover:bg-black/70 transition"
          >
            ←
          </button>
          <button
            aria-label="Ďalšia"
            onClick={next}
            className="rounded-full bg-black/50 px-3 py-2 text-white/90 hover:bg-black/70 transition"
          >
            →
          </button>
        </div>
      </div>

      {/* bullets pod fotkami */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {slides.map((_, i) => {
          const active = i === index;
          return (
            <button
              key={i}
              onClick={() => {
                setDir(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-2 rounded-full transition-all ${
                active ? "w-6 bg-white" : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
