/** Copy and data for the home page. */

export const HERO = {
  claims: ["AI-BUILT", "PRODUCT", "AUDITS"],
  /* Kept as lines rather than markup: the design breaks the headline in a
     specific place, and data files should not carry JSX. */
  titleLines: ["Your AI-built product needs adult supervision."],
  lede: "Founders ship fast with Claude Code, Lovable, Bolt, and Cursor. Enterprise platforms surface risks at scale. But architecture, security, and production decisions still need real senior engineering judgment. Vibecop is the human verification layer.",
};

/** The five pipeline stages, each with the automation plugged into it. */
export const PIPELINE_STAGES = [
  { stage: "Intake", label: "Day 0", automation: "Scope & Access", icon: "/assets/images/pipeline-icon1.png", detail: "You share the repo, the stack, and what ships next. We scope the audit against your actual launch risk, not a generic checklist." },
  { stage: "Analysis", label: "Automated", automation: "AI-Powered Codebase Analysis", icon: "/assets/images/pipeline-icon2.png", detail: "Intelligent automated analysis across your architecture, codebase, infrastructure config, and security posture, surfacing patterns, risks, and structural issues at machine speed." },
  { stage: "Verification", label: "Human", automation: "Senior Engineer Review", icon: "/assets/images/pipeline-icon3.png", detail: "Every finding is reviewed and validated by senior engineers. Context matters. We separate critical risks from noise, turning automated signals into decisions you can trust." },
  { stage: "Roadmap", label: "Delivered", automation: "Prioritized Risk Roadmap", icon: "/assets/images/pipeline-icon4.png", detail: "A clear, actionable plan ordered by severity and business impact. No vague recommendations. Specific fixes your team can execute immediately." },
  { stage: "Support", label: "Ongoing", automation: "Strategic Implementation Support", icon: "/assets/images/pipeline-icon5.png", detail: "We stay on to oversee execution, advise on architecture decisions, or provide CTO-level oversight as your product scales." },
];

export const RESULT = {
  metric: "+32%",
  title: "Booked Calls in 6 Weeks",
  body: "A 45-person B2B agency was losing leads in the follow-up gap. We automated lead assignment, first-touch email with calendar link, and reply detection so reps never double-touch. Before/after reply time dropped from 4+ hours to under 15 minutes.",
  before: { label: "Before", value: "4 - 6 hrs", caption: "Avg. first reply time" },
  after: { label: "After", value: "15 min", caption: "Avg. first reply time" },
};

/**
 * The home page's plans are volume-based and differ from the fixed-scope ones
 * on /pricing  same design, different offer, so they are separate data.
 */
export const VOLUME_PLANS = [
  {
    name: "Starter",
    price: "2,495",
    summary: "Up to 500 leads/mo",
    features: ["1 pipeline (inbound or outbound)", "CRM sync + calendar"],
    icon: "/assets/images/investment-icon1.png",
  },
  {
    name: "Growth",
    price: "4,995",
    summary: "Up to 2000 leads/mo",
    features: ["Inbound + outbound", "Reply handling + attribution", "Monthly optimization"],
    icon: "/assets/images/investment-icon2.png",
  },
  {
    name: "Scale",
    price: "Custom",
    summary: "High volume",
    features: ["Multi-channel, multi-team", "Dedicated success"],
    icon: "/assets/images/investment-icon3.png",
  },
];

export const DASHBOARD_STATS = [
   { label: "Critical issues caught", delta: "Before deploy", value: "214" },
  { label: "AI-built codebases audited", delta: "Since 2025", value: "37" },
  { label: "False positives filtered out", delta: "Human review", value: "61%" },
];

/** The home page swaps in an attribution question for the second FAQ. */
export const HOME_FAQ_OVERRIDE = {
  question: "How Do You Handle Marketing Attribution and Source Tracking?",
  answer:
    "Every booked call and qualified lead is automatically tagged with its source and touchpoints. This gives you a clean, reliable view of what channels, campaigns, and sequences are actually driving pipeline.",
};
