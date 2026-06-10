import type { Metadata } from "next";
import Navigbar from "@/components/Navigbar";
import Hero from "@/components/Hero";
import MapSectionClient from "@/components/MapSectionClient";
import ContactBlock from "@/components/ContactBlock";
import Postup from "@/components/Postup";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hľadáme Dronom | Pátranie po stratených zvieratách dronom",
  description:
    "Pomáhame nájsť stratené zvieratá pomocou termálneho dronu v Bratislave a Západnom Slovensku. Kontaktujte nás – sme dobrovoľníci a pomáhame bezplatne.",
  openGraph: {
    title: "Hľadáme Dronom | Pátranie po stratených zvieratách dronom",
    description:
      "Pomáhame nájsť stratené zvieratá pomocou termálneho dronu v Bratislave a Západnom Slovensku. Kontaktujte nás – sme dobrovoľníci a pomáhame bezplatne.",
    url: "https://www.hladamedronom.sk",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "OZ Hľadáme Dronom",
  url: "https://www.hladamedronom.sk",
  logo: "https://www.hladamedronom.sk/ozlogo.png",
  email: "hladamedronom@gmail.com",
  sameAs: ["https://www.facebook.com/hladamedronom"],
  description:
    "Dobrovoľnícke občianske združenie, ktoré pomáha hľadať stratené zvieratá pomocou termálneho dronu v Bratislave a Západnom Slovensku.",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Západné Slovensko",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigbar />
      <main className="pt-16">
        <Hero />

        <section id="pokrytie" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-6 pt-16 pb-6 text-center">
            <h2 className="text-4xl font-semibold tracking-tight">Pokrytie</h2>
            <p className="text-white/70 max-w-2xl mx-auto mt-2">
              Nižšie môžete vidieť lokality, kde aktuálne pôsobíme
            </p>
          </div>
          <div className="pb-12">
            <MapSectionClient />
          </div>
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
