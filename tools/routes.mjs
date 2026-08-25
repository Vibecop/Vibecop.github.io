/*
 * The one place that knows which pages exist.
 *
 * Pages are listed by route; the file each was ported from is derived from the
 * route, so no `*.html` filename is written out by hand anywhere in the
 * toolchain. Add a route here and the converter, the DOM diff and the
 * screenshot check all pick it up.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * The static HTML kit this app was ported from, resolved against this file
 * rather than the working directory so the tools run from anywhere.
 */
export const SRC = path.resolve(fileURLToPath(import.meta.url), '../../../vibecop');

/**
 * `group` decides which App Router segment the page is written to, and with it
 * whether the shared chrome is lifted out of the markup:
 *
 *   site  promo bar + header + footer            app/(site)/…
 *   blog  same chrome, kept together as a group  app/(site)/(blog)/…
 *   bare  no chrome at all                       app/(bare)/…
 *
 * `aliases` lists slugs the kit's own hrefs point at that are not the page's
 * own here, one misspelling that shipped in the markup for a file that never
 * existed.
 */
export const PAGES = [
  { route: '/' },
  { route: '/about' },
  { route: '/services' },
  { route: '/single-services' },
  { route: '/case-studies' },
  { route: '/pricing' },
  { route: '/faq' },
  { route: '/team' },
  { route: '/process' },
  { route: '/contact' },
  { route: '/blog' },
  { route: '/privacy-policy' },
  { route: '/cookie-policy' },
  { route: '/term-of-use' },
  { route: '/single-blog', group: 'blog' },
  { route: '/one-column', group: 'blog' },
  { route: '/two-column', group: 'blog' },
  { route: '/three-column', group: 'blog' },
  { route: '/three-column-sidebar', group: 'blog' },
  { route: '/four-column', group: 'blog' },
  { route: '/six-column-full-width', group: 'blog', aliases: ['six-colum-full-wide'] },
  { route: '/coming-soon', group: 'bare' },
  { route: '/404', group: 'bare' },
];

/** `/three-column` -> `three-column`, `/` -> `index`. */
export function slugOf(route) {
  return route === '/' ? 'index' : route.slice(1);
}

/** `/three-column` -> `<kit>/three-column.html`. */
export function sourceOf(route) {
  return path.join(SRC, `${slugOf(route)}.html`);
}

/** `/three-column-sidebar` -> `ThreeColumnSidebarPage`. */
export function componentNameOf(route) {
  const name = slugOf(route).replace(/(^|[^a-zA-Z0-9]+)(.)/g, (_, __, c) => c.toUpperCase());
  return `${name}Page`;
}

/** Slug as written in a kit href -> the route it now resolves to. */
export const ROUTE_BY_SLUG = new Map(
  PAGES.flatMap(({ route, aliases = [] }) =>
    [slugOf(route), ...aliases].map((slug) => [slug, route])
  )
);

/**
 * `/404` is not a route of its own Next renders `app/not-found.jsx` for
 * anything unmatched, so the checkers ask for a URL that cannot resolve.
 */
export const NOT_FOUND_URL = '/nope';
