import PageBanner from "@/components/PageBanner";
import FitFinder from "@/components/FitFinder";
import PricingCards from "@/components/PricingCards";
import CallToAction from "@/components/CallToAction";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { BLUEPRINTS } from "@/content/services";

export const metadata = {
  title: "Services",
  description: "Outcome-first automation across ops, sales, e-commerce, and data. Pick one or combine.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Services"
        lede="Outcome-first automation across ops, sales, e-commerce, and data. Pick one or combine."
      />

      <Section>
        <SectionHeading
          title="Find Your Fit"
          lede="Discover the automation solutions that match your team’s workflow and goals."
        />
        <FitFinder />
      </Section>

      <Section tone="surface">
        <SectionHeading title="Core Vibecop Blueprints" />

        <ul className="m-0 mt-12 grid list-none gap-6 p-0 sm:grid-cols-2 xl:grid-cols-4">
          {BLUEPRINTS.map((bp) => (
            <li
              key={bp.name}
              className="flex flex-col rounded-3xl border border-white/10 bg-white/5 p-8 transition-colors duration-200 hover:border-brand/50"
            >
              <span className="self-start rounded-full bg-brand/15 px-3 py-1 text-sm font-semibold text-brand">
                {bp.saved}
              </span>
              <h3 className="mt-4 text-h3">{bp.name}</h3>

              <dl className="mt-5 space-y-2.5 text-base">
                {[
                  ["Trigger", bp.trigger],
                  ["Output", bp.output],
                  ["KPI", bp.kpi],
                ].map(([term, value]) => (
                  <div key={term} className="flex justify-between gap-3">
                    <dt className="text-muted">{term}:</dt>
                    <dd className="m-0 text-right font-medium text-white">{value}</dd>
                  </div>
                ))}
              </dl>

              <Button href="/single-services" variant="outline" className="mt-8 w-full">
                Pipeline Specs
                <span className="sr-only"> for {bp.name}</span>
              </Button>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          title="Investment Built on ROI"
          lede="Fixed-scope projects. No monthly fees. You own the code."
        />
        <PricingCards className="mt-12" />
      </Section>

      <CallToAction />
    </>
  );
}
