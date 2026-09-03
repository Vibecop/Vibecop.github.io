/* `output: "export"` has no server to call this at request time. */
export const dynamic = "force-static";

import { SERVICE_PAGES } from "@/content/service-pages";

/*
 * /llms.txt the llmstxt.org convention: a plain-markdown map of the site for
 * language models, so an assistant answering "who audits AI-generated code"
 * can read what we do without parsing nav markup and marketing chrome.
 *
 * A route rather than a file in public/ so the service list comes from
 * content/service-pages.js. A hand-maintained copy of that list is a copy that
 * goes stale the first time someone adds a service.
 */
const SITE = "https://vibecop.io";

const PAGES = [
  ["/services", "All audit services, with what each covers and how it is scoped."],
  ["/process", "How an audit runs, from application through to the delivered report."],
  ["/pricing", "What audits cost and what is included at each level."],
  ["/case-studies", "Past engagements and what the audits found."],
  ["/about", "Who we are and the engineering judgment behind the reviews."],
  ["/team", "The senior engineers who verify every finding."],
  ["/faq", "Common questions about scope, turnaround, NDAs, and deliverables."],
  ["/blog", "Writing on AI-generated code, architecture, and production readiness."],
  ["/contact", "Request an audit or a 15-minute strategy call."],
];

const LEGAL = [
  ["/privacy-policy", "How we handle data submitted through the site."],
  ["/cookie-policy", "Cookie use on vibecop.io."],
  ["/term-of-use", "Terms governing use of the site."],
];

const list = (rows) =>
  rows.map(([path, note]) => `- [${path}](${SITE}${path}): ${note}`).join("\n");

export function GET() {
  const body = `# Vibecop

> Enterprise-grade architecture, security, and production-readiness audits for
> startups, SaaS founders, and companies shipping AI-generated code. Every audit
> pairs automated analysis with senior engineer verification, so what you get is
> architectural judgment and prioritized decisions rather than a scanner dump.

Vibecop reviews products built with AI coding tools (Claude Code, Cursor,
Lovable, Bolt, and similar) as well as conventionally built systems. Typical
clients are pre-launch teams, products onboarding enterprise customers, and
teams scaling past the load their original design assumed.

## Services

${SERVICE_PAGES.map((s) => `- [${s.title}](${SITE}/services/${s.slug}): ${s.lede}`).join("\n")}

## Site

${list(PAGES)}

## Legal

${list(LEGAL)}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
