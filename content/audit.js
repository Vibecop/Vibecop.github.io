/*
 * Copy and field list for the audit application modal
 * (<AuditModal/>, opened by every "audit" CTA on the site).
 *
 * The fields live here rather than in the component for the same reason the
 * rest of content/ does: the shape of the application is copy, and changing a
 * dropdown's options should not mean reading JSX.
 */
export const AUDIT_MODAL = {
  badges: [
    "Human-led Reviews",
    "Senior Engineers",
    "CTO-Level Oversight",
    "Production-Grade Guidance",
  ],

  title: "Apply for a Production Review",
  lede:
    "We work with a limited number of companies each month to ensure deep technical attention and meaningful outcomes. Every audit combines AI-powered analysis with senior engineer verification going beyond automated findings to deliver architectural judgment, prioritized decisions, and production-ready confidence.",

  pitchTitle: "Built for founders who cannot afford technical mistakes",
  pitchBody:
    "Whether you are preparing for launch, onboarding enterprise clients, scaling infrastructure or reviewing AI-generated code Vibecop helps prevent expensive problems before they become production incidents.",

  submitLabel: "Request an audit",
  footnote:
    "Applications are reviewed by our team. If there is a strong fit, we will schedule a strategy call within 24 hours.",
  sentNote:
    "Thanks your application is captured. Connect a form handler to deliver it.",
};

/* `full: true` spans both columns. `placeholder` on a select is its
   disabled first option, which is what keeps "Select stage" as the
   empty state rather than a real answer. */
export const AUDIT_FIELDS = [
  {
    id: "name",
    label: "Full name",
    type: "text",
    placeholder: "Alex Johnson",
    required: true,
    autoComplete: "name",
  },
  {
    id: "email",
    label: "Work email",
    type: "email",
    placeholder: "alex@company.com",
    required: true,
    autoComplete: "email",
  },
  {
    id: "company",
    label: "Company",
    type: "text",
    placeholder: "Acme Inc.",
    required: true,
    autoComplete: "organization",
  },
  {
    id: "website",
    label: "Product URL",
    type: "url",
    placeholder: "https://yourproduct.com",
    autoComplete: "url",
  },
  {
    id: "product",
    label: "What are you building?",
    type: "textarea",
    placeholder: "e.g. B2B SaaS platform, AI-powered marketplace, fintech product...",
    required: true,
    full: true,
  },
  {
    id: "stage",
    label: "Product stage",
    type: "select",
    placeholder: "Select stage",
    required: true,
    options: [
      "Pre-launch / prototype",
      "MVP in production",
      "Scaling with real users",
      "Enterprise / regulated",
      "Post-incident recovery",
    ],
  },
  {
    id: "team",
    label: "Engineering team size",
    type: "select",
    placeholder: "Select size",
    options: ["Solo founder", "2–5 engineers", "6–15 engineers", "16–50 engineers", "50+ engineers"],
  },
  {
    id: "concerns",
    label: "What worries you most?",
    type: "textarea",
    placeholder:
      "e.g. Security gaps in our auth layer, worried about scaling past 10K users, AI-generated code quality, pre-launch architecture review...",
    required: true,
    full: true,
  },
  {
    id: "timeline",
    label: "Timeline",
    type: "select",
    placeholder: "Select range",
    options: ["Immediately", "Within 2 weeks", "Within a month", "Next quarter", "Just exploring"],
  },
  {
    id: "budget",
    label: "Budget",
    type: "select",
    placeholder: "Select budget",
    options: ["Under $1,500", "$1,500 – $5,000", "$5,000 – $15,000", "$15,000+", "Not sure yet"],
  },
];
