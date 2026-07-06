import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.haloandpine.ca/sitemap.xml",
    host: "https://www.haloandpine.ca",
  };
}
