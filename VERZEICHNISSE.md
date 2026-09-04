# Verzeichnis-Korrekturen — Umsetzungspaket

Stand: 04.09.2026. Grundlage: [LOCAL-SEO-ANALYSIS](LOCAL-SEO-ANALYSIS-maler-sert.de.md) Abschnitt 4,
Live-Nachprüfung von branchen-info.net und Stadtbranchenbuch am 04.09.2026.

**Warum das jetzt Priorität hat:** Laut Search Console landen 58 von 59 Klicks auf der Startseite,
vier der fünf Service-Seiten haben in drei Monaten null Klicks ([LEADS.md](LEADS.md)). Google
indexiert sie nicht, weil der Domain externe Signale fehlen. Verzeichniseinträge sind das
kostenlose Gegenmittel — und die bestehenden enthalten aktuell **falsche Daten**, die aktiv schaden.

---

## 1. Der kanonische Datensatz

Diese Werte gelten überall, zeichengenau. Quelle: `src/data/business.ts`. Jede Abweichung — auch
ein „15a" statt „15" oder eine zweite Telefonnummer — schwächt die NAP-Konsistenz.

| Feld | Wert |
|---|---|
| Firmenname | `Maler Sert GmbH` |
| Straße | `In der Niederung 15` |
| PLZ / Ort | `22047 Hamburg` |
| Stadtteil | Marienthal (Bezirk Wandsbek) |
| Telefon | `0173 8615002` |
| E-Mail | `malersert@yahoo.de` |
| Website | `https://maler-sert.de` |
| Öffnungszeiten | Mo–Sa 08:00–18:00, So geschlossen |
| Gegründet | 2002 |
| USt-IdNr. | `DE462262729` |
| Inhaber | Mehmet Sert |
| Einsatzgebiet | Hamburg, Norderstedt, Pinneberg, Reinbek |

**Keine Festnetznummer eintragen.** `040 687045` ist tot und die Hauptfehlerquelle in allen
Verzeichnissen. Ebenso wenig `info@maler-sert.de` — diese Adresse existiert nicht (kein MX-Record,
geprüft 04.09.2026).

### Fertige Beschreibungstexte

**Kurz (bis 160 Zeichen):**

    Malerbetrieb in Hamburg seit 2002: Streichen, Tapezieren, Fassaden, Bodenbelag,
    Trockenbau und Schimmelbeseitigung. Festpreis nach kostenloser Besichtigung.

**Mittel (bis 300 Zeichen):**

    Maler Sert GmbH ist ein Familienbetrieb in Hamburg-Marienthal, gegründet 2002.
    Wir übernehmen Innen- und Außenanstriche, Tapezierarbeiten, Fassaden, Bodenbelag,
    Trockenbau und Schimmelbeseitigung — für private Kunden, Hausverwaltungen und
    Gewerbe. Inhaber Mehmet Sert besichtigt persönlich, das Angebot kommt schriftlich
    zum Festpreis.

**Lang (Profiltext):**

    Die Maler Sert GmbH ist seit 2002 als Familienbetrieb in Hamburg tätig. Der Sitz
    ist in Marienthal im Bezirk Wandsbek; gearbeitet wird im gesamten Hamburger
    Stadtgebiet sowie in Norderstedt, Pinneberg und Reinbek.

    Leistungen:
    - Malerarbeiten innen und außen: Wände, Decken, Türen, Holzanstriche und Lasuren
    - Tapezierarbeiten: Vlies, Raufaser, Designtapeten, Fototapete
    - Fassadenanstrich und Fassadensanierung
    - Bodenbelag: Vinyl, Laminat, Designboden, Parkett schleifen, Fliesen
    - Trockenbau, Putz- und Spachtelarbeiten
    - Schimmelbeseitigung mit Ursachenanalyse und Sanierputz (zertifiziert)

    Auftraggeber sind private Eigentümer und Mieter, Hausverwaltungen, WEGs und
    Gewerbekunden. Typische Aufträge sind Wohnungsrenovierungen, Treppenhäuser,
    Mieterwechsel und Büroflächen — auf Wunsch außerhalb der regulären Geschäftszeiten.

    Ablauf: kostenlose Besichtigung durch den Inhaber, schriftliches Festpreisangebot,
    fester Termin. Kein Stundensatz.

    Kontakt: Mehmet Sert, 0173 8615002, https://maler-sert.de

**Kategorien** (wo wählbar, in dieser Reihenfolge): Maler / Malerbetrieb · Bodenleger ·
Trockenbauunternehmen. Deckungsgleich mit dem Google-Unternehmensprofil.

---

## 2. Was pro Verzeichnis zu tun ist

Alle Einträge am 22.08. bzw. 04.09.2026 geprüft. **Kein einziger Anbieter erlaubt die Korrektur
anonym** — es braucht überall entweder ein Konto oder eine E-Mail vom Betrieb.

### Falsche Daten korrigieren (Bestandseinträge)

