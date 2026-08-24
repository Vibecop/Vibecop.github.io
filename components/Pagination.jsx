import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * The kit's pager. It does not page through anything — each number points at
 * one of the column-layout demos — so it is rendered as the navigation it
 * actually is, with the current page marked.
 */
export default function Pagination({ pages, current, prev, next }) {
  const step = (href, label, icon) =>
    href && (
      <li>
        <Link
          href={href}
          aria-label={label}
          className="vc-btn vc-btn-outline flex h-11 w-11 items-center justify-center rounded-full text-white no-underline"
        >
          <i className={icon} aria-hidden="true" />
        </Link>
      </li>
    );

  return (
    <nav aria-label="Pagination" className="mt-14">
      <ul className="m-0 flex list-none items-center justify-center gap-3 p-0">
        {step(prev, "Previous page", "fa-solid fa-angle-left")}

        {pages.map(({ href, label }) => {
          const active = label === current;
          return (
            <li key={label}>
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full text-base font-semibold no-underline transition-colors duration-200",
                  active
                    ? "vc-btn vc-btn-primary text-white"
                    : "vc-btn vc-btn-outline text-white"
                )}
              >
                {label}
              </Link>
            </li>
          );
        })}

        {step(next, "Next page", "fa-solid fa-angle-right")}
      </ul>
    </nav>
  );
}
