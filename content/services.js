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
