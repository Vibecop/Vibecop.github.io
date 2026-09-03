/* `output: "export"` has no server to call this at request time. */
export const dynamic = "force-static";

import { SERVICE_PAGES } from "@/content/service-pages";
import { CASE_STUDY_PAGES } from "@/content/case-studies";

/*
 * The sitemap, generated at build time so it lands in dist/sitemap.xml and
 * ships with the static export.
 *
 * Service slugs are read from content/service-pages.js rather than repeated
 * here, so adding a service adds it to the sitemap on the next build.
 *
 * Deliberately excluded: the kit's blog-layout demos (/one-column,
 * /two-column, and friends) and /coming-soon. They render duplicate or
 * placeholder copy, and submitting near-identical pages is a liability
 * rather than reach. robots.js blocks the same set.
 */
const PAGES = [
  "/",
  "/about",
  "/process",
  "/team",
  "/services",
  ...SERVICE_PAGES.map(({ slug }) => `/services/${slug}`),
  "/case-studies",
  ...CASE_STUDY_PAGES.map(({ slug }) => `/case-studies/${slug}`),
  "/pricing",
  "/faq",
  "/blog",
  "/single-blog",
  "/contact",
  "/privacy-policy",
  "/cookie-policy",
  "/term-of-use",
];

export default function sitemap() {
  const lastModified = new Date();
  return PAGES.map((path) => ({
    url: `https://vibecop.io${path}`,
    lastModified,
  }));
}
