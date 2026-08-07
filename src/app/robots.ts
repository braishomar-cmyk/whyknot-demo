import type { MetadataRoute } from "next";

// Demo phase: block crawling entirely. When the client buys and moves to their
// own domain, replace with an allow-all rule + sitemap reference.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
  };
}
