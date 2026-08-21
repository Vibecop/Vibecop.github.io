import PageBanner from "@/components/PageBanner";
import Accordion from "@/components/Accordion";
import CallToAction from "@/components/CallToAction";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { FAQS } from "@/content/faqs";

export const metadata = {
  title: "FAQs",
  description: "Clear, straightforward answers about our process, security, and support.",
};

export default function FaqPage() {
  return (
    <>
      <PageBanner
        title="FAQs"
        lede="Find clear answers about our automation process, delivery, and ongoing support."
      />

      <Section>
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
