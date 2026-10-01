# Local SEO Analyse — maler-sert.de

Stand: **01.10.2026** · Vorversion: 22.08.2026 (51/100, in der Git-Historie)

Geprüft: eigene Website (Seiten, Footer, JSON-LD), Google-Unternehmensprofil, Search Console,
sowie jeder bekannte Verzeichniseintrag einzeln (Abruf der Seite bzw. Suche im Verzeichnis selbst).

## Local SEO Score: 54/100 (vorher 51)

| Dimension | Gewicht | 22.08. | 01.10. | Kernaussage |
|---|---:|---:|---:|---|
| Google-Unternehmensprofil | 25 | 13 | **16** | Adresse jetzt öffentlich, Einzugsgebiet bleibt; Fotos und Beiträge fehlen |
| Bewertungen | 20 | 5 | **6** | 6 × 5,0 ★, nur eine mit Text, unter der 10er-Schwelle, eine unbeantwortet |
| Lokale Onpage-Faktoren | 20 | 15 | **17** | Ort in Titel und H1, Adresse sichtbar, Altbau und Tapezieren ergänzt |
| NAP & Verzeichnisse | 15 | 8 | **5** | **Richtige Telefonnummer steht in keinem einzigen Verzeichnis** |
| Strukturierte Daten | 10 | 8,5 | **8,5** | Vollständig; `hasCredential` (Meisterbrief) fehlt weiter |
| Lokale Links & Autorität | 10 | 1 | **1** | Keine Erwähnungen außerhalb von Verzeichnissen |

Die Verzeichnis-Note ist gesunken, obwohl sich dort nichts verschlechtert hat: Die Prüfung war im
August eine Stichprobe aus der Websuche, diesmal wurde jeder Eintrag einzeln abgerufen. Das Bild
ist dadurch genauer — und schlechter.

**Geschäftstyp:** Hybrid (seit 30.09. sichtbare Adresse plus Einzugsgebiet) · **Branche:** Home Services, Malerbetrieb

---

## 1. Der wichtigste Befund: die Telefonnummer

Die aktuelle Nummer **0173 8615002** steht laut Google-Suche nach der exakten Nummer **ausschließlich
auf maler-sert.de** — und im Google-Unternehmensprofil. Kein einziges Verzeichnis führt sie.

Die tote Festnetznummer **040 687045** steht dagegen bei:

| Verzeichnis | Adresse | Telefon | Website-Link | Weg zur Korrektur |
|---|---|---|---|---|
| Yelp | 15 ✓ | **040 687045** | – | Profil beanspruchen (Konto) |
| Cylex | 15 ✓ | **040 687045** | – | „Fehlerhafte Daten melden" |
| Firmania | spiegelt Cylex | | | zieht nach Cylex-Korrektur nach |
| branchen-info.net | 15 ✓ (**teilweise korrigiert**) | **040 687045** | ✓ neu | E-Mail an info@branchen-info.net, Betreff mit ID 4196323 |
| Öffnungszeitenbuch | 15 ✓ | **040 687045** | – | „Fehler melden" |
| Stadtbranchenbuch | 15 ✓ | **040 687045** + Fax | – | „Eintrag bearbeiten" (Login) |
| maler-finden.org | 15 ✓ | **040 687045** + Fax | – | „Änderung vorschlagen" |
| Infobel | ? | **040 68…** | ? | Eintrag beanspruchen |
| Jobaushilfe.de | 15 ✓ | **040 687045** | – | Kontakt zum Betreiber |
| meinestadt.de | **15A** | – | ✓ | — |
| branchenbuchdeutschland.de | 15 ✓ | **040 687045** + Fax | – | — |
| Creditsafe | — | — | — | nennt Gründung „2000" statt 2002 |
| Northdata / Creditreform | 15 ✓ | – | – | Handelsregister-Spiegel, zieht automatisch nach |

**branchen-info.net ist seit August teilweise korrigiert:** Adresse jetzt ohne „A", Website hinterlegt.
Die Telefonnummer ist aber noch die alte. Das heißt, dort hat schon jemand angesetzt — der zweite
Schritt fehlt nur noch. Googles Suchergebnis-Ausschnitt zeigt noch den alten Stand, weil Google die
Seite seither nicht neu abgerufen hat.

**Warum das zählt:** Wer bei Yelp, Cylex oder Infobel auf „Anrufen" tippt, landet bei einem toten
Anschluss. Für ChatGPT und andere KI-Systeme widersprechen sich die Quellen: Die eigene Seite sagt
0173…, acht Verzeichnisse sagen 040…. Laut Whitespark 2026 sind drei der fünf wichtigsten Faktoren
für KI-Sichtbarkeit verzeichnisbezogen.

---

## 2. Wo der Betrieb gar nicht steht

Direkt in der Suche des jeweiligen Verzeichnisses geprüft, nicht nur über Google:

