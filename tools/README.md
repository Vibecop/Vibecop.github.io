# Conversion tooling

One-shot scripts used to port the static HTML kit in the parent folder into
this Next.js app. They are kept so the port can be re-run or audited, not
because the app needs them at build or run time.

| file | what it does |
| --- | --- |
| `convert.mjs` | parse5-based HTML → JSX serializer. Maps attributes, self-closes void elements, turns comments into JSX comments, rewrites `assets/…` paths, swaps internal `*.html` links for `next/link`, and — importantly — preserves whitespace between inline elements as `{' '}` so text spacing does not shift. |
| `gen-pages.mjs` | walks every `*.html` in the parent folder and writes the matching `app/**/page.jsx`, lifting `<header>` / footer / promo bar out into the shared components. |
| `gen-components.mjs` | regenerates the raw JSX for `Header` / `Footer` / `PromotionalTopbar` from `contact.html` (the page whose header carries the full menu). `Header.jsx` was then hand-edited to drive the `active` classes off `usePathname()`. |
| `compare.mjs` | verification harness. Renders every route from a running server and diffs the DOM (tag, sorted classes, id, src/href, text) node-by-node against the original HTML file. Run `npm run start` first, then `node tools/compare.mjs`. |

`compare.mjs` currently reports one intentional difference: `/single-blog`
links to `/six-column-full-width`, where the original pointed at
`six-colum-full-wide.html` — a typo for a file that never existed.
