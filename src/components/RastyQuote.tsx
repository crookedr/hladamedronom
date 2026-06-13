"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function RastyQuote() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-28">
      <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-20 items-center">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <p className="text-white/38 text-sm leading-6 mb-10">
            Príbeh, ktorý nás definoval
          </p>

          <div className="space-y-1 mb-10">
            <div className="overflow-hidden">
              <motion.h3
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, ease: EASE }}
                className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]"
              >
                Ďakujeme,
              </motion.h3>
            </div>
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, ease: EASE, delay: 0.08 }}
                className="block text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-white/45"
              >
                Rasty.
              </motion.span>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            className="text-white/65 leading-8 text-lg max-w-xl"
          >
            Rasty už medzi nami nie je. Zanechal však{" "}
            <span className="text-white font-medium">silný odkaz.</span>{" "}
            Vďaka nemu vzniklo združenie, ktoré dnes pomáha hľadať a zachraňovať ďalšie zvieratá.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.4 }}
            className="mt-10 text-white/28 italic text-base leading-7"
          >
            „Jeho príbeh je začiatkom všetkého, čo dnes robíme."
          </motion.p>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          className="hidden md:block relative w-72 h-[480px] rounded-2xl overflow-hidden shrink-0"
        >
          <Image
            src="/team/dakujemerasty.webp"
            alt="Rasty"
            fill
            className="object-cover"
            sizes="288px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>

      </div>
    </section>
  );
}
