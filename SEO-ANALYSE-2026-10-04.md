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

Nebenbefund Search Console: Startseite zuletzt −71 % Impressionen (Google-Empfehlung) — Mitte Oktober prüfen, ob durch neue H1/Seite verursacht oder Saisoneffekt.
Offen: Indexierung `/tapezieren-hamburg` in der Search Console beantragen (Chrome hing).
