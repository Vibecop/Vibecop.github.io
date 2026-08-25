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
        lede="Notes on architecture, security, and production readiness for products built with AI what senior review finds, and why it matters."
      />
      <Section>
        <BlogGrid posts={POSTS.slice(0, 6)} columns={1} />
      </Section>
    </>
  );
}
