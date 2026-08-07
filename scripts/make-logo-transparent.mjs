import sharp from "sharp";

const src = "public/images/logo.jpg";
const dest = "public/images/logo.png";

const { data, info } = await sharp(src)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const out = Buffer.from(data);

// White and near-white pixels become transparent; soft ramp keeps edges clean.
for (let i = 0; i < out.length; i += channels) {
  const r = out[i];
  const g = out[i + 1];
  const b = out[i + 2];
  const min = Math.min(r, g, b);
  if (min > 242) {
    out[i + 3] = 0;
  } else if (min > 212) {
    out[i + 3] = Math.round(255 * ((242 - min) / 30));
  }
}

await sharp(out, { raw: { width, height, channels: 4 } })
  .png()
  .trim({ threshold: 12 })
  .toFile(dest);

console.log("wrote", dest);
