import PageBanner from "@/components/PageBanner";
import ScopeBuilder from "@/components/ScopeBuilder";
import Accordion from "@/components/Accordion";
import CallToAction from "@/components/CallToAction";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { FAQS } from "@/content/faqs";
import { HOW_IT_WORKS, INCLUDED, STACK } from "@/content/single-service";

export const metadata = {
  title: "Single Services",
  description: "From form or email to CRM and calendar — first response in minutes, not hours.",
};

export default function SingleServicesPage() {
  return (
    <>
      <PageBanner
        title="Single Service"
        breadcrumb="Service Detail"
        lede="From form or email to CRM and calendar — first response in minutes, not hours."
      />

      <Section>
        <SectionHeading
          title="Scope Builder"
          lede="Pick your triggers, tools, and outputs. We’ll give you a build sheet."
        />
        <ScopeBuilder />
      </Section>

      <Section tone="surface">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title="What’s included in Lead Flow Automation" align="left" mark={false} />
            <p className="mt-5 text-base text-muted">
              From form or email to CRM and calendar — first response in minutes, not hours.
            </p>
            <ul className="m-0 mt-7 list-none space-y-3 p-0">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-muted">
                  <i className="fa-solid fa-check mt-1.5 text-sm text-brand" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/contact" size="lg" className="mt-8">
              Book an Automation Audit
            </Button>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-h3">Works With Your Stack</h3>
            <ul className="m-0 mt-5 list-none space-y-2 p-0">
              {STACK.map((line) => (
                <li key={line} className="text-base text-muted">
                  {line}
                </li>
              ))}
            </ul>
            <Button href="/contact" variant="outline" className="mt-8">
              Check My Tools
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading title="How it works" />

        <ol className="m-0 mt-12 grid list-none gap-6 p-0 md:grid-cols-3">
          {HOW_IT_WORKS.map((step, i) => (
            <li key={step.title} className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <span aria-hidden="true" className="text-4xl font-bold leading-none text-brand/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-h3">{step.title}</h3>
              <p className="mt-3 text-base text-muted">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <Button href="/contact" size="lg">
            Start this Service
          </Button>
        </div>
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
