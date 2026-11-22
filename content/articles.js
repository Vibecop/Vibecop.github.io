/**
 * The articles on /blog, each rendered at /blog/<slug>.
 *
 * Only finished articles belong here: an entry is a published, indexable page,
 * so a title without a body is a thin page, not a teaser. Draft elsewhere.
 */
export const ARTICLES = [
  {
    slug: "what-ai-coding-tools-leave-behind",
    title: "What AI Coding Tools Leave Behind in Your Codebase",
    description:
      "What Claude Code, Cursor, Lovable and Bolt don't ship: the review judgment that decides whether AI-built software survives production.",
    author: "Vibecop Team",
    date: "January 25, 2026",
    isoDate: "2026-01-25",
    image: "/assets/images/gallery-img1.jpg",
    cover: "/assets/images/singleblog-image1.jpg",
    body: [
      "Claude Code, Cursor, Lovable, and Bolt ship working software faster than any team could a few years ago. What they do not ship is the judgment about whether the result survives production and that gap is invisible right up until it is expensive.",
      "AI-generated code accumulates complexity that compounds silently with every new feature. Auth layers written without a reviewer, architecture that works at 100 users and quietly fails at 10,000, infrastructure hiding single points of failure behind dashboards that look fine. Automated scanning surfaces some of it. Deciding what actually threatens your launch still takes a senior engineer.",
    ],
    quote: "AI generates code fast. It doesn’t own the consequences.",
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
  },
];

export const ARTICLE_MAP = Object.fromEntries(ARTICLES.map((a) => [a.slug, a]));
