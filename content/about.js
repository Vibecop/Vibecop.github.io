/** Copy for /about. */

export const STORY = [
  "Vibecop started from a pattern we kept seeing: founders shipping fast with Claude Code, Cursor, Lovable, and Bolt, and no senior engineer reviewing what actually went out. AI generates code fast it doesn’t own the consequences. Technical debt, exposed endpoints, and architecture that quietly fails at scale accumulate from day one, invisible until they surface in an enterprise security review, in investor due diligence, or in a production incident.",
  "So we built the human verification layer. Automated analysis runs across your architecture, codebase, infrastructure config, and security posture at machine speed. Then every finding goes in front of a senior engineer who validates it, adds architectural context, and turns it into a business decision with a clear priority because breadth and speed don’t answer the question that matters most: what do we actually fix, and why?",
  "We work with a limited number of companies each month so every review gets deep technical attention, and most audits complete within a few days. The goal is simple: prevent million-dollar technical mistakes before they happen.",
];

export const PRINCIPLES = [
  {
    title: "Architecture-First",
    body: "We assess how a system is shaped, not just whether it currently runs through a production lens rather than a checklist. The question is always what breaks under real conditions.",
    icon: "/assets/images/automate-icon1.png",
  },
  {
    title: "Security-Aware",
    body: "Threat surface mapping, auth hardening, secrets handling, and access control the architecture-level risks that need human judgment to prioritize and act on.",
    icon: "/assets/images/automate-icon2.png",
  },
  {
    title: "Human-Verified",
    body: "Automated tools surface signals. Senior engineers decide what matters, why it matters, and what to do next. Every finding is validated before it reaches you.",
    icon: "/assets/images/automate-icon3.png",
  },
];

/** The before/after pairs in "The Vibecop Shift". */
export const SHIFT = [
  {
    label: "Unverified",
    tone: "before",
    title: "Shipped: AI-Written Auth",
    body: "AI wrote your auth layer and no senior engineer reviewed it. Exposed endpoints, misconfigured access, and unencrypted data stay hidden until they’re exploited.",
  },
  {
    label: "Verified",
    tone: "after",
    title: "Vibecop: Engineer-Reviewed Security",
    body: "Automated analysis surfaces the signals. Senior engineers validate each one, separate critical risk from noise, and translate it into business impact.",
  },
  {
    label: "Fails at Scale",
    tone: "before",
    title: "Shipped: Demo-Grade Architecture",
    body: "It carries the demo and the pilot customers. What happens at real volume was never tested, and nothing is watching for the moment it stops.",
  },
  {
    label: "Production-Ready",
    tone: "after",
    title: "Vibecop: Prioritized Risk Roadmap",
    body: "A clear plan ordered by severity and business impact. Specific fixes your team can execute immediately, with senior oversight through implementation if you want it.",
  },
];
