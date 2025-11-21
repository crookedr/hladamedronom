"use client";

import Navigbar from "@/components/Navigbar";
import dynamic from "next/dynamic";
import PhotoCarousel from "@/components/PhotoCarousel";
import Footer from "@/components/Footer";
import Fungovanie from "@/components/Fungovanie";

const TeamGrid = dynamic(() => import("@/components/TeamGrid"), { ssr: false });

export default function NasTimPage() {
  return (
    <>
      <Navigbar />
      <main className="pt-16">
        <section id="tim" className="mx-auto max-w-6xl px-6 pt-16 pb-14 scroll-mt-40">
          <header className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Náš tím</h1>
            <p className="text-white/70 max-w-2xl mx-auto mt-3">
              Sme partia nadšencov dronov, techniky a pátrania. Zoznám sa s nami
            </p>
          </header>
          <TeamGrid />
        </section>
      
        <Fungovanie id="fungovanie"/>

        <section id="fotogaleria" className="mx-auto max-w-6xl px-6 pb-16">
          <PhotoCarousel />
        </section>

        <Footer />
      </main>
    </>
  );
}
