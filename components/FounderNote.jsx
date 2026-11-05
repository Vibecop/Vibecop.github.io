import Link from "next/link";
import { cn } from "@/lib/cn";
import { FOUNDER } from "@/content/founder";

/** Photo, one credibility line, link to /about/founder. Used where people decide to buy. */
export default function FounderNote({ line = FOUNDER.oneLiner, className }) {
  return (
    <div data-reveal className={cn("vc-card flex items-center gap-5 p-6", className)}>
      <img
        src={FOUNDER.image}
        alt={FOUNDER.name}
        loading="lazy"
        className="h-16 w-16 shrink-0 rounded-full object-cover"
      />
      <div>
        <p className="m-0 text-base text-white">{line}</p>
        <Link
          href="/about/founder"
          className="group mt-2 inline-flex items-center gap-2 text-sm font-semibold text-brand no-underline"
        >
          Meet the founder
          <i
            className="fa-solid fa-arrow-right text-xs transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  );
}
