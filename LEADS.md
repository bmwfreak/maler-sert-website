# Lead-Register – Maler Sert GmbH

Dieses Register wird bei jeder echten Anfrage gepflegt. Quelle so genau wie bekannt erfassen, zum Beispiel `Google-Unternehmensprofil`, `Google-Suche`, `Website`, `WhatsApp`, `Empfehlung` oder `unbekannt`.

| Datum | Leistung | Quelle | Anruf | Angebot | Auftrag | Wert |
| --- | --- | --- | :---: | :---: | :---: | --- |
| Aug. 2026 | Schimmel-Sanierung | vermutlich Google | Ja | Ja | Ja | später ergänzen |

## Messstand zum 22.08.2026

| Kennzahl | Stand | Zeitraum / Quelle |
| --- | ---: | --- |
| Aktive Nutzer | 27 | GA4, Jahr bis heute |
| Sitzungen | 45 | GA4, Jahr bis heute |
| Organische Nutzer | 4 | GA4, letzte 28 Tage (25.07.–21.08.2026) |
| Google-Impressionen | 322 | Search Console in GA4, letzte 28 Tage: Startseite 288, Malerarbeiten 34 |
| Google-Business-Anrufe | 4 | Google-Unternehmensprofil, März–August 2026 |
| Google-Business-Website-Klicks | 27 | Google-Unternehmensprofil, März–August 2026 |
| Bekannte reale Leads | 3 | Drei telefonisch gemeldete Anfragen; eine Schimmel-Sanierung für Oktober ist beauftragt |

Dieser Messstand ist die Vergleichsbasis für spätere Monatsauswertungen. Zahlen immer mit Zeitraum und Quelle ergänzen.

## Messstand zum 28.08.2026

| Kennzahl | Stand | Zeitraum / Quelle |
| --- | ---: | --- |
| Neue Nutzer | 8 | GA4, letzte 28 Tage (01.–28.08.2026) |
| Wiederkehrende Nutzer | 2 | GA4, letzte 28 Tage |
| Qualifizierte Leads (GA4-Ziel) | 0 | GA4-Geschäftsziel „Leads generieren" — kein Conversion-Event konfiguriert/ausgelöst, sagt nichts über echte Anfragen aus |
| Sitzungen | 13 | GA4, letzte 28 Tage |
| Ereignisanzahl | 57 | GA4, letzte 28 Tage |
| Ø Interaktionsdauer | 1 m 47 s | GA4, letzte 28 Tage |
| Traffic-Quelle (neue Nutzer) | Organic Search 5 · Direct 3 | GA4, letzte 28 Tage |
| Top-Landingpage | „/" (Startseite): 12 Sitzungen (92 %) | GA4, letzte 28 Tage |
| Top-Einzelseite | Malerarbeiten Hamburg: 15 Aufrufe, 7 aktive Nutzer, 46 Ereignisse | GA4, letzte 28 Tage |
| Aktive Nutzer nach Stadt | Hamburg 4 · Ashburn 1 · Heidelberg 1 · Istanbul 1 | GA4, letzte 28 Tage — Ashburn/Istanbul vermutlich Bot/Crawler-Traffic (Ashburn = AWS-Rechenzentrum), kein echter Lead |

Achtung: Dieser Messstand ist **nur letzte 28 Tage**, der Stand vom 22.08. war **Jahr bis heute** — nicht direkt vergleichbar, unterschiedliche Zeiträume.

## GA4-Konfig-Fix (29.08.2026)

Ursache für „Qualifizierte Leads: 0" gefunden: In GA4 waren 5 Schlüsselereignisse definiert (`close_convert_lead`, `phone_click`, `purchase`, `qualify_lead`, `whatsapp_click`), aber `qualify_lead` hatte **keinen zugehörigen Code** — feuerte nie, ganz gleich wie viel Traffic kam. `phone_click`/`whatsapp_click` sind im Code korrekt implementiert ([tracking.ts](src/scripts/tracking.ts)), hatten in den letzten 28 Tagen aber schlicht 0 Klicks.

Fix (reine GA4-Konfig, kein Code-Deploy): `qualify_lead` neu verknüpft mit der Bedingung `event_name ist gleich form_submit` — das Kontaktformular auf der Startseite feuert `form_submit` bereits bei jedem Absenden ([form.ts:50-56](src/scripts/form.ts:50)). Ab jetzt zählt jede Formular-Anfrage als qualifizierter Lead in GA4.

`close_convert_lead` bleibt weiterhin ohne Code dahinter — das wäre der Schritt „Auftrag erteilt", der nicht automatisch von der Website aus trackbar ist (passiert offline/telefonisch). Müsste manuell in GA4 nachgetragen werden oder bleibt Handarbeit im oberen Lead-Register dieser Datei.

