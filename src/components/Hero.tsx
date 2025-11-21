"use client";

import Image from "next/image";
import ozLogo from "/public/ozlogo.png";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <video
        className="
          absolute inset-0 h-full w-full z-0 object-cover
          object-[80%_50%]       /* mobily: posun doprava (X=80%, Y=50%) */
          sm:object-[75%_50%]    /* menšie tablety: jemnejšie doprava */
          md:object-[50%_50%]    /* od md+: späť do stredu */
        "
        src="/search-mission.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20 text-center px-6 max-w-3xl animate-fade-in">
        <div className="flex flex-col items-center mb-6">
          <Image
            src={ozLogo}
            alt="Logo OZ"
            className="w-36 h-36 object-contain drop-shadow-xl"
            priority
          />
          <h1 className="text-4xl md:text-5xl font-bold mt-4 md:mr-6 text-white">
            Hľadáme Dronom
          </h1>
        </div>
        <p className="text-white/80 text-lg md:mr-6 md:text-xl">
          Rýchla pomoc z neba pre stratené zvieratá
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 md:mr-6 md:ml-2 text-sm font-medium bg-white text-black hover:bg-emerald-400 transition"
          >
            Požiadať o pomoc
          </a>
          <a
            href="#pokrytie"
            className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 md:mr-6 text-sm font-medium border border-white/20 hover:border-white/40 transition"
          >
            Pozrieť pokrytie
          </a>
        </div>
      </div>
    </section>
  );
}
