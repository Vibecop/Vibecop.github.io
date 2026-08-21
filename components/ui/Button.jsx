import Link from "next/link";
import { cn } from "@/lib/cn";

const VARIANTS = {
  /* the solid orange call to action */
  primary: "bg-brand text-white hover:bg-brand-dim",
  /* outlined pill, used on dark panels */
  outline: "border border-white/25 text-white hover:border-brand hover:bg-brand",
  /* white pill, used inside the orange promo bar */
  invert: "bg-white text-ink hover:bg-white/85",
  /* text + arrow, no chrome */
  ghost: "text-white hover:text-brand",
};

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base",
};

/**
 * Renders a `next/link` when given an `href`, a `<button>` otherwise, so the
 * same call site covers both without the caller choosing an element.
 */
export default function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold",
    "transition-colors duration-200 no-underline",
    VARIANTS[variant],
    variant === "ghost" ? "px-0 py-0 text-base" : SIZES[size],
    className
  );

  if (href) {
    const external = /^(https?:|mailto:|tel:)/.test(href);
    return external ? (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    ) : (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
