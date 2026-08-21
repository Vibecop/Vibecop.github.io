import { cn } from "@/lib/cn";

/**
 * The eyebrow-mark / title / lede stack that opens almost every section.
 * `align="left"` is used by the split layouts; everything else is centred.
 */
export default function SectionHeading({ mark = true, title, lede, align = "center", className, children }) {
  return (
    <div
      className={cn(
        "section-heading flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {mark && (
        <img src="/assets/images/special-img.png" alt="" aria-hidden="true" className="h-8 w-auto" />
      )}
      <h2 className="text-h2 max-w-3xl">{title}</h2>
      {lede && <p className="max-w-2xl text-balance text-muted">{lede}</p>}
      {children}
    </div>
  );
}
