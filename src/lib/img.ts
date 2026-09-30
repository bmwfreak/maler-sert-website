import widths from '../data/img-widths.json';

/** srcset aus Original + den von scripts/img-variants.mjs erzeugten 640/960-Varianten. */
export function webpSrcset(path: string): string {
  const w = (widths as Record<string, number>)[path];
  if (!w) return path; // Bild ohne Varianten: unverändert ausliefern
  const base = path.replace(/\.webp$/, '');
  return [640, 960]
    .filter((v) => v < w)
    .map((v) => `${base}-${v}.webp ${v}w`)
    .concat(`${path} ${w}w`)
    .join(', ');
}
