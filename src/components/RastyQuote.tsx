"use client";

import { motion } from "framer-motion";

export default function RastyQuote() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-24 relative">
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
            <span className="text-white font-medium">silný odkaz.</span> Vďaka nemu vzniklo združenie, ktoré dnes pomáha hľadať a zachraňovať ďalšie zvieratá.
          </p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            className="mt-6 text-sm text-white/50 italic max-w-md"
          >
            „Jeho príbeh je začiatkom všetkého, čo dnes robíme."
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
