import type { Metadata } from "next";
import Navigbar from "@/components/Navigbar";
import Footer from "@/components/Footer";
import Srnciatka from "@/components/Srnciatka";

export const metadata: Metadata = {
  title: "Srnčiatka",
  description:
    "Každoročne zachraňujeme srnčatá pred kosbou pomocou termovíznych dronov. Spoznajte, ako prebieha záchranná akcia a ako nás kontaktovať.",
  openGraph: {
    title: "Srnčiatka | Hľadáme Dronom",
    description:
      "Každoročne zachraňujeme srnčatá pred kosbou pomocou termovíznych dronov. Spoznajte, ako prebieha záchranná akcia a ako nás kontaktovať.",
    url: "https://www.hladamedronom.sk/srnciatka",
  },
};

export default function SrnciatkaPage() {
  return (
    <>
      <Navigbar />
      <main className="pt-16">
        <Srnciatka />
        <Footer />
      </main>
    </>
  );
}
