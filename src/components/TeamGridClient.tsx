"use client";

import dynamic from "next/dynamic";

const TeamGrid = dynamic(() => import("@/components/TeamGrid"), { ssr: false });

export default function TeamGridClient() {
  return <TeamGrid />;
}
