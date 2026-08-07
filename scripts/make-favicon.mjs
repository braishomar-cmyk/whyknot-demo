import sharp from "sharp";

const src = "public/images/logo.png";

// Browser tab icon: trimmed logo on transparent, padded square
const trimmed = await sharp(src).trim({ threshold: 10 }).resize(440, 440, {
  fit: "contain",
  background: { r: 0, g: 0, b: 0, alpha: 0 },
}).toBuffer();

await sharp({
  create: { width: 512, height: 512, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
})
  .composite([{ input: trimmed, gravity: "center" }])
  .png()
  .toFile("src/app/icon.png");

// iOS home-screen icon: white background
await sharp({
  create: { width: 180, height: 180, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } },
})
  .composite([
    {
      input: await sharp(src)
        .trim({ threshold: 10 })
        .resize(148, 148, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
        .toBuffer(),
      gravity: "center",
    },
  ])
  .png()
  .toFile("src/app/apple-icon.png");

console.log("icons written");
