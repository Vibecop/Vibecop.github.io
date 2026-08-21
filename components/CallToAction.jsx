import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

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
  action = { href: "/contact", label: "Book an Automation Audit" },
}) {
  return (
    <section className="py-16 md:py-20 lg:py-25">
      <Container>
        <div className="grid items-center gap-10 rounded-3xl border border-white/10 bg-surface-2 p-8 md:p-12 lg:grid-cols-2 lg:p-16">
          <img
            src="/assets/images/cta-img.png"
            alt=""
            aria-hidden="true"
            className="mx-auto w-full max-w-md"
          />
          <div>
            <h2 className="text-h1">{title}</h2>
            <p className="mt-5 max-w-md text-lg text-white/90">{lede}</p>
            <Button href={action.href} size="lg" className="mt-8">
              {action.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
