import Button from "@/components/ui/Button";

/** The investor aside that sits under the pricing cards on home and /pricing. */
export default function InvestorCard({ className }) {
  return (
    <div data-reveal className={`vc-card mx-auto max-w-3xl p-8 text-center ${className ?? ""}`}>
      <h3 className="text-2xl font-semibold text-white">Are you an investor?</h3>
      <p className="mt-3 text-base text-muted">
        Hop on a discovery call to discuss technical due diligence.
      </p>
      <Button href="/contact" className="mt-6">
        Contact us
      </Button>
    </div>
  );
}
