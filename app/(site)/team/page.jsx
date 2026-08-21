import PageBanner from "@/components/PageBanner";
import TeamGrid from "@/components/TeamGrid";
import CallToAction from "@/components/CallToAction";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Our Team",
  description: "Meet the experts behind the automation pipelines we design and deliver.",
};

export default function TeamPage() {
  return (
    <>
      <PageBanner
        title="Team"
        lede="Meet the experts behind the automation pipelines we design and deliver."
      />

      <Section>
        <SectionHeading
          title="Meet the Team"
          lede="The people designing smarter systems to remove busy work from your operations."
        />
        <TeamGrid className="mt-12" />
      </Section>

      <CallToAction />
    </>
  );
}
