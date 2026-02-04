# Copilot Instructions for Homam Portfolio

## Project Overview
**Next.js 14 portfolio website** (TypeScript + React) showcasing a developer/designer's work across game development, web design, and motion graphics.

**Key Stack**: Next.js 14, TypeScript, React, Tailwind CSS, Radix UI/shadcn, Zod validation, in-memory rate limiting

## Architecture & Critical Data Flows

### 1. **Bilingual System** (`lib/language-context.tsx` + `lib/translations.ts`)
- **LanguageProvider** wraps root layout; all context from `useLanguage()` hook returns `{ language, setLanguage, t }`
- **Translations**: Single object with `de` and `en` keys (281 lines each). Always update BOTH languages when adding text
- **Persistence**: Language choice stored in localStorage as `portfolio-language`
- **Usage Pattern**: `const { t } = useLanguage()` → `t.section.key` (e.g., `t.hero.greeting`)

### 2. **Projects System** (`lib/projects-data.ts` + `app/projects/[id]/page.tsx`)
- **Data**: Hardcoded array of 3 projects (Ball Roll, Ballon, 2D Animation) with `id`, `title`, `category`, `features`, `technologies`
- **Dynamic Routes**: `/projects/[id]` SSG-friendly; ID must match `projects-data.ts` id field
- **To Add**: 
  1. Add object to `projectsData` array with unique `id`
  2. Update `translations.ts` `projectDetails` section if needed
  3. Add project images to `/public/images/`

### 3. **Contact Form & Email API** (`components/ContactForm.tsx` + `app/api/contact/route.ts`)
- **Flow**: Form POST → middleware rate limit check → server validates with Zod → attempts Resend email → logs response
- **Fallback**: If `RESEND_API_KEY` missing, email silently logs to console (no error thrown)
- **Rate Limit**: 5 requests/minute per IP (stricter than general 100/min in middleware)
- **Email Template**: Uses string interpolation with `.replace(/\n/g, "<br>")` for newlines

## Security & Validation

### **Zod Schema** (`lib/security.ts` → `contactFormSchema`)
- **Fields**: `name` (2–100 chars, regex allows German chars + hyphens/apostrophes), `email` (RFC), `subject` (5–200), `message` (10–5000)
- **Applied**: Client-side for UX; server-side for enforcement
- **Pattern**: `.safeParse()` returns `{ success, data, error }` for graceful handling

### **Rate Limiting** (Two-layer system)
1. **Middleware** (`middleware.ts`): 100 reqs/min per IP (all routes)
2. **Contact API** (`security.ts` RATE_LIMIT_CONFIG): 5 reqs/min per IP
3. **Implementation**: In-memory Map (no persistence across restarts; use Redis for production)
4. **Headers**: Returns 429 with `Retry-After` when exceeded

### **Input Sanitization**
- `.trim()` on all inputs; max consecutive newlines reduced to 2 in messages
- Regex validation rejects special characters in names (only alphanumeric + German umlauts + hyphens/apostrophes)
- Email template escapes HTML: direct string interpolation (no React JSX in email)

## Project Structure & Conventions

| Folder | Purpose |
|--------|---------|
| `app/` | Next.js App Router pages (`page.tsx`), layouts, API routes |
| `components/` | React components; all use `"use client"` if they use hooks |
| `components/ui/` | 40+ shadcn/ui wrapped Radix UI primitives |
| `lib/` | Utilities: language context, translations, projects data, security helpers |
| `public/images/` | Project screenshots, portfolio assets |

**File Naming**: kebab-case for components (e.g., `contact-form.tsx`, `hero.tsx`); PascalCase for contexts/providers

**TypeScript Strictness**: `strict: true` in `tsconfig.json`; all props must be typed. Use `type Props = { ... }` pattern

## Styling & Components

- **Framework**: Tailwind CSS + shadcn/ui (Radix primitives)
- **Colors**: Use Tailwind defaults (primary, secondary, destructive, muted, etc.)
- **Patterns**:
  - Import shadcn components: `import { Button } from "@/components/ui/button"`
  - Add className to components: `<Button className="mt-4 px-6">Text</Button>`
  - Global CSS in `app/globals.css` (minimal; prefer utility classes)
- **Theme**: Implicit Tailwind config with shadcn defaults (no custom config file in repo)

## Development & Build Workflow

### **Key Scripts**
```bash
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build
npm run lint         # ESLint
npm run type-check   # TypeScript noEmit check
npm run security     # npm audit --audit-level moderate
```

### **Environment Variables**
- `RESEND_API_KEY`: Email API key (optional; missing = logs to console)
- `CONTACT_EMAIL`: Recipient address (referenced in security.ts, not enforced)
- **Note**: No `.env` in repo; use `.env.local` locally

### **Build Config** (`next.config.mjs`)
- `removeConsole` enabled in production (keeps `error`, `warn`)
- `productionBrowserSourceMaps: false` (security)
- `reactStrictMode: true`, `ignoreBuildErrors: true`
- Security headers set in `headers()` block

## Common Modifications

### Add a New Page
1. Create `app/new-slug/page.tsx` as default export
2. Add translation keys to `lib/translations.ts` (both `de` and `en`)
3. Link in `components/header.tsx` if needed
4. Inherits LanguageProvider from root layout automatically

### Add a Project
1. Add entry to `projectsData` in `lib/projects-data.ts` (unique `id`)
2. Add images to `/public/images/`
3. Add translations to `lib/translations.ts` projectDetails section if used
4. Route auto-available at `/projects/{id}`

### Update Translations
1. Open `lib/translations.ts`
2. Find section (e.g., `hero`, `projects`, `contact`)
3. **Update BOTH `de` and `en` objects with same keys** (mismatches cause runtime errors)
4. No rebuild required; hot reload picks it up

## Critical Gotchas

1. **Language Context Dependency**: All `useLanguage()` calls fail if LanguageProvider removed from `layout.tsx`
2. **Translation Key Mismatches**: Typings don't enforce parity between `de`/`en`; always verify both languages
3. **Project ID Consistency**: `[id]` param in routes must exactly match `id` field in `projectsData.ts`
4. **Rate Limit Volatility**: In-memory; resets on server restart. Production should use Redis
5. **Email Graceful Degradation**: RESEND_API_KEY missing = no error, just console logs (by design)
6. **TypeScript Strict Mode**: Props without types cause build failures; use inline `type Props = { ... }` pattern

## Dependencies Worth Knowing

- **@hookform/resolvers**: Form validation bridge (connects React Hook Form + Zod)
- **@radix-ui/react-***: 30+ headless UI primitives (buttons, dialogs, menus, etc.)
- **zod**: Runtime schema validation (used for contact form, generates TypeScript types)
- **resend**: Email API library (optional, only imported if RESEND_API_KEY set)
- **tailwindcss**: CSS utility framework (PostCSS-based, configured via postcss.config.mjs)

## Security Checklist (Before Adding Similar Features)

- [ ] Zod schema validates all inputs (min/max lengths, regex patterns)
- [ ] Rate limiting applied (middleware + API route if sensitive)
- [ ] No raw user input in HTML/emails (use `.replace()` for newlines in emails)
- [ ] RESEND_API_KEY and CONTACT_EMAIL from env vars, never hardcoded
- [ ] 500 errors log full details, but responses omit sensitive info
- [ ] Client-side validation for UX; server-side for security (never trust client)

---
**Last Updated**: January 26, 2026 | **Node**: 18+ | **Next.js**: 14
