import sharp from "sharp";

const src = "public/images/logo.png";

// Logo trimmed to its bounds, centred on a white rounded square so it pops
// against dark browser tabs and light ones alike.
const mark = await sharp(src)
  .trim({ threshold: 10 })
  .resize(400, 400, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .toBuffer();

const rounded = Buffer.from(
  '<svg width="512" height="512"><rect width="512" height="512" rx="96" ry="96" fill="#ffffff"/></svg>',
);

await sharp(rounded)
  .composite([{ input: mark, gravity: "center" }])
  .png()
  .toFile("src/app/icon.png");

// iOS home screen: square white, no rounding (iOS masks it itself)
await sharp({
  create: { width: 180, height: 180, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } },
})
  .composite([
    {
      input: await sharp(src)
        .trim({ threshold: 10 })
        .resize(140, 140, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
        .toBuffer(),
      gravity: "center",
    },
  ])
  .png()
  .toFile("src/app/apple-icon.png");

console.log("icons written with white background");
