import { cn } from "@/lib/cn";

/**
 * The design's one card treatment: translucent fill, hairline border, large
 * radius. `interactive` adds the hover lift the grids use.
 *
 * The fill is part of the treatment, so passing a different `bg-*` through
 * `className` does not reliably win — which utility applies is decided by
 * Tailwind's emit order, not by the order of the class list. A panel that
 * needs its own background should be a plain element rather than a Card.
 */
export default function Card({ as: Tag = "div", interactive, className, ...props }) {
  return (
    <Tag
      className={cn(
        "rounded-3xl border border-white/10 bg-white/5",
        interactive && "transition-colors duration-200 hover:border-brand/60 hover:bg-white/8",
        className
      )}
      {...props}
    />
  );
}
