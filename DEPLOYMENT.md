# Deployment-Anleitung: Maler Sert GmbH Website

Die Website ist jetzt Git-ready und kann auf Netlify deployed werden. Hier sind **3 Optionen** (von einfach bis professionell):

---

## 🚀 Option 1: Schnellest — Netlify Drag & Drop (2 Min)

**Keine GitHub nötig, sofort online.**

1. Gehe zu **https://app.netlify.com/drop** (ohne Login)
2. Ziehe den `landingpage/` Ordner auf die Seite
3. Netlify generiert eine URL: `xxx.netlify.app`
4. ✅ Website ist live (mit automatischer HTTPS)

**Nachteil:** Kein Git-Deployment, jede Änderung muss manuell reuploaded werden.

---

## 🔗 Option 2: GitHub + Netlify (Auto-Deploy) — Empfohlen 🌟

**Professionell: Jeder Git Push → automatisches Deployment**

### Schritt 1: GitHub Repo erstellen

1. Gehe zu https://github.com/new
2. **Repository name:** `maler-sert-website` (oder ähnlich)
3. **Description:** `Maler Sert GmbH — Hamburg`
4. **Public** oder **Private** (Private ist sicherer)
5. Klick: **Create repository**

### Schritt 2: Lokal zu GitHub pushen

Öffne die **Git Bash** / Terminal im Ordner `C:\Users\eku14\Desktop\Malerbetrieb`:

```bash
# Remote hinzufügen (ersetze USERNAME und REPO mit deinen Werten)
git remote add origin https://github.com/USERNAME/maler-sert-website.git

# Branch umbenennen (GitHub nutzt 'main' statt 'master')
git branch -M main

# Zu GitHub pushen (du wirst aufgefordert, dich zu authentifizieren)
git push -u origin main
```

**Falls Git-Authentifizierung fragt:**
- Nutze **Personal Access Token** statt Passwort:
  - Gehe zu https://github.com/settings/tokens
  - **Generate new token → Generate new token (classic)**
  - Gib ihm einen Namen wie `netlify-deploy`
  - Wähle: `repo` (Vollzugriff)
  - Kopiere den Token
  - Nutze Token als Passwort im Git-Prompt

### Schritt 3: Netlify mit GitHub verbinden

1. Gehe zu https://app.netlify.com (kostenlos anmelden oder mit GitHub Login)
2. Klick: **Add new site → Import an existing project**
3. Wähle: **GitHub** (verbinde deinen GitHub Account)
4. Wähle das Repo: `maler-sert-website`
5. **Build settings:**
   - Build command: (leer lassen — statische Site)
   - Publish directory: `landingpage`
6. Klick: **Deploy site**

**Fertig!** 🎉
- Website bekommt URL: `maler-sert-website.netlify.app`
- Jeder `git push` triggert automatisches Deployment
- Änderungen sind live in ~30 Sekunden

### Domain verbinden (später)

Wenn `maler-sert.de` registriert ist:
1. **Netlify Dashboard → Site settings → Domain management**
2. **Add domain**
3. Folge den Anweisungen zur DNS-Konfiguration

---

## ⚡ Option 3: Netlify CLI (Nur für Fortgeschrittene)

```bash
# Netlify CLI installieren
npm install -g netlify-cli

# In den Projektordner wechseln
cd "C:\Users\eku14\Desktop\Malerbetrieb"

# Mit Netlify verbinden
netlify link

# Deployen
netlify deploy --prod
```

---

## 📋 Checkliste vor Deployment

- ✅ Git-Repo erstellt: **Ja** (`C:\Users\eku14\Desktop\Malerbetrieb\.git/`)
- ✅ `netlify.toml` vorhanden: **Ja**
- ✅ HTML-Dateien im `landingpage/` Ordner: **Ja** (`index.html`, `impressum.html`, `datenschutz.html`)
- ✅ Bilder im `landingpage/img/` Ordner: **Ja** (6 JPG-Dateien)
- ✅ E-Mail-Adressen aktualisiert: **Ja** (`info@maler-sert.de`)

---

## 🎯 Empfohlener Workflow nach Deployment

1. **Website live testen:** `https://maler-sert-website.netlify.app`
2. **Mit Mehmet teilen** für Feedback
3. **Domain registrieren:** `maler-sert.de` (z. B. bei Strato, Ionos, Hosteurope)
4. **DNS-Records** zu Netlify zeigen (Anleitung von Netlify)
5. **Google Business Profile** anlegen (→ siehe `02_GBP_SETUP.md`)
6. **E-Mail-Postfach** einrichten (`info@maler-sert.de`)

---

## ❓ FAQ

**Q: Kann Mehmet die Website selbst aktualisieren?**
A: Ja! Nach Git-Setup kann Mehmet (oder sein Assistent) Änderungen in den `landingpage/` Ordner machen, committen und pushen — alles lädt sich automatisch zu Netlify.

**Q: Kostet Netlify etwas?**
A: Nein! Kostenlos bis 300 Minuten Build-Zeit/Monat (für diese statische Website reicht das locker).

**Q: Wie sieht die Website aus?**
A: Helle Farbpalette (Weiß/Anthrazit/Blau), 6 Leistungs-Cards mit Bildern, responsive Design. Live-Preview: https://app.netlify.com/drop

---

**Status:** ✅ Alles ready für Deployment!
