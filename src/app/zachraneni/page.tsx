import type { Metadata } from "next";
import Navigbar from "@/components/Navigbar";
import Footer from "@/components/Footer";
import ZachraneniList from "@/components/ZachraneniList";

export const metadata: Metadata = {
  title: "Zachránení | Hľadáme Dronom",
  description:
    "Príbehy zvierat, ktoré sme našli vďaka termovíznemu dronu. Každý príbeh má šťastný koniec.",
  openGraph: {
    title: "Zachránení | Hľadáme Dronom",
    description:
      "Príbehy zvierat, ktoré sme našli vďaka termovíznemu dronu. Každý príbeh má šťastný koniec.",
    url: "https://www.hladamedronom.sk/zachraneni",
  },
};

export default function ZachraneniPage() {
  return (
    <>
      <Navigbar />
      <main className="pt-16">
        <ZachraneniList />
        <Footer />
      </main>
    </>
  );
}
