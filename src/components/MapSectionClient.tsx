"use client";
import dynamic from "next/dynamic";
const MapSection = dynamic(() => import("./MapCoverage"), { ssr: false });
export default function MapSectionClient() {
  return <MapSection />;
}
