# SEO-Analyse maler-sert.de — 04.10.2026

Frage: Haben wir von unserer Seite das Meiste rausgeholt?
Grundlage: Live-Abruf aller 6 Seiten, Search Console (28 Tage), Google-Profil, Google-Index (`site:`),
Telefonnummern-Suche. Vorversion: [LOCAL-SEO-ANALYSIS-maler-sert.de.md](LOCAL-SEO-ANALYSIS-maler-sert.de.md) (01.10., 54/100).

## Ergebnis: ca. 58/100 — Website ausgereizt, Engpass ist das Google-Profil

| Bereich | Gewicht | 01.10. | 04.10. | Kurz |
|---|---:|---:|---:|---|
| Google-Profil | 25 | 16 | 16 | Keine Fotos, keine Beiträge, Antworten auf Bewertungen fehlen |
| Bewertungen | 20 | 6 | 6 | 6 × 5,0, alle ca. 4 Monate alt — seit Juni keine neue |
| Onpage | 20 | 17 | 17 | Sehr gut; H1 ohne Suchbegriff, kaum echte Fotos |
| NAP & Verzeichnisse | 15 | 5 | **8** | Alles eingereicht/korrigiert, Google hat es noch nicht neu gelesen |
| Strukturierte Daten | 10 | 8,5 | 8,5 | Vollständig |
| Autorität/Links | 10 | 1 | 1 | Nur Verzeichnisse, keine lokalen Erwähnungen |
| (Technik/Index) | — | — | ✓ | **Alle 6 Seiten jetzt im Google-Index** (vorher 2) |

## Was passt

- **Technik:** https, Weiterleitungen, echte 404, robots.txt, Sitemap, Canonicals, llms.txt — alles korrekt.
  Lighthouse mobil 99/100/100/100 (01.10.).
