/**
 * The work on /case-studies.
 *
 * The kit rendered these six into a separate Bootstrap tab pane per filter,
 * duplicating the markup five times over — and its tab strip had no entry for
 * Finance or Lead gen, so two cards were only ever reachable under "All".
 * Here the data is listed once and the filter list is derived from it, which
 * makes every category reachable.
 */
export const CASE_STUDIES = [
  {
    slug: "invoicing-receipt-to-ledger",
    category: "Invoices",
    sector: "Logistics",
    title: "18 hrs/week saved, invoicing errors down 62%",
    body: "Logistics SMB automated receipt-to-ledger and payment matching.",
    stats: ["18h/wk saved", "62% errors down"],
    image: "/assets/images/gallery-img1.jpg",
  },
  {
    slug: "weekly-client-reporting",
    category: "Reporting",
    sector: "Agency",
    title: "Reporting time cut from 6 hrs → 45 min",
    body: "Agency ops automated weekly client reports from multiple sources.",
    stats: ["~5h saved/week", "Real-time data"],
    image: "/assets/images/gallery-img2.jpg",
  },
  {
    slug: "lead-flow-to-booked-calls",
    category: "Sales",
    sector: "B2B",
    title: "+32% booked calls, reply time less than 15 min",
    body: "Lead flow automation: form to CRM, calendar link, reply detection.",
    stats: ["+32% booked", "Reply within 15m"],
    image: "/assets/images/gallery-img3.jpg",
  },
  {
    slug: "support-ticket-deflection",
    category: "Support",
    sector: "E-com",
    title: "38% ticket deflection in 30 days",
    body: "Triage, macros, and post-purchase flows. Fewer “Where’s my order?” and return-status tickets.",
    stats: ["38% deflection", "Faster refunds"],
    image: "/assets/images/gallery-img4.jpg",
  },
  {
    slug: "bank-feed-reconciliation",
    category: "Finance",
    sector: "SMB",
    title: "Reconciliation from 2 days to 2 hours",
    body: "Bank feed + invoice matching. One summary for the accountant weekly.",
    stats: ["~12h saved/week", "100% matched"],
    image: "/assets/images/gallery-img5.jpg",
  },
  {
    slug: "sla-follow-up-timers",
    category: "Lead gen",
    sector: "SaaS",
    title: "Missed follow-ups prevented: 23/week",
    body: "SLA timers and auto-sequences. No lead left without a touch within 24 hours.",
    stats: ["23 saved/week", "SLA met"],
    image: "/assets/images/gallery-img6.jpg",
  },
];

export const CASE_STUDY_FILTERS = ["All", ...new Set(CASE_STUDIES.map((c) => c.category))];
