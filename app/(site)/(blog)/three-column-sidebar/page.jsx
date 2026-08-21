import PageBanner from "@/components/PageBanner";
import BlogGrid from "@/components/BlogGrid";
import BlogSidebar from "@/components/BlogSidebar";
import Section from "@/components/ui/Section";
import { POSTS } from "@/content/posts";

export const metadata = { title: "Three Column Sidebar" };

export default function ThreeColumnSidebarPage() {
  return (
    <>
      <PageBanner
        title="Three Column"
        breadcrumb="Three Column Sidebar"
        lede="AI-powered SaaS solutions designed for speed, scalability, and innovation. Helping startups build smarter systems and grow with confidence in a digital-first world."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8 xl:col-span-9">
            <BlogGrid posts={POSTS.slice(0, 4)} columns={2} />
          </div>
          <div className="lg:col-span-4 xl:col-span-3">
            <BlogSidebar />
          </div>
        </div>
      </Section>
    </>
  );
}
