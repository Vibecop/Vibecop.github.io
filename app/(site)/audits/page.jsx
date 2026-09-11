import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import CallToAction from "@/components/CallToAction";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { AUDIT_PAGES } from "@/content/audit-pages";

const LEDE =
  "Vibecop runs independent technical audits of software built with AI coding tools. Each audit below answers one question about a codebase: is it secure, will it scale, can it ship. Most engagements combine two or three.";

export const metadata = {
  title: { absolute: "AI Audits | Independent Technical Reviews of AI-Built Software" },
  description: LEDE,
  alternates: { canonical: "/audits" },
};

/* The tool pages live under /audits/, so this index is also the parent that
   URL resolves to. A static segment, so it wins over the [...slug] route. */
const BY_TOOL = AUDIT_PAGES.filter(({ path }) => path.startsWith("audits/"));
const BY_TOPIC = AUDIT_PAGES.filter(({ path }) => !path.startsWith("audits/"));

function AuditList({ pages }) {
  return (
    <ul data-stagger className="m-0 mt-12 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
      {pages.map((page) => (
        <li key={page.path} className="vc-card vc-card-hover p-8">
          <h3 className="text-h3">
            <Link href={`/${page.path}`} className="text-white no-underline hover:text-brand">
              {page.navLabel ?? page.h1}
            </Link>
          </h3>
          <p className="mt-3 text-base text-muted">{page.definition}</p>
          <Link
            href={`/${page.path}`}
            className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-brand no-underline"
          >
            What it checks
            <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function AuditsIndexPage() {
  return (
    <>
      <PageBanner title="AI Audits" breadcrumb="Audits" lede={LEDE} />

      <Section>
        <SectionHeading
          title="Audits by subject"
          lede="What the review is looking for, whatever built the code."
        />
        <AuditList pages={BY_TOPIC} />
      </Section>

      <Section tone="surface">
        <SectionHeading
          title="Audits by tool"
          lede="The same review, aimed at the patterns each AI build tool tends to leave behind."
        />
        <AuditList pages={BY_TOOL} />
      </Section>

      <CallToAction />
    </>
  );
}
