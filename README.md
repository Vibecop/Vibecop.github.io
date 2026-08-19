# Opzio — Next.js port

The static HTML kit in the parent folder, converted to Next.js 16 (App Router,
React 19) with the design left alone. Every stylesheet, script and font is
bundled by the Next build — nothing is served as a loose file from `public/`
except the images, and nothing is loaded from a CDN.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

## Layout

```
app/
  layout.jsx                 <html>/<body>, all global CSS imports, <VendorScripts/>
  not-found.jsx              404.html
  (site)/                    pages that carry the promo bar + header + footer
    layout.jsx               promo bar, back-to-top anchor
    page.jsx                 index.html          -> /
    about/ services/ ...     one folder per page
    (blog)/                  the pages that linked assets/css/blog.css
      layout.jsx             scoped blog.css import + <BlogCssScope/>
      one-column/ two-column/ three-column/ three-column-sidebar/
      four-column/ six-column-full-width/ single-blog/
  (bare)/                    no chrome at all
    coming-soon/
components/                  Header, Footer, PromotionalTopbar, BackToTop,
                             StaticForm, BlogCssScope, VendorScripts
styles/
  style.css                  ALL of this site's custom CSS (see below)
  blog.css                   custom, but route-scoped to (blog)
  animate.css                customised vendor build, not on npm
  tailwind.css               Tailwind v4 setup, `tw:` prefixed
  fonts/                     self-hosted Inter Tight (woff2)
public/assets/images/        unchanged
tools/                       the conversion + verification scripts (see tools/README.md)
```

## How the original maps onto this

**Markup.** Every page's body was converted node-for-node. `tools/compare.mjs`
renders each route and diffs it against the source HTML — tag, classes, id,
`src`/`href` and text, in order. All 22 routes match, with one deliberate
exception noted below.

Whitespace is preserved rather than trimmed. JSX drops whitespace that spans a
newline, HTML collapses it to a space; this kit relies on that space in places
(inline-block `<li>`s, and spans written as
`<span>18h/wk saved </span><span> 62% ...`), so every whitespace run in the
source becomes a `{' '}`.

**Header / footer.** Identical on every page apart from which entries carry
`active`, so they are single components. `Header` derives `active` from
`usePathname()` through an explicit map that reproduces the kit's own
inconsistencies (`/faq` marks the menu instead of the toggle; `/pricing` marks
two entries; the Contact link exists only on `/contact`).

**CSS.** Imported in `app/layout.jsx` in the exact order the pages linked it, so
the cascade is unchanged. `url(../images/…)` was rewritten to
`url(/assets/images/…)`, which keeps the images in `public/` and out of the
bundler — the kit's CSS references 28 image files that were never shipped with
it, and webpack would fail on those.

The kit's eight stylesheets collapsed to three files plus Tailwind:

| was | now | why |
| --- | --- | --- |
| `style.css` + `responsive.css` + the Google Fonts `@import` | `styles/style.css` | one file for all custom CSS, concatenated in link order so `responsive.css`'s media queries still come last |
| `bootstrap.min.css` | `bootstrap/dist/css/bootstrap.min.css` | the local copy was byte-identical to the npm package |
| `owl.carousel.min.css`, `owl.theme.default.min.css` | `owl.carousel/dist/assets/…` | likewise byte-identical |
| `animate.css` | `styles/animate.css` | **kept local** — the kit shipped a customised build whose fades travel 20px; stock animate.css travels 100%, which is a very visible difference |
| `blog.css` | `styles/blog.css` | **kept separate** — see below |

`blog.css` is the exception: it was linked only by the blog-layout pages and it
restyles bare `a`, so it is imported from `app/(site)/(blog)/layout.jsx`.
Next keeps a segment's stylesheet attached after you navigate away from it, so
`<BlogCssScope/>` disables the sheet on exit and re-enables it on entry.

**Fonts.** `style.css` pulled Inter Tight from Google Fonts with an `@import`.
An `@import` is only valid as the first rule of a stylesheet and does not
survive bundling, so the same variable face is declared in `styles/fonts.css`
under the same family name and served from `styles/fonts/`. Text metrics are
identical to three decimal places at every weight. Font Awesome moved from the
CDN to the npm package for the same reason.

