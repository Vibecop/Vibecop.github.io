import { cn } from "@/lib/cn";

/**
 * The small pill used for hero claims and post tags. The ring is a masked
 * gradient rather than a flat border the reference draws it white→orange→
 * white which `.vc-badge` in theme.css supplies.
 */
export default function Badge({ className, children, ...props }) {
  return (
    <span
      className={cn(
        "vc-badge inline-flex items-center gap-2 rounded-full border",
        "px-4 py-2 text-sm font-medium text-white",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
