# Was wir uns von SUMAX abgucken können

Stand: 04.09.2026. Analysiert: [sumax.de](https://www.sumax.de/) (52 Seiten, 30 Stadtseiten,
62 Lexikon-Einträge) und [@sumax.de auf Instagram](https://www.instagram.com/sumax.de/).

SUMAX ist eine Online-Marketing-Agentur aus Dortmund, die sich hauptberuflich mit nichts anderem
beschäftigt. Was dort gemacht wird, ist deshalb ein brauchbarer Maßstab — aber nicht alles davon
passt auf einen Malerbetrieb mit drei Leuten. Unten steht beides: was übertragbar ist und was nicht.

---

## 1. Der stärkste Punkt: KI-Crawler zulassen

Hier stehen wir **exakt gegenteilig** zu einer Agentur, die GEO als eigene Leistung verkauft.

| Crawler | sumax.de | maler-sert.de |
|---|---:|---:|
| Googlebot | 200 | 200 |
| GPTBot (ChatGPT) | 200 | **403** |
| ClaudeBot | 200 | **403** |
| PerplexityBot | 200 | **403** |

SUMAX schreibt dazu selbst auf Instagram (Okt. 2025):

> „Viele Menschen suchen mittlerweile ihre Lösungen bei der KI. Sie fragen ChatGPT oder andere
> KI-Systeme und bekommen sofort die besten Anbieter angezeigt. Wer da nicht auftaucht, verliert
> Sichtbarkeit, Leads und Umsatz."

Bei uns blockt Cloudflare diese Crawler mit HTTP 403 — **PerplexityBot sogar, obwohl er in der
robots.txt gar nicht steht**. Die Regel sitzt im Bot-Management von Cloudflare, nicht in der
robots.txt (siehe [AUDIT_GESAMT](AUDIT_GESAMT_2026-07-26.md), Nachtrag 04.09.).

**Übertragbar: ja, sofort und kostenlos.** Eine Einstellung im Cloudflare-Dashboard. Für einen
lokalen Handwerker ist „Maler in Hamburg empfehlen" eine realistische ChatGPT-Anfrage — und
aktuell können wir dort schlicht nicht vorkommen.

Zu entscheiden ist nur, ob der Inhalt bewusst vor KI-Training geschützt bleiben soll. Beides geht
getrennt: Zugriff für Antworten erlauben, Training per `Content-Signal: ai-train=no` weiter
untersagen — was in unserer robots.txt ohnehin schon steht.

---

## 2. Stadtseiten — SUMAX beweist, dass es funktioniert, aber wie

Ich bin mit dem Verdacht rangegangen, dass 30 Stadtseiten Thin Content sind. Das Gegenteil ist der Fall:

| Stadtseite | Hamburg | Berlin | München | Kiel |
|---|---:|---:|---:|---:|
| Textlänge (Zeichen) | 16.807 | 19.273 | 17.335 | 15.596 |

Die Textüberlappung dieser vier Seiten untereinander liegt bei **14–16 %** (8-Wort-Shingles,
Jaccard). Zum Vergleich: Bei einem Template mit ausgetauschtem Ortsnamen läge sie über 80 %.

Jede Stadtseite hat eine eigene H1, eigenen Text, eigene Description. Kein Template mit
ausgetauschtem Ortsnamen.

**Das relativiert unsere eigene Entscheidung.** Im Juli-Audit stand „keine Stadtteilseiten für
Norderstedt/Pinneberg/Reinbek — wäre Thin Content". Das bleibt richtig, aber die Begründung war
unvollständig: Ortsseiten sind nicht per se dünn, sie werden es nur, wenn man sie dünn macht.

**Übertragbar: eingeschränkt.** 16.000 Zeichen pro Ort sind für uns nicht realistisch, und für
Norderstedt gibt es keine echten Referenzen. Aber die Search Console zeigt bereits Nachfrage für
`maler bramfeld` (28 Impressionen) und `maler wandsbek` (8) — das ist die eigene Nachbarschaft mit
echter Ortsnähe (siehe [LEADS.md](LEADS.md)).

Der Weg dorthin ist nicht „Seite bauen", sondern erst **echte Projekte in diesen Stadtteilen
dokumentieren**. Ohne Vorher/Nachher-Fotos aus Bramfeld ist eine Bramfeld-Seite genau der Thin
Content, vor dem das Audit gewarnt hat. Mit drei dokumentierten Objekten wird sie tragfähig.

---

## 3. Lexikon: 62 Einträge für Topical Authority

SUMAX hat eine eigene Sitemap nur für Glossar-Begriffe. Das ist der klassische Weg, thematische
Autorität aufzubauen, ohne auf umkämpfte Money-Keywords zu zielen.

**Übertragbar: ja, im Kleinen.** Nicht 62 Einträge, aber die Logik stimmt auch für uns. Unsere
Search Console zeigt informationelle Suchen, für die wir keine Zielseite haben — die
Schimmel-Mietrecht-Frage etwa steht schon im Cluster-Plan.

Realistische Kandidaten, alle aus echten Kundenfragen:
- Was kostet Tapezieren pro Quadratmeter?
- Schimmel in der Wohnung — zahlt Mieter oder Vermieter?
- Vlies oder Raufaser — was ist der Unterschied?
- Wie lange dauert das Streichen einer 3-Zimmer-Wohnung?

Wichtig ist die Reihenfolge: Erst müssen die **bestehenden** Service-Seiten indexiert werden. Vier
von fünf haben aktuell null Klicks. Neue Ratgeberseiten davor zu setzen, produziert nur weitere
nicht-indexierte URLs.

---

## 4. Sofort übertragbar: Snippet-Gestaltung

Hier ist der billigste Hebel, und er passt exakt zu unserer Lage bei Durchschnittsposition 17,8.

SUMAX-Titles verwenden durchgängig Trennzeichen und Häkchen:

    Online Marketing Agentur » Strategie✓ Umsetzung✓ Performance✓ Google zertifiziert ➨ JETZT BERATEN LASSEN.
    SEO Agentur Hamburg 》Suchmaschinenoptimierung Experte
    SEO Agentur Kiel 》Individuelle Suchmaschinenoptimierung ✓Fokus auf lokale SEO ✓Google zertifiziert

Descriptions laufen konsequent auf 135–140 Zeichen — also nah ans Limit, ohne abgeschnitten zu werden.

Unsere Descriptions nutzen bereits ein ☎-Symbol, aber keine Häkchen und keine Trennzeichen. Bei
975 Impressionen und 59 Klicks ist die CTR der direkteste verfügbare Hebel: Wir müssen dafür nicht
besser ranken, nur häufiger geklickt werden.

**Übertragbar: ja, heute.** Aber mit Maß — die Seite lebt von einem seriösen, ruhigen Ton. Zwei
Häkchen wirken, fünf wirken billig.

---

## 5. Personenmarke vor Firmenmarke

Auffällig auf Instagram: Die Fachinhalte laufen über das **Personenprofil** von Sebastian Jacobs,
nicht über den Firmenaccount.

| Account | Inhalt | Reichweite |
|---|---|---:|
| @smxjacobs (Person) | „3 SEO Hebel", „4 SEO Mythen", Case Studies | bis **126 Likes** |
| @sumax.de (Firma) | Team, Agenturleben, Employer Branding | 8–40 Likes |

Das Personenprofil trägt die Fachthemen und erreicht das Drei- bis Fünfzehnfache.

**Übertragbar: ja, und wir haben den Ansatz schon.** „Direkt mit Mehmet Sert", „Sie sprechen nicht
mit einer Vermittlung" steht bereits auf der Startseite. SUMAX zeigt, dass man konsequenter sein
darf: Autorenseiten (`/autor/sebastian-jacobs.html`) als E-E-A-T-Signal, Gesicht in jedem Beitrag.

Für uns hängt das allerdings an einem ungelösten Punkt: Das Porträtfoto ist KI-generiert. Eine
Personenmarke auf einem erfundenen Gesicht aufzubauen, ist genau der Vertrauensbruch, vor dem das
Juli-Audit gewarnt hat. **Erst echtes Foto, dann Personenmarke.**

---

## 6. Was wir NICHT übernehmen sollten

Ehrlichkeitshalber — nicht alles bei SUMAX ist vorbildlich, und einiges passt schlicht nicht.

**Die Ladezeit auf keinen Fall.** Gemessen auf der SUMAX-Startseite:

| Metrik | sumax.de | Zielwert |
|---|---:|---:|
| Transfer | **7,8 MB** (5,5 MB Video) | < 1,5 MB |
| LCP | **3,83 s** | < 2,5 s |
| Bilder mit `loading="lazy"` | **0 von 54** | alle unterhalb des Falzes |
| Inline-CSS im HTML | **249 KB** | ausgelagert |

Ausgerechnet die Agentur, die Conversion- und Usability-Optimierung verkauft und auf Instagram
„technisch saubere & schnelle Website" als Erfolgsfaktor nennt, braucht 3,8 Sekunden. Unsere Seite
ist statisches HTML ohne JS-Runtime — das ist ein echter Vorsprung, den wir nicht aufgeben sollten.

**Die aufgeblähte `llms.txt` nicht kopieren.** SUMAX hat eine, aber sie ist **1,38 MB** groß. Die
Datei soll eine kompakte Orientierung für LLMs sein, typischerweise wenige Kilobyte. In dieser
Größe verarbeiten viele Crawler sie gar nicht. Falls wir eine anlegen: kurz halten, nur die
Hauptseiten mit einem Satz Beschreibung.

**Keine acht Seiten für dasselbe Thema.** SUMAX hat `seo-agentur`, `suchmaschinenoptimierung`,
`seo-optimierung`, `seo-marketing`, `seo-beratung`, `suchmaschinenplatzierung`,
`webseitenoptimierung` — jede mit eigenem Text, aber sehr ähnlicher Suchintention. Ob das
kannibalisiert, ließe sich nur in deren Search Console sehen. Bei fünf Service-Seiten, von denen
vier nicht indexiert sind, ist das für uns ohnehin keine Option.

**Kostenlose Tools als Linkbait** (Redirect-Checker, SERP-Generator) funktionieren für eine
Agentur, nicht für einen Malerbetrieb.

---

## 7. Was davon jetzt zu tun ist

Sortiert nach Aufwand-Wirkung, nicht nach Reihenfolge im Text:

1. **KI-Crawler in Cloudflare freigeben** — kostenlos, eine Einstellung, direkter Effekt auf
   ChatGPT-/Perplexity-Sichtbarkeit. Einzige offene Frage ist die Trainings-Entscheidung.
2. **Titles und Descriptions um Häkchen/Trennzeichen ergänzen** — CTR-Hebel bei Position 17,8,
   wirkt ohne besseres Ranking. Sparsam dosieren.
3. **Projekte je Stadtteil fotografisch dokumentieren** — Voraussetzung für alles Weitere:
   Bramfeld/Wandsbek-Inhalte, Referenzen, echte Personenmarke.
4. **Ratgeber-Inhalte** — aber erst, wenn die bestehenden Service-Seiten indexiert sind.

Punkt 1 und 2 kann ich umsetzen, sobald der Cloudflare-Zugang wieder verbunden ist beziehungsweise
das Wording freigegeben ist. Punkt 3 hängt an Fotos vom Betrieb.

---

## Korrektur (04.09.2026, nach Prüfung im Cloudflare-Dashboard)

**Abschnitt 1 oben war falsch.** Die Behauptung „wir blocken GPTBot, ClaudeBot und PerplexityBot"
stützte sich auf `curl`-Aufrufe mit gefälschtem User-Agent. Cloudflare verifiziert Crawler aber
über IP-Signaturen, nicht über den User-Agent-String — ein vorgeblicher GPTBot von einer
Privatadresse wird deshalb immer abgewiesen, unabhängig von jeder Einstellung. Der Test konnte
die Frage gar nicht beantworten.

Die tatsächlichen Zahlen aus AI Crawl Control (letzte 24 Stunden):

| Crawler | Kategorie | erlaubt | erfolglos |
|---|---|---:|---:|
| Claude-SearchBot | AI Search | **12** | 0 |
| OAI-SearchBot | AI Search | **7** | 1 |
| ChatGPT-User | AI Assistant | **3** | 1 |
| BingBot | Search Engine | 12 | 0 |
| Googlebot | Search Engine | 7 | 0 |
| GPTBot | AI Crawler | 0 | 3 |
| ClaudeBot | AI Crawler | 0 | 2 |
| PerplexityBot | AI Search | 0 | 2 |

**Die Bots, die ChatGPT und Claude für Antworten nutzen, greifen bereits erfolgreich zu.**
Blockiert sind nur die reinen Trainings-Crawler. Die drei bzw. zwei „erfolglosen" Zugriffe bei
GPTBot, ClaudeBot und PerplexityBot sind exakt die Testaufrufe aus dieser Session.

Wir stehen also **nicht** gegenteilig zu SUMAX. Der Unterschied zwischen beiden Seiten ist in
diesem Punkt deutlich kleiner als oben behauptet.

### Was tatsächlich geändert wurde

In den KI-Bot-Richtlinien standen alle drei Kategorien auf „Genehmigen (nicht blockieren)", auch
Training. Das war nicht die gewollte Haltung — die robots.txt sagt seit jeher
`Content-Signal: ai-train=no`. Neu gesetzt und gespeichert:

| Kategorie | Einstellung | Bedeutung |
|---|---|---|
| Suche | Genehmigen | Sichtbarkeit in Suchindizes |
| Agent | Genehmigen | ChatGPT und Claude dürfen die Seite in Antworten heranziehen |
| Training | **Blockieren** | keine Nutzung der Texte für Modelltraining |

Damit ist die Dashboard-Einstellung erstmals deckungsgleich mit dem, was die robots.txt aussagt.

### Methodische Lehre

Crawler-Zugriff lässt sich nicht mit gefälschten User-Agents prüfen. Verlässlich sind nur die
Zugriffszahlen in AI Crawl Control (Cloudflare-Dashboard → maler-sert.de → AI Crawl Control →
Sicherheit). Dort steht pro Bot, wie viele Anfragen durchkamen und wie viele abgewiesen wurden.
