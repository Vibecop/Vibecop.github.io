import HeroDashboard from "@/components/HeroDashboard";
import Accordion from "@/components/Accordion";
import CallToAction from "@/components/CallToAction";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import PricingCards from "@/components/PricingCards";
import { FAQS } from "@/content/faqs";
import { TIMELINE } from "@/content/process";
import {
  DASHBOARD_STATS,
  HERO,
  HOME_FAQ_OVERRIDE,
  PIPELINE_STAGES,
  RESULT,
} from "@/content/home";

export const metadata = {
  // absolute: the root template appends "| Vibecop", which this already says
  title: { absolute: "Vibecop — Senior Supervision for Products built with AI" },
  description: HERO.lede,
};

/* The home page asks about attribution where the other pages ask about the
 * 14-day handoff; the rest of the list is shared. */
const HOME_FAQS = FAQS.map((faq, i) => (i === 1 ? HOME_FAQ_OVERRIDE : faq));

export default function IndexPage() {
  return (
    <>
      <section className="hero-reference-bg pb-16 pt-12 md:pb-20 lg:pb-25">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <ul className="m-0 flex list-none flex-wrap gap-3 p-0">
                {HERO.claims.map((claim) => (
                  <li key={claim}>
                    <Badge>
                      <i className="fa-solid fa-check text-xs text-brand" aria-hidden="true" />
                      {claim}
                    </Badge>
                  </li>
                ))}
              </ul>

              <h1 className="text-display mt-8">
                {HERO.titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>

              <p className="mt-6 max-w-xl text-lg text-muted">{HERO.lede}</p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button href="/contact" size="lg">
                  Book an Automation Audit
                </Button>
                <Button href="/process" variant="ghost">
                  See Pipeline Stages
                  <i className="fa-solid fa-arrow-right text-sm" aria-hidden="true" />
                </Button>
              </div>
            </div>

            <HeroDashboard />
          </div>
        </Container>
      </section>

      <Section tone="surface">
        <SectionHeading
          title="Your Pipeline, With Health at Every Stage"
          lede="We plug automations into each stage so fewer leads leak and more turn into booked calls."
        />

        <ol className="m-0 mt-12 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {PIPELINE_STAGES.map((stage) => (
            <li
              key={stage.stage}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 transition-colors duration-200 hover:border-brand/50"
            >
              <img src={stage.icon} alt="" aria-hidden="true" className="h-12 w-12" />
              <h3 className="mt-5 text-h3">{stage.stage}</h3>
              <p className="m-0 mt-1 text-sm font-semibold uppercase tracking-wide text-brand">
                {stage.label}
              </p>
              <p className="mt-3 text-base text-muted">{stage.automation}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="velocity-feature">
        <div className="velocity-feature-grid">
          <div className="velocity-feature-art">
            <img src="/assets/images/velocity-plan-img.png" alt="Automation workflow dashboard" />
          </div>
          <div className="velocity-feature-copy">
            <img src="/assets/images/special-img.png" alt="" aria-hidden="true" className="velocity-feature-mark" />
            <h2 className="text-h1">The 14-Day Velocity<br className="hidden sm:block" /> Plan of Us</h2>
            <ol className="velocity-timeline">
              {TIMELINE.map((step, i) => (
                <li key={step.title} className={i === TIMELINE.length - 1 ? "is-final" : undefined}>
                  <span className="velocity-timeline-dot" aria-hidden="true">{i === TIMELINE.length - 1 ? "✓" : ""}</span>
                  <div>
                    <h3>{step.when}: {step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <div className="crm-reference-heading">
          <img src="/assets/images/special-img.png" alt="" aria-hidden="true" />
          <h2 className="text-h1">Which CRM Do You Use?</h2>
          <p>We connect directly to your existing CRM setup — no rip-and-replace required.</p>
        </div>

        <div className="crm-reference-groups">
          {[
            { title: "Sales CRM", tools: ["HubSpot", "Salesforce", "Pipedrive"] },
            { title: "Marketing & Automation", tools: ["Zapier", "Make", "Calendly"] },
            { title: "Support & Operations", tools: ["Slack", "Teams", "Zoho"] },
          ].map((group) => (
            <div key={group.title} className="crm-reference-group">
              <h3>{group.title}</h3>
              <ul>
                {group.tools.map((tool, i) => (
                  <li key={tool}>
                    <span aria-hidden="true"><i className={["fa-solid fa-circle-nodes", "fa-solid fa-bolt", "fa-solid fa-comments"][i]} /></span>
                    <strong>{tool}</strong>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Investment Built on ROI"
          lede="Fixed-scope projects. No monthly fees. You own the code."
        />
        <PricingCards className="mt-12" />
      </Section>

      <Section tone="surface">
        <SectionHeading
          title="One View: Leads, Conversion, Follow-Ups"
          lede="Complete visibility into your sales pipeline from first touch to close."
        />

        <ul className="m-0 mt-12 grid list-none gap-6 p-0 md:grid-cols-3">
          {DASHBOARD_STATS.map((stat) => (
            <li key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="m-0 flex items-center justify-between gap-3">
                <span className="text-base text-muted">{stat.label}</span>
                <span className="rounded-full bg-brand/15 px-3 py-1 text-sm font-semibold text-brand">
                  {stat.delta}
                </span>
              </p>
              <p className="m-0 mt-5 text-5xl font-bold text-white">{stat.value}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          title="Frequently Asked Questions"
          lede="Clear, straightforward answers about our process, security, and support."
        />
        <Accordion items={HOME_FAQS} className="mx-auto mt-12 max-w-4xl" />
      </Section>

      <CallToAction
        title={
          <>
            Bring Your Messy
            <br />
            Pipeline.
          </>
        }
        lede="We transform scattered processes into a reliable, revenue-ready engine."
      />
    </>
  );
}
