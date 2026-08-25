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
 */
export const CASE_STUDIES = [
  {
    slug: "api-response-time",
    category: "Performance",
    sector: "SaaS",
    title: "14-second responses brought under one second",
    body: "Database queries had no indexing and N+1 patterns were everywhere. We identified 6 critical query patterns, implemented proper indexing, and restructured the caching layer.",
    stats: ["6 query patterns fixed", "Sub-1s stability"],
    image: "/assets/images/gallery-img1.jpg",
  },
  {
    slug: "architecture-before-launch",
    category: "Architecture",
    sector: "Startup",
    title: "An architecture built for 100,000 users that would have collapsed at 8,000",
    body: "A monolithic architecture planned to serve 100,000 users, caught before customer launch and re-architected to event-driven services.",
    stats: ["Caught pre-launch", "Series A 3 months later"],
    image: "/assets/images/gallery-img2.jpg",
  },
  {
    slug: "rebuild-avoided",
    category: "Advisory",
    sector: "Founder-led",
    title: "A microservices rebuild called off after the audit",
    body: "The founder was about to rebuild the entire product on microservices based on wrong assumptions about load. Our audit showed the bottleneck was a single service.",
    stats: ["6 months saved", "$200K in salaries saved"],
    image: "/assets/images/gallery-img3.jpg",
  },
];

export const CASE_STUDY_FILTERS = ["All", ...new Set(CASE_STUDIES.map((c) => c.category))];
