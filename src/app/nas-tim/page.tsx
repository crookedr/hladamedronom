import type { Metadata } from "next";
import Navigbar from "@/components/Navigbar";
import PhotoCarousel from "@/components/PhotoCarousel";
import Footer from "@/components/Footer";
import Fungovanie from "@/components/Fungovanie";
import TeamGridClient from "@/components/TeamGridClient";
import PovedaliONas from "@/components/PovedaliONas";

export const metadata: Metadata = {
  title: "Náš tím",
  description:
    "Spoznajte dobrovoľnícky tím OZ Hľadáme Dronom – nadšencov dronov a pátrania, ktorí pomáhajú hľadať stratené zvieratá v Bratislave a Západnom Slovensku.",
  openGraph: {
    title: "Náš tím | Hľadáme Dronom",
    description:
      "Spoznajte dobrovoľnícky tím OZ Hľadáme Dronom – nadšencov dronov a pátrania, ktorí pomáhajú hľadať stratené zvieratá v Bratislave a Západnom Slovensku.",
    url: "https://www.hladamedronom.sk/nas-tim",
  },
};

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
          <TeamGridClient />
        </section>

        <PovedaliONas />

        <section id="fotogaleria" className="mx-auto max-w-6xl px-6 pb-16">
          <PhotoCarousel />
        </section>

        <Fungovanie id="fungovanie"/>

        <Footer />
      </main>
    </>
  );
}
