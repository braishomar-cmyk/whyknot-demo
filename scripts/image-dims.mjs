import sharp from "sharp";
import fs from "node:fs";

const dir = "public/images/gallery";
for (const f of fs.readdirSync(dir).filter((f) => /\.(jpe?g|png|webp)$/i.test(f))) {
  const { width, height } = await sharp(`${dir}/${f}`).metadata();
  console.log(`${f}: ${width}x${height} ${width > height ? "LANDSCAPE" : "portrait"}`);
}
