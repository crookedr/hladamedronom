"use client";

import Navigbar from "@/components/Navigbar";
import Footer from "@/components/Footer";
import RastyHero from "@/components/RastyHero";
import RastyTimeline from "@/components/RastyTimeline";
import { motion } from "framer-motion";

export default function RastyPage() {
  return (
    <>
      <Navigbar />
      <main className="pt-16">
        <RastyHero />

        <section className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Rasty – náš začiatok
              </h2>
              <p className="mt-3 text-white/80 leading-7">
                Rasty bol psík predsedu nášho OZ. Stratil sa jeho rodičom a hľadali sme ho
                nepretržite <span className="font-semibold text-white">6 dní</span>.
                Do akcie sa zapojilo obrovské množstvo dobrovoľníkov a nakoniec aj dronista Dominik z Bratislavy.
                Práve vďaka tomuto príbehu vzniklo občianske združenie{" "}
                <span className="font-semibold text-white">Hľadáme Dronom.</span>
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <h3 className="text-sm uppercase tracking-wider text-white/60">
                  Poznámka
                </h3>
                <p className="mt-2 text-white/80 text-sm leading-6">
                  O celom príbehu existuje 20-minútové video na Facebooku. Nižšie si ho
                  môžete pozrieť priamo tu, alebo otvoriť na Facebooku.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-6">
          <RastyTimeline />
        </section>

        <section id="video" className="mx-auto max-w-6xl px-6 py-10">
          <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/[0.03]">
            <div className="aspect-video w-full bg-black/40">
              <iframe
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Ffb.watch%2FDf5JjbgMb5%2F&show_text=false&width=1280"
                width="1280"
                height="720"
                className="w-full h-full"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pt-16 pb-24 relative">
          {/* jemný svetlý kruh v pozadí */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-10 h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl"
          />

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            {/* vertikálna decentná čiara */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-white/10" />

            <div className="pl-6 md:pl-8">
              <p className="uppercase tracking-widest text-xs text-white/50 mb-3">
                Príbeh, ktorý nás definoval
              </p>

              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Ďakujeme, Rasty
              </h3>

              <p className="mt-4 text-white/80 leading-7 max-w-2xl">
                Rasty už medzi nami nie je. Zanechal však{" "}
                <span className="text-white font-medium">silný odkaz.</span>  
                Vďaka nemu vzniklo združenie, ktoré dnes pomáha hľadať a zachraňovať ďalšie zvieratá.
              </p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                className="mt-6 text-sm text-white/50 italic max-w-md"
              >
                „Jeho príbeh je začiatkom všetkého, čo dnes robíme.“
              </motion.p>
            </div>
          </motion.div>
        </section>

        <Footer />
      </main>
    </>
  );
}
