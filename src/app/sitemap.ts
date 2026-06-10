import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.hladamedronom.sk";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/nas-tim`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/rasty`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
  ];
}
