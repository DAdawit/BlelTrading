# Blel Export Website — Project Documentation

> A technical and functional reference for the **Blel** bilingual (English/Arabic)
> export-company website.
>
> **Prepared:** 25 October 2026  
> **Code snapshot:** `blel-nextjs2/` (the maintained copy)  
> **Verification:** `npm install` + `npm run build` completed successfully; findings below were checked against the generated static output.  
> **Source material:** `docs/BLEL Company Profile.pdf` (12-page company deck), reviewed for this revision.  
> **Brand assets:** `blel-nextjs2/public/logo1.png`, `logo2.png`, `favicon.png`.

---

## Table of contents

1. [Executive summary](#1-executive-summary)
2. [Repository layout — two copies exist](#2-repository-layout--two-copies-exist)
3. [Technology stack](#3-technology-stack)
4. [Configuration](#4-configuration)
5. [Architecture](#5-architecture)
6. [Routes and page composition](#6-routes-and-page-composition)
7. [Component catalog](#7-component-catalog)
8. [Data layer](#8-data-layer)
9. [Internationalization and RTL](#9-internationalization-and-rtl)
10. [Design system](#10-design-system)
11. [Key user flows](#11-key-user-flows)
12. [State management](#12-state-management)
13. [Running, building, and deploying](#13-running-building-and-deploying)
14. [Findings: risks, gaps, and technical debt](#14-findings-risks-gaps-and-technical-debt)
15. [Recommended roadmap](#15-recommended-roadmap)
16. [Appendix](#16-appendix)

---

## 1. Executive summary

Blel is a **marketing and product-catalog website** for an Ethiopian agricultural
export company. It presents the company, a 15-product bilingual catalog, a photo/video
gallery, and a request-a-quotation flow. It is built as a **Next.js 14 App Router**
application in plain JavaScript (no TypeScript) and is configured for **static export**
(`output: "export"`), so it can be hosted on any CDN or static host.

The site is **data-driven**: almost all copy, product data, and gallery data live in
plain JavaScript modules rather than being hardcoded in components. Language is held in
a **Zustand** store and persisted to `localStorage`; there are no localized URLs.

### At a glance

| Item | Value |
|---|---|
| Project name (package) | `blel-export-website` v1.0.0 (private) |
| Company | BLEL Trading PLC (brand: BLEL / Blel Trading) |
| Company profile | `docs/BLEL Company Profile.pdf` — 12 pages, 1440×810 (16:9) |
| Framework | Next.js 14.2.35, React 18.3.1, App Router |
| Language | JavaScript / JSX (no TypeScript) |
| Styling | Tailwind CSS 3.4 + custom CSS design system |
| State | Zustand 4 (client-side, persisted language) |
| UI primitives | Radix Select (shadcn-style wrapper), Lucide icons |
| Animation | CSS transitions + IntersectionObserver, `framer-motion` for the loading screen |
| Icons | Font Awesome 6.5.1 via CDN (Lucide only inside `ui/select.jsx`) |
| Languages | English (`en`, LTR) and Arabic (`ar`, RTL) |
| Public routes | 6 (`/`, `/about`, `/products`, `/products/[id]`, `/gallery`, `/contact`) |
| Product pages | 15, statically generated |
| Catalog | 15 products across 6 categories (6 featured) |
| Gallery | 17 items (15 images, 2 YouTube videos) |
| Source files | 62 (8 app, 48 components, 4 lib, 1 store, 1 content file) |
| Code size | ~3,775 JS/JSX lines + 482 CSS lines |
| Backend | None (contact form is front-end only) |
| Tests / CI | None |
| Git state | Remote configured (`github.com/DAdawit/BlelTrading`), no commits yet |
| Verified build | 87.4 kB shared First Load JS; routes 102–121 kB |

### What the site does

- Tells the company story, mission, vision, values, team, markets, and export process.
- Lets visitors browse, search, and filter a bilingual product catalog.
- Provides a detail page per product with specs, pricing, discount display, and an
  “Order Now” link that pre-fills the contact form.
- Shows a filterable image/video gallery with a lightbox and YouTube modal.
- Collects quotation inquiries through a contact form (currently simulated).
- Switches the entire UI between English and Arabic, including RTL layout.

### What the site is not

- There is **no backend, database, CMS, authentication, payment, or real order system**.
- The contact form **does not send anything**; it only flips to a success state.
- There is **no server-side language routing** (`/en`, `/ar`), no cookies, and no
  per-language metadata.
- There are **no tests, no CI pipeline, no ESLint configuration file**, and no
  committed source history.

### Overall health

The codebase is clean, small, and consistently structured. Components are small and
readable, data is centralized, and the build passes. The biggest structural risk is
that the page body is **not present in the prerendered HTML** because of the
`LocaleReadyGate` loading screen — a significant SEO/no-JS trade-off discussed in
[§14](#14-findings-risks-gaps-and-technical-debt).

### 1.1 Source material in `docs/`

| File | Details |
|---|---|
| `docs/BLEL Company Profile.pdf` | 12-page company profile deck, 1440×810 px (16:9), ~5.5 MB. PDF metadata title: “Clean and Minimal Company Profile Presentation” |
| `docs/PROJECT_DOCUMENTATION.md` | Copy of this document |
| `blel-nextjs2/public/logo1.png` | 1654×1865 PNG with alpha — stacked logo **with** gold script tagline (footer) |
| `blel-nextjs2/public/logo2.png` | 1385×1385 PNG with alpha — stacked logo **without** tagline (navbar, loading screen) |
| `blel-nextjs2/public/favicon.png` | 1172×1172 PNG with alpha, ~206 KB, referenced as the site icon |

> There is **no standalone logo image file inside `docs/`**. The logo appears on pages 1
> and 12 of the PDF, and the same artwork is already shipped in `public/`. Page 11 of
> the deck is just “GET IN TOUCH” plus a QR code.

### 1.2 Verified company facts (from the profile)

| Fact | Value |
|---|---|
| Legal/brand name | **BLEL Trading PLC** / **BLEL TRADING** (QR card says “BLEL Import & Export”) |
| Tagline | *Excellence Without Compromise* |
| Founder & CEO | **Elias Mendaye** |
| Location | Addis Ababa, Ethiopia (no street address in the deck) |
| Phone | `0928761835`, `0922858489` (from the QR MECARD; international form would be `+251 928 761 835` / `+251 922 858 489` — confirm before publishing) |
| Email | `blel.import.export@gmail.com` |
| Product focus | Green mung beans, chickpeas, sesame seeds, lentils; “In addition to grains we export salt and Cattle.” |
| Core values | Integrity, Excellence, Quality, Reliability, Customer Focus, Sustainability |
| Process | Sourcing → Quality Inspection → Cleaning & Grading → Packaging → Export Documentation → Global Delivery |
| Website / social handles | **Not stated in the deck** (the QR is a contact card, not a URL) |
| Countries served / volume / years / team | **Not stated in the deck** |

Sourcing regions named in the profile:

| Crop | Regions |
|---|---|
| Chickpeas | Amhara: North Gondar, North Shewa, South Gonder, South Wollo, North Wollo |
| Green mung beans | Amhara: North Shewa, Shewa Robit; Benishangul-Gumuz; Oromia: Omo River Valley |
| Sesame seed | Tigray: Humera, Welkait; Amhara: Metema, Tegedie, Mirab Armachiho, Tachi Armachiho |
| Lentils | Amhara: North Gondar, Bahir; Oromia: East Shewa, TArsi, West Arsi |

The QR code on page 11 was decoded for this review. Its payload is a **MECARD contact
card**:

```
MECARD:N:BLEL Import & Export;TEL:0928761835;TEL:0922858489;
EMAIL:blel.import.export@gmail.com;ADR:Addis Ababa,Ethiopia;;
```

### 1.3 Profile ↔ implemented site

| Area | Company profile | Implemented site | Verdict |
|---|---|---|---|
| Brand / logo | Navy + gold “B” monogram, BL EL wordmark, TRADING between rules, tagline | Same artwork in `logo1`/`logo2`; navy/gold/beige palette; serif display + wide tracking | ✅ Aligned |
| Founder | Elias Mendaye, Founder & CEO | Same name, role, and message | ✅ Aligned |
| About copy | Grains/pulses exporter; portfolio includes mung beans, chickpeas, sesame, lentils, salt, cattle | `about.hero.description` matches the deck almost verbatim | ✅ Aligned (copy) |
| Mission / vision | Two paragraphs each | Expanded versions, same substance | ✅ Aligned |
| Values / Why Us / Process / Thank-you | 6 values, 6 differentiators, 6 process steps, closing message | Same items, translated | ✅ Aligned |
| Catalog | 4 core crops + salt + cattle | 15 SKUs across 6 categories; **no lentils, salt, or cattle**; coffee, spices, and herbs dominate | ⚠️ Diverges |
| Origins | Detailed regional sourcing for each crop | Every product shows the same generic “Addis Ababa, Ethiopia” origin | ❌ Not represented |
| Contact | Phones, Gmail, Addis Ababa (QR) | `+251 911 000 000`, `export@blel.com`, “Bole Road” | ❌ Placeholders |
| Team | Founder only | 4 named people with stock portraits | ⚠️ Unverified |
| Testimonials | None | 3 named buyer quotes | ⚠️ Unverified |
| Statistics | None | 20+ countries, 150+ products, 10+ years, 500+ partner farmers | ⚠️ Unverified |
| History | None | “Since 2015” + a detailed origin story | ⚠️ Unverified |
| Social links | None | 4 icons with `href="#"` | ⚠️ Placeholder |
| Name | BLEL Trading PLC / QR: BLEL Import & Export | “Blel Trading” | ⚠️ Confirm naming |

**Reading of this:** the site inherits the deck’s **brand, voice, values, process, and
about/mission/vision copy** faithfully, but it goes beyond the deck for the **catalog,
team, testimonials, statistics, history, and contact details**. Those additions are
either unverified or placeholder content and should be confirmed by the company before
launch.

---

## 2. Repository layout — two copies exist

The workspace contains **two copies of the project**:

```
blel-nextjs2/                      ← workspace root (this folder)
├── .next/                         ← partial build output (no BUILD_ID)
├── node_modules/                  ← older dependency install
├── app/ components/ lib/ ...      ← STALE copy of the source
├── package.json                   ← no framer-motion, no output: export
└── blel-nextjs2/                  ← MAINTAINED copy (git repository)
    ├── .git/                      ← remote: github.com/DAdawit/BlelTrading
    ├── app/ components/ lib/ ...
    ├── node_modules/              ← installed during this review
    ├── .next/                     ← successful build output
    └── package.json               ← framer-motion, output: export
```

**Work in `blel-nextjs2/`.** The outer copy is older and diverged; its `.next/` lacks a
`BUILD_ID`, which suggests an interrupted or failed build. The differences that matter:

| Area | Outer copy (stale) | `blel-nextjs2/` (current) |
|---|---|---|
| Rendering | Default Next server | `output: "export"` static export |
| Images | Optimized | `unoptimized: true` |
| Locale handling | `LocalePathSync` (attributes only) | `LocaleReadyGate` + full-screen skeleton |
| Loading screen | None | `PageSkeleton` with `framer-motion` |
| Dependencies | No `framer-motion` | `framer-motion@12.43.0` |
| Content file | ~386 lines | ~629 lines (expanded page copy) |
| CSS | ~373 lines | ~482 lines (skeleton styles) |
| Public assets | `logo1.png` only | `logo1.png`, `logo2.png`, `favicon.png` |
| Catalog/gallery data | Slightly different | Current |
| Product card / video modal | Simpler | Added detail link, YouTube support, loading state |

> **Recommendation:** Keep one copy. Either move `blel-nextjs2/` up to the workspace
> root or delete the outer duplicate. Running both risks editing and deploying the
> wrong version.

### Git

- Branch `main` exists but has **zero commits** — every file is untracked.
- Remote `origin` is set to `https://github.com/DAdawit/BlelTrading.git`.
- `.gitignore` contains only `.next` and `node_modules`; `out/` (the static export
  directory) is **not ignored**.

---

## 3. Technology stack

### Runtime dependencies

| Package | Version (installed) | Used for |
|---|---|---|
| `next` | 14.2.35 | Framework, App Router, static export, fonts, images |
| `react` / `react-dom` | 18.3.1 | UI runtime |
| `zustand` | 4.5.2 | Global language store, persisted to `localStorage` |
| `@radix-ui/react-select` | 2.1.1 | Accessible dropdown behind the language switcher |
| `class-variance-authority` | 0.7.0 | **Installed but unused** |
| `clsx` + `tailwind-merge` | 2.1.1 / 2.6.1 | `cn()` class-name merge helper |
| `lucide-react` | 0.383.0 | Check/chevron icons inside `ui/select.jsx` |
| `framer-motion` | 12.43.0 | Logo/strapline animation in `PageSkeleton` only |

### Development dependencies

`tailwindcss` 3.4, `postcss`, `autoprefixer`, `tailwindcss-animate`, `eslint` 8,
`eslint-config-next` 14.

### Scripts

```json
"dev":   "next dev",
"build": "next build",
"start": "next start",
"lint":  "next lint"
```

`build` emits the static site to `out/` because of `output: "export"`. **`next start`
is not compatible with static export** (see [§13](#13-running-building-and-deploying)).

---

## 4. Configuration

### `next.config.js`

```js
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};
```

- `output: "export"` → fully static HTML/CSS/JS in `out/`; no Node server, no API routes.
- `images.unoptimized: true` → Next Image still lays out images but does **not**
  optimize/resize them. `remotePatterns` is effectively redundant in this mode.
- No `basePath`, `trailingSlash`, `i18n`, redirects, headers, or environment variables.

### `jsconfig.json`

```json
{ "compilerOptions": { "baseUrl": ".", "paths": { "@/*": ["./*"] } } }
```

All imports use the `@/` alias (`@/components/...`, `@/lib/...`, `@/Store/...`).

### `tailwind.config.js`

- Scans `./app/**/*.{js,jsx}` and `./components/**/*.{js,jsx}`.
- Extends brand colors (`navy`, `gold`, `beige`, `ink`), shadcn semantic tokens, radius,
  and three font families.
- Plugin: `tailwindcss-animate` (used by Radix Select animations).

### `postcss.config.js`

Standard Tailwind + Autoprefixer setup.

### Missing configuration

- **No `.eslintrc*` file.** `npm run lint` interactively asks how to configure ESLint,
  which blocks CI. The build itself does not run ESLint.
- **No `.prettierrc`**, no EditorConfig, no type checking.
- **No `app/not-found.jsx`**, `loading.jsx`, or `error.jsx` (the default Next 404 page is
  used).

---

## 5. Architecture

### Rendering model

```
┌────────────────────────────────────────────────────────────────────┐
│ app/layout.jsx  (Server Component)                                 │
│  <html lang="en" dir="ltr">                                        │
│    fonts (next/font), Font Awesome CDN link                        │
│    <body>                                                          │
│      <LocaleReadyGate>        ← client component                   │
│        <Navbar />             ← client                             │
│        <main>{children}</main>← page (server) + client sections     │
│        <Footer />             ← client                             │
│      </LocaleReadyGate>                                            │
│      <BackToTop />            ← client                             │
│    </body>                                                         │
│  </html>                                                           │
└────────────────────────────────────────────────────────────────────┘
```

At build/prerender time:

1. Page files (`app/**/page.jsx`) are **Server Components**. They import metadata and
   compose client section components.
2. `LocaleReadyGate` renders with `isReady = false`, so the server emits **only the
   skeleton** — Navbar, `<main>`, and Footer are not in the HTML body.
3. On the client, Zustand hydrates, the gate sets `<html lang/dir>`, waits at least
   **1 second**, then renders the real shell and page content.
4. Client-side navigation between pages does **not** re-show the skeleton (the gate
   lives in the layout and stays mounted).

### Why nearly everything is a client component

Language lives in a client store, and every visible string depends on it. As a result,
**47 of 48 components declare `"use client"`**. Only `GalleryGrid` is a server
component (it just maps items). Page files remain server components so that
`export const metadata` / `generateMetadata` continue to work.

The README describes this split correctly: hero sections were extracted into small
client components so metadata can still be exported from the server page.

### Consequences of static export

| Works | Does not work |
|---|---|
| Static pages, client interactivity | API routes / route handlers |
| `generateStaticParams` for `/products/[id]` | Server actions against a local server |
| Client-side query params (`useSearchParams` in Suspense) | Image optimization (disabled) |
| `next/font` self-hosted fonts | `next start` |
| Metadata per page (English) | Per-request/localized metadata |

### Data flow

```
utils/data.js ──► content/ui nodes ──► languageTranslate(language, node) ──► JSX
lib/data/products.js ──► product objects ──► ProductCard / Detail / Explorer
lib/data/gallery.js  ──► gallery items   ──► GalleryExplorer / Grid / Modals
Store/useAppStore.js ──► language ──► every translated component
```

---

## 6. Routes and page composition

| Route | File | Rendering | Metadata | Sections (in order) |
|---|---|---|---|---|
| `/` | `app/page.jsx` | Static | Inherited from layout | Hero, WhyChooseUs, FeaturedProducts, Categories, CompanyHighlights, GalleryPreview, BusinessProcess, Testimonials, CtaBanner |
| `/about` | `app/about/page.jsx` | Static | Page-specific | AboutHero, AboutStory, FounderMessage, MissionVision, CoreValues, AboutProcess, WhyChooseUsAbout, ExportMarketsStats, TeamSection, CtaBanner |
| `/products` | `app/products/page.jsx` | Static | Page-specific | ProductsHero, ProductsExplorer (search + filters + grid), CtaBanner |
| `/products/[id]` | `app/products/[id]/page.jsx` | SSG (15 paths) | `generateMetadata` | ProductDetailView (hero, image, overview, specs, quote card) |
| `/gallery` | `app/gallery/page.jsx` | Static | Page-specific | GalleryHero, GalleryExplorer (tabs, grid, lightbox, video modal) |
| `/contact` | `app/contact/page.jsx` | Static | Page-specific | ContactHero, ContactInfoStrip, form + map (in `Suspense`), ThankYou |
| `404` | default Next page | Static | — | Default Next.js not-found |

### Metadata details

- Layout title: `Blel | Ethiopian Export Company`; theme color `#0b1726`; icon
  `/favicon.png`.
- Each inner page hardcodes an English title ending in `| Blel Export Company`.
- Product pages use `product.name.en` and `product.description.en`, because metadata is
  generated before the client language store exists.
- **No** canonical URLs, Open Graph/Twitter tags, `metadataBase`, `sitemap.xml`,
  `robots.txt`, or structured data (JSON-LD).

### 404 behavior

Unknown product IDs hit `notFound()`. In a static export, the host must serve
`404.html` for unmatched paths.

---

## 7. Component catalog

All components live in `components/`. 47 of 48 are client components.

### Layout (`components/layout/`)

| Component | Responsibility |
|---|---|
| `Navbar.jsx` | Fixed header, logo (`/logo2.png`), desktop nav, active-link underline, language switcher, Contact CTA, mobile menu (closes on route change), scroll shadow |
| `Footer.jsx` | Logo (`/logo1.png`), company description, motto, social icons (placeholder `href="#"`), quick links, category list, contact details, copyright |
| `BackToTop.jsx` | Fixed bottom-right button; appears after 500 px scroll |
| `LanguageSwitcher.jsx` | Radix `Select` bound to Zustand; writes `language` |
| `LocaleReadyGate.jsx` | Blocks first render behind `PageSkeleton`, syncs `<html lang/dir>` |

### Motion (`components/motion/`)

| Component | Responsibility |
|---|---|
| `Reveal.jsx` | Fade-up on scroll via `IntersectionObserver` (threshold 0.15); `delay` in 80 ms steps; supports `as` for semantic tags |

### Shared (`components/shared/`)

| Component | Responsibility |
|---|---|
| `CtaBanner.jsx` | Reusable dark CTA with title/subtitle nodes and configurable links/labels |
| `ProcessTimeline.jsx` | Six-step export process from `content.commone.processSteps`; arrows flip in Arabic |
| `PageSkeleton.jsx` | Full-screen gold loading screen with logo, motto, glow, `framer-motion` entrance |

### Home (`components/home/`)

`Hero` (full-screen coffee image, animated route line, stats), `WhyChooseUs` (6 reason
cards), `FeaturedProducts` (6 featured cards), `Categories` (6 image tiles),
`CompanyHighlights` (mission/vision/values + photo), `GalleryPreview` (4 images),
`BusinessProcess` (timeline), `Testimonials` (3 quotes).

### About (`components/about/`)

`AboutHero`, `AboutStory`, `FounderMessage` (photo + long message), `MissionVision`,
`CoreValues` (6 pills), `AboutProcess`, `WhyChooseUsAbout` (6 glass cards),
`ExportMarketsStats` (5 markets + 4 stats), `TeamSection` (4 people).

### Products (`components/products/`)

| Component | Responsibility |
|---|---|
| `ProductsHero.jsx` | Catalog page hero |
| `ProductsExplorer.jsx` | Owns search term + active category; filters catalog; empty state |
| `ProductSearchBar.jsx` | Controlled search input (name or product code) |
| `CategoryFilterBar.jsx` | “All” + six category pills |
| `ProductCard.jsx` | Manifest-styled card; image/name/description link to detail; separate Order Now link; discount badge |
| `ProductDetailView.jsx` | Full detail layout with sticky image, specs, quotation card, order link |

### Gallery (`components/gallery/`)

`GalleryHero`, `GalleryExplorer` (tab + modal state), `GalleryTabs`, `GalleryGrid`,
`GalleryImageItem`, `GalleryVideoItem`, `Lightbox` (Escape/backdrop close, scroll lock),
`VideoModal` (YouTube ID parsing, autoplay embed, loading spinner; falls back to
`<video>` for direct files).

### Contact (`components/contact/`)

`ContactHero`, `ContactInfoStrip` (phone/email/address), `ContactPageClient` (reads query
params), `OrderSummary` (product/code/price/discount), `ContactForm` (fields + hidden
order context + fake success state), `MapCard` (Google Maps iframe + office hours),
`ThankYou`.

### UI (`components/ui/`)

`select.jsx` — a shadcn-style wrapper around Radix Select with Lucide icons and `cn()`.
Only consumed by the language switcher.

---

## 8. Data layer

### 8.1 `utils/data.js` — the content file (~629 lines)

Two exports plus a helper:

| Export | Shape | Lookup |
|---|---|---|
| `ui` | Short strings keyed by name, e.g. `orderNow: { en, ar }` | `languageTranslate(lang, "orderNow")` |
| `content` | Nested page/section copy, e.g. `pages.home.hero.title` | `languageTranslate(lang, node)` |
| `languageTranslate(lang, keyOrNode)` | Resolver | Accepts a `ui` key **or** a `{en, ar}` node |
| `LANGUAGES` | `[{ value: "en", dir: "ltr" }, { value: "ar", dir: "rtl" }]` | **Exported but unused** |

Resolution order: `node[lang]` → `node.en` → `""`. This guarantees no `undefined` is
rendered when a translation is missing.

Content groups:

- `ui` — navigation, buttons, forms, product/detail labels, footer, categories.
- `content.commone` — company info, office hours, 6 process steps, founder message.
  (The key is spelled `commone`; it is used consistently, but looks like a typo.)
- `content.pages.home` — hero + stats, 6 reasons, section headings, 3 pillars,
  3 testimonials, CTA.
- `content.pages.about` — hero, story, mission, vision, 6 values, 6 differentiators,
  markets + 4 stats, 4 team members, CTA.
- `content.pages.products`, `.gallery`, `.contact` — page copy, form labels, thank-you.

Arabic copy is formal Modern Standard Arabic and is explicitly marked in comments/README
as a first pass needing native proofreading.

### 8.2 Product catalog — `lib/data/products.js`

15 products. Schema:

```js
{
  id: 1,
  name: { en, ar },
  product_code: "BL-CF-001",
  category: "Coffee",        // machine key, never translated
  description: { en, ar },
  price: 6.8,                // USD per kg
  discount: 0,               // percent
  image: "https://images.unsplash.com/..."
}
```

| # | Product | Code | Category | List | Disc. | Final |
|---|---|---|---|---|---|---|
| 1 | Yirgacheffe Arabica Coffee | BL-CF-001 | Coffee | $6.80 | — | $6.80 |
| 2 | Sidamo Natural Coffee | BL-CF-002 | Coffee | $6.20 | 10% | $5.58 |
| 3 | White Sesame Seeds | BL-OS-011 | Oil Seeds | $1.90 | — | $1.90 |
| 4 | Red Kidney Beans | BL-PL-021 | Pulses | $1.35 | — | $1.35 |
| 5 | Berbere Spice Blend | BL-SP-031 | Spices | $4.40 | 15% | $3.74 |
| 6 | White Teff Grain | BL-GR-041 | Grains | $2.10 | — | $2.10 |
| 7 | Dried Korarima | BL-HB-051 | Herbs | $9.50 | — | $9.50 |
| 8 | Chickpeas — Kabuli | BL-PL-022 | Pulses | $1.60 | — | $1.60 |
| 9 | Niger Seed (Nug) | BL-OS-012 | Oil Seeds | $1.75 | 5% | $1.66 |
| 10 | Limu Arabica Coffee | BL-CF-003 | Coffee | $5.90 | — | $5.90 |
| 11 | Green Mung Beans | BL-PL-023 | Pulses | $1.45 | — | $1.45 |
| 12 | Ground Turmeric | BL-SP-032 | Spices | $3.10 | 8% | $2.85 |
| 13 | Red Sorghum | BL-GR-042 | Grains | $0.95 | — | $0.95 |
| 14 | Dried Rue (Tenadam) | BL-HB-052 | Herbs | $7.20 | — | $7.20 |
| 15 | Whole Cumin Seed | BL-SP-033 | Spices | $4.00 | — | $4.00 |

Category distribution: Coffee 3, Pulses 3, Spices 3, Oil Seeds 2, Grains 2, Herbs 2.

Profile coverage: chickpeas ✅ (#8), green mung beans ✅ (#11), sesame ✅ (#3),
**lentils ❌**, **salt ❌**, **cattle ❌**. Coffee, spices, herbs, teff, sorghum, kidney
beans, and turmeric are site additions not named in the profile. The profile’s detailed
regional origins are not stored per product; `ui.originValue` returns the same
“Addis Ababa, Ethiopia” for every SKU.

Additional exports:

- `FEATURED_IDS = [1, 2, 3, 5, 6, 9]` — drives the home page “Featured Lots”.
- `CATEGORIES` — ordered machine keys: Coffee, Pulses, Oil Seeds, Spices, Grains, Herbs.
- `CATEGORY_UI_KEY` — maps machine keys to `ui` translation keys.

### 8.3 Gallery — `lib/data/gallery.js`

17 items: 15 images + 2 YouTube videos.

Schema:

```js
{
  id: 1,
  type: "image" | "video",
  category: "Coffee",
  src: "https://...",          // image URL or YouTube watch URL
  poster: "https://...",       // video only
  caption: { en, ar }
}
```

Category counts: Coffee 5, Pulses 3, Spices 3, Oil Seeds 2, Grains 1, Herbs 1, Videos 2.

`GALLERY_TABS` = `All, Coffee, Pulses, Oil Seeds, Spices, Grains, Herbs, Videos`.
`GALLERY_CATEGORY_UI_KEY` reuses the product category strings plus `all`/`categoryVideos`.

### 8.4 Helpers

```js
// lib/format.js
fmtPrice(n)            → "$" + n.toFixed(2)
discountedPrice(p)     → p.price - (p.price * p.discount / 100)

// lib/utils.js
cn(...inputs)          → twMerge(clsx(inputs))
```

- Prices are treated as **USD per kg**; the unit label comes from `ui.perUnit`
  (`kg` / `كجم`).
- No currency selection or locale-aware number formatting.

### 8.5 Unsplash images

All product, gallery, founder, team, hero, and category photos are remote Unsplash URLs,
hand-sized via query parameters (`w=...`, `q=80`, `auto=format`). Several images are
reused across sections (e.g., the same coffee photo appears in the hero, gallery,
categories, and story).

---

## 9. Internationalization and RTL

### 9.1 The mechanism

```
LanguageSwitcher (Radix Select)
        │ onValueChange
        ▼
Zustand store: setLanguage(lang)
        │  ├─ set({ language })        → re-renders subscribers
        │  └─ localStorage["language"] → persisted across reloads
        ▼
languageTranslate(language, node) → "…" 
        ▼
<html lang="…" dir="ltr|rtl">  (LocaleReadyGate effects)
```

- **No URL change.** The site stays at `/products`, `/about`, etc. for both languages.
- **No cookie.** The server never knows the visitor’s language.
- Store initial value: read `localStorage` at module initialization on the client;
  `"en"` on the server.
- `LocaleReadyGate` sets `document.documentElement.lang` and `dir` immediately on mount
  and again whenever the language changes.

### 9.2 First-load sequence and the loading gate

1. Server/prerender emits `<html lang="en" dir="ltr">` + **skeleton only**.
2. Client hydrates; Zustand reads the saved language (e.g., `"ar"`).
3. Effect sets `lang="ar" dir="rtl"`.
4. After double `requestAnimationFrame` **and a minimum of 1,000 ms**, `isReady` becomes
   `true` and the real Navbar/main/Footer appear.

`MIN_SKELETON_MS` is hardcoded in `components/layout/LocaleReadyGate.jsx`.

### 9.3 RTL handling

- `[dir="rtl"] .font-mono, [dir="rtl"] .manifest-code` are forced to `direction: ltr`
  with `unicode-bidi: isolate`, so lot codes and figures stay readable.
- Logical utilities are used where it matters: `ps-*`, `border-s-*`, `ms-*`, `start/end`
  (MissionVision, CompanyHighlights badge, ProductDetail arrows).
- Many layout utilities remain physical (`left-`, `right-`, `ml-`, `mr-`), so some
  decorative elements do not mirror. The back-to-top button, modal close buttons, and
  search icon are deliberately fixed to a corner.
- Directional icons are swapped conditionally (`fa-arrow-left` vs `fa-arrow-right`).

### 9.4 Typography gap

`next/font` loads **Fraunces, Inter, and IBM Plex Mono with `subsets: ["latin"]` only**.
Arabic text therefore falls back to the browser/system Arabic font instead of the brand
typefaces. No Arabic webfont is loaded.

### 9.5 SEO implications

- Metadata is always English, generated server-side before the store hydrates.
- `<html lang>` is English in the served HTML, even for returning Arabic visitors.
- There are no `hreflang` alternates and no localized URLs.
- Combined with the skeleton-only body (see §14), crawlers that do not execute
  JavaScript receive no page copy.

### 9.6 Adding a third language

1. Add the code to the store’s allowed values (currently implicit).
2. Add `{ en, ar, xx }` to every node in `utils/data.js`, `lib/data/products.js`, and
   `lib/data/gallery.js` (or introduce a fallback strategy).
3. Add `{ value: "xx", dir: "ltr"|"rtl" }` to `LANGUAGES` (currently unused) or drive
   direction from the store.
4. Add an option to `LanguageSwitcher`.
5. Update `LocaleReadyGate`’s direction check (currently `language === "ar"`).

There is no tooling to detect missing translations.

---

## 10. Design system

### 10.1 Concept

The visual identity is built around the **“Export Manifest”** motif: dashed tear lines,
rotated ink stamps, monospaced lot codes, stitched jute-sack textures, and paper-ticket
cards. It is meant to evoke the documentation trail (waybills, customs stamps, grading
sheets) that follows every shipment from Addis Ababa to port.

### 10.2 Color palette

| Token | Hex | Role |
|---|---|---|
| `navy-900` | `#0b1726` | Primary brand / dark surfaces |
| `navy-950` | `#070e17` | Deepest background |
| `navy-800/700/600` | `#13233a` / `#1b3350` / `#294a6e` | Depth, hovers |
| `gold-500` | `#b8924a` | Accent (buttons, stamps) |
| `gold-600/400/100` | `#9c7a3a` / `#c9a868` / `#ecdfc4` | Accent variants |
| `beige-50` | `#fbf7ee` | Page background |
| `beige-100/200` | `#f4ecd9` / `#e9dcbf` | Section/alt surfaces, borders |
| `ink` | `#101a28` | Main text |
| `--ink-soft` | `#56606e` | Secondary text |

`app/globals.css` mirrors these as CSS variables and maps shadcn semantic tokens
(`--background`, `--popover`, `--border`, `--ring`, …) onto the brand palette.

### 10.3 Typography

| Family | CSS variable | Usage |
|---|---|---|
| Fraunces | `--font-fraunces` | Display headings (`font-display`) |
| Inter | `--font-inter` | Body (`font-body`) |
| IBM Plex Mono | `--font-plex-mono` | Codes, eyebrows, stamps (`font-mono`) |

Loaded with `next/font/google` (self-hosted at build time, `display: swap`).

### 10.4 Custom classes in `app/globals.css`

| Class | Purpose |
|---|---|
| `.texture-weave` / `.texture-weave-dark` | Woven jute pattern overlay |
| `.nav-shell` / `.nav-link` | Sticky nav background, scroll shadow, animated underline |
| `.btn`, `.btn-gold`, `.btn-outline`, `.btn-dark` | Pill buttons with lift/shadow transitions |
| `.stamp` | Rotated double-border ink stamp |
| `.manifest-card` / `.manifest-tear` | Ticket card with hover lift and punched tear notches |
| `.manifest-code` | Monospace lot-code letter spacing |
| `.route-line` | Animated dotted export route (hero SVG) |
| `.reveal` / `.is-visible` | Scroll-reveal transitions |
| `.glass` | Frosted dark card |
| `.section-eyebrow` | Small uppercase gold label |
| `.badge-discount` | Rotated discount badge |
| `.back-to-top` | Visibility transition |
| `.timeline-track` / `.timeline-track-v` | Dashed process connectors |
| `.tab-pill` / `.is-active` | Filter pills |
| `.img-zoom` | Hover image scale |
| `.order-summary` | Dashed gold ticket for order context |
| `.skeleton-*` | Loading-screen shimmer, glow, logo fade |

Accessibility touches: visible `:focus-visible` outline in gold, and a
`prefers-reduced-motion` block that disables animations/transitions.

### 10.5 Icons and images

- Font Awesome 6.5.1 is loaded from cdnjs in `app/layout.jsx` and used throughout.
- Lucide is bundled only for the Select arrows/check.
- Every image goes through `next/image`; with `unoptimized: true`, optimization is
  delegated to the source URL (Unsplash).

### 10.6 Logo assets

The logo in the PDF and in `public/` is the same artwork: a navy-to-gold gradient
monogram (“B”), the **BL EL** wordmark, “TRADING” between thin rules, and an optional
gold script tagline.

| Asset | Dimensions | Used in | Notes |
|---|---|---|---|
| `logo1.png` | 1654×1865 | Footer (`h-24`) | Includes the script tagline |
| `logo2.png` | 1385×1385 | Navbar (`h-14`), loading screen (`h-48`) | No tagline; more compact |
| `favicon.png` | 1172×1172 | `<link rel="icon">` via metadata | 206 KB — far larger than needed |

The navbar and footer surfaces are deliberately light (beige/white) so the navy/gold
logo stays legible without inverting the artwork. For production, generate 1×/2× WebP or
AVIF variants at the real display sizes and a 32/180 px favicon; the current PNGs are
much larger than their rendered size.

---

## 11. Key user flows

### 11.1 Switch language

1. User opens the Select in the navbar.
2. `setLanguage("ar")` updates Zustand and writes `localStorage`.
3. Every subscribed component re-renders with Arabic nodes.
4. Effects set `<html lang="ar" dir="rtl">`; logical spacing and directional icons flip.
5. On the next full load, the saved language is restored and the skeleton covers the
   switch before content appears.

### 11.2 Browse, search, and filter products

1. `/products` renders `ProductsHero`, then `ProductsExplorer`.
2. `ProductsExplorer` holds `searchTerm` and `activeCategory`.
3. `useMemo` filters by:
   - category equality (or “All”), and
   - case-insensitive substring match on the **localized name** or `product_code`.
4. Results render as `ProductCard`s; no matches show an icon and a translated message.
5. Search/filter bar is sticky below the fixed navbar (`top-20`).

### 11.3 View a product

1. Card image/name links to `/products/{id}` (statically generated for all 15).
2. The server page finds the product by `parseInt(params.id)`, returns `notFound()` if
   unknown, and renders `ProductDetailView`.
3. The client view shows:
   - category badge and lot code,
   - large sticky image with hover zoom,
   - overview/description,
   - Origin, Category, Product Code, Export Grade,
   - quotation card with list price, discount, final price, “Incoterms: FOB”,
   - “Order Now” link to the pre-filled contact form,
   - a translated back-to-catalog link.

### 11.4 Order / quote flow

```
ProductCard or ProductDetailView
   │  builds: /contact?product=<localized name>&code=<code>&price=<final>&discount=<%>
   ▼
ContactPageClient (useSearchParams, inside <Suspense>)
   ├─ OrderSummary (shown only when `product` exists)
   └─ ContactForm (hidden inputs carry the order context; subject pre-filled)
        │ submit
        ▼
   setIsSubmitted(true) → success card (no network request)
```

Notes:

- The product **name in the URL is localized**, so an Arabic order link contains Arabic
  text in the query string.
- `price` is a pre-computed string (`toFixed(2)`); the contact page does not re-validate
  it.
- Form fields: full name*, company, country*, email*, phone, subject, message*.
- Nothing is persisted or sent. `handleSubmit` is the integration point.

### 11.5 Gallery

1. `GalleryExplorer` holds `activeTab`, `lightboxItem`, `videoItem`.
2. Tabs filter by machine category; “All” shows everything.
3. Clicking an image opens `Lightbox` (scroll lock, Escape, backdrop click).
4. Clicking a video opens `VideoModal`: extracts the 11-character YouTube ID and renders
   an autoplay iframe with a loading spinner; direct video URLs fall back to `<video>`.

### 11.6 Navigation and page chrome

- Navbar is fixed, gains a shadow after 12 px of scroll, highlights the active route, and
  closes the mobile menu on route change.
- `BackToTop` appears after 500 px and smooth-scrolls to the top.
- Scroll-reveal sections use `Reveal` (IntersectionObserver, one-shot).

---

## 12. State management

`Store/useAppStore.js` is a single Zustand store:

```js
{
  language: "en",        // restored from localStorage on the client
  title: null,           // UNUSED
  setLanguage(lang),     // updates state + localStorage (SSR-safe try/catch)
  setNavTitle(title),    // UNUSED
  getLanguage(),         // UNUSED
}
```

- Persistence is manual (`localStorage.getItem/setItem`), not Zustand’s `persist`
  middleware.
- SSR guard returns `"en"` when `window` is unavailable.
- Only `language` and `setLanguage` are consumed.
- Local UI state (search, filters, modals, menu, form success) stays inside components;
  there is no server state or data fetching.

---

## 13. Running, building, and deploying

### 13.1 Run locally

```bash
cd blel-nextjs2
npm install
npm run dev          # http://localhost:3000
```

(Node modules were installed during this review; the outer copy’s `node_modules` lacks
`framer-motion`.)

### 13.2 Build

```bash
npm run build        # writes static site to out/
```

Verified output:

- Build succeeded; 15 product pages generated.
- Shared First Load JS: **87.4 kB**.
- Per-route First Load JS: `/` 121 kB, `/about` 116 kB, `/products` 119 kB,
  `/products/[id]` 118 kB, `/gallery` 108 kB, `/contact` 102 kB.
- Next reported 23 prerendered entries; `out/` contained 21 HTML files (5 content
  routes + 15 product pages + `404.html`).
- Build warning on every route:
  `Unsupported metadata themeColor is configured in metadata export… move it to viewport export`.

### 13.3 Preview / deploy

Because `output: "export"` is enabled:

- **Do not** use `npm start` / `next start` — it is not supported with static export.
- Serve `out/` with any static server or CDN:

  ```bash
  npx serve out
  ```

- Deploy targets: Netlify, Vercel (as static), Cloudflare Pages, GitHub Pages, S3 +
  CloudFront, Nginx, etc.
- SPA-style rewrites are **not** needed for the known routes, but the host should serve
  `404.html` for unknown paths (including unknown product IDs).
- If deploying under a sub-path, add `basePath`/`assetPrefix` and rebuild.

### 13.4 Linting

`npm run lint` currently **prompts interactively** to create an ESLint config because
none exists. Add `.eslintrc.json` (e.g., `{ "extends": "next/core-web-vitals" }`) before
relying on lint in CI.

### 13.5 Build environment

- `next/font/google` fetches font files at build time; offline builds can fail unless
  the font cache is warm.
- No environment variables are used.
- Node version is not pinned (no `.nvmrc` / `engines`).

---

## 14. Findings: risks, gaps, and technical debt

### 14.1 Critical / high

| # | Finding | Evidence | Impact | Recommendation |
|---|---|---|---|---|
| 1 | **Page content is absent from the prerendered HTML** | In `LocaleReadyGate`, `if (!isReady) return <PageSkeleton />`. Verified `out/index.html` body contains only the skeleton; no `<h1>`, nav, or footer | Non-JS crawlers/clients see no content; weakens SEO and resilience; blank page if JS fails | Render children always (optionally visually hidden behind the skeleton overlay) so HTML contains real content; or switch to cookie/URL-based locale so the server can render the right language |
| 2 | **Forced 1-second loading screen** | `MIN_SKELETON_MS = 1000` in `LocaleReadyGate` | Delays every full page load, causes layout shift (nav/footer absent → appear), hurts perceived performance and Core Web Vitals | Remove the artificial minimum; only block until locale is applied, or use a pre-paint inline script to set `lang/dir` |
| 3 | **Contact form has no backend** | `handleSubmit` only calls `setIsSubmitted(true)`; static export cannot host API routes | Inquiries are silently lost in production | Integrate a form service (Formspree, Basin, Netlify Forms), a serverless function, or remove `output: "export"` and add a route handler; include spam protection and a real success/error state |
| 4 | **No ESLint configuration** | No `.eslintrc*`; `next lint` prompts | CI cannot run lint; code-quality checks are manual | Add `next/core-web-vitals` config and a CI step |
| 5 | **Documentation is out of date** | `README.md` still describes `LocalePathSync`, says `logo2.png` is missing (it exists), and does not mention static export or `LocaleReadyGate` | Misleads maintainers and new contributors | Rewrite README to match `blel-nextjs2/` |
| 6 | **Two divergent copies, zero commits** | Outer workspace copy vs. nested repo; `git log` fails on an unborn `main` | High risk of editing/deploying the wrong version; no rollback history | Keep one copy, commit the current state, and push to `origin` |

### 14.2 Medium

| # | Finding | Impact | Recommendation |
|---|---|---|---|
| 7 | `themeColor` inside `metadata` | Deprecation warning on every route; may stop working in later Next versions | Move to `export const viewport = { themeColor: "#0b1726" }` |
| 8 | No Arabic webfont; fonts are `latin`-subset only | Arabic typography falls back to system fonts; brand voice breaks in Arabic | Add an Arabic family (e.g., IBM Plex Sans Arabic / Noto Kufi Arabic) with the `arabic` subset and apply it for `lang="ar"` |
| 9 | All content depends on client JS | 47/48 components are client components; no server-rendered copy | Accept as a trade-off or move locale to a cookie/URL and render translated content on the server |
| 10 | English-only metadata and no localized URLs | Arabic pages are not indexable as Arabic; no `hreflang` | Introduce `/en` + `/ar` routes or cookie-based locale with `generateMetadata` |
| 11 | Inconsistent product grade data | `ui.gradeValue` is always “Premium / Grade 1”, while Sidamo and Limu descriptions say Grade 2 | Add `grade`/`origin` fields to each product and render them per product |
| 12 | Images are unoptimized and heavy | `unoptimized: true`; remote Unsplash originals; hero at `w=2000` | Pre-optimize to AVIF/WebP, self-host, or use an export-compatible image optimizer; use responsive `srcset` |
| 13 | No Open Graph/Twitter tags, sitemap, robots, canonical, or JSON-LD | Weak social sharing and search appearance | Add `metadataBase`, OG images, `app/sitemap.js`, `app/robots.js`, Organization/Product JSON-LD |
| 14 | Modal accessibility is incomplete | No focus trap, initial focus, return focus, or `aria-labelledby`; close labels hardcoded English | Add a focus trap, label the dialog, restore focus on close, localize labels |
| 15 | Hardcoded bilingual string in `ProductCard` | `language === "ar" ? "التفاصيل" : "Details"` bypasses `utils/data.js` | Add `ui.details` and use `languageTranslate` |
| 16 | RTL is partially implemented with physical utilities | Some elements do not mirror (margins, borders, icon placement) | Prefer logical `ms/me/ps/pe/start/end` utilities throughout |
| 17 | `next start` is still exposed in scripts | Fails with static export | Replace with a static preview script (e.g., `serve out`) |
| 18 | `.gitignore` does not ignore `out/` | Build artifacts appear as untracked files | Add `out/` (and `.DS_Store`, local env files) |

### 14.3 Low / cleanup

| # | Finding | Notes |
|---|---|---|
| 19 | Unused Zustand fields | `title`, `setNavTitle`, `getLanguage` have no consumers |
| 20 | Unused exports/deps | `LANGUAGES` unused; `class-variance-authority` never imported |
| 21 | `commone` key spelling | Used consistently, but confusing; rename to `common` with a single refactor |
| 22 | Non-existent Tailwind classes | `min-w-25`, `sm:min-w-30` in `LanguageSwitcher` are not in the default scale and silently do nothing |
| 23 | Footer social links are placeholders | All `href="#"` |
| 24 | Footer categories are not links | Users expect them to filter `/products` |
| 25 | Duplicate stock imagery | The same Unsplash shots appear in hero, story, categories, and gallery |
| 26 | No custom 404 page | Default Next page; no brand styling or helpful links |
| 27 | No tests | No unit, integration, or E2E coverage |
| 28 | No analytics or consent handling | No tracking of quote conversions |
| 29 | Mobile menu has no Escape/outside-click close and does not lock scroll | Minor UX gap |
| 30 | Search matches only name/code, not description | Acceptable, but worth documenting |
| 31 | Prices are USD-only, not locale-formatted | No currency selector; `$` hardcoded in `fmtPrice` |
| 32 | Query-string price is trusted | A crafted URL can display an arbitrary “price”; harmless visually, but do not treat it as an order record |
| 33 | `font-mono` / `manifest-code` letter-spacing only | Class carries no color/size; relies on inline utilities |
| 34 | Font Awesome via CDN | Render-blocking third-party CSS; offline/CDN failure removes all icons. Consider self-hosting a subset or migrating to Lucide |
| 35 | No rate-limit/validation on form | HTML `required` only; no server-side validation (no server) |
| 36 | `generateMetadata` reads `params.id` with `parseInt` | `"1abc"` resolves to product 1; low risk |

### 14.4 Verified warnings and quirks

- Build warning: `Unsupported metadata themeColor…` (repeated per route).
- `npm run dev`/`build` work; `npm run lint` prompts for configuration.
- The skeleton’s `framer-motion` elements render with inline `opacity: 0` in the static
  HTML. If JS never runs, the logo and strapline remain invisible on a gold screen.
- Root workspace `.next/` has no `BUILD_ID` → incomplete build; do not deploy it.

### 14.5 Company-profile discrepancies

These were found by comparing the site with `docs/BLEL Company Profile.pdf` (§1.3).

| # | Finding | Evidence | Impact | Action |
|---|---|---|---|---|
| 37 | Contact details are placeholders and contradict the official profile | `companyInfo` in `utils/data.js`: `+251 911 000 000`, `export@blel.com`, “Bole Road”; profile QR: two mobile numbers, Gmail, “Addis Ababa” | Visitors cannot reach the company; looks unfinished | Replace with the verified details in §1.2 after confirming them; publish an international phone format |
| 38 | Catalog omits the profile’s core crops | Profile: chickpeas, mung beans, sesame, lentils, salt, cattle. Site: chickpeas/mung/sesame present, **no lentils, salt, or cattle**; coffee/spices/herbs dominate | The site tells a different story from the company deck | Add the missing lines or reframe the copy around the actual catalog; confirm whether coffee is a real export line |
| 39 | Team, testimonials, statistics, and history are not in the profile | 4 team members, 3 buyer quotes, 20+/150+/10+/500+ stats, “Since 2015” story | Credibility and legal risk if invented | Replace with approved facts/photos or remove until verified |
| 40 | Product origins are not used | Profile names detailed sourcing regions; site shows “Addis Ababa, Ethiopia” for every product | Loses the deck’s strongest traceability proof point | Add an `origin` (and per-product grade) field and render it |
| 41 | Company naming is inconsistent | “BLEL Trading PLC” (deck), “BLEL Import & Export” (QR), “Blel Trading” (site) | Brand/legal confusion | Confirm the registered name and use one public-facing form |
| 42 | Logo/favicon assets are oversized | `logo2.png` 1385², `logo1.png` 1654×1865, `favicon.png` 1172² / 206 KB | Slower first paint, unnecessary bytes | Resize and convert to WebP/AVIF; use a small multi-size favicon |

---

## 15. Recommended roadmap

### Phase 0 — Before launch (must fix)

1. **Make content crawlable.** Remove the gate’s “don’t render children” behavior.
   Either:
   - render `<Navbar/><main/><Footer/>` unconditionally and overlay the skeleton, or
   - read the locale from a cookie/URL on the server so the first HTML is correct.
2. **Remove the artificial 1 s minimum**; keep only the minimum needed to avoid a
   language flash.
3. **Wire the contact form** to a real endpoint/service and show success/error states.
4. **Consolidate the repository**: one copy, initial commit, push, update README.
5. **Add ESLint config** and a CI check; fix the `themeColor` warning.
6. **Replace placeholder content using the profile** (§1.2): real contact details,
   catalog scope and origins, verified team/testimonials/statistics (or remove them),
   real photography, real social links, and native-reviewed Arabic. Confirm the
   registered company name (§14.5 #41).

### Phase 1 — Quality and reach

7. Add Arabic typography and audit RTL spacing/alignment in every section.
8. Add OG/Twitter metadata, sitemap, robots, canonical URLs, and Organization/Product
   JSON-LD.
9. Improve image delivery (pre-optimized AVIF/WebP, correct sizes, lazy-loading below
   the fold).
10. Accessibility pass: focus traps and labels for modals, skip link, mobile-menu
    Escape/outside click, form error announcements.
11. Per-product origin/grade data; localize “Details” and other hardcoded strings.
12. Add a branded 404 page.
13. Replace/self-host icons to remove the Font Awesome CDN dependency.

### Phase 2 — Productization

14. Decide on a content strategy: a small CMS or MDX for copy, so marketing can edit
    without code.
15. Add localized routing (`/en`, `/ar`) + `hreflang` if Arabic SEO matters.
16. Add analytics, conversion tracking for quote submissions, and consent handling.
17. Add Playwright smoke tests (all routes, language switch, search, order flow, modals)
    and run them in CI.
18. Consider TypeScript or JSDoc typing for product/content schemas.
19. If a real ordering/quotation backend is required, reconsider static export vs. a
    server deployment.

---

## 16. Appendix

### A. File index (maintained copy)

```
app/
  layout.jsx                     root shell, fonts, metadata, gate
  globals.css                    design system + Tailwind layers
  page.jsx                       home composition
  about/page.jsx                 about composition + metadata
  products/page.jsx              catalog composition + metadata
  products/[id]/page.jsx         SSG product page + generateMetadata
  gallery/page.jsx               gallery composition + metadata
  contact/page.jsx               contact composition + Suspense

components/
  layout/
    Navbar.jsx                   fixed nav, mobile menu, CTA
    Footer.jsx                   footer columns + socials
    BackToTop.jsx                scroll-to-top button
    LanguageSwitcher.jsx         Radix Select → Zustand
    LocaleReadyGate.jsx          skeleton gate + html lang/dir sync
  motion/
    Reveal.jsx                   IntersectionObserver fade-up
  shared/
    CtaBanner.jsx                reusable CTA
    ProcessTimeline.jsx          6-step export process
    PageSkeleton.jsx             loading screen
  home/
    Hero.jsx                     hero + route line + stats
    WhyChooseUs.jsx              6 reason cards
    FeaturedProducts.jsx         6 featured product cards
    Categories.jsx               6 category image tiles
    CompanyHighlights.jsx        photo + mission/vision/values
    GalleryPreview.jsx           4-image preview
    BusinessProcess.jsx          process section wrapper
    Testimonials.jsx             3 buyer quotes
  about/
    AboutHero.jsx                about hero
    AboutStory.jsx               origin story + image
    FounderMessage.jsx           founder photo + message
    MissionVision.jsx            mission/vision blocks
    CoreValues.jsx               6 value pills
    AboutProcess.jsx             process section wrapper
    WhyChooseUsAbout.jsx         6 glass differentiator cards
    ExportMarketsStats.jsx       markets + 4 stats
    TeamSection.jsx              4 team cards
  products/
    ProductsHero.jsx             catalog hero
    ProductsExplorer.jsx         search/filter/grid logic
    ProductSearchBar.jsx         search input
    CategoryFilterBar.jsx        category pills
    ProductCard.jsx              catalog card + order link
    ProductDetailView.jsx        full product page
  gallery/
    GalleryHero.jsx              gallery hero
    GalleryExplorer.jsx          tabs + modal state
    GalleryTabs.jsx              category tabs
    GalleryGrid.jsx              grid dispatcher (server component)
    GalleryImageItem.jsx         image tile
    GalleryVideoItem.jsx         video poster tile
    Lightbox.jsx                 image lightbox
    VideoModal.jsx               YouTube/video modal
  contact/
    ContactHero.jsx              contact hero
    ContactInfoStrip.jsx         phone/email/address cards
    ContactPageClient.jsx        query-param reader
    OrderSummary.jsx             order context ticket
    ContactForm.jsx              form + hidden fields + success state
    MapCard.jsx                  Google Maps iframe + office hours
    ThankYou.jsx                 closing section
  ui/
    select.jsx                   shadcn-style Radix Select

lib/
  data/products.js               15-product bilingual catalog
  data/gallery.js                17-item bilingual gallery
  format.js                      price helpers
  utils.js                       cn() class merge

Store/
  useAppStore.js                 Zustand language store

utils/
  data.js                        all UI strings + page copy (en/ar)
```

### B. Content map (key paths)

| UI area | `utils/data.js` path |
|---|---|
| Nav/footer/buttons/forms | `ui.*` |
| Company info / hours | `content.commone.companyInfo`, `.officeHours` |
| Export process steps | `content.commone.processSteps` |
| Founder | `content.commone.founderMessage` |
| Home sections | `content.pages.home.*` |
| About sections | `content.pages.about.*` |
| Catalog copy | `content.pages.products.*` |
| Gallery copy | `content.pages.gallery.*` |
| Contact/thank-you | `content.pages.contact.*` |

### C. Query parameters (order → contact)

| Param | Source | Example |
|---|---|---|
| `product` | Localized product name | `Yirgacheffe%20Arabica%20Coffee` |
| `code` | `product_code` | `BL-CF-001` |
| `price` | Final price, 2 decimals | `6.80` |
| `discount` | Percent as string | `0` |

### D. Design tokens quick reference

- Navy: `#070e17`, `#0b1726`, `#13233a`, `#1b3350`, `#294a6e`
- Gold: `#ecdfc4`, `#c9a868`, `#b8924a`, `#9c7a3a`
- Beige: `#fbf7ee`, `#f4ecd9`, `#e9dcbf`
- Ink: `#101a28`; soft ink: `#56606e`
- Radius: `0.65rem` (`--radius`)
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`

### E. Verification log

| Check | Result |
|---|---|
| `npm install` (nested) | Completed; 351 top-level packages/directories present |
| `npm run build` | Success; 15 product pages + 5 content routes + 404 |
| Build warnings | `themeColor` unsupported in `metadata` (every route) |
| Static HTML inspection | `out/index.html` body = skeleton only; no nav/content |
| `npm run lint` | Prompts to configure ESLint (no config file) |
| Product/gallery counts | 15 products, 17 gallery items (15 images, 2 videos) |
| `npm start` compatibility | Not compatible with `output: "export"` |
| PDF text extraction | 12 pages; text recovered from pages 1–10 and 12 |
| QR decode (page 11) | MECARD: BLEL Import & Export / 2 phone numbers / Gmail / Addis Ababa |
| Logo comparison | PDF cover artwork matches `public/logo1.png` and `logo2.png` |

### F. Company profile page map

| Page | Content |
|---|---|
| 1 | Cover — logo, “Excellence Without Compromise”, “Company Profile” |
| 2 | Table of contents |
| 3 | Founder message — Elias Mendaye |
| 4 | About us + sourcing/export summary |
| 5 | Our mission |
| 6 | Our vision |
| 7 | Our products — chickpeas, green mung beans, sesame, lentils; origins; packshots |
| 8 | Core values + Why Us |
| 9 | Our process — six steps + sesame packshots |
| 10 | Thank you |
| 11 | Get in touch — QR code only |
| 12 | Back cover — logo + tagline |

### G. Contact card payload (decoded)

```
MECARD:N:BLEL Import & Export;TEL:0928761835;TEL:0922858489;
EMAIL:blel.import.export@gmail.com;ADR:Addis Ababa,Ethiopia;;
```

The card carries no website or social fields.

---

*End of document.*
