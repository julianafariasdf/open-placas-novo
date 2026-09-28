import type { MetadataRoute } from "next";
import { isPublicSite, siteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: isPublicSite ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" },
    ...(isPublicSite ? { sitemap: new URL("/sitemap.xml", siteUrl).href } : {}),
  };
}
