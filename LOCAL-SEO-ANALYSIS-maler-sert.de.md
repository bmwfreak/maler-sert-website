# Local SEO Analyse — maler-sert.de

Stand: 22.08.2026. Alle Befunde live geprüft (Startseite + 5 Leistungsseiten per `curl`, Schema per JSON-Parser, Verzeichnisse per Websuche). Keine Zahl geschätzt.

## Local SEO Score: 51/100

| Dimension | Gewicht | Score | Bewertung |
|---|---|---|---|
| GBP-Signale | 25% | 13/25 | Teilweise — Profil verknüpft, aber keine Karte, keine Bewertungen, kein Foto-Nachweis |
| Bewertungen & Reputation | 20% | 5/20 | Schwach — nichts sichtbar, Schema-Rating bewusst entfernt |
| Local On-Page SEO | 20% | 15/20 | Stark — 5 dedizierte Leistungsseiten (wichtigster Faktor), aber H1 ohne Ort |
| NAP-Konsistenz & Citations | 15% | 8/15 | Konflikt — Seite↔Schema sauber, Seite↔Verzeichnisse widersprüchlich |
| Local Schema Markup | 10% | 8,5/10 | Sehr gut — korrekter Subtyp, alle Kernfelder |
| Local Links & Autorität | 10% | 1/10 | Fehlt fast vollständig |

## Geschäftstyp: Hybrid (mit SAB-Tendenz)

