"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden -mt-16 flex items-center justify-center pt-16">
      <video
        className="absolute inset-0 h-full w-full z-0 object-cover object-top sm:object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/search-mission.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 z-10 bg-black/45" />

      <div className="relative z-20 w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center"
        >
          <Image
            src="/ozlogo.png"
            alt="Logo OZ"
            width={220}
            height={220}
            className="md:translate-x-1 w-52 h-52 md:w-56 md:h-56 object-contain drop-shadow-2xl mb-6"
            priority
          />

          <p className="text-base text-white/55">
            Rýchla pomoc z neba pre stratené zvieratá.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <a
              href="#pokrytie"
              className="md:-translate-x-2 w-full sm:w-auto inline-flex items-center justify-center rounded-2xl px-8 py-3.5 text-sm font-semibold bg-white text-black hover:bg-emerald-400 transition-colors"
            >
              Pozrieť pokrytie
            </a>
            <a
              href="#kontakt"
              className="translate-x-4 w-full sm:w-auto inline-flex items-center justify-center rounded-2xl px-8 py-3.5 text-sm font-medium text-white/80 border border-white/25 hover:border-white/50 hover:bg-white/5 transition-colors"
            >
              Požiadať o pomoc
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
