// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://maler-sert.de',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // noindex-Rechtsseiten nicht in die Sitemap aufnehmen
      filter: (page) => !page.includes('/impressum') && !page.includes('/datenschutz'),
      // URLs an die tatsächlichen .html-Pfade angleichen (= canonical)
      serialize(item) {
        if (item.url === 'https://maler-sert.de' || item.url === 'https://maler-sert.de/') {
          item.url = 'https://maler-sert.de/';
        } else {
          item.url = item.url.replace(/\/$/, '') + '.html';
        }
        return item;
      },
    }),
  ],
  build: {
    // Inline kein CSS — immer als gehashte Datei ausliefern (sauberes Caching)
    inlineStylesheets: 'never',
    // Flache .html-Dateien statt /dir/index.html → bestehende URLs (…-hamburg.html) bleiben erhalten
    format: 'file',
  },
  compressHTML: true,
});
