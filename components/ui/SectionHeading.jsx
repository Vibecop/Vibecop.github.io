import { cn } from "@/lib/cn";

/**
 * The mark / eyebrow / title / lede stack that opens almost every section.
 * The mark is the same figure the CRM band uses, and it opens every heading
 * `eyebrow` adds a kicker line beneath it rather than replacing it, and
 * `mark={false}` is left for a heading that has to go without.
 * `align="left"` is used by the split layouts; everything else is centred.
 *
 * Carries `data-reveal`, so every section on the site opens with the same
 * fade-up without any page having to ask for it.
 */
export default function SectionHeading({ mark = true, eyebrow, title, lede, align = "center", className, children }) {
  return (
    <div
      data-reveal
      className={cn(
        "section-heading flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {mark && (
        <img src="/assets/images/special-img.png" alt="" aria-hidden="true" className="h-16 w-auto" />
      )}
      {eyebrow && (
        <p className="m-0 text-sm font-semibold uppercase tracking-wide text-brand">{eyebrow}</p>
      )}
      <h2 className="text-h2 max-w-3xl">{title}</h2>
      {lede && <p className="max-w-2xl text-balance text-muted">{lede}</p>}
      {children}
    </div>
  );
}
