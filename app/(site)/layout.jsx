import PromotionalTopbar from "@/components/PromotionalTopbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import MotionRuntime from "@/components/MotionRuntime";
import Atmosphere from "@/components/Atmosphere";
import { AuditModalProvider } from "@/components/AuditModal";

/*
 * The chrome every content page carries. It lives here rather than in each
 * page the converted pages each rendered their own <Header/> and <Footer/>,
 * which is 23 copies of the same three lines.
 *
 * <Atmosphere/> is the shared decorative background; <MotionRuntime/> is the
 * one client component that drives every reveal, counter and parallax layer
 * on the page, which is what lets the pages themselves stay server
 * components.
 *
 * <AuditModalProvider/> owns the audit application modal for the same reason:
 * one mounted client boundary, opened from anywhere by <AuditButton/>.
 */
export default function SiteLayout({ children }) {
  return (
    <AuditModalProvider>
      <Atmosphere />

      {/* <PromotionalTopbar /> */}
      <Header />
      <main className="site-main">{children}</main>
      <Footer />
      <BackToTop />
      <MotionRuntime />
    </AuditModalProvider>
  );
}
