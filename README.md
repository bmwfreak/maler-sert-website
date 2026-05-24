# Projekt: Maler Sert GmbH — Web-Präsenz aufbauen

**Kontext:** Erstes echtes Kundenprojekt — Maler-Meisterbetrieb in Hamburg, seit 2002. Inhaber Mehmet Sert ist befreundet, wir bauen die digitale Präsenz unentgeltlich auf und sammeln dadurch Praxis-Erfahrung für die nächsten Bürohilfe-Kunden.

**Lieferumfang (geplant):**
- Eigene Domain
- Geschäfts-E-Mail
- Statische Webseite (One-Pager mit vier Leistungsbereichen)
- Google Business Profile (mit öffentlicher Adresse, da Werkstatt vorhanden)
- Impressum + Datenschutzerklärung
- Übergabe-Dokumentation, damit Mehmet Sert oder ein anderer Dienstleister es später weiterführen kann

## Dateien

| Datei | Inhalt | Status |
|---|---|---|
| `DATA.md` | Firmenfakten aus North Data, Creditreform, Branchenbüchern | Befüllt |
| `01_ANGEBOT.md` | Leistungsbereiche und Inhalte für die Webseite | Entwurf |
| `02_GBP_SETUP.md` | Google Business Profile Schritt für Schritt (Standort-Profil + Google-Konto-Neuanlage) | Entwurf |
| `03_GO_LIVE_CHECKLIST.md` | Domain, Mail, Hosting, GBP-Abnahme | Folgt |
| `04_DOMAIN_MAIL.md` | Domain-Auswahl, Mailpostfach, Telefonkonzept | Entwurf |
| `05_VEREINBARUNG.md` | Kurze schriftliche Absprache zwischen Emre und Mehmet | Entwurf |
| `landingpage/index.html` | One-Pager mit 6 Leistungsbereichen, Quadratmeter-Preisen, SMS-Fallback | ✓ Entwurf |
| `landingpage/impressum.html` | Impressum nach § 5 DDG, USt-IdNr + Haftpflicht als Platzhalter | ✓ Entwurf |
| `landingpage/datenschutz.html` | Datenschutz ohne Tracking/Formular/Cookies | ✓ Entwurf |

## Zielgruppen (laut Mehmet betrifft alle vier)

1. **Privatkunden / Hausbesitzer** — Renovierung, Streichen, Tapezieren, Schimmel-Sanierung
2. **Hausverwaltungen** — WEG- und Miethaus-Maßnahmen, Rahmenverträge
3. **Gewerbekunden** — Büros, Praxen, Gastronomie, oft nach Feierabend/Wochenende
4. **Bauunternehmen (Sub)** — Neubauprojekte als Subunternehmer

## Strategische Anker für die Webseite

| Anker | Warum | Sichtbar wo |
|---|---|---|
| **Ein Ansprechpartner für die komplette Renovierung** | Hauptdifferenzierer — Mehmet macht weit mehr als Maler-Arbeiten | Hero, jede Sektion |
| Seit 2002 in Hamburg | 24 Jahre Bestand = Vertrauen | Hero, Footer, GBP |
| Familienbetrieb, 3 Mitarbeiter | persönlich, direkter Draht | Über-uns-Sektion |
| Hamburg + Umland (Norderstedt, Pinneberg, Reinbek) | lokaler Bezug, klares Einzugsgebiet | Hero, Footer, GBP |
| **Transparente Quadratmeter-Preise** (Streicharbeiten) + Festpreis-Angebot vor Ort | Differenzierer gegenüber Wettbewerb mit Stunden-Abrechnung | Hero, Preis-Sektion |
| Schimmel-Sanierung mit Zertifikat | Vertrauensanker für ein heikles Thema | Sektion Sanierung |
| Vor-Ort-Termin und Angebot kostenlos | niedrige Einstiegsschwelle | Kontakt-Sektion |

**Bewusst NICHT prominent:** Auf Mehmets Wunsch wird „Maler-Meisterbetrieb" nicht groß ausgelobt. Der Meisterbrief existiert (HWK Hamburg), wird aber nur dezent im Impressum und einmal im Footer erwähnt — nicht in Hero oder Headlines.

## Was als nächstes zu entscheiden ist

1. **Erstes Gespräch mit Mehmet** — bestätigen lassen:
   - Welche Leistungen wirklich angeboten werden (jedes Detail in `01_ANGEBOT.md` muss stimmen)
   - Ob Festpreis tatsächlich für alles gilt oder nur für klar abgegrenzte Projekte
   - Ob Mitarbeitende beschäftigt werden (für „Über uns" / GBP)
   - Ob er bereit ist, 5–10 Fotos von eigenen Arbeiten zu liefern (entscheidet die optische Qualität der Webseite)

2. **Domain** — Vorschläge in `04_DOMAIN_MAIL.md`. Mehmet muss zustimmen, vor allem weil er sich später auch unter dieser Domain bewerben muss.

3. **Vereinbarung** — `05_VEREINBARUNG.md` ausdrucken, gemeinsam unterschreiben, **bevor** Domain & Mail bezahlt werden.

4. **Google Business Profile** — Postkarten-Verifizierung dauert 5–14 Tage. So früh wie möglich starten.

## Lieferzeit-Schätzung (realistisch, Sonntag-Abend-Stand)

- Tag 1 (Gespräch mit Mehmet): Leistungen klar, Fotos angefragt, Domain abgestimmt, Vereinbarung unterschrieben
- Tag 2: Domain + Mail registrieren, Impressum/Datenschutz mit echten Daten finalisieren
- Tag 3: Landingpage bauen (Entwurf), Mehmet zur Freigabe schicken
- Tag 4: Korrekturen einbauen, Live-Deployment auf Netlify
- Tag 5: GBP anlegen, Verifizierung anstoßen
- Tag 6–14: Postkarte abwarten, GBP fertig konfigurieren, erste Beiträge posten

## Unterschied zu Bürohilfe Hamburg

| | Bürohilfe Hamburg | Maler Sert |
|---|---|---|
| Branche | Dienstleistung (IT-nah) | Handwerk |
| Adresse | privat, geheim (SAB-Modus) | öffentlich, Werkstatt |
| Zielgruppe | KMU als B2B | Privat + B2B gemischt |
| Verkaufsargument | „lokal, kein Cloud, kein Abo" | „Meisterbetrieb seit 2002, Festpreis" |
| Akquise | aktive Outreach (E-Mail/Telefon) | passiv über GBP + Mundpropaganda |
| Webseite-Stil | sachlich, textlastig | bildlastig, Vorher/Nachher-Fotos |
| GBP-Modus | Service-Area Business | Standort mit Adresse |

Heißt: viele Bürohilfe-Dateien sind als **Muster** brauchbar, müssen aber inhaltlich neu geschrieben werden.
