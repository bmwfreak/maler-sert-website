# Architektur & Deployment-Flow — Maler Sert GmbH Website

## Übersicht

```
┌─────────────────────────────────────────────────────────────────────┐
│                        DOMAIN-EBENE                                  │
│                                                                       │
│   Besucher tippt: maler-sert.de                                      │
│                        │                                             │
│                        ▼                                             │
│   ┌──────────────────────────────┐                                   │
│   │  IONOS (Registrar)           │                                   │
│   │  Domain: maler-sert.de       │  ← Registrierung & Verlängerung  │
│   │  Nameserver → Cloudflare     │    (~10 €/Jahr bei IONOS)         │
│   └──────────────┬───────────────┘                                   │
│                  │ Nameserver-Delegation                             │
│                  ▼                                                   │
│   ┌──────────────────────────────┐                                   │
│   │  CLOUDFLARE DNS              │                                   │
│   │  hans.ns.cloudflare.com      │  ← Alle DNS-Einträge hier        │
│   │  leah.ns.cloudflare.com      │                                   │
│   │                              │                                   │
│   │  CNAME  @    → maler-sert.pages.dev  (proxied 🟠)              │
│   │  CNAME  www  → maler-sert.pages.dev  (proxied 🟠)              │
│   └──────────────┬───────────────┘                                   │
│                  │ Cloudflare Proxy (DDoS-Schutz, CDN, SSL)         │
│                  ▼                                                   │
│   ┌──────────────────────────────┐                                   │
│   │  CLOUDFLARE PAGES            │                                   │
│   │  Projekt: maler-sert         │  ← Statisches Hosting (kostenlos)│
│   │  URL: maler-sert.pages.dev   │    Unbegrenzte Bandbreite        │
│   │  Custom: maler-sert.de ✅    │    HTTPS automatisch             │
│   │  Custom: www.maler-sert.de ✅│                                   │
│   └──────────────┬───────────────┘                                   │
│                  │ Liefert                                           │
│                  ▼                                                   │
│          landingpage/ (HTML/CSS/JS)                                  │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                     DEPLOYMENT-PIPELINE                              │
│                                                                       │
│  Claude Code (lokal)                                                 │
│  C:\Users\eku14\Desktop\Malerbetrieb\                                │
│          │                                                           │
│          │  git push origin master                                   │
│          ▼                                                           │
│  ┌───────────────────────────────┐                                   │
│  │  GitHub                       │                                   │
│  │  bmwfreak/maler-sert-website  │  ← Public Repo                   │
│  │  Branch: master               │                                   │
│  └──────────────┬────────────────┘                                   │
│                 │  push-Event triggert                               │
│                 ▼                                                    │
│  ┌───────────────────────────────┐                                   │
│  │  GitHub Actions               │                                   │
│  │  .github/workflows/deploy.yml │                                   │
│  │                               │                                   │
│  │  uses: wrangler-action@v3     │  ← Läuft auf ubuntu-latest       │
│  │  secret: CLOUDFLARE_API_TOKEN │                                   │
│  └──────────────┬────────────────┘                                   │
│                 │  wrangler pages deploy dist/                       │
│                 ▼                                                    │
│  ┌───────────────────────────────┐                                   │
│  │  Cloudflare Pages             │                                   │
│  │  Projekt: maler-sert          │  ← Live in ~60 Sekunden          │
│  └───────────────────────────────┘                                   │
└─────────────────────────────────────────────────────────────────────┘
```

## Zugangsdaten & Konfiguration

| Was                  | Wert                                                      |
|----------------------|-----------------------------------------------------------|
| Cloudflare Account   | Eku1453@gmail.com                                         |
| Account ID           | 5503b8cdde7230f2c7e8d6f3c8326a1a                          |
| Zone ID              | 12db670ca527354e526d419a7e5a3db7                          |
| Pages Projekt        | maler-sert                                                |
| GitHub Repo          | bmwfreak/maler-sert-website                               |
| GitHub Secret        | CLOUDFLARE_API_TOKEN (in Repo Settings hinterlegt)        |
| Deploy-Verzeichnis   | `dist/` (Astro build output nach Migration)               |

## Kosten

| Dienst               | Kosten                        |
|----------------------|-------------------------------|
| Cloudflare Pages     | Kostenlos (unbegrenzt)        |
| Cloudflare DNS       | Kostenlos                     |
| Cloudflare Proxy/CDN | Kostenlos                     |
| IONOS Domain         | ~10 €/Jahr (Verlängerung)     |
| GitHub               | Kostenlos (public repo)       |
| **Gesamt**           | **~10 €/Jahr**                |

## Update einspielen (Kurzanleitung)

```bash
# 1. Änderung in src/ machen
# 2. npm run build prüfen (lokal, optional)
# 3. Committen und pushen
git add .
git commit -m "Änderung beschreiben"
git push origin master
# → GitHub Actions deployt automatisch: npm ci → npm run build → wrangler pages deploy dist/ → Live in ~60 Sek
```

## Manuelle Notfall-Deploy (ohne GitHub)

```powershell
cd C:\Users\eku14\Desktop\Malerbetrieb
npm run build
npx wrangler pages deploy dist/ --project-name=maler-sert
```