**Search-Console-Check (29.08.2026):** Sitemap-Fix vom 22.08. bestätigt funktionierend (`/sitemap-index.xml`, zuletzt gelesen 29.08., Status „Erfolgreich", 6 Seiten erkannt). Der Seitenindexierungs-Bericht selbst war zum Prüfzeitpunkt noch auf Stand 21.08. (vor dem Fix) und zeigte 7 von 9 Seiten als „Gefunden – zurzeit nicht indexiert" (Ursache: Google-Systeme, kein Website-Fehler) — normal bei neuen/kleinen Domains, kein Handlungsbedarf, nur Geduld. Nächster Check sinnvoll ab Mitte September.

## Messstand zum 03.09.2026

GA4-Zeitraum: 06.08.–02.09.2026 (letzte 28 Tage). Direkt vergleichbar mit dem Stand vom 28.08.

| Kennzahl | 28.08. | 03.09. | Quelle |
| --- | ---: | ---: | --- |
| Sitzungen | 13 | **20** | GA4, 28 Tage |
| Neue Nutzer | 8 | **11** | GA4, 28 Tage |
| Wiederkehrende Nutzer | 2 | **4** | GA4, 28 Tage |
| Organic Search (Sitzungen) | — | 16 (80 %) | GA4, 28 Tage |
| Direct (Sitzungen) | — | 4 (20 %) | GA4, 28 Tage |
| Engagement-Rate gesamt | — | 45 % | GA4, 28 Tage |
| Ø Interaktionsdauer | 1 m 47 s | 49 Sek. | GA4, 28 Tage |
| Schlüsselereignisse | 0 | **1** | GA4, ausgelöst auf „/" |
| Qualifizierte Leads (`qualify_lead`) | 0 | 0 | GA4 — seit 29.08. an `form_submit` gekoppelt |
| Google-Rezensionen | 5 | **6** | Google-Unternehmensprofil, 5,0 ★ |

**Traffic-Qualität (wichtiger als die Summe):**

| Segment | Sitzungen | Engagement | Bewertung |
| --- | ---: | ---: | --- |
| Organic Search | 16 | 56,25 %, 1 m 02 s | echte Nutzer |
| Direct | 4 | 0 %, 0 Sek. | Bot/Crawler, kein Mensch |

Städte: Hamburg 5 · Heidelberg 2 · Ashburn 1 · Istanbul 1. Ashburn = AWS-Rechenzentrum.
**Real relevanter Traffic bleibt damit ~5 Hamburger Nutzer in 28 Tagen.**

### Der zentrale Befund: Impressionen ja, Klicks nein

| Kennzahl | Wert | Quelle |
| --- | ---: | --- |
| Impressionen Startseite „/" | 320 | Search Console in GA4, 28 Tage |
| Impressionen `/malerarbeiten-hamburg` | 64 | Search Console in GA4, 28 Tage |
| **Klicks gesamt** | **1** | Search Console in GA4, 28 Tage |
| Einzige klickende Suchanfrage | „maler sert gmbh" | = Brand-Suche |

384 Impressionen, 1 Klick — **CTR ≈ 0,26 %**. Der einzige Klick kam über eine Suche nach dem
Firmennamen, also von jemandem, der den Betrieb bereits kannte.

Interpretation: Google zeigt die Seite (Impressionen steigen leicht), aber auf Positionen, die
praktisch nie geklickt werden. Für generische Anfragen wie „Maler Hamburg" gibt es **null Klicks**.
Das ist ein Ranking-/Sichtbarkeitsproblem, kein Snippet- und kein Conversion-Problem.

**Konsequenz für die Priorisierung:** Bei ~5 echten Hamburger Besuchern im Monat bringt
Conversion-Optimierung auf der Website absolut wenig (5 Besucher × besserer Button = weiterhin
fast keine Anfragen). Die Audit-Fixes bleiben richtig, weil sie billig sind — aber der Haupthebel
liegt beim Google-Unternehmensprofil (Map Pack), nicht bei der Website. Das deckt sich mit den
GBP-Zahlen von März–August: 4 Anrufe und 27 Website-Klicks kamen über das Profil, mehr als die
organische Suche im selben Zeitraum lieferte.

### Rezensionen — Stand 03.09.2026

6 Rezensionen, 5,0 ★. Datenstand in `business.ts` von `reviewCount: 5` auf `6` nachgezogen.

Beim Nachziehen geprüft: Das `aggregateRating` aus `business.ts` wird **nirgends ins JSON-LD
gerendert** (verifiziert per Build-Output und Grep über `src/`). Der als kritisch geführte
Audit-Punkt „aggregateRating ohne sichtbaren Beleg — Google-Richtlinienrisiko"
([AUDIT_GESAMT](AUDIT_GESAMT_2026-07-26.md), Punkt 4.5 / kritisch #3) ist damit **erledigt**.
Der Block bleibt als reiner Datenstand stehen und ist im Code entsprechend kommentiert.

| Rezensent | Sterne | Alter | Text | Profil |
| --- | ---: | --- | --- | --- |
| Souhil Khatiri | 5 | 2 Tage | kein Text | 0 Rezensionen, 0 Fotos |
| Ugur Ertütüncü | 5 | 14 Wochen | ausführlich, nennt Malerarbeiten, Tapezieren, Fassadengestaltung | 3 Rezensionen |

Einordnung: Nur die Rezension von Ugur Ertütüncü hat Text und stammt von einem Profil mit
weiteren Bewertungen — sie ist die einzige, die sich für einen sichtbaren Testimonial-Block
auf der Website eignet. Die neue Bewertung ohne Text von einem Profil ohne Historie hat dasselbe
Muster wie die in [PROJEKT.md](PROJEKT.md) dokumentierten fünf Bewertungen aus dem Bekanntenkreis.
Am Grundproblem — es fehlen Bewertungen von Fremdkunden — ändert sie nichts.

## Status-Hinweise

- `Anruf`: Die Anfrage kam telefonisch.
- `Angebot`: Ein schriftliches Angebot wurde erstellt oder zugesagt.
- `Auftrag`: Der Auftrag wurde verbindlich erteilt.
- `Wert`: Angebots- oder Auftragswert nachtragen, sobald bekannt.

## Search-Console-Auswertung 04.09.2026 — korrigiert den Messstand vom 03.09.

Quelle: Search Console direkt, Zeitraum 3 Monate (02.06.–02.09.2026). **Diese Zahlen ersetzen die
GA4-Interpretation vom 03.09.** Der dortige Befund „384 Impressionen, 1 Klick, CTR 0,26 %" stammte
aus dem GA4-Ausschnitt der Search-Console-Daten über 28 Tage und war irreführend.

| Kennzahl | Wert |
| --- | ---: |
| Klicks | 59 |
| Impressionen | 975 |
| CTR | **6,1 %** |
| Durchschnittliche Position | **17,8** |
| Anzahl Suchanfragen | 57 |

**Position 17,8 heißt Seite 2.** Nicht „zu tief zum Geklicktwerden", wie am 03.09. vermutet, sondern
der Bereich, aus dem der Sprung auf Seite 1 die klassisch erreichbarste SEO-Bewegung ist.

Warum GA4 so viel weniger zeigt: GA4 zählt nur Nutzer, die im Consent-Banner auf „Akzeptieren"
geklickt haben, die Search Console zählt alle Klicks. **GA4 unterschätzt den Traffic systematisch** —
bei künftigen Auswertungen ist die Search Console die verlässlichere Quelle für Sichtbarkeit.

### Top-10-Suchanfragen

| Suchanfrage | Klicks | Impressionen | CTR |
| --- | ---: | ---: | ---: |
| maler sert gmbh | 17 | 35 | 48,6 % |
| mehmet sert | 2 | 14 | 14,3 % |
| maler bramfeld | 1 | 28 | 3,6 % |
| maler | 1 | 10 | 10,0 % |
| maler wandsbek | 1 | 8 | 12,5 % |
| **tapezierarbeiten hamburg** | **0** | **85** | **0 %** |
| **maler schimmelbeseitigung hamburg** | **0** | **68** | **0 %** |
| **tapezieren hamburg** | **0** | **35** | **0 %** |
| professioneller malerbetrieb und bodenverlegung in hamburg heimfeld | 0 | 25 | 0 % |
| sert | 0 | 21 | 0 % |

Rund 19 der 59 Klicks (32 %) kommen über Marken-Suchen (`maler sert gmbh`, `mehmet sert`, `sert`) —
also von Leuten, die den Betrieb schon kannten. Aus generischer Suche bleiben ~40 Klicks in
3 Monaten, gut 13 pro Monat.

### Befund 1: Tapezieren ist die größte Content-Lücke

`tapezierarbeiten hamburg` (85) + `tapezieren hamburg` (35) = **120 Impressionen, null Klicks.**
Das ist nach der Marke das stärkste Keyword-Cluster im gesamten Konto.

Im Code geprüft: **Es gibt keine Tapezier-Seite.** „Tapezieren" existiert nur als Nebenerwähnung —
ein Listenpunkt auf der Malerarbeiten-Seite, zwei FAQ-Antworten, ein Wort in `knowsAbout`. Google
blendet für diese Suchen also die Malerarbeiten-Seite ein, deren H1 „Malerarbeiten" heißt. Wer
gezielt nach Tapezieren sucht, sieht ein Ergebnis, das seine Frage nicht genau trifft, und klickt
das der Konkurrenz.

Die Leistung wird erbracht — sie hat nur keine Seite, die sie verkauft.

### Befund 2: Schimmelbeseitigung — Wording-Mismatch

`maler schimmelbeseitigung hamburg`: **68 Impressionen, 0 Klicks** — obwohl es eine eigene
Schimmel-Seite gibt. Ursache im Code gefunden: Die Seite spricht durchgehend von
„Schimmel-Sanierung" und „Schimmelentfernung", das Wort **„Beseitigung" kommt in Title,
Description und H1 nicht vor**. Der Suchende sieht seinen eigenen Begriff nicht im Snippet.

Billigster Fix im ganzen Bericht: ein Wort in Title und Description.

### Befund 3: Stadtteil-Suchen tragen — aber nur die eigenen

`maler bramfeld` (28 Impressionen, 1 Klick) und `maler wandsbek` (8 / 1) zeigen Signal. Beides ist
die unmittelbare Nachbarschaft — der Betrieb sitzt in 22047 Hamburg, Bezirk Wandsbek.

Das relativiert die Audit-Empfehlung „keine Stadtteilseiten"
([AUDIT_GESAMT](AUDIT_GESAMT_2026-07-26.md), Abschnitt 7) **nicht vollständig, aber teilweise**: Für
Norderstedt, Pinneberg und Reinbek bleibt der Einwand gültig — dort gibt es keine Referenzen und
eine Seite wäre Thin Content. Für Wandsbek und Bramfeld ist die Ortsnähe dagegen echt und
belegbar. Falls Stadtteil-Inhalte, dann diese zuerst.

### Neue Priorisierung

Abgeleitet aus Impressionen ohne Klicks, nicht aus Audit-Kategorien:

1. **Tapezier-Seite anlegen** — 120 vorhandene Impressionen, kein Ziel dafür. Größter Hebel, direkt messbar.
2. **„Schimmelbeseitigung" in Title und Description der Schimmel-Seite** — 68 Impressionen, Aufwand ein Wort.
3. **Snippets der Seiten mit Impressionen ohne Klicks schärfen** — von Position ~18 auf Seite 1 ist Title/Description die günstigste Stellschraube.
4. Wandsbek/Bramfeld-Bezug auf bestehenden Seiten stärken, bevor über neue Ortsseiten nachgedacht wird.

Die Audit-Quickfixes (WhatsApp-Kontrast, Hero-H1, Brutto-Preise) bleiben richtig und billig, wirken
aber auf Conversion, nicht auf Sichtbarkeit — und Sichtbarkeit ist laut diesen Zahlen der Engpass.

### Nachtrag: Trend und Seitenverteilung (Statistik-Ansicht, 3 Monate)

| Kennzahl | Wert | Veränderung zur Vorperiode |
| --- | ---: | ---: |
| Klicks | 59 | **+181 %** |
| Impressionen | 975 | **+577 %** |

Die Sichtbarkeit wächst also deutlich — die Basis war nur sehr niedrig. Das relativiert den Ton der
bisherigen Auswertungen: Es ist keine stagnierende, sondern eine junge, schnell wachsende Domain.

**Klicks nach Seite — hier liegt das eigentliche Strukturproblem:**

| Seite | Klicks |
| --- | ---: |
| `/` (Startseite) | **58** (+176 %) |
| `/malerarbeiten-hamburg` | 1 (vorher 0) |
| alle übrigen Service-Seiten | **0** |

**58 von 59 Klicks landen auf der Startseite.** Vier der fünf Service-Seiten haben in drei Monaten
keinen einzigen Klick bekommen. Google beantwortet praktisch jede Suche mit der Startseite, auch
die spezifischen — für `tapezierarbeiten hamburg` (85 Impressionen) wird also aller
Wahrscheinlichkeit nach die Startseite eingeblendet, nicht einmal die Malerarbeiten-Seite.

Das verschiebt Befund 1 noch einmal: Es fehlt nicht nur eine Tapezier-Seite, sondern die
bestehenden Service-Seiten sind insgesamt zu schwach, um eigenständig zu ranken. Eine neue Seite
anzulegen, ohne diese Schwäche zu verstehen, würde die sechste Seite ohne Klicks produzieren.

**Vor dem Bau einer Tapezier-Seite daher prüfen:** Werden die Service-Seiten überhaupt indexiert
(URL-Prüfung in der Search Console), und wenn ja, für welche Suchanfragen werden sie eingeblendet
(Leistungsbericht, Filter auf die jeweilige Seite)? Der Verdacht aus dem Indexierungs-Check vom
29.08. — „7 von 9 Seiten gefunden, zurzeit nicht indexiert" — passt zu diesem Bild und wäre die
einfachste Erklärung.
