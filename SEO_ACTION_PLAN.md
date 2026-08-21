# SEO Action Plan — Maler Sert

Grundlage: `SEO_BASELINE_2026-08-22.md`. Nur priorisierte Maßnahmen, keine automatische Umsetzung von Texten. Reihenfolge = Priorität.

## P0 — GEKLÄRT UND BEHOBEN (22.08.2026)

1. ~~Indexierungsbericht direkt prüfen~~ **Erledigt.** Root Cause gefunden: Die bei Google **tatsächlich eingereichte Sitemap war `/sitemap.xml`** (eingereicht 28.05.2026) — diese URL liefert zwar HTTP 200, ist aber gar keine XML-Sitemap, sondern die HTML-Startseite (Fallback-Verhalten). Google meldete deshalb korrekt "1 Fehler, 0 erkannte Seiten". Die echte, technisch saubere Sitemap liegt unter `/sitemap-index.xml` (steht auch richtig in `robots.txt`), war aber nie in der Search Console eingereicht.

   **Live-Check pro Seite (URL-Prüfung, `/schimmel-sanierung-hamburg`):** "URL ist für Google verfügbar" / "Seite kann indexiert werden" — technisch war nie etwas kaputt, Google hatte die Seite schlicht nie über eine funktionierende Sitemap gefunden.

   **Fix durchgeführt:** `/sitemap-index.xml` wurde manuell in der Search Console eingereicht (22.08.2026, Konto eku1453@gmail.com). Zusätzlich Indexierung für `/schimmel-sanierung-hamburg` manuell beantragt. Die alte falsche `/sitemap.xml`-Einreichung steht noch in der Liste, stört aber nicht — kann bei Gelegenheit entfernt werden, keine Priorität.

   **Kein Codepatch nötig gewesen** — reine Search-Console-Konfiguration, keine Astro-/Repo-Änderung erforderlich.

   **Erwartung:** Google liest die neue Sitemap in den nächsten Stunden bis Tagen, alle 6 URLs sollten danach als "Erkannt" auftauchen. Nachprüfen nicht vor 24–48h nach dem 22.08.2026.

## P1 — Sitemap, Canonicals, interne Verlinkung, Indexierung

2. ~~`/fassadenanstrich-hamburg` fehlt komplett auf der Startseite.~~ **Behoben (22.08.2026, Commit `9066398`).** Cross-Link von der Homepage-Karte "Malerarbeiten" ("Fassaden" → `/fassadenanstrich-hamburg`) und vom Bereich "Fassaden & Außenanstriche" auf `/malerarbeiten-hamburg` ergänzt. Keine neue Karte hinzugefügt (Risiko: Grid-Layout), nur bestehende Text-Punkte verlinkt.
   - Nebenbefund dabei: `/malerarbeiten-hamburg` rendert seine Bereiche-Items ohne `set:html` (anders als `LeistungList.astro`/`LeistungCard.astro`) — wäre als kaputter Rohtext sichtbar gewesen, mitgefixt.

3. ~~Keine Leistungsseite ist aus der globalen Navigation (`Nav.astro`) direkt erreichbar.~~ **Behoben (22.08.2026, Commit `9066398`).** "Leistungen" in der Nav ist jetzt ein CSS-Dropdown (hover/focus-within, keine neue JS-Architektur) mit Links zu allen 5 Slugs aus `services`. Bekannte Einschränkung: `.nav-links` ist unterhalb 940px komplett `display:none` (vorbestehend, nicht durch diese Änderung verursacht) — auf Mobile bleiben Footer + Homepage-Karten weiterhin die einzigen Pfade zu den Leistungsseiten. Mobile-Nav wäre ein separates, größeres Vorhaben.

4. **Cross-Linking zwischen Leistungsseiten teilweise ergänzt.** Bodenbelag→Malerarbeiten+Trockenbau, Trockenbau→Malerarbeiten, Schimmel→Malerarbeiten waren bereits verlinkt. Neu (22.08.2026): Trockenbau → Schimmel-Sanierung ("Sanierputz nach Wasserschaden oder Schimmel"). Weiterhin fehlend: keine Seite verlinkt auf Fassadenanstrich zurück außer den beiden neuen Homepage-/Malerarbeiten-Links — Bodenbelag/Schimmel haben keinen inhaltlich passenden Anknüpfungspunkt gefunden, keine künstliche Verlinkung erzwungen.

## P2 — CTR-/Snippet-Optimierung

5. **"maler schimmelbeseitigung hamburg": 64 Impressionen, 0 Klicks.** Sobald P0 geklärt ist (welche Seite tatsächlich für diesen Begriff rankt), Title/Description dieser rankenden Seite auf CTR prüfen. Aktueller Title der Schimmel-Seite ("Schimmel-Sanierung Hamburg — Maler Sert GmbH | Mit Zertifikat") und Description sind inhaltlich stark, aber falls die Startseite dafür rankt (wahrscheinlich laut Baseline), ist das Snippet der Startseite zu prüfen, nicht das der Leistungsseite.
   - Keine Textänderung vorbereitet — erst nach P0-Klärung sinnvoll.

6. **Tapezierarbeiten-Begriffe** (75 + 32 Impressionen, 0 Klicks) laufen aktuell vermutlich ebenfalls über die Startseite/`/malerarbeiten-hamburg`, da es keine dedizierte Tapezier-Seite gibt. Kein Handlungsbedarf, bevor P0 nicht klärt, welche Seite tatsächlich rankt.

## P3 — Content-Erweiterung (erst nach ausreichender Datenlage)

7. Keine neuen Seiten oder große Textänderungen vorschlagen, solange P0 offen ist. Erst nachdem klar ist, welche Seiten Google wirklich indexiert und wofür sie ranken, macht Content-Ausbau (z. B. eigene Tapezier-Landingpage) Sinn.

---

**Nicht umgesetzt, nur dokumentiert.** Kein Commit, kein Push. Bei Bedarf wird zu P1-Punkt 2 (Fassadenanstrich-Verlinkung) und P1-Punkt 3 (Nav-Links) ein konkreter Diff vorbereitet — auf Rückmeldung.
