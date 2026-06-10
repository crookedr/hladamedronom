"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Consent = { essential: boolean; analytics: boolean };
const STORAGE_KEY = "ozhd_cookie_consent_v1";

function Toggle({
  checked,
  disabled,
  onChange,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={[
        "relative w-11 h-6 rounded-full transition-colors duration-200 shrink-0 focus:outline-none",
        disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer",
        checked ? "bg-emerald-500" : "bg-white/15",
      ].join(" ")}
    >
      <span
        className={[
          "absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200",
          checked ? "translate-x-5" : "translate-x-0",
        ].join(" ")}
      />
    </button>
  );
}

function CookieIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      {/* cookie bite shape */}
      <path
        d="M21.598 11.064a1 1 0 00-.854-.136 3 3 0 01-3.592-3.592 1 1 0 00-.975-1.241 3 3 0 01-2.838-2.838 1 1 0 00-1.241-.975 10 10 0 1010.5 8.782z"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M21.598 11.064a1 1 0 00-.854-.136 3 3 0 01-3.592-3.592 1 1 0 00-.975-1.241 3 3 0 01-2.838-2.838 1 1 0 00-1.241-.975 10 10 0 1010.5 8.782z"
        fillOpacity="0.08"
      />
      {/* chips */}
      <circle cx="8"    cy="10"   r="1.2" />
      <circle cx="13.5" cy="8.5"  r="0.9" />
      <circle cx="15"   cy="14"   r="1.5" />
      <circle cx="9"    cy="15.5" r="1.1" />
      <circle cx="12"   cy="19"   r="0.9" />
      <circle cx="6.5"  cy="18"   r="0.75"/>
    </svg>
  );
}

export default function Cookiebanner() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setConsent(JSON.parse(raw) as Consent);
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    } catch {
      setIsOpen(true);
    }
  }, []);

  function saveConsent(next: Consent) {
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch { /* empty */ }
    setConsent(next);
    setIsOpen(false);
  }

  if (!mounted) return null;

  return (
    <>
      {/* Floating reopen button */}
      {consent && !isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Spravovať cookies"
          className="fixed bottom-4 right-4 z-[9999] rounded-full bg-black/60 backdrop-blur-md p-3 text-white/50 shadow-lg border border-white/12 hover:text-white hover:border-white/25 transition-all cursor-pointer"
        >
          <CookieIcon className="w-5 h-5" />
        </button>
      )}

      {/* Banner — vyskočí z ikony v pravom dolnom rohu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-4 right-4 z-[9999] w-[calc(100vw-2rem)] max-w-sm rounded-2xl bg-[#111316]/96 border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden"
            style={{ transformOrigin: "bottom right" }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
              {/* Header */}
              <div className="px-5 pt-5 pb-4 border-b border-white/8">
                <div className="flex items-center gap-2.5">
                  <CookieIcon className="w-5 h-5 text-white/50 shrink-0" />
                  <h2 className="text-sm font-semibold tracking-tight">Cookies</h2>
                </div>
                <p className="mt-2 text-xs text-white/45 leading-relaxed">
                  Táto stránka používa iba nevyhnutné technické cookies potrebné pre správne fungovanie.
                  Žiadne analytické ani reklamné cookies nepoužívame.
                </p>
              </div>

              {/* Categories */}
              <div className="px-5 py-4 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">Nevyhnutné</p>
                    <p className="text-xs text-white/35 mt-0.5 leading-relaxed">
                      Ukladajú vaše preferencie (napr. toto nastavenie). Bez nich stránka nefunguje správne.
                    </p>
                  </div>
                  <Toggle checked disabled />
                </div>
              </div>

              {/* Links */}
              <div className="px-5 pb-3">
                <p className="text-[11px] text-white/25 leading-relaxed">
                  Viac informácií v{" "}
                  <a href="/zasady-ochrany-osobnych-udajov" className="underline underline-offset-2 hover:text-white/50 transition">
                    Zásadách ochrany os. údajov
                  </a>{" "}
                  a na stránke{" "}
                  <a href="/cookies" className="underline underline-offset-2 hover:text-white/50 transition">
                    Cookies
                  </a>
                  .
                </p>
              </div>

              {/* Actions */}
              <div className="px-5 pb-5 flex gap-2.5">
                <button
                  onClick={() => saveConsent({ essential: true, analytics: false })}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white text-xs font-semibold text-black hover:bg-emerald-400 transition cursor-pointer"
                >
                  Rozumiem
                </button>
              </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
