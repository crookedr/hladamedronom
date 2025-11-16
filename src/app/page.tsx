"use client";

import Navigbar from "@/components/Navigbar";
import Hero from "@/components/Hero";
import MapSectionClient from "@/components/MapSectionClient";
import ContactBlock from "@/components/ContactBlock";
import Postup from "@/components/Postup";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigbar />
      <main className="pt-16">
        <Hero />

        <section id="pokrytie" className="mx-auto max-w-6xl px-6 pt-16 pb-12 scroll-mt-24">
          <header className="text-center mb-6">
            <h2 className="text-4xl md:text-4xl font-semibold tracking-tight">Pokrytie</h2>
            <p className="text-white/70 max-w-2xl mx-auto mt-2">
              Nižšie môžete vidieť lokality, kde aktuálne pôsobíme
            </p>
          </header>
          <MapSectionClient />
        </section>

        <Postup />

        <section id="kontakt" className="mx-auto max-w-6xl px-6 pt-12 mt-12 pb-20 scroll-mt-24">
          <ContactBlock />
        </section>

        <Footer />
      </main>
    </>
  );
}