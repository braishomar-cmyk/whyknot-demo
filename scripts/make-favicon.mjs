import sharp from "sharp";

const src = "public/images/logo.png";

// Browser tab icon: transparent square
await sharp(src)
  .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile("src/app/icon.png");

// iOS home-screen icon: white background, slight padding
const padded = await sharp(src)
  .resize(150, 150, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
  .png()
  .toBuffer();
await sharp({
  create: { width: 180, height: 180, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } },
})
  .composite([{ input: padded, gravity: "center" }])
  .png()
  .toFile("src/app/apple-icon.png");

console.log("icons written");
