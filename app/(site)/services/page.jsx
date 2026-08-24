import PageBanner from "@/components/PageBanner";
import FitFinder from "@/components/FitFinder";
import PricingCards from "@/components/PricingCards";
import CallToAction from "@/components/CallToAction";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { BLUEPRINTS, REVIEW_AREAS } from "@/content/services";

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
          mark={false}
          eyebrow="Services"
          align="left"
          title="What We Review"
          lede="Every audit covers the areas that determine whether your product survives production."
        />

        <ul
          data-stagger
          className="m-0 mt-12 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3"
        >
          {REVIEW_AREAS.map((area) => (
            <li key={area.title} className="vc-card vc-card-hover p-8">
              <span className="vc-card-art inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <i className={`fa-solid ${area.icon} text-lg text-brand`} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-h3">{area.title}</h3>
              <p className="mt-3 text-base text-muted">{area.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface">
        <SectionHeading
          title="Find Your Fit"
          lede="Discover the automation solutions that match your team’s workflow and goals."
        />
        <FitFinder />
      </Section>

      <Section>
        <SectionHeading title="Core Vibecop Blueprints" />

        <ul data-stagger className="m-0 mt-12 grid list-none gap-6 p-0 sm:grid-cols-2 xl:grid-cols-4">
          {BLUEPRINTS.map((bp) => (
            <li key={bp.name} className="vc-card vc-card-hover flex flex-col p-8">
              <span className="vc-delta self-start rounded-full px-3 py-1 text-sm font-semibold text-brand">
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

      <Section tone="surface">
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
