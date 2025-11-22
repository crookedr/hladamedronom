"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Member = {
  name: string;
  role: string;
  img: string;
  bio: string;
  imgPos?: string;
  imgPosMobile?: string;
};

const members: Member[] = [
  {
    name: "Jakub",
    role: "Predseda združenia",
    img: "/team/01.webp",
    bio:
      "Čaute, ja som Jakub a som predseda občianskeho združenia OZ Hľadáme Dronom. Spolu s mojou partnerkou a kamarátom Romanom sme založili združenie, ktoré pomáha pri hľadaní nezvestných zvierat pomocou termovíznych dronov. Okrem pátrania sa venujeme aj lokalizovaniu srnčej zvery na poliach pred kosbou, o čo sa starajú všetci naši piloti v sezóne. Veľmi si vážim každého dobrovoľníka, ktorý venuje svoj čas a energiu na pomoc majiteľom stratených zvierat. Mojím cieľom je rozšíriť naše aktivity do všetkých regiónov Slovenska a vybudovať silnú komunitu ľudí, ktorým záleží na zvieratách.",
    imgPos: "center",
  },
  {
    name: "Roman",
    role: "Člen združenia",
    img: "/team/02.webp",
    bio:
      "Roman je jeden zo zakladateľov a aktívnych členov združenia. Má na starosti najmä technickú stránku fungovania, ktorá začína od nastavovania sociálnych sietí a potrebných online nástrojov až po vývoj a prevádzku tejto webovej stránky, na ktorú sa práve pozeráte. V združení sa zameriava na to, aby všetko fungovalo moderne. Jeho cieľom je podieľať sa na stabilnom a správnom chode združenia, pomáhať rozvíjať naše projekty a hľadať nové riešenia, ktoré posunú naše fungovanie o krok ďalej. Zároveň chce postupne budovať silnú online prítomnosť, ktorá priblíži naše fungovanie verejnosti a posilní dôveru v to, čo robíme.",
    imgPos: "center",
  },
  {
    name: "Simona",
    role: "Podpredsedníčka združenia",
    img: "/team/03.webp",
    bio:
      "Simona je jednou zo zakladateliek združenia a pochádza z Trenčína. Stará sa o komunikáciu s majiteľmi stratených zvierat a spravuje naše sociálne siete, kde s citom zdieľa ich príbehy a prináša aktuálne informácie o našej činnosti. Je neoddeliteľnou súčasťou tímu, pretože svojimi nápadmi, energiou a zodpovedným prístupom pomáha združeniu napredovať. Vždy je ochotná pomôcť, prináša pozitívnu atmosféru a motivuje ostatných svojím odhodlaním a úprimným vzťahom k zvieratám.",
    imgPos: "center 35%",
  },
  {
    name: "Tomáš",
    role: "Dronista",
    img: "/team/04.webp",
    bio:
      "Tomáš pochádza z Nového Mesta nad Váhom. Je profesionálny, špičkový pilot, ktorý sa zaujíma o drony od roku 2014 a je veľkým leteckým fanúšikom. Zabezpečuje časť západného Slovenska v širokom okolí svojho bydliska a pre naše združenie lieta od začiatku roka 2025 a za sebou má desiatky letov a niekoľko úspešných nájdení stratených zvierat. Na podporné aktivity z oblohy využíva špičkový termovízny dron DJI MATRICE 4T. Pre naše združenie je veľkým prínosom aj v rámci poradenstva v oblasti dronov a technológií potrebných na účely združenia.",
    imgPos: "center",
  },
  {
    name: "Marek",
    role: "Dronista",
    img: "/team/05.webp",
    bio:
      "Marek je rodákom z Novej Dubnice a jeho “revírom“ pátracích aktivít je široké okolie jeho bydliska smerujúce vyššie na sever, vďaka čomu dokáže prísť na pomoc napríklad aj do Považskej Bystrice. Je špičkový pilot, ktorý dokonca s dronmi podniká a venuje sa 3D skenovaniu, mapovaniu a ďalším aktivitám v spoločnosti MACH-TECH. Je veľkým prínosom pre združenie a majiteľov stratených zvierat a najbližšie ho čaká veľa aktivít spojených s lokalizovaním srnčej zveri na poliach pred začatím kosby, na ktoré využíva výhradne svoju techniku a materiál a to presne DJI MATRICE 4T s príslušenstvom. Marek lieta pre združenie od leta 2025.",
    imgPos: "center",
    imgPosMobile: "center 30%",
  },
  {
    name: "Juraj",
    role: "Dronista",
    img: "/team/06.webp",
    bio:
      "Juraj pochádza z Veľkých Loviec a býva v obci Alekšince a je najnovším dobrovoľníkom a zabezpečuje širokú oblasť jeho bydliska smerujúcu na Trnavu a južnejšie od Nitry. Juraj je v našom tíme od novembra 2025 a je pilotom termovízneho dronu DJI MAVIC 3T. Juraj bude mať na starosť podporu z oblohy za účelom pátrania po nezvestných zvieratách a lokalizovanie srnčej zveri na poliach pred začatím kosby, rovnako ako ostatní piloti.",
    imgPos: "center top",
  },
];

