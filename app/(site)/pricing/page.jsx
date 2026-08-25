import PageBanner from "@/components/PageBanner";
import PricingCards from "@/components/PricingCards";
import Accordion from "@/components/Accordion";
import CallToAction from "@/components/CallToAction";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { FAQS } from "@/content/faqs";

export const metadata = {
  title: "Pricing",
  description:
    "Fixed-scope audits and sprints, priced up front. One prevented incident typically covers the cost many times over.",
};

export default function PricingPage() {
  return (
    <>
      <PageBanner
        title="Pricing"
        lede="Fixed-scope audits and sprints, priced up front. One prevented incident typically covers the cost many times over."
      />

      <Section>
        <SectionHeading
          title="Scoped Engagements, Priced Up Front"
          lede="Pick a single audit or ongoing assurance. Every engagement ends in findings your team can act on."
        />
        <PricingCards className="mt-12" />
      </Section>

      <Section tone="surface">
        <SectionHeading
          title="Frequently Asked Questions"
          lede="Clear, straightforward answers about scope, security, and what happens after the audit."
        />
        <Accordion items={FAQS} className="mx-auto mt-12 max-w-4xl" />
      </Section>

      <CallToAction />
    </>
  );
}
