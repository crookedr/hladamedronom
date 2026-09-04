import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zásady ochrany osobných údajov",
  robots: { index: false, follow: false },
};

const text = "text-white/80 mb-4 leading-7";
const list = "list-disc pl-6 text-white/80 mb-4 space-y-2 leading-7";
const heading = "text-xl font-semibold mt-10 mb-3";
const link = "underline underline-offset-4 hover:text-white";

export default function ZasadyOchranyOsobnychUdajov() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-semibold mb-6">
        Zásady ochrany osobných údajov
      </h1>

      <p className={text}>
        Tieto zásady vysvetľujú, ako občianske združenie OZ Hľadáme Dronom
        spracúva osobné údaje pri prevádzke webovej stránky hladamedronom.sk a
        mobilnej aplikácie Hľadáme Dronom (ďalej spolu len „služby“). Osobné
        údaje spracúvame v súlade s nariadením Európskeho parlamentu a Rady
        (EÚ) 2016/679 (GDPR) a zákonom č. 18/2018 Z. z. o ochrane osobných údajov.
      </p>

      <h2 className={heading}>1. Prevádzkovateľ</h2>
      <div className={text}>
        <p><strong>OZ Hľadáme Dronom</strong></p>
        <p>Soblahov 770, 913 38 Soblahov</p>
        <p>IČO: 56 113 773</p>
        <p>
          E-mail: {" "}
          <a href="mailto:hladamedronom@gmail.com" className={link}>
            hladamedronom@gmail.com
          </a>
        </p>
      </div>
      <p className={text}>
        OZ Hľadáme Dronom je prevádzkovateľom osobných údajov. Na uvedený
        e-mail sa môžete obrátiť s otázkami aj so žiadosťou o uplatnenie práv.
      </p>

      <h2 className={heading}>2. Aké osobné údaje spracúvame</h2>
      <p className={text}>Podľa spôsobu používania našich služieb spracúvame najmä:</p>
      <ul className={list}>
        <li>
          <strong>údaje účtu a profilu:</strong> e-mail, používateľský
          identifikátor, meno alebo prezývku, priezvisko, rolu, stav schválenia
          účtu a dátumy vytvorenia, schválenia alebo zamietnutia účtu,
        </li>
        <li>
          <strong>dobrovoľné profilové údaje:</strong> telefónne číslo, mesto,
          krátky profilový popis a profilovú fotografiu,
        </li>
        <li>
          <strong>údaje o činnosti v aplikácii:</strong> účasť alebo odmietnutie
          účasti na pátraní či kosbe, reakcie, hlasovania, uložené príspevky,
          históriu účasti a používateľské nastavenia,
        </li>
        <li>
          <strong>komunikačný obsah:</strong> správy a fotografie v tímovom
          chate, oznamy, komentáre, spätnú väzbu a údaje pripojené k týmto
          príspevkom,
        </li>
        <li>
          <strong>údaje o pátraní a kosbe:</strong> názov alebo meno zvieraťa,
          popis, fotografia, miesto, dátum a čas udalosti a kontaktné údaje
          majiteľa zvieraťa; tieto údaje môže poskytnúť aj iná osoba než osoba,
          ktorej sa týkajú,
        </li>
        <li>
          <strong>údaje na zasielanie oznámení:</strong> push token zariadenia a
          voľby notifikácií,
        </li>
        <li>
          <strong>údaje z webového kontaktného formulára:</strong> meno,
          priezvisko, telefón, e-mail a obsah správy,
        </li>
        <li>
          <strong>technické údaje:</strong> IP adresa, údaje o zariadení,
          prehliadači alebo operačnom systéme, bezpečnostné a prevádzkové logy a
          približná lokalita odvodená z IP adresy, ak ich zaznamenajú naši
          poskytovatelia infraštruktúry.
        </li>
      </ul>

      <h2 className={heading}>3. Účely a právne základy</h2>
      <ul className={list}>
        <li>
          vytvorenie a správa účtu, overenie e-mailu, schválenie používateľa a
          poskytovanie funkcií aplikácie – plnenie zmluvného vzťahu alebo kroky
          na žiadosť používateľa pred jeho vznikom podľa čl. 6 ods. 1 písm. b)
          GDPR,
        </li>
        <li>
          organizovanie pátraní, kosení, komunikácie tímu a dobrovoľníckej
          činnosti – plnenie zmluvného vzťahu a oprávnený záujem OZ na riadnom a
          bezpečnom zabezpečení jeho činnosti podľa čl. 6 ods. 1 písm. b) a f)
          GDPR,
        </li>
        <li>
          odpovedanie na otázky, vybavenie požiadaviek a spätnej väzby – kroky
          vykonané na žiadosť dotknutej osoby a oprávnený záujem na komunikácii
          a zlepšovaní služieb podľa čl. 6 ods. 1 písm. b) a f) GDPR,
        </li>
        <li>
          zasielanie prevádzkových e-mailov a push notifikácií – poskytovanie
          požadovaných funkcií služby podľa čl. 6 ods. 1 písm. b) GDPR;
          jednotlivé typy push notifikácií možno vypnúť v nastaveniach aplikácie,
        </li>
        <li>
          ochrana účtov, prevencia zneužitia, riešenie incidentov a ochrana
          právnych nárokov – oprávnený záujem OZ podľa čl. 6 ods. 1 písm. f)
          GDPR,
        </li>
        <li>
          plnenie povinností vyplývajúcich zo zákona – čl. 6 ods. 1 písm. c)
          GDPR,
        </li>
        <li>
          nepovinné analytické alebo obdobné technológie – súhlas podľa čl. 6
          ods. 1 písm. a) GDPR, ak ich v budúcnosti zapneme; súhlas možno
          kedykoľvek odvolať rovnako jednoducho, ako bol udelený.
        </li>
      </ul>
      <p className={text}>
        Potvrdenie oboznámenia sa s týmito zásadami pri registrácii nie je
        súhlasom so všetkými spôsobmi spracúvania. Pri každom účele používame
        právny základ uvedený vyššie.
      </p>

      <h2 className={heading}>4. Povinné a dobrovoľné údaje</h2>
      <p className={text}>
        E-mail, heslo a meno alebo prezývka sú potrebné na vytvorenie a
        zabezpečenie účtu. Bez nich účet nemožno vytvoriť. Priezvisko pri
        registrácii a profilové údaje, ako telefón, mesto, popis a fotografia,
        sú dobrovoľné, pokiaľ pri konkrétnej činnosti neuvedieme inak. Heslo
        spracúva autentifikačná služba a OZ k jeho čitateľnej podobe nemá prístup.
      </p>

      <h2 className={heading}>5. Kto má k údajom prístup</h2>
      <p className={text}>
        K údajom majú prístup iba poverené osoby OZ v rozsahu potrebnom podľa
        ich roly. Niektoré profilové údaje, príspevky, reakcie a údaje o účasti
        sú viditeľné ostatným schváleným používateľom aplikácie, ktorým sú
        potrebné na tímovú spoluprácu. Údaje o konkrétnom pátraní alebo kosbe
        môžu byť sprístupnené členom a dobrovoľníkom zapojeným do organizácie
        danej udalosti.
      </p>

      <h2 className={heading}>6. Poskytovatelia služieb a prenosy údajov</h2>
      <p className={text}>
        Na prevádzku služieb používame najmä nasledujúcich poskytovateľov, ktorí
        môžu osobné údaje spracúvať v nevyhnutnom rozsahu:
      </p>
      <ul className={list}>
        <li>Google Firebase – prihlásenie, databáza a prevádzka aplikácie,</li>
        <li>Cloudflare – backendové služby, bezpečnosť a sprostredkovanie požiadaviek,</li>
        <li>Cloudinary – ukladanie a zobrazovanie nahraných fotografií,</li>
        <li>Expo – doručovanie push notifikácií,</li>
        <li>Resend – prevádzkové e-maily, napríklad overenie e-mailovej adresy,</li>
        <li>Web3Forms – doručenie správ z kontaktného formulára na webe,</li>
        <li>poskytovatelia hostingu webovej stránky a mapových podkladov.</li>
      </ul>
      <p className={text}>
        Niektorí poskytovatelia môžu údaje spracúvať aj mimo Európskeho
        hospodárskeho priestoru. V takom prípade sa prenos uskutočňuje iba pri
        existencii primeraného právneho mechanizmu, najmä rozhodnutia o
        primeranosti alebo štandardných zmluvných doložiek Európskej komisie.
      </p>

      <h2 className={heading}>7. Ako dlho údaje uchovávame</h2>
      <ul className={list}>
        <li>
          údaje účtu a profilu uchovávame počas existencie účtu; po jeho
          vymazaní odstránime údaje, ktoré už nepotrebujeme na iný oprávnený účel,
        </li>
        <li>
          fotografie odoslané v tímovom chate sú v aplikácii nastavené na
          odstránenie po 10 dňoch; textové správy možno odstrániť používateľom
          alebo administrátorom,
        </li>
        <li>
          záznamy o pátraniach, kosbách a účasti uchovávame počas ich organizácie
          a následne po dobu potrebnú na internú evidenciu činnosti OZ; keď už
          identifikácia osôb nie je potrebná, údaje vymažeme alebo anonymizujeme,
        </li>
        <li>
          spätnú väzbu a správy z kontaktných formulárov uchovávame do vybavenia
          požiadavky a následne najviac 12 mesiacov, ak ich nepotrebujeme na
          ochranu právnych nárokov,
        </li>
        <li>
          bezpečnostné a technické logy uchovávajú poskytovatelia podľa svojich
          retenčných lehôt a našich nastavení,
        </li>
        <li>
          údaje potrebné na splnenie zákonnej povinnosti alebo ochranu právnych
          nárokov uchovávame po dobu vyžadovanú príslušným predpisom alebo počas
          plynutia príslušnej premlčacej lehoty.
        </li>
      </ul>

      <h2 className={heading}>8. Vymazanie účtu</h2>
      <p className={text}>
        O vymazanie účtu môžete požiadať priamo v aplikácii alebo e-mailom na
        adresu prevádzkovateľa. Vymazaním účtu sa odstránia prihlasovacie a
        profilové údaje. Obsah, ktorý je potrebný na zachovanie evidencie udalostí,
        bezpečnosti tímovej komunikácie alebo ochranu práv iných osôb, môžeme
        primerane obmedziť, anonymizovať alebo uchovať, ak na to máme platný
        právny základ. Údaje môžu po obmedzený čas zostať v bezpečnostných zálohách.
      </p>

      <h2 className={heading}>9. Vaše práva</h2>
      <p className={text}>Za podmienok stanovených GDPR máte právo:</p>
      <ul className={list}>
        <li>získať prístup k svojim údajom a ich kópiu,</li>
        <li>požiadať o opravu nepresných alebo neúplných údajov,</li>
        <li>požiadať o vymazanie alebo obmedzenie spracúvania,</li>
        <li>namietať proti spracúvaniu založenému na oprávnenom záujme,</li>
        <li>získať údaje v prenosnom formáte, ak sú splnené zákonné podmienky,</li>
        <li>kedykoľvek odvolať súhlas bez vplyvu na zákonnosť pred odvolaním,</li>
        <li>podať návrh na začatie konania na Úrade na ochranu osobných údajov SR.</li>
      </ul>
      <p className={text}>
        Úrad na ochranu osobných údajov Slovenskej republiky, Galvaniho 7/B,
        821 04 Bratislava; {" "}
        <a href="https://dataprotection.gov.sk" className={link}>
          dataprotection.gov.sk
        </a>
        .
      </p>

      <h2 className={heading}>10. Bezpečnosť a automatizované rozhodovanie</h2>
      <p className={text}>
        Používame primerané technické a organizačné opatrenia, najmä riadenie
        prístupov podľa používateľských rolí, autentifikáciu, šifrovaný prenos a
        obmedzenie prístupu k administrácii. Nevykonávame automatizované
        individuálne rozhodovanie ani profilovanie, ktoré by voči používateľovi
        vyvolávalo právne alebo obdobne významné účinky.
      </p>

      <h2 className={heading}>11. Zmeny týchto zásad</h2>
      <p className={text}>
        Zásady môžeme aktualizovať pri zmene služieb alebo právnych požiadaviek.
        Aktuálnu verziu vždy zverejníme na tejto stránke. O podstatných zmenách,
        ktoré sa týkajú používateľov aplikácie, ich primerane informujeme ešte
        pred nadobudnutím účinnosti zmeny.
      </p>

      <p className="text-xs text-white/50 mt-12">
        Posledná aktualizácia: 4. september 2026
      </p>
    </main>
  );
}
