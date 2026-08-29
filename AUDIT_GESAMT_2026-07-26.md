# Website-Audit Maler Sert GmbH — Gesamtbericht

Stand: 2026-07-26. 12 unabhängige Fach-Audits, jeder kritische/hohe Befund selbst nachgeprüft (Code gelesen, Live-Seite getestet, CSS-Werte nachgerechnet). Kein Befund unten ist ungeprüft übernommen.

---

## 1. Gesamturteil

**Durchschnitt: 6,0/10.** Die Website ist technisch und stilistisch deutlich über dem Handwerker-Website-Durchschnitt (eigenständige Typografie/Farben, sauberes Astro-Setup, ehrliche Preiskommunikation, kein Baukasten-Look). Aber: **die drei schwächsten Bereiche sind genau die, die bei nur ~17 Sitzungen/Monat am meisten kosten** — Vertrauen (Fake-Fotos), Barrierefreiheit (unsichtbarer CTA-Button auf 5 Seiten) und Content-Tiefe (Meisterbrief fehlt komplett). Die zentrale Erkenntnis: **es ist kein Traffic-Problem allein, sondern jeder Besucher, der ankommt, trifft auf Stellen, die Vertrauen aktiv kosten statt aufbauen.**

## 2. Bewertung je Dimension

| Dimension | Note | Kernaussage |
|---|---|---|
| Vertrauen & Verkaufspsychologie | **3/10** | KI-generierte "Fotos" von Mehmet Sert + "Arbeitsbeispielen" — größtes Risiko der ganzen Seite |
| Content-SEO & E-E-A-T | 5/10 | Meisterbrief nirgends erwähnt, kaum Preistiefe, keine echten Projekte |
| Barrierefreiheit | 5/10 | WhatsApp-CTA auf allen 5 Service-Seiten praktisch unsichtbar (Kontrast 1:1) |
| Texte & Tonalität | 6/10 | Gut, aber Formular log bis eben falschen Erfolg vor (bereits gefixt) |
| Schema / Structured Data | 6/10 | aggregateRating 5.0 im JSON-LD ohne jede sichtbare Bewertung — Google-Richtlinienrisiko |
| Code-Qualität | 6/10 | Impressum/Datenschutz umgehen die zentrale Datenquelle komplett |
| Local SEO & AI-Sichtbarkeit | 6/10 | Cloudflare blockt aktuell alle großen KI-Crawler (GPTBot, ClaudeBot, Google-Extended) |
| UX & Conversion | 6/10 | Cookie-Banner verdeckt mobile Kontaktleiste zu 76 % beim Erstbesuch |
| Mobile & Responsive | 6/10 | CSS-Kaskadenfehler macht Hero-Überschrift auf jedem Handy zu groß |
| Performance & Core Web Vitals | 7/10 | Solide, größte Lücke: keine responsiven Bildgrößen (srcset) |
| Visuelles Design | 7,5/10 | Eigenständig und diszipliniert, kein Baukasten-Look |
| Technisches SEO | **8/10** | Beste Note — zwei kleine Lecks (pages.dev-Subdomain, fehlender www-Redirect) |

## 3. Was schon gut ist — nicht anfassen

- Eigenständige Typografie (Newsreader + Source Sans 3), warme Kupfer/Graphit-Palette statt Blau-Lila-Gradient-Klischee
- Ehrliche, konkrete Preiskommunikation (m²-Preise statt "auf Anfrage")
- Single-Source-of-Truth-Architektur (`business.ts`) ist im Prinzip richtig aufgesetzt, nur nicht überall durchgezogen
- Sauberes technisches SEO-Fundament: Canonicals, Sitemap, Redirects, kein Duplicate Content zwischen den Service-Seiten
- FAQ-Schema wird aus derselben Quelle wie das sichtbare Markup generiert — kein Drift
- Formular-Fix von heute (ehrliche Erfolgsmeldung, Öffnungszeiten-Widerspruch) ist bereits erledigt, nur noch nicht deployed

## 4. Die größten Hebel für Lead-Generierung

Sortiert nach Wirkung auf Anfragen, nicht nach Audit-Kategorie.

