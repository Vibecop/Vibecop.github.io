import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import CallToAction from "@/components/CallToAction";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";

export const metadata = {
  title: "Contact Us",
  description:
    "15 minutes. We’ll map your product’s real risk and give you a clear next step. No pitch, no obligation.",
};

const PROMISES = ["15 min", "NDA-friendly", "You get a scope doc"];

const NEXT_STEPS = [
  {
    title: "We review your application",
    body: "If there is a strong fit, we schedule a strategy call within 24 hours.",
  },
  {
    title: "15-min strategy call",
    body: "We map your stack, your launch risk, and what the audit should cover. No pitch.",
  },
  {
    title: "You get a scope doc",
    body: "Fixed scope, turnaround, and price. You decide if you want to proceed.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact"
        lede="Architecture-first. Security-aware. Human-verified. Tell us what you’re building and we’ll tell you where the risk is."
      />

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div data-reveal="left">
            <SectionHeading title="Request an audit" align="left" />
            <p className="mt-5 text-base text-muted">
              15 minutes. We’ll map your product’s real risk and give you a clear next step. No
              pitch, no obligation.
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
          lede="What to expect between your application and the first line of the audit."
        />

        <ol data-stagger className="vc-steps vc-steps-3 m-0 mt-12 grid list-none gap-6 p-0 md:grid-cols-3">
          {NEXT_STEPS.map((step, i) => (
            <li key={step.title} className="vc-card vc-card-hover p-8">
              <span className="vc-step-index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-h3">{step.title}</h3>
              <p className="mt-3 text-base text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CallToAction />
    </>
  );
}
