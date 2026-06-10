import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/cookies", "/zasady-ochrany-osobnych-udajov"] },
    sitemap: "https://www.hladamedronom.sk/sitemap.xml",
  };
}
