/** Copy and data for the home page. */

export const HERO = {
  claims: ["Human Verified", "Production Readiness", "Audits"],
  /* Kept as lines rather than markup: the design breaks the headline in a
     specific place, and data files should not carry JSX. */
  titleLines: ["Your AI-built product needs adult supervision."],
  lede: "Founders ship fast with Claude Code, Lovable, Bolt, and Cursor. Enterprise platforms surface risks at scale. But architecture, security, and production decisions still need real senior engineering judgment. Vibecop is the human verification layer.",
};

/** The five audit stages, from repo access through to ongoing oversight. */
export const PIPELINE_STAGES = [
  { stage: "Intake", label: "Day 0", deliverable: "Scope & Access", icon: "/assets/images/pipeline-icon1.png", detail: "You share the repo, the stack, and what ships next. We scope the audit against your actual launch risk, not a generic checklist." },
  { stage: "Analysis", label: "Automated", deliverable: "Codebase Analysis", icon: "/assets/images/pipeline-icon2.png", detail: "Intelligent automated analysis across your architecture, codebase, infrastructure config, and security posture, surfacing patterns, risks, and structural issues at machine speed." },
  { stage: "Verification", label: "Human", deliverable: "Senior Engineer Review", icon: "/assets/images/pipeline-icon3.png", detail: "Every finding is reviewed and validated by senior engineers. Context matters. We separate critical risks from noise, turning automated signals into decisions you can trust." },
  { stage: "Roadmap", label: "Delivered", deliverable: "Prioritized Risk Roadmap", icon: "/assets/images/pipeline-icon4.png", detail: "A clear, actionable plan ordered by severity and business impact. No vague recommendations. Specific fixes your team can execute immediately." },
  { stage: "Support", label: "Ongoing", deliverable: "Strategic Implementation Support", icon: "/assets/images/pipeline-icon5.png", detail: "We stay on to oversee execution, advise on architecture decisions, or provide CTO-level oversight as your product scales." },
];

export const DASHBOARD_STATS = [
  { label: "Typical audit turnaround", delta: "Scope to roadmap", value: "48–72h" },
  { label: "Reviewed by a senior engineer", delta: "Human verified", value: "Every report" },
  { label: "Shipped without human review", delta: "What we accept", value: "No findings" },
];

/** The home page swaps in a scope question for the second FAQ. */
export const HOME_FAQ_OVERRIDE = {
  question: "What do you actually need from us to start?",
  answer:
    "Repository access, a short description of what you are building, and what ships next. We scope the audit against your real launch risk rather than a generic checklist, and work under NDA-friendly review workflows for private repositories and production systems.",
};
