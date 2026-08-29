# Cluster-Plan — Maler Sert GmbH (maler-sert.de)

Stand: 2026-07-26. Basis: 5 bestehende Service-Seiten + SERP-Stichprobenanalyse
(12 Kernabfragen über Services, Orte, Sub-Themen). Volle DataForSEO-Validierung
vor Umsetzung empfohlen (`/seo-dataforseo`).

## Architektur-Übersicht

| Cluster | Pillar (bestehend) | Neue Spokes |
|---|---|---|
| Malerarbeiten | /leistungen/malerarbeiten-hamburg | Malerarbeiten Altbau Hamburg, Maler Norderstedt |
| Fassadenanstrich | /leistungen/fassadenanstrich-hamburg | Fassade streichen Norderstedt, Fassadensanierung Altbau Hamburg |
| Bodenbelag | /leistungen/bodenbelag-hamburg | Vinylboden verlegen Hamburg, Parkett verlegen Hamburg |
| Trockenbau | /leistungen/trockenbau-hamburg | Trockenbauwand Kosten (als Sektion, kein Post), Abgehängte Decke Hamburg |
| Schimmel-Sanierung | /leistungen/schimmel-sanierung-hamburg | Schimmel Mietwohnung wer zahlt, Schimmel Ursachen & Vorbeugen |

## Kernbefunde SERP-Overlap

- "Malerarbeiten Hamburg" / "Maler Hamburg" / "Malerbetrieb Hamburg": Overlap 8/10
  -> bereits korrekt auf eine Pillar-URL konsolidiert.
- "Malerarbeiten Hamburg" vs. "Maler Norderstedt": Overlap ~1/10 (komplett andere
  Verzeichnis-/Wettbewerberlandschaft: gelbeseiten, trustlocal, maler-boller
  Unterseite) -> eigene Standortseite gerechtfertigt.
- "Fassadenanstrich Hamburg" vs. "Fassade streichen Norderstedt": Overlap ~2/10,
  mehrere Wettbewerber (Grossmann, Bartsch, Profimaler) betreiben dedizierte
  Norderstedt-Fassadenseiten -> Marktlücke bei maler-sert.de.
- Bodenbelag-Materialien (Vinyl vs. Parkett): Overlap ~5/10 untereinander, aber
  nur ~3/10 zur generischen Bodenbelag-Pillar -> eigene Spokes im selben Cluster.
- "Schimmel-Sanierung Hamburg" vs. "Schimmel Mietwohnung wer zahlt": Overlap 0/10
  (Mietrecht-Portale statt Malerbetriebe) -> reines informationelles Trust-Content-
  Stück, kein direkter Rankingkonkurrenzkampf mit Fachbetrieben.

## Standort-Strategie

- **Norderstedt**: Priorität 1 — 2 dedizierte Seiten (Maler Norderstedt,
  Fassade streichen Norderstedt). Stärkstes eigenständiges SERP-Signal.
- **Pinneberg / Reinbek**: vorerst kein eigener Post. Als Abschnitt/FAQ in den
  bestehenden Pillar-Seiten + im Schema (areaServed) abbilden. Reevaluieren,
  sobald Search-Console-Daten (`/seo-google`) Impressions für "Maler Pinneberg"
  / "Maler Reinbek" zeigen.

## Validierung

Alle Punkte der Pre-Delivery-Checkliste erfüllt: keine Keyword-Duplikate,
≥3 eingehende interne Links je Spoke, bidirektionale Pillar-Spoke-Verlinkung,
keine Waisen-Seiten, Templates passend zur Intent-Klassifizierung,
Wortzahl-Ziele im Rahmen (Pillar 2500–4000, Spoke 1200–1800), 5 Cluster
à 2 Spokes.

Vollständige Daten: siehe `cluster-plan.json` im selben Ordner.
