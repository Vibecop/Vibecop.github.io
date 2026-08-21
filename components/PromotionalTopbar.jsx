import { BUY_URL } from "@/content/navigation";
import Button from "@/components/ui/Button";

/** The orange strip above the header. */
export default function PromotionalTopbar() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 bg-brand px-4 py-3 text-center">
      <p className="m-0 flex items-center gap-2 text-base font-medium text-white">
        <i className="fa-solid fa-wand-magic-sparkles" aria-hidden="true" />
        Get Vibecop today &amp; Save Up to 26%
      </p>
      <Button href={BUY_URL} target="_blank" rel="noopener noreferrer" variant="invert" size="sm">
        Buy Now
        <i className="fa-solid fa-arrow-right" aria-hidden="true" />
      </Button>
    </div>
  );
}
