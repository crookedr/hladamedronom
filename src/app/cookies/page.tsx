import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies",
  robots: { index: false, follow: false },
};

export default function CookiesPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-semibold mb-6">Cookies</h1>

      <p className="text-white/80 mb-4">
        Táto webová stránka používa cookies a podobné technológie, aby sme zaistili
        jej správne fungovanie a zlepšili používateľskú skúsenosť. Na tejto stránke
        nájdete informácie o tom, aké cookies používame a aké máte možnosti.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Čo sú cookies?</h2>
      <p className="text-white/80 mb-4">
        Cookies sú malé textové súbory, ktoré sa ukladajú do vášho zariadenia pri
        návšteve webovej stránky. Umožňujú napríklad zapamätanie vašich preferencií
        alebo anonymnú štatistiku návštevnosti.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Aké typy cookies používame</h2>

      <h3 className="text-lg font-semibold mt-4 mb-1">Nevyhnutné cookies</h3>
      <p className="text-white/80 mb-3">
        Tieto cookies sú potrebné na správne fungovanie stránky (napr. bezpečnosť,
        načítanie obsahu, uloženie technických nastavení). Bez nich by stránka nemusela
        fungovať správne. Tieto cookies nepoužívame na marketingové účely.
      </p>

      <h3 className="text-lg font-semibold mt-4 mb-1">Analytické cookies</h3>
      <p className="text-white/80 mb-4">
        Analytické cookies nám pomáhajú pochopiť, ako návštevníci používajú našu
        stránku (napr. počet návštev, navštívené podstránky, typ zariadenia). Tieto
        údaje sú spracúvané v anonymizovanej podobe a používame ich len v prípade, že
        nám na to udelíte súhlas prostredníctvom cookie lišty.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Ako môžete spravovať cookies
      </h2>
      <p className="text-white/80 mb-4">
        Vašu voľbu ohľadom cookies môžete kedykoľvek zmeniť pomocou tlačidla{" "}
        <strong>&ldquo;Spravovať cookies&rdquo;</strong>, ktoré sa zobrazuje v dolnej časti
        obrazovky, alebo úpravou nastavení vo vašom webovom prehliadači.
      </p>

      <p className="text-xs text-white/50 mt-10">
        Posledná aktualizácia: 9. december 2025
      </p>
    </main>
  );
}