function wrap(i: number, len: number) {
  return ((i % len) + len) % len;
}

export default function TeamGrid() {
  const [active, setActive] = useState(0);
  const [winW, setWinW] = useState<number>(
    typeof window === "undefined" ? 1280 : window.innerWidth
  );
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (hasInteracted) return;

    const interval = setInterval(() => {
      setActive((i) => wrap(i + 1, members.length));
    }, 10000);

    return () => clearInterval(interval);
  }, [hasInteracted]);

  useEffect(() => {
    const onR = () => setWinW(window.innerWidth);
    onR();
    window.addEventListener("resize", onR, { passive: true });
    return () => window.removeEventListener("resize", onR);
  }, []);

  const Mobile = () => {
    const next = () => {
      setHasInteracted(true);
      setActive((i) => wrap(i + 1, members.length));
    };

    const prev = () => {
      setHasInteracted(true);
      setActive((i) => wrap(i - 1, members.length));
    };

    const startX = useRef<number | null>(null);
    const onTouchStart = (e: React.TouchEvent) => {
      startX.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e: React.TouchEvent) => {
      if (startX.current == null) return;
      const dx = e.changedTouches[0].clientX - startX.current;
      startX.current = null;
      if (Math.abs(dx) > 40) {
        if (dx < 0) next();
        else prev();
      }
    };

    const m = members[active];

    return (
      <section className="md:hidden px-6">
        <div
          className="rounded-2xl overflow-hidden bg-white/[0.04] ring-1 ring-white/15 shadow-2xl shadow-black/40"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative w-full aspect-[4/5] bg-black/40">
            <Image
              src={m.img}
              alt={m.name}
              fill
              sizes="100vw"
              priority
              style={{
                objectFit: "cover",
                objectPosition: m.imgPosMobile ?? m.imgPos ?? "center",
              }}
            />
          </div>

          <div className="p-5">
            <h3 className="text-2xl font-semibold">{m.name}</h3>
            <p className="text-white/60 mt-1">{m.role}</p>
            <p className="mt-3 text-white/80 leading-7">{m.bio}</p>

            <div className="mt-5 flex items-center justify-center gap-2">
              {members.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setHasInteracted(true);
                    setActive(i);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? "w-6 bg-white" : "w-2 bg-white/35 hover:bg-white/55"
                  }`}
                  aria-label={`Zvoliť ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  const Desktop = ({ winW }: { winW: number }) => {
    const next = () => {
      setHasInteracted(true);
      setActive((i) => wrap(i + 1, members.length));
    };

    const prev = () => {
      setHasInteracted(true);
      setActive((i) => wrap(i - 1, members.length));
    };

    const ACTIVE_W = 900;
    const SIDE_W = 260;
    const SAFE_GAP = 40;
    const SIDE_GAP = 18;
    const CANVAS_H = 680;

    const positions = useMemo(() => {
      const half = winW / 2;
      const margin = 16;
      const leftEdgeCenter = -half + margin + SIDE_W / 2;
      const rightEdgeCenter = half - margin - SIDE_W / 2;

      const leftInnerByEdge = leftEdgeCenter + SIDE_W + SIDE_GAP;
      const rightInnerByEdge = rightEdgeCenter - SIDE_W - SIDE_GAP;

      const leftInnerBySafe = -(ACTIVE_W / 2) - SAFE_GAP - SIDE_W / 2;
      const rightInnerBySafe = ACTIVE_W / 2 + SAFE_GAP + SIDE_W / 2;

      const leftInner = Math.min(leftInnerByEdge, leftInnerBySafe);
      const rightInner = Math.max(rightInnerByEdge, rightInnerBySafe);

      return {
        "-2": leftEdgeCenter,
        "-1": leftInner,
        "0": 0,
        "1": rightInner,
        "2": rightEdgeCenter,
      } as const;
    }, [winW]);

    const sideCount = winW >= 1024 ? 2 : 1;

    const getDelta = (i: number) => {
      const right = wrap(i - active, members.length);
      const left = right - members.length;
      return Math.abs(left) < right ? left : right;
    };

    return (
      <section
        className="hidden md:block relative w-screen overflow-hidden left-1/2 -translate-x-1/2"
        aria-roledescription="carousel"
        aria-label="Náš tím"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0b0d10] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0b0d10] to-transparent" />

        <div className="absolute inset-y-0 left-0 z-50 flex items-center pl-3">
          <button
            type="button"
            onClick={prev}
            className="h-12 w-12 rounded-full ring-1 ring-white/20 bg-black/50 hover:bg-black/70 transition grid place-items-center"
            aria-label="Predchádzajúci"
          >
            ←
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 z-50 flex items-center pr-3">
          <button
            type="button"
            onClick={next}
            className="h-12 w-12 rounded-full ring-1 ring-white/20 bg-black/50 hover:bg-black/70 transition grid place-items-center"
            aria-label="Ďalší"
          >
            →
          </button>
        </div>

        <div className="relative mx-auto w-full" style={{ height: CANVAS_H }}>
          <AnimatePresence initial={false}>
            {members.map((m, i) => {
              const d = getDelta(i);
              if (Math.abs(d) > sideCount) return null;

              const isActive = d === 0;

              let x = 0;
              if (d === -2) x = positions["-2"];
              else if (d === -1) x = positions["-1"];
              else if (d === 1) x = positions["1"];
              else if (d === 2) x = positions["2"];
              else x = positions["0"];

              const scale = isActive ? 1 : 0.92;
              const opacity = isActive ? 1 : 0.6;
              const z = isActive ? 60 : Math.abs(d) === 1 ? 40 : 30;

              return (
                <motion.article
                  key={m.name}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
                  style={{
                    zIndex: z,
                    width: isActive ? ACTIVE_W : SIDE_W,
                    maxWidth: "92vw",
                  }}
                  initial={{ x, scale, opacity }}
                  animate={{ x, scale, opacity }}
                  transition={{ type: "spring", stiffness: 260, damping: 26, mass: 0.8 }}
                  aria-roledescription={isActive ? "slide" : undefined}
                  aria-label={`${m.name} – ${m.role}`}
                >
                  {isActive ? (
                    <div className="rounded-2xl overflow-hidden bg-white/[0.04] shadow-2xl shadow-black/40 ring-1 ring-white/15">
                      <div className="grid md:grid-cols-2">
                        <div className="relative h-[560px] bg-black/40">
                          <Image
                            src={m.img}
                            alt={m.name}
                            fill
                            style={{ objectFit: "cover", objectPosition: m.imgPos ?? "center" }}
                            sizes="520px"
                            priority
                          />
                        </div>
                        <div className="p-8">
                          <h3 className="text-3xl font-semibold">{m.name}</h3>
                          <p className="text-white/60 mt-1">{m.role}</p>
                          <p className="mt-4 text-white/80 leading-7">{m.bio}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setHasInteracted(true);
                        setActive(i);
                      }}
                      className="block w-full rounded-2xl overflow-hidden bg-white/[0.05] shadow-xl shadow-black/30 ring-1 ring-white/10 hover:bg-white/[0.08] transition"
                      aria-label={`Zvoliť ${m.name}`}
                    >
                      <div className="relative w-full h-[320px] bg-black/40">
                        <Image
                          src={m.img}
                          alt={m.name}
                          fill
                          style={{ objectFit: "cover", objectPosition: m.imgPos ?? "center" }}
                          sizes="260px"
                          className="grayscale"
                        />
                      </div>
                      <div className="p-3 text-left">
                        <h4 className="font-semibold text-white/85 line-clamp-1">{m.name}</h4>
                        <p className="text-white/60 text-sm line-clamp-1">{m.role}</p>
                      </div>
                    </button>
                  )}
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </section>
    );
  };

  return (
    <>
      <Mobile />
      <Desktop winW={winW} />
    </>
  );
}
