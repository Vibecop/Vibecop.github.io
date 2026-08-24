/** The delivery timeline and handoff kit on /process. */
export const TIMELINE = [
  {
    when: "Days 1-2",
    title: "Scope & Access",
    body: "We map your repo, your stack, and what ships next. The audit is scoped against your actual launch risk, not a generic checklist.",
  },
  {
    when: "Days 3-7",
    title: "Automated Analysis",
    body: "Machine-speed analysis across architecture, codebase, infrastructure config, and security posture. Every structural risk and anti-pattern gets surfaced.",
  },
  {
    when: "Days 8-12",
    title: "Senior Engineer Verification",
    body: "Every finding is reproduced and validated by hand. False positives cut, severity assigned against your business context rather than a CVSS score in isolation.",
  },
  {
    when: "Day 14",
    title: "Risk Roadmap Handoff",
    body: "A prioritized fix list your team can execute, walked through live with the engineer who wrote it.",
  },
];

export const HANDOFF_KIT = [
  { title: "Docs", body: "Step-by-step and troubleshooting.", icon: "fa-solid fa-book" },
  { title: "Diagrams", body: "Flow and connection maps.", icon: "fa-solid fa-diagram-project" },
  { title: "Training", body: "Walkthrough and Q&A session.", icon: "fa-solid fa-chalkboard-user" },
];
