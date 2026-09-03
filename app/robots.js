/* `output: "export"` has no server to call this at request time. */
export const dynamic = "force-static";

/*
 * robots.txt, generated at build time into dist/.
 *
 * Everything is open to everyone, including every AI crawler we know a token
 * for. Naming them individually is not redundant with `User-agent: *`: several
 * (Google-Extended, Applebot-Extended) exist *only* as opt-out switches, and an
 * explicit Allow is how you say "yes, use this" rather than leaving it to a
 * default that may change. Being quotable by an assistant is distribution for a
 * consultancy, so we take it.
 *
 * ponytail: one shared rule object rather than a per-bot list each of these
 * gets identical treatment, and a list that says the same thing 20 times is a
 * list that drifts. Split a bot out only when it needs different rules.
 */
const AI_CRAWLERS = [
  "GPTBot", "ChatGPT-User", "OAI-SearchBot",                 // OpenAI
  "ClaudeBot", "Claude-User", "Claude-SearchBot", "anthropic-ai", // Anthropic
  "PerplexityBot", "Perplexity-User",                        // Perplexity
  "Google-Extended",                                          // Gemini training
  "Applebot", "Applebot-Extended",                            // Apple Intelligence
  "meta-externalagent", "FacebookBot",                        // Meta
  "Bytespider",                                               // ByteDance
  "CCBot",                                                    // Common Crawl
  "cohere-ai", "Amazonbot", "DuckAssistBot", "MistralAI-User",
];

/* Kit leftovers: duplicate layout demos and an unlinked placeholder. Crawlable
   if someone follows a link, but kept out of search results. */
const DISALLOW = [
  "/one-column",
  "/two-column",
  "/three-column",
  "/three-column-sidebar",
  "/four-column",
  "/six-column-full-width",
  "/coming-soon",
];

export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      { userAgent: AI_CRAWLERS, allow: "/", disallow: DISALLOW },
    ],
    sitemap: "https://vibecop.io/sitemap.xml",
    host: "https://vibecop.io",
  };
}
