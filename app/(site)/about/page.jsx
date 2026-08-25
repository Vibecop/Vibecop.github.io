import PageBanner from "@/components/PageBanner";
import TeamGrid from "@/components/TeamGrid";
import CallToAction from "@/components/CallToAction";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import AuditButton from "@/components/AuditButton";
import { cn } from "@/lib/cn";
import { PRINCIPLES, SHIFT, STORY } from "@/content/about";

export const metadata = {
  title: "About Us",
  description:
    "Architecture-first. Security-aware. Human-verified. We prevent million-dollar technical mistakes before they happen.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        lede="Architecture-first. Security-aware. Human-verified. We prevent million-dollar technical mistakes before they happen."
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img
            src="/assets/images/story-img.jpg"
            alt=""
            aria-hidden="true"
            data-reveal="left"
            className="w-full rounded-3xl object-cover shadow-[0_1.5rem_3.5rem_rgb(0_0_0/45%)]"
          />
          <div data-reveal="right">
            <SectionHeading title="Our Story" align="left" />
            {STORY.map((paragraph) => (
              <p key={paragraph} className="mt-5 text-base text-muted">
                {paragraph}
              </p>
            ))}
            <AuditButton size="lg" className="mt-8">
              Request an audit
            </AuditButton>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          title="Beyond Automated Scanning"
          lede="Every audit pairs AI-powered analysis at machine speed with senior engineer verification architectural judgment, prioritized decisions, and production-ready confidence."
        />

        <ul data-stagger className="m-0 mt-12 grid list-none gap-6 p-0 md:grid-cols-3">
          {PRINCIPLES.map((item) => (
            <li key={item.title} className="vc-card vc-card-hover p-8">
              <img src={item.icon} alt="" aria-hidden="true" className="vc-card-art h-14 w-14" />
              <h3 className="mt-5 text-h3">{item.title}</h3>
              <p className="mt-3 text-base text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          title="Who Reviews Your Product"
          lede="The senior engineering judgment behind every Vibecop audit."
        />
        <TeamGrid className="mt-12" limit={4} />
      </Section>

      <Section tone="surface">
        <SectionHeading
          title="The Vibecop Shift"
          lede="We don’t just hand you a list of findings we replace unverified, demo-grade decisions with architecture you can take to production."
        />

        <ul data-stagger className="m-0 mt-12 grid list-none gap-6 p-0 md:grid-cols-2">
          {SHIFT.map((item) => (
            <li
              key={item.title}
              className={cn("vc-card vc-card-hover p-8", item.tone === "after" && "vc-card-accent")}
            >
              <span
                className={cn(
                  "inline-block rounded-full px-3 py-1 text-sm font-semibold",
                  item.tone === "after"
                    ? "vc-btn vc-btn-primary text-white"
                    : "border border-white/20 text-muted"
                )}
              >
                {item.label}
              </span>
              <h3 className="mt-4 text-h3">{item.title}</h3>
              <p className="mt-3 text-base text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CallToAction
        title={
          <>
            Build with
            <br />
            confidence.
          </>
        }
        lede="AI builds the product. Vibecop makes sure it won’t break in production, fail under scale, or expose your users to risk. One audit. Fewer expensive surprises."
        action={{ label: "Request an audit" }}
      />
    </>
  );
}
