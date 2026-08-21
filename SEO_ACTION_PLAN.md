# SEO Action Plan — Maler Sert

Grundlage: `SEO_BASELINE_2026-08-22.md`. Nur priorisierte Maßnahmen, keine automatische Umsetzung von Texten. Reihenfolge = Priorität.

## P0 — GEKLÄRT UND BEHOBEN (22.08.2026)

1. ~~Indexierungsbericht direkt prüfen~~ **Erledigt.** Root Cause gefunden: Die bei Google **tatsächlich eingereichte Sitemap war `/sitemap.xml`** (eingereicht 28.05.2026) — diese URL liefert zwar HTTP 200, ist aber gar keine XML-Sitemap, sondern die HTML-Startseite (Fallback-Verhalten). Google meldete deshalb korrekt "1 Fehler, 0 erkannte Seiten". Die echte, technisch saubere Sitemap liegt unter `/sitemap-index.xml` (steht auch richtig in `robots.txt`), war aber nie in der Search Console eingereicht.

   **Live-Check pro Seite (URL-Prüfung, `/schimmel-sanierung-hamburg`):** "URL ist für Google verfügbar" / "Seite kann indexiert werden" — technisch war nie etwas kaputt, Google hatte die Seite schlicht nie über eine funktionierende Sitemap gefunden.

   **Fix durchgeführt:** `/sitemap-index.xml` wurde manuell in der Search Console eingereicht (22.08.2026, Konto eku1453@gmail.com). Zusätzlich Indexierung für `/schimmel-sanierung-hamburg` manuell beantragt. Die alte falsche `/sitemap.xml`-Einreichung steht noch in der Liste, stört aber nicht — kann bei Gelegenheit entfernt werden, keine Priorität.

   **Kein Codepatch nötig gewesen** — reine Search-Console-Konfiguration, keine Astro-/Repo-Änderung erforderlich.

   **Erwartung:** Google liest die neue Sitemap in den nächsten Stunden bis Tagen, alle 6 URLs sollten danach als "Erkannt" auftauchen. Nachprüfen nicht vor 24–48h nach dem 22.08.2026.

## P1 — Sitemap, Canonicals, interne Verlinkung, Indexierung

2. **`/fassadenanstrich-hamburg` fehlt komplett auf der Startseite.** Kein Homepage-Karte (Leistungs-Array in `src/pages/index.astro` hat nur 6 Einträge, "Fassadenanstrich" fehlt als eigene Karte — Fassaden werden nur als Unterpunkt bei "Malerarbeiten" erwähnt, ohne Link). Einzige Verlinkung ist der Footer. Das ist die am schwächsten intern verlinkte Seite im ganzen Projekt.
   - Vorschlag: eigene `LeistungCard` für Fassadenanstrich auf der Startseite ergänzen (analog zu den anderen 4), ODER mindestens einen Cross-Link von `/malerarbeiten-hamburg` aus setzen (dort wird "Fassaden & Außenanstriche" bereits als Text-Punkt gelistet, aber unverlinkt).
   - Kein Text umschreiben nötig, nur `href`/Link ergänzen.

3. **Keine Leistungsseite ist aus der globalen Navigation (`Nav.astro`) direkt erreichbar.** Nav verlinkt nur zu Homepage-Ankern. Alle 5 Leistungsseiten hängen an Footer + (teilweise) Homepage-Karten + vereinzelten Cross-Links.
   - Vorschlag: Dropdown oder einfache Linkliste "Leistungen" in der Nav ergänzen, mit Links zu allen 5 Slugs aus `services` (`src/data/business.ts`) — Datenquelle existiert bereits, keine neue Architektur nötig.
   - Niedrigeres Risiko, klarer SEO-Standardfix (bessere Klickpfadtiefe von jeder Seite aus, nicht nur von der Startseite).

4. **Cross-Linking zwischen Leistungsseiten ist lückenhaft, aber teilweise vorhanden.** Bodenbelag→Malerarbeiten+Trockenbau, Trockenbau→Malerarbeiten, Schimmel→Malerarbeiten sind bereits verlinkt. Fehlend: keine Seite verlinkt auf Schimmel-Sanierung oder Fassadenanstrich zurück.
   - Vorschlag (nur wo inhaltlich passend, keine künstliche Keyword-Verlinkung): z. B. von Trockenbau/Bodenbelag aus auf Schimmel-Sanierung verlinken (Wasserschaden-Kontext ist bereits Thema auf der Trockenbau-Seite).

## P2 — CTR-/Snippet-Optimierung

5. **"maler schimmelbeseitigung hamburg": 64 Impressionen, 0 Klicks.** Sobald P0 geklärt ist (welche Seite tatsächlich für diesen Begriff rankt), Title/Description dieser rankenden Seite auf CTR prüfen. Aktueller Title der Schimmel-Seite ("Schimmel-Sanierung Hamburg — Maler Sert GmbH | Mit Zertifikat") und Description sind inhaltlich stark, aber falls die Startseite dafür rankt (wahrscheinlich laut Baseline), ist das Snippet der Startseite zu prüfen, nicht das der Leistungsseite.
   - Keine Textänderung vorbereitet — erst nach P0-Klärung sinnvoll.

6. **Tapezierarbeiten-Begriffe** (75 + 32 Impressionen, 0 Klicks) laufen aktuell vermutlich ebenfalls über die Startseite/`/malerarbeiten-hamburg`, da es keine dedizierte Tapezier-Seite gibt. Kein Handlungsbedarf, bevor P0 nicht klärt, welche Seite tatsächlich rankt.

## P3 — Content-Erweiterung (erst nach ausreichender Datenlage)

7. Keine neuen Seiten oder große Textänderungen vorschlagen, solange P0 offen ist. Erst nachdem klar ist, welche Seiten Google wirklich indexiert und wofür sie ranken, macht Content-Ausbau (z. B. eigene Tapezier-Landingpage) Sinn.

---

**Nicht umgesetzt, nur dokumentiert.** Kein Commit, kein Push. Bei Bedarf wird zu P1-Punkt 2 (Fassadenanstrich-Verlinkung) und P1-Punkt 3 (Nav-Links) ein konkreter Diff vorbereitet — auf Rückmeldung.
