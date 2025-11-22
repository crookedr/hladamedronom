/* eslint-disable @next/next/no-img-element */
"use client";

import { FaFacebook, FaInstagram, FaEnvelope, FaYoutube, FaPhone } from "react-icons/fa";
import { useState, useCallback } from "react";

const ORG_IBAN = "SK06 0200 0000 0049 4368 5058";
const ORG_BIC = "SUBASKBX";
const ORG_PHONE = "+421 911 919 140";

function buildPayBySquareUrl() {
  const base = "https://api.freebysquare.sk/pay/v1/generate-png";
  const params = new URLSearchParams();
  params.set("size", "400");
  params.set("color", "1");
  params.set("transparent", "true");
  params.set("currencyCode", "EUR");
  params.set("amount", "");
  params.set("paymentNote", "Prispevok na OZ Hladame Dronom");
  params.set("iban", ORG_IBAN.replace(/\s+/g, ""));
  params.set("beneficiaryName", "Hladame Dronom");
  params.set("beneficiaryAddressLine1", "");
  params.set("beneficiaryAddressLine2", "");
  return `${base}?${params.toString()}`;
}

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [qrSrc, setQrSrc] = useState<string>(() => buildPayBySquareUrl());

  const handleCopyIban = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(ORG_IBAN.replace(/\s+/g, ""));
      setCopied(true);
      setTimeout(() => setCopied(false), 1300);
    } catch {
    }
  }, []);

  const handleQrError = useCallback(() => {
    setQrSrc("/qr/dar.svg");
  }, []);

  return (
    <footer className="mt-24 bg-[rgb(18,18,18)]">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="w-full bg-white/[0.035]">
        <div className="mx-auto max-w-7xl px-15 py-10 md:py-12">
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr_1fr] items-start">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">OZ Hľadáme Dronom</h3>
              <p className="text-white/70 leading-6">
                Pátranie po nezvestných zvieratách a lokalizovanie srnčej zveri na poliach
                pred začatím kosby pomocou termovíznych dronov.
              </p>

              <div className="flex items-center gap-3 text-white/80">
                <FaEnvelope className="shrink-0" />
                <a
                  href="mailto:hladamedronom@gmail.com"
                  className="hover:text-white transition"
                >
                  hladamedronom@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3 text-white/80">
                <FaPhone className="shrink-0" />
                <a href="tel:+421911919140" className="hover:text-white transition">
                  {ORG_PHONE}
                </a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between md:items-start md:gap-8">
              <div className="flex-1 text-white/80 leading-6">
                <h4 className="text-sm uppercase tracking-wider text-white/60 mb-2">
                  Podporte nás
                </h4>
                <p>
                  Mnoho ľudí sa nás pýta, koľko táto aktivita stojí. Nie sme firma a&nbsp;nerobíme to
                  pre peniaze a&nbsp;nikdy tak nebude! Sme tím dobrovoľníkov a&nbsp;v prípade, že našu
                  aktivitu chcete podporiť, poteší nás dobrovoľný finančný dar na účet nášho združenia.
                </p>

                <div className="mt-3">
                  <div className="text-xs uppercase tracking-wider text-white/60">IBAN</div>
                  <div className="mt-1 font-mono text-sm text-white select-all break-words">
                    {ORG_IBAN}
                  </div>
                  {ORG_BIC && (
                    <>
                      <div className="mt-2 text-xs uppercase tracking-wider text-white/60">BIC</div>
                      <div className="font-mono text-sm text-white">{ORG_BIC}</div>
                    </>
                  )}
                </div>
              </div>

              <div className="mt-5 md:mt-0 flex flex-col items-center shrink-0">
                <div className="rounded-md bg-white p-2 shadow-sm transition-transform hover:scale-105">
                  <img
                    src={qrSrc}
                    alt="Pay by Square QR – dobrovoľný dar pre OZ Hľadáme Dronom"
                    width={200}
                    height={200}
                    className="h-[200px] w-[200px] object-contain"
                    loading="lazy"
                    onError={handleQrError}
                  />
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <button
                    onClick={handleCopyIban}
                    className="rounded-md border border-white/15 px-3 py-1.5 text-xs hover:bg-white/10 transition"
                  >
                    {copied ? "IBAN skopírovaný" : "Skopírovať IBAN"}
                  </button>
                  <a
                    href={qrSrc}
                    download="oz-hladame-dronom-qr.png"
                    className="rounded-md border border-white/15 px-3 py-1.5 text-xs hover:bg-white/10 transition"
                  >
                    Stiahnuť QR
                  </a>
                </div>

                <div className="mt-1 text-center text-[10px] text-white/60">
                  Nefunguje sken? Použi IBAN ručne.<br />
                  Naskenuj priamo v aplikácii svojej banky.
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start">
              <h4 className="text-sm uppercase tracking-wider text-white/60">Sledujte nás</h4>
              <div className="mt-4 flex items-center gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61557228685729"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-black/30 hover:bg-black/20 transition"
                >
                  <FaFacebook className="text-xl text-white/80 group-hover:text-white" />
                </a>
                <a
                  href="https://www.instagram.com/ozhladamedronom/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-black/30 hover:bg-black/20 transition"
                >
                  <FaInstagram className="text-xl text-white/80 group-hover:text-white" />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=oELEBVXgLwU"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-black/30 hover:bg-black/20 transition"
                >
                  <FaYoutube className="text-xl text-white/80 group-hover:text-red-500 transition-colors duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-10 py-4 flex flex-col gap-1.5 md:flex-row md:items-center md:justify-between text-sm">
            <p className="text-white/60">© {new Date().getFullYear()} OZ Hľadáme Dronom</p>
            <p className="text-white/50">Vytvorené s láskou.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
