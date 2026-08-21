# Vibecop

Marketing site for Vibecop. Next.js 16 (App Router, React 19) and Tailwind v4.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

## Layout

```
app/
  layout.jsx                 <html>/<body>, the one stylesheet import, metadata
  not-found.jsx              404
  (site)/                    pages that carry the promo bar + header + footer
    layout.jsx               that chrome, in one place
    page.jsx                 /
    about/ services/ …       one folder per page
    (blog)/                  the six blog layout demos + the article page
  (bare)/                    no chrome at all
    coming-soon/
components/
  ui/                        Container, Section, SectionHeading, Button, Card, Badge
  …                          Header, Footer, BlogCard, Accordion, forms, …
content/                     page copy and data, as plain JS
lib/cn.js                    class-name joiner
styles/
  theme.css                  the design system: Tailwind v4 + tokens
  fonts.css                  self-hosted Inter Tight @font-face rules
  fonts/                     the woff2 files
public/assets/images/        artwork
tools/                       the original HTML→JSX port scripts (historical)
```

## The design system

Everything lives in `styles/theme.css`: colours, type scale, the content width,
and the base layer. Utilities are unprefixed and preflight is on.

```jsx
<section className="bg-surface-2 py-20">
  <h2 className="text-h2">Heading</h2>
  <p className="text-muted">Body copy.</p>
  <Button href="/contact">Book an Automation Audit</Button>
</section>
```

Tokens rather than raw values: `bg-brand`, `text-muted`, `bg-surface-2`,
`max-w-page`, `text-display` / `text-h1` / `text-h2` / `text-h3`. If a value
shows up twice, it belongs in `@theme`, not in a page.

The heading sizes are `clamp()`, so they scale with the viewport instead of
stepping through a stack of fixed pixel sizes at each breakpoint.

## Content

Page copy is data, not markup. `content/` holds one module per subject —
`posts.js`, `articles.js`, `team.js`, `pricing.js`, `case-studies.js`,
`legal.js`, `navigation.js` — and the pages map over it. Editing a price or a
nav entry means editing one array.

Data modules stay plain: no JSX in them (`content/home.js` keeps the hero
headline as an array of lines for that reason).

## Behaviour

No jQuery, Bootstrap JS, Owl Carousel or WOW. Each interaction is a small
client component:

| behaviour | component |
| --- | --- |
| menu, dropdowns, mobile nav | `Header.jsx` |
| FAQ accordions | `Accordion.jsx` |
| case-study filters | `CaseStudyGrid.jsx` |
| post galleries | `PostMedia.jsx` |
| countdown | `Countdown.jsx` |
| forms | `ContactForm.jsx`, `NewsletterForm.jsx`, `CommentForm.jsx`, `FitFinder.jsx`, `ScopeBuilder.jsx` |
| back to top | `BackToTop.jsx` |

Everything else is a server component.

## Things to wire up

* **The forms have no backend.** Contact, newsletter, comment and search all
  validate and acknowledge, but nothing is sent — the original markup posted to
  `javascript:;`. Point their `onSubmit` at a real handler.
* **"Buy Now" still points at the theme vendor's checkout**
  (`designingmedia.com`), in `content/navigation.js`. Change `BUY_URL`.
* **`public/assets/images/favicon/` does not exist**, so the favicon links 404.
  Drop the folder in to fix it.
* **The blog is static.** `/single-blog` is one hard-coded article and every
  card links to it. There are no per-post routes yet.

## History

This started as a static HTML kit (`../vibecop`) that was machine-converted to
JSX. That port is gone: the pages are hand-written Tailwind now, and Bootstrap
4, the kit's 10k-line `style.css`, `animate.css` and the jQuery stack have all
been removed.

`tools/` still holds the conversion scripts. They are kept for reference only
— see `tools/README.md` before running any of them.
