import PromotionalTopbar from "@/components/PromotionalTopbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

/*
 * The chrome every content page carries. It lives here rather than in each
 * page — the converted pages each rendered their own <Header/> and <Footer/>,
 * which is 23 copies of the same three lines.
 */
export default function SiteLayout({ children }) {
  return (
    <>
      {/* <PromotionalTopbar /> */}
      <Header />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}
