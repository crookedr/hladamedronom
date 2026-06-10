import type { Metadata } from "next";
import Navigbar from "@/components/Navigbar";
import Footer from "@/components/Footer";
import RastyHero from "@/components/RastyHero";
import RastyTimeline from "@/components/RastyTimeline";
import RastyQuote from "@/components/RastyQuote";

export const metadata: Metadata = {
  title: "Rasty – náš príbeh",
  description:
    "Príbeh Rastyho – psíka, ktorý inšpiroval vznik OZ Hľadáme Dronom. Spoznajte, ako sa začalo pátranie pomocou dronu na Slovensku.",
  openGraph: {
    title: "Rasty – náš príbeh | Hľadáme Dronom",
    description:
      "Príbeh Rastyho – psíka, ktorý inšpiroval vznik OZ Hľadáme Dronom. Spoznajte, ako sa začalo pátranie pomocou dronu na Slovensku.",
    url: "https://www.hladamedronom.sk/rasty",
  },
};

export default function RastyPage() {
  return (
    <>
      <Navigbar />
      <main className="pt-16">
        <RastyHero />

        <section className="mx-auto max-w-3xl px-6 pt-14 pb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-snug">
            Rasty – náš začiatok
          </h2>
          <p className="mt-6 text-white/75 leading-8 text-lg">
            Rasty bol psík predsedu nášho OZ. Stratil sa jeho rodičom a hľadali sme ho
            nepretržite <span className="text-white font-semibold">6 dní</span>.
            Do akcie sa zapojilo obrovské množstvo dobrovoľníkov a nakoniec aj dronista Dominik z Bratislavy.
            Práve vďaka tomuto príbehu vzniklo občianske združenie{" "}
            <span className="text-white font-semibold">Hľadáme Dronom.</span>
          </p>
          <p className="mt-5 text-white/40 text-sm leading-7">
            O celom príbehu existuje 20-minútové video na Facebooku, ktoré si môžete pozrieť aj priamo tu.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-6">
          <RastyTimeline />
        </section>

        <section id="video" className="mx-auto max-w-5xl px-6 py-6 pb-16">
          <div className="aspect-video w-full overflow-hidden rounded-xl">
            <iframe
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Ffb.watch%2FDf5JjbgMb5%2F&show_text=false&width=1280"
              width="1280"
              height="720"
              className="w-full h-full"
              style={{ border: "none", overflow: "hidden" }}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>

        <RastyQuote />

        <Footer />
      </main>
    </>
  );
}