| Verzeichnis | Was ist falsch | Weg | Konto nötig |
|---|---|---|---|
| [branchen-info.net](https://hamburg.branchen-info.net/fp_4196323.php) | Adresse **„15 A"** + Telefon 040 687045 + keine Website | E-Mail (Vorlage unten) oder Login | E-Mail reicht |
| [Stadtbranchenbuch](https://hamburg.stadtbranchenbuch.com/1366810.html) | Telefon 040 687045 (Adresse korrekt) | Eintrag bearbeiten | ja |
| [Cylex](https://web2.cylex.de/firma-home/maler-sert-gmbh-2702025.html) | Telefon 040 687045 | Fehlerhafte Daten melden | nein, aber Formular |
| [Firmania](https://firmania.de/hamburg/maler-sert-gmbh-1259206) | spiegelt Cylex | zieht nach Cylex-Fix meist automatisch nach | — |
| [Öffnungszeitenbuch](https://www.oeffnungszeitenbuch.de/filiale/Hamburg-Maler%2520Sert%2520GmbH-2268203S.html) | Telefon | Fehler melden | nein, aber Formular |
| [maler-finden.org](https://www.maler-finden.org/hamburg/maler-sert-gmbh-1530757.html) | Telefon + Fax-Eintrag | Änderung vorschlagen | nein, aber Formular |
| [Yelp](https://www.yelp.com/biz/maler-sert-hamburg) | Eintrag unclaimed, kein Telefon | Profil beanspruchen | **ja** |

`branchen-info.net` ist der wichtigste Fix: Dort steht die falsche Hausnummer, die laut
Local-SEO-Analyse als Quelle des „15 A"-Fehlers in andere Verzeichnisse gewandert ist.

Northdata und Creditreform spiegeln nur das Handelsregister (HRB 76146) und ziehen automatisch
nach — nichts zu tun.

### Neu anlegen (fehlend)

| Portal | Warum | Konto |
|---|---|---|
| **Bing Places** | Speist ChatGPT, Copilot und Alexa. ChatGPT greift **nicht** auf Google Business Profile zu. | Microsoft-Konto |
| **Apple Business Connect** | Apple Karten, Nutzung 2026 verdoppelt | Apple-ID |
| **Handwerkskammer Hamburg** | Stärkstes verfügbares Autoritätssignal, zugleich Impressumspflicht | Mitgliedsdaten |
| Das Örtliche / 11880 | Klassische lokale Citations | ja |

---

## 3. Fertige Korrektur-E-Mail

Für branchen-info.net ist dieser Weg vom Anbieter selbst vorgesehen. **Betreff exakt so lassen** —
die Firmen-ID darin ist die Zuordnung.

**An:** `info@branchen-info.net`

**Betreff:** `Anmerkungen zum Eintrag mit der ID:4196323 [Betreff bitte nicht veraendern!]`

    Sehr geehrte Damen und Herren,

    der Eintrag zur Maler Sert GmbH (ID 4196323) enthält veraltete Daten.
    Wir bitten um Korrektur auf die folgenden, aktuell gültigen Angaben:

    Firmenname:     Maler Sert GmbH
    Straße:         In der Niederung 15
                    (bisher falsch: "In der Niederung 15 A")
    PLZ/Ort:        22047 Hamburg
    Telefon:        0173 8615002
                    (bisher falsch: 040 687045 - Anschluss existiert nicht mehr)
    E-Mail:         malersert@yahoo.de
    Website:        https://maler-sert.de
                    (bisher nicht hinterlegt)
    Öffnungszeiten: Montag bis Samstag, 08:00-18:00 Uhr
    Branche:        Maler, Bodenleger, Trockenbau

    Kurzbeschreibung:
    Malerbetrieb in Hamburg seit 2002: Streichen, Tapezieren, Fassaden, Bodenbelag,
    Trockenbau und Schimmelbeseitigung. Festpreis nach kostenloser Besichtigung.

    Die angegebene Festnetznummer ist seit Längerem nicht mehr vergeben. Wir erhalten
    darüber keine Anfragen, weshalb uns an einer zeitnahen Korrektur gelegen ist.

    Mit freundlichen Grüßen

    Mehmet Sert
    Maler Sert GmbH
    In der Niederung 15, 22047 Hamburg
    0173 8615002

Für die übrigen Anbieter lässt sich derselbe Block verwenden, angepasst an die jeweils falschen
Felder. Bei Stadtbranchenbuch, Cylex, Öffnungszeitenbuch und maler-finden.org ist nur das Telefon
falsch, die Adresse stimmt dort.

---

## 4. Reihenfolge

1. **branchen-info.net** — E-Mail senden. Einziger Eintrag mit falscher Adresse, Quelle des Fehlers.
2. **Cylex** — Formular. Firmania spiegelt Cylex und zieht danach meist automatisch nach.
3. **Bing Places** — neu anlegen. Größter Hebel auf KI-Sichtbarkeit, weil ChatGPT das GBP nicht liest.
4. **Yelp** — Profil beanspruchen. Zweitwichtigste Quelle für KI-Systeme.
5. Stadtbranchenbuch, Öffnungszeitenbuch, maler-finden.org — Telefon korrigieren.
6. Apple Business Connect, Handwerkskammer.

Nach jeder Korrektur Datum und Anbieter unten vermerken, damit nachvollziehbar bleibt, was läuft.
Verzeichnisse übernehmen Änderungen typischerweise in ein bis vier Wochen.

## 5. Abhaken

- [ ] branchen-info.net (Adresse **und** Telefon)
- [ ] Cylex (Telefon)
- [ ] Firmania (nach Cylex prüfen)
- [ ] Stadtbranchenbuch (Telefon)
- [ ] Öffnungszeitenbuch (Telefon)
- [ ] maler-finden.org (Telefon + Fax)
- [ ] Yelp beanspruchen
- [ ] Bing Places anlegen
- [ ] Apple Business Connect
- [ ] Handwerkskammer Hamburg
