/**
 * The work on /case-studies.
 *
 * The kit rendered these into a separate Bootstrap tab pane per filter,
 * duplicating the markup five times over and its tab strip had no entry for
 * every category, so some cards were only ever reachable under "All".
 * Here the data is listed once and the filter list is derived from it, which
 * makes every category reachable.
 *
 * Only the outcomes Vibecop actually publishes are listed. The kit shipped six
 * invented ones; adding more would mean inventing results.
 *
 * Entries carrying `detail` get a page at /case-studies/[slug]; the rest stay
 * cards. Clients are described by sector rather than named, and findings are
 * kept at outcome altitude no file paths, line numbers or literal secrets
 * because several of these engagements have findings that are still open.
 */
export const CASE_STUDIES = [
  {
    slug: "realtime-auth-gap",
    category: "Security",
    sector: "Creator platform",
    title: "Bans held on every HTTP request and stopped at the realtime socket",
    body: "A third-party pentest returned five findings. The first turned out to be a symptom, and the wider auth review found a second authenticated channel enforcing none of the rules the first one did.",
    stats: ["1 critical, 3 high found", "Deploy outage caught first"],
    image: "/assets/images/gallery-img4.jpg",
    detail: {
      lede: "Every HTTP request re-checks whether a user is banned. The realtime socket checks a signature and nothing else.",
      context:
        "A Twitch streamer-discovery platform: a React SPA, an Express and Mongo API, and a queue worker running as two dynos off one Heroku app, with a separate cross-origin admin panel reading the same API. The round was triggered by a third-party pentest that returned five findings, and grew into a wider review of the auth surfaces once the first one turned out to be a symptom rather than the disease.",
      facts: [
        { label: "Surface audited", value: "27 route modules across 5 auth surfaces" },
        { label: "Effort", value: "1 session: static review, middleware probe, existing suite" },
        { label: "Findings", value: "1 critical, 3 high, 4 medium" },
        { label: "Deadline", value: "None: pentest remediation, undeployed" },
      ],
      situation: [
        "One repository holds two applications. The SPA builds into the API process, so the storefront and its backend share an origin. A second consumer, the admin panel, lives on its own domain and calls the same API cross-origin.",
        "That single fact shapes most of what follows. Because the admin panel is cross-origin, the session cookies cannot use the browser's own CSRF protection, and that applies to every consumer rather than only the admin one.",
        "Authentication is a token in an httpOnly cookie, with a refresh-rotation endpoint and a revocation blacklist. There are five distinct ways to present credentials: the cookie on HTTP requests, the refresh cookie, an OAuth session for social login, the realtime handshake, and a short-lived token minted for signup's live username checks.",
      ],
      exposureTitle: "Where the exposure actually is",
      exposure: [
        "The constraint is the cross-origin admin panel. It forces the cookie policy, it forced an allow-list, and it means no single auth change can be made without checking two consumers. The team understood that, and it was the frame for the pentest's findings.",
        "The surprise is that the exposure was not in the HTTP layer at all. The HTTP middleware does the careful thing on every request: it verifies the cookie, checks the token against the blacklist, and re-reads the user's enforcement state so a ban takes effect on the next request. The realtime handshake, the other authenticated channel into the same system, does none of it. It verifies the signature, confirms a couple of claims are present, and connects.",
        "The consequence is concrete. Moderation is the platform's core safety mechanism. Ban a user and their HTTP access stops on the next request, while their open socket stays authenticated for the full lifetime of the token. The same gap swallows revocation: logging out blacklists the token, and the socket never consults the blacklist.",
        "Everything above came from code. The one finding that did not is the deploy path, and it is the one that would have caused an outage. The built client bundle was committed to the repository rather than built during deploy, and nothing in the server package rebuilt it. Shipping the round's server-side CSRF enforcement against the committed bundle, which contained no CSRF code at all, would have returned an error on every write in the application.",
      ],
      findings: [
        {
          severity: "Critical",
          title: "The deploy ships a stale client bundle against a changed server",
          body: "The SPA bundle is committed rather than built on deploy, and the only build hook sits in a package the platform never runs. Deploying the round's CSRF work as committed fails every write: login, signup, follows, likes, uploads. Availability rather than vulnerability, but total.",
        },
        {
          severity: "High",
          title: "Realtime authentication enforces neither bans nor token revocation",
          body: "The handshake verifies the signature and stops. A banned or suspended user keeps a live authenticated socket until the token expires, and a logged-out token still connects. HTTP enforces both on every request, so the two channels disagree about who is allowed in.",
        },
        {
          severity: "High",
          title: "Unescaped user input reaches the database query layer on a public route",
          body: "Six filter fields interpolate raw query parameters into regular expressions, reachable unauthenticated through the public feed. A crafted pattern makes the database do exponential work on an open endpoint. A code comment records that the same class of bug was deliberately removed from this route in an earlier round; the utility it delegates to still had it.",
        },
        {
          severity: "High",
          title: "Profile update passes the raw request body into the model",
          body: "The request body is forwarded with no field allow-list. Only one of the two account types gets a sanitizer, so any writable schema field is reachable by a caller who names it.",
        },
        {
          severity: "Medium",
          title: "Cache TLS accepts any certificate",
          body: "The encrypted branch disables certificate verification, so the connection is encrypted but the server is never authenticated. That store holds the session blacklist and every rate-limit counter.",
        },
        {
          severity: "Medium",
          title: "Bot protection fails open when unconfigured",
          body: "A missing secret returns success and signup proceeds. The control silently becomes a no-op on any environment where the variable is unset rather than wrong.",
        },
        {
          severity: "Medium",
          title: "Password reset does not revoke existing sessions",
          body: "The change-password path revokes refresh tokens; the reset path updates the hash and returns. An attacker holding a stolen session keeps it through the victim's recovery, the one moment recovery exists to close.",
        },
      ],
      constraints: [
        "The admin panel could not be tightened symmetrically. Being cross-origin, it cannot participate in the double-submit token, and it is covered by the origin check alone until its own client learns to send the header. That was the right call, since the alternative was breaking a working internal tool, but it means the protection is not literally universal yet.",
        "Account enumeration cannot be closed while the signup form asks the question. The live \"username taken\" hint is the feature; the oracle is that feature working. Scraping is now expensive rather than free. Removing it entirely requires changing the flow, which the team declined.",
        "Nothing was exercised in a browser. Verification was static review, the existing 135-test suite, a client build, and an 18-case probe run against the real middleware. The admin panel was never run.",
      ],
      sequencing: [
        {
          title: "Commit the built bundle with the server change (minutes)",
          body: "Nothing else can ship until this is true. One build, with the bundle in the same commit as the server code.",
        },
        {
          title: "Enforce bans and revocation in the handshake (half a day)",
          body: "Largest live exposure, and it reuses logic the HTTP middleware already has. Stop accepting the credential from the query string in the same change.",
        },
        {
          title: "Escape the filter builder (half a day)",
          body: "Public unauthenticated route. The escape helper already existed elsewhere in the codebase and needed applying consistently.",
        },
        {
          title: "Allow-list the fields profile update accepts (one day)",
          body: "Larger blast radius than the others but no external dependency. Extend the existing sanitizer to the second account path.",
        },
        {
          title: "Verify cache certificates, fail bot protection closed (one hour)",
          body: "Two config-level changes, both low risk, both currently silent when wrong.",
        },
        {
          title: "Revoke sessions on password reset (one hour)",
          body: "Small and mechanical. Reset should call what change-password already calls.",
        },
      ],
      outcome: [
        { metric: "Pentest findings closed", before: "0 of 5", after: "4 of 5" },
        { metric: "State-changing endpoints behind a CSRF check", before: "0", after: "All but the payment webhook" },
        { metric: "HSTS max-age", before: "180 days", after: "365 days" },
        { metric: "Plaintext HTTP handling", before: "Served", after: "Redirected or refused" },
      ],
      outcomeNote:
        "Four of the five pentest findings were closed in the branch. The remaining work is sequenced above, and the deploy-path critical was caught before it could take the application down.",
    },
  },
  {
    slug: "legacy-secret-admin-access",
    category: "Security",
    sector: "E-commerce",
    title: "A hardening pass that carried the development secret forward",
    body: "Two backends forked from one ancestor, sharing a database. The consolidated auth module was genuinely better code, and it kept the original development secret as a permanent fallback.",
    stats: ["3 of 4 surfaces exposed", "Closed in half a day"],
    image: "/assets/images/gallery-img5.jpg",
    detail: {
      lede: "One string committed to the repository grants administrator access to three of the four API surfaces, and the hardening pass that was supposed to fix the auth layer carried it forward.",
      context:
        "A live luxury-resale operation running two applications, a customer storefront and an internal admin panel, off four repositories, two backend codebases forked from a common ancestor, and one shared pair of databases. Static security review of code and configuration, commissioned ahead of a three-programme feature build that would add paid memberships, public profiles and confidential inventory to the same surfaces.",
      facts: [
        { label: "Surface audited", value: "4 repos · 4 backend surfaces · ~1,200 route registrations" },
        { label: "Effort", value: "~6 hours, discovery to handoff" },
        { label: "Findings", value: "2 critical, 4 high" },
        { label: "Deadline", value: "None: routine review ahead of the new build" },
      ],
      situation: [
        "Two products share one set of databases. The storefront calls its own backend for catalogue, orders and resale submissions, and calls the admin backend for authentication and two-factor, so the admin backend is the identity provider for customers as well as staff. Both backends run two database servers, giving four independently addressable API surfaces reading and writing the same data.",
        "The two backend repositories were forked from a common ancestor. Files with identical paths exist in both with materially different implementations: one controller alone is 1,796 lines on one side and 1,020 on the other. That divergence was documented internally as a maintenance hazard. This review treated it as a security boundary and diffed the pairs for missing checks rather than missing features.",
      ],
      exposureTitle: "Where the exposure actually is",
      exposure: [
        "The constraint is the fork. Two backends, one database, checks that must hold identically on both sides but are maintained separately.",
        "The surprise is that the fix made it worse. At some point the admin backend's auth was consolidated into a hardened shared module, with session invalidation, token refresh and login rate limiting. It is genuinely better code. But to stay compatible with tokens already in circulation, it kept the original development secret as a permanent fallback, and the fallback is not conditional on anything.",
        "The verification routine builds a list of candidate keys, filters out the empty ones, and tries each in turn until one verifies. The development secret is in that list, defined a few lines above it, and is never dropped in any environment. The storefront's second backend reaches the same outcome by a separate route, hardcoding the identical string into an equivalent list.",
        "The practical consequence is that a token claiming administrator status, signed with a string readable in the repository, passes verification on three of the four surfaces. The session-invalidation layer does not help: it compares the token's issue time against a stored revocation point, and a forged token carries a current issue time by construction.",
        "Everything else sits downstream of that. Route guards, ownership checks and the diverged-controller differences all assume the identity layer holds. While this secret is accepted, they are defence in depth around an open door.",
      ],
      findings: [
        {
          severity: "Critical",
          title: "A committed secret is accepted as a valid signing key on three of four API surfaces",
          body: "Anyone who can read the source can mint an administrator token. Authentication does not fail. It succeeds.",
        },
        {
          severity: "Critical",
          title: "Unauthenticated bulk write into the products collection",
          body: "No auth middleware, no validation, no ownership check. The caller supplies both the document filters and the values, straight into a bulk write.",
        },
        {
          severity: "High",
          title: "Any logged-in customer can read every reseller's price-change history",
          body: "The route is guarded by the customer middleware rather than the admin one, and the query has no ownership filter at all. Present identically in both repositories.",
        },
        {
          severity: "High",
          title: "The public product endpoint returns the entire document with no field projection",
          body: "Authentication was deliberately commented out on the line above the route. Every internal field ships to anonymous callers. Today that includes resale linkage; after the planned build it would include whatever ties an item to the business that consigned it.",
        },
        {
          severity: "High",
          title: "Database TLS is silently disabled whenever the environment variable is unset",
          body: "The local-development branch is selected by absence rather than by an explicit value, so a deploy that simply forgets the variable connects in cleartext and reports nothing. The same file hardcodes fallback database credentials.",
        },
        {
          severity: "High",
          title: "The storefront's admin middleware never checks whether the account is blocked",
          body: "Its customer middleware queries the account on every request and rejects blocked users. The admin middleware alongside it verifies the token and stops. Revoking a staff account leaves their admin token working until it expires.",
        },
      ],
      constraints: [
        "This was a static review. Production environment variables, live cache exposure and the database role's actual grants could not be verified from source, so three of the discovery questions are answered only as far as the code allows. We can show that the TLS branch fails open when the variable is unset, but not whether it is unset in production. Those need a session against the running environment.",
        "The shared schema was not re-derived migration by migration. Two repositories hold overlapping, diverged migration sets against one database, and establishing which constraints actually exist now requires inspecting the live schema. Reasonable to defer, but it means the question of whether one repository dropped a constraint the other relies on is open rather than cleared.",
        "Two findings from the previous review had already been fixed and were removed from this report rather than carried forward. Reporting them again would have inflated the count.",
      ],
      sequencing: [
        {
          title: "Remove the legacy secret from both verification lists (half a day)",
          body: "This is the whole exposure. Everything else is incremental once the identity layer actually holds. It invalidates any token still signed with it, so it needs a deliberate rollout: confirm nothing in circulation depends on it, then drop it and rotate.",
        },
        {
          title: "Put auth on the bulk-write endpoint, or delete it (under an hour)",
          body: "Establish whether any client still calls it. If nothing does, removing it is safer than guarding it.",
        },
        {
          title: "Fix the two authorisation gaps (half a day)",
          body: "The price-change list needs the admin guard and an ownership filter. The admin middleware needs the same block check its sibling already performs.",
        },
        {
          title: "Make the TLS branch explicit (an hour)",
          body: "Select the local path on an affirmative value, never on absence, and fail loudly when the variable is missing rather than quietly dropping TLS.",
        },
        {
          title: "Project the public product response (half a day)",
          body: "Return a named field list rather than the whole document. Worth doing before the confidential-inventory build rather than after, since that programme's confidentiality promise depends on this endpoint.",
        },
        {
          title: "Runtime verification session (half a day)",
          body: "Closes the three questions this review could not answer from source.",
        },
      ],
      outcome: [
        { metric: "API surfaces accepting the committed secret", before: "3 of 4", after: "0 of 4" },
        { metric: "Critical findings open", before: "2", after: "0" },
        { metric: "High findings open", before: "4", after: "0" },
        { metric: "Discovery questions answerable from source", before: "8 of 11", after: "11 of 11" },
      ],
      outcomeNote:
        "The right-hand column is the projected end state once the sequencing is worked through, not a measured result. About two and a half days of work, of which the single highest-value half-day is the first item. Both criticals sit in the identity layer rather than spread across the application, so one focused change closes the majority of the real exposure without a refactor.",
    },
  },
  {
    slug: "automation-ceiling-before-campaign",
    category: "Architecture",
    sector: "Fintech",
    title: "84 leads of headroom, with a campaign booked to add 760",
    body: "Two scenarios polling on a schedule spent 2,900 operations a month checking for work that arrived by form anyway. When the allowance runs out the automation stops, and the form keeps showing a success message.",
    stats: ["Ceiling 464 to 1,800+", "Launched on plan"],
    image: "/assets/images/gallery-img6.jpg",
    detail: {
      lede: "84 leads from the automation stopping, with a campaign booked to add 760.",
      context:
        "An Australian consumer finance marketplace, seed stage, six people, one of them technical. Webflow front end, Make for automation, Zoho CRM holding the leads. A paid acquisition push budgeted to roughly triple inbound volume.",
      facts: [
        { label: "Surface audited", value: "9 automation scenarios, 4 CRM modules, 3 integration points" },
        { label: "Effort", value: "61 hours, scope to handoff" },
        { label: "Findings", value: "11 total, 3 critical and 5 high" },
        { label: "Deadline", value: "Campaign live 12 September" },
      ],
      situation: [
        "Enquiries went from a Webflow form through a chain of automation scenarios into a CRM lead record and a broker assignment. They wanted an architecture audit and a production readiness review before the campaign went live on 12 September.",
      ],
      exposureTitle: "Where the operations budget goes",
      exposure: [
        "The constraint is the automation operations budget, and the surprise is where it goes. Lead capture costs 14 operations per lead, which at 380 leads is 5,320 a month against an allowance of 10,000. That alone leaves room.",
        "But two scenarios poll on a fifteen minute schedule, and a scheduled run consumes an operation whether or not it finds anything, so those two spend 2,900 operations a month checking for work that arrives by form anyway. Add the rest and they sit at 88% of the allowance at current volume, which puts the ceiling at 464 leads and leaves headroom of 84. When the allowance runs out, scenarios stop, and the form keeps accepting submissions and showing a success message.",
        "We found this in the execution history rather than in the scenario design, where it is not visible. The same history is how we got the failure rate, and it comes with a caveat: incomplete execution storage was switched off on six scenarios, so 1.8% is what we could measure on the three that had it on, and it is a floor rather than a figure.",
        "Replacing the polling with webhooks and moving enrichment into a batch run takes two days and is mostly deletion. Doing it after the campaign starts costs three to four times that, because the work stops being a config change and becomes a reconciliation, matching whatever was written during a stopped window against live broker assignments by hand.",
      ],
      findings: [
        {
          severity: "Critical",
          title: "Operations budget exhausts at 464 leads a month",
          body: "They were running 380, with a campaign booked to roughly triple inbound volume.",
        },
        {
          severity: "Critical",
          title: "Two polling scenarios consume 2,900 operations a month and produce nothing",
          body: "Both poll on a fifteen minute schedule for work that arrives by form anyway. A scheduled run costs an operation whether or not it finds anything.",
        },
        {
          severity: "Critical",
          title: "Error routes absent on six of nine scenarios",
          body: "Failures write nothing and say nothing. Silent loss, invisible in the scenario design.",
        },
        {
          severity: "High",
          title: "Lead creation inserts rather than upserts",
          body: "Resubmitted forms duplicate, and duplicates reach broker assignment.",
        },
      ],
      constraints: [
        "They pushed back on moving off the automation platform entirely, which was the right call with three weeks on the clock, so we restructured inside it.",
        "They declined a second CRM organisation for staging on licence cost, also reasonable at their size.",
        "We lost most of a day to the CRM administrator being on leave with no one else holding the workflow rules.",
      ],
      sequencing: [
        {
          title: "Error routes first (half a day)",
          body: "Stopped silent loss the same afternoon.",
        },
        {
          title: "Replace polling with webhooks (two days)",
          body: "Before any campaign spend went live. Mostly deletion.",
        },
        {
          title: "Deduplication (deferred past launch)",
          body: "Their call. Re-checked at day 14 and cleaned three duplicate pairs by hand.",
        },
        {
          title: "Staging environment (deferred to Q1)",
          body: "Licence cost, reasonable at their size.",
        },
      ],
      outcome: [
        { metric: "Operations per captured lead", before: "14", after: "5" },
        { metric: "Monthly lead ceiling before scenarios stop", before: "464", after: "1,800+" },
        { metric: "Campaign launch", before: "At risk", after: "12 Sep, on plan" },
      ],
      outcomeNote:
        "Operations per lead came down from 14 to 5 and the polling scenarios went away, which moved the ceiling from 464 to somewhere north of 1,800. The campaign launched on 12 September as planned. We re-checked volume and error rate at day 14 and found 3 duplicate lead pairs from the deferred dedupe work, cleaned by hand.",
    },
  },
  /* Held back until there is a written-up audit behind each one. They were
     cards with nowhere to click, which reads as a broken link rather than a
     short list. Uncomment an entry once it has a `detail` block the grid
     links whatever carries one, and the filter strip and sitemap follow. */
  // {
  //   slug: "api-response-time",
  //   category: "Performance",
  //   sector: "SaaS",
  //   title: "14-second responses brought under one second",
  //   body: "Database queries had no indexing and N+1 patterns were everywhere. We identified 6 critical query patterns, implemented proper indexing, and restructured the caching layer.",
  //   stats: ["6 query patterns fixed", "Sub-1s stability"],
  //   image: "/assets/images/gallery-img1.jpg",
  // },
  // {
  //   slug: "architecture-before-launch",
  //   category: "Architecture",
  //   sector: "Startup",
  //   title: "An architecture built for 100,000 users that would have collapsed at 8,000",
  //   body: "A monolithic architecture planned to serve 100,000 users, caught before customer launch and re-architected to event-driven services.",
  //   stats: ["Caught pre-launch", "Series A 3 months later"],
  //   image: "/assets/images/gallery-img2.jpg",
  // },
  // {
  //   slug: "rebuild-avoided",
  //   category: "Advisory",
  //   sector: "Founder-led",
  //   title: "A microservices rebuild called off after the audit",
  //   body: "The founder was about to rebuild the entire product on microservices based on wrong assumptions about load. Our audit showed the bottleneck was a single service.",
  //   stats: ["6 months saved", "$200K in salaries saved"],
  //   image: "/assets/images/gallery-img3.jpg",
  // },
];

export const CASE_STUDY_FILTERS = ["All", ...new Set(CASE_STUDIES.map((c) => c.category))];

/** The ones with a page at /case-studies/[slug]. */
export const CASE_STUDY_PAGES = CASE_STUDIES.filter((c) => c.detail);

export const CASE_STUDY_MAP = Object.fromEntries(CASE_STUDY_PAGES.map((c) => [c.slug, c]));
