"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Single-open accordion.
 *
 * Replaces Bootstrap's `data-toggle="collapse"` + `data-parent` pair. The kit
 * put the trigger in an `<a href="#">`, which announces as a link and jumps to
 * the top of the page if the JS has not loaded; this uses a real `<button>`
 * with `aria-expanded`/`aria-controls`, so it works from the keyboard and
 * reads correctly to a screen reader.
 *
 * `defaultOpen` is the index that starts expanded pass `null` for none.
 *
 * Opening animates the height rather than snapping: the panel is a grid whose
 * single row goes from `0fr` to `1fr` (see `.faq-panel`), so nothing has to be
 * measured in JS and the transition survives a change in the answer's length.
 */
export default function Accordion({ items, defaultOpen = 0, className }) {
  const [open, setOpen] = useState(defaultOpen);
  const base = useId();

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {items.map((item, i) => {
        const expanded = open === i;
        const headingId = `${base}-h-${i}`;
        const panelId = `${base}-p-${i}`;

        return (
          <div
            key={item.question}
            data-reveal
            className={cn("faq-item overflow-hidden rounded-2xl", expanded && "is-open")}
          >
            <h3 className="m-0">
              <button
                id={headingId}
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left text-lg font-semibold text-white transition-colors duration-200 hover:text-brand md:text-xl"
              >
                {item.question}
                <span
                  aria-hidden="true"
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border",
                    "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    expanded
                      ? "rotate-45 border-transparent bg-brand text-white shadow-[0_0_1.25rem_rgb(249_91_52/50%)]"
                      : "border-white/25 text-white"
                  )}
                >
                  <i className="fa-solid fa-plus text-xs" />
                </span>
              </button>
            </h3>

            {/*
              * The panel stays mounted so its height can animate, which rules
              * out `hidden`. `inert` is the modern equivalent for a visible-
              * but-unavailable region: it takes the contents out of the tab
              * order and out of the accessibility tree, and unlike
              * `aria-hidden` alone it also blocks pointer and find-in-page.
              * React 19 treats it as a real boolean attribute, so it takes a
              * boolean an empty string reads as false and warns.
              */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              aria-hidden={!expanded}
              inert={!expanded}
              className="faq-panel"
            >
              <div>
                <p className="m-0 px-6 pb-6 text-base text-muted">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
