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
 * `defaultOpen` is the index that starts expanded — pass `null` for none.
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
            className={cn(
              "faq-item overflow-hidden rounded-2xl border transition-colors duration-200",
              expanded ? "border-brand/60 bg-white/5" : "border-white/10 bg-white/[0.03]"
            )}
          >
            <h3 className="m-0">
              <button
                id={headingId}
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-lg font-semibold text-white transition-colors duration-200 hover:text-brand md:text-xl"
              >
                {item.question}
                <span
                  aria-hidden="true"
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-200",
                    expanded ? "rotate-45 border-brand bg-brand text-white" : "border-white/25 text-white"
                  )}
                >
                  <i className="fa-solid fa-plus text-xs" />
                </span>
              </button>
            </h3>

            <div id={panelId} role="region" aria-labelledby={headingId} hidden={!expanded}>
              <p className="m-0 px-6 pb-6 text-base text-muted">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
