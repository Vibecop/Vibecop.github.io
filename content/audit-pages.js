/**
 * The audit landing pages: seven topic pages at the site root and five
 * tool-specific pages under /audits/.
 *
 * Every record is deliberately definition-shaped. `definition` is a
 * self-contained answer to "what is an X audit?" that reads correctly when
 * lifted out of the page on its own, and `checks` is the scope as a flat,
 * extractable list rather than prose. One route renders all of them, so the
 * shape cannot drift page to page.
 */
export const AUDIT_PAGES = [
  {
    path: "ai-software-audit",
    h1: "AI Software Audit",
    title: "AI Software Audit | Independent Review of AI-Built Applications",
    definition:
      "An AI software audit is an independent technical review of an application built partly or entirely with AI coding tools. Vibecop evaluates the codebase, architecture, security, database, infrastructure, integrations, reliability and production readiness, then has senior engineers verify and prioritize the findings.",
    checksTitle: "What does an AI software audit check?",
    checks: [
      { name: "Architecture", detail: "Service boundaries, coupling, and data ownership as they were actually built rather than as they were described." },
      { name: "Authentication", detail: "Session handling, token lifetimes, password and OTP flows, and the reset paths that are usually generated last." },
      { name: "Authorization", detail: "Whether every endpoint checks who is asking, and whether that check happens server-side." },
      { name: "Database security", detail: "Row-level security, tenant isolation, migrations, indexes, and the queries that only work at current data volume." },
      { name: "API security", detail: "Input validation, rate limiting, mass assignment, error verbosity, and CORS policy on every public surface." },
      { name: "Dependencies", detail: "Known CVEs, abandoned packages, and the transitive tree that arrived with a generated scaffold." },
      { name: "Secrets", detail: "Where keys live, what is committed, what reaches the client bundle, and whether anything can be rotated." },
      { name: "Infrastructure", detail: "Hosting, networking, storage permissions, environment separation, and backup and restore that has been tested." },
      { name: "Observability", detail: "Logging, error tracking, and alerting, judged by whether an outage would be noticed before a customer reported it." },
      { name: "Performance", detail: "N+1 queries, synchronous work on the request path, payload sizes, and cold-start behaviour." },
      { name: "Scalability", detail: "The load the current design carries, the point it stops carrying, and what changes first." },
      { name: "AI/LLM risks", detail: "Prompt injection, unbounded tool permissions, provider key exposure, cost runaway, and unvalidated model output." },
      { name: "Testing", detail: "Whether the critical paths have any coverage at all, and whether the existing suite would catch a regression." },
      { name: "Deployment", detail: "Build reproducibility, migration safety, rollback, and what happens when a deploy fails halfway." },
      { name: "Maintainability", detail: "Duplication, dead code, inconsistent patterns, and the parts of the codebase no human has read." },
    ],
  },

  {
    path: "ai-code-audit",
    h1: "AI Code Audit",
    title: "AI Code Audit | Independent Review of AI-Generated Code",
    definition:
      "An AI code audit is an independent line-level review of code written by AI coding assistants. Vibecop reads the generated code the way a senior engineer would in review, checking correctness, error handling, data validation, concurrency, duplication and dead paths, and reports what is wrong rather than what merely looks unusual.",
    checksTitle: "What does an AI code audit check?",
    checks: [
      { name: "Correctness", detail: "Logic that passes a demo and fails on the second case: off-by-one bounds, inverted conditions, wrong operator precedence." },
      { name: "Error handling", detail: "Swallowed exceptions, empty catch blocks, and failures that return success to the caller." },
      { name: "Input validation", detail: "Whether untrusted input is validated at the boundary or trusted all the way to the database." },
      { name: "Data integrity", detail: "Missing transactions, partial writes, and multi-step operations with no rollback." },
      { name: "Concurrency", detail: "Race conditions, non-atomic read-modify-write, and shared state assumed to be single-user." },
      { name: "Duplication", detail: "The same logic regenerated in four files, each copy drifting separately from the others." },
      { name: "Dead code", detail: "Unreachable branches, unused exports, and abandoned scaffolding left behind by earlier prompts." },
      { name: "Type safety", detail: "`any` escapes, silenced compiler errors, and types that describe an older shape of the data." },
      { name: "API contracts", detail: "Whether the client and server agree on the shape, and whether the response is checked before it is used." },
      { name: "Dependency use", detail: "Libraries pulled in for one line, plus reimplementations of what the standard library already does." },
      { name: "Configuration", detail: "Hardcoded values that change per environment, and defaults that are only safe in development." },
      { name: "Logging", detail: "Personal data and secrets written to logs, and the paths that log nothing at all." },
      { name: "Test quality", detail: "Tests that assert the implementation rather than the behaviour, and suites that pass with the feature deleted." },
      { name: "Readability", detail: "Naming, structure, and comments, judged by whether a new engineer can safely change the file." },
      { name: "Consistency", detail: "Competing patterns for the same job, a common signature of code generated across many sessions." },
    ],
  },

  {
    path: "ai-security-audit",
    h1: "AI Security Audit",
    title: "AI Security Audit | Security Review of AI-Generated Applications",
    definition:
      "An AI security audit is an independent security review of an application built with AI coding tools. Vibecop maps the threat surface, tests authentication and authorization, inspects secrets handling, database isolation and dependency exposure, and ranks every finding by exploitability and business impact rather than by scanner severity alone.",
    checksTitle: "What does an AI security audit check?",
    checks: [
      { name: "Threat surface", detail: "Every route, job, webhook, and storage bucket reachable from outside, enumerated rather than assumed." },
      { name: "Authentication", detail: "Session and token handling, expiry, revocation, and the password and OTP flows around them." },
      { name: "Authorization", detail: "Object-level access checks on every endpoint, including the ones the UI never links to." },
      { name: "Tenant isolation", detail: "Whether separation is enforced at the database with row-level security or only by an application filter." },
      { name: "Secrets management", detail: "Committed keys, client-bundled keys, shared credentials, and whether rotation is possible at all." },
      { name: "Injection", detail: "SQL, NoSQL, command, and template injection paths where input reaches an interpreter unescaped." },
      { name: "Rate limiting", detail: "Brute force, credential stuffing, and enumeration protection on login, reset, and OTP endpoints." },
      { name: "Dependency exposure", detail: "Known CVEs in direct and transitive packages, with judgment on which are actually reachable." },
      { name: "Transport and headers", detail: "TLS configuration, CORS policy, CSP, and the security headers a generated scaffold usually omits." },
      { name: "File handling", detail: "Upload validation, storage permissions, signed URLs, and path traversal on download." },
      { name: "Data protection", detail: "Encryption at rest and in transit, PII handling, and what ends up in logs and error reports." },
      { name: "LLM attack surface", detail: "Prompt injection, tool permission scope, provider key exposure, and unvalidated model output rendered as trusted." },
      { name: "Infrastructure", detail: "Network exposure, IAM roles, environment separation, and publicly readable buckets." },
      { name: "Audit trail", detail: "Whether privileged actions are logged, and whether the log would survive an incident." },
      { name: "Incident readiness", detail: "Backups, restore testing, key rotation, and a path to revoke access under pressure." },
    ],
  },

  {
    path: "ai-architecture-audit",
    h1: "AI Architecture Audit",
    title: "AI Architecture Audit | Architecture Review of AI-Built Systems",
    definition:
      "An AI architecture audit is an independent review of the structure of a system built with AI coding tools. Vibecop maps service boundaries, data ownership, coupling and request paths as they exist in the code, then judges which of them hold as load, team size and feature scope grow, and sequences the changes that are still cheap to make.",
    checksTitle: "What does an AI architecture audit check?",
    checks: [
      { name: "System boundaries", detail: "Where the seams are, whether they follow the domain, and what each component actually owns." },
      { name: "Data ownership", detail: "Which component is the source of truth for each entity, and how many others write to it directly." },
      { name: "Coupling", detail: "Synchronous call chains, shared databases, and the changes that force a change somewhere else." },
      { name: "Request path", detail: "Everything happening inside a request handler that should be behind a queue." },
      { name: "Data model", detail: "Schema design, normalisation, constraints, and the indexes the query patterns require." },
      { name: "Query patterns", detail: "N+1 access, unbounded result sets, and reads that scale with total rows rather than with the page." },
      { name: "State management", detail: "Where state lives, what assumes a single process, and what breaks on a second instance." },
      { name: "Caching", detail: "What is cached, what invalidates it, and whether caching is covering for a missing index." },
      { name: "Background work", detail: "Queues, retries, idempotency, and what happens to a job that fails on the third attempt." },
      { name: "Integrations", detail: "Third-party failure handling, timeouts, and blast radius when a provider is slow rather than down." },
      { name: "Scalability limits", detail: "The concurrency the current design carries, and the first component to fail past it." },
      { name: "Failure modes", detail: "Single points of failure, cascading timeouts, and what degrades versus what stops." },
      { name: "Environments", detail: "Separation between development, staging, and production, and the config that differs between them." },
      { name: "Evolvability", detail: "How expensive the likely next three features are given the current structure." },
      { name: "Documentation drift", detail: "Where the diagram, the README, and the running system disagree." },
    ],
  },

  {
    path: "ai-agent-audit",
    h1: "AI Agent Audit",
    title: "AI Agent Audit | Security and Reliability Review of LLM Agents",
    definition:
      "An AI agent audit is an independent review of a product that runs LLM agents in production. Vibecop examines the prompt and context pipeline, tool permissions, memory and retrieval, output handling, cost and rate limits, evaluation and failure behaviour, and reports where an agent can be manipulated, can act beyond its intended authority, or can fail without anyone noticing.",
    checksTitle: "What does an AI agent audit check?",
    checks: [
      { name: "Prompt injection", detail: "Whether untrusted content — user input, web pages, documents, tool output — can redirect the agent's behaviour." },
      { name: "Tool permissions", detail: "What each tool can reach, whether the scope is least-privilege, and which calls should require confirmation." },
      { name: "Authorization", detail: "Whether the agent acts with the end user's permissions or with a shared privileged identity." },
      { name: "Context handling", detail: "What enters the context window, whose data it belongs to, and how leakage between users is prevented." },
      { name: "Memory and retrieval", detail: "Persistence, tenant scoping in the vector store, and poisoning of stored context." },
      { name: "Output validation", detail: "Model output parsed, rendered, or executed downstream without being checked or escaped." },
      { name: "Loop control", detail: "Step limits, recursion guards, and stopping conditions for an agent that will not converge." },
      { name: "Cost controls", detail: "Per-user and global spend limits, token budgets, and the runaway loop that bills all night." },
      { name: "Rate and quota", detail: "Provider limits, backoff, and behaviour when the model returns 429 mid-task." },
      { name: "Failure behaviour", detail: "What the agent does on a tool error or timeout, and whether it fails closed or invents a result." },
      { name: "Determinism", detail: "Idempotency of side-effecting tools, and duplicate actions on retry." },
      { name: "Evaluation", detail: "Whether there is any regression suite, and whether a prompt change can be shipped safely." },
      { name: "Observability", detail: "Trace capture for runs, tool calls, and token spend, sufficient to reconstruct an incident." },
      { name: "Data retention", detail: "What is sent to the provider, what is logged, retention terms, and PII in prompts." },
      { name: "Human oversight", detail: "Where a person approves an irreversible action, and whether that gate can be bypassed." },
    ],
  },

  {
    path: "ai-production-readiness-audit",
    h1: "AI Production Readiness Audit",
    title: "AI Production Readiness Audit | Pre-Launch Review for AI-Built Software",
    definition:
      "An AI production readiness audit is an independent pre-launch review of an application built with AI coding tools. Vibecop checks whether the system can be deployed, monitored, recovered and supported by a real team under real load, covering deployment, backups, observability, error handling, security baseline, performance and operational ownership before launch rather than after the first incident.",
    checksTitle: "What does an AI production readiness audit check?",
    checks: [
      { name: "Deployment", detail: "Reproducible builds, environment configuration, and a deploy that can be repeated by someone else." },
      { name: "Rollback", detail: "A tested path back to the previous version, including database migrations that can be reversed." },
      { name: "Backups", detail: "What is backed up, how often, and whether a restore has ever actually been performed." },
      { name: "Monitoring", detail: "Uptime, latency, and error-rate signals that show a problem before customers do." },
      { name: "Alerting", detail: "Who is paged, for what, and whether the alerts are actionable or already ignored." },
      { name: "Error handling", detail: "User-facing failure states, retry behaviour, and errors currently visible only in a console." },
      { name: "Logging", detail: "Structured logs with enough context to debug an incident, and no secrets or PII inside them." },
      { name: "Load behaviour", detail: "Measured behaviour at expected peak concurrency, and the component that saturates first." },
      { name: "Security baseline", detail: "Auth, access control, secrets, headers, and dependency exposure at a minimum launch standard." },
      { name: "Data safety", detail: "Migrations, constraints, and the destructive operations that have no confirmation or audit trail." },
      { name: "Rate limiting and abuse", detail: "Protection on public endpoints, signup flows, and anything that costs money per call." },
      { name: "Third-party dependence", detail: "Provider outages, quota limits, and degraded-mode behaviour for each integration." },
      { name: "Compliance basics", detail: "Data residency, retention, consent, and deletion requests, where they apply to you." },
      { name: "Runbook", detail: "Documented steps for the failures most likely to happen in the first month." },
      { name: "Ownership", detail: "Who maintains this after launch, and what they need to know that only the AI tool currently knows." },
    ],
  },

  {
    path: "vibe-code-audit",
    navLabel: "Vibe Code Audit",
    h1: "Vibe Code Audit: Security, Architecture & Production Readiness",
    title: "Vibe Code Audit | Security & Production Readiness Review of Vibe-Coded Apps",
    definition:
      "Vibe code audits are technical reviews of applications built using AI coding tools such as Cursor, Claude Code, Lovable, Bolt, Replit and Copilot. Vibecop reads the system no one has fully reviewed \u2014 the generated architecture, the security defaults, the database schema, the abandoned experiments \u2014 and reports what is safe to ship, what must be fixed first, and what has to be rebuilt.",
    checksTitle: "What does a vibe code audit check?",
    checks: [
      { name: "What is actually there", detail: "A full map of the codebase, including the routes, jobs, and tables nobody remembers asking for." },
      { name: "Security defaults", detail: "Whether the generated auth, access control, and storage rules were ever tightened from their scaffold state." },
      { name: "Access control", detail: "Server-side permission checks, rather than a UI that simply hides the button." },
      { name: "Database design", detail: "Schema, constraints, indexes, and row-level policies against the queries the app really makes." },
      { name: "Secrets", detail: "Keys committed to the repo, shipped in the client bundle, or shared across environments." },
      { name: "Abandoned code", detail: "Half-built features and superseded experiments still reachable in production." },
      { name: "Pattern drift", detail: "Three different ways of doing the same thing, one per session with the AI tool." },
      { name: "Data validation", detail: "Whether anything checks input before it reaches the database." },
      { name: "Error handling", detail: "Failures that surface as a blank screen, a spinner, or a silent success." },
      { name: "Payments and billing", detail: "Webhook verification, idempotency, and price or quantity trusted from the client." },
      { name: "Third-party wiring", detail: "Integrations configured by copy-paste, including the permissions they were granted." },
      { name: "Performance", detail: "Queries and page loads that are fine with test data and not with real data." },
      { name: "Scalability", detail: "Where the current build stops working, expressed in users rather than adjectives." },
      { name: "Testing", detail: "Whether any coverage exists for the paths that take money or delete data." },
      { name: "Handover readiness", detail: "What an engineer joining this codebase would need before they could safely change it." },
    ],
    /* The category is contested and the terms people search are not
       interchangeable, so each variant gets a plainly written answer rather
       than a keyword dropped into existing copy. */
    sections: [
      {
        heading: "What is a vibe coding audit?",
        body: [
          "A vibe coding audit is an independent review of software produced by describing what you want to an AI tool rather than writing the code yourself. The working assumption of the audit is that the code shipped without a senior engineer reading it, because that is what vibe coding means in practice.",
          "That changes what the review looks for. A conventional code review checks the decisions a team made. A vibe coding audit checks the decisions nobody made: the defaults the tool chose, the tables it created, the permissions it granted, and the earlier attempts it left behind when a later prompt took a different approach.",
        ],
      },
      {
        heading: "Vibe coding security audit",
        body: [
          "A vibe coding security audit concentrates on the part of a vibe coded app that fails worst and soonest. AI tools generate working authentication far more reliably than they generate correct authorization, so the login screen usually holds while the endpoint behind it never checks who is asking.",
          "We test vibe coded app security from outside the interface: calling the API directly, querying the database with the public client key, and requesting objects belonging to another account. Then we check what a leak would cost \u2014 secrets in the repo or the client bundle, tenant data separated only by an application filter, and audit trails that do not exist yet.",
        ],
      },
      {
        heading: "When to run a vibe coded app audit",
        body: [
          "The three moments that force the question are the same every time: before you take real user data, before an enterprise customer runs their own security review, and before an investor's technical diligence reads the repo. Each one puts the codebase in front of someone who did not build it.",
          "Auditing earlier is cheaper. A structural problem found before launch is a week of work; the same problem found after a year of features built on top of it is a rewrite. If you are close to any of those three moments, the audit is worth running now rather than after.",
        ],
      },
    ],
  },

  {
    path: "audits/cursor",
    h1: "Cursor Code Audit",
    title: "Cursor Code Audit | Independent Review of Cursor-Built Applications",
    definition:
      "A Cursor code audit is an independent technical review of an application built with Cursor's AI editor and agent. Vibecop reviews the code produced across many agent sessions — security, architecture, data handling and consistency — and reports where large accepted diffs introduced risk that review inside the editor did not catch.",
    checksTitle: "What does a Cursor code audit check?",
    checks: [
      { name: "Large accepted diffs", detail: "Multi-file agent changes that were approved in bulk, re-read line by line." },
      { name: "Pattern consistency", detail: "Competing conventions introduced across sessions with different context in the window." },
      { name: "Rules coverage", detail: "Whether project rules encode the constraints that actually matter, and where generated code ignores them." },
      { name: "Context gaps", detail: "Code written against a partial view of the repo, duplicating logic that already existed elsewhere." },
      { name: "Access control", detail: "Server-side authorization on every route, including ones added late in a session." },
      { name: "Secrets", detail: "Keys in env files, client bundles, and anything committed during rapid iteration." },
      { name: "Dependencies", detail: "Packages added by the agent, their CVEs, and the ones now unused." },
      { name: "Database access", detail: "Query patterns, missing indexes, migrations, and constraints skipped for speed." },
      { name: "Input validation", detail: "Boundary validation on API routes and server actions." },
      { name: "Error handling", detail: "Generated try/catch blocks that log and continue as if nothing failed." },
      { name: "Type safety", detail: "Suppressed errors, `any` escapes, and types that no longer match the data." },
      { name: "Dead code", detail: "Superseded implementations left in the tree after a later session solved it differently." },
      { name: "Test reality", detail: "Whether generated tests assert behaviour or simply mirror the implementation." },
      { name: "Performance", detail: "Request-path work, N+1 access, and payloads that only look fine locally." },
      { name: "Production readiness", detail: "Deployment, monitoring, backups, and rollback for the system as built." },
    ],
  },

  {
    path: "audits/lovable",
    h1: "Lovable App Audit",
    title: "Lovable App Audit | Independent Review of Lovable-Built Applications",
    definition:
      "A Lovable app audit is an independent technical review of an application generated with Lovable. Vibecop reviews the generated frontend, the backend and database configuration behind it, and the auth and access rules — checking whether data is genuinely protected server-side before the product takes real users, payments, or an enterprise customer.",
    checksTitle: "What does a Lovable app audit check?",
    checks: [
      { name: "Row-level security", detail: "Whether database policies exist on every table, and whether they actually restrict what they claim to." },
      { name: "Client-side keys", detail: "What the public client key can reach if someone calls the database directly, bypassing your UI." },
      { name: "Server-side authorization", detail: "Permission enforced in the backend rather than by hiding routes in the interface." },
      { name: "Auth flows", detail: "Signup, login, password reset, email confirmation, and session lifetime." },
      { name: "Edge and server functions", detail: "Input validation, secret handling, and authorization inside deployed functions." },
      { name: "Storage rules", detail: "Bucket permissions, public objects, upload validation, and signed URL handling." },
      { name: "Schema design", detail: "Relationships, constraints, indexes, and defaults that no longer suit the data." },
      { name: "Generated integrations", detail: "Payments, email, and third-party wiring, especially webhook verification." },
      { name: "Sensitive data", detail: "PII, tokens, and anything exposed through a table, view, or log the frontend can read." },
      { name: "Input validation", detail: "Validation on the server rather than only in the form component." },
      { name: "Rate limiting", detail: "Protection on signup, reset, and any endpoint that costs money per call." },
      { name: "Performance", detail: "Query patterns and page loads against production-sized data rather than seed data." },
      { name: "Scalability", detail: "The point at which the generated design stops carrying your traffic, in concrete numbers." },
      { name: "Maintainability", detail: "Whether an engineer can take this over and change it safely." },
      { name: "Production readiness", detail: "Backups, monitoring, error visibility, environment separation, and rollback." },
    ],
  },

  {
    path: "audits/bolt",
    h1: "Bolt App Audit",
    title: "Bolt App Audit | Independent Review of Bolt-Built Applications",
    definition:
      "A Bolt app audit is an independent technical review of an application built with Bolt. Vibecop reviews the generated stack end to end — frontend, backend, database rules, deployment configuration and integrations — and reports what needs fixing before a prototype that shipped in an afternoon carries real users and real data.",
    checksTitle: "What does a Bolt app audit check?",
    checks: [
      { name: "Prototype-to-production gap", detail: "The defaults that were fine for a demo and are not fine for customers." },
      { name: "Database rules", detail: "Row-level security and tenant isolation on every table the client can reach." },
      { name: "Exposed keys", detail: "API keys and tokens in the client bundle, the repo, or a deployed environment variable." },
      { name: "Server-side authorization", detail: "Access checks that survive someone calling the API without your frontend." },
      { name: "Auth flows", detail: "Session handling, reset paths, and the confirmation steps often left in a default state." },
      { name: "Input validation", detail: "Server-side validation on every write, not just client-side form checks." },
      { name: "Deployment configuration", detail: "Build settings, environment separation, redirects, and function permissions." },
      { name: "Integrations", detail: "Payment, email, and storage wiring, including webhook signature verification." },
      { name: "Dependencies", detail: "Generated package set, known CVEs, and unused weight in the bundle." },
      { name: "Error handling", detail: "Failure states a user actually sees, and errors currently swallowed in the console." },
      { name: "Performance", detail: "Bundle size, render behaviour, and query patterns under real data volume." },
      { name: "Scalability", detail: "Where the generated architecture stops holding, and what changes first." },
      { name: "Observability", detail: "Error tracking and logging sufficient to debug a production incident." },
      { name: "Backups", detail: "Whether data can be restored, and whether that has been tested once." },
      { name: "Maintainability", detail: "Structure, duplication, and how much of the code no human has read." },
    ],
  },

  {
    path: "audits/claude-code",
    h1: "Claude Code Audit",
    title: "Claude Code Audit | Independent Review of Claude Code Projects",
    definition:
      "A Claude Code audit is an independent technical review of a codebase built with Claude Code's agentic workflow. Vibecop reviews the result of many autonomous multi-file sessions — architecture, security, tool and MCP configuration, and consistency — and reports where agent-authored changes introduced risk that no human reviewed in full.",
    checksTitle: "What does a Claude Code audit check?",
    checks: [
      { name: "Agent-authored changes", detail: "Multi-file edits accepted in a single session, reviewed properly for the first time." },
      { name: "Project instructions", detail: "Whether CLAUDE.md encodes the real constraints, and where the code contradicts it." },
      { name: "MCP servers and tools", detail: "What connected tools can reach, the credentials they hold, and their trust boundary." },
      { name: "Permission configuration", detail: "Allowed commands, hooks, and automation that can act without a human in the loop." },
      { name: "Secrets", detail: "Credentials in the repo, in environment files, or reachable by an agent session." },
      { name: "Architecture drift", detail: "Structure that evolved session to session without a single owning design." },
      { name: "Duplication", detail: "The same capability implemented more than once because context did not carry across sessions." },
      { name: "Access control", detail: "Server-side authorization on every endpoint, including internal and admin routes." },
      { name: "Input validation", detail: "Trust boundaries validated in code rather than assumed by the prompt." },
      { name: "Database access", detail: "Schema, constraints, indexes, migrations, and destructive operations without guards." },
      { name: "Dependencies", detail: "Packages the agent introduced, their CVEs, and the ones no longer used." },
      { name: "Test quality", detail: "Whether generated tests would fail if the behaviour broke." },
      { name: "Error handling", detail: "Failure paths that log and continue where they should stop." },
      { name: "Performance", detail: "Request-path work, N+1 queries, and cost under real concurrency." },
      { name: "Production readiness", detail: "Deployment, monitoring, backups, rollback, and operational ownership." },
    ],
  },

  {
    path: "audits/replit",
    h1: "Replit App Audit",
    title: "Replit App Audit | Independent Review of Replit-Built Applications",
    definition:
      "A Replit app audit is an independent technical review of an application built and hosted on Replit. Vibecop reviews the generated code, the auth and database configuration, secrets handling and deployment setup, and reports what has to change before the project carries production traffic or moves onto infrastructure you own.",
    checksTitle: "What does a Replit app audit check?",
    checks: [
      { name: "Secrets handling", detail: "Keys in code, in the repl, or in a fork, and whether any of them can be rotated." },
      { name: "Auth configuration", detail: "Session handling, provider setup, and access checks on every server route." },
      { name: "Authorization", detail: "Server-side permission enforcement, including admin and internal endpoints." },
      { name: "Database setup", detail: "Schema, constraints, indexes, and whether the storage choice suits the access pattern." },
      { name: "Data durability", detail: "Backups, restore, and what survives a redeploy or a rollback." },
      { name: "Deployment configuration", detail: "Deployment type, environment separation, and configuration that differs from development." },
      { name: "Public exposure", detail: "What is reachable on the public URL, including files, endpoints, and debug routes." },
      { name: "Object storage", detail: "Bucket permissions, upload validation, and public-by-default objects." },
      { name: "Input validation", detail: "Server-side validation on every write path." },
      { name: "Dependencies", detail: "Installed packages, known CVEs, and version pinning for reproducible builds." },
      { name: "Performance", detail: "Cold starts, request-path work, and behaviour under concurrent load." },
      { name: "Scalability", detail: "The traffic the current setup carries, and what has to move when it does not." },
      { name: "Observability", detail: "Logging and error tracking that outlive a single container." },
      { name: "Portability", detail: "What is tied to the platform, and the work required to run this elsewhere." },
      { name: "Production readiness", detail: "Monitoring, alerting, rollback, and operational ownership after launch." },
    ],
  },
];

export const AUDIT_PAGE_MAP = Object.fromEntries(
  AUDIT_PAGES.map((page) => [page.path, page]),
);
