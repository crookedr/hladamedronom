"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import logo from "/public/ozlogo.png";

type NavItem = { label: string; href: string };

export default function Navigbar() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const desktopLinks: NavItem[] = useMemo(() => {
    if (pathname === "/") {
      return [
        { label: "Pokrytie", href: "/#pokrytie" },
        { label: "O nás", href: "/nas-tim" },
        { label: "Rasty", href: "/rasty" },
      ];
    }
    if (pathname.startsWith("/nas-tim")) {
      return [
        { label: "Pokrytie", href: "/#pokrytie" },
        { label: "Náš tím", href: "/nas-tim#tim" },
        { label: "Fungovanie", href: "/nas-tim#fungovanie" },
        { label: "Fotogaléria", href: "/nas-tim#fotogaleria" },
        { label: "Rasty", href: "/rasty" },
      ];
    }
    if (pathname.startsWith("/rasty")) {
      return [
        { label: "Pokrytie", href: "/#pokrytie" },
        { label: "O nás", href: "/nas-tim" },
      ];
    }
    return [
      { label: "Pokrytie", href: "/#pokrytie" },
      { label: "O nás", href: "/nas-tim" },
      { label: "Rasty", href: "/rasty" },
    ];
  }, [pathname]);

  const cta = useMemo(() => {
    if (pathname.startsWith("/nas-tim")) {
      return { label: "Ako fungujeme", href: "/nas-tim#fungovanie" };
    }
    if (pathname.startsWith("/rasty")) {
      return { label: "Video o Rastym", href: "/rasty#video" };
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

  const handleNavClick = () => setOpen(false);

  const content = (
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
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <Image src={logo} alt="OZ logo" width={36} height={36} className="rounded-full" />
          <span className="font-semibold tracking-tight">Hľadáme Dronom</span>
        </Link>

        <nav
          className="
            hidden md:flex items-center gap-8 text-sm text-white/80
            md:absolute md:left-1/2 md:top-1/2
            md:-translate-y-1/2 md:-translate-x-[calc(50%+12px)]
          "
        >
          {desktopLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="hover:text-white transition-colors"
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
          aria-label={open ? 'Zavrieť menu' : 'Otvoriť menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
          <span className="sr-only">Menu</span>
        </button>
      </div>

      <div
        className={[
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-300",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-4">
          <nav className="grid gap-2 text-sm text-white/90">
            {desktopLinks.map((l) => (
              <Link
                key={l.label}
                onClick={handleNavClick}
                href={l.href}
                className="rounded-xl px-3 py-2 hover:bg-white/10"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            onClick={handleNavClick}
            href={cta.href}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-semibold bg-white text-black hover:bg-emerald-400 transition-colors"
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </header>
  );

  if (!mounted) return null;
  return createPortal(content, document.body);
}
