# cvbuilder-v1

Bilingual (FR/EN) CV and portfolio — built entirely with [Claude Code](https://claude.ai/code) by Anthropic.

> This project was designed, architected, debugged, and populated with content through an agentic coding session with Claude Code. No code was written manually.

## Stack

- **Next.js 16** — App Router
- **React 19** / **TypeScript 5**
- **Sanity CMS** — content management, embedded studio at `/studio`
- **next-intl v4** — bilingual routing (`/fr/`, `/en/`)
- **Tailwind CSS v4** — OKLCH color palette
- **Resend** — contact form email delivery

## Features

- Fully bilingual CV (profile, experience, education, skills, languages)
- Portfolio projects section
- Contact form
- Sanity Studio embedded in the app
- Live content updates via Sanity Live Content API

## Getting Started

```bash
npm install
npm run dev
```

Copy `.env.local.example` and fill in your keys:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
SANITY_API_READ_TOKEN=
RESEND_API_KEY=
RESEND_FROM_EMAIL=
RESEND_TO_EMAIL=
```

## Built with Claude Code

This entire project was built using [Claude Code](https://claude.ai/code), Anthropic's agentic CLI for software engineering. Tasks handled by Claude Code include:

- Project architecture and file structure
- All component and schema code
- Sanity CMS setup, schema design, and data population (migrated from an existing portfolio)
- Debugging (dataset ACL, schema deployment, middleware conventions)
- Git setup and deployment prep

## Author

**Majit Mambetzhumayev** — [sparqup.fr](https://sparqup.fr) · [GitHub](https://github.com/majitmambetzhumayev)
