import HeroDashboard from "@/components/HeroDashboard";
import Accordion from "@/components/Accordion";
import CallToAction from "@/components/CallToAction";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { FAQS } from "@/content/faqs";
import {
  DASHBOARD_STATS,
  HERO,
  HOME_FAQ_OVERRIDE,
  PIPELINE_STAGES,
  RESULT,
  VOLUME_PLANS,
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
      <section className="pb-16 pt-12 md:pb-20 lg:pb-25">
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

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="m-0 text-6xl font-bold leading-none text-brand">{RESULT.metric}</p>
            <h2 className="text-h1 mt-4">{RESULT.title}</h2>
            <p className="mt-6 text-base text-muted">{RESULT.body}</p>
          </div>

          <ul className="m-0 grid list-none gap-6 p-0 sm:grid-cols-2">
            {[RESULT.before, RESULT.after].map((item, i) => (
              <li
                key={item.label}
                className={
                  i === 1
                    ? "rounded-3xl border border-brand/40 bg-brand/5 p-8"
                    : "rounded-3xl border border-white/10 bg-white/5 p-8"
                }
              >
                <p className="m-0 text-sm font-semibold uppercase tracking-wide text-muted">
                  {item.label}
                </p>
                <p className="m-0 mt-3 text-4xl font-bold text-white">{item.value}</p>
                <p className="m-0 mt-2 text-base text-muted">{item.caption}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img
            src="/assets/images/stack-img.png"
            alt=""
            aria-hidden="true"
            className="w-full max-w-lg"
          />
          <div>
            <h2 className="text-h1">Which CRM Do You Use?</h2>
            <p className="mt-6 text-base text-muted">
              We connect directly to your existing CRM setup — no rip-and-replace required. Our
              automation pipelines are designed to integrate seamlessly with the tools you already
              rely on, whether that’s your sales CRM, marketing platform, or customer support
              system.
            </p>
            <Button href="/contact" size="lg" className="mt-8">
              Book an Automation Audit
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Pricing By Leads or Seats"
          lede="Scale with your pipeline as your business grows."
        />

        <ul className="m-0 mt-12 grid list-none gap-6 p-0 lg:grid-cols-3">
          {VOLUME_PLANS.map((plan) => (
            <li
              key={plan.name}
              className="flex flex-col rounded-3xl border border-white/10 bg-white/5 p-8 transition-colors duration-200 hover:border-brand/50"
            >
              <img src={plan.icon} alt="" aria-hidden="true" className="h-14 w-14" />
              <h3 className="mt-5 text-h3">{plan.name}</h3>

              <p className="mt-4 flex items-start gap-1 text-white">
                {plan.price === "Custom" ? (
                  <span className="text-4xl font-bold tracking-tight">Custom</span>
                ) : (
                  <>
                    <span className="mt-2 text-2xl font-semibold">$</span>
                    <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                  </>
                )}
              </p>

              <p className="mt-3 text-base text-muted">{plan.summary}</p>

              <ul className="my-8 list-none space-y-3 border-t border-white/10 p-0 pt-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-base text-muted">
                    <i className="fa-solid fa-check text-sm text-brand" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button href="/contact" className="mt-auto w-full">
                Get Started
                <span className="sr-only"> with {plan.name}</span>
              </Button>
            </li>
          ))}
        </ul>
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
