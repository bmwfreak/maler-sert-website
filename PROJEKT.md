# Maler Sert GmbH — Projekt-Übersicht

> **Single Source of Truth für das Gesamtprojekt.** Was ist die Seite, wie ist sie gebaut,
> was wurde gemacht, wo stehen wir, wohin soll es gehen.
> Stand: 2026-06-21

---

## 1. Worum geht's

Website für die **Maler Sert GmbH** — Malerbetrieb in Hamburg, Inhaber Mehmet Sert, gegründet 2002.
Ziel der Seite: **Anfragen (Leads) generieren** — Anruf, WhatsApp, Kontaktformular.

- **Live-URL:** https://maler-sert.de
- **Repo:** github.com/bmwfreak/maler-sert-website (Branch `master`)
- **Lokal:** `C:\Users\eku14\Desktop\Malerbetrieb`

### Firmendaten (Quelle: `src/data/business.ts`)
| Feld | Wert |
|---|---|
| Name | Maler Sert GmbH |
| Inhaber | Mehmet Sert |
| Adresse | In der Niederung 15, 22047 Hamburg |
| Telefon | 0173 8615002 |
| E-Mail | malersert@yahoo.de |
| WhatsApp | 49 173 8615002 |
| Gegründet | 2002 |
| USt-IdNr. | DE462262729 |
| Bewertung | 5,0 / 5 |
| Google kgmid | /g/11zbs0xcxh |

### Leistungen (5 Service-Seiten)
Malerarbeiten · Fassadenanstrich · Trockenbau · Bodenbelag · Schimmelsanierung
Einsatzgebiet: Hamburg (+ geplant Norderstedt, Pinneberg, Reinbek)

---

## 2. Architektur / Tech-Stack

**Astro 5.18.2** — statischer Site-Generator. Output = 100 % statisches HTML, null JS-Runtime
(außer Tracking). Gehostet auf **Cloudflare Pages**, Deploy per **GitHub Actions** auf Push zu `master`.

### Warum so gebaut
War vorher reines Copy-Paste-HTML (766 Zeilen Inline-CSS, Nav/Footer/FAQ in 8 Dateien dupliziert,
konkurrierende CSS-Quellen → Spezifitäts-Bugs, Cache-Busting von Hand). Migriert auf
Komponenten-Architektur mit **Single Source of Truth** — jede Firmen-Info nur **einmal** im Code.

```
Malerbetrieb/
├── astro.config.mjs          site-URL, Sitemap, build.format='file', compressHTML
├── package.json              scripts: dev / build / preview
├── .github/workflows/
│   └── deploy.yml            npm ci → npm run build → wrangler pages deploy dist
├── src/
│   ├── data/business.ts      ← SINGLE SOURCE OF TRUTH (NAP, Geo, Leistungen, FAQ, Rating)
│   ├── layouts/
│   │   ├── BaseLayout.astro   <head>, Meta/OG/Twitter, Fonts, Nav, Footer, Tracking, Schema-Slot
│   │   └── ServiceLayout.astro  Breadcrumb + PageHero + TrustBand + FAQ + CTA (für 5 Service-Seiten)
│   ├── components/           Nav, Footer, MobileContactBar, TrustBand, Faq, Hero, PageHero,
│   │                         LeistungCard/List, Ablauf, schema/{LocalBusiness,Service}Schema
│   ├── scripts/
│   │   ├── tracking.ts        DSGVO-Consent + GA4 (opt-in)
│   │   └── form.ts            Kontaktformular → WhatsApp + form_submit-Event
│   ├── styles/               tokens.css (Design-Tokens) + global.css (konsolidiert, 1 Quelle)
│   └── pages/                index + 5 Service + impressum + datenschutz (8 Seiten)
└── public/                   fonts/, img/ (16 Bilder), favicon, robots.txt, _headers, Google-Verify
```

### Kern-Entscheidungen
- **URLs extensionslos** (`/malerarbeiten-hamburg`). Alte `.html`-URLs → 308-Redirect → SEO bleibt erhalten.
- **CSS:** content-gehasht (`/_astro/[hash].css`) → kein manuelles Cache-Busting mehr.
- **Sitemap:** automatisch beim Build (`@astrojs/sitemap`), Rechtsseiten ausgeschlossen.
- **Schema.org JSON-LD:** LocalBusiness (index) + Service/FAQPage/Breadcrumb (Service-Seiten), alles aus `business.ts`.

---

## 3. Was wurde gemacht (Chronik)

**SEO & Trust**
- aggregateRating-, FAQ-, contactPoint-, potentialAction-Schema
- Twitter-Cards, Trust-Band, Breadcrumbs
- Trust-Band-Content entschlackt (HRB + Handwerkskammer raus)

