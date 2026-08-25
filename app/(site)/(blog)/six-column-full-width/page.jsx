import PageBanner from "@/components/PageBanner";
import BlogGrid from "@/components/BlogGrid";
import Section from "@/components/ui/Section";
import { POSTS } from "@/content/posts";

export const metadata = { title: "Six Column" };

export default function SixColumnFullWidthPage() {
  return (
    <>
      <PageBanner
        title="Six Column"
        lede="Notes on architecture, security, and production readiness for products built with AI what senior review finds, and why it matters."
      />
      {/* the one layout that runs edge to edge rather than inside the container */}
      <Section bleed className="px-4 sm:px-6">
        <BlogGrid posts={POSTS} columns={6} />
      </Section>
    </>
  );
}
