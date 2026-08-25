/** Copy for /services. */

/** The "Find Your Fit" questionnaire. */
export const FIT_QUESTIONS = [
  {
    id: "built",
    label: "How was the product built?",
    options: ["AI tools", "Internal team", "No-code / low-code", "Mixed approach"],
  },
  {
    id: "stage",
    label: "Where is it today?",
    options: [
      "MVP in development",
      "MVP live",
      "Live with real users",
      "Preparing for funding or handover",
    ],
  },
  {
    id: "concern",
    label: "What worries you most?",
    options: [
      "Security",
      "Scalability",
      "Code quality",
      "Deployment / infrastructure",
      "Developer handover",
    ],
  },
];

/**
 * The four engagements, each a scope → deliverable pair with the moment it
 * is usually bought.
 */
export const BLUEPRINTS = [
  {
    name: "AI System Assurance",
    saved: "From $1,500",
    trigger: "LLM & agent workflows",
    output: "Remediation report",
    kpi: "Prompt injection surface mapped",
  },
  {
    name: "Quality Assurance",
    saved: "From $1,000",
    trigger: "Journeys & integrations",
    output: "Prioritized bug report",
    kpi: "Regression risk identified",
  },
  {
    name: "Hardening Sprint",
    href: "/services/production-readiness",
    saved: "$6k–$15k",
    trigger: "Known critical findings",
    output: "Production sign-off",
    kpi: "Guardrails & observability live",
  },
  {
    name: "Continuous Assurance",
    href: "/services/continuous-assurance",
    saved: "From $750/mo",
    trigger: "Every material change",
    output: "Monthly impact review",
    kpi: "Drift caught before release",
  },
];

/**
 * The "What We Review" grid the six areas every audit covers.
 * Icons are Font Awesome solid names, resolved at render. Each one links to its
 * detail page under /services/[slug].
 */
export const REVIEW_AREAS = [
  {
    icon: "fa-shield-halved",
    title: "Architectural Risk Audit",
    href: "/services/architecture-audit",
    body: "Full review of your system design, data flows, and structural weaknesses identified before they become expensive to fix.",
  },
  {
    icon: "fa-chart-simple",
    title: "Production Readiness Review",
    href: "/services/production-readiness",
    body: "Observability, incident response, deployment pipelines, and operational maturity assessed, scored, and prioritized.",
  },
  {
    icon: "fa-lock",
    title: "Security & Scaling Analysis",
    href: "/services/security-audit",
    body: "Threat surface mapping, auth hardening, load strategy, and database optimization AI-powered analysis, engineer-verified.",
  },
  {
    icon: "fa-bolt",
    title: "AI-Built Product Review",
    href: "/services/ai-built-product-review",
    body: "Designed for products built with Cursor, Claude Code, Lovable, Bolt, and Copilot. We find what the AI didn’t catch.",
  },
  {
    icon: "fa-user-group",
    title: "CTO Advisory for Founders",
    href: "/services/cto-advisory",
    body: "Senior engineering judgment on demand. Make the right architecture decisions without the cost of a full-time CTO hire.",
  },
  {
    icon: "fa-clock",
    title: "Ongoing Engineering Oversight",
    href: "/services/continuous-assurance",
    body: "Continuous senior review of architecture decisions, codebase health, and security posture as your product evolves.",
  },
];