**Tracking (DSGVO-konform)**
- GA4 eingerichtet — Measurement-ID **G-YFTMCYXTDX**
- Opt-in-Consent-Banner: gtag lädt **erst nach „Akzeptieren"**
- Datenschutzerklärung an echtes Tracking angepasst
- Events: `phone_click`, `whatsapp_click`, `form_submit`
- Google Search Console ↔ GA4 verknüpft

**Bugfixes**
- Unsichtbares Kontaktformular (CSS-Spezifitätskrieg `#kontakt` vs `.kontakt-dark`) — strukturell gelöst durch Komponenten/Scoped CSS
- GA4 lud nicht live → Tracking-Bootstrap gebaut
- `.html`-URLs vs 308-Redirect → alles auf extensionslos vereinheitlicht

**Architektur-Migration (abgeschlossen, live)**
- Komplette Migration statisches HTML → Astro
- Komponenten + Single Source of Truth + konsolidiertes CSS + Auto-Build
- Alte `landingpage/` + `netlify.toml` entfernt

---

## 4. Aktueller Stand

✅ **Live und verifiziert.** Architektur auf Senior-Niveau, Seite läuft sauber.

| Check | Status |
|---|---|
| Alle 8 Seiten | HTTP 200, extensionslos |
| Alte `.html`-URLs | 308 → extensionslos (SEO erhalten) |
| Canonical / Sitemap / Schema | konsistent |
| DSGVO-Consent + GA4 | live & funktional |
| Inline-CSS | 0 (gehashtes `/_astro/*.css`) |

**Offener Tech-Nit (nicht dringend):** GitHub Actions zwingt ab 16.06.2026 auf Node 24.
Action-Versionen aktuell genug — erste Anlaufstelle falls Deploy nach dem Datum klemmt. Betrifft nur CI, nicht die Live-Seite.

---

## 5. Strategie — Leads generieren

**Grundprinzip:** Die Seite ist der fertige Verkaufsraum (konvertiert gut). Jetzt fehlt **qualifizierter Verkehr**.
Reihenfolge der Wirkung für einen Maler in Hamburg:

