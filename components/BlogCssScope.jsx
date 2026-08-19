"use client";

import { useEffect } from "react";

/*
 * Next keeps a route segment's stylesheet in the document after you navigate
 * away from that segment, which is fine for CSS that only targets that page's
 * markup — but blog.css restyles bare `a` and `.sub-banner li`, both of
 * which appear site-wide and are styled nowhere else. Left attached, it silently
 * restyles every other page.
 *
 * The blog.css chunk is its own file (nothing else is bundled into it), so it
 * is enough to flip `disabled` on the sheet as the blog routes mount and
 * unmount. It is found by a selector only blog.css defines rather than by file
 * name, since the chunk name changes on every build.
 */
const PROBE_SELECTOR = ".single-blog-outer-con";

function findBlogSheet() {
  for (const sheet of document.styleSheets) {
    try {
      for (const rule of sheet.cssRules) {
        if (rule.selectorText === PROBE_SELECTOR) return sheet;
      }
    } catch {
      // cross-origin sheet, not ours
    }
  }
  return null;
}

export default function BlogCssScope() {
  useEffect(() => {
    const sheet = findBlogSheet();
    if (sheet) sheet.disabled = false;

    return () => {
      const onExit = findBlogSheet();
      if (onExit) onExit.disabled = true;
    };
  }, []);

  return null;
}
