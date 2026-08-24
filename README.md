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
the base layer, and the three treatments below. Utilities are unprefixed and
preflight is on.

```jsx
<Section tone="surface">
  <SectionHeading title="Heading" lede="Body copy." />
  <ul data-stagger className="grid gap-6 md:grid-cols-3">
    <li className="vc-card vc-card-hover p-8">…</li>
  </ul>
</Section>
```

Tokens rather than raw values: `bg-brand`, `text-muted`, `bg-surface-2`,
`max-w-page`, `text-display` / `text-h1` / `text-h2` / `text-h3`. If a value
shows up twice, it belongs in `@theme`, not in a page.

The heading sizes are `clamp()`, so they scale with the viewport instead of
stepping through a stack of fixed pixel sizes at each breakpoint.

### The three layers

The page is one continuous environment rather than a stack of flat bands.
Three things do that work, and nothing below them needs to repeat it:

| layer | what it is |
| --- | --- |
| `<Atmosphere/>` | one **fixed** element per layout: the orange/crimson glows, the faded grid, the grain. Behind everything, inert, mounted once. |
| `.site-section` | a per-band radial wash that alternates side down the page. `tone="surface"` is a translucent lift, not an opaque fill. |
| `.vc-card` | the one glass treatment every panel shares — fill, hairline border, lit top edge, blur. `.vc-card-hover` adds the lift. |

Because the atmosphere sits behind everything, **nothing full-width may paint
an opaque floor** — an opaque background masks it and the section meets its
neighbour on a hard line. The hero and the sub-page banner both end on
`transparent` for this reason, and their decorative sweeps are masked so they
fade out before the container clips them.

`.vc-card`, `.vc-btn-*` and `.vc-field` are plain CSS rather than utility
bundles: several of their properties (the lit edge, the hover sheen, the
gradient ring on `.vc-badge`) are pseudo-elements or multi-layer backgrounds
that a class list does not express. They are **unlayered**, so they win over
Tailwind's utilities regardless of specificity — which is deliberate, and is
why `.vc-btn` guards its `position: relative` behind `:where(:not(.absolute)…)`
instead of setting it outright.

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
| every scroll animation | `MotionRuntime.jsx` |

Everything else is a server component.

### Motion

`MotionRuntime.jsx` mounts once per layout and is the only thing driving
animation. Pages opt in with **data attributes** rather than by importing a
hook, which is what keeps every page and card a server component:

| attribute | effect |
| --- | --- |
| `data-reveal` | fade + rise on entry. `="blur" / "scale" / "left" / "right"` pick a variant. |
| `data-stagger` | same, applied to direct children one after another. |
| `data-draw` | marks revealed only — for connector rules and the sparkline draw. |
| `data-count` | counts the rendered figure up once, keeping its `+` / `%`. |
| `data-parallax="0.08"` | drifts the element against the scroll. |

Three listeners in total: one `IntersectionObserver`, one scroll handler, one
`MutationObserver` (client-side navigation swaps the tree, so new sections have
to be picked up as they arrive). Reveals fire once and then unobserve.

Five things are worth knowing before editing it — each of them is a bug that
has already been fixed once:

* **Nothing that tracks wiring may be stored on the element.** `reactStrictMode`
  is on, so in development React mounts the effect, cleans it up, and mounts it
  again. An "already bound" flag written to the DOM survived that cycle, so the
  second mount skipped every element while the cleanup had already disconnected
  the observer they were attached to — and *nothing on the page revealed at
  all*, in `next dev` only. The bound set is a `WeakSet` scoped to the effect
  run for that reason. **Check reveal behaviour against `next dev`, not just
  `next start`:** production does not double-invoke effects, so it will not show
  this class of bug.
* **Revealed state is an attribute (`data-revealed`), never a class.** React
  owns `className` on everything it renders, so the moment any state changed a
  class list — a FAQ item opening, a filter going active — React rewrote the
  attribute from its own props and dropped the JS-added marker, and the element
  faded back out. React never touches an attribute it does not render.
* **Anything the viewport has jumped past is revealed outright.** An element
  scrolled *above* the viewport will never intersect, so it would stay hidden
  for good. That is the state a reload lands in: the browser restores the old
  scroll offset and every section above it was skipped rather than scrolled
  through, so scrolling back up found blank space. The sweep is gated on a
  jump larger than one viewport, which keeps its layout reads off the
  per-frame path during ordinary scrolling.
* **Entrances animate `translate`/`scale`, never `transform`.** A card's hover
  lift uses `transform`, and the reveal selector is the more specific of the
  two — as `transform` the reveal's end state won every hover and the lift
  silently did nothing. They are separate properties, so they compose.
* **`data-count` is read from the rendered text, not the attribute.** JSX
  serialises a bare `data-count` as `data-count="true"`, so the attribute is
  only used when it actually parses as a number. The markup always ships the
  final value, so the figure is correct with JS off and the count-up causes no
  layout shift.

Everything degrades: the reveal styles are gated on a `motion-ready` class set
by a small inline script in `app/layout.jsx`, and a timer takes it back off if
`MotionRuntime` never boots — so a hydration failure or a blocked bundle leaves
a plain visible page rather than a blank one. `prefers-reduced-motion` drops
the animation and the parallax and shows the end state directly.

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
