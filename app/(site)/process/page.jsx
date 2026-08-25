import PageBanner from "@/components/PageBanner";
import CallToAction from "@/components/CallToAction";
import VelocityPlan from "@/components/VelocityPlan";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { HANDOFF_KIT } from "@/content/process";

export const metadata = {
  title: "Process",
  description:
    "From repository access to a prioritized risk roadmap how a Vibecop audit runs in 48 to 72 hours.",
};

export default function ProcessPage() {
  return (
    <>
      <PageBanner
        title="Process"
        breadcrumb="Process"
        lede="From repository access to a prioritized risk roadmap how a Vibecop audit runs in 48 to 72 hours."
      />

      <Section className="velocity-feature">
        <VelocityPlan />
      </Section>

      <Section tone="surface">
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
