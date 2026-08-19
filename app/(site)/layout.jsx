import PromotionalTopbar from "@/components/PromotionalTopbar";
import BackToTop from "@/components/BackToTop";

/* Every content page in the kit opens with the promo bar and the back-to-top
 * anchor, in this order, before its own outer wrapper. */
export default function SiteLayout({ children }) {
  return (
    <>
      <PromotionalTopbar />
      {/* Back to top button */}
      <BackToTop />
      {children}
    </>
  );
}
