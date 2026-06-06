/**
 * Single Source of Truth — Firmenfakten der Maler Sert GmbH.
 *
 * Genutzt von Schema-Komponenten (JSON-LD), Footer, Nav-Call-Link und
 * der Kontakt-Sektion. NAP (Name/Adresse/Telefon) und Bewertungen leben
 * NUR hier — keine Dopplung mehr über mehrere Dateien.
 */

export const business = {
  name: 'Maler Sert GmbH',
  legalName: 'Maler Sert GmbH',
  description:
    'Malerbetrieb in Hamburg seit 2002: Innen- und Außenanstriche, Fassaden, Bodenbelag, Trockenbau und Schimmel-Sanierung. Festpreis nach kostenloser Besichtigung.',

  phone: {
    /** Anzeigeform */
    display: '0173 8615002',
    /** tel:-Wert (E.164 ohne Formatierung) */
    tel: '+491738615002',
    /** Schema.org-Telefon */
    schema: '+49-173-8615002',
    /** wa.me-Nummer */
    wa: '491738615002',
  },
  email: 'malersert@yahoo.de',

  address: {
    streetAddress: 'In der Niederung 15',
    postalCode: '22047',
    addressLocality: 'Hamburg',
    addressRegion: 'Hamburg',
    addressCountry: 'DE',
  },
  geo: { latitude: 53.5967448, longitude: 10.0873051 },

  url: 'https://maler-sert.de/',
  hasMap: 'https://www.google.com/maps?kgmid=/g/11zbs0xcxh',
  kgmid: '/g/11zbs0xcxh',
  logo: 'https://maler-sert.de/favicon.svg',
  image: 'https://maler-sert.de/img/hero-fahrzeug-maler-sert.jpg',

  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Rechnung, Überweisung, Bar',
  vatID: 'DE462262729',
  foundingDate: '2002',

  founder: { name: 'Mehmet Sert', jobTitle: 'Inhaber & Geschäftsführer' },

  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
    { days: ['Saturday'], opens: '09:00', closes: '13:00' },
  ],

  areaServed: ['Hamburg', 'Norderstedt', 'Pinneberg', 'Reinbek'],

  sameAs: [
    'https://www.google.com/search?kgmid=/g/11zbs0xcxh',
    'https://www.google.com/maps?kgmid=/g/11zbs0xcxh',
    'https://maler-sert.de/',
  ],

  knowsAbout: [
    'Malerarbeiten',
    'Tapezieren',
    'Fassadenanstriche',
    'Bodenverlegung',
    'Parkett',
    'Trockenbau',
    'Schimmel-Sanierung',
  ],

  aggregateRating: {
    ratingValue: '5.0',
    reviewCount: '5',
    bestRating: '5',
    worstRating: '1',
  },
} as const;

/** Leistungen — Grundlage für hasOfferCatalog (Schema) und interne Verlinkung. */
export interface ServiceMeta {
  slug: string;
  /** Anzeigename (Nav/Footer) */
  name: string;
  /** Name im Schema (mit Ort) */
  schemaName: string;
  description: string;
}

export const services: ServiceMeta[] = [
  {
    slug: 'malerarbeiten-hamburg',
    name: 'Malerarbeiten',
    schemaName: 'Malerarbeiten Hamburg',
    description: 'Innenanstriche, Tapezieren, Decken und Wände streichen in Hamburg',
  },
  {
    slug: 'fassadenanstrich-hamburg',
    name: 'Fassadenanstrich',
    schemaName: 'Fassadenanstrich Hamburg',
    description: 'Außenanstrich, Putzfassade, Klinker und Holzfassade in Hamburg',
  },
  {
    slug: 'bodenbelag-hamburg',
    name: 'Bodenbelag',
    schemaName: 'Bodenbelag Hamburg',
    description: 'Laminat, Parkett, Vinyl und Linoleum verlegen in Hamburg',
  },
  {
    slug: 'trockenbau-hamburg',
    name: 'Trockenbau',
    schemaName: 'Trockenbau Hamburg',
    description: 'Trockenbau, Rigips-Wände, abgehängte Decken in Hamburg',
  },
  {
    slug: 'schimmel-sanierung-hamburg',
    name: 'Schimmel-Sanierung',
    schemaName: 'Schimmel-Sanierung Hamburg',
    description: 'Schimmel entfernen, Sanierung und Vorbeugung in Hamburg',
  },
];

/** Wiederverwendbarer FAQ-Typ (genutzt von Faq.astro für Markup + JSON-LD). */
export interface FaqItem {
  q: string;
  a: string;
}
