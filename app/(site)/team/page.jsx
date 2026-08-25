import PageBanner from "@/components/PageBanner";
import TeamGrid from "@/components/TeamGrid";
import CallToAction from "@/components/CallToAction";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Our Team",
  description:
    "The senior engineering judgment behind every Vibecop audit eight years of production experience across SaaS, AI, marketplaces, and cloud infrastructure.",
};

export default function TeamPage() {
  return (
    <>
      <PageBanner
        title="Team"
        lede="The senior engineering judgment behind every Vibecop audit."
      />

      <Section>
        <SectionHeading
          title="Who Reviews Your Product"
          lede="Eight years of production experience across SaaS, AI-native platforms, marketplaces, and cloud infrastructure patterns that only emerge at scale."
        />
        <TeamGrid className="mt-12" />
      </Section>

      <CallToAction />
    </>
  );
}
