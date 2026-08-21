import PageBanner from "@/components/PageBanner";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import CallToAction from "@/components/CallToAction";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Case Studies",
  description: "Real outcomes: time saved, errors reduced, response times cut across teams.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageBanner
        title="Case Studies"
        lede="Real outcomes: time saved, errors reduced, response times cut across teams."
      />

      <Section>
        <SectionHeading
          title="Real Automation Results"
          lede="See how our automation pipelines deliver measurable improvements."
        />
        <CaseStudyGrid />
      </Section>

      <CallToAction />
    </>
  );
}