| Verzeichnis | Ergebnis | Relevanz |
|---|---|---|
| **Das Örtliche** | kein Eintrag (auch nicht unter „Sert") | hoch — Telefonbuch-Daten speisen viele andere Verzeichnisse |
| **Gelbe Seiten** | 0 Treffer | hoch |
| **11880** | kein Eintrag | mittel |
| Facebook, Instagram | kein Firmenprofil gefunden | mittel |
| golocal, MyHammer | kein Eintrag gefunden | niedrig |
| Handwerkskammer Hamburg | nicht gefunden | **hoch** — stärkstes Autoritätssignal, zugleich Impressumspflicht |
| Bing Places | nicht prüfbar (Bing verlangt Bot-Prüfung) | **hoch** — Grundlage für ChatGPT und Copilot |
| Apple Business Connect | nicht von außen prüfbar | mittel |

Bei Das Örtliche, Gelbe Seiten und 11880 ist der Eintrag kostenlos. Weil diese drei Datenquellen an
viele kleinere Verzeichnisse weitergeben, korrigiert ein richtiger Eintrag dort mittelfristig
auch Folgefehler.

---

## 3. Eigene Daten — jetzt konsistent

| Quelle | Name | Adresse | Telefon |
|---|---|---|---|
| Website Kontaktblock | Maler Sert GmbH | In der Niederung 15, 22047 Hamburg | 0173 8615002 |
| Website Footer | Maler Sert GmbH | **In der Niederung 15 · 22047 Hamburg** (bis heute ohne Straße) | 0173 8615002 |
| JSON-LD | Maler Sert GmbH | In der Niederung 15, 22047 Hamburg | +49-173-8615002 |
| Google-Unternehmensprofil | Maler Sert GmbH | In d. Niederung 15, 22047 Wandsbek | 0173 8615002 |

Heute behoben:
- **Footer** zeigte auf allen Leistungsseiten nur „Hamburg · 22047" ohne Straße. Jetzt vollständig, aus `business.ts`.
- **Kartenlink** „Standort ansehen" war fest auf die Hamburger Innenstadt eingetragen und lag **6,78 km**
  neben dem Betrieb (seit August bekannt, nie behoben). Zeigt jetzt auf das Google-Unternehmensprofil.

Google schreibt „Wandsbek" statt „Hamburg" — das ist Googles Darstellung des Bezirks, kein Widerspruch.

---

## 4. Google-Unternehmensprofil

| Punkt | Stand |
|---|---|
| Bestätigt | ✓ |
| Adresse sichtbar | ✓ seit 30.09.2026 |
| Einzugsgebiet | ✓ Hamburg, Reinbek, Norderstedt, Pinneberg |
| Kategorien | Maler (primär), Bodenleger, Trockenbauunternehmen |
| Öffnungszeiten | ✓ Mo–Sa 8–18, deckungsgleich mit Website |
| Reichweite | 102 Profilaufrufe im letzten Monat, 33 Kundeninteraktionen |
| Echte Fotos | ✗ |
| Beiträge | ✗ |
| Bewertungen | 6 × 5,0 ★ — eine neue noch **unbeantwortet** |

## 5. Bewertungen

6 Rezensionen, 5,0 ★, nur eine mit Text (Ugur Ertütüncü). Unter der 10er-Schwelle, ab der Google
Bewertungen erkennbar stärker gewichtet. Keine Bewertungen auf anderen Plattformen; der Yelp-Eintrag
ist unbeansprucht. Laut [PROJEKT.md](PROJEKT.md) stammt ein Teil der Bewertungen aus dem
Bekanntenkreis — echte Kundenbewertungen mit Text sind der fehlende Baustein.

## 6. Onpage

Seit August deutlich besser: Ort in jedem Titel, H1 mit Leistung und Ort, Adresse sichtbar,
Altbau und Tapezieren als eigene Abschnitte, FAQ mit FAQPage-Schema, Preise inkl. MwSt.,
Stadtteilbezug Wandsbek/Bramfeld/Barmbek. Lighthouse mobil: 99 / 100 / 100 / 100.

Offen: Vier der fünf Leistungsseiten sind noch nicht indexiert. Indexierung am 30.09. beantragt.

---

## Top 10 Maßnahmen

### Kritisch
1. **Telefonnummer in den Verzeichnissen korrigieren.** Reihenfolge: branchen-info.net (E-Mail fertig
   in [VERZEICHNISSE.md](VERZEICHNISSE.md), nur die Nummer fehlt noch) → Cylex (Firmania folgt) →
   Yelp beanspruchen → Öffnungszeitenbuch, maler-finden, Stadtbranchenbuch, Infobel.
2. **Bei Das Örtliche, Gelbe Seiten und 11880 eintragen** — alle kostenlos, alle mit Website-Link.
3. **Bing Places anlegen** (Daten lassen sich aus Google übernehmen) und die Seite in den
   Bing Webmaster Tools anmelden. Grundlage für die ChatGPT-Sichtbarkeit.

### Hoch
4. **Neue Bewertung beantworten** und den Bewertungslink nach jedem Auftrag verschicken — auch an den
   Kunden vom 30.09., der über ChatGPT kam.
5. **Echte Fotos ins Profil** — Vorher/Nachher, Firmenwagen, Mehmet Sert.
6. **Handwerkskammer-Eintrag und Berufshaftpflicht im Impressum** — Pflichtangabe nach § 5 DDG und
   stärkstes lokales Autoritätssignal.

### Mittel
7. **Apple Business Connect** beanspruchen.
8. **Facebook-Unternehmensseite** mit identischen Daten — dient vor allem als weitere konsistente Quelle.
9. **`hasCredential`** ins Schema, sobald der Meisterbrief belegt ist.

### Niedrig
10. **Monatlich ein Profil-Beitrag** im Google-Unternehmensprofil.

---

## Was diese Analyse nicht leisten konnte

- **Geo-Grid-Rankings** (Position im Local Pack je nach Standort) — braucht Local Falcon oder BrightLocal
- **Bing-Index und Bing Places** — Bing verlangte eine Bot-Prüfung, die hier nicht gelöst wird
- **Apple Business Connect** — von außen nicht einsehbar
- **Vollständige Verzeichnisliste** — geprüft wurden alle bekannten Einträge und die großen deutschen
  Verzeichnisse; kleinere Portale ohne Google-Indexierung können fehlen
- **Domain-Autorität, Backlinks** — braucht Ahrefs oder Majestic
- **Cylex, Firmania, Yelp** lieferten bei direktem Abruf HTTP 403; ihre Daten stammen aus Googles
  Suchergebnis-Ausschnitten
