# 🔒 Security Policy

## Unterstützte Versionen

Wir unterstützen die folgenden Versionen mit Sicherheitsupdates:

| Version | Unterstützt |
| ------- | ----------- |
| 0.1.x   | ✅          |

## 🚨 Sicherheitslücken melden

Wenn Sie eine Sicherheitslücke finden, bitte melden Sie diese **NICHT** über GitHub Issues.

Stattdessen senden Sie bitte eine E-Mail an: **security@homam.dev**

Wir werden uns innerhalb von **48 Stunden** bei Ihnen melden.

## 🛡️ Implementierte Sicherheitsmaßnahmen

### 1. HTTP Security Headers
- ✅ Strict-Transport-Security (HSTS)
- ✅ X-Content-Type-Options: nosniff
- ✅ X-Frame-Options: DENY (Clickjacking Schutz)
- ✅ X-XSS-Protection: 1; mode=block
- ✅ Referrer-Policy: strict-origin-when-cross-origin
- ✅ Permissions-Policy: geolocation, microphone, camera disabled

### 2. Input Validation & Sanitization
- ✅ Zod-basierte Schema-Validierung
- ✅ HTML-Escaping gegen XSS-Angriffe
- ✅ Längenlimitierungen
- ✅ Format-Validierung (Email, Text)

### 3. Rate Limiting
- ✅ IP-basiertes Rate Limiting
- ✅ 5 Anfragen pro Minute pro IP
- ✅ 429-Status bei Überschreitung

### 4. TypeScript & Type Safety
- ✅ Strict Mode aktiviert
- ✅ Vollständige Type-Definitions
- ✅ No implicit any

### 5. Umgebungsvariablen
- ✅ `.env.example` Template
- ✅ `.env.local` in `.gitignore`
- ✅ NIEMALS Secrets in Code hardcoden

### 6. Middleware Security
- ✅ Global Security Middleware
- ✅ Custom Security Headers
- ✅ Request Validation

## 🔧 Security Best Practices

### Environment Variables
```bash
# .env.local (NEVER commit this!)
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=kontakt@beispiel.de
```

### Installation & Setup
```bash
# 1. Dependencies installieren
npm install

# 2. Environment-Variablen einrichten
cp .env.example .env.local
# Bearbeite .env.local mit echten Werten

# 3. Security Audit durchführen
npm audit

# 4. Development Server starten
npm run dev
```

### Production Deployment Checklist
- [ ] Alle Environment-Variablen konfiguriert
- [ ] HTTPS erzwungen
- [ ] Security Headers verifiziert
- [ ] Rate Limits konfiguriert
- [ ] `npm audit` zeigt keine kritischen Fehler
- [ ] `.env.local` ist in `.gitignore`
- [ ] Error Handling zeigt keine sensiblen Infos
- [ ] Logging ist konfiguriert

## 🚀 Production Deployment

Für Production-Deployment solltest du folgende zusätzliche Schritte durchführen:

### 1. HTTPS aktivieren
```bash
# Auf Vercel oder anderen Hosting-Providern automatisch
# Lokal für Testing: mkcert
```

### 2. Environment-Variablen setzen
```bash
# Vercel Dashboard:
# Settings > Environment Variables
# RESEND_API_KEY=re_xxxxxxxxxxxxx
# NODE_ENV=production
```

### 3. Monitoring einrichten
- [ ] Error Tracking (Sentry, Rollbar)
- [ ] Performance Monitoring
- [ ] Security Monitoring

## ⚠️ Known Issues & Limitations

- Rate Limiting ist in-memory (für Production Redis verwenden)
- Keine Authentifizierung implementiert
- Keine CSRF-Protection mit Token (nur SameSite Cookie)

## 📚 Weitere Ressourcen

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security Best Practices](https://nextjs.org/docs)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)

## 📞 Kontakt

Sicherheitsfragen: security@homam.dev

---

Vielen Dank für die Hilfe, unsere Software sicher zu halten! 🙏
