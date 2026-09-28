import type { MetadataRoute } from "next";
import { isPublicSite, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isPublicSite) return [];

  return ["/", "/politica-de-privacidade", "/termos-de-uso"].map((path) => ({
    url: new URL(path, siteUrl).href,
  }));
}
