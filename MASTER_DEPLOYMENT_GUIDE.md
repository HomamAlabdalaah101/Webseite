# 🚀 Master Deployment Guide - Homam Portfolio

**Vollständige Schritt-für-Schritt Anleitung** von lokaler Entwicklung zu Live-Website.

## 📋 Inhaltsverzeichnis

1. [Vorbereitung](#1-vorbereitung)
2. [GitHub Setup](#2-github-setup)
3. [Vercel Deployment](#3-vercel-deployment)
4. [Domain Konfiguration](#4-domain-konfiguration)
5. [Email Service (Resend)](#5-email-service-resend)
6. [Google Analytics](#6-google-analytics)
7. [SEO & Performance](#7-seo--performance)
8. [Testing & Go-Live](#8-testing--go-live)
9. [Nachbereitung](#9-nachbereitung)

---

## 1. Vorbereitung

### ✅ Was du brauchst:
- [ ] **Domain** (z.B. homam.dev) - kaufe bei Namecheap/INWX
- [ ] **GitHub Account** - [github.com](https://github.com)
- [ ] **30-60 Minuten** Zeit
- [ ] **Internetverbindung**

### ✅ Lokale Entwicklung prüfen:
```bash
# In deinem Projekt-Ordner:
cd Webseite
npm run dev
```
Öffne [http://localhost:3000](http://localhost:3000) - Website sollte funktionieren.

### ✅ Environment Variables vorbereiten:
```bash
cp .env.example .env.local
```
Fülle die Werte später aus (nach Account-Setup).

---

## 2. GitHub Setup

### Schritt 1: Repository erstellen
1. Gehe zu [github.com](https://github.com) und logge dich ein
2. Klicke **"New repository"**
3. **Repository Name**: `homam-portfolio` oder `portfolio`
4. **Description**: `Modern portfolio website built with Next.js`
5. **Visibility**: Public (für bessere SEO)
6. Klicke **"Create repository"**

### Schritt 2: Code hochladen
```bash
# Terminal commands (copy & paste):
git init
git add .
git commit -m "Initial commit: Homam portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Schritt 3: Repository verifizieren
- Gehe zu deinem GitHub Repo
- Alle Dateien sollten hochgeladen sein
- `README.md` sollte angezeigt werden

---

## 3. Vercel Deployment

### Schritt 1: Vercel Account erstellen
1. Gehe zu [vercel.com](https://vercel.com)
2. Klicke **"Sign Up"** (kostenlos)
3. Registriere dich mit **GitHub Account**
4. Bestätige deine Email

### Schritt 2: Projekt deployen
1. Klicke **"New Project"** in Vercel Dashboard
2. **Import Git Repository**
3. Wähle dein `homam-portfolio` Repository
4. **Configure Project**:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (leer lassen)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next` (automatisch)
5. Klicke **"Deploy"**

### Schritt 3: Erste Deployment warten
- Warte 2-3 Minuten
- Status sollte "Ready" werden
- Du bekommst eine `.vercel.app` URL

### Schritt 4: Environment Variables setzen
1. Gehe zu **Project Settings** → **Environment Variables**
2. Füge hinzu:
   ```
   NEXT_PUBLIC_SITE_URL=https://deine-domain.vercel.app
   RESEND_API_KEY=your_resend_key (später)
   NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id (später)
   ```
3. **Redeploy** triggern (Settings → Deployments → Trigger)

---

## 4. Domain Konfiguration

### Schritt 1: Domain kaufen (falls noch nicht)
- [Namecheap](https://namecheap.com) oder [INWX](https://inwx.de)
- Empfohlen: `.dev` oder `.com` Domain
- Preis: ~10-15€/Jahr

### Schritt 2: DNS bei Vercel konfigurieren
1. In Vercel Dashboard: **Project Settings** → **Domains**
2. Klicke **"Add"**
3. Gib deine Domain ein: `homam.dev`
4. Wähle **"Buy domain"** oder **"Add domain"**

### Schritt 3: DNS Records setzen
Vercel zeigt dir die benötigten DNS Records:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.21.21
```

### Schritt 4: Bei Domain-Provider eintragen
1. Gehe zu deinem Domain-Provider (Namecheap/INWX)
2. **DNS Management** → **DNS Records**
3. Füge die Records von Vercel hinzu
4. Warte 24-48 Stunden (DNS Propagation)

### Schritt 5: SSL-Zertifikat
- Vercel erstellt automatisch **kostenloses SSL**
- HTTPS wird automatisch aktiviert

---

## 5. Email Service (Resend)

### Schritt 1: Resend Account erstellen
1. Gehe zu [resend.com](https://resend.com)
2. Klicke **"Sign Up"** (kostenlos)
3. Registriere dich und bestätige Email
4. **100 Emails/Monat** kostenlos

### Schritt 2: Domain verifizieren
1. **Domains** → **Add Domain**
2. Gib deine Domain ein: `homam.dev`
3. Füge die DNS Records bei deinem Provider hinzu:
   ```
   Type: TXT
   Name: @
   Value: resend-domain-verification=...
   ```

### Schritt 3: API Key erstellen
1. **API Keys** → **Create API Key**
2. **Name**: `Portfolio Contact Form`
3. **Permission**: Full Access
4. **Kopiere den API Key**

### Schritt 4: Vercel Environment Variable setzen
1. Vercel Dashboard → **Project Settings** → **Environment Variables**
2. **Variable Name**: `RESEND_API_KEY`
3. **Value**: Dein API Key
4. **Redeploy** triggern

---

## 6. Google Analytics

### Schritt 1: Google Analytics Account
1. Gehe zu [analytics.google.com](https://analytics.google.com)
2. Klicke **"Start measuring"**
3. Wähle **"Web"**
4. **Account Name**: `Homam Portfolio`
5. **Property Name**: `homam.dev`
6. **Timezone**: Europe/Berlin
7. **Currency**: EUR

### Schritt 2: Data Stream erstellen
1. **Property** → **Data Streams** → **Add stream**
2. Wähle **Web**
3. **Website URL**: `https://homam.dev`
4. **Stream name**: `Homam Portfolio`

### Schritt 3: Measurement ID kopieren
1. In der Stream-Übersicht
2. Finde **"Measurement ID"**: `G-XXXXXXXXXX`
3. Kopiere die ID

### Schritt 4: Vercel Environment Variable
1. Vercel Dashboard → **Environment Variables**
2. **Variable Name**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
3. **Value**: `G-XXXXXXXXXX`
4. **Redeploy**

---

## 7. SEO & Performance

### Schritt 1: Meta Tags prüfen
Aktualisiere in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Homam | Creative Developer',
  description: 'Portfolio von Homam - Full-Stack Developer & UI/UX Designer',
  // ... weitere Meta Tags
}
```

### Schritt 2: Sitemap generieren
```bash
npm run postbuild
```
Sitemap wird automatisch erstellt: `/sitemap.xml`

### Schritt 3: Robots.txt prüfen
Datei: `public/robots.txt`
```txt
User-agent: *
Allow: /

Sitemap: https://homam.dev/sitemap.xml
```

### Schritt 4: Performance testen
1. [Google PageSpeed Insights](https://pagespeed.web.dev)
2. [Lighthouse](https://developer.chrome.com/docs/lighthouse)
3. [Web Vitals](https://web.dev/vitals)

---

## 8. Testing & Go-Live

### ✅ Pre-Deployment Checklist
- [ ] Domain zeigt auf Vercel
- [ ] HTTPS aktiv (grünes Schloss)
- [ ] Contact Form funktioniert
- [ ] Alle Seiten laden korrekt
- [ ] Mobile responsive
- [ ] Analytics trackt Besuche
- [ ] SEO Meta Tags korrekt

### 🧪 Testing durchführen
1. **Desktop & Mobile** testen
2. **Contact Form** senden
3. **Alle Links** klicken
4. **Browser Console** auf Fehler prüfen
5. **Lighthouse Score** > 90

### 🚀 Go-Live
1. **Final Deploy** auf Vercel
2. **Domain testen**: `https://homam.dev`
3. **SSL prüfen**: Grünes Schloss
4. **Social Media** teilen

---

## 9. Nachbereitung

### 📊 Monitoring einrichten
1. **Vercel Analytics** aktivieren
2. **Google Analytics** Dashboard prüfen
3. **Uptime Monitoring** (kostenlos bei Vercel)

### 🔧 Wartung
- **Wöchentlich**: Analytics prüfen
- **Monatlich**: Performance testen
- **Bei Updates**: Neue Features deployen

### 📈 Optimierungen
- **Bilder komprimieren**
- **Bundle Size** monitoren
- **Core Web Vitals** verbessern
- **SEO** kontinuierlich optimieren

---

## 🆘 Troubleshooting

### Häufige Probleme:

**Domain zeigt nicht auf Vercel:**
- DNS Records nochmal prüfen
- 48h warten (DNS Propagation)
- Vercel Support kontaktieren

**Contact Form funktioniert nicht:**
- RESEND_API_KEY prüfen
- Domain bei Resend verifiziert?
- Vercel Environment Variables korrekt?

**Analytics trackt nicht:**
- Measurement ID korrekt?
- Environment Variable gesetzt?
- Redeploy durchgeführt?

**Langsame Ladezeiten:**
- Bilder optimieren
- Bundle analyzer verwenden
- Vercel Edge Functions prüfen

---

## 🎉 Erfolg!

**Herzlichen Glückwunsch!** Deine Portfolio-Website ist live!

### Was du erreicht hast:
- ✅ **Professionelle Website** live
- ✅ **SEO-optimiert** für Google
- ✅ **Performance-optimiert**
- ✅ **Contact Form** funktional
- ✅ **Analytics** aktiv
- ✅ **Domain** & SSL eingerichtet

### Nächste Schritte:
1. **Portfolio erweitern** mit neuen Projekten
2. **SEO verbessern** (Backlinks, Content)
3. **Analytics analysieren** und optimieren
4. **Neue Features** hinzufügen

---

*Built with ❤️ by Homam*

**Fragen?** [GitHub Issues](https://github.com/YOUR_USERNAME/YOUR_REPO/issues) öffnen!
