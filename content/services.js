/** Copy for /services. */

/** The "Find Your Fit" questionnaire. */
export const FIT_QUESTIONS = [
  {
    id: "pain",
    label: "What’s your biggest pain right now?",
    options: ["Manual data entry / copy-paste between tools", "Other Pain Point"],
  },
  { id: "handle", label: "Avg. handle time (min)", options: ["1 - 5", "5 - 10"] },
  { id: "rate", label: "Return rate (%)", options: ["Within 2 weeks", "Within 1 month"] },
];

/** The four blueprints, each a trigger → output pipeline with a headline KPI. */
export const BLUEPRINTS = [
  {
    name: "Invoicing",
    saved: "12h/wk",
    trigger: "Receipt Email",
    output: "Ledger Entry",
    kpi: "100% Data Accuracy",
  },
  {
    name: "Lead Flow",
    saved: "8h/wk",
    trigger: "Form Submission",
    output: "CRM Lead Card",
    kpi: "1m Turnaround",
  },
  {
    name: "Customer Ops",
    saved: "15h/wk",
    trigger: "Ticket Received",
    output: "Smart Triage",
    kpi: "70% Self-Resolved",
  },
  {
    name: "Reporting",
    saved: "5h/wk",
    trigger: "Date Threshold",
    output: "PDF Dashboard",
    kpi: "Real-time Data",
  },
];

/**
 * The "What We Review" grid — the six areas every audit covers.
 * Icons are Font Awesome solid names, resolved at render.
 */
export const REVIEW_AREAS = [
  {
    icon: "fa-shield-halved",
    title: "Architectural Risk Audit",
    body: "Full review of your system design, data flows, and structural weaknesses — identified before they become expensive to fix.",
  },
  {
    icon: "fa-chart-simple",
    title: "Production Readiness Review",
    body: "Observability, incident response, deployment pipelines, and operational maturity — assessed, scored, and prioritized.",
  },
  {
    icon: "fa-lock",
    title: "Security & Scaling Analysis",
    body: "Threat surface mapping, auth hardening, load strategy, and database optimization — AI-powered analysis, engineer-verified.",
  },
  {
    icon: "fa-bolt",
    title: "AI-Built Product Review",
    body: "Designed for products built with Cursor, Claude Code, Lovable, Bolt, and Copilot. We find what the AI didn’t catch.",
  },
  {
    icon: "fa-user-group",
    title: "CTO Advisory for Founders",
    body: "Senior engineering judgment on demand. Make the right architecture decisions without the cost of a full-time CTO hire.",
  },
  {
    icon: "fa-clock",
    title: "Ongoing Engineering Oversight",
    body: "Continuous senior review of architecture decisions, codebase health, and security posture as your product evolves.",
  },
];
