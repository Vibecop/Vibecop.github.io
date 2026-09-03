import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import CallToAction from "@/components/CallToAction";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AuditButton from "@/components/AuditButton";
import { CASE_STUDY_PAGES, CASE_STUDY_MAP } from "@/content/case-studies";
import { cn } from "@/lib/cn";

/* Only the studies carrying `detail` get a page; the rest stay cards on the
   index. Same prerendering as /services/[slug]. */
export function generateStaticParams() {
  return CASE_STUDY_PAGES.map(({ slug }) => ({ slug }));
}

/* `params` is a promise in Next 16 the same trap as the services route. */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = CASE_STUDY_MAP[slug];
  if (!study) return {};
  return { title: study.title, description: study.detail.lede };
}

/* Critical and high carry the alert colours; medium stays in the muted
   register so a wall of findings still has a visible severity gradient. */
const SEVERITY = {
  Critical: "text-red-400 border-red-400/30 bg-red-400/10",
  High: "text-amber-400 border-amber-400/30 bg-amber-400/10",
  Medium: "text-muted border-white/15 bg-white/5",
};

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const study = CASE_STUDY_MAP[slug];
  if (!study) notFound();

  const d = study.detail;

  return (
    <>
      <PageBanner title={study.title} breadcrumb="Case Studies" lede={d.lede} />

      <Section>
        <div data-reveal className="mx-auto max-w-4xl">
          <p className="text-base text-muted">{d.context}</p>
        </div>

        {/* the four-up fact strip the reports open with */}
        <dl
          data-stagger
          className="m-0 mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {d.facts.map((fact) => (
            <div key={fact.label} className="vc-card p-6">
              <dt className="text-sm font-semibold uppercase tracking-wide text-muted-3">
                {fact.label}
              </dt>
              <dd className="m-0 mt-3 text-base font-semibold text-white">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section tone="surface">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div data-reveal="left">
            <SectionHeading title="The situation" align="left" />
            {d.situation.map((para) => (
              <p key={para} className="mt-5 text-base text-muted">
                {para}
              </p>
            ))}
          </div>

          <div data-reveal="right">
            <SectionHeading title={d.exposureTitle} align="left" />
            {d.exposure.map((para) => (
              <p key={para} className="mt-5 text-base text-muted">
                {para}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="What we found"
          lede="Ordered by severity. The criticals set the sequence below."
        />

        <ul data-stagger className="m-0 mt-12 list-none space-y-5 p-0">
          {d.findings.map((finding) => (
            <li key={finding.title} className="vc-card vc-card-hover p-8">
              <div className="flex flex-wrap items-baseline gap-4">
                <span
                  className={cn(
                    "rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide",
                    SEVERITY[finding.severity]
                  )}
                >
                  {finding.severity}
                </span>
                <h3 className="text-h3">{finding.title}</h3>
              </div>
              <p className="mt-3 text-base text-muted">{finding.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div data-reveal="left">
            <SectionHeading title="Constraints and trade-offs" align="left" />
            {d.constraints.map((para) => (
              <p key={para} className="mt-5 text-base text-muted">
                {para}
              </p>
            ))}
          </div>

          <div data-reveal="right">
            <SectionHeading title="Sequencing" align="left" />
            <ol className="m-0 mt-7 list-none space-y-5 p-0">
              {d.sequencing.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="vc-delta mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-brand"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-base text-muted">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading title="Outcome" lede={d.outcomeNote} />

        {/* scrolls inside its own container rather than pushing the page wide */}
        <div data-reveal className="mt-12 overflow-x-auto">
          <table className="w-full min-w-lg border-collapse text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="pb-4 pr-6 text-sm font-semibold uppercase tracking-wide text-muted-3">
                  Metric
                </th>
                <th className="pb-4 pr-6 text-sm font-semibold uppercase tracking-wide text-muted-3">
                  Before
                </th>
                <th className="pb-4 text-sm font-semibold uppercase tracking-wide text-muted-3">
                  After
                </th>
              </tr>
            </thead>
            <tbody>
              {d.outcome.map((row) => (
                <tr key={row.metric} className="border-b border-white/10">
                  <td className="py-5 pr-6 text-base text-muted">{row.metric}</td>
                  <td className="py-5 pr-6 text-base font-semibold text-white">{row.before}</td>
                  <td className="py-5 text-base font-bold text-brand">{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div data-reveal className="mt-12 flex flex-wrap justify-center gap-4">
          <AuditButton size="lg">Request an audit</AuditButton>
          <Button href="/case-studies" variant="outline" size="lg">
            All case studies
          </Button>
        </div>
      </Section>

      <CallToAction />
    </>
  );
}
