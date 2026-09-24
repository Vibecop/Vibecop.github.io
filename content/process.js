/** The delivery timeline and handoff kit on /process. */

/*
 * The ten stages of an audit, in the order they run.
 *
 * The TIMELINE below says how long an audit takes; this says what actually
 * happens inside it. Each stage carries what it produces, because a
 * methodology nobody can check the output of is just a list of verbs.
 */
export const METHODOLOGY_LEDE =
  "Every Vibecop audit runs the same ten stages, in the same order. Automated analysis goes first because it is fast and exhaustive; senior engineers go last because judgment is what turns a list of findings into a decision about what to fix. The stages below are what a client gets on every engagement, whatever built the code.";

export const METHODOLOGY = [
  {
    title: "Repository & architecture discovery",
    body: "We take read access and map what is actually there: services, routes, jobs, schemas, environments, and the third parties the system depends on. AI-built codebases routinely contain features nobody remembers requesting, so the map is built from the code rather than from a description of it.",
    output: "A component and dependency map of the system as built.",
  },
  {
    title: "Automated code & security analysis",
    body: "Static analysis, dependency and CVE scanning, secret detection, and pattern matching run across the whole repository and its infrastructure config. This pass is deliberately broad and noisy: its job is to miss nothing, not to be right about everything.",
    output: "A raw finding set, unfiltered, with locations.",
  },
  {
    title: "Architecture & data-flow tracing",
    body: "We trace the paths that matter end to end (signup, payment, upload, anything that writes money or personal data), following each one from entry point to storage. Coupling, ownership, and the work happening on the request path become visible here rather than in a diagram.",
    output: "Traced critical paths, with coupling and bottlenecks marked.",
  },
  {
    title: "Authentication & authorization review",
    body: "Authentication is checked for session handling, token lifetime, revocation, and the reset and OTP flows generated last. Authorization is checked endpoint by endpoint, because generated code produces correct login screens far more reliably than it produces correct permission checks behind them.",
    output: "Per-endpoint access-control findings, including unreferenced routes.",
  },
  {
    title: "Database & API review",
    body: "Schema, constraints, indexes, migrations and row-level policies are read against the queries the application really makes. On the API side: input validation, rate limiting, mass assignment, error verbosity, and what the public client key can reach when someone calls the database directly.",
    output: "Data-layer and API findings, with tenant isolation verified or not.",
  },
  {
    title: "AI/LLM-specific risk analysis",
    body: "Where the product runs models in production, we review the context pipeline, tool permissions, memory and retrieval scoping, output handling, spend limits, and failure behaviour. Prompt injection is tested as an access-control problem, because that is what it is.",
    output: "Agent and LLM risk findings, with tool permission scope assessed.",
  },
  {
    title: "Infrastructure & deployment review",
    body: "Hosting, networking, IAM, storage permissions, environment separation, build reproducibility, migration safety and rollback. We also check what happens when a deploy fails halfway, because that is the failure most teams have never rehearsed.",
    output: "Infrastructure findings plus a deployment and rollback assessment.",
  },
  {
    title: "Human verification",
    body: "A senior engineer reproduces every finding by hand. False positives are cut, duplicates merged, and anything the tooling missed but the earlier tracing implied gets added. Nothing reaches a client report without a person having confirmed it in the actual codebase.",
    output: "A verified finding set. Confirmed issues only.",
  },
  {
    title: "Risk prioritization",
    body: "Each verified finding is ranked by exploitability and business impact rather than by severity score in isolation. A critical CVE in an unreachable code path ranks below a missing authorization check on your billing endpoint, and we say why in the report.",
    output: "Findings ordered by real risk, with the reasoning shown.",
  },
  {
    title: "Remediation roadmap",
    body: "The prioritized findings become a sequence your team can execute, ordered so fixes unblock each other instead of competing for the same sprint. It is delivered in a live walkthrough with the engineer who wrote it, so the reasoning survives the handoff.",
    output: "A sequenced fix roadmap, walked through live.",
  },
];

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
