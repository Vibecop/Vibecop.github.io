import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import CallToAction from "@/components/CallToAction";
import Section from "@/components/ui/Section";
import { ARTICLES, ARTICLE_MAP } from "@/content/articles";

export function generateStaticParams() {
  return ARTICLES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = ARTICLE_MAP[slug];
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { type: "article", url: `/blog/${slug}`, siteName: "Vibecop", publishedTime: article.isoDate, images: article.cover },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = ARTICLE_MAP[slug];
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: `https://vibecop.io${article.cover}`,
    datePublished: article.isoDate,
    author: { "@id": "https://vibecop.io/#organization" },
    publisher: { "@id": "https://vibecop.io/#organization" },
    mainEntityOfPage: `https://vibecop.io/blog/${slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageBanner title={article.title} breadcrumb="Blog" lede={`By ${article.author} • ${article.date}`} />

      <Section>
        <article data-reveal className="mx-auto max-w-3xl">
          <img
            src={article.cover}
            alt=""
            className="aspect-16/9 w-full rounded-3xl object-cover shadow-[0_1.5rem_3.5rem_rgb(0_0_0/45%)]"
          />

          {article.body.map((paragraph) => (
            <p key={paragraph} className="mt-6 text-base text-muted">
              {paragraph}
            </p>
          ))}

          <blockquote className="vc-card mt-8 border-l-4 border-l-brand p-8">
            <p className="m-0 text-xl font-medium italic text-white">{article.quote}</p>
          </blockquote>

          <ul className="m-0 mt-8 grid list-none gap-3 p-0 sm:grid-cols-2">
            {article.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-base text-muted">
                <i className="fa-solid fa-check mt-1.5 text-sm text-brand" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </article>
      </Section>

      <CallToAction />
    </>
  );
}
