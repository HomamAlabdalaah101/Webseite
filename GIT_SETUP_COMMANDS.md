# 💻 Git Setup Commands - Copy & Paste Guide

**Alle Git-Befehle** zum einfachen Copy-Paste für dein Portfolio-Projekt.

## 📋 Vorbereitung

### Repository bei GitHub erstellen
1. Gehe zu [github.com](https://github.com)
2. **"New repository"** klicken
3. **Repository name**: `homam-portfolio`
4. **Public** wählen
5. **"Create repository"** klicken

### Lokales Setup
```bash
# In deinen Projekt-Ordner wechseln
cd Webseite

# Git initialisieren (falls noch nicht geschehen)
git init
```

---

## 🚀 Erstes Push zu GitHub

### Schritt 1: Alle Dateien hinzufügen
```bash
git add .
```

### Schritt 2: Commit erstellen
```bash
git commit -m "Initial commit: Homam portfolio website"
```

### Schritt 3: Main Branch setzen
```bash
git branch -M main
```

### Schritt 4: Remote Repository hinzufügen
```bash
# ERSETZE mit deinem GitHub Username!
git remote add origin https://github.com/DEIN_GITHUB_USERNAME/homam-portfolio.git
```

### Schritt 5: Push zu GitHub
```bash
git push -u origin main
```

---

## 🔄 Updates deployen

### Nach Änderungen an der Website:
```bash
# Änderungen hinzufügen
git add .

# Commit mit beschreibender Nachricht
git commit -m "Add new project section"

# Push zu GitHub (triggered automatisch Vercel Deploy)
git push
```

---

## 🛠️ Nützliche Git Commands

### Status prüfen
```bash
# Zeigt alle Änderungen
git status

# Zeigt Commit Historie
git log --oneline
```

### Änderungen rückgängig machen
```bash
# Letzte Änderungen aus Staging entfernen
git reset HEAD .

# Letzten Commit rückgängig machen (behaltet Änderungen)
git reset --soft HEAD~1

# Letzten Commit komplett löschen
git reset --hard HEAD~1
```

### Branches verwalten
```bash
# Neue Feature Branch erstellen
git checkout -b feature/new-section

# Zurück zu main Branch
git checkout main

# Branch mergen
git merge feature/new-section

# Branch löschen
git branch -d feature/new-section
```

### Remote Repository verwalten
```bash
# Remote URL prüfen
git remote -v

# Remote URL ändern (falls Username falsch)
git remote set-url origin https://github.com/RICHTIGER_USERNAME/homam-portfolio.git

# Remote entfernen und neu hinzufügen
git remote remove origin
git remote add origin https://github.com/DEIN_USERNAME/homam-portfolio.git
```

---

## 🔧 Troubleshooting

### "fatal: remote origin already exists"
```bash
# Bestehenden Remote entfernen
git remote remove origin

# Neuen Remote hinzufügen
git remote add origin https://github.com/DEIN_USERNAME/homam-portfolio.git
```

### "Permission denied" Fehler
```bash
# Personal Access Token verwenden statt Password
# 1. GitHub → Settings → Developer settings → Personal access tokens
# 2. Token mit "repo" Berechtigung erstellen
# 3. Token als Password verwenden beim Push
```

### Änderungen sind nicht auf GitHub
```bash
# Lokale Änderungen pushen
git push origin main

# Oder erzwingen (VORSICHT: überschreibt Remote)
git push -f origin main
```

### Repository ist leer nach Push
```bash
# Alle Dateien wirklich hinzugefügt?
git add .

# Commit erstellt?
git commit -m "Your message"

# Richtiger Branch?
git branch -M main

# Push mit Upstream
git push -u origin main
```

---

## 📊 Git Workflow für Portfolio

### Tägliche Arbeit:
```bash
# Morgens: Neueste Änderungen pullen
git pull origin main

# Arbeit machen...
# Dateien bearbeiten

# Abends: Änderungen commiten
git add .
git commit -m "Daily updates: improved contact form"
git push
```

### Neue Features:
```bash
# Feature Branch erstellen
git checkout -b feature/contact-form

# Arbeit machen...
git add .
git commit -m "Add contact form validation"

# Zurück zu main
git checkout main
git pull origin main

# Feature mergen
git merge feature/contact-form

# Pushen
git push origin main

# Feature Branch löschen
git branch -d feature/contact-form
```

---

## 🎯 Git Best Practices

### ✅ Gute Commit Messages:
```bash
# Schlecht:
git commit -m "fix"

# Gut:
git commit -m "Fix contact form email validation"

# Noch besser:
git commit -m "feat: add email validation to contact form

- Add client-side validation
- Add server-side validation
- Display error messages"
```

### ✅ Regelmäßige Commits:
- Nach jeder abgeschlossenen Aufgabe
- Nicht zu viele Dateien auf einmal
- Beschreibende Nachrichten

### ✅ Branch Strategy:
- `main`: Production-ready Code
- `feature/*`: Neue Features
- `bugfix/*`: Bug Fixes
- `hotfix/*`: Kritische Fixes

---

## 📈 GitHub Features nutzen

### Issues für Todos:
1. **Issues** → **New Issue**
2. Titel: "Add dark mode toggle"
3. Beschreibung mit Checkliste
4. **Projects** für Roadmap

### Pull Requests:
1. Branch pushen
2. **"Compare & pull request"** auf GitHub
3. Titel & Beschreibung
4. **Merge** wenn bereit

### GitHub Pages (optional):
```bash
# Für statische Demos
npm run export
git add out/ -f
git commit -m "Deploy to GitHub Pages"
git push
```

---

## 🆘 Hilfe bekommen

### Git Hilfe:
```bash
# Allgemeine Hilfe
git help

# Spezifische Command Hilfe
git help commit
git help push
```

### GitHub Support:
- [GitHub Docs](https://docs.github.com)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [GitHub Issues](https://github.com/dein-username/homam-portfolio/issues)

---

## 🚀 Automatisierung

### Git Hooks für Qualität:
```bash
# Pre-commit Hook (automatische Tests)
#!/bin/sh
npm run lint
npm run type-check
```

### Git Aliases für Schnelligkeit:
```bash
# Kurze Commands
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status

# Verwendung:
git co main  # statt git checkout main
git ci -m "message"  # statt git commit -m "message"
```

---

*Built with ❤️ by Homam*

**Git Probleme?** Erstelle ein Issue mit dem Fehler!
