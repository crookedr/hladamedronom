"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function RastyHero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[54vh] min-h-[360px] w-full">
        <Image
          src="/team/rastyy.webp"
          alt="Rasty – náš príbeh"
          fill
          priority
          className="object-cover object-[50%_35%]"
        />
        <div className="absolute inset-0 bg-black/55" />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0 grid place-items-center px-6"
        >
          <div className="max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Rasty</h1>
            <p className="mt-3 text-white/80 text-lg">
              Príbeh psíka, ktorý odštartoval vznik Hľadáme Dronom
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
