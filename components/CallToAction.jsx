import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AuditButton from "@/components/AuditButton";
import { BOOK_CALL_URL } from "@/content/navigation";

/** The closing band most pages end on. */
export default function CallToAction({
  title = (
    <>
      Build with
      <br />
      confidence.
    </>
  ),
  lede = "AI builds the product. Vibecop makes sure it won’t break in production, fail under scale, or expose your users to risk. One audit. Fewer expensive surprises.",
  /* no href → the audit application modal; pass one to link instead */
  action = { label: "Request an audit" },
}) {
  return (
    <section className="cta-reference py-16 md:py-20 lg:py-25">
      <Container>
        <div
          data-reveal="scale"
          className="cta-reference-panel grid items-center gap-10 rounded-3xl p-8 md:p-12 lg:grid-cols-2 lg:p-16"
        >
          <img
            src="/assets/images/special-img.png"
            alt=""
            aria-hidden="true"
            className="vc-float-slow mx-auto w-full max-w-md"
          />
          <div>
            <h2 className="text-h1">{title}</h2>
            <p className="mt-5 max-w-md text-lg text-white/90">{lede}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              {action.href ? (
                <Button href={action.href} size="lg">
                  {action.label}
                </Button>
              ) : (
                <AuditButton size="lg">{action.label}</AuditButton>
              )}
              <Button
                href={BOOK_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
              >
                Book a call
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
