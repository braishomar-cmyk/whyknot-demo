import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 480 fills the gap between 384 and 640: a 150px card at DPR3 needs 450px
    // and was otherwise fetching 640w.
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 480],
    qualities: [45, 60, 65, 75],
    // Browsers were revalidating every image on every visit.
    minimumCacheTTL: 2678400,
    contentDispositionType: "inline",
  },
  /* config options here */
  output: "standalone",
};

export default nextConfig;
