// src/app/zasady-ochrany-osobnych-udajov/page.tsx
export default function ZasadyOchranyOsobnychUdajov() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-semibold mb-6">
        Zásady ochrany osobných údajov
      </h1>

      <p className="text-white/80 mb-4">
        Tieto zásady ochrany osobných údajov vysvetľujú, ako občianske združenie{" "}
        <strong>OZ Hľadáme Dronom</strong> spracúva osobné údaje v súlade s nariadením
        Európskeho parlamentu a Rady (EÚ) 2016/679 (GDPR) a príslušnou legislatívou
        Slovenskej republiky.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Kto sme</h2>
      <p className="text-white/80 mb-4">
        Prevádzkovateľom tejto webovej stránky a spracovateľom osobných údajov je
        občianske združenie <strong>OZ Hľadáme Dronom</strong>. V prípade otázok nás
        môžete kontaktovať na e-mailovej adrese{" "}
        <a
          href="mailto:hladamedronom@gmail.com"
          className="underline underline-offset-4"
        >
          hladamedronom@gmail.com
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Aké údaje spracúvame
      </h2>
      <p className="text-white/80 mb-2">
        V závislosti od toho, ako používate túto webovú stránku, môžeme spracúvať
        najmä tieto údaje:
      </p>
      <ul className="list-disc list-inside text-white/80 mb-4 space-y-1">
        <li>identifikačné údaje (napr. meno, priezvisko – ak nám ich dobrovoľne odošlete),</li>
        <li>kontaktné údaje (napr. e-mail, telefónne číslo),</li>
        <li>
          obsah správy, ktorú nám zašlete prostredníctvom kontaktného formulára alebo e-mailu,
        </li>
        <li>
          technické údaje o používaní stránky (IP adresa, typ prehliadača, približná
          lokalita, anonymizované analytické údaje – ak s tým udelíte súhlas).
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Na aký účel údaje používame
      </h2>
      <ul className="list-disc list-inside text-white/80 mb-4 space-y-1">
        <li>odpovedanie na vaše otázky a spracovanie požiadaviek,</li>
        <li>organizáciu pátracích akcií a komunikáciu s dobrovoľníkmi,</li>
        <li>vedenie internej evidencie a štatistík,</li>
        <li>zlepšovanie fungovania webovej stránky a jej obsahu,</li>
        <li>plnenie zákonných povinností občianskeho združenia.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Právne základy spracúvania
      </h2>
      <p className="text-white/80 mb-4">
        Osobné údaje spracúvame najmä na základe:
      </p>
      <ul className="list-disc list-inside text-white/80 mb-4 space-y-1">
        <li>vášho súhlasu (napr. pri analytických cookies),</li>
        <li>oprávneného záujmu OZ (komunikácia, ochrana práv a majetku OZ),</li>
        <li>plnenia našich zákonných povinností.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Ako dlho údaje uchovávame
      </h2>
      <p className="text-white/80 mb-4">
        Údaje uchovávame len po dobu nevyhnutnú na splnenie účelu, na ktorý boli
        získané, alebo po dobu požadovanú právnymi predpismi. Následne sú údaje
        bezpečne zmazané alebo anonymizované.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Komu môžu byť údaje sprístupnené
      </h2>
      <p className="text-white/80 mb-4">
        Osobné údaje neposkytujeme tretím stranám, s výnimkou dôveryhodných
        poskytovateľov služieb (napr. hosting, e-mailové služby, analytické nástroje),
        ktorým sú údaje sprístupnené len v nevyhnutnom rozsahu a na základe
        zmluvného vzťahu zabezpečujúceho ochranu osobných údajov.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Vaše práva</h2>
      <p className="text-white/80 mb-2">
        Ako dotknutá osoba máte najmä tieto práva:
      </p>
      <ul className="list-disc list-inside text-white/80 mb-4 space-y-1">
        <li>právo na prístup k svojim osobným údajom,</li>
        <li>právo na opravu nepresných alebo neúplných údajov,</li>
        <li>právo na vymazanie („právo na zabudnutie“),</li>
        <li>právo na obmedzenie spracúvania,</li>
        <li>právo namietať proti spracúvaniu,</li>
        <li>právo na prenositeľnosť údajov, ak je to technicky možné,</li>
        <li>právo podať sťažnosť na Úrad na ochranu osobných údajov SR.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Kontakt pre otázky ohľadom ochrany osobných údajov
      </h2>
      <p className="text-white/80 mb-4">
        V prípade otázok alebo uplatnenia vašich práv nás kontaktujte na{" "}
        <a
          href="mailto:hladamedronom@gmail.com"
          className="underline underline-offset-4"
        >
          hladamedronom@gmail.com
        </a>
        .
      </p>

      <p className="text-xs text-white/50 mt-10">
        Posledná aktualizácia: 9. december 2025
      </p>
    </main>
  );
}
