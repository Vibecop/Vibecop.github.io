/** The article rendered at /single-blog. */
export const POST = {
  title: "What AI Coding Tools Leave Behind in Your Codebase",
  author: "Vibecop Team",
  date: "Jan 20, 2026",
  image: "/assets/images/singleblog-image1.jpg",
  body: [
    "Claude Code, Cursor, Lovable, and Bolt ship working software faster than any team could a few years ago. What they do not ship is the judgment about whether the result survives production and that gap is invisible right up until it is expensive.",
    "AI-generated code accumulates complexity that compounds silently with every new feature. Auth layers written without a reviewer, architecture that works at 100 users and quietly fails at 10,000, infrastructure hiding single points of failure behind dashboards that look fine. Automated scanning surfaces some of it. Deciding what actually threatens your launch still takes a senior engineer.",
  ],
  quote:
    "AI generates code fast. It doesn’t own the consequences.",
  points: [
    "Review system design and data flows before they are expensive to change",
    "Check that sensitive actions are protected on the backend, not only the frontend",
    "Know where secrets, API keys, and environment variables are stored",
    "Enforce tenant isolation at the database layer, not in application filters",
    "Move background work off the request path before load exposes it",
    "Put structured logging and error tracking in place ahead of the first incident",
    "Test with realistic user and data volume, not demo data",
    "Document the handover so the product does not depend on one developer",
  ],
};

export const RECENT_POSTS = [
  { title: "What Breaks First When Enterprise Customers Arrive", image: "/assets/images/singleblog-feed1.jpg" },
  { title: "Automated Findings vs Senior Engineering Judgment", image: "/assets/images/singleblog-feed2.jpg" },
  { title: "Signs Your Product Needs a Technical Audit", image: "/assets/images/singleblog-feed3.jpg" },
  { title: "When Rebuilding Is the Wrong Call", image: "/assets/images/singleblog-feed4.jpg" },
].map((p) => ({ ...p, author: "Vibecop Team", date: "Jan 3, 2026" }));

export const POST_CATEGORIES = [
  { label: "Architecture Review", count: "02" },
  { label: "Security Findings", count: "11" },
  { label: "Production Readiness", count: "26" },
  { label: "Scaling Risk", count: "13" },
  { label: "AI-Generated Code", count: "09" },
];
