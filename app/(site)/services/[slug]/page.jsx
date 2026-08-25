import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import Accordion from "@/components/Accordion";
import CallToAction from "@/components/CallToAction";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AuditButton from "@/components/AuditButton";
import { FAQS } from "@/content/faqs";
import { SERVICE_PAGES, SERVICE_PAGE_MAP } from "@/content/service-pages";

/* The four services are known at build time, so they prerender as static
   pages the same way the rest of the site does. */
export function generateStaticParams() {
  return SERVICE_PAGES.map(({ slug }) => ({ slug }));
}

/* `params` is a promise in Next 16 reading `.slug` off it directly yields
   undefined, which sent every one of these pages to notFound(). */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = SERVICE_PAGE_MAP[slug];
  if (!service) return {};
  return { title: service.title, description: service.lede };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = SERVICE_PAGE_MAP[slug];
  if (!service) notFound();

  return (
    <>
      <PageBanner title={service.title} breadcrumb="Services" lede={service.lede} />

      <Section>
        {/* the scope card is the shorter of the two columns, so centre it
            against the checklist rather than letting it hang off the top */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div data-reveal="left">
            <SectionHeading title={service.includedTitle} align="left" />
            <p className="mt-5 text-base text-muted">{service.summary}</p>

            <ul className="m-0 mt-7 list-none space-y-3 p-0">
              {service.included.map((item) => (
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
            <h3 className="text-h3">{service.scopeTitle}</h3>
            <ul className="m-0 mt-5 list-none space-y-2 p-0">
              {service.scope.map((line) => (
                <li key={line} className="text-base text-muted">
                  {line}
                </li>
              ))}
            </ul>

            <p className="mt-8 flex items-baseline gap-2 border-t border-white/10 pt-8 text-white">
              {service.price ? (
                <>
                  <span className="text-2xl font-bold tracking-tight">{service.price}</span>
                  <span className="text-sm text-muted">{service.priceNote}</span>
                </>
              ) : (
                <span className="text-base text-muted">{service.priceNote}</span>
              )}
            </p>

            <Button href="/pricing" variant="outline" className="mt-6">
              See all pricing
            </Button>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading title={service.findingsTitle} lede={service.findingsLede} />

        <ul
          data-stagger
          className="m-0 mt-12 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3"
        >
          {service.findings.map((finding) => (
            <li key={finding.title} className="vc-card vc-card-hover p-8">
              <span className="vc-card-art inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <i className={`fa-solid ${finding.icon} text-lg text-brand`} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-h3">{finding.title}</h3>
              <p className="mt-3 text-base text-muted">{finding.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading title="How it works" />

        <ol
          data-stagger
          className="vc-steps vc-steps-3 m-0 mt-12 grid list-none gap-6 p-0 md:grid-cols-3"
        >
          {service.steps.map((step, i) => (
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
          <Button href="/services" variant="outline" size="lg">
            See all services
          </Button>
        </div>
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
