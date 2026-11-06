import type { MetadataRoute } from "next";

const siteUrl = "https://catton.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/privacy-policy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/ai-policy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