### 4.1 KI-Fotos ersetzen oder Rahmen ehrlich machen — [kritisch, mittel Aufwand]
`public/img/mehmet-sert-portrait.png` und `hero-fahrzeug-maler-sert.jpg` sind selbst geprüft KI-generiert (Studio-Grauhintergrund, unnatürliche Beleuchtung, reinkopiertes Firmenschild). Die Seite verkauft "Direkt mit Mehmet Sert" — ein Fake-Gesicht ist der größtmögliche Vertrauensbruch, sobald er auffällt, und bei "Arbeitsbeispielen" ein Irreführungsrisiko. **Echtes Handyfoto von Mehmet + 3-5 echte Baustellenfotos** schlagen jedes Stockbild.

### 4.2 WhatsApp-Button auf 5 Seiten sichtbar machen — [kritisch, 5 Minuten]
`.page-hero .btn-secondary` fehlt in `global.css` (nur `header.hero` und `.kontakt-cta` haben den weißen Text-Override). Der Haupt-CTA "Per WhatsApp anfragen" ist auf allen 5 Service-Seiten praktisch unsichtbar (Kontrast ≈1:1, verifiziert). Ein-Zeilen-Fix:
```css
.page-hero .btn-secondary { color: #fff; border-color: rgba(255,255,255,.55); }
```

### 4.3 Meisterbrief + sichtbare Bewertungen ergänzen — [hoch, klein]
Zwei unabhängige Audits fanden dasselbe: "Meister" kommt im gesamten Code kein einziges Mal vor, und die 5,0★-Bewertung existiert nur unsichtbar im JSON-LD (Google-Richtlinienrisiko, siehe 4.5). Beides sind Textänderungen von wenigen Minuten mit hoher Vertrauenswirkung.

### 4.4 Cookie-Banner verdeckt mobile Kontaktleiste — [hoch, 5 Minuten]
Live gemessen: 76 % Überlappung zwischen Consent-Banner und Anrufen/WhatsApp-Leiste bei jedem mobilen Erstbesuch — dem größten Traffic-Segment. Fix: Banner-`bottom`-Wert im Mobile-Breakpoint anheben.

### 4.5 aggregateRating im Schema absichern oder entfernen — [hoch, klein]
5,0★/5 Bewertungen im JSON-LD, aber nirgends sichtbar auf der Seite — genau das Muster, das Google als "self-serving rating" abstraft und den Rich-Snippet stillschweigend entfernt. Sichtbares Bewertungs-Badge + 2-3 Kundenzitate lösen 4.3 und 4.5 gleichzeitig.

### 4.6 Hero-Überschrift-Bug auf jedem Handy — [hoch, 5 Minuten]
CSS-Kaskadenfehler (zwei Media-Queries mit gleicher Spezifität, spätere gewinnt) hebelt die absichtliche mobile Verkleinerung der H1 aus. Betrifft jedes Smartphone 360-700px Breite, verifiziert per `getComputedStyle`.

### 4.7 KI-Crawler-Block — Entscheidung nötig, kein Auto-Fix
Cloudflare blockt aktuell live GPTBot, ClaudeBot, Google-Extended, Applebot, Amazonbot, CCBot, meta-externalagent komplett. Das ist eine bewusste Cloudflare-Einstellung (Content-Schutz vs. KI-Sichtbarkeit) — **deine Entscheidung**, kein Bug.

## 5. Vollständige Befundliste nach Priorität

### Kritisch
| # | Befund | Fundort | Aufwand |
|---|---|---|---|
| 1 | KI-generierte "Fotos" von Mehmet Sert + Arbeitsbeispielen | Vertrauen | mittel |
| 2 | WhatsApp-CTA auf 5 Service-Seiten unsichtbar (Kontrast 1:1) | Barrierefreiheit | klein |
| 3 | aggregateRating 5.0 ohne sichtbaren Beleg — Richtlinienrisiko | Schema | klein-mittel |
| 4 | Cookie-Banner verdeckt mobile Kontaktleiste zu 76% | UX/Mobile | klein |
| 5 | Impressum/Datenschutz umgehen zentrale Datenquelle (NAP-Risiko) | Code | klein |

