/**
 * The four service detail pages under /services/[slug].
 *
 * One record per service, rendered by a single route so the four pages cannot
 * drift apart in layout the way the kit's duplicated detail pages did.
 *
 * `price` is present only where vibecop.io states one. The architecture and
 * security reviews are scoped per engagement on the live site, so they carry
 * no figure rather than an invented one.
 */
export const SERVICE_PAGES = [
  {
    slug: "architecture-audit",
    title: "Architecture Audit",
    navLabel: "Architecture Audit",
    includedTitle: "What’s included in an Architecture Audit",
    lede: "A full review of your system design, data flows, and structural weaknesses identified before they become expensive to fix.",
    summary:
      "The shape of a system decides what it can survive. We map service boundaries, data flow, and coupling as they actually are, then say plainly which of them hold at ten times the current load while changing them is still cheap.",
    price: null,
    priceNote: "Scoped on application",
    included: [
      "Service boundaries, data ownership, and coupling mapped as they actually are",
      "Automated analysis across the codebase and infrastructure config",
      "Senior engineer verification of every finding, with false positives cut",
      "Architecture risk mapping with business impact assigned to each issue",
      "Prioritized fix roadmap, sequenced and walked through live",
    ],
    /* What senior review keeps finding, drawn from Vibecop's published sample report. */
    findingsTitle: "Where Structure Fails",
    findingsLede:
      "The structural problems that survive automated scanning, because spotting them takes architectural judgment rather than a rule.",
    findings: [
      {
        icon: "fa-sitemap",
        title: "Premature service splits",
        body: "Codebases split into services with no clear domain ownership or bounded contexts, calling each other in tight synchronous chains. Deployment complexity with none of the scaling benefits.",
      },
      {
        icon: "fa-database",
        title: "Query patterns that collapse under load",
        body: "One query per item on a core endpoint means 51 database round-trips per request at 50 items a page and 14-second responses at 200 concurrent users.",
      },
      {
        icon: "fa-hourglass-half",
        title: "Synchronous work on the request path",
        body: "Email, PDF generation, webhook delivery, and third-party calls inside request handlers. No queue, no retries, no backpressure so failure rate rises non-linearly under load.",
      },
      {
        icon: "fa-share-nodes",
        title: "Services sharing one database",
        body: "Services that own no data of their own, reaching into the same tables. The split looks like separation on the diagram; the coupling underneath is unchanged, and a single failure cascades across the request chain.",
      },
      {
        icon: "fa-arrows-up-to-line",
        title: "Load boundaries assumed, never proven",
        body: "A design that carries the first hundred users with no evidence it carries ten thousand. The limit is assumed at build time and discovered in production.",
      },
      {
        icon: "fa-crosshairs",
        title: "Effort aimed at the wrong layer",
        body: "Caching bolted on where indexing was missing. We find the layer the bottleneck actually lives in, so the work lands where it changes something one review traced the whole problem to a single service.",
      },
    ],
    scopeTitle: "Stacks We Review",
    scope: [
      "JavaScript/TypeScript, Node.js, React, Next.js.",
      "Ruby on Rails, Python.",
      "Cloud infrastructure and containerized environments.",
      "Monoliths, modular monoliths, and service-oriented systems alike.",
    ],
    steps: [
      { title: "Map", body: "We chart the system as built boundaries, dependencies, and data paths before deciding where to look hardest." },
      { title: "Stress", body: "Structure and data access analysed at machine speed, then senior review of everything that survives the first pass." },
      { title: "Sequence", body: "An architecture risk map ordered so the fixes unblock each other instead of competing for the same sprint." },
    ],
  },

  {
    slug: "security-audit",
    title: "Security Audit",
    navLabel: "Security Audit",
    includedTitle: "What’s included in a Security Audit",
    lede: "Threat surface mapping, auth hardening, and access control AI-powered analysis, verified by senior engineers.",
    summary:
      "Exposed endpoints, misconfigured auth, unencrypted data. These are architecture-level vulnerabilities and they need human judgment to prioritize, validate, and act on. This is not penetration testing it is security validation in the context of how your product is actually built.",
    price: null,
    priceNote: "Scoped on application",
    included: [
      "Threat surface mapping across your application and infrastructure",
      "Authentication, authorization, and access-level review",
      "Secrets management audit storage, exposure and rotation",
      "Dependency and CVE exposure assessment",
      "OWASP Top 10 validation and CORS/CSP policy review",
      "Findings ranked by exploitability and business impact, not CVSS in isolation",
    ],
    findingsTitle: "Where Attackers Get In",
    findingsLede:
      "Every finding below comes from Vibecop's published sample report real classes of issue, not hypotheticals.",
    findings: [
      {
        icon: "fa-key",
        title: "Secrets without rotation",
        body: "JWT signing secrets hardcoded in .env files with no rotation mechanism. A single leaked secret compromises every active session, permanently.",
      },
      {
        icon: "fa-users-slash",
        title: "Missing tenant isolation",
        body: "Queries relying entirely on application-level filtering, with no row-level security at the database layer. One bug in any query can expose all tenant data.",
      },
      {
        icon: "fa-gauge-high",
        title: "Unprotected auth endpoints",
        body: "Login, password reset, and OTP verification with no rate limiting or lockout. Brute force and credential stuffing become trivial, and timing differences enable account enumeration.",
      },
      {
        icon: "fa-box-open",
        title: "Vulnerable dependencies",
        body: "Dependency audits surfacing packages last updated 18+ months ago, including some with publicly disclosed CVEs and the judgment to say which of them actually matters.",
      },
      {
        icon: "fa-door-open",
        title: "Unguarded admin routes",
        body: "Administrative routes reachable with no authentication guard middleware, and role checks that never reach the handler level. The interface hides the door; the route still opens.",
      },
      {
        icon: "fa-file-shield",
        title: "Compliance gaps",
        body: "GDPR, SOC2, and HIPAA gaps that surface in investor due diligence or worse, in a real incident. Predictable. Preventable.",
      },
    ],
    scopeTitle: "How We Work",
    scope: [
      "Private repositories and sensitive production systems, under secure review workflows.",
      "NDA-friendly processes.",
      "Security validation and production readiness not just penetration testing.",
      "Every finding validated by a senior engineer before it reaches you.",
    ],
    steps: [
      { title: "Access", body: "Repository and infrastructure access, under a secure review workflow and an NDA if you need one." },
      { title: "Probe", body: "Automated scanning across your stack, then senior engineer validation to separate exploitable risk from noise." },
      { title: "Report", body: "A prioritized remediation report with specific fixes, ordered by exploitability and business impact." },
    ],
  },

  {
    slug: "ai-built-product-review",
    title: "AI-Built Product Review",
    navLabel: "AI-Built Product Review",
    includedTitle: "What’s included in an AI-Built Product Review",
    lede: "Designed for products built with Cursor, Claude Code, Lovable, Bolt, and Copilot. We find what the AI didn’t catch.",
    summary:
      "AI generates code fast. It doesn’t own the consequences. This review is scoped for products that were built quickly with AI coding tools it looks for the decisions nobody made deliberately, across security, architecture, scalability, deployment, and maintainability, before real users arrive.",
    price: null,
    priceNote: "Scoped on application",
    included: [
      "Review scoped to how the product was actually built, tool by tool",
      "Security, architecture, scalability, deployment, and maintainability assessed together",
      "Backend enforcement checked against what the interface merely appears to protect",
      "Secrets, API keys, and environment variable handling audited",
      "Recovery objectives documented and restore paths actually exercised",
      "Prioritized roadmap of what to fix before onboarding real users",
    ],
    findingsTitle: "What the AI Didn’t Catch",
    findingsLede:
      "Six questions from our readiness scorecard, and what the answers usually reveal about a codebase written at prompt speed.",
    findings: [
      {
        icon: "fa-diagram-project",
        title: "Prompt-shaped layering",
        body: "Whether frontend, backend, database, and third-party services are cleanly separated or whether each feature was generated end to end, so every layer reaches straight into the next.",
      },
      {
        icon: "fa-table-columns",
        title: "A data model nobody designed",
        body: "Schema and relationships produced one feature at a time, with no point at which anyone sat down and designed the data as a whole. It holds until the first query that crosses two of those features.",
      },
      {
        icon: "fa-layer-group",
        title: "Complexity that compounds",
        body: "AI-generated code accumulates invisible complexity that compounds silently with every new feature. Each addition works; the accumulation is what nobody is tracking.",
      },
      {
        icon: "fa-stopwatch",
        title: "Speed nobody measured",
        body: "No one can say which parts get slow as users grow, because the data access patterns were never chosen deliberately they were generated feature by feature and never compared.",
      },
      {
        icon: "fa-file-code",
        title: "Logic nobody wrote down",
        body: "Core business rules living only in generated code, with no documentation and no automated tests around the workflows that matter. A new developer cannot get productive in a few days.",
      },
      {
        icon: "fa-user-lock",
        title: "One developer who understands everything",
        body: "The person who ran the prompts is the only one who knows why anything is shaped the way it is. That is a dependency, and it only becomes visible when they are unavailable.",
      },
    ],
    scopeTitle: "Built With",
    scope: [
      "Cursor, Claude Code, Copilot.",
      "Lovable, Bolt, and other no-code and low-code builders.",
      "Mixed builds part AI, part internal team.",
      "Vibe-coded and fast-built products of any stack we review.",
    ],
    steps: [
      { title: "Intake", body: "You tell us which tools built it and how much of it you wrote yourself. That shapes where we look first." },
      { title: "Score", body: "The product is scored across security, architecture, scalability, deployment, and maintainability." },
      { title: "Prioritize", body: "A readiness picture across all five areas, ordered by what has to be true before real users arrive." },
    ],
  },

  {
    slug: "production-readiness",
    title: "Production Readiness",
    navLabel: "Production Readiness",
    includedTitle: "What’s included in the hardening sprint",
    lede: "Observability, incident response, deployment pipelines, and operational maturity assessed, scored, and prioritized.",
    summary:
      "No observability. No alerting. No runbooks. Your product looks ready. It isn't and you won't know until it matters. This review scores where you actually stand, and the hardening sprint closes the gaps.",
    price: "$6,000–$15,000",
    priceNote: "Productionisation & hardening sprint",
    included: [
      "Production readiness scored across observability, deployment, failover, and operational maturity",
      "Critical fix implementation",
      "Guardrail and rate-limit setup",
      "Observability stack deployment",
      "Alerting and incident runbooks",
      "CI/CD pipeline hardening and security patch application",
      "Load testing, validation, and production readiness sign-off",
    ],
    findingsTitle: "What We Assess",
    findingsLede:
      "The operational questions that decide whether a launch survives contact with real users.",
    findings: [
      {
        icon: "fa-eye-slash",
        title: "Nothing watching",
        body: "console.log() throughout, no centralized aggregation, no error tracking, and no alerting on failure conditions. Incidents stay invisible until users report them, and post-mortems become impossible.",
      },
      {
        icon: "fa-server",
        title: "No failover",
        body: "Single-region deployment, no read replicas or standby instance, no cross-region backup strategy. Any regional outage means complete unavailability, and SLA commitments are unachievable.",
      },
      {
        icon: "fa-book-open",
        title: "No incident runbooks",
        body: "Nothing written down for the moment it breaks. MTTR is measured in hours rather than minutes, because every incident starts from scratch at the worst possible time.",
      },
      {
        icon: "fa-weight-hanging",
        title: "No load baseline",
        body: "Nobody has run the system at the volume it is about to meet. Capacity is a guess, and the first real spike becomes the test with customers watching it.",
      },
      {
        icon: "fa-code-branch",
        title: "No safe rollback",
        body: "Development, staging, and production sharing environments, no verified path back from a bad deploy, and no clear answer to who holds production access.",
      },
      {
        icon: "fa-cloud-arrow-down",
        title: "Untested recovery",
        body: "No documented recovery time objective and snapshots nobody has ever restored from. A backup that has never been exercised is an assumption, not a backup.",
      },
    ],
    scopeTitle: "What You Get",
    scope: [
      "A production readiness score across every assessed area.",
      "Sprint-by-sprint fix roadmap, ordered by business impact and dependency sequence.",
      "Observability, alerting, and runbooks in place not just recommended.",
      "Production readiness sign-off from a senior engineer.",
    ],
    steps: [
      { title: "Assess", body: "We score observability, deployment, incident response, and operational maturity as they stand today." },
      { title: "Harden", body: "Critical fixes, guardrails, observability, alerting, and CI/CD hardening implemented against the roadmap." },
      { title: "Sign off", body: "Load testing and validation, then production readiness sign-off from the engineer who did the work." },
    ],
  },

  {
    slug: "cto-advisory",
    title: "CTO Advisory for Founders",
    navLabel: "CTO Advisory",
    includedTitle: "What’s included in CTO Advisory",
    lede: "Senior engineering judgment on demand. Make the right architecture decisions without the cost of a full-time CTO hire.",
    summary:
      "Most expensive technical mistakes are decisions, not bugs made early, under pressure, without anyone senior in the room. This is that person, available when the decision is in front of you: no jargon walls, clear priorities, and answers you can act on immediately.",
    price: null,
    priceNote: "Scoped on application",
    included: [
      "A senior engineer in the room for the call you are about to make",
      "Implementation guidance and architecture oversight after an audit",
      "Technical review before investor demos, partnerships, or acquisitions",
      "A second opinion on build-versus-rebuild and platform choices",
      "Hands-on engineering support where a decision needs proving out",
      "Founder-grade communication clear priorities, no jargon walls",
    ],
    findingsTitle: "When Founders Call Us In",
    findingsLede:
      "Most outages, security gaps, and scaling failures show warning signs long before production incidents happen.",
    findings: [
      {
        icon: "fa-chart-line",
        title: "Before investor demos",
        body: "Founders want confidence that scaling risks and technical debt won\u2019t surface during growth conversations.",
      },
      {
        icon: "fa-handshake",
        title: "Before enterprise onboarding",
        body: "Enterprise customers expose architecture, observability, security, and operational weaknesses quickly. Better to find them first.",
      },
      {
        icon: "fa-money-bill-trend-up",
        title: "Before scaling infrastructure costs",
        body: "Poor architecture decisions compound silently as traffic, deployments, and dependencies grow.",
      },
      {
        icon: "fa-rotate-left",
        title: "Before rebuilding becomes necessary",
        body: "Many startups rebuild too early because foundational decisions were never validated properly. One founder was about to rebuild on microservices; the bottleneck turned out to be a single service, and the audit saved six months and $200K in salaries.",
      },
      {
        icon: "fa-gauge-simple-high",
        title: "Before technical debt slows velocity",
        body: "Shipping gets slower for reasons nobody can name. A second opinion finds the structural cause rather than treating the symptom sprint after sprint.",
      },
      {
        icon: "fa-shield-halved",
        title: "Before incidents damage trust",
        body: "Architectural flaws surface under pressure. Senior engineering judgment applied before that pressure arrives \u2014 not after.",
      },
    ],
    scopeTitle: "Who You’re Talking To",
    scope: [
      "Eight years of production engineering experience.",
      "Experience across AI-native platforms, SaaS systems, marketplaces, and cloud infrastructure.",
      "Patterns that only emerge at scale seen before, not theorised.",
      "Available as a standing arrangement alongside Continuous Assurance.",
    ],
    steps: [
      { title: "Brief", body: "You bring the decision, the constraints, and what you already know." },
      { title: "Assess", body: "We look at the system as it is, not as the diagram says it is, and weigh the options against it." },
      { title: "Decide", body: "A clear recommendation with the trade-offs stated plainly, and support through execution if you want it." },
    ],
  },

  {
    slug: "continuous-assurance",
    title: "Continuous Assurance",
    navLabel: "Continuous Assurance",
    includedTitle: "What’s included in Continuous Assurance",
    lede: "Continuous senior review of architecture decisions, codebase health, and security posture as your product evolves.",
    summary:
      "An audit is a snapshot. Products change every week new features, new dependencies, new agent behaviour. Vibecop can operate as an ongoing architecture and production assurance partner, so the review keeps pace with what you ship.",
    price: "From $750",
    priceNote: "per month",
    included: [
      "Monthly change impact review",
      "Agent behaviour evaluation",
      "Regression suite maintenance",
      "Performance drift monitoring",
      "Security posture check",
      "Architecture decision support",
      "Priority async access to a senior engineer",
    ],
    findingsTitle: "What We Watch",
    findingsLede:
      "The things that degrade gradually, where no single release is obviously to blame.",
    findings: [
      {
        icon: "fa-code-compare",
        title: "Change impact",
        body: "A monthly review of what shipped and what it moved structurally \u2014 so drift is caught in the release that caused it, not a year later.",
      },
      {
        icon: "fa-robot",
        title: "Agent behaviour",
        body: "Evaluation of LLM and agent workflows as prompts, models, and tools change underneath them, including output validation and fallback handling.",
      },
      {
        icon: "fa-vials",
        title: "Regression coverage",
        body: "Suite maintenance, so the checks keep pace with the product instead of quietly falling behind the features they were written for.",
      },
      {
        icon: "fa-arrow-trend-down",
        title: "Performance drift",
        body: "Monitoring for the slow degradation that no single release explains \u2014 the kind that only becomes visible once it is already a problem.",
      },
      {
        icon: "fa-lock",
        title: "Posture over time",
        body: "Recurring checks on secrets handling, access levels, and dependency exposure as the surface area of the product grows.",
      },
      {
        icon: "fa-compass-drafting",
        title: "Decision support",
        body: "Priority async access to a senior engineer for the calls in front of you, before they compound into something structural.",
      },
    ],
    scopeTitle: "Who It's For",
    scope: [
      "Teams shipping continuously who need architecture decisions reviewed as they are made.",
      "Founders who want CTO-level oversight without a full-time hire.",
      "Products running LLM or agent workflows that change under them.",
      "Companies that have had an audit and want the findings to stay closed.",
    ],
    steps: [
      { title: "Baseline", body: "We start from a current picture of architecture, codebase health, and security posture." },
      { title: "Review", body: "Monthly change impact review, agent evaluation, and posture checks against that baseline." },
      { title: "Advise", body: "Priority async access to a senior engineer for the architecture decisions in front of you." },
    ],
  },
];

/** Slug → record, for the route's lookup. */
export const SERVICE_PAGE_MAP = Object.fromEntries(
  SERVICE_PAGES.map((service) => [service.slug, service])
);
