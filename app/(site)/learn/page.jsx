import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import CallToAction from "@/components/CallToAction";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { LEARN_PAGES } from "@/content/learn";

const LEDE =
  "Plain answers to the questions people ask about auditing AI-built software: what the terms mean, what actually goes wrong, and what to do about it. No sales pitch in the explanations; the service pages are linked separately.";

export const metadata = {
  title: { absolute: "AI Audit Glossary | Vibecop Learn" },
  description: LEDE,
  alternates: { canonical: "/learn" },
};

export default function LearnIndexPage() {
  return (
    <>
      <PageBanner title="AI Audit Glossary" breadcrumb="Learn" lede={LEDE} />

      <Section>
        <ul data-stagger className="m-0 grid list-none gap-6 p-0 md:grid-cols-2">
          {LEARN_PAGES.map((page) => (
            <li key={page.slug} className="vc-card vc-card-hover flex flex-col p-8">
              <h2 className="text-h3">
                <Link href={`/learn/${page.slug}`} className="text-white no-underline hover:text-brand">
                  {page.question}
                </Link>
              </h2>
              <p className="mt-3 text-base text-muted">{page.definition}</p>
              <Link
                href={`/learn/${page.slug}`}
                className="mt-auto inline-flex items-center gap-2 pt-5 text-base font-semibold text-brand no-underline"
              >
                Read the full answer
                <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>

        <div data-reveal className="mt-12 text-center">
          <Button href="/audits" variant="outline" size="lg">
            See the audits behind these answers
            <i className="fa-solid fa-arrow-right text-sm" aria-hidden="true" />
          </Button>
        </div>
      </Section>

      <CallToAction />
    </>
  );
}