### Hoch
| # | Befund | Fundort |
|---|---|---|
| 6 | Meisterbrief nirgends erwähnt | Content-SEO, Vertrauen |
| 7 | Preise nur netto trotz Privatkunden-Zielgruppe (bereits als Bug bekannt, noch nicht gefixt) | Copy |
| 8 | Hero-H1 auf allen Handys zu groß (CSS-Kaskade) | Mobile |
| 9 | Keine responsiven Bildgrößen (srcset) | Performance, Mobile |
| 10 | H1 der Startseite nennt weder Ort noch Nutzen | Copy |
| 11 | Preis-Schema widerspricht sichtbarem "ab"-Preis | Schema |
| 12 | Berufshaftpflicht im Impressum als Platzhalter "[wird ergänzt]" | Vertrauen, Content |
| 13 | Kein Kundenzitat trotz 5,0★-Schema | Content, Vertrauen, UX (3x gefunden) |
| 14 | Einwände Termintreue/Sauberkeit/Gewährleistung unbeantwortet | Copy |
| 15 | pages.dev-Subdomain crawlbar, kein www-Redirect | Technisches SEO |
| 16 | Malerarbeiten-Seite dupliziert Markup statt Komponenten zu nutzen | Code |
| 17 | Consent-Banner ohne Fokus-Management (aria-modal, Autofocus) | Barrierefreiheit |
| 18 | Formularfehler ohne JS-Fallback (novalidate ohne Ersatz) | Barrierefreiheit |

### Mittel (Auswahl, vollständig in Einzelaudits)
Nav-Lücke bei 768-940px Viewport · Kein Zwischen-CTA nach Preistabelle · 2 Leistungskarten ohne Link · Fassadenanstrich-Seite intern verwaist · "Vom X bis zum Y"/"kein A, kein B"-Textmuster 9×/11× · Kontrastfehler bei gedimmtem Text im Kontaktblock · Telefonnummer 9× hartkodiert dupliziert · Trust-Band zu schmal auf breiten Screens · Kein Logo, nur Text-Wortmarke

### Niedrig
Favicon stilistischer Fremdkörper · Touch-Targets knapp unter 44px · OG-Description generisch · Pfeil-Notation in Kundentexten · Karten-Link zeigt falschen Punkt

## 6. Umsetzungsplan

### Diese Woche (≈2-3 Stunden, größter Hebel pro Minute)
- WhatsApp-Button-Kontrast fixen (4.2)
- Cookie-Banner-Position mobil fixen (4.4)
- Hero-H1-Kaskadenfehler fixen (4.6)
- Meisterbrief in Hero/TrustBand/Impressum ergänzen (4.3)
- Berufshaftpflicht-Platzhalter im Impressum füllen
- Preise auf Brutto umstellen (bereits bekannter Bug)
- www-Redirect + pages.dev-Indexierung sperren (Cloudflare-Dashboard)
- Formular-Fix + Öffnungszeiten-Fix deployen (liegt schon fertig lokal)

Erwarteter Effekt: schließt die offensichtlichsten Vertrauens- und Conversion-Lecks, kein Trafficgewinn, aber deutlich höhere Conversion aus dem bestehenden Besucherstrom.

### Diesen Monat (≈1-2 Tage)
- Echte Fotos von Mehmet + 3-5 Baustellenfotos beschaffen, KI-Bilder ersetzen
- 2-3 echte Google-Bewertungen sichtbar einbinden (löst auch das Schema-Risiko)
- Impressum/Datenschutz auf `business.ts` umstellen
- Responsive Bildgrößen (srcset) für Hero/Cards
- Fassadenanstrich-Seite intern verlinken, Cross-Links zwischen Service-Seiten schärfen
- Einwand-FAQ ergänzen (Termintreue, Übergabe, Gewährleistung)

Erwarteter Effekt: größter Sprung bei Vertrauen und Erstbesucher-Conversion.

### Später / Optional
- KI-Crawler-Block-Entscheidung treffen (Cloudflare-Dashboard)
- Textmuster-Wiederholungen redaktionell glätten
- CSS-Konsolidierung (global.css hat zwei parallele Breakpoint-Generationen — Ursache mehrerer Bugs)
- Logo/Monogramm für Wiedererkennung
- Ratgeber-Content für informationelle Suchanfragen

## 7. Was ich NICHT empfehle

