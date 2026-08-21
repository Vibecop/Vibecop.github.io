import PageBanner from "@/components/PageBanner";
import BlogGrid from "@/components/BlogGrid";
import Section from "@/components/ui/Section";
import { POSTS } from "@/content/posts";

export const metadata = { title: "Four Column" };

export default function FourColumnPage() {
  return (
    <>
      <PageBanner
        title="Four Column"
        lede="AI-powered SaaS solutions designed for speed, scalability, and innovation. Helping startups build smarter systems and grow with confidence in a digital-first world."
      />
      <Section>
        <BlogGrid posts={POSTS.slice(0, 8)} columns={4} />
      </Section>
    </>
  );
}
