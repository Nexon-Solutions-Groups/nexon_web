import { site } from "@/lib/site";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/products/",
    "/nexon-kds/",
    "/nexon-pos/",
    "/flockify/",
    "/custom-software/",
    "/support/",
    "/about/",
    "/contact/",
    "/privacy/",
    "/terms/",
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date("2026-09-21"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
