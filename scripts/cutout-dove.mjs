import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const input = path.join(__dirname, "../public/images/hero-dove-source.png");
const output = path.join(__dirname, "../public/images/hero-dove.png");

const lum = (r, g, b) => 0.299 * r + 0.587 * g + 0.114 * b;
const sat = (r, g, b) => Math.max(r, g, b) - Math.min(r, g, b);
const dist = (r, g, b, r2, g2, b2) =>
  Math.sqrt((r - r2) ** 2 + (g - g2) ** 2 + (b - b2) ** 2);

function sampleBg(data, w, h) {
  const pts = [
    [4, 4],
    [w - 5, 4],
    [4, h - 5],
    [w - 5, h - 5],
  ];
  let r = 0,
    g = 0,
    b = 0;
  for (const [x, y] of pts) {
    const i = (y * w + x) * 4;
    r += data[i];
    g += data[i + 1];
    b += data[i + 2];
  }
  return [r / 4, g / 4, b / 4];
}

function isDovePixel(r, g, b) {
  const l = lum(r, g, b);
  const s = sat(r, g, b);
  if (g > r + 8 && g > b + 4 && g > 62) return true;
  if (r > 205 && g > 118 && b < 85 && r - b > 75) return true;
  if (l > 198 && s < 58) return true;
  if (l > 186 && b > 158 && s < 55) return true;
  if (l >= 104 && l < 158 && s < 32 && b > 108) return true;
  return false;
}

function isBgPixel(r, g, b, bgR, bgG, bgB) {
  if (isDovePixel(r, g, b)) return false;
  if (dist(r, g, b, bgR, bgG, bgB) < 72) return true;
  return r > 88 && g > 56 && b < 148 && lum(r, g, b) > 62 && r - b > 8;
}

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width: w, height: h } = info;
const [bgR, bgG, bgB] = sampleBg(data, w, h);

const bg = new Uint8Array(w * h);
const q = [];
const seed = (x, y) => {
  if (x < 0 || y < 0 || x >= w || y >= h) return;
  const idx = y * w + x;
  if (bg[idx]) return;
  const i = idx * 4;
  if (!isBgPixel(data[i], data[i + 1], data[i + 2], bgR, bgG, bgB)) return;
  bg[idx] = 1;
  q.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
};

for (let x = 0; x < w; x++) {
  seed(x, 0);
  seed(x, h - 1);
}
for (let y = 0; y < h; y++) {
  seed(0, y);
  seed(w - 1, y);
}
while (q.length) seed(...q.pop());

for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    const i = (y * w + x) * 4;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    data[i + 3] = bg[y * w + x] || !isDovePixel(r, g, b) ? 0 : 255;
  }
}

for (let y = 1; y < h - 1; y++) {
  for (let x = 1; x < w - 1; x++) {
    const p = (y * w + x) * 4 + 3;
    if (!data[p]) continue;
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (!data[((y + dy) * w + (x + dx)) * 4 + 3]) {
          data[p] = 225;
          break;
        }
      }
    }
  }
}

await sharp(data, { raw: { width: w, height: h, channels: 4 } })
  .png()
  .toFile(output);

const stats = await sharp(output).stats();
console.log(`alpha mean ${stats.channels[3].mean.toFixed(1)}`);
