"use client";

import { useEffect } from "react";

/*
 * The whole site's motion, in one mounted client component.
 *
 * Pages and sections opt in with data attributes rather than by importing a
 * hook, which is what keeps every page and card a server component:
 *
 *   data-reveal[="blur"|"scale"|"left"|"right"]  fade/slide in on entry
 *   data-stagger                                 same, one child at a time
 *   data-draw                                    marks revealed only, for
 *                                                connector lines and charts
 *   data-count                                   count the number up on entry
 *   data-parallax="0.06"                         drift with scroll
 *
 * Three listeners total one IntersectionObserver, one scroll handler, one
 * MutationObserver instead of a library and a per-element listener.
 */

const REVEAL_SELECTOR = "[data-reveal],[data-stagger],[data-draw]";

/*
 * Revealed state is marked with an attribute, never a class.
 *
 * React owns `className` on every element it renders: the moment any state
 * changes the class list a FAQ item opening, a filter becoming active React
 * rewrites the attribute from its own props and silently drops anything added
 * from the outside. A class-based marker therefore vanished on the next
 * re-render and the element faded back out. React never touches an attribute
 * it does not render, so this one survives.
 */
const REVEALED = "data-revealed";

/* Pull "+32%" apart into "+", 32, "%" so the count-up keeps its formatting. */
function parseCount(text) {
  const match = /^(\D*?)([\d][\d,.\s]*)(.*)$/s.exec(text.trim());
  if (!match) return null;

  const [, prefix, rawNumber, suffix] = match;
  const cleaned = rawNumber.replace(/[,\s]/g, "");
  const target = Number.parseFloat(cleaned);
  if (!Number.isFinite(target)) return null;

  const dot = cleaned.indexOf(".");
  return {
    prefix,
    suffix,
    target,
    decimals: dot === -1 ? 0 : cleaned.length - dot - 1,
    grouped: /[,\s]/.test(rawNumber),
  };
}

function runCounter(el) {
  if (el.dataset.counted) return;
  el.dataset.counted = "1";

  /*
   * `data-count` is usually a bare attribute, which JSX serialises as
   * `data-count="true"` so the attribute is only a source of digits when it
   * actually parses as a number, and otherwise the rendered text is. Reading
   * it the other way round silently skipped every counter.
   */
  const spec = parseCount(el.dataset.count || "") || parseCount(el.textContent || "");
  if (!spec) return;

  const { prefix, suffix, target, decimals, grouped } = spec;
  const format = (value) => {
    const fixed = value.toFixed(decimals);
    const withGroups = grouped
      ? Number(fixed).toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      : fixed;
    return `${prefix}${withGroups}${suffix}`;
  };

  const duration = 1100;
  const start = performance.now();

  const step = (now) => {
    const t = Math.min((now - start) / duration, 1);
    // ease-out cubic: fast off the mark, settles gently
    const eased = 1 - (1 - t) ** 3;
    el.textContent = format(target * eased);
    if (t < 1) requestAnimationFrame(step);
    else el.textContent = format(target);
  };

  el.textContent = format(0);
  requestAnimationFrame(step);
}

export default function MotionRuntime() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Tells the <head> boot script that motion is live, so it leaves
    // `motion-ready` in place. Re-adding the class here covers the dev-only
    // double mount, where an earlier cleanup may have taken it off.
    root.classList.add("motion-ready");
    root.dataset.motionBooted = "1";

    /* ---- scroll reveal ------------------------------------------- */

    // bound but not yet revealed; drained by the observer and by the
    // already-scrolled-past sweep below
    const pending = new Set();

    /*
     * Which elements are already wired up tracked per effect run, never on
     * the element itself.
     *
     * React StrictMode mounts, cleans up, then mounts again in development. A
     * flag stored in the DOM survives that cycle, so the second mount skipped
     * every element while the cleanup had already disconnected the observer
     * they were attached to: nothing on the page ever revealed. A WeakSet is
     * scoped to this run, so the second mount rebinds against its own
     * observer, and elements that made it through the first run are skipped by
     * their revealed attribute rather than by a flag.
     */
    const bound = new WeakSet();

    const reveal = (el) => {
      // the sweep and the observer can both reach the same element
      if (!pending.delete(el)) return;
      observer.unobserve(el);
      el.setAttribute(REVEALED, "");
      // with reduced motion the CSS already shows the end state, so the only
      // job left is to skip the count-up and leave the final figure in place
      if (!reduced.matches) el.querySelectorAll("[data-count]").forEach(runCounter);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) reveal(entry.target);
      },
      // a little before the element's top edge clears the fold, so the motion
      // has finished by the time it is properly in frame
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    const bind = (el) => {
      if (bound.has(el) || el.hasAttribute(REVEALED)) return;
      bound.add(el);
      pending.add(el);
      observer.observe(el);
    };

    const observeAll = (scope) => {
      // a freshly inserted node can be a target itself, which querySelectorAll
      // would not return
      if (scope.nodeType === 1 && scope.matches(REVEAL_SELECTOR)) bind(scope);
      scope.querySelectorAll(REVEAL_SELECTOR).forEach(bind);
    };

    observeAll(document);

    /*
     * Anything the viewport has already moved past will never intersect, so it
     * would stay hidden for good. That is the state a reload lands in: the
     * browser restores the old scroll offset, and every section above it was
     * skipped over rather than scrolled through, so scrolling back up found
     * blank space. Reveal those outright the user is past them, there is no
     * entrance left to play.
     */
    const revealPassed = () => {
      for (const el of pending) {
        if (el.getBoundingClientRect().bottom <= 0) reveal(el);
      }
    };

    // Client-side navigation swaps the tree without a reload, so newly mounted
    // sections have to be picked up as they arrive.
    const mutations = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (node.nodeType === 1) observeAll(node);
        }
      }
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    /* ---- parallax + pinned header -------------------------------- */

    const header = document.querySelector(".site-header");
    const layers = [...document.querySelectorAll("[data-parallax]")];
    let ticking = false;
    let wasScrolled = null;
    let lastY = null;

    const applyScroll = () => {
      ticking = false;
      const y = window.scrollY;

      // Ordinary scrolling passes every element through the observer, so the
      // sweep is only needed when the viewport *jumps* a restored scroll
      // position, an in-page anchor. Gating on that keeps its layout reads off
      // the per-frame path.
      if (pending.size && (lastY === null || Math.abs(y - lastY) > window.innerHeight)) {
        revealPassed();
      }
      lastY = y;

      if (header) {
        const scrolled = y > 24;
        if (scrolled !== wasScrolled) {
          header.classList.toggle(scrolled);
          wasScrolled = scrolled;
        }
      }

      if (reduced.matches) return;
      for (const layer of layers) {
        const factor = Number.parseFloat(layer.dataset.parallax) || 0;
        // the glows are position:fixed, so this offset is the whole effect
        // they drift against the content instead of sitting dead still
        layer.style.setProperty("--parallax", `${(y * factor).toFixed(1)}px`);
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(applyScroll);
    };

    applyScroll();
    // scroll restoration can land after this effect runs, and does not always
    // arrive as a scroll event, so re-check on the next frame and after load
    requestAnimationFrame(applyScroll);
    window.addEventListener("load", applyScroll, { once: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    /* ---- cleanup -------------------------------------------------- */

    return () => {
      observer.disconnect();
      mutations.disconnect();
      pending.clear();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("load", applyScroll);
    };
  }, []);

  return null;
}
