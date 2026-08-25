import HeroDashboard from "@/components/HeroDashboard";
import VelocityPlan from "@/components/VelocityPlan";
import Accordion from "@/components/Accordion";
import CallToAction from "@/components/CallToAction";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AuditButton from "@/components/AuditButton";
import Badge from "@/components/ui/Badge";
import PricingCards from "@/components/PricingCards";
import Sparkline from "@/components/ui/Sparkline";
import { FAQS } from "@/content/faqs";
import {
  DASHBOARD_STATS,
  HERO,
  HOME_FAQ_OVERRIDE,
  PIPELINE_STAGES,
} from "@/content/home";

export const metadata = {
  // absolute: the root template appends "| Vibecop", which this already says
  title: { absolute: "Vibecop - Senior Supervision for Products built with AI" },
  description: HERO.lede,
};

/* The home page asks what an engagement needs to start; the rest of the
 * list is shared with /faq. */
const HOME_FAQS = FAQS.map((faq, i) => (i === 1 ? HOME_FAQ_OVERRIDE : faq));

/* Decorative trend shapes for the three metric cards rising, rising
 * harder, falling, matching what each figure is saying. */
const STAT_SERIES = [
  [18, 24, 21, 33, 30, 42, 52],
  [10, 16, 14, 26, 31, 40, 58],
  [58, 49, 52, 38, 33, 24, 16],
];

/*
 * Gradient-fills the closing phrase of a headline.
 *
 * Taking the last two words rather than a hard-coded substring keeps
 * content/home.js free of markup the rule the data modules already follow
 * and means editing the headline does not silently drop the effect.
 */
function emphasise(line, words = 2) {
  const parts = line.split(" ");
  if (parts.length <= words) return <span className="text-gradient">{line}</span>;

  const head = parts.slice(0, -words).join(" ");
  const tail = parts.slice(-words).join(" ");
  return (
    <>
      {head}{" "}
      <span className="text-gradient">{tail}</span>
    </>
  );
}

