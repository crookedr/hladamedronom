"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeNav } from "@/hooks/useSwipeNav";

const EASE = [0.16, 1, 0.3, 1] as const;

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
    role: "Spoluzakladateľ združenia",
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
      "Marek je rodákom z Novej Dubnice a jeho \"revírom\" pátracích aktivít je široké okolie jeho bydliska smerujúce vyššie na sever, vďaka čomu dokáže prísť na pomoc napríklad aj do Považskej Bystrice. Je špičkový pilot, ktorý dokonca s dronmi podniká a venuje sa 3D skenovaniu, mapovaniu a ďalším aktivitám v spoločnosti MACH-TECH. Je veľkým prínosom pre združenie a majiteľov stratených zvierat a najbližšie ho čaká veľa aktivít spojených s lokalizovaním srnčej zveri na poliach pred začatím kosby, na ktoré využíva výhradne svoju techniku a materiál a to presne DJI MATRICE 4T s príslušenstvom. Marek lieta pre združenie od leta 2025.",
    imgPos: "center",
    imgPosMobile: "center 30%",
  },
  {
    name: "Juraj",
    role: "Dronista",
    img: "/team/06.webp",
    bio:
      "Juraj pochádza z Veľkých Loviec a býva v obci Alekšince a je dôležitou súčasťou nášho tímu. Ako pilot termovízneho dronu DJI MATRICE 4T prináša do našej činnosti spoľahlivosť, precíznosť a zodpovedný prístup. Aktívne sa podieľa na pátraní po nezvestných zvieratách a na ochrane srnčej zveri počas sezóny kosenia. Okrem lietania náš tím podporuje aj svojimi skúsenosťami a ochotou pomôcť v každej situácii.",
    imgPos: "center top",
  },
    {
    name: "Oliver",
    role: "Dronista",
    img: "/team/07.webp",
    bio:
      "Oliver pochádza z Popradu a dronom sa venuje už viac ako 10 rokov. Pri pátraní využíva najmä termovízny dron DJI Mavic 3TA. Do Hľadáme Dronom sa zapojil ako milovník zvierat, ktorý chce svoje skúsenosti s dronmi využiť na pomoc pri hľadaní nezvestných zvierat a lokalizovaní srnčej zveri pred kosbou. Sám má psa Gennara, a preto dobre vie, aké ťažké je, keď sa človeku stratí jeho štvornohý parťák.",
    imgPos: "center",
  },
    {
    name: "Peter",
    role: "Dronista",
      img: "/team/08.webp",
    bio:
      "Nový pilot dronov, ktorý vám bude nápomocný pre oblasť Dunajská Lužná a 100 km okruh. Peťo je profesionálny pilot dronov, ktorý sa pracovne venuje AGRO dronom. Je pripravený venovať svoj voľný čas na nezištnú pomoc vám a rovnako aj do dalších sezón pri lokalizovaní srnčej zveri na poliach pred začatím kosby. ",
    imgPos: "center top",
  },
];

function wrap(i: number, len: number) {
  return ((i % len) + len) % len;
}

const ACTIVE_W = 900;
const SIDE_W = 260;
const SAFE_GAP = 40;
const SIDE_GAP = 18;
const CANVAS_H = 680;

type SharedProps = {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  onInteract: () => void;
};

function MobileView({ active, setActive, onInteract }: SharedProps) {
  const [showBio, setShowBio] = useState(false);

  useEffect(() => { setShowBio(false); }, [active]);

  const next = () => {
    onInteract();
    setActive((i) => wrap(i + 1, members.length));
  };
  const prev = () => {
    onInteract();
    setActive((i) => wrap(i - 1, members.length));
  };

  const { ref: swipeRef, onTouchStart, onTouchEnd } = useSwipeNav<HTMLDivElement>(next, prev);

  const m = members[active];

  return (
    <section className="md:hidden px-6">
      <div
        ref={swipeRef}
        className="relative rounded-2xl overflow-hidden bg-white/[0.04] ring-1 ring-white/15 shadow-2xl shadow-black/40"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Photo */}
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

        {/* Card footer */}
        <div className="p-5 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-xl font-semibold truncate">{m.name}</h3>
            <p className="text-white/55 text-sm mt-0.5 truncate">{m.role}</p>
          </div>
          <button
            onClick={() => setShowBio(true)}
            aria-label="Zobraziť bio"
            className="cursor-pointer shrink-0 w-9 h-9 rounded-full border border-white/20 hover:border-white/50 transition flex items-center justify-center text-white/55 hover:text-white"
          >
            <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="8" cy="8" r="6.5" />
              <path strokeLinecap="round" d="M8 7.5v4" />
              <circle cx="8" cy="5.2" r="0.6" fill="currentColor" stroke="none" />
            </svg>
          </button>
        </div>

        <div className="pb-5 flex items-center justify-center gap-2">
          {members.map((_, i) => (
            <button
              key={i}
              onClick={() => { onInteract(); setActive(i); }}
              className={`cursor-pointer h-2 rounded-full transition-all ${
                i === active ? "w-6 bg-white" : "w-2 bg-white/35 hover:bg-white/55"
              }`}
              aria-label={`Zvoliť ${i + 1}`}
            />
          ))}
        </div>

        {/* Bio overlay — covers entire card, slides up from bottom */}
        <AnimatePresence>
          {showBio && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.42, ease: EASE }}
              className="absolute inset-0 bg-[#0d0f12]/96 backdrop-blur-md p-4 overflow-y-auto"
            >
              <button
                onClick={() => setShowBio(false)}
                className="cursor-pointer absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center text-white/60 hover:text-white"
                aria-label="Zavrieť"
              >
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" d="M4 4l8 8M12 4l-8 8" />
                </svg>
              </button>
              <p className="text-[13px] text-white/80 leading-[1.75] mt-10">
                {m.bio}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function DesktopView({
  active,
  setActive,
  onInteract,
  winW,
}: SharedProps & { winW: number }) {
  const next = () => {
    onInteract();
    setActive((i) => wrap(i + 1, members.length));
  };
  const prev = () => {
    onInteract();
    setActive((i) => wrap(i - 1, members.length));
  };

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

  const { ref: swipeRef, onTouchStart, onTouchEnd } = useSwipeNav<HTMLElement>(next, prev);

  return (
    <section
      ref={swipeRef}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
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
          className="cursor-pointer h-12 w-12 rounded-full ring-1 ring-white/20 bg-black/50 hover:bg-black/70 transition grid place-items-center"
          aria-label="Predchádzajúci"
        >
          ←
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 z-50 flex items-center pr-3">
        <button
          type="button"
          onClick={next}
          className="cursor-pointer h-12 w-12 rounded-full ring-1 ring-white/20 bg-black/50 hover:bg-black/70 transition grid place-items-center"
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
                      onInteract();
                      setActive(i);
                    }}
                    className="cursor-pointer block w-full rounded-2xl overflow-hidden bg-white/[0.05] shadow-xl shadow-black/30 ring-1 ring-white/10 hover:bg-white/[0.08] transition"
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
}

export default function TeamGrid() {
  const [active, setActive] = useState(0);
  const [winW, setWinW] = useState<number>(
    typeof window === "undefined" ? 1280 : window.innerWidth
  );
  const [hasInteracted, setHasInteracted] = useState(false);

  const onInteract = () => setHasInteracted(true);

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

  return (
    <>
      <MobileView active={active} setActive={setActive} onInteract={onInteract} />
      <DesktopView active={active} setActive={setActive} onInteract={onInteract} winW={winW} />
    </>
  );
}
