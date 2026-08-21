import { cn } from "@/lib/cn";
import Container from "./Container";

/**
 * One band of the page: vertical rhythm, an optional background, and the
 * container. `bleed` skips the container for sections that manage their own
 * full-width layout.
 */
export default function Section({ as: Tag = "section", tone, bleed, className, children, ...props }) {
  const tones = {
    surface: "bg-surface",
    "surface-2": "bg-surface-2",
    "surface-3": "bg-surface-3",
  };

  return (
    <Tag
      className={cn("py-16 md:py-20 lg:py-25", tone && tones[tone], className)}
      {...props}
    >
      {bleed ? children : <Container>{children}</Container>}
    </Tag>
  );
}
