import type { MetadataRoute } from "next";

const siteUrl = "https://calahan-pressure-washing.hometownwebservicesar.cc";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}