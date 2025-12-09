"use client";

import { useEffect, useState } from "react";

type Consent = {
  essential: boolean;
  analytics: boolean;
};

const STORAGE_KEY = "ozhd_cookie_consent_v1";

export default function Cookiebanner() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Consent;
        setConsent(parsed);
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    } catch {
      setIsOpen(true);
    }
  }, []);

  function saveConsent(next: Consent) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
    setConsent(next);
    setIsOpen(false);

    // sem môžeš dať init analytics, napr.:
    // if (next.analytics) initAnalytics();
  }

  function acceptAll() {
    saveConsent({ essential: true, analytics: true });
  }

  function rejectAnalytics() {
    saveConsent({ essential: true, analytics: false });
  }

  if (!mounted) return null;

  return (
    <>
      {/* malé plávajúce tlačidlo na zmenu nastavení po udelení súhlasu */}
      {consent && !isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 z-[9999] rounded-full bg-white/10 backdrop-blur px-4 py-2 text-xs text-white shadow-lg border border-white/20 hover:bg-white/15 transition"
        >
          Spravovať cookies
        </button>
      )}

      {/* hlavný banner / modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-end md:items-center justify-center pointer-events-none">
          <div className="pointer-events-auto w-full md:max-w-xl mx-4 mb-4 md:mb-0 rounded-2xl bg-[rgb(18,18,18)]/95 border border-white/10 shadow-xl p-5 md:p-6">
            <div className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold">Používame cookies</h2>
              <p className="text-sm text-white/80">
                Naša stránka používa nevyhnutné cookies na zabezpečenie základného
                fungovania a voliteľné analytické cookies na zlepšovanie obsahu.
                Môžete prijať všetky cookies alebo odmietnuť analytické cookies.
              </p>

              <p className="text-xs text-white/60">
                Viac informácií nájdete v{" "}
                <a
                  href="/zasady-ochrany-osobnych-udajov"
                  className="underline underline-offset-4 hover:text-white"
                >
                  Zásadách ochrany osobných údajov
                </a>{" "}
                a na stránke{" "}
                <a
                  href="/cookies"
                  className="underline underline-offset-4 hover:text-white"
                >
                  Cookies
                </a>
                .
              </p>

              <div className="mt-2 flex flex-col sm:flex-row gap-2 sm:justify-end">
                <button
                  onClick={rejectAnalytics}
                  className="px-4 py-2 rounded-lg border border-white/25 text-sm text-white hover:bg-white/10 transition"
                >
                  Odmietnuť analytické
                </button>
                <button
                  onClick={acceptAll}
                  className="px-4 py-2 rounded-lg bg-white text-sm text-black font-medium hover:bg-neutral-200 transition"
                >
                  Prijať všetky
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
