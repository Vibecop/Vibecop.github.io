import Link from "next/link";

/** The titled card used on the blog index. */
export default function ArticleCard({ article, cta = "Read More" }) {
  return (
    <article className="vc-card vc-card-hover group flex h-full flex-col overflow-hidden">
      <div className="overflow-hidden">
        <img
          src={article.image}
          alt=""
          loading="lazy"
          className="vc-card-art aspect-16/10 w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="m-0 text-sm text-muted">
          By {article.author}
          <span aria-hidden="true" className="px-2 text-white/25">
            •
          </span>
          {article.date}
        </p>

        <h3 className="mt-3 text-h3">
          <Link
            href="/single-blog"
            className="text-white no-underline transition-colors duration-200 hover:text-brand"
          >
            {article.title}
          </Link>
        </h3>

        <Link
          href="/single-blog"
          className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand no-underline transition-colors duration-200 hover:text-white"
        >
          {cta}
          <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true" />
          <span className="sr-only"> — {article.title}</span>
        </Link>
      </div>
    </article>
  );
}
