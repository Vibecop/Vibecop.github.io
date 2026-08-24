import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import { CATEGORIES, POPULAR_POSTS, TAGS } from "@/content/blog-sidebar";

function Widget({ title, children }) {
  return (
    <section className="vc-card p-6">
      <h2 className="text-h3">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default function BlogSidebar() {
  return (
    <aside className="flex flex-col gap-6" aria-label="Blog sidebar">
      <Widget title="Search">
        {/* No search backend exists in the kit, so this submits nowhere. */}
        <form role="search" action="/blog" className="relative">
          <label htmlFor="blog-search" className="sr-only">
            Search articles
          </label>
          <input
            id="blog-search"
            type="search"
            name="q"
            placeholder="Search articles…"
            className="vc-field w-full rounded-full py-3 pl-5 pr-12 text-base text-white placeholder:text-muted-3"
          />
          <button
            type="submit"
            aria-label="Search"
            className="vc-btn vc-btn-primary absolute right-1.5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-white"
          >
            <i className="fa-solid fa-magnifying-glass text-sm" aria-hidden="true" />
          </button>
        </form>
      </Widget>

      <Widget title="Popular Posts">
        <ul className="m-0 list-none space-y-5 p-0">
          {POPULAR_POSTS.map((post) => (
            <li key={post.title}>
              <Link
                href="/single-blog"
                className="text-base font-semibold text-white no-underline transition-colors duration-200 hover:text-brand"
              >
                {post.title}
              </Link>
              <p className="mt-1.5 text-sm text-muted">
                {post.meta}
                <span aria-hidden="true" className="px-2 text-white/25">
                  •
                </span>
                {post.category}
              </p>
            </li>
          ))}
        </ul>
      </Widget>

      <Widget title="Categories">
        <ul className="m-0 list-none space-y-3 p-0">
          {CATEGORIES.map(({ label, count }) => (
            <li key={label}>
              <Link
                href="/blog"
                className="flex items-center justify-between gap-3 text-base text-muted no-underline transition-colors duration-200 hover:text-brand"
              >
                {label}
                <span className="text-sm text-muted-3">({count})</span>
              </Link>
            </li>
          ))}
        </ul>
      </Widget>

      <Widget title="Tags">
        <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
          {TAGS.map((tag) => (
            <li key={tag}>
              <Link
                href="/blog"
                className="vc-btn vc-btn-outline inline-block rounded-full px-3 py-1.5 text-sm text-muted no-underline"
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </Widget>

      <Widget title="Newsletter">
        <NewsletterForm />
      </Widget>
    </aside>
  );
}
