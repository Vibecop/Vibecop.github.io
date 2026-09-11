/* The two ways a client buys: an audit of what exists, or ongoing testing of
   what changes. PricingCards renders one group at a time behind a toggle, so
   the order here is the tab order and the first is what loads. */
export const PLAN_GROUPS = ["Technical Audits", "Quality Assurance"];

export const PLANS = [
  {
    name: "Independent quality assurance", group: "Quality assurance", price: "$1,000", pricePrefix: "From", icon: "/assets/images/investment-icon2.png",
    summary: "Journeys, integrations, regressions",
    features: ["End-to-end journey testing", "Integration point validation", "Regression risk identification", "Cross-browser compatibility check", "API contract verification", "Performance baseline assessment", "Prioritized bug report"],
  },
  {
    name: "Vibecop Lite Audit", group: "Technical Audits", price: "$1,200", icon: "/assets/images/investment-icon2.png",
    summary: "Find the risks sitting in the code",
    features: ["Full codebase review", "Security & access-control assessment", "Dependency & supply-chain risk check", "Secrets & configuration exposure scan", "Error handling & input validation review", "Code quality & maintainability findings", "Human-verified, evidence-backed findings", "Prioritized fix list"],
  },
  {
    name: "Vibecop Full Audit", group: "Technical Audits", price: "$2,900", icon: "/assets/images/investment-icon1.png",
    summary: "Know exactly what you’re shipping",
    features: ["Full codebase & architecture review", "Security & access-control assessment", "AI/LLM & agent risk review", "Database, API & integration testing", "Production-readiness & infrastructure review", "Performance & scalability analysis", "Human-verified, evidence-backed findings", "Prioritized roadmap & executive report"],
  },
  {
    name: "Vibecop Deep Audit", group: "Technical Audits", price: "$5,000–$8,000+", featured: true, icon: "/assets/images/investment-icon3.png",
    summary: "Assurance for production-critical systems",
    features: ["Everything in the Full Audit", "Deep architecture analysis & threat modelling", "End-to-end workflow testing", "AI agent & tool permission assessment", "Advanced infrastructure & cloud cost review", "Third-party integration deep dive", "Failure-mode & production risk analysis", "Technical debt & remediation sequencing", "Leadership briefing + optional retest"],
  },
  {
    name: "Continuous quality & AI assurance", group: "Quality assurance", price: "$750", pricePrefix: "From", priceSuffix: "/month", icon: "/assets/images/investment-icon1.png",
    summary: "Change reviews, agent evaluations",
    features: ["Monthly change impact review", "Agent behaviour evaluation", "Regression suite maintenance", "Performance drift monitoring", "Security posture check", "Architecture decision support", "Priority async access"],
  },
];
