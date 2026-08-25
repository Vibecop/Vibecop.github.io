import Card from "@/components/ui/Card";
import SampleReportButton from "@/components/SampleReportButton";

const MEETINGS = [
  { title: "Service key exposed in client bundle", when: "src/lib/api.ts:42 · Critical" },
  { title: "No rate limit ", when: "/api/auth · High" },
  { title: "N+1 query", when: "/dashboard/metrics · Critical" },
];

const AVATARS = [1, 2, 3, 4].map((n) => `/assets/images/avatar${n}.png`);

/* The shape every audit report opens with. Critical is 3 so the panel agrees
 * with the launch-blocker card above it the collage should read as one
 * report, not four unrelated numbers. Brightness carries severity, so the
 * short bar is the loud one. */
const SEVERITIES = [
  { label: "Critical", count: 3, bar: "bg-white" },
  { label: "High", count: 7, bar: "bg-white/85" },
  { label: "Medium", count: 12, bar: "bg-white/70" },
  { label: "Low", count: 18, bar: "bg-white/55" },
];

const SEVERITY_MAX = Math.max(...SEVERITIES.map((s) => s.count));

/**
 * The collage beside the hero headline. Decorative it illustrates the
 * product rather than reporting anything, so it is hidden from assistive
 * technology instead of read out as a wall of orphaned numbers.
 *
 * The line beneath it is not: it opens the sample report, so it sits outside
 * the `aria-hidden` wrapper a focusable control inside a hidden subtree is
 * reachable by Tab but invisible to a screen reader, which is worse than
 * either state on its own.
 *
 * The cards drift independently on a long, offset cycle so the group never
 * looks like it is moving in formation. Transform-only, and `.vc-float` is
 * switched off below 1024px, where the movement reads as jitter.
 */
export default function HeroDashboard() {
  return (
    /* At `lg` the collage, not the headline, is what sets the hero's height
       so it comes down 10% with everything else and sits against the right
       edge of its column. */
    <div className="hero-rise hero-rise-3 lg:ml-auto lg:w-[90%]">
      <div aria-hidden="true" className="grid gap-4 sm:grid-cols-2">
        <Card interactive className="vc-float overflow-hidden p-0">
          <div className="relative aspect-3/2 bg-[url('/assets/images/sprint-planning-bg.jpg')] bg-cover bg-center p-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand">
              <img src="/assets/images/video-recorder.png" alt="" className="h-4 w-5" />
            </span>

            <div className="absolute inset-x-5 bottom-5">
              <p className="m-0 font-semibold text-base text-white">Production Readiness Audit</p>
              <p className="m-0 text-sm text-white/80"> Aug 22, 2026</p>
              <ul className="m-0 mt-3 flex list-none p-0">
                {AVATARS.map((src) => (
                  <li key={src} className="-ml-2 first:ml-0">
                    <img src={src} alt="" className="h-8 w-8 rounded-full border-2 border-ink/60" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>

        <Card interactive className="vc-float-slow vc-float-delay flex items-center justify-between gap-4 p-6">
          <div>
            <p className="m-0 text-base text-muted">Launch blockers</p>
            <p className="m-0 mt-1 text-4xl font-bold text-white">3</p>
          </div>
          {/* Alert triangle the blocker count is a warning, not a stat. */}
          <svg viewBox="0 0 24 24" className="h-14 w-14 shrink-0 text-brand">
            <path d="M12 3.6 1.9 20.4h20.2L12 3.6z" fill="none" stroke="currentColor"
              strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M12 9.6v4.8" fill="none" stroke="currentColor" strokeWidth="1.8"
              strokeLinecap="round" />
            <circle cx="12" cy="17.4" r="1.1" fill="currentColor" />
          </svg>
        </Card>

        <Card interactive className="vc-float vc-float-delay-2 p-6">
          <p className="m-0 font-semibold text-white">Realestic AI</p>
          <p className="m-0 mt-1 text-sm text-muted">A Multi Tenant Real Estate SaaS</p>

          <ul className="m-0 mt-4 list-none space-y-3 border-t border-white/10 p-0 pt-4">
            {MEETINGS.map((meeting) => (
              <li key={meeting.title} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand" />
                <span>
                  <span className="block text-sm font-semibold text-white">{meeting.title}</span>
                  <span className="block text-xs text-muted">{meeting.when}</span>
                </span>
              </li>
            ))}
          </ul>
        </Card>

        <Card interactive className="vc-float-slow p-6 text-center">
          <p className="m-0 flex items-center justify-between gap-3 text-left">
            <span className="text-base text-muted">Production Readiness Score:</span>
            <span className="text-3xl font-bold text-white">97</span>
          </p>

          <svg viewBox="0 0 120 66" className="mx-auto mt-4 w-40">
            <path d="M8 62a52 52 0 0 1 104 0" fill="none" stroke="currentColor" strokeWidth="8"
              strokeLinecap="round" className="text-white/15" />
            {/* ~32% of the arc, matching the figure below it */}
            <path d="M8 62a52 52 0 0 1 104 0" fill="none" stroke="currentColor" strokeWidth="8"
              strokeLinecap="round" pathLength="100" strokeDasharray="48 100"
              className="text-brand" />
            <circle cx="60" cy="40" r="16" className="fill-brand" />
            <path d="M53 40.5l5 5 9-10" fill="none" stroke="#fff" strokeWidth="3.5"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <p className="m-0 mt-3 flex items-baseline justify-center gap-2">
            <span className="text-xs text-muted">0%</span>
            <span className="text-2xl font-bold text-white">+48%</span>
            <span className="text-xs text-muted">100%</span>
          </p>
          <p className="m-0 text-sm text-muted">After Remediation</p>
        </Card>

        <Card interactive className="vc-float vc-float-delay p-6 text-center justify-between">
          <img src="/assets/images/special-img.png" alt="" className="vc-card-art mx-auto h-20 w-30" />
          <p className="m-0 mt-3 text-base text-muted">AI-generated code flagged</p>
          <p className="m-0 mt-1 text-3xl font-bold text-white">68%</p>
        </Card>

        <div className="vc-float-slow vc-float-delay-2 flex flex-col justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#ff7a45] via-brand to-[#d1401d] p-6 shadow-[0_1rem_2.5rem_rgb(249_91_52/25%)]">
          <p className="m-0 text-sm font-semibold text-white">Findings by severity</p>

          <ul className="m-0 mt-4 list-none space-y-3 p-0">
            {SEVERITIES.map(({ label, count, bar }) => (
              <li key={label}>
                <p className="m-0 flex items-baseline justify-between gap-3">
                  <span className="text-xs font-medium text-white/85">{label}</span>
                  <span className="text-sm font-bold tabular-nums text-white">{count}</span>
                </p>
                <span className="mt-1 block h-2 overflow-hidden rounded-full bg-black/15">
                  <span
                    className={`block h-full rounded-full ${bar}`}
                    style={{ width: `${(count / SEVERITY_MAX) * 100}%` }}
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Says out loud what the figures are, so specific numbers can sit in the
          hero without reading as a live dashboard and opens the report those
          figures are sampled from. */}
      <div className="mt-4 flex justify-center">
        <SampleReportButton />
      </div>
    </div>
  );
}
