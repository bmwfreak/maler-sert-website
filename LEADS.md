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

## Status-Hinweise

- `Anruf`: Die Anfrage kam telefonisch.
- `Angebot`: Ein schriftliches Angebot wurde erstellt oder zugesagt.
- `Auftrag`: Der Auftrag wurde verbindlich erteilt.
- `Wert`: Angebots- oder Auftragswert nachtragen, sobald bekannt.
