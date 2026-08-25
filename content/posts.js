/**
 * The blog posts the kit ships, shared by every blog layout.
 *
 * The kit repeated this markup on six pages with slightly different wrappers
 * and no titles only an excerpt, a tag and a date, which is what the card
 * design shows. `type` picks the card's media: a still, a small gallery, or
 * an embedded video.
 */
export const POSTS = [
  {
    slug: "ai-generated-code",
    author: "Vibecop Team",
    tag: "AI-Generated Code",
    date: "April 02, 2026",
    excerpt: "Claude Code, Cursor, and Copilot ship fast. What they leave behind is invisible complexity that compounds silently with every new feature.",
    type: "image",
    image: "/assets/images/standard_post_img01.jpg"
  },
  {
    slug: "architecture-review",
    author: "Vibecop Team",
    tag: "Architecture Review",
    date: "April 02, 2026",
    excerpt: "Architecture that works at 100 users quietly fails at 10,000. Why structural weaknesses only surface under production pressure and how to find them first.",
    type: "gallery",
    images: [
      "/assets/images/standard_post_img02.jpg",
      "/assets/images/standard_post_img03.jpg",
      "/assets/images/standard_post_img04.jpg"
    ]
  },
  {
    slug: "production-readiness",
    author: "Vibecop Team",
    tag: "Production Readiness",
    date: "April 02, 2026",
    excerpt: "No observability. No alerting. No runbooks. Your product looks ready and you won’t know it isn’t until it matters.",
    type: "image",
    image: "/assets/images/standard_post_img05.jpg"
  },
  {
    slug: "security-findings",
    author: "Vibecop Team",
    tag: "Security Findings",
    date: "April 02, 2026",
    excerpt: "Exposed endpoints, misconfigured auth, unencrypted data. Architecture-level vulnerabilities need human judgment to prioritize, validate, and act on.",
    type: "image",
    image: "/assets/images/standard_post_img06.jpg"
  },
  {
    slug: "automated-vs-human",
    author: "Vibecop Team",
    tag: "Automated vs Human",
    date: "April 02, 2026",
    excerpt: "Automated tools surface signals at machine speed. Senior engineers decide what matters, why it matters, and what to do next.",
    type: "video",
    url: "https://player.vimeo.com/video/157467640?background=1"
  },
  {
    slug: "scaling-risk",
    author: "Vibecop Team",
    tag: "Scaling Risk",
    date: "April 02, 2026",
    excerpt: "Over-provisioned infra, single points of failure, missing redundancy all hiding behind dashboards that look fine until production breaks.",
    type: "video",
    url: "https://www.youtube.com/embed/dA8Smj5tZOQ"
  },
  {
    slug: "technical-debt",
    author: "Vibecop Team",
    tag: "Technical Debt",
    date: "April 02, 2026",
    excerpt: "Many startups rebuild too early because foundational decisions were never validated. Knowing which is which saves months of engineering time.",
    type: "image",
    image: "/assets/images/standard_post_img03.jpg"
  },
  {
    slug: "enterprise-onboarding",
    author: "Vibecop Team",
    tag: "Enterprise Onboarding",
    date: "April 02, 2026",
    excerpt: "Enterprise customers expose architecture, observability, security and operational weaknesses quickly. Better to find them before they do.",
    type: "video",
    url: "https://player.vimeo.com/video/157467640?background=1"
  },
  {
    slug: "infrastructure",
    author: "Vibecop Team",
    tag: "Infrastructure",
    date: "April 02, 2026",
    excerpt: "Deployment pipelines, failover, and recovery objectives the operational maturity questions an audit answers before an incident does.",
    type: "video",
    url: "https://www.youtube.com/embed/dA8Smj5tZOQ"
  },
  {
    slug: "developer-handover",
    author: "Vibecop Team",
    tag: "Developer Handover",
    date: "April 02, 2026",
    excerpt: "No documentation, no tests, one developer who understands everything. What handover risk actually looks like in a fast-built codebase.",
    type: "image",
    image: "/assets/images/standard_post_img04.jpg"
  },
  {
    slug: "due-diligence",
    author: "Vibecop Team",
    tag: "Due Diligence",
    date: "April 02, 2026",
    excerpt: "GDPR, SOC2, and HIPAA gaps surface in investor due diligence or worse, in a real incident. Predictable. Preventable.",
    type: "image",
    image: "/assets/images/standard_post_img02.jpg"
  },
  {
    slug: "cto-advisory",
    author: "Vibecop Team",
    tag: "CTO Advisory",
    date: "April 02, 2026",
    excerpt: "Senior engineering judgment on demand making the right architecture decisions without the cost of a full-time CTO hire.",
    type: "image",
    image: "/assets/images/standard_post_img06.jpg"
  },
];

/** The tag list the sidebar and filters use. */
export const POST_TAGS = [...new Set(POSTS.map((p) => p.tag))];
