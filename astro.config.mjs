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
      // Hinweis: @astrojs/sitemap erzwingt die Homepage-URL ohne Trailing-Slash im
      // finalen XML (Stream-Replace in write-sitemap.js, greift bei build.format:'file'
      // IMMER, unabhängig von serialize()). Canonical in BaseLayout.astro ist deshalb
      // bewusst ebenfalls ohne Slash gesetzt — nicht hier gegen die Library ankämpfen.
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