export default function IndexPage() {
  return (
    <>
      <section className="hero-reference-bg pb-12 md:pb-16 lg:pb-18">
        {/* Loose glowing motes behind the headline. Purely atmospheric, so
            they are inert and drop out entirely below the md breakpoint. */}
        <span aria-hidden="true" className="hero-spark left-[8%] top-[22%] h-1.5 w-1.5" />
        <span aria-hidden="true" className="hero-spark left-[46%] top-[12%] h-1 w-1 [animation-delay:-1.6s]" />
        <span aria-hidden="true" className="hero-spark left-[30%] top-[68%] h-2 w-2 [animation-delay:-3.2s]" />
        <span aria-hidden="true" className="hero-spark right-[6%] top-[46%] h-1.5 w-1.5 [animation-delay:-2.4s]" />

        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <ul className="hero-rise hero-rise-1 m-0 flex list-none flex-wrap gap-3 p-0">
                {HERO.claims.map((claim) => (
                  <li key={claim}>
                    <Badge>
                      <i className="fa-solid fa-check text-xs text-brand" aria-hidden="true" />
                      {claim}
                    </Badge>
                  </li>
                ))}
              </ul>

              <h1 className="text-display hero-rise hero-rise-2 mt-7">
                {HERO.titleLines.map((line) => (
                  <span key={line} className="block">
                    {emphasise(line)}
                  </span>
                ))}
              </h1>

              <p className="hero-rise hero-rise-3 mt-5 max-w-xl text-lg text-muted">{HERO.lede}</p>

              <div className="hero-rise hero-rise-4 mt-8 flex flex-wrap items-center gap-4">
                <AuditButton size="lg">
                  Request an audit
                </AuditButton>
                <Button href="/process" variant="ghost">
                  See how an audit runs
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
          title="How an Audit Runs, Stage by Stage"
          lede="Machine-speed analysis, senior engineer verification, and a roadmap your team can execute every stage accounted for."
        />

        {/* `vc-steps` draws the glowing rule that joins the stages once the
            row scrolls into view; `data-stagger` brings the cards in one at
            a time behind it. */}
        <ol
          data-stagger
          className="vc-steps m-0 mt-12 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {PIPELINE_STAGES.map((stage, i) => (
            /* `tabIndex` on the card, not a control inside it: the flip is
               triggered by :hover and :focus-within, and without a focusable
               element the back is unreachable by keyboard. */
            <li key={stage.stage} className="vc-flip" tabIndex={0}>
              <div className="vc-flip-inner">
                <div className="vc-flip-face vc-card p-7">
                  <span className="vc-step-index" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <img
                    src={stage.icon}
                    alt=""
                    aria-hidden="true"
                    className="vc-card-art mt-5 h-12 w-12"
                  />
                  <h3 className="mt-4 text-h3">{stage.stage}</h3>
                  <p className="m-0 mt-1 text-sm font-semibold uppercase tracking-wide text-brand">
                    {stage.label}
                  </p>
                  <p className="mt-3 text-base text-muted">{stage.deliverable}</p>
                </div>

                <div className="vc-flip-face vc-flip-back vc-card vc-card-accent p-7">
                  <p className="m-0 text-sm font-semibold uppercase tracking-wide text-brand">
                    {stage.label}
                  </p>
                  <h3 className="mt-2 text-h3">{stage.stage}</h3>
                  <p className="mt-3 text-base text-muted">{stage.detail}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="velocity-feature">
        <VelocityPlan />
      </Section>

      <Section tone="surface">
        <div className="crm-reference-heading" data-reveal>
          <img src="/assets/images/special-img.png" alt="" aria-hidden="true" />
          <h2 className="text-h1">What Stack Are You On?</h2>
          <p>We review modern SaaS and AI-focused stacks in place no migration, no rewrite required.</p>
        </div>

<div className="crm-reference-groups" data-stagger>
  {[
    {
      title: "Integration",
      tools: [
        { name: "REST APIs", icon: "fa-solid fa-code" },
        { name: "Webhooks", icon: "fa-solid fa-circle-nodes" },
        { name: "OAuth", icon: "fa-solid fa-key" },
      ],
    },
    {
      title: "Codebase",
      tools: [
        { name: "GitHub", icon: "fa-brands fa-github" },
        { name: "GitLab", icon: "fa-brands fa-gitlab" },
        { name: "Bitbucket", icon: "fa-brands fa-bitbucket" },
      ],
    },
{
  title: "Deployment",
  tools: [
    { name: "Heroku", icon: "fa-solid fa-cloud" },
    { name: "AWS", icon: "fa-brands fa-aws" },
    { name: "Docker", icon: "fa-brands fa-docker" },
  ],
},
  ].map((group) => (
    <div key={group.title} className="vc-card crm-reference-group">
      <h3>{group.title}</h3>
      <ul>
        {group.tools.map((tool) => (
          <li key={tool.name}>
            <span aria-hidden="true"><i className={tool.icon} /></span>
            <strong>{tool.name}</strong>
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>
      </Section>

      <Section>
        <SectionHeading
          title="Scoped Engagements, Priced Up Front"
          lede="Fixed-scope audits and sprints. One prevented incident typically covers the cost many times over."
        />
        <PricingCards className="mt-12" />
      </Section>

      <Section tone="surface">
        <SectionHeading
          title="Human Verification, Not Just a Scan"
          lede="Automated tools surface signals. Senior engineers decide what matters, why it matters, and what to do next."
        />

        {/* `data-count` on the figure: MotionRuntime reads the rendered text,
            keeps its prefix/suffix, and counts up to it once. The markup still
            ships the final value, so it is correct with JS off and there is no
            layout shift when the animation runs. */}
        <ul data-stagger className="m-0 mt-12 grid list-none gap-6 p-0 md:grid-cols-3">
          {DASHBOARD_STATS.map((stat, i) => (
            <li key={stat.label} className="vc-card vc-card-hover overflow-hidden p-8">
              <p className="m-0 flex items-center justify-between gap-3">
                <span className="text-sm text-muted">{stat.label}</span>
                <span className="vc-delta rounded-full px-3 py-1 whitespace-nowrap text-xs font-semibold text-brand">
                  {stat.delta}
                </span>
              </p>
              <p className="vc-stat-value m-0 mt-5 text-4xl font-bold text-white" data-count>
                {stat.value}
              </p>
              <Sparkline id={`stat-${i}`} values={STAT_SERIES[i]} className="mt-6" />
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

      <CallToAction />
    </>
  );
}
