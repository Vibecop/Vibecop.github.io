import PageBanner from "@/components/PageBanner";
import ScopeBuilder from "@/components/ScopeBuilder";
import Accordion from "@/components/Accordion";
import CallToAction from "@/components/CallToAction";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AuditButton from "@/components/AuditButton";
import { FAQS } from "@/content/faqs";
import { HOW_IT_WORKS, INCLUDED, STACK } from "@/content/single-service";

export const metadata = {
  title: "Architectural Risk Audit",
  description:
    "A full review of your system design, data flows, and structural weaknesses found before they become expensive to fix.",
};

export default function SingleServicesPage() {
  return (
    <>
      <PageBanner
        title="Architectural Risk Audit"
        breadcrumb="Service Detail"
        lede="A full review of your system design, data flows, and structural weaknesses found before they become expensive to fix."
      />

      <Section>
        <SectionHeading
          title="Scope Builder"
          lede="Tell us how it was built and what to focus on. We’ll come back with a scoped audit plan."
        />
        <ScopeBuilder />
      </Section>

      <Section tone="surface">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div data-reveal="left">
            <SectionHeading title="What’s included in an Architectural Risk Audit" align="left" />
            <p className="mt-5 text-base text-muted">
              Architecture, scalability, and security assessed through a production lens not a
              checklist. We ask what breaks under real conditions.
            </p>
            <ul className="m-0 mt-7 list-none space-y-3 p-0">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-muted">
                  <i className="fa-solid fa-check mt-1.5 text-sm text-brand" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <AuditButton size="lg" className="mt-8">
              Request an audit
            </AuditButton>
          </div>

          <div data-reveal="right" className="vc-card p-8">
            <h3 className="text-h3">Stacks We Review</h3>
            <ul className="m-0 mt-5 list-none space-y-2 p-0">
              {STACK.map((line) => (
                <li key={line} className="text-base text-muted">
                  {line}
                </li>
              ))}
            </ul>
            <Button href="/contact" variant="outline" className="mt-8">
              Check My Stack
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading title="How it works" />

        <ol data-stagger className="vc-steps vc-steps-3 m-0 mt-12 grid list-none gap-6 p-0 md:grid-cols-3">
          {HOW_IT_WORKS.map((step, i) => (
            <li key={step.title} className="vc-card vc-card-hover p-8">
              <span className="vc-step-index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-h3">{step.title}</h3>
              <p className="mt-3 text-base text-muted">{step.body}</p>
            </li>
          ))}
        </ol>

        <div data-reveal className="mt-12 text-center">
          <Button href="/contact" size="lg">
            Start an audit
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