- **Keine Stadtteilseiten** für Norderstedt/Pinneberg/Reinbek — bei 3 Mitarbeitern ohne echte ortsspezifische Referenzen wäre das reiner Thin-/Duplicate-Content, den Google eher bestraft als belohnt.
- **Kein Preisrechner oder Terminkalender** — unverhältnismäßiger Pflegeaufwand für den Nutzen bei aktuellem Traffic-Volumen.
- **Kein volles Test-Setup** (Vitest etc.) — für eine statische 8-Seiten-Marketing-Site Overkill. Höchstens ein einzelner Smoke-Test fürs Formular.
- **Kein Rebuild von global.css in einem Zug** — die Struktur-Probleme sind real, aber ein Big-Bang-Rewrite riskiert neue Bugs. Schrittweise bei ohnehin anstehenden Änderungen migrieren.
- **Keine Content-Collections-Umstellung** für die 5 Service-Seiten — lohnt sich erst ab einer 6./7. Seite.

---

*Methodik: 12 unabhängige Fach-Audits (Design, UX, Copy, A11y, technisches SEO, Content-SEO, Schema, Performance, Mobile, Local/GEO, Code, Vertrauenspsychologie). Kritische und hohe Befunde wurden, wo möglich, selbst nachgeprüft (Bilder angesehen, CSS-Selektoren gegrept, Live-robots.txt abgerufen) statt unverifiziert übernommen — ein Fall (angeblich "echte Fotografie" vs. "KI-generiert") wurde durch Gegenprüfung korrigiert.*

---

## Ergänzung: 6 SEO-Spezialagenten (2026-07-26, zweite Runde)

Zusätzlich zu den 12 Fach-Dimensionen liefen 6 spezialisierte SEO-Agenten (Schema, Sitemap, Bilder, Local/NAP, Keyword-Cluster, SXO). Neue Funde, die oben noch nicht drin waren:

### Neu — Kritisch
- **`hasCredential`/Meisterbrief fehlt im Impressum** (`impressum.astro:47-48`, `52-53`): Berufsbezeichnung "Maler und Lackierer" ohne Handwerkskammer-Zugehörigkeit + Berufshaftpflicht-Platzhalter ungefüllt. Das ist vermutlich ein **DDG-Rechtsverstoß** (§5 Abs.1 Nr.6), nicht nur SEO — zuerst anwaltlich/mit IHK-Merkblatt prüfen lassen, dann Fix.
- **`aggregateRating` im Service-Schema doppelt riskant**: `ServiceSchema.astro:41` bringt für den Typ `Service` ohnehin keinen Rich-Result-Nutzen (Google unterstützt das dort nicht) — nur das Policy-Risiko, 5-fach über alle Service-Seiten gestreut. Sofort entfernen, unabhängig von der Homepage-Diskussion.

### Neu — Hoch
- **Homepage-URL-Mismatch:** Sitemap liefert `maler-sert.de` ohne Slash, Canonical-Tag hat `maler-sert.de/` mit Slash (`astro.config.mjs:15` Bedingung greift nicht).
- **Alt-Text am KI-Porträt lügt:** `index.astro:257` — "Mehmet Sert, Inhaber und Geschäftsführer" auf bestätigt KI-generiertem Bild, suggeriert echtes Foto.
- **ImageObject fehlt im Service-Schema** (`ServiceSchema.astro:24-54`) auf allen 5 Service-Seiten.

### Neu — Content-Lücken (Cluster-Analyse)
9 fehlende Spoke-Seiten identifiziert, Top-Priorität: **"Maler Norderstedt"** + **"Fassade streichen Norderstedt"** (eigenständige SERP, kaum Overlap zur Hamburg-Pillar). Rest (Altbau-Sanierung, Vinyl-/Parkettboden, Schimmel-Mietrecht) niedrigere Priorität, siehe `seo/cluster-plan/cluster-plan.md`.

### Neu — SXO-Score (3 Personas)
Qualitäts-Skeptiker fällt mit 45/100 am schlechtesten ab (Bewertungen unsichtbar, kein Vorher/Nachher). Preis-Vergleicher 60/100 (Preistabelle unvollständig — nur Wand/Decke, Fassade/Boden/Trockenbau/Schimmel fehlen). Eilig-Kunde 80/100 (WhatsApp-Flow funktioniert gut).

### Bestätigt (deckt sich mit Runde 1)
Sitemap, robots.txt, Alt-Texte allgemein, WebP-Pipeline: alle sauber, keine neuen Probleme.

Volle Agent-Antworten nicht hier gespeichert (nur diese Zusammenfassung) — bei Bedarf einzelne Punkte nochmal vertiefen lassen.
