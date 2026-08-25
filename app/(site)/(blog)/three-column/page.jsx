import PageBanner from "@/components/PageBanner";
import BlogGrid from "@/components/BlogGrid";
import Section from "@/components/ui/Section";
import { POSTS } from "@/content/posts";

export const metadata = { title: "Three Column" };

export default function ThreeColumnPage() {
  return (
    <>
      <PageBanner
        title="Three Column"
        lede="Notes on architecture, security, and production readiness for products built with AI what senior review finds, and why it matters."
      />
      <Section>
        <BlogGrid posts={POSTS.slice(0, 3)} columns={3} />
      </Section>
    </>
  );
}
