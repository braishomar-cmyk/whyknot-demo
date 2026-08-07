import type { MetadataRoute } from "next";

// Base URL switches to the client's domain at launch.
const BASE_URL = "https://demo-clothing.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE_URL, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