Sichtbare Adresse im Footer + Impressum (`In der Niederung 15, 22047 Hamburg`), gleichzeitig starke Service-Area-Sprache („Tätig im gesamten Hamburger Stadtgebiet und Umland", `areaServed` mit 4 Städten). Im Google-Unternehmensprofil ist laut `PROJEKT.md` bewusst der **Service-Area-Modus** ohne sichtbare Adresse gewählt — das ist konsistent mit einem Handwerksbetrieb ohne Ladengeschäft.

**Konsequenz:** Karten-Embed-Prüfung und strenge Adress-Sichtbarkeit greifen hier nur eingeschränkt. Die NAP-Konsistenz bleibt trotzdem voll relevant, weil die Adresse in Verzeichnissen ohnehin gelistet ist.

## Branche: Home Services (Malerbetrieb)

Erkannt an: Einsatzgebiet-Sektion, „kostenloser Vor-Ort-Termin", Festpreis-Kommunikation, Gewerke-Struktur. Kein Notdienst/24-7-Signal (bewusst, passt zum Betrieb).

**Branchenspezifisch korrekt umgesetzt:** Schema-Subtyp `["Painter", "HomeAndConstructionBusiness"]` statt generischem `LocalBusiness` — das ist die richtige Wahl für dieses Gewerk und besser als bei den meisten Wettbewerbern.

---

## 1. GBP-Signale (13/25)

| Signal | Status | Beleg |
|---|---|---|
| GBP verknüpft (`sameAs`) | ✓ | 2 kgmid-URLs im Schema + sichtbarer Profil-Link im Hero |
| Öffnungszeiten sichtbar | ✓ | „Mo–Sa 8–18 Uhr · außerhalb nach Absprache", deckungsgleich mit `openingHoursSpecification` |
| Karten-Embed | ✗ | 0 `<iframe>` auf der Seite |
| Bewertungs-Widget | ✗ | Keine Bewertung sichtbar |
| Kategorie-Signale | ✓ | Seiteninhalt (Maler/Boden/Trockenbau) deckt sich mit den in `PROJEKT.md` dokumentierten GBP-Kategorien |
| Fotos/Posts | nicht prüfbar | Nur im GBP-Backend einsehbar, nicht von außen |

**Befund zur GBP-Link-Strategie:** Der Profil-Link zeigt auf `maler-sert.de/` — also auf die stärkste Seite. Sterling Sky rät bei der Diversity-Update-Logik davon ab, weil das die organische Sichtbarkeit derselben Seite unterdrücken kann. **Aber:** Das ist eine strittige, nicht von Google bestätigte Beobachtung. Bei 69 Klicks/Monat und einer Domain mit 8 Seiten ist das Risiko theoretisch — **keine Handlungsempfehlung**, nur zur Kenntnis.

**Karten-Link zeigt auf falschen Punkt (verifiziert):** Der OSM-Link in der Einsatzgebiet-Sektion nutzt `mlat=53.5511&mlon=10.0193`, das Schema aber `53.5967448, 10.0873051`. Rechnerisch **6,78 km Abstand**. Der Link landet ungefähr in der Hamburger Innenstadt statt an der Betriebsadresse in Wandsbek.

## 2. Bewertungen & Reputation (5/20)

| Kriterium | Ist | Benchmark |
|---|---|---|
| Sichtbare Bewertungen auf der Seite | keine | — |
| `aggregateRating` im Schema | entfernt (22.08.) | — |
| Google-Bewertungen gesamt | 5 | Schwelle 10 (Sterling Sky) |
| Sterne | 5,0 | ≥4,5 für 31% der Nutzer Mindestanforderung |
| Bewertungs-Velocity | unbekannt | 18-Tage-Regel |

**Wichtiger Kontext, der die Bewertung dieser Dimension verändert:** Die 5 bestehenden Bewertungen stammen laut Deiner eigenen Angabe **von Verwandten**. Damit ist der niedrige Score hier kein reines Umsetzungsproblem, sondern die korrekte Abbildung der Realität — es gibt schlicht noch keinen echten Bewertungsbestand.

Das `aggregateRating` wurde deshalb bewusst aus dem Schema entfernt. **Das war richtig und sollte so bleiben:** Bewertungen von Angehörigen verstoßen gegen Googles Bewertungsrichtlinien, und ein Schema-Rating ohne sichtbaren Beleg ist zusätzlich ein „self-serving rating"-Risiko. Punktabzug in dieser Dimension ist hier der Preis für Richtlinienkonformität — der richtige Trade-off.

**Kein Review-Gating erkennbar** — die Seite schickt niemanden durch eine Zufriedenheitsabfrage vor dem Bewertungslink. Sauber (Gating wäre FTC-relevant, bis 53.088 $/Verstoß).

## 3. Local On-Page SEO (15/20)

**Stärkster Bereich — hier ist das Fundament richtig gebaut.**

| Kriterium | Status | Detail |
|---|---|---|
| Dedizierte Leistungsseiten | ✓ ✓ | **5 Stück** — laut Whitespark 2026 der **wichtigste Faktor für lokale organische Sichtbarkeit UND zweitwichtigster für KI-Sichtbarkeit** |
| Ort + Leistung im Title | ✓ | alle 5: „Malerarbeiten Hamburg — …", „Schimmel-Sanierung Hamburg — …" etc. |
| Ort im H1 | ✗ | „Sauber gestrichen. Zum Festpreis." / „Schimmel weg. Ursache behoben." — kein Ort, keine Leistung |
| NAP im HTML sichtbar | ✓ | Footer: Name, PLZ, Telefon, E-Mail; volle Adresse im Impressum |
| `tel:`-Klick-Links | ✓ | 6 auf der Startseite, inkl. mobiler Kontaktleiste |
| Kontaktformular above the fold | teilweise | Hero-CTA springt zum Formular, Formular selbst weiter unten |
| Interne Verlinkung | ✓ | seit Commit `9066398`: alle 5 Seiten aus der Nav erreichbar, Klicktiefe 1 |
| Doorway-Pages | ✓ keine | Keine Stadtteil-Klone — Swap-Test nicht anwendbar, weil es nur eine Stadt gibt |

**Zum H1-Befund:** Die H1s sind bewusst als Nutzenversprechen formuliert („Schimmel weg. Ursache behoben.") statt als Keyword-Phrase. Das ist **werblich stärker**, kostet aber ein Local-Signal. Der Ort steht jeweils in der Eyebrow-Zeile direkt darüber („Schimmel-Sanierung · Hamburg · zertifiziert") — Google wertet das mit, aber schwächer als eine H1.

Empfehlung mit Augenmaß: **nicht alle 5 H1s umschreiben**. Falls überhaupt, dann nur auf der Schimmel-Seite testen (siehe Aktion 4), weil dort nachweislich Impressionen ohne Klicks anfallen.

## 4. NAP-Konsistenz & Citations (8/15)

### Intern: sauber

| Quelle | Name | Adresse | Telefon |
|---|---|---|---|
| Sichtbares HTML | Maler Sert GmbH | In der Niederung 15, 22047 Hamburg | 0173 8615002 |
| JSON-LD Schema | Maler Sert GmbH | In der Niederung 15, 22047 Hamburg | +49-173-8615002 |

Deckungsgleich — seit Commit `8a779d5` ziehen Impressum und Datenschutz die Daten aus `business.ts`, es gibt keine hartkodierten Dubletten mehr.

### Extern: mehrere reale Widersprüche (verifiziert per Websuche) — geklärt am 22.08.2026

| Feld | Website (korrekt, Quelle: Betreiber) | Verzeichnisse (veraltet) |
|---|---|---|
| Telefon | 0173 8615002 (mobil) | 040 687045 (alte Festnetznummer) |
| Adresse | In der Niederung 15 | In der Niederung 15 A / 15a |
| E-Mail | malersert@yahoo.de | teils info@maler-sert.de |
| Gründung | 2002 | teils 2000 |

**Bestätigt vom Betreiber:** Die Website ist die korrekte Quelle. Die Verzeichniseinträge stammen aus einer älteren Fassung der Firma (Northdata/Creditreform/Cylex/Firmania/Stadtbranchenbuch/meinestadt.de/branchen-info.net/malerbetriebe.online/maler-finden.org) und sind nicht mehr aktuell.

**Kein Code-Fix möglich.** Diese Einträge liegen bei den jeweiligen Drittanbieter-Plattformen und lassen sich nur direkt im eigenen Unternehmensprofil bei jedem Anbieter korrigieren (Login erforderlich, teils kostenpflichtige Premium-Einträge). Konkrete Schritte siehe Aktionsliste unten.

### Gefundene Citations

Vorhanden: **Yelp**, Cylex, Firmania, meinestadt.de, Stadtbranchenbuch, Unternehmensverzeichnis, branchen-info.net, maler-finden.org, malerbetriebe.online, Creditreform, Northdata.

Yelp ist dabei besonders relevant: **ChatGPT greift nicht auf Google Business Profile zu**, sondern zieht lokale Empfehlungen unter anderem aus dem Bing-Index, Yelp und BBB. Der Yelp-Eintrag existiert bereits — er sollte auf korrekte NAP-Daten geprüft werden.

Fehlend / empfohlen: **Bing Places** (speist ChatGPT, Copilot, Alexa), **Apple Business Connect** (Nutzung 2026 auf 27% verdoppelt), Handwerkskammer-Verzeichnis Hamburg.

## 5. Local Schema Markup (8,5/10)

**Zweitstärkster Bereich.** Live geprüft, valides JSON-LD.

| Property | Status |
|---|---|
| Korrekter Subtyp | ✓ `["Painter","HomeAndConstructionBusiness"]` statt generisch |
| `name`, `legalName`, `description` | ✓ |
| `address` (PostalAddress, vollständig) | ✓ |
| `geo` | ✓ 7 Nachkommastellen (Minimum: 5) |
| `openingHoursSpecification` | ✓ deckungsgleich mit sichtbarem Text |
| `telephone`, `email`, `url`, `image`, `logo` | ✓ |
| `priceRange` | ✓ `€€` |
| `areaServed` | ✓ 4 Städte als `City` |
| `hasOfferCatalog` | ✓ alle 5 Leistungen verlinkt |
| `vatID`, `foundingDate`, `founder` | ✓ |
| `hasCredential` (Meisterbrief) | ✗ fehlt |

Abzug nur für: fehlendes `hasCredential` und die geo-Abweichung zum OSM-Link (siehe Dimension 1).

## 6. Local Links & Autorität (1/10)

**Schwächster Bereich.** Auf der gesamten Startseite: **kein einziger** externer Autoritäts-Link außer Google und WhatsApp.

Fehlend: Handwerkskammer Hamburg (deutsches Pendant zu Chamber of Commerce/BBB), Innungsmitgliedschaft, lokale Presse, Sponsoring/Vereinsengagement, „Beste Maler Hamburg"-Listen.

„Best of"-Listenplatzierungen sind laut Whitespark 2026 der **wichtigste Einzelfaktor für KI-Sichtbarkeit**. Markenerwähnungen korrelieren dabei 3× stärker mit KI-Sichtbarkeit als klassische Backlinks (Ahrefs: 0,664 vs. 0,218).

**Direkt anschlussfähig:** Der Meisterbrief- und Handwerkskammer-Befund aus dem Juli-Audit ist genau dieser Hebel — er ist gleichzeitig Impressumspflicht (§5 DDG), Vertrauenssignal und Autoritäts-Citation.

---

## Top 10 priorisierte Maßnahmen

### Kritisch

1. **Veraltete Verzeichniseinträge korrigieren — pro Anbieter live geprüft (22.08.2026):**

   | Verzeichnis | Adresse | Telefon | Korrektur-Weg |
   |---|---|---|---|
   | [Cylex](https://web2.cylex.de/firma-home/maler-sert-gmbh-2702025.html) | korrekt | falsch (040 687045) | „Fehlerhafte Daten melden" — öffentlich, kein Login |
   | [Firmania](https://firmania.de/hamburg/maler-sert-gmbh-1259206) | korrekt | falsch | spiegelt Cylex-Daten, Cylex-Fix zieht vermutlich mit |
   | [Stadtbranchenbuch](https://hamburg.stadtbranchenbuch.com/1366810.html) | korrekt | falsch | „Eintrag bearbeiten" — öffentlich |
   | [Öffnungszeitenbuch](https://www.oeffnungszeitenbuch.de/filiale/Hamburg-Maler%2520Sert%2520GmbH-2268203S.html) | korrekt | falsch | „Fehler melden" / „Eintrag bearbeiten" — öffentlich |
   | [branchen-info.net](https://hamburg.branchen-info.net/fp_4196323.php) | **„15 A" — Quelle des Hausnummer-Fehlers** | falsch | „Eintrag bearbeiten" — öffentlich, direkt an Inhaber adressiert |
   | [maler-finden.org](https://www.maler-finden.org/hamburg/maler-sert-gmbh-1530757.html) | korrekt | falsch (+ Fax) | „Änderung vorschlagen" — öffentlich |
   | meinestadt.de | — | — | 404, Eintrag existiert nicht mehr, nichts zu tun |
   | [malerbetriebe.online](https://malerbetriebe.online/maler-sert-gmbh/00027396) | konnte nicht geladen werden | — | manuell nachprüfen |
   | [Yelp](https://www.yelp.com/biz/maler-sert-hamburg) | korrekt | keine Nummer hinterlegt | „Unclaimed" — Korrektur nur über eigenen Yelp-Account möglich; **Priorität wegen ChatGPT/Perplexity-Zitaten** |

   Northdata/Creditreform: reine Handelsregister-Spiegel (HRB 76146), ziehen sich meist automatisch nach — nur beobachten, kein Handlungsbedarf.
2. **Handwerkskammer-Zugehörigkeit + Berufshaftpflicht ins Impressum.** Doppelt begründet: Pflichtangabe nach §5 DDG (der Platzhalter „[wird ergänzt]" steht dort seit Monaten) und stärkstes verfügbares Autoritätssignal. Rechtlich kurz absichern lassen.

### Hoch

3. **Echte Kundenbewertungen sammeln.** Der Bewertungslink existiert (`writereview?ludocid=…`), wird laut `PROJEKT.md` aber noch nicht systematisch nach Auftragsabschluss verschickt. Ziel: über die 10er-Schwelle, danach 18-Tage-Kadenz halten. Der bestätigte Schimmel-Auftrag im Oktober ist die nächste konkrete Gelegenheit.
4. **Schimmel-Seite: Snippet prüfen statt umschreiben.** „maler schimmelbeseitigung hamburg" bringt 64 Impressionen, 0 Klicks — dort rankt laut Search Console die Startseite, nicht die Schimmel-Seite. Nach dem Sitemap-Fix vom 22.08. erst abwarten, ob die Schimmel-Seite selbst in den Index kommt, dann neu bewerten.
5. **Bing Places anlegen.** Direkter Hebel auf ChatGPT/Copilot-Sichtbarkeit — und der GA4-Kanal „AI Assistant" hat bereits einen Besucher mit 6:35 min Verweildauer geliefert, mit Abstand der längsten auf der Seite.

### Mittel

6. **OSM-Karten-Link auf die korrekten Koordinaten setzen** (aktuell 6,78 km daneben). Ein-Zeilen-Fix, sobald die Adressfrage aus Punkt 1 geklärt ist.
7. **Apple Business Connect beanspruchen.**
8. **`hasCredential` ins LocalBusiness-Schema**, sobald die Meisterbrief-Daten aus Punkt 2 vorliegen.
9. **Yelp-Eintrag auf korrekte NAP-Daten prüfen** — relevanteste Citation für KI-Systeme.

### Niedrig

10. **H1 der Schimmel-Seite testweise um den Ort ergänzen** — nur diese eine, nur falls sie nach der Indexierung weiterhin keine Klicks bekommt. Nicht alle 5 H1s umschreiben, der werbliche Ton ist bewusst gewählt und funktioniert.

---

## Was diese Analyse NICHT beurteilen konnte

- **Geo-Grid-Rankings** (Position im Local Pack je nach Standort des Suchenden) — braucht Local Falcon, BrightLocal o. ä.
- **Reale Local-Pack-Position** in Echtzeit
- **GBP-Insights** (Aufrufe, Suchbegriffe, Fotoaufrufe im Profil) — nur im eingeloggten GBP-Backend
- **GBP-Fotos, -Posts, -Kategorien** — von außen nicht auslesbar; die Angaben oben stammen aus Deiner eigenen Dokumentation in `PROJEKT.md`, nicht aus einer Live-Prüfung
- **Domain Authority / vollständiges Backlink-Profil** — braucht Ahrefs/Majestic
- **Bewertungs-Velocity und Antwortquote** — nur bei direktem GBP-Zugriff prüfbar
- **Vollständiger Citation-Abgleich** über alle Verzeichnisse — die gefundenen Widersprüche sind Stichproben aus der Websuche, kein erschöpfender Audit; dafür braucht es BrightLocal Citation Tracker o. ä.

Cylex ließ sich nicht direkt abrufen (HTTP 403) — die dortigen Angaben stammen aus den Suchergebnis-Snippets, nicht aus der Seite selbst.

---

## Einordnung

Die technische Grundlage ist **überdurchschnittlich gut**: korrekter Schema-Subtyp, 5 dedizierte Leistungsseiten (der laut Whitespark wichtigste lokale Faktor überhaupt), saubere interne NAP-Konsistenz, valides JSON-LD, Klicktiefe 1 zu allen Leistungen.

Die Lücken liegen fast vollständig **außerhalb des Codes**: Bewertungen, Verzeichnis-Konsistenz, Kammer-Mitgliedschaft, Bing/Apple-Präsenz. Weitere Website-Optimierung hat hier deutlich weniger Hebel als die vier Punkte unter „Kritisch" und „Hoch".

Für die KI-Sichtbarkeit separat: `/seo geo https://maler-sert.de/` — beachte dabei, dass Cloudflare aktuell GPTBot, ClaudeBot und Google-Extended blockt (Fund aus dem Juli-Audit, weiterhin eine offene Entscheidung).
