/** The delivery timeline and handoff kit on /process. */
export const TIMELINE = [
  {
    when: "Day 0",
    title: "Scope & Access",
    body: "We map your repo, your stack, and what ships next. The audit is scoped against your actual launch risk, not a generic checklist.",
  },
  {
    when: "Days 1-2",
    title: "Automated Analysis",
    body: "Machine-speed analysis across architecture, codebase, infrastructure config, and security posture. Every structural risk and anti-pattern gets surfaced.",
  },
  {
    when: "Days 3-5",
    title: "Senior Engineer Verification",
    body: "Every finding is reproduced and validated by hand. False positives cut, severity assigned against your business context rather than a CVSS score in isolation.",
  },
  {
    when: "By day 7",
    title: "Risk Roadmap Handoff",
    body: "A prioritized fix list your team can execute, walked through live with the engineer who wrote it.",
  },
];

export const HANDOFF_KIT = [
  {
    title: "Findings",
    body: "Every issue with impact and a fix.",
    icon: "fa-solid fa-list-check",
  },
  {
    title: "Roadmap",
    body: "Sprint-by-sprint fix sequence.",
    icon: "fa-solid fa-diagram-project",
  },
  {
    title: "Walkthrough",
    body: "Live session with your engineer.",
    icon: "fa-solid fa-chalkboard-user",
  },
];
