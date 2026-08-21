import PageBanner from "@/components/PageBanner";
import PricingCards from "@/components/PricingCards";
import Accordion from "@/components/Accordion";
import CallToAction from "@/components/CallToAction";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { FAQS } from "@/content/faqs";

export const metadata = {
  title: "Pricing",
  description: "Fixed-scope projects. No monthly fees. You own the workflows.",
};

export default function PricingPage() {
  return (
    <>
      <PageBanner
        title="Pricing"
        lede="Fixed-scope projects. No monthly fees. You own the workflows."
      />

      <Section>
        <SectionHeading
          title="Investment Built on ROI"
          lede="Fixed-scope projects. No monthly fees. You own the code."
        />
        <PricingCards className="mt-12" />
      </Section>

      <Section tone="surface">
        <SectionHeading
          title="Frequently Asked Questions"
          lede="Clear, straightforward answers about our process, security, and support."
        />
        <Accordion items={FAQS} className="mx-auto mt-12 max-w-4xl" />
      </Section>

      <CallToAction />
    </>
  );
}
