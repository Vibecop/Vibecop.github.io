import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import CallToAction from "@/components/CallToAction";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { LEARN_PAGES, LEARN_PAGE_MAP } from "@/content/learn";

export function generateStaticParams() {
  return LEARN_PAGES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = LEARN_PAGE_MAP[slug];
  if (!page) return {};
  return {
    title: { absolute: page.title },
    description: page.definition,
    alternates: { canonical: `/learn/${page.slug}` },
  };
}

export default async function LearnArticlePage({ params }) {
  const { slug } = await params;
  const page = LEARN_PAGE_MAP[slug];
  if (!page) notFound();

  const others = LEARN_PAGES.filter((p) => p.slug !== page.slug);

  return (
    <>
      {/* H1 is the question; the definition answers it immediately underneath,
          written so it stands on its own when quoted elsewhere. */}
      <PageBanner title={page.question} breadcrumb={page.term} lede={page.definition} />

      <Section>
        <div className="mx-auto max-w-3xl">
          <div data-reveal className="vc-card p-8">
            <h2 className="text-h3">In short</h2>
            <ul className="m-0 mt-5 list-none space-y-3 p-0">
              {page.keyPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-base text-muted">
                  <i className="fa-solid fa-check mt-1.5 text-sm text-brand" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {page.sections.map((section) => (
            <div key={section.heading} data-reveal className="mt-14">
              <h2 className="text-h2">{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="mt-5 text-base text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          {/* The commercial counterpart. Explainer answers "what is this";
              the linked page answers "what would you check". */}
          <div data-reveal className="vc-card mt-14 p-8">
            <h2 className="text-h3">Vibecop and {page.term.toLowerCase()}</h2>
            <p className="mt-3 text-base text-muted">
              Vibecop is an AI-built software audit service. Senior engineers review the
              areas described above in real client codebases and return the findings ranked
              by business risk.
            </p>
            <Button href={page.service} variant="outline" className="mt-6">
              {page.serviceLabel}
              <i className="fa-solid fa-arrow-right text-sm" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <h2 className="text-h2 text-center">More from the glossary</h2>
        <ul data-stagger className="m-0 mt-10 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((other) => (
            <li key={other.slug}>
              <Link
                href={`/learn/${other.slug}`}
                className="vc-card vc-card-hover flex h-full items-center gap-3 p-6 text-base font-medium text-white no-underline transition-colors duration-200 hover:text-brand"
              >
                <i className="fa-solid fa-arrow-right text-sm text-brand" aria-hidden="true" />
                {other.term}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CallToAction />
    </>
  );
}
