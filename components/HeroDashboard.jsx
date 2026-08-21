import Card from "@/components/ui/Card";

const MEETINGS = [
  { title: "Meeting with James", when: "Yesterday at 8:30 AM" },
  { title: "Full-team meeting", when: "Monday at 8:30 AM" },
  { title: "Product Demo", when: "Monday at 10:30 AM" },
];

const AVATARS = [1, 2, 3, 4].map((n) => `/assets/images/avatar${n}.png`);

/**
 * The collage beside the hero headline. Decorative — it illustrates the
 * product rather than reporting anything, so it is hidden from assistive
 * technology instead of read out as a wall of orphaned numbers.
 */
export default function HeroDashboard() {
  return (
    <div aria-hidden="true" className="grid gap-4 sm:grid-cols-2">
      <Card className="overflow-hidden p-0">
        <div className="relative aspect-3/2 bg-[url('/assets/images/sprint-planning-bg.jpg')] bg-cover bg-center p-5">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand">
            <img src="/assets/images/video-recorder.png" alt="" className="h-5 w-5" />
          </span>

          <div className="absolute inset-x-5 bottom-5">
            <p className="m-0 font-semibold text-white">Sprint Planning</p>
            <p className="m-0 text-sm text-white/80">September 22, 2026 - 9:30 AM</p>
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

      <Card className="flex items-center justify-between gap-4 p-6">
        <div>
          <p className="m-0 text-base text-muted">Missed follow-ups</p>
          <p className="m-0 mt-1 text-4xl font-bold text-white">23</p>
        </div>
        <img src="/assets/images/missed-img.png" alt="" className="h-14 w-14" />
      </Card>

      <Card className="p-6">
        <p className="m-0 font-semibold text-white">Curva Technologies</p>
        <p className="m-0 mt-1 text-sm text-muted">As a company we are locating across the sea.</p>

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

      <Card className="p-6 text-center">
        <p className="m-0 flex items-center justify-between gap-3 text-left">
          <span className="text-base text-muted">Booked Call This Week:</span>
          <span className="text-3xl font-bold text-white">47</span>
        </p>

        <svg viewBox="0 0 120 66" className="mx-auto mt-4 w-40">
          <path d="M8 62a52 52 0 0 1 104 0" fill="none" stroke="currentColor" strokeWidth="8"
            strokeLinecap="round" className="text-white/15" />
          {/* ~32% of the arc, matching the figure below it */}
          <path d="M8 62a52 52 0 0 1 104 0" fill="none" stroke="currentColor" strokeWidth="8"
            strokeLinecap="round" pathLength="100" strokeDasharray="32 100"
            className="text-brand" />
          <circle cx="60" cy="40" r="16" className="fill-brand" />
          <path d="M53 40.5l5 5 9-10" fill="none" stroke="#fff" strokeWidth="3.5"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <p className="m-0 mt-3 flex items-baseline justify-center gap-2">
          <span className="text-xs text-muted">0%</span>
          <span className="text-2xl font-bold text-white">+32%</span>
          <span className="text-xs text-muted">100%</span>
        </p>
        <p className="m-0 text-sm text-muted">vs last week</p>
      </Card>

      <Card className="p-6 text-center">
        <img src="/assets/images/qualifief-leds-img.png" alt="" className="mx-auto h-20 w-20" />
        <p className="m-0 mt-3 text-base text-muted">Qualified Leads</p>
        <p className="m-0 mt-1 text-3xl font-bold text-white">128</p>
      </Card>

      <div className="flex items-center justify-center overflow-hidden rounded-3xl bg-brand p-6">
        <img src="/assets/images/graph-img.png" alt="" className="w-full" />
      </div>
    </div>
  );
}
