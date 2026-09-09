import PageBanner from "@/components/PageBanner";
import CallToAction from "@/components/CallToAction";
import VelocityPlan from "@/components/VelocityPlan";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AuditButton from "@/components/AuditButton";
import { HANDOFF_KIT, METHODOLOGY, METHODOLOGY_LEDE } from "@/content/process";

export const metadata = {
  title: { absolute: "Audit Methodology | How Vibecop Audits AI-Built Software" },
  description: METHODOLOGY_LEDE,
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <PageBanner
        title="How Vibecop Audits AI-Built Software"
        breadcrumb="Process"
        lede={METHODOLOGY_LEDE}
      />

      <Section>
        <SectionHeading
          title="The ten stages of a Vibecop audit"
          lede="What happens between handing over repository access and receiving the roadmap, in order."
        />

        {/* Two across rather than three: at ten stages a third column leaves a
            ragged final row, and the numbering is easier to follow in pairs.
            No connecting rail here it only reads as a sequence on one row. */}
        <ol
          data-stagger
          className="m-0 mt-12 grid list-none gap-6 p-0 lg:grid-cols-2"
        >
          {METHODOLOGY.map((stage, i) => (
            <li key={stage.title} className="vc-card vc-card-hover flex flex-col p-8">
              <span className="vc-step-index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-h3">{stage.title}</h3>
              <p className="mt-3 text-base text-muted">{stage.body}</p>
              <p className="mt-auto flex items-start gap-3 border-t border-white/10 pt-5 text-base text-white">
                <i
                  className="fa-solid fa-file-lines mt-1 text-sm text-brand"
                  aria-hidden="true"
                />
                <span>
                  <span className="text-muted">Output: </span>
                  {stage.output}
                </span>
              </p>
            </li>
          ))}
        </ol>

        <div data-reveal className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <AuditButton size="lg">Request an audit</AuditButton>
          <Button href="/audits" variant="ghost">
            See every audit we run
            <i className="fa-solid fa-arrow-right text-sm" aria-hidden="true" />
          </Button>
        </div>
      </Section>

      <Section tone="surface" className="velocity-feature">
        <VelocityPlan />
      </Section>

      <Section>
        <SectionHeading
          title="Handoff kit"
          lede="Everything your team needs to act on the audit what we found, in what order to fix it, and a live walkthrough."
        />

        <ul data-stagger className="m-0 mt-12 grid list-none gap-6 p-0 md:grid-cols-3">
          {HANDOFF_KIT.map((item) => (
            <li key={item.title} className="vc-card vc-card-hover p-8">
              <span className="vc-card-art vc-delta flex h-12 w-12 items-center justify-center rounded-2xl text-brand">
                <i className={item.icon} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-h3">{item.title}</h3>
              <p className="mt-2 text-base text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CallToAction />
    </>
  );
}
