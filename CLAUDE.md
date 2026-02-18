# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

## Tech Stack

- **Next.js 16** (App Router, `src/app/`)
- **React 19**, **TypeScript 5**
- **Sanity CMS** (project: `dsjuywc9`, dataset: `dataset1`) — embedded studio at `/studio`
- **next-intl v4** — bilingual FR/EN with locale prefix (`/fr/`, `/en/`)
- **Tailwind CSS v4** — OKLCH forest/neutral palette, configured via `@theme` in `globals.css`
- **Resend** — contact form email delivery

## Architecture

### Routing & i18n
- All user-facing pages are under `src/app/[locale]/` (`fr` and `en`)
- `src/proxy.ts` handles locale routing (**not** `middleware.ts` — next-intl v4 + Next.js 16 convention)
- `src/i18n/routing.ts` — `defineRouting` config (locales, defaultLocale)
- `src/i18n/request.ts` — loads `messages/*.json` for UI chrome strings
- `messages/en.json` and `messages/fr.json` contain only UI chrome (nav labels, form text, footer). All real CV/portfolio content comes from Sanity.
- Root `src/app/layout.tsx` returns `children` only — the `[locale]/layout.tsx` renders the full HTML document

### Sanity
- Schemas in `src/sanity/schemaTypes/` — `profile`, `experience`, `education`, `skill`, `project`, `certification`, `contactSettings`
- `profile` and `contactSettings` are singletons (fixed `documentId` in `structure.ts`)
- Studio structure: `src/sanity/structure.ts`
- Client, image builder, live: `src/sanity/lib/client.ts`, `image.ts`, `live.ts`
- GROQ queries: `src/sanity/lib/queries/cv.ts` and `queries/portfolio.ts`
- TypeScript types: `src/sanity/lib/types.ts`
- All translatable fields are objects `{ en?: string; fr?: string }` or `{ en?: block[]; fr?: block[] }`

### Locale helper
`src/lib/locale.ts` exports `t(field, locale)` — resolves a bilingual Sanity field to the correct string, with fallback to the other locale.

### Components
- `CVSection` — `'use client'`, sticky sidebar with IntersectionObserver nav, receives all Sanity data as props
- `ProjectsSection` — `'use client'`, grid of projects from Sanity
- `ContactSection` — `'use client'`, form state + Resend API call
- `Header`, `Footer`, `LanguageSwitcher` — `'use client'`, use `useTranslations` for UI chrome

### Data Flow
`src/app/[locale]/page.tsx` (Server Component) runs all `sanityFetch` calls in parallel via `Promise.all`, then passes typed data as props to each section component.

## Key Conventions

- Use `@/` alias for all imports from `src/`
- Tailwind v4 — configure colors/tokens in `globals.css` `@theme` block, not in a config file
- Server Components are the default; add `'use client'` only for components with hooks/interactivity
- Locale-aware Sanity fields: access as `field?.en` or `field?.fr`, use `t(field, locale)` from `src/lib/locale.ts`
- `sanityFetch` from `src/sanity/lib/live.ts` — use for all Sanity reads (handles caching, draft mode, live updates)

## Current State

### Session 2 — 2026-02-18
- **Fixed**: Sanity data not showing on frontend — root cause was `dataset1` having `aclMode: private`. Changed to `public` via Sanity API. No code changes needed.
- **Fixed**: Schema not deployed to cloud — ran `npx sanity@latest schema deploy` (required for MCP patch tools to validate). Must re-run after any schema changes.
- **Done**: Fully populated dataset from `/home/majit/sites/portfolio-cv/portfolio-cv/src/messages/` — all content is bilingual EN/FR.
- **Known**: `browserToken` not set in `defineLive` — harmless warning, draft previews outside Studio won't work but that's acceptable.
- **Dataset status**: all types populated and published — profile, 2 experiences, 1 education, 18 skills, 3 languages, 4 projects, contactSettings.
- **Next**: v1 visual QA + any layout/styling fixes, then plan v2 (custom CMS + own auth).

## Environment Variables

```
NEXT_PUBLIC_SANITY_PROJECT_ID=dsjuywc9
NEXT_PUBLIC_SANITY_DATASET=dataset1
NEXT_PUBLIC_SANITY_API_VERSION=2026-02-18
SANITY_API_READ_TOKEN=          # generate at sanity.io/manage → API → Tokens
SANITY_PREVIEW_SECRET=          # any random string for draft mode
RESEND_API_KEY=
RESEND_FROM_EMAIL=
RESEND_TO_EMAIL=
```
