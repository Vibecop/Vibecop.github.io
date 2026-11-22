import PageBanner from "@/components/PageBanner";
import ArticleCard from "@/components/ArticleCard";
import CallToAction from "@/components/CallToAction";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { ARTICLES } from "@/content/articles";
import { AUDIT_PAGES, inAuditMenu } from "@/content/audit-pages";
import { SERVICE_PAGES } from "@/content/service-pages";

/* The service pages and the audit pages kept out of the Audits menu (vibe
   code + the per-tool pages) have no menu link, so they are listed here as
   guides to give them a path in from the site. */
const GUIDES = [
  ...SERVICE_PAGES.map((p) => ({ href: `/services/${p.slug}`, title: p.title })),
  ...AUDIT_PAGES.filter((p) => !inAuditMenu(p)).map((p) => ({ href: `/${p.path}`, title: p.h1 })),
].map((g, i) => ({ ...g, slug: g.href, image: `/assets/images/gallery-img${(i % 5) + 2}.jpg` }));

export const metadata = {
  title: "Blog",
  description:
    "Field notes from Vibecop audits: architecture, security and production readiness for software built with AI coding tools.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageBanner
        title="Blog"
        lede="Notes on architecture, security, and production readiness for products built with AI what senior review finds, and why it matters."
      />

      <Section>
        <SectionHeading
          title="What We Find, and Why It Matters"
          lede="Field notes from production reviews the failures that repeat, and the decisions that prevent them."
        />

        <div data-stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...ARTICLES, ...GUIDES].map((article, i) => (
            <ArticleCard key={article.slug} article={article} cta={i === 0 ? "Learn More" : "Read More"} />
          ))}
        </div>
      </Section>

      <CallToAction />
    </>
  );
}
