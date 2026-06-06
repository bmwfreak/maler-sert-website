// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://maler-sert.de',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    // Inline kein CSS — immer als gehashte Datei ausliefern (sauberes Caching)
    inlineStylesheets: 'never',
    // Flache .html-Dateien statt /dir/index.html → bestehende URLs (…-hamburg.html) bleiben erhalten
    format: 'file',
  },
  compressHTML: true,
});
