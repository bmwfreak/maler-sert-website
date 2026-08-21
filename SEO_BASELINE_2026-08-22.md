# SEO Baseline – 22.08.2026

Datenquelle für Search-Console-Zahlen: vom Nutzer per Screenshot geliefert (Property `https://maler-sert.de/`, Zeitraum ca. letzte 3 Monate bis 19.08.2026). Keine eigene Live-Abfrage der Search-Console-API möglich (kein Zugriff in dieser Umgebung) — alle Zahlen unten sind so übernommen wie geliefert, nicht selbst erhoben.

## Search Console

- **Gesamt-Klicks:** 70
- **Gesamt-Impressionen:** 973
- **Durchschnittliche CTR:** 7,2 %
- **Durchschnittliche Position:** 16,4

**Seiten mit Impressionen (vollständige Liste laut Search Console, "1 bis 2 von 2"):**

| Seite | Klicks | Impressionen |
|---|---|---|
| `https://maler-sert.de/` | 69 | 905 |
| `https://maler-sert.de/malerarbeiten-hamburg` | 1 | 120 |

**Alle anderen indexierbaren Seiten** (`/schimmel-sanierung-hamburg`, `/bodenbelag-hamburg`, `/trockenbau-hamburg`, `/fassadenanstrich-hamburg`) tauchen in der Seiten-Aufschlüsselung **nicht auf** — sie erzeugen laut dieser Auswertung aktuell keine eigenen Impressionen.

**Top-Suchanfragen (Top 10 von 57):**

| Anfrage | Klicks | Impressionen |
|---|---|---|
| maler sert gmbh | 32 | 84 |
| mehmet sert | 2 | 11 |
| maler bramfeld | 1 | 31 |
| maler | 1 | 9 |
| maler wandsbek | 1 | 8 |
| tapezierarbeiten hamburg | 0 | 75 |
| maler schimmelbeseitigung hamburg | 0 | 64 |
| tapezieren hamburg | 0 | 32 |
| maler poppenbüttel | 0 | 22 |
| hochwertige tapezierarbeiten | 0 | 20 |

**Anteil Brand-Search:** "maler sert gmbh" + "mehmet sert" = 34 von 70 Klicks (~49 %) und 95 von 973 Impressionen (~10 %). Der Großteil der Impressionen kommt aus generischen Leistungsbegriffen, aber die Klicks konzentrieren sich stark auf Markensuche.

**Relevante Non-Brand-Queries ohne Klick (Auszug):** tapezierarbeiten hamburg (75 Impr.), maler schimmelbeseitigung hamburg (64 Impr.), tapezieren hamburg (32 Impr.), maler poppenbüttel (22 Impr.), hochwertige tapezierarbeiten (20 Impr.) — insgesamt 213 Impressionen ohne einen einzigen Klick in diesen 5 Zeilen allein.

## Auffälligkeiten

- **Starke Markensuche, schwache generische Sichtbarkeit für Klicks.** Website wird eher bestätigend angeklickt (Nutzer kennt den Namen schon) als organisch über Leistungsbegriffe neu entdeckt.
- **"maler schimmelbeseitigung hamburg": 64 Impressionen, 0 Klicks.** Nutzer sehen einen Treffer, klicken aber nicht durch.
- **Widerspruch zwischen Seiten-Tabelle und Query-Tabelle:** Die Suchanfrage "maler schimmelbeseitigung hamburg" erzeugt 64 Impressionen — aber laut Seiten-Tabelle hat NUR die Startseite und `/malerarbeiten-hamburg` überhaupt Impressionen. Rechnerisch kann die Schimmel-Impression also nicht von `/schimmel-sanierung-hamburg` selbst kommen (die Seite taucht in der Seiten-Liste gar nicht auf), sondern muss von der Startseite stammen. Das ist eine Ableitung aus den gelieferten Zahlen, kein direkt bestätigter Fakt — siehe P1-Punkt unten.
- **Übersichts-Chart des Nutzers zeigte "2 indexierte Seiten"** (Stand eines früheren Screenshots). Das widerspricht der Sitemap (6 URLs) und den Live-Statuscodes (alle 200, siehe unten). Nicht als Fakt übernommen, sondern als offene Prüffrage markiert — siehe Abschnitt „Technischer Indexierungsstatus".

## Realer Business-Impact

- Mehrere telefonische Kundenanfragen in den letzten Tagen vor dem 15.08.2026 (Nutzerangabe)
- Mindestens ein bestätigter Auftrag: Schimmelsanierung, Ausführung Oktober 2026
- **Attribution laut vorheriger Analyse (Search Console + Google Business Profile, 15.08.2026):** Die Anrufe kamen wahrscheinlich über den Anruf-Button im Google Business Profile (Maps/Knowledge-Panel), nicht über einen Website-Klick — GBP verzeichnete im selben Zeitraum einen Anstieg bei "Anrufe über das Unternehmensprofil". Website-Klicks aus GBP hatten ihren Höhepunkt zeitlich früher (Mai) und fallen nicht mit den Anrufen zusammen.
- **Damit ist GBP aktuell der plausiblere Lead-Kanal als organische Website-Klicks** — passt zum Befund oben, dass die Schimmel-Seite selbst kaum bis keine Klicks erzeugt.

