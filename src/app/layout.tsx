import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "leaflet/dist/leaflet.css";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hľadáme Dronom",
  description:
    "Hľadáme stratené zvieratá pomocou dronov – rýchlo, bezpečne a efektívne.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
        <body className={`${inter.className} bg-[#0b0d10] text-white antialiased overflow-x-hidden overflow-y-auto`}>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
