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
      // Startseite mit Trailing Slash (= canonical); Unterseiten extensionslos
      serialize(item) {
        if (item.url === 'https://maler-sert.de') item.url = 'https://maler-sert.de/';
        return item;
      },
    }),
  ],
  build: {
    // Inline kein CSS — immer als gehashte Datei ausliefern (sauberes Caching)
    inlineStylesheets: 'never',
    // Flache foo.html-Dateien; Cloudflare Pages liefert sie unter /foo (extensionslos) aus.
    // Alte …-hamburg.html-URLs werden von Cloudflare per 308 dorthin umgeleitet.
    format: 'file',
  },
  compressHTML: true,
});
