import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AuditButton from "@/components/AuditButton";

/** The closing band most pages end on. */
export default function CallToAction({
  title = (
    <>
      Show us One
      <br />
      Messy Workflow.
    </>
  ),
  lede = "We’ll turn it into a clean, automated pipeline in just 14 days.",
  /* no href → the audit application modal; pass one to link instead */
  action = { label: "Book an Automation Audit" },
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
            {action.href ? (
              <Button href={action.href} size="lg" className="mt-8">
                {action.label}
              </Button>
            ) : (
              <AuditButton size="lg" className="mt-8">
                {action.label}
              </AuditButton>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
