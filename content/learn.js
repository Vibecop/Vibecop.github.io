/**
 * The glossary at /learn.
 *
 * These are explainers, not service pages. Where a term has a commercial
 * counterpart under /audits or at the site root, the record points at it with
 * `service` and the two link to each other: the explainer answers "what is
 * this and why does it matter", the service page answers "what would you
 * check and what does it cost". Keeping that split explicit is what stops the
 * two sets competing for the same query.
 *
 * `definition` is written to stand alone when quoted. `sections` is the body.
 */
export const LEARN_PAGES = [
  {
    slug: "ai-software-audit",
    term: "AI Software Audit",
    title: "What Is an AI Software Audit? | Vibecop Learn",
    question: "What is an AI software audit?",
    definition:
      "An AI software audit is an independent technical review of an application built partly or entirely with AI coding tools. It examines the codebase, architecture, security, data layer, infrastructure and operational readiness of the system, verifies the findings by hand, and returns them ranked by real business risk. It exists because AI tools produce working software far faster than any team can review it.",
    keyPoints: [
      "It reviews software whose code was largely written by an AI tool rather than by the team shipping it.",
      "It covers the whole system (architecture, security, data, infrastructure, operations), not just the source files.",
      "It is independent: the reviewer did not build the thing and has no stake in it being fine.",
      "Findings are verified by a human before delivery, because unverified scanner output is not an audit.",
      "The output is a prioritized remediation plan, not a list of everything technically imperfect.",
    ],
    service: "/ai-software-audit",
    serviceLabel: "See what an AI software audit checks",
    sections: [
      {
        heading: "Why AI-built software needs auditing specifically",
        body: [
          "Every codebase benefits from review. AI-built codebases need it for a structural reason: the volume of code being produced has decoupled from the volume of code being read. A founder working with an AI coding agent can generate in a weekend what a small team would have written in a quarter, and the review capacity has not scaled to match. The result is not bad code exactly. It is unreviewed code, which is a different and more dangerous category.",
          "Unreviewed code accumulates decisions nobody made. The tool picked a session strategy, chose whether to enforce permissions at the database or in the application, decided how to store uploaded files, selected a set of dependencies, and made a hundred smaller calls along the way. Each of those is defensible in isolation. Collectively they form an architecture that no human designed and that nobody can currently describe.",
          "This is what an audit is for. Not to catch typos, which compilers do, but to surface the decisions that were made by default and say which of them will hold.",
        ],
      },
      {
        heading: "What the audit actually covers",
        body: [
          "A complete AI software audit spans seven areas. Architecture: service boundaries, data ownership, coupling, and whether the structure survives the next three features. Security: authentication, authorization, secrets, injection paths, and dependency exposure. Data: schema design, constraints, indexes, migrations, and tenant isolation enforced at the database rather than by an application filter.",
          "Then: infrastructure, covering hosting, networking, IAM, environment separation and backups; integrations, covering third-party wiring, webhook verification and failure handling; operations, covering logging, monitoring, alerting, deployment and rollback; and where relevant, AI and LLM risk, covering prompt injection, tool permissions and model spend.",
          "An audit that only reads source files misses most of what actually breaks. The failure that takes a product down is rarely a bad function. It is a missing index, an unrotatable secret, a permission check that was never written, or a deploy that cannot be reversed.",
        ],
      },
      {
        heading: "How it differs from a penetration test",
        body: [
          "A penetration test attacks a running system from the outside and reports what an attacker could reach in the time available. It is empirical and adversarial, and it is excellent at proving a specific exposure exists. It is also bounded by what the tester happened to find in a fixed window, and it says nothing about the parts of the system that were not on the target list.",
          "An audit reads the source. It sees every endpoint, including the ones the UI does not link to, and every table, including the ones with no policy on them. It finds the vulnerability class rather than the single instance an attacker stumbled onto. What it cannot do is prove exploitability in a live environment the way a pen test can.",
          "The two are complementary, and the sequence matters. Auditing first is usually cheaper: it is wasteful to pay for a penetration test of an architecture that will be restructured next month.",
        ],
      },
      {
        heading: "How it differs from a code review",
        body: [
          "A conventional code review checks a change against the intentions of the team that made it. It assumes a shared design, established conventions, and a reviewer who already knows the system. It operates at the granularity of a pull request.",
          "An audit assumes none of that. There may be no shared design, the conventions may differ between sessions with the AI tool, and the reviewer is deliberately new to the system. It operates at the granularity of the whole product, and its central question is not 'is this change correct' but 'is this system safe to run'.",
          "This distinction is why an internal review often misses what an audit finds. The people who prompted the code into existence have the same mental model of it as the tool did, including the same blind spots.",
        ],
      },
      {
        heading: "When to run one",
        body: [
          "Three moments force the question, and they are the same for almost every company. Before taking real user data, because the cost of a breach rises with every record. Before an enterprise customer runs their own security review, because failing theirs is a lost deal and a public one. Before technical diligence in a funding round, because a diligence report that finds structural problems changes terms.",
          "There is also a quieter fourth: the point at which the team can no longer confidently answer questions about their own system. That is a reliable signal that the codebase has outgrown the understanding of the people responsible for it, and it usually arrives earlier than anyone expects.",
          "Auditing early is cheaper by a wide margin. A structural problem found before launch is a week of work. The same problem found after a year of features have been built on top of it is a rewrite, and the rewrite happens under time pressure.",
        ],
      },
      {
        heading: "What a good audit produces",
        body: [
          "A finding without a fix is a complaint. Every item in a useful audit report carries four things: what is wrong, where it is, what happens if it is not fixed, and what fixing it involves. Without the fourth, the report cannot be planned against and will not be actioned.",
          "Prioritization is the other half. A raw scanner produces hundreds of findings, most of which do not matter, and a report that does not distinguish between them shifts the burden of triage onto the team least equipped to carry it. A critical CVE in an unreachable code path ranks below a missing authorization check on a billing endpoint, and a report that cannot make that call has not done the work.",
          "The best signal of a real audit is that it tells you what not to fix. Anyone can produce a list of everything imperfect. Judgment is knowing which ten of two hundred items are the ones that will actually hurt you.",
        ],
      },
    ],
  },

  {
    slug: "ai-code-audit",
    term: "AI Code Audit",
    title: "What Is an AI Code Audit? | Vibecop Learn",
    question: "What is an AI code audit?",
    definition:
      "An AI code audit is a line-level review of source code written by AI coding assistants, checking correctness, error handling, validation, concurrency, duplication and consistency. It differs from a general code review in what it looks for: AI-generated code fails in characteristic ways that differ from the ways human-written code fails, and those patterns are what the audit targets.",
    keyPoints: [
      "It is line-level: the source itself, rather than the surrounding architecture and infrastructure.",
      "AI-generated code has its own failure signature, distinct from human error patterns.",
      "The most common defects are plausible-looking code that is wrong in a specific, non-obvious case.",
      "Duplication and pattern drift accumulate across sessions because context does not persist between them.",
      "Generated tests frequently assert the implementation rather than the intended behaviour.",
    ],
    service: "/ai-code-audit",
    serviceLabel: "See what an AI code audit checks",
    sections: [
      {
        heading: "How AI-generated code fails differently",
        body: [
          "Human bugs cluster around fatigue, haste and misunderstanding. They tend to look wrong: a variable named badly, a branch that clearly was not thought through, a function that grew past the point of comprehension. Reviewers are calibrated for this. Ugly code triggers attention.",
          "AI-generated code fails while looking correct. It is well-formatted, sensibly named, plausibly structured, and often carries a confident comment explaining what it does. The defect sits underneath that surface: a boundary condition the model did not consider, an assumption about the shape of the data that held in the example it learned from, an error path that logs and continues where it should stop.",
          "This is the central difficulty. The visual cues reviewers rely on to allocate attention are absent, so a reviewer reading generated code at normal speed will miss things they would have caught in a colleague's pull request.",
        ],
      },
      {
        heading: "The defect classes that recur",
        body: [
          "Swallowed errors are the most common. A generated try/catch logs the exception and continues, so a failed write returns success to the caller and the data loss is discovered later, by a customer. Closely related: functions that return a default value on error, making the failure indistinguishable from a legitimate empty result.",
          "Validation gaps come next. Client-side validation is generated reliably because it is visible in the interface; server-side validation is generated only when asked for, because nothing in the running app reveals its absence. The same asymmetry explains why authentication is usually present and authorization frequently is not.",
          "Then concurrency. Generated code assumes a single user unless told otherwise: read-modify-write sequences with no transaction, counters incremented without atomicity, and state held in a module-level variable that breaks silently the moment a second process starts.",
        ],
      },
      {
        heading: "Duplication and pattern drift",
        body: [
          "An AI tool works from the context it has. Across many sessions, that context differs each time, and the result is the same capability implemented more than once in slightly different ways. Three date formatters. Two validation helpers. Four ways of calling the same API, each with its own error handling.",
          "Duplication is not merely untidy. Each copy drifts independently: a bug fixed in one is not fixed in the others, and a security patch applied to one validation path leaves the other three open. The audit finds these clusters and identifies which copy is actually reachable, which is often the surprising part.",
          "Dead code has the same origin. A later prompt solves a problem differently, and the earlier attempt remains in the tree, sometimes still routed, sometimes still exposed on a URL nobody remembers.",
        ],
      },
      {
        heading: "Types, contracts and false confidence",
        body: [
          "In typed codebases, generated code frequently reaches for the escape hatch. An `any`, a type assertion, or a suppression comment resolves a compiler complaint without resolving what the compiler was complaining about. The build goes green and the type system stops providing the guarantee it was adopted for.",
          "API contracts drift the same way. The client is generated against one shape of the response, the server later returns another, and nothing in between checks. Because both sides were plausible when written, the mismatch surfaces only against real data.",
          "An audit reads types as claims and checks whether the code honours them. A codebase with heavy suppression is not type-safe; it is a codebase carrying the cost of types without the benefit.",
        ],
      },
      {
        heading: "Tests that do not test anything",
        body: [
          "AI tools generate tests readily, and the tests pass. This is less reassuring than it appears, because a test written from the implementation rather than from the requirement asserts that the code does what the code does. It will pass whether the behaviour is right or wrong, and it will keep passing through a refactor that breaks the feature.",
          "A useful check is to ask whether a test would fail if the feature were deleted. A surprising proportion of generated test suites contain cases that would not: mocks so thorough that the code under test never runs, assertions on the shape of a response rather than its content, and setup that quietly stubs the thing being verified.",
          "Coverage percentage is worse than useless here, because it measures lines executed rather than behaviour verified. An audit reads the tests that guard the paths that take money or delete data, and reports whether those specific tests would catch a regression.",
        ],
      },
      {
        heading: "What to do about it",
        body: [
          "The practical answer is not to stop using AI tools. It is to close the loop that AI tools open: code is being written faster than it is being read, so reading has to be made deliberate rather than incidental.",
          "That means treating generated code as code from an unfamiliar contributor: reviewed on merit, not on the confidence of its presentation. It means writing the tests yourself for anything that handles money, permissions or personal data, from the requirement rather than from the code. And it means an independent read of the whole codebase at intervals, because per-change review does not surface duplication and drift that only exist at the level of the whole.",
        ],
      },
    ],
  },

  {
    slug: "vibe-coding-audit",
    term: "Vibe Coding Audit",
    title: "What Is a Vibe Coding Audit? | Vibecop Learn",
    question: "What is a vibe coding audit?",
    definition:
      "A vibe coding audit is an independent technical review of software built by describing what you want to an AI tool rather than writing the code yourself. Its working assumption is that no senior engineer has read the result, because that is what vibe coding means in practice. It checks the decisions nobody made: the defaults the tool chose, the permissions it granted, and the experiments it abandoned.",
    keyPoints: [
      "Vibe coding means directing an AI tool by intent and accepting the code it produces without reading it closely.",
      "It is genuinely effective for prototypes and increasingly for real products.",
      "The risk is not code quality in the abstract; it is the accumulation of unexamined defaults.",
      "Security defaults and authorization are where the gap between working and safe is widest.",
      "The audit reads the whole system, because the problems live between the files rather than inside them.",
    ],
    service: "/vibe-code-audit",
    serviceLabel: "See what a vibe code audit checks",
    sections: [
      {
        heading: "What vibe coding actually is",
        body: [
          "Vibe coding describes building software by conversation: you state what you want, an AI tool produces it, you look at the result in the browser, and you iterate on the description rather than on the code. The term was coined half-jokingly and has stuck because it names something real. A large and growing share of new software is now built this way.",
          "It is not a lesser way to build. For prototypes it is dramatically faster, and for a broad class of internal tools and small products the output is entirely adequate. The point is not that vibe-coded software is bad. It is that vibe-coded software is unexamined, and unexamined software has a specific risk profile that is worth understanding before it takes real users.",
          "The defining property is that the running application is the only artefact anyone has inspected. If it looks right and behaves right in the browser, it is accepted. Everything not visible in the browser (permissions, indexes, secrets, error paths, the second concurrent user) has been accepted implicitly.",
        ],
      },
      {
        heading: "Why 'it works' and 'it is safe' diverge",
        body: [
          "An application demonstrates its features. It does not demonstrate its access control. A login screen that works proves authentication functions; it proves nothing about whether the endpoint behind it checks that the requester owns the record they asked for. In the browser, those two situations are indistinguishable, because your own session always has permission.",
          "The same asymmetry runs through everything invisible. A page that loads in 200 milliseconds with twelve test rows tells you nothing about the query at fifty thousand rows. An upload that succeeds tells you nothing about whether the bucket is publicly readable. A form that rejects bad input in the browser tells you nothing about the API accepting it directly.",
          "This is the structural reason vibe-coded applications need review rather than more testing. Testing verifies what you thought to check. The audit looks for the categories you did not know were categories.",
        ],
      },
      {
        heading: "What accumulates over a build",
        body: [
          "Abandoned attempts are the first layer. Over dozens of sessions the tool solves the same problem several ways, and earlier solutions remain in the tree. Some are dead. Some are still routed and still reachable, occasionally with the permission checks of an earlier, laxer design.",
          "Then generated infrastructure: tables created for a feature that was cut, storage buckets with default policies, environment variables holding keys from a service no longer used, background jobs still scheduled. None of it appears in the interface, so none of it gets reviewed.",
          "And finally pattern drift. Because each session begins with different context, the same job gets done differently each time, and the codebase ends with no single convention for anything. This matters most when a human finally has to change something, which is the moment the accumulated inconsistency stops being invisible and starts being expensive.",
        ],
      },
      {
        heading: "The three places it goes wrong first",
        body: [
          "Authorization, almost always. AI tools generate correct authentication far more reliably than correct authorization, so the door is locked and the rooms inside are not. In practice this means endpoints that verify a valid session and then fetch whatever record id was requested.",
          "Database access rules, particularly where the frontend talks to the database directly through a public client key. That architecture is fine when row-level policies are correct and complete, and catastrophic when they are absent. Their absence is invisible from inside the app, because the developer's own session passes every check.",
          "Secrets, third. Keys committed during rapid iteration, keys bundled into the client because the generated code called a service from the browser, and keys shared across development and production because nothing forced a separation. The common thread is that none of the three is visible in a working application.",
        ],
      },
      {
        heading: "What the audit does about it",
        body: [
          "It starts from the code rather than from a description, because a description of a vibe-coded system is a description of what someone asked for, not what exists. The first output is a map: every route, table, job, bucket and third-party integration actually present.",
          "It then tests from outside the interface, by calling APIs directly, querying the database with the public key, and requesting objects belonging to other accounts. That is where the difference between working and safe becomes visible. Everything found is reproduced by hand before it appears in a report.",
          "Finally it ranks. A vibe-coded codebase will produce a long list of imperfections, and a list is not useful. The deliverable is a short sequence of things that will actually hurt, ordered so the fixes unblock each other.",
        ],
      },
      {
        heading: "Auditing does not mean stopping",
        body: [
          "The reasonable conclusion is not to abandon AI tools and write everything by hand. The speed is real and the advantage is real. The conclusion is that the review step which used to happen automatically, because a human wrote every line and another human read it, now has to be scheduled deliberately.",
          "For most teams that means a checkpoint before each of the moments that expose the codebase to someone else: first real users, first enterprise customer, first diligence process. Between those, continued vibe coding is fine.",
          "The failure mode to avoid is discovering the structural problems at the same time as the deadline that made them urgent. Audits are cheap in advance and expensive under pressure, and the work is identical either way.",
        ],
      },
    ],
  },

  {
    slug: "ai-generated-code-security",
    term: "AI-Generated Code Security",
    title: "AI-Generated Code Security: What Actually Goes Wrong | Vibecop Learn",
    question: "How secure is AI-generated code?",
    definition:
      "AI-generated code is secure in the ways that are visible and insecure in the ways that are not. Coding models reliably produce authentication, input forms and HTTPS calls, because those appear in the running application. They unreliably produce authorization, tenant isolation, rate limiting and secret rotation, because nothing in a working app reveals their absence. That asymmetry, rather than raw code quality, is the core security problem.",
    keyPoints: [
      "The failure pattern is systematic, not random: what is invisible in a working app is what gets omitted.",
      "Authorization is the single most common gap: authentication is generated, permission checks often are not.",
      "Multi-tenant data separation enforced only in application code will eventually leak.",
      "Secrets get committed, bundled into clients, and shared across environments during fast iteration.",
      "Dependency choices reflect training data, which skews toward older and more popular packages.",
    ],
    service: "/ai-security-audit",
    serviceLabel: "See what an AI security audit checks",
    sections: [
      {
        heading: "The visibility asymmetry",
        body: [
          "A coding model optimises, in effect, for producing something that works when you look at it. That is what its feedback loop rewards, and it is why generated applications so often run correctly on the first attempt. The consequence is that every security control which does not change what you see in the browser is a control the model has no pressure to include.",
          "Authentication changes what you see: without it there is no login screen. Authorization does not, because the developer testing the app is always logged in as someone with access to the records they are looking at. Input validation on the client changes what you see; the same validation on the server does not. Rate limiting is invisible until someone attacks you. Secret rotation is invisible forever.",
          "Understanding this asymmetry lets you predict, before reading a line, roughly where a generated codebase will be weak. In practice the prediction holds with uncomfortable reliability.",
        ],
      },
      {
        heading: "Broken object-level authorization",
        body: [
          "The most common serious finding in AI-built applications is an endpoint that verifies a valid session and then acts on whatever identifier it was given, without checking that the session owns that object. Request your own invoice and it works. Change the number in the URL and you get someone else's.",
          "This class of bug is well known and not specific to AI; it sits at the top of the OWASP API list. What is specific to AI is the frequency, and the reason: the check is invisible from inside the app, so nothing during development creates pressure to write it.",
          "It compounds where the frontend calls the database directly. In that architecture the permission check is a database policy, and a missing policy is a table anyone with the public key can read in full. The application looks identical either way.",
        ],
      },
      {
        heading: "Multi-tenant isolation",
        body: [
          "Products serving multiple customers must guarantee that one customer's queries cannot reach another's rows. Generated code typically implements this as a filter in the application layer: every query includes a tenant identifier. That works exactly as long as every query includes it.",
          "The problem is that this is a guarantee maintained by discipline across an entire codebase, forever, including in code written next month by a tool with different context. One query missing the clause is a cross-tenant leak, and there is nothing structural to prevent it.",
          "Enforcing isolation at the database, using row-level security policies that apply regardless of what the query asks for, converts a discipline problem into a structural one. This is one of the few security changes that is dramatically cheaper before launch than after, because retrofitting policies onto a schema in production means auditing every existing query against them.",
        ],
      },
      {
        heading: "Secrets",
        body: [
          "Three patterns recur. Keys committed to the repository during iteration, then removed in a later commit but still present in history. Keys bundled into the client because generated code called a third-party API from the browser, making them readable by anyone who opens developer tools. And a single set of keys used across development, staging and production, so a leak from a laptop is a production compromise.",
          "Underlying all three is that nothing can be rotated. Rotation requires knowing where a key is used, having a way to issue a new one without downtime, and having a place to put it that is not the code. Generated applications usually have none of that, which turns a small exposure into a permanent one.",
          "The fix is unglamorous and cheap: a secret manager, distinct credentials per environment, and one rehearsal of the rotation procedure before you need it.",
        ],
      },
      {
        heading: "Dependencies",
        body: [
          "Models suggest packages that were common in their training data. That skews toward popular libraries, which is often good, and toward versions that are no longer current, which is not. Generated projects routinely arrive with pinned versions a year or more behind, some carrying published vulnerabilities.",
          "There is also volume. Where a human might write ten lines, a tool will often add a dependency, and each dependency brings its own transitive tree. The result is a large attack surface assembled without anyone deciding to assemble it.",
          "The mitigation is ordinary supply chain hygiene: automated dependency updates, a lockfile, and periodic review of what is actually imported. But it has to be turned on deliberately, because nothing about a working application signals that it is missing.",
        ],
      },
      {
        heading: "What this means in practice",
        body: [
          "None of this argues against using AI to write code. It argues that the security review which used to be distributed across many humans reading many pull requests now has to happen as a distinct step, because that distribution no longer exists.",
          "The practical minimum before taking real user data: enforce authorization on every endpoint and verify it by calling the API directly rather than through the interface; move tenant isolation into the database; get secrets out of the repository and into a manager with per-environment values; put rate limiting on anything that authenticates, sends mail, or costs money; and update your dependencies.",
          "Those five cover the large majority of what independent reviews of AI-built applications actually find. They are not exotic. They are simply invisible from inside a working app, which is exactly why they get skipped.",
        ],
      },
    ],
  },

  {
    slug: "ai-production-readiness",
    term: "AI Production Readiness",
    title: "AI Production Readiness: What It Means and How to Check It | Vibecop Learn",
    question: "What does production ready mean for AI-built software?",
    definition:
      "Production readiness is the property of being operable by a real team under real load, not the property of working. A production-ready system can be deployed repeatably, reverted when a deploy is bad, restored when data is lost, observed when it misbehaves, and supported by someone who did not build it. AI tools produce working software readily and operable software rarely, because operability is invisible from inside the application.",
    keyPoints: [
      "Working and production-ready are different properties; AI tools optimise for the first.",
      "The core question is not whether it runs, but whether it can be recovered when it stops.",
      "Untested backups are not backups; a restore that has never been performed is a hypothesis.",
      "If nothing alerts you, your outage detection is your customers.",
      "Ownership is part of readiness: someone has to be able to change this who did not prompt it into existence.",
    ],
    service: "/ai-production-readiness-audit",
    serviceLabel: "See what a production readiness audit checks",
    sections: [
      {
        heading: "Working is not the same as ready",
        body: [
          "A working application does what it is supposed to when nothing has gone wrong. A production-ready application also does something sensible when something has. That second property is almost entirely invisible during development, because during development nothing has gone wrong in a way that matters.",
          "The gap shows up as a specific kind of surprise. The feature works, and then a deploy half-completes and leaves the schema ahead of the code. Or a third-party provider is slow rather than down, and requests pile up until the whole system stops responding. Or a customer reports data missing and there is no way to find out when it disappeared.",
          "None of these are bugs in the feature. They are the absence of the operational scaffolding that experienced teams build reflexively and that generated code does not include, because nothing in the running application requires it.",
        ],
      },
      {
        heading: "Deployment and rollback",
        body: [
          "The first question is whether a deploy is repeatable by someone else. If the build depends on a local environment, an undocumented step, or a person who knows which button to press, the system has a single point of failure that is not in the code.",
          "The second, and more important, is whether a deploy can be undone. Reverting application code is usually straightforward. Reverting a database migration frequently is not, particularly one that dropped a column or transformed data in place. A migration that cannot be reversed converts every deploy into a one-way door.",
          "The failure worth rehearsing is the partial one: a deploy that applied the migration and then failed to start the new code. Teams that have thought about this have a documented path back. Teams that have not discover it during their first bad deploy, at whatever hour it happens.",
        ],
      },
      {
        heading: "Backups that have been restored",
        body: [
          "Most projects have backups in the sense that a provider is taking snapshots. Fewer have ever restored one. The difference matters, because a restore exercises assumptions the backup does not: that the snapshot includes everything needed, that it can be loaded into a working system, that the process completes in an acceptable time, and that someone knows how to do it.",
          "Two numbers make the conversation concrete. How much data can you afford to lose, and how long can you afford to be down. Answer those, then check whether the current arrangement actually meets them. It frequently does not, and the discovery is much cheaper before an incident than during one.",
          "Uploaded files are the usual omission. Database backups get configured; object storage often does not, and a restored database pointing at missing files is a partially recovered system.",
        ],
      },
      {
        heading: "Observability",
        body: [
          "The practical test is simple: if the application started returning errors to a fraction of users right now, how would you find out? If the answer involves a customer emailing you, the system is not observable regardless of what logging exists.",
          "Three things are needed and they are cheap. Error tracking, so exceptions are aggregated somewhere a person looks rather than scrolling past in a console. Structured logs with enough context (request id, user id, timing) to reconstruct what happened. And at least one alert on something that indicates the system is unhealthy, routed to somebody specific.",
          "Alert quality matters more than alert quantity. A small number of alerts that always mean something is wrong will be acted on. A large number that fire routinely will be filtered into a folder nobody opens, which is functionally the same as having none.",
        ],
      },
      {
        heading: "Behaviour under load and failure",
        body: [
          "Performance in development is measured against a handful of rows and one user. Neither condition holds in production. The specific patterns worth checking are queries that scale with total rows rather than with the page being displayed, work happening inside a request handler that should be in a queue, and any operation whose cost grows with the number of items on screen.",
          "Failure behaviour deserves the same attention. When a third-party provider becomes slow rather than unavailable, does the system time out and degrade, or does it hold connections until it exhausts them? A degraded mode, with the feature unavailable but the product still up, is worth designing deliberately, because otherwise every dependency is a single point of failure for the whole system.",
          "This is also where cost surprises live. Anything that calls a paid API on behalf of users, including AI features, needs a spend limit that is enforced rather than monitored.",
        ],
      },
      {
        heading: "Ownership",
        body: [
          "The final readiness question is human. Someone has to be able to operate and change this system, including on a day when the person who built it is unavailable. If all of the understanding lives in a series of chat transcripts with an AI tool, that is not ownership.",
          "What is needed is modest: a short document describing what the system is made of and how to deploy it, a runbook for the three or four failures most likely in the first months, and at least one engineer who has read the code rather than prompted it.",
          "This is the part teams skip most often and regret most reliably, because it is the only item on the list that cannot be bought quickly during an incident.",
        ],
      },
    ],
  },

  {
    slug: "ai-agent-security",
    term: "AI Agent Security",
    title: "AI Agent Security: Threat Model and Controls | Vibecop Learn",
    question: "What are the security risks of running AI agents in production?",
    definition:
      "AI agent security concerns systems where a language model calls tools and takes actions rather than only producing text. The central risk is that the model's instructions and the data it processes travel in the same channel, so any content the agent reads can attempt to redirect what it does. Once an agent holds real permissions, that becomes an access-control problem rather than a content-quality problem.",
    keyPoints: [
      "An agent with tools is a program whose control flow is determined by untrusted text.",
      "Treat every tool permission as a permission the attacker may end up holding.",
      "Agents acting with a shared privileged identity can reach data the requesting user cannot.",
      "Model output rendered or executed downstream is an injection vector like any other input.",
      "Unbounded loops and unbounded spend are availability and cost risks, not just bugs.",
    ],
    service: "/ai-agent-audit",
    serviceLabel: "See what an AI agent audit checks",
    sections: [
      {
        heading: "Why agents are a different security problem",
        body: [
          "A chatbot that produces text has a bounded blast radius: the worst case is a bad answer. An agent that can query a database, send an email, call an internal API or write a file has the blast radius of those tools. The security question changes accordingly, from 'can it be made to say something bad' to 'can it be made to do something bad'.",
          "What makes this hard is that language models do not have a reliable separation between instructions and data. Everything arrives as text in the same window: your system prompt, the user's message, the contents of a document, the body of a web page, the output of a previous tool call. A model deciding what to do next is reasoning over all of it at once.",
          "This is not a bug that will be patched. It is a property of how the systems work today, and it means agent security has to be built around the assumption rather than waiting for it to be fixed.",
        ],
      },
      {
        heading: "Direct and indirect injection",
        body: [
          "Direct injection is a user typing instructions intended to override the system prompt. It is the widely known case, it is the less serious one, and it mostly matters when the user is trying to reach something they are not allowed to reach.",
          "Indirect injection is the real problem. The instructions are planted in content the agent reads on someone else's behalf: a support ticket, a resume, a web page, a code comment, a calendar invite, a row in a database. The user never sees them. The agent reads them as part of its task and acts on them.",
          "The severity follows directly from the tools. An agent that can only summarise is at risk of producing a wrong summary. An agent that can read a document and then send email is at risk of exfiltrating whatever it reads, on the instruction of the document itself.",
        ],
      },
      {
        heading: "Permissions and the confused deputy",
        body: [
          "The most consequential design decision is whose authority the agent acts with. If it holds a single privileged service credential, then any user who can influence its behaviour can potentially reach anything that credential can reach. This is the classic confused deputy, with a language model as the deputy.",
          "The alternative is to have the agent act with the permissions of the user it is serving, so the existing authorization system continues to apply. This is more work, and it is the difference between an injection producing a rude answer and an injection producing a data breach.",
          "Beyond identity, scope each tool as narrowly as the task allows. A support agent needs to read tickets for the current customer, not to run arbitrary queries. Read-only where possible, and a human confirmation step in front of anything irreversible: sending external messages, moving money, deleting records, changing permissions.",
        ],
      },
      {
        heading: "Output handling",
        body: [
          "Model output is untrusted input to whatever consumes it. Rendered as HTML without escaping, it is a cross-site scripting vector. Passed to a shell, an eval, or a query builder, it is a code or query injection vector. Written to a file path constructed from its content, it is a traversal vector.",
          "The mitigation is the same as for any untrusted input, applied at the point of use rather than at the point of generation: escape on render, parameterise queries, validate against a schema before acting, and never construct executable strings from model output.",
          "Structured output helps but is not sufficient on its own. A well-formed JSON object can still contain a malicious value, so the values need checking as well as the shape.",
        ],
      },
      {
        heading: "Loops, cost and availability",
        body: [
          "An agent that decides its own next step can fail to converge. Without a step limit, a recursion guard and a wall-clock timeout, a task that goes wrong does not stop. It runs, calling paid APIs, until something else breaks.",
          "Spend needs an enforced ceiling per user and in total, not a dashboard someone checks. The failure mode is not gradual: a loop discovered the next morning is a bill, and a loop discovered by an attacker deliberately is a denial-of-wallet attack.",
          "Retries need care too. If a tool has side effects (sending a message, charging a card, creating a record), then retrying a failed step without idempotency does the thing twice. Agents retry more than conventional code does, so this surfaces sooner.",
        ],
      },
      {
        heading: "Observability and evaluation",
        body: [
          "When an agent does something wrong, you need to be able to reconstruct why: the inputs, the context assembled, each tool call and its result, and the decision points. Without that trace, an incident is unexplainable, and an unexplainable incident cannot be prevented from recurring.",
          "Evaluation is the other half. Prompts and models change, and behaviour changes with them in ways that are not visible in a diff. A regression suite of realistic cases, including injection attempts, makes it possible to change the system deliberately rather than hopefully.",
          "Both are commonly missing in agent products built quickly, and both become urgent at exactly the moment they are most expensive to add.",
        ],
      },
    ],
  },

  {
    slug: "prompt-injection",
    term: "Prompt Injection",
    title: "What Is Prompt Injection? | Vibecop Learn",
    question: "What is prompt injection?",
    definition:
      "Prompt injection is an attack in which text processed by a language model is crafted to change what the model does, rather than merely what it says. It works because models receive instructions and data in the same channel with no reliable boundary between them, so any content an application feeds to a model (a document, a web page, a database row, a tool result) can carry instructions the model may follow.",
    keyPoints: [
      "It is not a bug in one model; it follows from instructions and data sharing one channel.",
      "Indirect injection, planted in content the model reads for someone else, is the serious variant.",
      "Severity is set by what the model can do, not by what it can be made to say.",
      "There is no known complete defence; the practical approach is to limit the consequences.",
      "Prompt-level mitigations reduce the rate of successful attacks but do not eliminate them.",
    ],
    service: "/ai-agent-audit",
    serviceLabel: "See how we review LLM and agent risk",
    sections: [
      {
        heading: "Why it works",
        body: [
          "A language model is given a single sequence of text and asked what comes next. Everything in that sequence has the same status: the developer's system prompt, the user's question, the contents of a retrieved document, the output of a tool the model called a moment ago. There is no field in the input that means 'this part is an instruction' and another that means 'this part is data to be processed'.",
          "Model providers train systems to prefer the developer's instructions and to be suspicious of instructions found inside content. This helps, and it raises the effort required, but it is a statistical preference rather than a boundary. Sufficiently confident, contextually plausible instructions inside data continue to succeed.",
          "The comparison with SQL injection is instructive up to a point. SQL injection was solved by parameterised queries, which separate code from data structurally. No equivalent separation exists for prompts, which is why the same fix is not available.",
        ],
      },
      {
        heading: "Direct injection",
        body: [
          "In direct injection the attacker is the user. They type something intended to override the application's instructions: asking the model to ignore prior directions, to reveal its system prompt, or to behave as a different assistant.",
          "This is the version most people have seen, and on its own it is usually the least damaging. If a user talks a support bot into being rude, the cost is embarrassment. It becomes serious when the model has access to something the user does not: other customers' data, internal documentation, or a tool that acts with more authority than the user holds.",
          "The useful framing is that direct injection is a privilege escalation risk exactly to the extent that the model is more privileged than the person talking to it.",
        ],
      },
      {
        heading: "Indirect injection",
        body: [
          "In indirect injection the instructions are not typed by the user at all. They are planted in content the application will later feed to the model on someone else's behalf, and the victim never sees them.",
          "The delivery mechanisms are ordinary: a paragraph in white text at the bottom of an uploaded resume, a comment in a code file, a hidden div on a web page an agent browses, the body of a support ticket, a field in a record synced from a third-party system. Anywhere untrusted content can enter the pipeline, an instruction can enter with it.",
          "This is the variant that turns injection into a data breach rather than a nuisance. An assistant that reads a document and can also send email can be instructed by that document to send its contents elsewhere. The user asked for a summary and got an exfiltration, with no visible sign that anything unusual happened.",
        ],
      },
      {
        heading: "What does not work",
        body: [
          "Instructing the model to ignore instructions found in content is the first thing everyone tries. It reduces the success rate and does not eliminate it, because the defence and the attack occupy the same channel and the attacker can write more persuasively about the same subject.",
          "Filtering inputs for suspicious phrases fails for the same reason spam filtering by keyword failed: the space of paraphrase is unbounded, and encodings, translations and indirection all bypass a list. Classifier-based detection performs better and still leaves a gap that an adaptive attacker will find.",
          "Delimiters around untrusted content help marginally and can themselves be spoofed. None of these are worthless, and layered they raise cost, but a design whose safety depends on the model not being fooled is a design that will eventually be fooled.",
        ],
      },
      {
        heading: "What does work: limiting consequences",
        body: [
          "The productive assumption is that injection will sometimes succeed, and that the system should remain safe when it does. That moves the work from the prompt to the architecture around it.",
          "Give the model the permissions of the user it is serving, not a privileged service identity, so a successful injection cannot reach data the requester could not have reached anyway. Scope each tool to the narrowest capability that does the job. Put a human confirmation in front of irreversible or externally visible actions: sending messages, moving money, deleting records, changing permissions.",
          "Then constrain the exits. An agent that can read sensitive data and also make arbitrary outbound requests has an exfiltration channel; allowlisting destinations closes it. Validate model output against a schema before acting on it, and escape it before rendering. Finally, log every run in enough detail to reconstruct what happened, because you will need to explain an incident at some point.",
        ],
      },
      {
        heading: "How to test for it",
        body: [
          "Testing starts by enumerating every path by which text reaches the model. Direct user input is the obvious one; the ones that matter are the indirect paths: uploaded files, retrieved documents, scraped pages, synced records, and the output of tools the model itself called.",
          "For each path, plant an instruction and see whether it is followed. The most informative payloads are not attempts to make the model misbehave verbally but attempts to make it use a tool: fetch a URL, send a message, read a record outside the current scope. If a planted instruction can cause a tool call, the boundary is not holding.",
          "This belongs in a regression suite rather than in a one-off exercise, because every prompt change, model upgrade and new tool alters the result. Treating injection tests as part of the test suite is what keeps a fix from silently regressing three releases later.",
        ],
      },
    ],
  },

  {
    slug: "ai-technical-debt",
    term: "AI Technical Debt",
    title: "AI Technical Debt: Why It Compounds Faster | Vibecop Learn",
    question: "What is AI technical debt?",
    definition:
      "AI technical debt is the accumulated cost of code that was generated rather than designed, and accepted rather than reviewed. It differs from conventional technical debt in origin and shape: conventional debt is usually a deliberate trade made by someone who knew the alternative, while AI debt is undeliberate, invisible at the time of writing, and distributed across a codebase nobody has fully read.",
    keyPoints: [
      "Conventional debt is a decision recorded somewhere; AI debt is the absence of a decision.",
      "It accumulates faster because code is produced faster than it is examined.",
      "Duplication and pattern drift are its characteristic forms, caused by context not persisting between sessions.",
      "The interest is paid at the moment a human first has to change the system.",
      "It is measurable (duplication, dead code, coverage of critical paths, dependency age) and therefore manageable.",
    ],
    service: "/ai-code-audit",
    serviceLabel: "See what an AI code audit checks",
    sections: [
      {
        heading: "Debt without a decision",
        body: [
          "The original metaphor assumed a choice: ship the quick version now, pay for it later, and know that you did. That framing depends on someone understanding both options at the time. The debt is recorded, even if only in a comment or someone's memory, and it can be paid down deliberately.",
          "AI-generated debt usually has no such record. The tool chose an approach, the approach worked, and no alternative was ever considered because no one was choosing. There is no comment, no ticket, and no memory of a trade-off, because there was no trade-off, just a default.",
          "This is why it is harder to manage. You cannot prioritise paying down debt you do not know you have, and the usual signals are absent: no rueful comment, no obviously hacky function, nothing that looks like a shortcut.",
        ],
      },
      {
        heading: "Why it compounds faster",
        body: [
          "Two things changed at once. Code is being produced much faster, and it is being read much less. Conventional debt accumulated at the speed of typing and was at least glanced at by a second person. Generated debt accumulates at the speed of prompting, and frequently nobody reads it at all.",
          "Compounding follows from what gets built next. Each new feature is generated against the existing codebase as context, so an inconsistency becomes a template. A questionable data model shapes every query written after it. Duplication begets duplication, because the tool sees two ways of doing something and picks one, or invents a third.",
          "The practical consequence is that the window in which cleanup is cheap is shorter than teams expect. At three months a structural problem is a refactor; at eighteen months, with features built on top, it is a rewrite.",
        ],
      },
      {
        heading: "Its characteristic forms",
        body: [
          "Duplication is the most common. The same capability implemented three or four times, in slightly different ways, because each session began without knowledge of the others. Each copy then drifts: a fix applied to one leaves the rest untouched, which turns duplication from an aesthetic problem into a correctness one.",
          "Dead and orphaned code is the second. Superseded attempts left in the tree, sometimes still routed, occasionally still reachable with the permission model of an earlier design. Alongside it: tables for features that were cut, jobs still scheduled, environment variables for services no longer used.",
          "Third is pattern drift: no single convention for validation, error handling, data access or naming, because conventions emerge from people and there were none. And fourth, absent documentation of intent: the code says what it does and nothing says why, which is the information a future change actually needs.",
        ],
      },
      {
        heading: "When the interest comes due",
        body: [
          "AI debt is unusually cheap right up until a specific moment: when a human has to change the system under constraint. Until then, the tool that wrote the code can keep extending it, and the inconsistency costs nothing visible.",
          "The moment arrives in predictable ways. An urgent bug in production that has to be fixed correctly and quickly. An engineer joining who needs to be productive. A security finding that must be remediated everywhere, which requires knowing where everywhere is. An enterprise customer asking a question about data handling that requires someone to actually know the answer.",
          "In each case the cost is not the fix. It is the archaeology before the fix: establishing what the system does, which of the three implementations is live, and what else the change will break.",
        ],
      },
      {
        heading: "Measuring it",
        body: [
          "The advantage of this kind of debt is that most of it is countable. Duplicated blocks across the repository. Files and exports with no reachable references. Test coverage specifically on the paths that handle money, permissions and personal data, not overall coverage, which is close to meaningless. Dependency age and known vulnerabilities. The number of distinct approaches to the same recurring job.",
          "None of these numbers matter in isolation, and chasing them as targets produces its own problems. Their value is as a trend and as a map: they show whether the codebase is getting more or less coherent, and they point at the specific places where an independent read is worth the time.",
          "Tracking two or three of them from the start costs almost nothing and makes the growth visible while it is still cheap to act on.",
        ],
      },
      {
        heading: "Paying it down",
        body: [
          "Consolidation first, and only where it matters. Find the duplicated logic on paths that handle money, authentication, permissions or personal data, and reduce each to one implementation. Duplication in a rarely used admin screen can wait indefinitely.",
          "Delete aggressively. Dead code is the cheapest debt to retire and the only kind whose removal carries no risk of regression once you have confirmed it is genuinely unreachable. It also makes everything else easier to see.",
          "Then write the tests you actually need, from the requirement rather than from the code, for the handful of paths whose failure would be unrecoverable. And write down what the system is: one document naming the components, the data model and the deploy process. That single artefact removes more future cost than any amount of refactoring, because it is what turns a codebase nobody understands into one somebody can own.",
        ],
      },
    ],
  },

  {
    slug: "ai-code-review",
    term: "AI Code Review",
    title: "AI Code Review: Reviewing Code You Did Not Write | Vibecop Learn",
    question: "How should you review AI-generated code?",
    definition:
      "AI code review is the practice of examining code produced by an AI assistant before it is trusted in production. It differs from conventional review because the usual signals are missing: generated code looks confident regardless of correctness, the author cannot explain their reasoning, and the volume exceeds what per-change review can absorb. Effective review therefore targets what the tool systematically omits rather than reading everything equally.",
    keyPoints: [
      "Generated code looks equally plausible whether it is right or wrong, so visual cues cannot guide attention.",
      "There is no author to question, which removes the most efficient part of conventional review.",
      "Review effort should be allocated by consequence: money, permissions, personal data, irreversible actions.",
      "Read the diff against the requirement, not against the explanation the tool provided.",
      "Per-change review cannot detect duplication and drift, which only exist at the level of the whole codebase.",
    ],
    service: "/ai-code-audit",
    serviceLabel: "See what an independent code audit checks",
    sections: [
      {
        heading: "What changes when the author is a model",
        body: [
          "Conventional review leans heavily on the author. A reviewer asks why a decision was made, learns the constraint they did not know about, and moves on. That conversation is the most efficient part of the process, and it is unavailable: an AI tool will produce a fluent justification for whatever it wrote, including when what it wrote is wrong, so asking it why is not a reliable check.",
          "The second change is uniformity of presentation. Human code carries signals (inconsistent naming, a function that has clearly grown, a comment written at 2am) that tell a reviewer where to slow down. Generated code is uniformly tidy, so those signals are gone and attention has to be allocated deliberately instead.",
          "The third is volume. Review capacity is set by human reading speed and has not changed, while production has increased by an order of magnitude. Any process that assumes every line will be read carefully is already failing, whether or not anyone has admitted it.",
        ],
      },
      {
        heading: "Allocating attention by consequence",
        body: [
          "Since everything cannot be read closely, the decision is what to read closely. The useful axis is consequence of failure, not size of change. Anything touching authentication, authorization, payments, personal data, file handling or destructive operations gets a full careful read. Anything whose worst case is a cosmetic defect gets a skim.",
          "This inverts the common instinct to review large diffs and wave through small ones. A one-line change to a permission check deserves more attention than four hundred lines of generated interface code, and reviewing by diff size gets that backwards.",
          "Making the split explicit, as a written list of the paths that always get full review, is what stops it eroding under deadline pressure. Without it, the rule quietly becomes 'review what looks scary', and generated code never looks scary.",
        ],
      },
      {
        heading: "Read against the requirement",
        body: [
          "The most common review failure with generated code is reading the code against its own explanation. The tool produces the code and a description of what it does, they agree with each other, and the reviewer concludes it is correct. But both came from the same source and share the same misunderstanding, so the agreement carries no information.",
          "The check that works is reading the code against the original requirement, ideally with the explanation set aside. What was actually asked for? Does this do that, including in the cases nobody mentioned: empty input, duplicate submission, a concurrent second request, a failure partway through?",
          "It helps to ask what the code does when something goes wrong, since that is where generated code is weakest and where the description is usually silent. If the answer is 'logs and continues', that is a finding.",
        ],
      },
      {
        heading: "A short checklist that catches most of it",
        body: [
          "Does every new endpoint check that the caller is allowed to touch this specific object, not merely that they are logged in? Is input validated on the server, not only in the interface? Does every failure path either recover or stop, rather than logging and proceeding? Are database changes wrapped so a partial write cannot happen?",
          "Then: does this duplicate something that already exists elsewhere in the codebase? Were any dependencies added, and were they needed? Does anything new touch secrets, and if so where do they come from? Would the tests fail if the feature were broken?",
          "Eight questions, applicable to almost any change, and they catch a large share of what independent audits of AI-built code actually find. Their value is that they are answerable quickly and do not require reading every line.",
        ],
      },
      {
        heading: "What per-change review cannot see",
        body: [
          "Some defects have no location. Duplication exists between files, not in one. Pattern drift is visible only across many changes. Dead code accumulates one abandoned attempt at a time, each individually harmless. A dependency tree grows one reasonable addition at a time.",
          "No amount of diligent pull-request review surfaces these, because each individual change is fine. They require someone reading the codebase as a whole, periodically, with the specific question of whether it still hangs together.",
          "This is the argument for a whole-codebase read at intervals rather than only incremental review, and for that read being done by someone who was not part of writing it, since the people who prompted the code into existence share the tool's model of it, including its blind spots.",
        ],
      },
      {
        heading: "Where automated tooling fits",
        body: [
          "Linters, type checkers, dependency scanners and secret detectors should all be running in continuous integration, and they cost almost nothing. They catch a real category of problem and they never get tired, which is exactly the category human review is worst at.",
          "What they cannot do is judge. A scanner cannot tell you that this endpoint should have required an ownership check, because it does not know what the endpoint is for. It cannot tell you that a critical vulnerability sits in unreachable code while a medium one sits on your billing path. Severity in the abstract is not risk in your product.",
          "The sensible division is machines for coverage and humans for consequence: automate everything decidable, and spend scarce human attention on the questions that require knowing what the software is supposed to do.",
        ],
      },
    ],
  },
];

export const LEARN_PAGE_MAP = Object.fromEntries(
  LEARN_PAGES.map((page) => [page.slug, page]),
);
