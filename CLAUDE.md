# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Fly100 is a Next.js web application for cross-country (XC) paragliding pilots. It offers educational content, a community membership (Wingmates, £14.95/mo) and in-person coaching (Birdmen Academy, £89.95/mo) via Stripe subscriptions. The domain is `fly100.co`.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build (runs sitemap generation via postbuild)
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

**Routing:** Next.js App Router (`app/`). API routes live under `app/api/`. Dynamic page routes include `app/[slug]/` for marketing pages.

**Auth:** NextAuth (`app/api/auth/`) with Supabase as the adapter. The Supabase client for server-side use is in `lib/supabase/` (separate client and server configurations). Protected routes check session server-side.

**Payments:** Stripe integration via `lib/stripe.ts`. Subscription plans are defined in `config.ts`. Webhook handler at `app/api/webhooks/stripe/`.

**Blog:** Content is stored as markdown files in `content/blog/` with frontmatter parsed by gray-matter. `lib/blogApi.ts` handles file-based reads; `lib/blogSupabase.ts` handles any DB-backed blog operations. Blog editor is protected — only accessible after sign-in (redirects to `/signin`, callback to `/blog/new`).

**Email:** Mailgun via `lib/mailgun.ts` and Nodemailer via `lib/convertkit.ts` / ConvertKit integration.

**UI:** shadcn/ui components (New York style) in `components/ui/`. App-level components in `components/General/`. Dark theme by default (`next-themes`). Primary color: `#38bdf8`. Font: `Noto_Sans`.

**Config:** Central app config (plans, domain, email, auth URLs) in `config.ts`. Types for config in `types/config.ts`.

**Path aliases:** `@/*` maps to the repo root (e.g. `@/components/`, `@/lib/`).

## Conventions

- TypeScript with `strict: false`
- Prettier: 2-space indent, single quotes, semicolons, 100-char line width
- Tailwind for all styling — no CSS modules
- Supabase is the primary data store; no separate ORM
