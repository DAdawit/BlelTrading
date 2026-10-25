# Blel — Next.js Export Website

Next.js 14 (App Router) project, split into **pages** (`app/`) and
**reusable components** (`components/`). Fully bilingual (English/Arabic)
via a Zustand store + a single content file.

## Setup

**Option A — drop these files into a fresh Next.js app**
```bash
npx create-next-app@latest blel --js --tailwind --eslint --app --src-dir=false --import-alias "@/*"
```
Then copy everything from this folder over the generated project (say yes
to overwriting `app/`, `package.json`, `tailwind.config.js`, etc.), then:
```bash
npm install
npm run dev
```

**Option B — use this folder directly**
```bash
cd blel-nextjs
npm install
npm run dev
```
Open http://localhost:3000.

## Structure

```
app/
  layout.jsx              → fonts, <Navbar/>, <Footer/>, <BackToTop/>, <LocalePathSync/>, metadata
  globals.css              → Tailwind directives + design system (tokens, .manifest-card, .stamp, etc.)
  page.jsx                  → Home
  about/page.jsx
  products/page.jsx
  products/[id]/page.jsx     → product detail page (generateStaticParams over the catalog)
  gallery/page.jsx
  contact/page.jsx

components/
  layout/                   → Navbar, Footer, BackToTop, LocalePathSync, LanguageSwitcher
  motion/Reveal.jsx          → scroll-reveal wrapper
  shared/                     → ProcessTimeline + CtaBanner (reused across Home/About/Products)
  home/                        → one file per home-page section
  about/                        → one file per about-page section, incl. FounderMessage, MissionVision, CoreValues
  products/                     → ProductCard, ProductsHero, ProductsExplorer, ProductDetailView
  gallery/                       → GalleryHero, GalleryImageItem + GalleryVideoItem (separate, reusable), GalleryGrid, GalleryExplorer, Lightbox, VideoModal
  contact/                        → ContactHero, ContactForm, OrderSummary, ContactPageClient, ThankYou
  ui/select.jsx                    → shadcn/ui Select (Radix), used by LanguageSwitcher

lib/
  data/products.js          → bilingual product catalog (single source of truth)
  data/gallery.js            → bilingual gallery items
  format.js                   → fmtPrice / discountedPrice
  utils.js                     → cn() class-merge helper (shadcn)

Store/
  useAppStore.js             → Zustand store: language, persisted to localStorage

utils/
  data.js                     → THE content file — ui strings + full page content, both en/ar
```

## Internationalization (English / Arabic)

- `Store/useAppStore.js` — Zustand store holding `language` (`"en"` | `"ar"`), persisted to `localStorage`.
- `utils/data.js` — single source of truth for every string on the site:
  - `ui` — short reusable strings, looked up by key: `languageTranslate(lang, "orderNow")`
  - `content` — full page copy, looked up by passing the node itself: `languageTranslate(lang, content.pages.home.hero.title)`
- `components/layout/LanguageSwitcher.jsx` — the dropdown in the Navbar that flips `language` in the store.
- `components/layout/LocalePathSync.jsx` — mounted once in the root layout. Keeps `<html lang>` / `<html dir>` in sync with the store (drives RTL for Arabic). **URLs stay clean** — no `/en` or `/ar` prefix; language lives purely in Zustand + localStorage.
- RTL: layout uses Tailwind logical properties where it mattered most (Mission/Vision accents, the company-highlights badge, process-step arrows flip direction). A few decorative/fixed-position elements (back-to-top button, modal close buttons, search icon) were left as physical `left-`/`right-`, since those conventionally stay in a fixed visual corner regardless of language.
- Metadata (`<title>`, meta description) is rendered server-side before the client store hydrates, so `generateMetadata` / `export const metadata` always use English. Search engines and social previews will show English regardless of a visitor's chosen language — fine for now; true localized SEO metadata would need a routing-based locale strategy (cookie or `[lang]` segment + middleware) instead of the client-store approach used here.
- Arabic copy in `utils/data.js` is a solid first pass (formal Modern Standard Arabic) — have a native speaker / professional translator proof it before launch.

## Logo

- Footer uses `/logo1.png`, Navbar uses `/logo2.png` — both read straight from `public/`. Only `logo1.png` was supplied; drop `logo2.png` into `public/` whenever it's ready, no code changes needed.
- Navbar and Footer backgrounds are light (beige/white) specifically so the logo's navy/gold artwork stays legible without inverting the logo file itself.

## Product detail pages

- `app/products/[id]/page.jsx` + `components/products/ProductDetailView.jsx` — a full page per product at `/products/{id}`, statically generated via `generateStaticParams`. `ProductCard`'s image/name/description area links here; the separate "Order Now" button still goes straight to the pre-filled contact form.

## Notes on interactivity

- Components that use state, `useEffect`, or browser APIs are marked `"use client"`. Everything else (page-level composition in `app/*/page.jsx`, static section wrappers) is a plain Server Component — this is why hero sections were split into their own small client components (e.g. `ProductsHero.jsx`) instead of living inline in `page.jsx`: it keeps `export const metadata` working (metadata only works in Server Components) while still letting the hero text be reactive to language.
- **Order flow**: the "Order Now" link is a plain `<Link href="/contact?product=...&code=...">` — no client JS needed for the redirect itself.
- **Contact page**: reading the query params requires `useSearchParams`, which Next.js requires to be wrapped in `<Suspense>` — already done in `app/contact/page.jsx`.
- The contact form is front-end only (per spec) — it flips to a success state on submit. Wire up `handleSubmit` in `components/contact/ContactForm.jsx` to a real API route / email service when ready.

## Design tokens

Brand colors live in `tailwind.config.js` (`navy` / `gold` / `beige` / `ink`)
and are mirrored as CSS variables in `app/globals.css` for the custom
classes (`.manifest-card`, `.stamp`, `.nav-shell`, etc.) that aren't plain
Tailwind utilities. Also included: shadcn/ui's semantic tokens
(`background`, `popover`, `border`, `ring`, etc.), mapped to the same brand
palette, for the `Select` component used by `LanguageSwitcher`.

- Primary — Deep Navy `#0B1726`
- Accent — Champagne Gold `#B8924A`
- Optional accent — Warm Beige `#F4ECD9`

## Icons & fonts

- Font Awesome is loaded via CDN `<link>` in `app/layout.jsx`. Swap for
  `lucide-react` (already a dependency, used by the Select component) or a
  local icon set later if you'd rather not depend on the CDN.
- Fonts (Fraunces / Inter / IBM Plex Mono) are loaded via `next/font/google`
  in `app/layout.jsx` — no external font request needed at runtime.

## Images

Every image renders through `next/image`. Product/gallery/team photos are
Unsplash placeholder URLs — `next.config.js` whitelists `images.unsplash.com`
for this. Swap in real photography before launch; update `next.config.js`
`remotePatterns` if you host images elsewhere.
