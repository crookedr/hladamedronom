"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = { label: string; href: string };

function isActive(href: string, pathname: string): boolean {
  const base = href.split("#")[0] || "/";
  if (base === "/") return pathname === "/";
  return pathname.startsWith(base);
}

export default function Navigbar() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const desktopLinks: NavItem[] = useMemo(() => {
    if (pathname === "/") {
      return [
        { label: "Pokrytie", href: "/#pokrytie" },
        { label: "Zachránení", href: "/zachraneni" },
        { label: "O nás", href: "/nas-tim" },
        { label: "Srnčiatka", href: "/srnciatka" },
        { label: "Rasty", href: "/rasty" },
      ];
    }
    if (pathname.startsWith("/nas-tim")) {
      return [
        { label: "Pokrytie", href: "/#pokrytie" },
        { label: "Zachránení", href: "/zachraneni" },
        { label: "Fotogaléria", href: "/nas-tim#fotogaleria" },
        { label: "Srnčiatka", href: "/srnciatka" },
        { label: "Rasty", href: "/rasty" },
      ];
    }
    if (pathname.startsWith("/srnciatka")) {
      return [
        { label: "Pokrytie", href: "/#pokrytie" },
        { label: "O nás", href: "/nas-tim" },
        { label: "Zachránení", href: "/zachraneni" },
        { label: "Rasty", href: "/rasty" },
      ];
    }
    if (pathname.startsWith("/rasty")) {
      return [
        { label: "Pokrytie", href: "/#pokrytie" },
        { label: "O nás", href: "/nas-tim" },
        { label: "Zachránení", href: "/zachraneni" },
        { label: "Srnčiatka", href: "/srnciatka" },
      ];
    }
    if (pathname.startsWith("/zachraneni")) {
      return [
        { label: "Pokrytie", href: "/#pokrytie" },
        { label: "O nás", href: "/nas-tim" },
        { label: "Srnčiatka", href: "/srnciatka" },
        { label: "Rasty", href: "/rasty" },
      ];
    }
    return [
      { label: "Pokrytie", href: "/#pokrytie" },
      { label: "Zachránení", href: "/zachraneni" },
      { label: "O nás", href: "/nas-tim" },
      { label: "Srnčiatka", href: "/srnciatka" },
      { label: "Rasty", href: "/rasty" },
    ];
  }, [pathname]);

  const cta = useMemo(() => {
    if (pathname.startsWith("/nas-tim")) {
      return { label: "Ako fungujeme", href: "/nas-tim#fungovanie" };
    }
    if (pathname.startsWith("/srnciatka")) {
      return { label: "Kontaktujte nás", href: "/#kontakt" };
    }
    if (pathname.startsWith("/rasty")) {
      return { label: "Video o Rastym", href: "/rasty#video" };
    }
    if (pathname.startsWith("/zachraneni")) {
      return { label: "Požiadať o pomoc", href: "/#kontakt" };
    }
    return { label: "Ako postupovať", href: "/#postup" };
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setElevated((window?.scrollY || 0) > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (open) {
      const y = window.scrollY;
      document.body.style.cssText = `position:fixed;top:-${y}px;left:0;right:0;overflow:hidden;`;
    } else {
      const top = document.body.style.top;
      document.body.style.cssText = "";
      if (top) window.scrollTo(0, -parseInt(top, 10));
    }
    return () => {
      const top = document.body.style.top;
      document.body.style.cssText = "";
      if (top) window.scrollTo(0, -parseInt(top, 10));
    };
  }, [open]);

  const handleNavClick = () => setOpen(false);

  const content = (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 w-full z-[2147483647]",
          "transition-colors duration-300",
          elevated
            ? "bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/30 shadow-lg shadow-black/20"
            : "bg-black",
        ].join(" ")}
      >
        {!elevated && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white" />
        )}

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/ozlogo.png"
              alt="OZ logo"
              width={36}
              height={36}
              className="rounded-full"
              priority
            />
            <span className="font-semibold tracking-tight">Hľadáme Dronom</span>
          </Link>

          <nav
            className={[
              "hidden md:flex items-center gap-8 text-sm text-white/80",
              "md:absolute md:left-1/2 md:top-1/2 md:-translate-y-1/2",
              pathname === "/"
                ? "md:-translate-x-[calc(50%+16px)]"
                : "md:-translate-x-1/2",
            ].join(" ")}
          >
            {desktopLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={[
                  "transition-colors",
                  isActive(l.href, pathname)
                    ? "text-white font-semibold"
                    : "text-white/80 hover:text-white",
                ].join(" ")}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block flex-shrink-0">
            <Link
              href={cta.href}
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-semibold bg-white text-black hover:bg-emerald-400 transition-colors"
            >
              {cta.label}
            </Link>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-xl p-2 ring-1 ring-white/15 hover:bg-white/10 transition"
            aria-expanded={open}
            aria-label={open ? "Zavrieť menu" : "Otvoriť menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-[2147483646] bg-[#0b0d10] flex flex-col md:hidden"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 h-16 border-b border-white/8 shrink-0">
              <Link href="/" onClick={handleNavClick} className="flex items-center gap-3">
                <Image src="/ozlogo.png" alt="OZ logo" width={36} height={36} className="rounded-full" />
                <span className="font-semibold tracking-tight">Hľadáme Dronom</span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-xl p-2 ring-1 ring-white/15 hover:bg-white/10 transition"
                aria-label="Zavrieť menu"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 flex flex-col items-center justify-center gap-1">
              {desktopLinks.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.05 + i * 0.06,
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={l.href}
                    onClick={handleNavClick}
                    className={[
                      "block px-8 py-3 text-3xl font-semibold transition-colors text-center",
                      isActive(l.href, pathname) ? "text-white" : "text-white/70 hover:text-white",
                    ].join(" ")}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="px-6 pb-10 shrink-0"
            >
              <Link
                href={cta.href}
                onClick={handleNavClick}
                className="inline-flex w-full items-center justify-center rounded-2xl px-5 py-3.5 text-sm font-semibold bg-white text-black hover:bg-emerald-400 transition-colors"
              >
                {cta.label}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  if (!mounted) return null;
  return createPortal(content, document.body);
}
