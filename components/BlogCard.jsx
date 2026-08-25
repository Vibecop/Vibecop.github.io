import Link from "next/link";
import PostMedia from "@/components/PostMedia";
import { cn } from "@/lib/cn";

/** Icon + label, the pair the card's meta row is built from. */
function Meta({ icon, children }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <i className={cn(icon, "text-xs text-brand")} aria-hidden="true" />
      {children}
    </span>
  );
}

/**
 * One post, in the grid.
 *
 * `h-full` plus the column flex is what keeps a row of cards the same height
 * with their footers aligned, however uneven the excerpts are the converted
 * version set a fixed pixel height per breakpoint instead, which is why the
 * text escaped the card.
 *
 * `layout="wide"` is the one/two-column arrangement: media beside the text
 * rather than above it.
 */
export default function BlogCard({ post, layout = "stacked", className }) {
  const wide = layout === "wide";

  return (
    <article
      className={cn(
        "vc-card vc-card-hover flex h-full overflow-hidden",
        wide ? "flex-col sm:flex-row" : "flex-col",
        className
      )}
    >
      <Link
        href="/single-blog"
        tabIndex={-1}
        aria-hidden="true"
        className={cn("block shrink-0", wide && "sm:w-2/5")}
      >
        <PostMedia post={post} className={wide ? "h-full sm:aspect-auto" : undefined} />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted">
          <Meta icon="fa-solid fa-user">By : {post.author}</Meta>
          <Meta icon="fa-solid fa-tag">{post.tag}</Meta>
        </div>

        <p className="mt-3 text-base text-muted">{post.excerpt}</p>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
          <span className="text-sm text-muted">
            <Meta icon="fa-solid fa-calendar-days">{post.date}</Meta>
          </span>
          <Link
            href="/single-blog"
            className="vc-btn vc-btn-primary rounded-full px-4 py-2 text-sm font-semibold text-white no-underline"
          >
            Read More
            <span className="sr-only"> about {post.tag}</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