### Stufe 1 — kostenlos, größter Hebel (zuerst)
1. **Google-Bewertungen systematisch sammeln** ← wichtigster Hebel.
   Map-Pack („Maler Hamburg") bringt mehr Anrufe als jedes Web-Ergebnis.
   Link: `https://search.google.com/local/writereview?ludocid=12843575817195687563`
   → Jedem zufriedenen Kunden nach Abschluss per WhatsApp schicken. Ziel: stetig 2–4/Monat. Auf jede Bewertung antworten.
   ⚠️ **Die bestehenden 5 Bewertungen (aggregateRating 5.0 im Schema) stammen von Verwandten, nicht von Fremdkunden** (bestätigt 2026-07-26). Zählt nicht als echter Vertrauensbeweis, verstößt streng genommen gegen Googles Bewertungsrichtlinien. Kein Testimonial-Block auf dieser Basis bauen — Ziel bleibt echte Fremdkunden-Reviews sammeln.
2. **Google-Unternehmensprofil zu 100 % füllen** — echte Vorher/Nachher-Fotos, alle 5 Leistungen,
   Einsatzgebiete (Norderstedt/Pinneberg/Reinbek), Öffnungszeiten, regelmäßig Beiträge posten.
3. **Lead-Messung scharf schalten** — `phone_click`/`whatsapp_click`/`form_submit` in GA4 als
   **Schlüsselereignisse** markieren → sichtbar, welcher Kanal Anfragen bringt.

### Stufe 2 — wenig Geld, mittlere Frist
4. Lokale Einträge (NAP identisch): Das Örtliche, 11880, Gelbe Seiten, Bing Places, Apple Maps.
5. Echte Projekt-Fotos auf Website + GBP.
6. Empfehlungen aktiv erfragen + Partnerschaften (Hausverwaltungen, Makler, andere Gewerke).

### Stufe 3 — bezahlt, schnellste Wirkung, kostet Budget
7. **Google Local Services Ads** (Bezahlung pro Lead, „Google Garantie"-Badge) — beste bezahlte Option fürs Handwerk.
8. **Google Such-Anzeigen** auf „Maler Hamburg" etc. — Conversion-Tracking misst ROI direkt.
9. Auftragsplattformen (Blauarbeit, MyHammer, Check24 Profis) — viel Volumen, aber Preiskampf.

**Empfehlung:** Erst Stufe 1 (gratis, höchster ROI). Bezahlte Anzeigen erst, wenn Profil + Bewertungen stehen.

### GBP-Status (Stand 2026-06-29) — was eingerichtet ist
**Profil:** bestätigt · **Service-Area-Modus** (keine Adresse sichtbar — Mehmet arbeitet von zuhause/Baustelle, bewusst so) · GA4-verknüpft.
**Erledigt** (in Google-Prüfung ~10 Min):
- Beschreibung neu (Meisterbetrieb, seit 2002, alle Leistungen, Festpreis ohne versteckte Kosten)
- Kategorien: **Maler** (primär) + **Bodenleger** + **Trockenbauunternehmen**
- Einzugsgebiet: **Hamburg + Reinbek + Norderstedt + Pinneberg**
- Eröffnungsdatum: **Februar 2002** (HRB-Datum)

Öffnungszeiten: **Mo–Sa 08–18, So zu** — einheitlich in GBP + Website (Samstag am 2026-06-29 auf Wunsch von 9–13 auf 8–18 erweitert).
**Offen (nur Mehmet):** Fotos hochladen (größter Hebel) · Bewertungen sammeln · regelmäßig Beiträge posten.

---

## 6. Roadmap / nächste Schritte

**Sofort (kostenlos)**
- [x] GA4-Schlüsselereignisse markiert — phone_click + whatsapp_click (form_submit zählt ab 1. Anfrage) ✓ 2026-06-29
- [x] GBP optimiert — Beschreibung, Kategorien, Einzugsgebiet (4 Orte), Eröffnungsdatum ✓ 2026-06-29 (s. GBP-Status oben)
- [ ] GBP: echte Fotos hochladen (Vorher/Nachher + Mehmet/Wagen) ← größter offener Hebel, nur Mehmet
- [ ] Bewertungs-Link an zufriedene Kunden schicken (To-do Mehmet)
- [x] Öffnungszeiten vereinheitlicht: **Mo–Sa 08–18** in GBP + Website ✓ 2026-06-29

**Kurzfristig**
- [x] Tapezier-Inhalt auf der Startseite + Schimmelbeseitigung-Wording ✓ 2026-09-04 (s. unten)
- [x] Privatkundenpreise auf Endpreise inkl. MwSt. umgestellt (PAngV) ✓ 2026-09-04
- [ ] Echte Vorher/Nachher-Projektfotos beschaffen → Website + GBP
- [ ] Lokale Verzeichniseinträge (Bing Places, Das Örtliche, 11880, Apple Maps) ← **jetzt der wichtigste Punkt**, s. unten
- [ ] Berufshaftpflicht im Impressum eintragen (Platzhalter „[wird ergänzt]", vermutlich DDG-Pflicht)
- [ ] Meisterbrief-Frage klären: Steht in der GBP-Beschreibung, fehlt auf der Website — vor dem Eintragen belegen

### Stand 2026-09-04 — was die Search Console geändert hat

Die vollständige Auswertung steht in [LEADS.md](LEADS.md). Kurz:

- **975 Impressionen, 59 Klicks, CTR 6,1 %, Position 17,8** über 3 Monate. Impressionen +577 %,
  Klicks +181 %. Die frühere Einschätzung „Ranking-Problem, CTR 0,26 %" kam aus dem GA4-Ausschnitt
  und war falsch — GA4 zählt nur Nutzer mit Consent und unterschätzt den Traffic systematisch.
- **58 der 59 Klicks landen auf der Startseite.** Vier der fünf Service-Seiten haben in drei Monaten
  null Klicks. Google beantwortet praktisch jede Suche mit der Startseite.
- Deshalb wurden die Inhalte auf der **Startseite** ergänzt statt neue Seiten gebaut: eine neue Seite
  wäre die sechste ohne Klicks. Umgesetzt: Tapezier-Sektion (120 Impressionen ohne Ziel),
  „Schimmelbeseitigung" als Suchbegriff, Nachbarschaft Wandsbek/Bramfeld benannt.
- **Der Engpass ist jetzt die Domain-Autorität**, nicht der Seiteninhalt. Damit Google die
  Unterseiten indexiert, braucht es externe Erwähnungen. Die kostenlosen Verzeichniseinträge oben
  sind genau das und rücken damit von „kurzfristig, nice to have" auf Platz 1.

**Optional / später**
- [ ] Bezahlte Anzeigen (Google Ads / Local Services Ads) — Budget-Entscheidung Mehmet
- [ ] GitHub Action Node 20 → 24 (vor/ab 16.06.2026)

---

## 7. Wichtige Daten / Zugänge

| Was | Wert |
|---|---|
| Live-URL | https://maler-sert.de |
| Repo | github.com/bmwfreak/maler-sert-website (`master`) |
| Hosting | Cloudflare Pages, Projekt `maler-sert` |
| CF Account-ID | 5503b8cdde7230f2c7e8d6f3c8326a1a |
| Deploy-Secret | `CLOUDFLARE_API_TOKEN` (GitHub Secret) |
| GA4 Measurement-ID | G-YFTMCYXTDX |
| Consent-Key (localStorage) | `msert_consent` |
| Google-Bewertungslink | https://search.google.com/local/writereview?ludocid=12843575817195687563 |
| Google kgmid | /g/11zbs0xcxh |

### Lokal bauen
```bash
npm install
npm run dev       # Dev-Server
npm run build     # → dist/ (statisches HTML)
npm run preview   # dist/ lokal ansehen
```
Deploy passiert automatisch bei Push auf `master`.
