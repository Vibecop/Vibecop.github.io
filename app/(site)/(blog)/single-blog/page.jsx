import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import CommentForm from "@/components/CommentForm";
import NewsletterForm from "@/components/NewsletterForm";
import CallToAction from "@/components/CallToAction";
import Section from "@/components/ui/Section";
import { POST, POST_CATEGORIES, RECENT_POSTS } from "@/content/single-post";

export const metadata = {
  title: "Single Blog",
  description: POST.title,
};

function Widget({ title, children }) {
  return (
    <section data-reveal className="vc-card p-6">
      <h2 className="text-h3">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default function SingleBlogPage() {
  return (
    <>
      <PageBanner
        title="Single Blog"
        lede="AI-powered SaaS solutions designed for speed, scalability, and innovation. Helping startups build smarter systems and grow with confidence in a digital-first world."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <article data-reveal className="lg:col-span-8">
            <p className="m-0 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted">
              <span className="inline-flex items-center gap-1.5">
                <i className="fa-solid fa-user text-xs text-brand" aria-hidden="true" />
                By : {POST.author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <i className="fa-solid fa-calendar-days text-xs text-brand" aria-hidden="true" />
                {POST.date}
              </span>
            </p>

            <h2 className="text-h1 mt-4">{POST.title}</h2>

            <img
              src={POST.image}
              alt=""
              aria-hidden="true"
              className="mt-8 aspect-16/9 w-full rounded-3xl object-cover shadow-[0_1.5rem_3.5rem_rgb(0_0_0/45%)]"
            />

            {POST.body.map((paragraph) => (
              <p key={paragraph} className="mt-6 text-base text-muted">
                {paragraph}
              </p>
            ))}

            <blockquote className="vc-card mt-8 border-l-4 border-l-brand p-8">
              <p className="m-0 text-xl font-medium italic text-white">{POST.quote}</p>
            </blockquote>

            <ul className="m-0 mt-8 grid list-none gap-3 p-0 sm:grid-cols-2">
              {POST.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-base text-muted">
                  <i className="fa-solid fa-check mt-1.5 text-sm text-brand" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>

            <section className="mt-14 border-t border-white/8 pt-10">
              <h2 className="text-h2">Leave Us a Reply:</h2>
              <p className="mt-3 text-base text-muted">
                Share your thoughts, ideas, or questions about SaaS and AI solutions. Our team is
                here to help you build better digital products.
              </p>
              <CommentForm />
            </section>
          </article>

          <aside className="flex flex-col gap-6 lg:col-span-4" aria-label="Post sidebar">
            <Widget title="Subscribe to our Newsletter">
              <p className="m-0 text-base text-muted">Latest Updates</p>
              <NewsletterForm />
            </Widget>

            <Widget title="Recent Posts">
              <ul className="m-0 list-none space-y-5 p-0">
                {RECENT_POSTS.map((post) => (
                  <li key={post.title} className="flex gap-4">
                    <img
                      src={post.image}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="h-16 w-16 shrink-0 rounded-xl object-cover"
                    />
                    <div>
                      <p className="m-0 text-xs text-muted">
                        By {post.author}
                        <span aria-hidden="true" className="px-1.5 text-white/25">
                          •
                        </span>
                        {post.date}
                      </p>
                      <Link
                        href="/single-blog"
                        className="mt-1 block text-base font-semibold text-white no-underline transition-colors duration-200 hover:text-brand"
                      >
                        {post.title}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>

              <Link
                href="/blog"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand no-underline hover:text-white"
              >
                View All
                <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true" />
              </Link>
            </Widget>

            <Widget title="Categories">
              <ul className="m-0 list-none space-y-3 p-0">
                {POST_CATEGORIES.map(({ label, count }) => (
                  <li key={label}>
                    <Link
                      href="/blog"
                      className="flex items-center justify-between gap-3 text-base text-muted no-underline transition-colors duration-200 hover:text-brand"
                    >
                      {label}
                      <span className="text-sm text-muted-3">{count}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Widget>
          </aside>
        </div>
      </Section>

      <CallToAction />
    </>
  );
}
