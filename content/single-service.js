/** Copy for /single-services — the Lead Flow Automation detail page. */

/** The scope builder's three groups. Trigger and Output pick one; Tools is multi-select. */
export const SCOPE_GROUPS = [
  { id: "trigger", label: "Trigger", multiple: false, options: ["Form Submission", "Website Visit"] },
  { id: "tools", label: "Tools (we connect)", multiple: true, options: ["HubSpot", "Calendly", "Slack"] },
  {
    id: "output",
    label: "Output",
    multiple: false,
    options: ["CRM lead + calendar link email", "Slack Notification"],
  },
];

export const INCLUDED = [
  "Trigger-to-CRM flow (form or email) with field mapping",
  "Auto-send calendar or follow-up email (compliant)",
  "Optional: enrichment, round-robin assign, Slack/Teams alert",
  "Documentation and handover",
];

export const STACK = [
  "HubSpot, Salesforce, Pipedrive, Zoho, Monday.",
  "Zapier/Make.",
  "Calendly, Cal.com.",
  "Slack, Teams.",
];

export const HOW_IT_WORKS = [
  { title: "Audit", body: "We map your form/email source, CRM, and desired outcome." },
  { title: "Build", body: "We build and test in sandbox. No impact on live data." },
  { title: "QA & launch", body: "You approve. We go live and hand over docs." },
];
