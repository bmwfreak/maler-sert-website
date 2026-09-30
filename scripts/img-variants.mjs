// Erzeugt verkleinerte WebP-Varianten (-640/-960) neben jedem Original in public/img
// und schreibt die Originalbreiten nach src/data/img-widths.json (für srcset).
// Einmalig nach dem Austausch von Bildern ausführen: node scripts/img-variants.mjs
import sharp from 'sharp';
import { readdirSync, writeFileSync } from 'node:fs';

const DIR = 'public/img';
const WIDTHS = [640, 960];
const originals = readdirSync(DIR).filter((f) => f.endsWith('.webp') && !/-\d+\.webp$/.test(f));
const table = {};

for (const f of originals) {
  const { width } = await sharp(`${DIR}/${f}`).metadata();
  table[`/img/${f}`] = width;
  for (const w of WIDTHS.filter((w) => w < width)) {
    const out = `${DIR}/${f.replace(/\.webp$/, `-${w}.webp`)}`;
    await sharp(`${DIR}/${f}`).resize({ width: w }).webp({ quality: 78 }).toFile(out);
    console.log(out);
  }
}
writeFileSync('src/data/img-widths.json', JSON.stringify(table, null, 2) + '\n');
