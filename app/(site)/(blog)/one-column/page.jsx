import PageBanner from "@/components/PageBanner";
import BlogGrid from "@/components/BlogGrid";
import Section from "@/components/ui/Section";
import { POSTS } from "@/content/posts";

export const metadata = { title: "One Column" };

export default function OneColumnPage() {
  return (
    <>
      <PageBanner
        title="One Column"
        lede="AI-powered SaaS solutions designed for speed, scalability, and innovation. Helping startups build smarter systems and grow with confidence in a digital-first world."
      />
      <Section>
        <BlogGrid posts={POSTS.slice(0, 6)} columns={1} />
      </Section>
    </>
  );
}
