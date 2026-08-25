import PageBanner from "@/components/PageBanner";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import CallToAction from "@/components/CallToAction";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Case Studies",
  description:
    "Real outcomes: bottlenecks found, rebuilds avoided, architecture corrected before launch.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageBanner
        title="Case Studies"
        lede="Real outcomes: bottlenecks found, rebuilds avoided, architecture corrected before launch."
      />

      <Section>
        <SectionHeading
          title="Problems Caught Before Production"
          lede="What senior review found that automated scanning alone would have left in place."
        />
        <CaseStudyGrid />
      </Section>

      <CallToAction />
    </>
  );
}
