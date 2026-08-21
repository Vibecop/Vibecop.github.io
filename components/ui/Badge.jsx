import { cn } from "@/lib/cn";

/** The small outlined pill used for hero claims and post tags. */
export default function Badge({ className, children, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/20",
        "px-4 py-2 text-sm font-medium text-white",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
