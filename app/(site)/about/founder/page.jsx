import PageBanner from "@/components/PageBanner";
import CallToAction from "@/components/CallToAction";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AuditButton from "@/components/AuditButton";
import { FOUNDER, FOUNDER_STATS, FOUNDER_TRACK_RECORD, FOUNDER_WHY } from "@/content/founder";

export const metadata = {
  title: "Meet the Founder",
  description:
    "Salman Haseeb: founding engineer at award-winning Wosh, Head of Product at Veriom, startup acquisition by Gusto, 8+ years architecting production systems.",
};

export default function FounderPage() {
  return (
    <>
      <PageBanner
        title="Meet the Founder"
        lede="Every Vibecop audit carries the judgment of an engineer who has built startups from the first commit, through awards and an acquisition."
        breadcrumb="Founder"
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img
            src={FOUNDER.image}
            alt={FOUNDER.name}
            data-reveal="left"
            className="aspect-4/5 w-full max-w-md justify-self-center rounded-3xl object-cover shadow-[0_1.5rem_3.5rem_rgb(0_0_0/45%)]"
          />
          <div data-reveal="right">
            <SectionHeading title={FOUNDER.name} eyebrow={FOUNDER.role} align="left" />
            {FOUNDER.intro.map((p) => (
              <p key={p} className="mt-5 text-base text-muted">
                {p}
              </p>
            ))}
            <div className="mt-8 flex flex-wrap gap-4">
              <AuditButton size="lg">Request an audit</AuditButton>
              <Button href={FOUNDER.linkedin} variant="outline" size="lg" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin-in" aria-hidden="true" /> LinkedIn
              </Button>
            </div>
          </div>
        </div>

        <ul data-stagger className="m-0 mt-16 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {FOUNDER_STATS.map((s) => (
            <li key={s.label} className="vc-card p-8 text-center">
              <p className="text-display text-brand">{s.value}</p>
              <p className="mt-2 text-base text-muted">{s.label}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface">
        <SectionHeading
          title="Track Record"
          lede="Founding and leadership roles, award-winning products and an acquisition. The experience that sits behind every finding we verify."
        />
        <ul data-stagger className="m-0 mt-12 grid list-none gap-6 p-0 md:grid-cols-2">
          {FOUNDER_TRACK_RECORD.map((item) => (
            <li key={item.company} className="vc-card vc-card-hover p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand">
                {item.role}
                {item.period && ` · ${item.period}`}
              </p>
              <h3 className="mt-3 text-h3">
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-white no-underline hover:text-brand">
                    {item.company}
                  </a>
                ) : (
                  item.company
                )}
              </h3>
              <p className="mt-3 text-base text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionHeading title={FOUNDER_WHY.title} />
          {FOUNDER_WHY.paragraphs.map((p) => (
            <p key={p} data-reveal className="mt-6 text-lg text-muted">
              {p}
            </p>
          ))}
          <p data-reveal className="mt-6 text-lg font-semibold">{FOUNDER.name}, Founder</p>
        </div>
      </Section>

      <CallToAction
        title={
          <>
            Get a founder-grade
            <br />
            review.
          </>
        }
        action={{ label: "Request an audit" }}
      />
    </>
  );
}
