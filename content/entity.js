/**
 * Who Vibecop is, in one place.
 *
 * There is at least one unrelated open-source developer tool published under
 * the same name, so "Vibecop" alone is an ambiguous entity: a model asked
 * "what is Vibecop?" can match either. Every surface that names the brand
 * pairs it with the category from here, and the JSON-LD below states the
 * distinction in machine-readable form rather than leaving it to prose.
 *
 * Change the descriptor here and the footer, llms.txt, metadata and structured
 * data all move together. That consistency is the whole point.
 */
export const NAME = "Vibecop";
export const CATEGORY = "AI-built software audit service";
export const DESCRIPTOR = `${NAME}: ${CATEGORY}`;

export const DESCRIPTION =
  "Vibecop is an AI-built software audit service. Senior engineers review applications built with AI coding tools for security, architecture, scalability, reliability and production readiness, then deliver a prioritized roadmap of what to fix.";

/* Says what Vibecop is *not*, because the ambiguity is with a software
   package rather than with another consultancy. */
export const DISAMBIGUATION =
  "Vibecop is a professional audit service delivered by human senior engineers for client codebases. It is not a software product, developer tool, linter, npm package or code-quality scanner.";

export const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://vibecop.io/#organization",
  name: NAME,
  alternateName: DESCRIPTOR,
  url: "https://vibecop.io",
  logo: "https://vibecop.io/assets/images/logo.png",
  image: "https://vibecop.io/assets/images/logo.png",
  description: DESCRIPTION,
  disambiguatingDescription: DISAMBIGUATION,
  serviceType: CATEGORY,
  areaServed: "Worldwide",
  knowsAbout: [
    "AI software audit",
    "AI code audit",
    "AI security audit",
    "AI architecture audit",
    "AI agent audit",
    "AI production readiness audit",
    "Vibe code audit",
    "Software architecture review",
    "Application security review",
    "Production readiness review",
  ],
  sameAs: ["https://x.com/VibeCop_io"],
};
