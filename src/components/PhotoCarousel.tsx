"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

type Slide = { src: string; alt: string; w: number; h: number; desc: string };
const AUTO_DELAY = 8000;
const INACTIVITY_RESUME_MS = 60_000;

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
          "Na základe informácii od poľovníkov, ktorí naviedli nášho pilota na správne miesto sa podarilo nájsť dvoch psíkov plemena Husky majiteľke.",
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

  // NOVÉ: zistíme, či sme na desktope
  const [isDesktop, setIsDesktop] = useState(false);

  const [showInfo, setShowInfo] = useState(false);

  const [lastInteraction, setLastInteraction] = useState<number>(
    () => Date.now() - INACTIVITY_RESUME_MS
  );

  const timer = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const markInteraction = useCallback(() => {
    setLastInteraction(Date.now());
  }, []);

  const goNext = useCallback(() => {
    setDir(1);
    setIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  const goPrev = useCallback(() => {
    setDir(-1);
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const userNext = useCallback(() => {
    markInteraction();
    goNext();
  }, [markInteraction, goNext]);

  const userPrev = useCallback(() => {
    markInteraction();
    goPrev();
  }, [markInteraction, goPrev]);

  // NOVÉ: sledujeme veľkosť okna a nastavíme isDesktop
  useEffect(() => {
    const update = () => {
      // 768px ~ Tailwind "md" breakpoint = tablet/desktop
      setIsDesktop(window.innerWidth >= 768);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // NOVÉ: keď sa zmení režim (desktop/mobile), nastavíme default showInfo
  useEffect(() => {
    setShowInfo(isDesktop);
  }, [isDesktop]);

  useEffect(() => {
    if (timer.current) clearInterval(timer.current);

    const tick = () => {
      const now = Date.now();
      const inactiveFor = now - lastInteraction;

      if (!isHover && inactiveFor >= INACTIVITY_RESUME_MS) {
        goNext();
      }
    };

    timer.current = window.setInterval(tick, AUTO_DELAY);

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [goNext, isHover, lastInteraction]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        markInteraction();
        goNext();
      }
      if (e.key === "ArrowLeft") {
        markInteraction();
        goPrev();
      }
      if (e.key === "Escape") setShowInfo(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev, markInteraction]);

  // UPRAVA: pri zmene fotky – na desktope automaticky ukáž popis, na mobile schovaj
  useEffect(() => {
    setShowInfo(isDesktop);
  }, [index, isDesktop]);

  const onTouchStart = (e: React.TouchEvent) =>
    (touchStartX.current = e.touches[0].clientX);

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) {
      if (dx < 0) userNext();
      else userPrev();
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

  const ratioPad = (slides[index].h / slides[index].w) * 100;

  return (
    <section
      className="relative bg-transparent py-20 px-0 sm:px-6"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="max-w-6xl mx-auto text-center px-6 sm:px-0">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          Fotogaléria
        </h2>
        <p className="text-white/70 mb-12">
          Zábery z našich akcií. Drony, terén, pátrania a výsledky
        </p>
      </div>

      <div
        className="relative w-full max-w-none sm:max-w-6xl mx-0 sm:mx-auto overflow-hidden rounded-none sm:rounded-3xl"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div style={{ paddingTop: `${ratioPad}%` }} className="relative w-full">
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

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 sm:h-32 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />

              <motion.div
                className="absolute left-3 right-3 sm:right-auto bottom-3 z-20 max-w-none sm:max-w-[420px]"
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="rounded-lg bg-black/70 backdrop-blur-sm ring-0 shadow-lg shadow-black/30 p-2.5 sm:p-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[13px] sm:text-sm font-semibold">
                      {slides[index].alt}
                    </h3>
                    <button
                      aria-label="Zobraziť alebo skryť info o fotke"
                      onClick={() => {
                        markInteraction();
                        setShowInfo((v) => !v);
                      }}
                      className="rounded-md px-2 py-1 text-[11px] sm:text-xs text-white/80 hover:text-white hover:bg-white/10 transition"
                    >
                      {showInfo ? "Skryť" : "ℹ︎ O fotke"}
                    </button>
                  </div>
                  {showInfo && (
                    <p className="mt-2 text-[13px] sm:text-sm text-white/90 leading-relaxed">
                      {slides[index].desc}
                    </p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3">
          <button
            aria-label="Predchádzajúca"
            onClick={userPrev}
            className="rounded-full bg-black/55 px-3 py-2 text-white/90 hover:bg-black/75 transition text-sm"
          >
            ←
          </button>
          <button
            aria-label="Ďalšia"
            onClick={userNext}
            className="rounded-full bg-black/55 px-3 py-2 text-white/90 hover:bg-black/75 transition text-sm"
          >
            →
          </button>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {slides.map((_, i) => {
          const active = i === index;
          return (
            <button
              key={i}
              onClick={() => {
                markInteraction();
                setDir(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-2 rounded-full transition-all ${
                active ? "w-6 bg-white" : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Prejsť na fotku ${i + 1}`}
            />
          );
        })}
      </div>
    </section>
  );
}