**JavaScript.** jQuery 3.7.1, jQuery UI 1.13.2, Bootstrap 4.6.2, Owl Carousel
2.3.4 and WOW come from npm and are pulled in by `components/VendorScripts.jsx`
with dynamic `import()` inside an effect — so `window.jQuery` exists before the
plugins evaluate, and nothing touches the DOM until React has hydrated (Owl
rewrites the markup it is handed, which would otherwise fight hydration).

The kit's own scripts are reimplemented rather than loaded:

| original | now |
| --- | --- |
| `carousel.js` | `initPage()` + `bindGlobalHandlers()` in `VendorScripts.jsx` |
| `counter.js` | `initPage()` + `startCountdown()` |
| `preloader.js` | `initPage()` |
| `back-to-top-button.js` | `components/BackToTop.jsx` |

The split matters: `carousel.js` mixed one-time `$(document).on(...)` delegation
with per-page element binding. With client-side routing the delegated handlers
must be bound once and the element binding must run again on every navigation,
so they are separated. `Header` also closes the mobile menu on navigation, which
the full page reload used to do.

## Deliberate differences

* `single-blog.html` linked `six-colum-full-wide.html` — a typo for a file that
  never existed. It now points at `/six-column-full-width`.
* Forms with `action="javascript:;"` render through `components/StaticForm.jsx`,
  which prevents the submit instead. React rejects `javascript:` URLs; the
  result (nothing happens) is the same.
* `jquery-validate.js` is not loaded — the plugin shipped but `.validate()` is
  never called on anything.
* `carousel.js` carries an "AI chat" block (`#addBtn` / `#micBtn` / `#sendBtn`
  posting to `chat.php`) whose markup and PHP endpoint exist nowhere in the kit.
  It is the one handler group not ported.
* `single-services copy.html` is byte-identical to `single-services.html` and
  was not given a route.

## Known gaps carried over from the kit

* The nav links to `index2`–`index5` and `load-more` point at pages that were
  never in the kit; they hit the 404 page.
* `assets/images/favicon/` does not exist, so the favicon links 404 — as they
  did before. Drop the folder into `public/assets/images/` to fix it.
* `assets/css/style.css` references 28 images that are not in the kit
  (`about-bg-img.jpg`, `banner-bg-image.jpg`, …). Those backgrounds render as
  nothing, exactly as they did originally.
* jQuery UI and Owl Carousel are loaded because the kit loaded them, but no page
  currently uses either. Removing the two `import()` lines in `VendorScripts.jsx`
  would drop them from the bundle.

## Tailwind

Tailwind v4 is installed and available in any component. **Every utility is
prefixed with `tw:`**:

```jsx
<div className="tw:flex tw:items-center tw:gap-4 tw:lg:grid tw:lg:grid-cols-3">
  <span className="tw:bg-primary tw:text-secondary tw:rounded tw:px-3">…</span>
</div>
```

The prefix is not cosmetic. Bootstrap 4 and Tailwind define many of the same
class names with different values — `container`, `mb-0`, `mx-auto`,
`text-center`, `w-100`, `border-0`, the whole `m-*`/`p-*` scale — and the pages
already use the Bootstrap ones. Unprefixed, Tailwind loads last and silently
wins: it shifted pixels on all 14 pages the visual check covers (`faq.html`
went from 286 differing pixels to 10,362). With the prefix, all 14 are back to
their baseline.

Two more things are configured for you in `styles/tailwind.css`:

* **Bootstrap's breakpoints**, so `tw:md:` and Bootstrap's `-md-` break at the
  same width (576 / 768 / 992 / 1200, not Tailwind's 640 / 768 / 1024 / 1280).
* **The kit's palette**, mirrored into Tailwind's colour namespace —
  `tw:bg-primary`, `tw:text-accent`, `tw:border-navy`, `tw:bg-ink-2` and so on.
  The kit's own `--primary--color` properties (note the double dash) are
  untouched and still drive `style.css`.

Preflight is deliberately not imported: Tailwind's reset would restyle
headings, lists, form controls and images, all of which the kit and Bootstrap's
reboot already handle.

## Verifying

```bash
npm run build && npm run start -- -p 3118
node tools/compare.mjs        # DOM diff, every route vs its source HTML
node tools/visual-check.mjs   # screenshot + pixel diff vs the original files
```
