/*
 * The sample audit report, opened from the "Sample audit output" line under
 * the hero collage (<SampleReportButton/> → <SampleReportModal/>).
 *
 * It is a redacted stand-in for a real deliverable, so it lives in content/
 * with the rest of the copy: the numbers, findings and roadmap are the thing
 * a reader is judging, and editing them should not mean reading JSX.
 *
 * "Acme SaaS" is fictional. Keep it that way — the point is to show the shape
 * of a report, not to publish a customer's findings.
 */

export const SAMPLE_REPORT = {
  eyebrow: "Sample Audit Report · Vibecop",
  title: "Acme SaaS — Architectural Risk Audit",
  lede: [
    "Every finding is validated, prioritized, and translated into business impact by senior engineers.",
    "Built for founders, CTOs, and engineering teams preparing for real scale.",
  ],

  /* the cover sheet: what was reviewed, and by whom */
  meta: [
    { label: "Product", value: "Acme SaaS v2.1" },
    { label: "Stack", value: "Next.js · PostgreSQL · AWS" },
    { label: "Built with", value: "Claude Code + Cursor" },
    { label: "Audit type", value: "Architectural Risk Audit" },
    { label: "Reviewed by", value: "Senior Engineer" },
  ],
};

/* The headline number. `verdict` is the sentence the score buys you — a bare
 * 35 means nothing to a founder reading their first audit. */
export const SAMPLE_SCORE = {
  label: "Overall Production Readiness Score",
  value: 35,
  outOf: 100,
  verdict: "Not production-ready",
};

/* Counts must agree with SAMPLE_FINDINGS below — 2/4/2/1 across nine. */
export const SAMPLE_SEVERITY_COUNTS = [
  { severity: "critical", count: 2 },
  { severity: "high", count: 4 },
  { severity: "medium", count: 2 },
  { severity: "low", count: 1 },
];

export const SAMPLE_CATEGORIES = [
  { label: "Architecture", score: 38 },
  { label: "Security", score: 31 },
  { label: "Performance", score: 55 },
  { label: "Observability", score: 18 },
  { label: "Production Readiness", score: 34 },
];

export const SAMPLE_SUMMARY = {
  title: "Executive Summary",
  paragraphs: [
    "Acme SaaS was built rapidly using Claude Code and Cursor over 6 weeks. The product is functionally complete and visually polished. However, this audit identified 9 significant findings — including 2 critical vulnerabilities and 3 architecture-level issues — that represent serious production, security, and scaling risk.",
    "The two critical findings (JWT secret exposure and missing row-level security) should be treated as immediate blockers to enterprise customer onboarding or public launch. Both are exploitable with minimal attacker sophistication.",
    "Beyond security, the architecture has two compounding structural problems: a premature microservices split that adds operational complexity without scaling benefit, and synchronous processing across all background work with no queueing strategy. These patterns will not survive production load.",
    "The performance and observability gaps mean the team has no visibility into current failures and no capacity to scale beyond ~300 concurrent users without a significant breakdown.",
    "The prioritized fix roadmap addresses all findings in order of business impact. Critical and high-severity items can be resolved within 2–3 sprint cycles with the right execution sequence.",
  ],
};

/*
 * The body of the report. Each finding carries the same four beats a real one
 * does — what it is, what it costs the business, what to do, and how long
 * that takes — because the middle two are what separate an audit from a
 * linter run.
 */
