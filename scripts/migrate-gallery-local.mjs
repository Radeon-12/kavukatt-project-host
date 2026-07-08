import sharp from "sharp";
import fs from "fs";
import path from "path";

const assets =
  "C:/Users/Lenovo/.cursor/projects/d-MARMATHEWKAVUKATT/assets";

function findAsset(id) {
  const name = fs.readdirSync(assets).find((f) => f.includes(id));
  if (!name) throw new Error(`Missing asset: ${id}`);
  return path.join(assets, name);
}

const jobs = [
  [findAsset("6180ef84"), "public/images/gallery/family/01-house.webp"],
  [findAsset("b3802dc3"), "public/images/gallery/family/02-room.webp"],
  [findAsset("e9470260"), "public/images/gallery/family/03-father.webp"],
  [findAsset("9cadf555"), "public/images/gallery/family/04-mother.webp"],
  [
    findAsset("09d3b8c1"),
    "public/images/gallery/methrabhishekam/01-deepika-newspaper.webp",
  ],
  [
    findAsset("aa789029"),
    "public/images/gallery/methrabhishekam/02-consecration-ceremony.webp",
  ],
  [
    findAsset("63fd0a90"),
    "public/images/gallery/methrabhishekam/04-two-bishops-seated.webp",
  ],
  [
    findAsset("3c3997b5"),
    "public/images/gallery/methrabhishekam/05-pope-meeting.webp",
  ],
];

for (const [src, dst] of jobs) {
  await fs.promises.mkdir(path.dirname(dst), { recursive: true });
  await sharp(src).webp({ quality: 88 }).toFile(dst);
  console.log("saved", dst);
}

const collage = "public/images/hero-collage.png";
const meta = await sharp(collage).metadata();
const w = meta.width ?? 0;
const h = meta.height ?? 0;
await sharp(collage)
  .extract({
    left: Math.round(w * 0.5),
    top: 0,
    width: Math.round(w * 0.5),
    height: Math.round(h * 0.5),
  })
  .webp({ quality: 90 })
  .toFile("public/images/church-logo.webp");
console.log("saved public/images/church-logo.webp");
