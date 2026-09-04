import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "maplibre-gl/dist/maplibre-gl.css";
import PageTransition from "@/components/PageTransition";
import Cookiebanner from "@/components/Cookiebanner";
// import MessengerButton from "@/components/MessengerButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hladamedronom.sk"),
  title: {
    default: "Hľadáme Dronom",
    template: "%s | Hľadáme Dronom",
  },
  description:
    "Pomáhame nájsť stratené zvieratá pomocou termovízneho dronu. Bezplatná pomoc dobrovoľníkov.",
  keywords: [
    "hľadanie stratených zvierat dronom",
    "stratený pes dron",
    "stratená mačka dron",
    "termálny dron Slovensko",
    "pátranie dronom",
    "OZ Hľadáme Dronom",
    "záchrana zvierat dron",
  ],
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    siteName: "Hľadáme Dronom",
    images: [{ url: "/ozlogo.png", width: 512, height: 512, alt: "OZ Hľadáme Dronom logo" }],
  },
  twitter: {
    card: "summary",
    images: ["/ozlogo.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk" data-scroll-behavior="smooth">
      <body className={`${inter.className} bg-[#0b0d10] text-white antialiased overflow-x-hidden overflow-y-auto`}>
        <PageTransition>{children}</PageTransition>
        <Cookiebanner />
        {/* <MessengerButton /> */}
      </body>
    </html>
  );
}
