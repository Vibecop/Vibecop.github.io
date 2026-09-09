import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import CallToAction from "@/components/CallToAction";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AuditButton from "@/components/AuditButton";
import { AUDIT_PAGES, AUDIT_PAGE_MAP } from "@/content/audit-pages";

/*
 * The audit landing pages, one route for all twelve.
 *
 * A catch-all rather than two routes because the set spans two depths
 * (/ai-software-audit and /audits/cursor). Static segments win over dynamic
 * ones in Next's routing, so /about, /pricing and friends are unaffected, and
 * `output: "export"` builds only the paths generateStaticParams lists.
 */
export function generateStaticParams() {
  return AUDIT_PAGES.map(({ path }) => ({ slug: path.split("/") }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = AUDIT_PAGE_MAP[slug.join("/")];
  if (!page) return {};
  return {
    title: { absolute: page.title },
    description: page.definition,
    alternates: { canonical: `/${page.path}` },
  };
}

export default async function AuditLandingPage({ params }) {
  const { slug } = await params;
  const page = AUDIT_PAGE_MAP[slug.join("/")];
  if (!page) notFound();

  const others = AUDIT_PAGES.filter((p) => p.path !== page.path);

  return (
    <>
      {/* The definition paragraph is the banner lede so it sits directly under
          the h1: it is written to be lifted out of the page on its own. */}
      <PageBanner title={page.h1} breadcrumb={page.h1} lede={page.definition} />

      <Section>
        <SectionHeading title={page.checksTitle} />

        <ul
          data-stagger
          className="m-0 mt-12 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3"
        >
          {page.checks.map((check) => (
            <li key={check.name} className="vc-card vc-card-hover p-8">
              <h3 className="text-h3">{check.name}</h3>
              <p className="mt-3 text-base text-muted">{check.detail}</p>
            </li>
          ))}
        </ul>

        <div data-reveal className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <AuditButton size="lg">Request an audit</AuditButton>
          <Button href="/process" variant="ghost">
            See how an audit runs
            <i className="fa-solid fa-arrow-right text-sm" aria-hidden="true" />
          </Button>
        </div>
      </Section>

      {page.sections && (
        <Section tone="surface">
          <div className="mx-auto max-w-3xl">
            {page.sections.map((section) => (
              <div key={section.heading} data-reveal className="mt-14 first:mt-0">
                <h2 className="text-h2">{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="mt-5 text-base text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section tone={page.sections ? undefined : "surface"}>
        <SectionHeading
          title="Other audits"
          lede="Each audit answers a different question. Most engagements combine two or three."
        />

        <ul data-stagger className="m-0 mt-12 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((other) => (
            <li key={other.path}>
              <Link
                href={`/${other.path}`}
                className="vc-card vc-card-hover flex h-full items-center gap-3 p-6 text-base font-medium text-white no-underline transition-colors duration-200 hover:text-brand"
              >
                <i className="fa-solid fa-arrow-right text-sm text-brand" aria-hidden="true" />
                {other.navLabel ?? other.h1}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CallToAction />
    </>
  );
}