export const SAMPLE_FINDINGS = [
  {
    id: "F-001",
    severity: "critical",
    area: "Authentication",
    title: "JWT secrets stored in environment variables without rotation",
    description:
      "JWT signing secrets are hardcoded in .env files with no rotation mechanism. A single leaked secret compromises all active sessions permanently.",
    impact:
      "Complete authentication bypass. All user sessions vulnerable if secret is exposed via logs, CI/CD, or repository leaks.",
    recommendation:
      "Migrate to a secrets manager (AWS Secrets Manager, Vault). Implement automatic rotation every 30 days. Add audit logging for secret access.",
    effort: "2–3 days",
  },
  {
    id: "F-002",
    severity: "critical",
    area: "Database",
    title: "No row-level security on multi-tenant data",
    description:
      "Database queries rely entirely on application-level filtering for tenant isolation. No enforcement at the database layer.",
    impact:
      "A single bug in any query can expose all tenant data. Lateral movement between tenants requires only a crafted request.",
    recommendation:
      "Implement Row Level Security (RLS) policies at the database level. Add integration tests specifically validating tenant boundaries.",
    effort: "3–5 days",
  },
  {
    id: "F-003",
    severity: "high",
    area: "Performance",
    title: "N+1 query pattern in core product feed",
    description:
      "The main feed endpoint executes one query per item to fetch associated user data. At 50 items per page, this generates 51 database round-trips per request.",
    impact:
      "14-second response times observed at 200 concurrent users. Will collapse under any meaningful load spike or growth.",
    recommendation:
      "Refactor using JOIN queries or DataLoader pattern. Add query analysis to CI pipeline to catch regressions.",
    effort: "1–2 days",
  },
  {
    id: "F-004",
    severity: "high",
    area: "Architecture",
    title: "Premature microservices split without domain boundaries",
    description:
      "The codebase was split into 7 services early in development without clear domain ownership or bounded contexts. Services share a database and call each other synchronously in tight chains.",
    impact:
      "Deployment complexity with none of the scaling benefits. A single service failure cascades across the full request chain. Debugging spans multiple codebases with no distributed tracing.",
    recommendation:
      "Consolidate to a modular monolith with clear internal domain boundaries. Re-introduce service extraction only when a specific scaling boundary is proven under production load.",
    effort: "2–4 weeks (phased)",
  },
  {
    id: "F-005",
    severity: "high",
    area: "Infrastructure",
    title: "Single-region deployment with no failover",
    description:
      "All services deployed to us-east-1 only. Database has no read replicas or standby instance. No cross-region backup strategy.",
    impact:
      "Any AWS regional outage results in complete service unavailability. SLA commitments are unachievable with current architecture.",
    recommendation:
      "Add multi-AZ deployment for stateful services. Configure automated RDS snapshots to separate region. Document recovery time objectives.",
    effort: "1 week",
  },
  {
    id: "F-006",
    severity: "high",
    area: "Security",
    title: "Missing rate limiting on authentication endpoints",
    description:
      "Login, password reset, and OTP verification endpoints have no rate limiting or account lockout mechanisms.",
    impact:
      "Brute force and credential stuffing attacks are trivial. Password reset endpoint enables account enumeration via timing differences.",
    recommendation:
      "Implement rate limiting with exponential backoff. Add IP-based throttling. Normalize response times to prevent enumeration.",
    effort: "1 day",
  },
  {
    id: "F-007",
    severity: "medium",
    area: "Architecture",
    title: "Synchronous processing blocking scalability under load",
    description:
      "Email sending, PDF generation, webhook delivery, and third-party API calls happen synchronously within request handlers. No queueing strategy exists.",
    impact:
      "Any slow downstream service causes cascading timeouts across user-facing requests. No retry logic. No backpressure. Failure rate increases non-linearly under load.",
    recommendation:
      "Introduce an async job queue (BullMQ, SQS). Implement retry with exponential backoff and dead letter queues. Separate user-facing latency from background work.",
    effort: "3–5 days",
  },
  {
    id: "F-008",
    severity: "medium",
    area: "Observability",
    title: "No structured logging or error tracking",
    description:
      "Application uses console.log() throughout. No centralized log aggregation, no error tracking service, no alerting on failure conditions.",
    impact:
      "Production incidents are invisible until users report them. MTTR is measured in hours rather than minutes. Post-mortems are impossible.",
    recommendation:
      "Integrate structured logging (Pino/Winston). Add Sentry for error tracking. Configure alerts on error rate thresholds.",
    effort: "2–3 days",
  },
  {
    id: "F-009",
    severity: "low",
    area: "Dependencies",
    title: "47 outdated npm packages including 3 with known CVEs",
    description:
      "Dependency audit reveals packages last updated 18+ months ago. Three packages have publicly disclosed vulnerabilities (CVE-2023-44487, CVE-2024-21538, CVE-2024-4067).",
    impact:
      "Two CVEs are low severity. One (CVE-2023-44487 — HTTP/2 Rapid Reset) is high severity and could be leveraged for DoS.",
    recommendation:
      "Run npm audit fix immediately for the high-severity CVE. Schedule quarterly dependency update reviews. Add Dependabot.",
    effort: "4 hours",
  },
];

/* Sprints 1 and 2 only: sprint 3 is what the teaser at the foot withholds. */
export const SAMPLE_ROADMAP = {
  title: "Prioritized Fix Roadmap",
  lede: "Sprint-by-sprint execution plan ordered by business impact and dependency sequence.",
  sprints: [
    {
      title: "Sprint 1 — Immediate blockers",
      items: [
        { id: "F-001", task: "Migrate JWT secrets to secrets manager" },
        { id: "F-002", task: "Implement database row-level security" },
        { id: "F-006", task: "Add rate limiting to auth endpoints" },
      ],
    },
    {
      title: "Sprint 2 — Architecture & performance",
      items: [
        { id: "F-003", task: "Resolve N+1 query patterns in product feed" },
        { id: "F-007", task: "Introduce async job queue for background work" },
        { id: "F-008", task: "Structured logging and error tracking" },
      ],
    },
  ],
};

export const SAMPLE_REPORT_CTA = {
  teaserTitle: "Full report included",
  teaserBody: "Sprint 3 roadmap, infrastructure plan, and 32-item security checklist",
  teaserNote:
    "Every Vibecop audit delivers the complete execution plan, reviewed and sequenced by a senior engineer.",
  teaserLabel: "Request Full Audit Report",

  closingTitle: "This is what a real Vibecop audit looks like.",
  closingBody: "Your product has its own architectural risks. We find them before your users do.",
  closingLabel: "Review My Architecture",
};