## Technischer Indexierungsstatus

Geprüft: 22.08.2026, per Repo-Analyse (`bmwfreak/maler-sert-website`, Branch `master`) + Live-Check gegen `https://maler-sert.de`.

| URL | Exists | Crawlable | Indexable (kein noindex/Canonical-Problem) | In Sitemap | Interne Verlinkung | Notes |
|---|---|---|---|---|---|---|
| `/` | Ja (200) | Ja | Ja, canonical = `https://maler-sert.de` (ohne Slash, bewusst so) | Ja | Nav-Logo, überall verlinkt | Einzige Seite mit nennenswerten Impressionen |
| `/malerarbeiten-hamburg` | Ja (200) | Ja | Ja, canonical = `https://maler-sert.de/malerarbeiten-hamburg` | Ja | Homepage-Karte, Footer, Cross-Link von Schimmel-Seite ("weiter mit Malerarbeiten") | Einzige Leistungsseite mit gemessenen Impressionen (120) |
| `/schimmel-sanierung-hamburg` | Ja (200) | Ja | Ja, sauberer canonical, kein noindex | Ja | Homepage-Karte, Footer | 0 Impressionen in der Seiten-Tabelle trotz sauberer Technik |
| `/bodenbelag-hamburg` | Ja (200) | Ja | Ja | Ja | Homepage-Karte, Footer, verlinkt selbst zu Malerarbeiten + Trockenbau | 0 Impressionen |
| `/trockenbau-hamburg` | Ja (200) | Ja | Ja | Ja | Homepage-Karte, Footer, verlinkt selbst zu Malerarbeiten | 0 Impressionen |
| `/fassadenanstrich-hamburg` | Ja (200) | Ja | Ja | Ja | **NUR Footer.** Keine Homepage-Karte, kein Cross-Link von anderen Leistungsseiten. | Schwächste interne Verlinkung im ganzen Projekt, 0 Impressionen |
| `/impressum` | Ja (200) | Ja | Ja (kein noindex gesetzt, aber bewusst aus Sitemap ausgeschlossen) | Nein (Filter in `astro.config.mjs`) | Footer | Korrekt behandelt |
| `/datenschutz` | Ja (200) | Ja | Ja (kein noindex gesetzt, aber bewusst aus Sitemap ausgeschlossen) | Nein (Filter) | Footer | Korrekt behandelt |

**Navigation (`Nav.astro`) verlinkt auf KEINER Seite direkt zu einer Leistungsseite** — nur Anker zu Homepage-Sektionen (`/#leistungen`, `/#ablauf`, `/#kontakt`) plus Logo zur Startseite. Das ist sitealtweit so, betrifft also auch `/malerarbeiten-hamburg`, das trotzdem die einzige Leistungsseite mit Impressionen ist — Nav-Fehlen allein erklärt die 0-Impressionen bei den anderen 4 Seiten also nicht vollständig.

**robots.txt:** Erlaubt regulären Googlebot vollständig (`Allow: /`), referenziert korrekt `sitemap-index.xml`. Cloudflares verwalteter Block betrifft nur KI-Trainings-/Scraping-Bots (GPTBot, Google-Extended, ClaudeBot, Bytespider u. a.) — **nicht** die reguläre Google-Suche. Kein Problem für die Indexierung.

**sitemap-index.xml / sitemap-0.xml:** Live geprüft (22.08.2026). Enthält korrekt alle 5 Leistungsseiten + Startseite, HTTPS überall, keine veralteten URLs, Impressum/Datenschutz korrekt ausgeschlossen (`filter` in `astro.config.mjs`). Technisch sauber.

**Canonicals:** Stichprobe live geprüft (`/`, `/schimmel-sanierung-hamburg`, `/fassadenanstrich-hamburg`) — jede Seite hat genau einen self-referenzierenden Canonical, keine Duplicate-Canonical-Probleme gefunden.

**Offene Prüffrage (nicht mit den verfügbaren Mitteln klärbar):** Der vom Nutzer gezeigte Search-Console-Übersichts-Chart nannte "2 indexierte Seiten". Ob das ein veralteter/gecachter Wert des Dashboard-Widgets ist oder ob Google tatsächlich nur 2 der 6 Sitemap-URLs als "Gültig" führt, lässt sich nur über den vollständigen Indexierungsbericht (Search Console → Indexierung → Seiten) klären — dieser Bericht wurde bisher nicht als Screenshot geliefert. **Empfehlung: vor der nächsten SEO-Entscheidung genau diesen Bericht prüfen**, da er die zentrale offene Frage beantwortet (Punkt P0 im Aktionsplan).
