import sharp from "sharp";
import fs from "node:fs";

fs.mkdirSync("public/seo", { recursive: true });

const W = 1200, H = 630;

// Warm brand photo, cropped to the OG ratio and dimmed so the wordmark reads
const photo = await sharp("public/images/whyknot/santorini-maxi-coral.jpg")
  .resize(W, H, { fit: "cover", position: "attention" })
  .modulate({ brightness: 0.62 })
  .toBuffer();

// White wordmark
const logo = await sharp("public/images/logo.png")
  .trim({ threshold: 10 })
  .resize(420, 420, { fit: "inside", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .negate({ alpha: false })
  .toBuffer();

const tagline = Buffer.from(
  `<svg width="${W}" height="${H}">
     <text x="${W / 2}" y="${H / 2 + 130}" text-anchor="middle"
           font-family="Poppins, Segoe UI, sans-serif" font-size="30"
           letter-spacing="6" fill="#ffffff" opacity="0.92">WEAR WHAT MOVES YOU</text>
   </svg>`,
);

await sharp(photo)
  .composite([
    { input: logo, gravity: "center", top: 150, left: Math.round((W - 420) / 2) },
    { input: tagline },
  ])
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile("public/seo/og-default.jpg");

const { size } = fs.statSync("public/seo/og-default.jpg");
console.log(`og-default.jpg written, ${Math.round(size / 1024)}KB`);
