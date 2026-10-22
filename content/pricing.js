/* The two ways a client buys: an audit of what exists, or ongoing testing of
   what changes. PricingCards renders one group at a time behind a toggle, so
   the order here is the tab order and the first is what loads. */
export const PLAN_GROUPS = ["Technical Audits", "Quality Assurance"];

/* Shown under the audit cards: every audit price is a starting point. */
export const AUDIT_PRICING_NOTE =
  "Final pricing depends on codebase size (lines of code) and complexity, agreed before work begins.";

export const PLANS = [
  {
    name: "Independent quality assurance", group: "Quality Assurance", price: "$1,000", pricePrefix: "From", icon: "/assets/images/investment-icon2.png",
    summary: "Journeys, integrations, regressions",
    features: ["End-to-end journey testing", "Integration point validation", "Regression risk identification", "Cross-browser compatibility check", "API contract verification", "Performance baseline assessment", "Prioritized bug report"],
  },
  {
    name: "Vibecop Focused Audit", group: "Technical Audits", price: "$450", pricePrefix: "From", icon: "/assets/images/investment-icon1.png",
    summary: "Diagnose one critical workflow",
    features: ["One agreed workflow traced end to end", "UI, API, database & third-party service tracing", "Root-cause diagnosis of the reported problem", "Verified issues vs. hypotheses", "Severity & affected code areas", "Actionable fix plan with acceptance checks", "Developer walkthrough"],
  },
  {
    name: "Vibecop Lite Audit", group: "Technical Audits", price: "$1,200", pricePrefix: "From", icon: "/assets/images/investment-icon2.png",
    summary: "Find the risks sitting in the code",
    features: ["Full codebase review", "Security & access-control assessment", "Dependency & supply-chain risk check", "Secrets & configuration exposure scan", "Error handling & input validation review", "Code quality & maintainability findings", "Human-verified, evidence-backed findings", "Prioritized fix list"],
  },
  {
    name: "Vibecop Full Audit", group: "Technical Audits", price: "$2,900", pricePrefix: "From", featured: true, icon: "/assets/images/investment-icon3.png",
    summary: "Know exactly what you’re shipping",
    includes: "Everything in the Lite Audit",
    upsell: "Add QA and save $400 with the Confidence Package",
    addon: "Penetration testing add-on (scoped separately)",
    features: ["Architecture & data-flow review", "Third-party integrations & APIs", "Cloud & infrastructure review", "Database & background jobs", "AI/LLM & agent risk review", "Production-readiness & deployment review", "Performance & scalability analysis", "Prioritized roadmap & executive report"],
  },
  {
    name: "Continuous quality & AI assurance", group: "Quality Assurance", price: "$750", pricePrefix: "From", priceSuffix: "/month", icon: "/assets/images/investment-icon1.png",
    summary: "Change reviews, agent evaluations",
    features: ["Monthly change impact review", "Agent behaviour evaluation", "Regression suite maintenance", "Performance drift monitoring", "Security posture check", "Architecture decision support", "Priority async access"],
  },
];

/* Full Audit + Essential QA at a discount. Rendered under the plan cards on
   both tabs, since it is the answer to "audit or QA?". */
export const BUNDLE = {
  name: "Confidence Package",
  tagline: "Ship knowing the code and the user journeys both hold up.",
  price: "$3,500",
  was: "$3,900",
  saving: "Save $400",
  delivery: "10–15 business days",
  parts: [
    { name: "Full Audit", features: ["Architecture & data flows", "Integrations & APIs", "Cloud & infrastructure", "Prioritized roadmap & executive report"] },
    { name: "Essential QA", features: ["Critical user journeys", "Sign-in, permissions & input validation", "Browser & mobile checks", "Defect log with evidence"] },
  ],
  extra: "Plus one joint findings walkthrough with combined priorities",
};
