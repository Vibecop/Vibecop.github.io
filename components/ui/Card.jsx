import { cn } from "@/lib/cn";

/**
 * The design's one card treatment: glass fill, hairline border, lit top edge,
 * large radius. `interactive` adds the hover lift and glow the grids use.
 *
 * The fill is part of the treatment and is set by `.vc-card` in theme.css, so
 * passing a different `bg-*` through `className` will not win — the rule is
 * unlayered and Tailwind's utilities are not. A panel that needs its own
 * background should be a plain element rather than a Card.
 */
export default function Card({ as: Tag = "div", interactive, className, ...props }) {
  return (
    <Tag
      className={cn(
        "vc-card",
        interactive && "vc-card-hover",
        className
      )}
      {...props}
    />
  );
}
