import PageBanner from "@/components/PageBanner";
import ArticleCard from "@/components/ArticleCard";
import Pagination from "@/components/Pagination";
import CallToAction from "@/components/CallToAction";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { ARTICLES } from "@/content/articles";

export const metadata = {
  title: "Blog",
  description:
    "SaaS-driven innovation, AI-powered solutions, and scalable growth. Built for startups to launch faster, optimize smarter, and grow without limits.",
};

export default function BlogPage() {
  return (
    <>
      <PageBanner
        title="Blog"
        lede="SaaS-driven innovation, AI-powered solutions, and scalable growth. Built for startups to launch faster, optimize smarter, and grow without limits."
      />

      <Section>
        <SectionHeading
          title="Discover Knowledge, Tips, & Inspiration in Our Blog"
          lede="Read our latest articles, tips, & expert insights to stay informed and inspired."
        />

        <div data-stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article, i) => (
            <ArticleCard key={article.slug} article={article} cta={i === 0 ? "Learn More" : "Read More"} />
          ))}
        </div>

        <Pagination
          current="1"
          prev="/single-blog"
          next="/four-column"
          pages={[
            { href: "/one-column", label: "1" },
            { href: "/two-column", label: "2" },
            { href: "/three-column", label: "3" },
          ]}
        />
      </Section>

      <CallToAction />
    </>
  );
}
