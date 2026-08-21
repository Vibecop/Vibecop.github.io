# Conversion tooling

> **Historical. Do not run these against the working tree.**
>
> These scripts performed the original one-shot port of the static HTML kit in
> `../vibecop` into this app. The app has since been rewritten by hand in
> Tailwind, so their output no longer resembles what is in `app/`:
>
> * `gen-pages.mjs` and `gen-components.mjs` **overwrite** `app/**/page.jsx` and
>   the shared components with machine-converted Bootstrap markup. Running
>   either destroys the current pages.
> * `compare.mjs` and `visual-check.mjs` diff this app against the kit. That
>   comparison was the point while the port was meant to be pixel-exact; now
>   that the design has been rebuilt, both are expected to report differences
>   everywhere and neither is a useful check.
>
> They are kept so the port can be audited, and because `convert.mjs` is still
> the fastest way to turn a fresh chunk of the kit's HTML into JSX by hand.

| file | what it does |
| --- | --- |
| `routes.mjs` | the page manifest every other script reads: one entry per route, with the source filename, output directory and component name derived from it. Nothing else in the toolchain hardcodes a `*.html` name. |
| `convert.mjs` | parse5-based HTML → JSX serializer. Maps attributes, self-closes void elements, turns comments into JSX comments, rewrites `assets/…` paths, swaps internal `*.html` links for `next/link`, and preserves whitespace between inline elements as `{' '}`. |
| `gen-pages.mjs` | writes `app/**/page.jsx` for every page in the manifest, lifting `<header>` / footer / promo bar out into the shared components. **Destructive** — see above. |
| `gen-components.mjs` | regenerates the raw JSX for `Header` / `Footer` / `PromotionalTopbar` from `/contact` (the page whose header carries the full menu). **Destructive** — see above. |
| `compare.mjs` | DOM diff of every route against its source HTML file. Run `npm run start` first. Superseded by the rewrite. |
| `visual-check.mjs` | screenshot + pixel diff of each route against the original file. Superseded by the rewrite. |

## The manifest

`routes.mjs` is the single source of truth for which pages exist. Each entry is
a route, plus `group` when it is not an ordinary `(site)` page. The source
filename (`/three-column` → `three-column.html`), output directory and component
name are all derived from the route, so no `*.html` filename is written out by
hand anywhere. `aliases` covers slugs the kit's own markup linked that are not a
page's own — there is one, a misspelling of a file that never existed, which
`/single-blog` pointed at.

The kit is read from `../vibecop`, resolved against `routes.mjs` rather than the
working directory, so the scripts run from anywhere.
