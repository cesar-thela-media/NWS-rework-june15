# NWS Custom Homes & Remodeling — Website Rework

Marketing website for NWS Custom Homes, a Fort Bend County custom home builder and remodeling company based in Richmond, TX.

## Tech Stack

- **Next.js 14** (App Router, TypeScript)
- **React 18** with `'use client'` for interactive components
- **Pure inline styles** — no Tailwind in JSX; all styling via React `style={{}}` props using `COLORS` / `FONTS` constants from `lib/constants.ts`
- **Fonts**: Playfair Display (serif) + DM Sans (sans) via `next/font/google`
- **Before/After slider**: [`img-comparison-slider`](https://github.com/NikolayIT/img-comparison-slider) web component

## Project Structure

```
app/                   # Next.js App Router pages
  layout.tsx           # Root layout, global fonts, metadata
  page.tsx             # Homepage
  about/               # About page
  areas/               # Areas We Serve page
  contact/             # Contact + lead form
  faqs/                # FAQs page
  gallery/             # Photo gallery
  services/
    page.tsx           # All services overview
    [slug]/page.tsx    # Dynamic service detail pages

components/
  shared/
    NavBar.tsx         # Sticky nav, dropdown menus, mobile hamburger
    Footer.tsx         # Footer with links + contact info
  ...                  # Section components (Hero, ServicesSection, etc.)

data/
  services.ts          # All 10 service definitions (slug, copy, images, before/after)

lib/
  constants.ts         # COLORS, FONTS, CONTACT
  types.ts             # Shared TypeScript types

public/
  nws-logo.png         # Brand logo
  favicon.ico
```

## Brand Constants

```ts
// lib/constants.ts
COLORS = {
  plaster:    '#F7F4EF',  // warm off-white background
  espresso:   '#2B2118',  // near-black text
  terracotta: '#B5552D',  // primary accent / CTA
  sage:       '#9A9B8C',  // muted secondary text
  white:      '#FFFFFF',
}

FONTS = {
  serif: 'var(--font-playfair), Georgia, serif',
  sans:  'var(--font-dm-sans), system-ui, sans-serif',
}
```

## Running Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:3000

# Production build (verify before deploying)
npm run build
```

> If you see a 404 on the homepage after switching branches or clearing `.next/`, restart the dev server — Next.js App Router requires a cold start after cache invalidation.

## Deployment (Vercel)

The project deploys automatically via the `cesar-thela-media/NWS-rework-june15` GitHub repo. Every push to `main` triggers a Vercel build.

```bash
# Push to deploy
git push june15 master:main
```

Live URL: **https://nws-rework-june15.vercel.app**

### Vercel requirements met
- `npm run build` produces zero errors (11 static/dynamic routes)
- No `NEXT_PUBLIC_*` env vars required — all data is static
- `postcss.config.mjs` uses ESM `export default` (required by Next.js 14)
- No server-side API routes

## Git Remotes

| Remote  | Repo                                              | Purpose              |
|---------|---------------------------------------------------|----------------------|
| origin  | thela-media-group/NWS-Custom-Homes-and-Remodeling | original source repo |
| june15  | cesar-thela-media/NWS-rework-june15               | active deploy target |
