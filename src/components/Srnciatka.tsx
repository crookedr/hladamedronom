"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;
const ATTR = "data-srnciatka-section";
const NAV_H = 64;

const DESKTOP_IMGS = [
  "/srnciatka/s1.webp",
  "/srnciatka/s2.webp",
  "/srnciatka/s3.webp",
  "/srnciatka/s4.webp",
  "/srnciatka/s5.webp",
  "/srnciatka/s6.webp",
];
const MOBILE_IMGS = Array.from(
  { length: 8 },
  (_, i) => `/srnciatka/s${i + 1}.webp`
);

export default function Srnciatka() {
  const { scrollY } = useScroll();
  const heroImgY = useTransform(scrollY, [0, 800], [0, 160]);

  const [mobileIdx, setMobileIdx] = useState(0);

  const galleryRef = useRef<HTMLDivElement>(null);
  const galleryInView = useInView(galleryRef, { once: true });

  useEffect(() => {
    const id = setInterval(
      () => setMobileIdx(i => (i + 1) % MOBILE_IMGS.length),
      4000
    );
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let current = 0;
    let busy = false;

    const getSections = () =>
      Array.from(document.querySelectorAll<HTMLElement>(`[${ATTR}]`));

    const syncCurrent = () => {
      if (busy) return;
      const all = getSections();
      const idx = all.findIndex(el => {
        const top = el.getBoundingClientRect().top;
        return top >= -10 && top < window.innerHeight * 0.5;
      });
      if (idx !== -1) current = idx;
    };

    const go = (idx: number) => {
      const all = getSections();
      const clamped = Math.max(0, Math.min(all.length - 1, idx));
      const el = all[clamped];
      if (!el) return;
      current = clamped;
      busy = true;
      el.style.scrollMarginTop = `${NAV_H}px`;
      el.scrollIntoView({ behavior: "smooth", block: "start" });

      let done = false;
      const unlock = () => { if (!done) { done = true; busy = false; } };
      window.addEventListener("scrollend", unlock, { once: true });
      setTimeout(unlock, 850);
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (busy) return;
      syncCurrent();
      go(current + (e.deltaY > 0 ? 1 : -1));
    };

    let ty = 0;
    const onTouchStart = (e: TouchEvent) => { ty = e.touches[0].clientY; };
    const onTouchMove = (e: TouchEvent) => { e.preventDefault(); };

    const onTouchEnd = (e: TouchEvent) => {
      if (busy) return;
      syncCurrent();
      const d = ty - e.changedTouches[0].clientY;
      if (Math.abs(d) > 40) go(current + (d > 0 ? 1 : -1));
    };

    const onKey = (e: KeyboardEvent) => {
      if (busy) return;
      if (e.key === "ArrowDown" || e.key === "PageDown") { e.preventDefault(); syncCurrent(); go(current + 1); }
      if (e.key === "ArrowUp"   || e.key === "PageUp")   { e.preventDefault(); syncCurrent(); go(current - 1); }
    };

    window.addEventListener("wheel",      onWheel,      { passive: false });
    window.addEventListener("touchmove",  onTouchMove,  { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend",   onTouchEnd,   { passive: true });
    window.addEventListener("keydown",    onKey);

    return () => {
      window.removeEventListener("wheel",      onWheel);
      window.removeEventListener("touchmove",  onTouchMove);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend",   onTouchEnd);
      window.removeEventListener("keydown",    onKey);
    };
  }, []);

  const s = { [ATTR]: "" };

  return (
    <>
      {/* ── HERO ── */}
      <section {...s} className="relative h-screen overflow-hidden">
        <motion.div
          style={{ y: heroImgY }}
          className="absolute inset-0 scale-[1.22] origin-center"
        >
          <video
            src="/srnciatkahero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </motion.div>
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #000 0%, rgba(0,0,0,0.42) 40%, transparent 100%)" }}
        />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <h1 className="text-center text-5xl md:text-6xl lg:text-[3.75rem] font-bold tracking-tight leading-[1.08] max-w-3xl">
            {["Zachráňme srnčiatka", "pred kosbou!"].map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.15 + i * 0.12 }}
                  className="block"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-0.5"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 9l7 7 7-7" />
            </svg>
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-white/25" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 9l7 7 7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section {...s} className="h-screen flex items-center">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-14">
          <div className="grid md:grid-cols-[5fr_3fr] gap-12 md:gap-24 items-start">
            <blockquote className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.12]">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: EASE }}
                  className="block"
                >
                  Srnčatá sa neskrývajú.
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
                  className="block text-white/28"
                >
                  Čakajú.
                </motion.span>
              </span>
            </blockquote>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: EASE, delay: 0.2 }}
              className="space-y-4 text-white/58 leading-7 pt-1 md:pt-3"
            >
              <p>
                V prvých týždňoch života nemajú únikový inštinkt. Keď cítia nebezpečenstvo,
                schúlia sa do trávy a nehybne čakajú — inštinkt, ktorý ich chráni pred dravcami,
                ich robí neviditeľnými pre kosačku.
              </p>
              <p>
                Pešia kontrola poľa ich spoľahlivo nenájde. Termovízny dron rozlíši teplotný
                kontrast živého tela od studenej rannej trávy aj v hustom poraste.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PORTRAIT GALLERY ── */}
      <div ref={galleryRef} {...s} className="relative h-screen overflow-hidden bg-[#07090c] flex items-center justify-center">

        {/* Desktop: 6 portrait photos side by side, no gaps */}
        <div className="hidden md:flex h-screen w-full overflow-hidden">
          {DESKTOP_IMGS.map((src, i) => (
            <motion.div
              key={src}
              initial={{ y: i % 2 === 0 ? "-100%" : "100%" }}
              animate={{ y: galleryInView ? 0 : (i % 2 === 0 ? "-100%" : "100%") }}
              transition={{ duration: 1.05, ease: EASE, delay: i * 0.08 }}
              className="relative flex-1 h-full"
            >
              <motion.div
                animate={{ scale: [1, 1.07, 1] }}
                transition={{ duration: 18, delay: i * 2.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image src={src} alt="" fill className="object-cover" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: single auto-rotating photo */}
        <div className="md:hidden absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={mobileIdx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9 }}
              className="absolute inset-0"
            >
              <Image
                src={MOBILE_IMGS[mobileIdx]}
                alt=""
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }}
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
            {MOBILE_IMGS.map((_, i) => (
              <div
                key={i}
                className={[
                  "rounded-full transition-all duration-500",
                  i === mobileIdx ? "w-4 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/30",
                ].join(" ")}
              />
            ))}
          </div>
        </div>

        {/* Caption */}
        <div className="hidden md:block absolute bottom-6 left-6 md:left-14">
          <p className="text-xs text-white/22 tracking-wide">
            Kosačke dávame zelenú až po kompletnom skene bez nálezu.
          </p>
        </div>
      </div>

      {/* ── EDITORIAL PROSE ── */}
      <section {...s} className="h-screen flex items-center">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-14">
          <div className="grid md:grid-cols-2 gap-10 md:gap-20">
            <motion.p
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: EASE }}
              className="text-white/82 leading-8 text-lg"
            >
              Kontaktujte nás pred plánovanou kosbou. Za úsvitu, keď je tráva ešte
              studená a teplotný kontrast tela srnčaťa maximálny, náš pilot vzlietne a systematicky
              prehľadá celé pole.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: EASE, delay: 0.08 }}
              className="text-white/55 leading-8"
            >
              Každý nález je označený GPS súradnicami, srnčatá prenesieme do bezpečia na okraj poľa.
              Kosačke dávame zelenú až po záverečnom skene a žiadna časť poľa nie je preskočená.
              Táto služba je bezplatná, rovnako ako pátranie po stratených zvieratách.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── CLOSING ── */}
      <section {...s} className="relative h-screen overflow-hidden">
        <video
          src="/srnciatko.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.52) 55%, rgba(0,0,0,0.22) 100%)" }}
        />
        <div className="absolute inset-0 flex items-center px-6 md:px-14 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="max-w-xl"
          >
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-4">
              Plánujete kosiť? Kontaktujte nás vopred.
            </p>
            <p className="text-white/55 leading-7 mb-10 max-w-sm">
              Záchranný let robíme skoro ráno, keď je teplotný rozdiel najväčší.
              Stačí nás osloviť pred termínom kosby a zvyšok zariadime my.
            </p>
            <Link
              href="/#kontakt"
              className="inline-block text-base font-semibold text-white border-b border-white/30 hover:border-white pb-px transition-colors"
            >
              Nahlásiť termín kosby
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
