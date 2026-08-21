import PageBanner from "@/components/PageBanner";
import CallToAction from "@/components/CallToAction";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { HANDOFF_KIT, TIMELINE } from "@/content/process";

export const metadata = {
  title: "Process",
  description: "From discovery to deployment, see how we design and deliver automation pipelines.",
};

export default function ProcessPage() {
  return (
    <>
      <PageBanner
        title="Process"
        breadcrumb="Process"
        lede="From discovery to deployment, see how we design and deliver automation pipelines."
      />

      <Section>
        <SectionHeading title="The 14-Day Velocity Plan of Us" />

        {/* An ordered list, because the steps are a sequence and read as one. */}
        <ol className="m-0 mt-12 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {TIMELINE.map((step, i) => (
            <li
              key={step.title}
              className="relative flex flex-col rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <span
                aria-hidden="true"
                className="text-5xl font-bold leading-none text-brand/25"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-brand">
                {step.when}
              </p>
              <h3 className="mt-2 text-h3">{step.title}</h3>
              <p className="mt-3 text-base text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="surface">
        <SectionHeading
          title="Handoff kit"
          lede="Everything you need to understand, manage, and confidently maintain your automation workflows."
        />

        <ul className="m-0 mt-12 grid list-none gap-6 p-0 md:grid-cols-3">
          {HANDOFF_KIT.map((item) => (
            <li key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/15 text-brand">
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
