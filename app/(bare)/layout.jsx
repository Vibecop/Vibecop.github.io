import Atmosphere from "@/components/Atmosphere";
import MotionRuntime from "@/components/MotionRuntime";

/*
 * /coming-soon ships without the promo bar, header or footer but it keeps
 * the shared background, so a visitor who lands there sees the same product
 * as the rest of the site rather than a bare black page.
 */
export default function BareLayout({ children }) {
  return (
    <>
      <Atmosphere />
      <main>{children}</main>
      <MotionRuntime />
    </>
  );
}