- **Index:** `site:maler-sert.de` zeigt alle 6 Seiten. Der Indexierungsantrag vom 30.09. hat gewirkt.
  Der Search-Console-Bericht („2 indexiert, 4 gefunden – nicht indexiert") hängt hinterher.
- **Titel und Beschreibungen:** alle mit Leistung + Hamburg, 54–59 bzw. 142–158 Zeichen, Telefonnummer drin.
- **Schema:** Painter + HomeAndConstructionBusiness mit Adresse, Geo, Öffnungszeiten, Einzugsgebiet,
  Leistungskatalog; Service + Breadcrumb + FAQ auf jeder Leistungsseite.
- **Inhalt:** Startseite 1.300 Wörter, Leistungsseiten 540–640, je 5 Zwischenüberschriften und FAQ.
  Preise, Ablauf, Inhaber mit Foto, WhatsApp und Formular.
- **KI-Sichtbarkeit:** llms.txt, Bing Webmaster + Places — erster Lead kam am 30.09. über ChatGPT.
- **Search Console (02.–29.09.):** 285 Impressionen, 15 Klicks, CTR 5,3 %, Ø Position 10.
  Top: „maler bramfeld" (23 Impr.), „tapezierarbeiten hamburg" (23 Impr., 0 Klicks), „maler schimmelbeseitigung hamburg" (10).

## Was nicht passt

### Bei uns machbar
1. **Bewertungen im Profil unbeantwortet** — alle 6. Antworten ist ein Rankingsignal und geht sofort (wir sind Verwalter).
2. **Impressum zeigt live „Versicherer: [wird ergänzt]"** — wirkt unfertig. Bis die Daten da sind: Block
   ausblenden. Handwerkskammer Hamburg als zuständige Kammer fehlt (Maler ist zulassungspflichtiges Handwerk).
3. **H1 der Leistungsseiten sind Slogans** („Neuer Boden. Auf den Punkt verlegt.") — Suchbegriff + Ort
   steht nur in der kleinen Zeile darüber (`<p class="eyebrow">`). Lösung: H1 z. B. „Bodenbelag in Hamburg —
   auf den Punkt verlegt".
4. **Keine eigene Tapezier-Seite**, obwohl „tapezierarbeiten hamburg" die meisten Impressionen ohne Klick hat.
   Eigene Seite `/tapezieren-hamburg` (Tapetenarten, Ablauf, Preis pro m², FAQ) — Inhalt ist auf der Startseite schon da.
5. **Google-Profil ohne Beiträge, ohne Chat-Option, ohne Social-Links** — Beiträge und WhatsApp-Chat können wir
   ohne Mehmet einrichten.
6. Kleinkram: `http://www` → 2 Weiterleitungen statt 1 (Cloudflare-Regel), Sitemap ohne `lastmod`.

### Liegt bei Mehmet
7. **Bewertungen** — seit 4 Monaten keine neue. Ziel 10–15, danach mind. 1 pro 2–3 Wochen. Wichtigster Hebel überhaupt.
8. **Echte Fotos** — Profil hat null; Website nutzt außer Hero und Porträt allgemeine Bilder
   (Farbrolle, Boden, Spachtel). Konkurrenz vorne hat 38–47 Bewertungen **mit** Fotos.
9. **Impressum-Daten:** Berufshaftpflicht (Versicherer, Anschrift, Geltungsbereich), Handwerkskammer-Eintrag,
   Meisterbrief-Nachweis (DATA.md sagt ja, Verzeichnisse sagen „nicht belegt" — klären).
10. **OK für Kundenstimme (Ugur) auf der Website.**

### Wartet auf Google
- Verzeichnis-Korrekturen: Google findet die 0173-Nummer bisher nur auf maler-sert.de und anruferauskunft.de;
  Örtliche, Gelbe Seiten, 11880, Cylex usw. sind eingereicht, aber noch nicht neu gecrawlt. Prüfen Mitte Oktober.

## Fazit

Website und Technik sind ausgereizt — weiter dran zu schrauben bringt wenig. Von unserer Seite fehlen noch
die Punkte 1–6 (alle klein, 1–2 h). Der Abstand zur Konkurrenz (Platz 4 Bramfeld, 17 Barmbek, sonst nicht
sichtbar) entsteht durch **Bewertungen und Fotos** — das kann nur Mehmet liefern.

## Nicht geprüft
Backlinks/Domain-Autorität (kein Ahrefs-Zugang), Geo-Grid neu (nächste Messung Mitte Oktober),
Apple Business Connect, Infobel.

## Umsetzung 04.10. (live geprüft)

1. ✓ Alle 6 Google-Bewertungen beantwortet (kurzes Danke, „Ihr Team von Maler Sert"). Ältere zwei nur über business.google.com/reviews erreichbar, nicht über das Such-Overlay.
2. ✓ Impressum: Platzhalter „[wird ergänzt]" entfernt (Block ausgeblendet bis Mehmet Versicherer liefert), Handwerkskammer Hamburg + HwO ergänzt. **Mehmet bestätigen lassen: Eintrag in der Handwerksrolle.**
3. ✓ H1 aller Leistungsseiten jetzt „<Leistung> in Hamburg — <Slogan>".
4. ✓ Neue Seite `/tapezieren-hamburg` (Inhalt nur aus belegten Fakten, keine neuen Preise), in Nav/Footer/Schema/llms.txt, verlinkt von Startseite und Malerarbeiten.
5. ✓ Google-Beitrag „Tapezierarbeiten" mit Button zur neuen Seite. Erster Versuch wurde abgelehnt — Telefonnummer im Beitragstext ist nicht erlaubt.
   ✓ WhatsApp-Chat im Profil (wa.me/491738615002), Prüfung durch Google läuft.
6. ✓ Sitemap mit `lastmod`. ✗ `http://www` → 2 Weiterleitungen bleibt: Pages-Edge leitet vor der Function auf https um, API-Token hat keine Zonenrechte für eine Redirect-Regel. Nutzen minimal.

Nebenbefund Search Console: Startseite zuletzt −71 % Impressionen (Google-Empfehlung, Daten bis Ende September, also vor den heutigen Änderungen) — Mitte Oktober prüfen; vermutlich wandern Suchanfragen von der Startseite zu den jetzt indexierten Leistungsseiten.
✓ Indexierung `/tapezieren-hamburg` in der Search Console beantragt, Sitemap neu eingereicht.
✓ IndexNow (Bing, Yandex u. a.): Schlüssel `public/e4502720aa0ff93f49420bddb119a26c.txt`, alle 7 URLs gemeldet (HTTP 202). Bei neuen/geänderten Seiten erneut per POST an api.indexnow.org melden.

## 09.10.2026 — Altbau-Seite
- ✓ Neue Seite `/altbausanierung-hamburg` (Leimfarbe, Risse, Stuck, Holzfenster, Dielen; nur Aussagen, die schon auf der Website standen; keine neuen Preise). In Menü, Footer, Schema, llms.txt, verlinkt von Startseite und Tapezieren-Seite.
- ✓ Google: Indexierung beantragt. Bing: IndexNow gemeldet (HTTP 200).
- Anlass: Gelbe-Seiten-KI-Check 09.10. — 3 von 30 Testfragen drehen sich um Altbau, Sert wurde dort nie genannt.
- Gelbe-Seiten-Telefonkorrektur bestätigt, live nach bis zu 3 Werktagen.
- Nächste Messung: Mitte Oktober (Ranking, Verzeichnisse, KI-Check wiederholen).

## Search Console 15.10.2026 (28 Tage vs. 28 Tage davor, Daten bis 13.10.)
| | 19.08.–15.09. | 16.09.–13.10. |
|---|---:|---:|
| Einblendungen | 300 | **499 (+66 %)** |
| Klicks | 14 | 15 |
| Suchanfragen mit Einblendung | 22 | **57 (2,6×)** |
| Ø Position | 12,2 | 18 (mehr Long-Tail auf Seite 2) |
- Neue Seite /tapezieren-hamburg: 20 Einblendungen (7.–13.10.), Ø Position 48,9 → noch weit hinten.
- Stärkste neue Begriffe: außenanstrich 46, spachtelarbeiten hamburg 13, fassadenanstrich hamburg 8, tapezierer hamburg 7.
- ALBERK (Search Console erst seit 30.09.): 1. Woche 83 Einblendungen / 4 Klicks, 2. Woche 165 / 5 (≈ ×2). Ø Position 18,3, 22 Suchanfragen.

## 15.10.2026 — Keyword-Schärfung (nach Search-Console-Auswertung)
Auslöser: Begriffe mit vielen Einblendungen, aber Position >20 (Tapezieren ~145, Schimmel ~60, Außenanstrich ~58, Stadtteile ~75, Spachteln ~14).
- Schimmel: Titel „Schimmelbeseitigung & Schimmelsanierung Hamburg", Synonyme (Schimmelpilz, -bekämpfung) im Intro, neue FAQ zu den Begriffen.
- Fassade: H1 „Fassadenanstrich & Außenanstrich in Hamburg", Lead mit „Außenanstrich", neue FAQ „Außenanstrich am Haus – Kosten/Angebot".
- Trockenbau: Titel/H1 „Trockenbau & Spachtelarbeiten", neue FAQ Spachtel-/Putzarbeiten.
- Tapezieren: Titel „Tapezierer & Tapezierarbeiten", neue FAQ „Tapezierer in Hamburg".
- Startseite Einsatzgebiet: Stadtteile Farmsen-Berne, Rahlstedt, Jenfeld, Tonndorf, Ohlsdorf ergänzt (nur Hamburg; Umland wie Barsbüttel/Glinde/Ahrensburg erst nach Bestätigung durch Mehmet).
- Ahrefs-Gratis-Generator: Suchvolumen nur Stufen (<100 / >100). „maler hamburg", „dielen schleifen hamburg", „schimmelbeseitigung hamburg" >100 und schwer; „tapezieren hamburg", „außenanstrich" <100 und leicht.
- Messen: 29.10. und 12.11. Einblendungen/Position je Seite vergleichen.

## 15.10.2026 — Umland bestätigt (Mehmet)
- Barsbüttel, Glinde, Oststeinbek, Ahrensburg: Startseite (Text, Pills, FAQ), JSON-LD areaServed, llms.txt, Google-Profil-Einzugsgebiet (Prüfung läuft, bis 10 Min).
- Noch offen: Gelbe Seiten, 11880, Das Örtliche, Bing Places nennen weiter nur Hamburg/Norderstedt/Pinneberg/Reinbek — bei nächster Gelegenheit nachziehen.

## 15.10.2026 — Bing Places Status
- Maler Sert, ALBERK (und Systemic Automation): mit Google synchronisiert (letzter Sync vor 6 Tagen), Überprüfung abgeschlossen, Status „Ausstehende Veröffentlichung", ETA laut Bing 7–12 Tage → ca. 22.–27.10.
- ALBERK: Adresse im Bing-Eintrag leer (Google-Profil ist als „kein Geschäftsstandort" geführt). Nach Veröffentlichung prüfen, ob die Adresse erscheint; sonst im Google-Profil Standort-Einstellung angleichen und neu synchronisieren.
- Kein Handlungsbedarf bis zur Veröffentlichung; Werbeguthaben/Microsoft-Advertising-Angebote ignorieren.

## 22.10.2026 — Search Console 3 Monate (21.07.–20.10.)
- 1.184 Einblendungen, 47 Klicks, Ø Position ~17. Einblendungen/Woche: Sept 62–101, 05.10. 191, 12.10. 171. Klicks/Woche 0–8 (kein Trend). Position sinkt, weil mehr (schwächere) Begriffe ausgespielt werden.
- Gut: Marke (Pos. 1,3 / 2,7), Stadtteile Tonndorf 3, Jenfeld 3,4, Rahlstedt 2,7, Barsbüttel 9,9.
- Potenzial: tapezierarbeiten hamburg (78 Einbl., Pos. 21; Tapezier-Seite Pos. 41), außenanstrich (55, Pos. 51), schimmelbeseitigung (43, Pos. 22), /malerarbeiten-hamburg (225 Einbl., Pos. 14,5, 2 Klicks).
- ✓ Umgesetzt: Titel /malerarbeiten-hamburg "Maler Hamburg » Malerarbeiten ✓ Festpreis & Besichtigung gratis"; interne Links mit Anker "Fassaden- und Außenanstrich" (Startseite + Malerarbeiten-Seite).
- Messung: 29.10., 12.11.
