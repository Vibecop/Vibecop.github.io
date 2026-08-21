import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import CallToAction from "@/components/CallToAction";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";

export const metadata = {
  title: "Contact Us",
  description: "15 minutes. We’ll map one workflow and give you a clear next step. No pitch, no obligation.",
};

const PROMISES = ["15 min", "No spam", "You get a scope doc"];

const NEXT_STEPS = [
  {
    title: "We reply within 24 hours",
    body: "We’ll suggest a 15-min slot and ask for any extra context.",
  },
  {
    title: "15-min audit call",
    body: "We map your workflow, tools, and success criteria. No pitch.",
  },
  {
    title: "You get a scope doc",
    body: "Fixed scope, timeline, and price. You decide if you want to proceed.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact"
        lede="Outcome-first, measurable, and fully documented. No lock-in, no long contracts, ever."
      />

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title="Book an Automation Audit" align="left" mark={false} />
            <p className="mt-5 text-base text-muted">
              15 minutes. We’ll map one workflow and give you a clear next step. No pitch, no
              obligation.
            </p>
            <ul className="m-0 mt-7 flex list-none flex-wrap gap-3 p-0">
              {PROMISES.map((promise) => (
                <li key={promise}>
                  <Badge>
                    <i className="fa-solid fa-check text-xs text-brand" aria-hidden="true" />
                    {promise}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>

          <ContactForm />
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          title="What Happens Next"
          lede="Understand the process and timeline after you reach out to us."
        />

        <ol className="m-0 mt-12 grid list-none gap-6 p-0 md:grid-cols-3">
          {NEXT_STEPS.map((step, i) => (
            <li key={step.title} className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <span aria-hidden="true" className="text-4xl font-bold leading-none text-brand/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-h3">{step.title}</h3>
              <p className="mt-3 text-base text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CallToAction />
    </>
  );
}
