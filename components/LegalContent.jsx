import Container from "@/components/ui/Container";

/**
 * Renders a legal page's sections. `prose`-style spacing is set here once so
 * the three pages cannot drift apart.
 */
export default function LegalContent({ sections }) {
  return (
    <section className="site-section py-16 md:py-20 lg:py-25">
      <Container>
        <div className="mx-auto max-w-4xl">
          {sections.map(({ heading, blocks }) => (
            <section key={heading} data-reveal className="mb-12 last:mb-0">
              <h2 className="text-h2 mb-5">{heading}</h2>
              {blocks.map((block, i) =>
                block.list ? (
                  <ul key={i} className="mb-4 list-disc space-y-2 pl-6 text-base text-muted last:mb-0">
                    {block.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p key={i} className="mb-4 text-base text-muted last:mb-0">
                    {block.p}
                  </p>
                )
              )}
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
}
