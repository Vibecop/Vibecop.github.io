import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "FAQs | Opzio — SaaS & AI Startup Solutions for Smart Businesses",
};

export default function FaqPage() {
  return (
    <>
      {' '}
      {' '}
      {/* Back to top button */}
      {' '}
      {' '}
      {' '}
      <div className="sub-outer-wrapper float-left w-100 position-relative">
        {' '}
        {/* HEADER SECTION */}
        {' '}
        <Header />
        {' '}
        <div className="clearfix"></div>
        {' '}
        {/* BANNER SECTION */}
        {' '}
        <div
          className="float-left w-100 position-relative sub-banner-con main-box text-center"
        >
          {' '}
          <div className="main-container">
            {' '}
            <h1 className="text-size-120">
              FAQs
            </h1>
            {' '}
            <p className="text-white">
              {' '}
              Find clear answers about our automation process, delivery,
              {' '}
              <br />
              {' '}
              and ongoing support.
              {' '}
            </p>
            {' '}
            <div className="breadcrumb-con d-inline-block">
              {' '}
              <ol className="breadcrumb mb-0">
                {' '}
                <li className="breadcrumb-item">
                  <Link href="/">
                    Home
                  </Link>
                </li>
                {' '}
                <li className="breadcrumb-item">
                  <Link href="/">
                    Pages
                  </Link>
                </li>
                {' '}
                <li className="breadcrumb-item active" aria-current="page">
                  FAQs
                </li>
                {' '}
              </ol>
              {' '}
            </div>
            {' '}
            {/* main container */}
            {' '}
          </div>
          {' '}
          {/* banner con */}
          {' '}
        </div>
        {' '}
        {/* home outer wrapper */}
        {' '}
      </div>
      {' '}
      {/* FAQ SECTION */}
      {' '}
      <section
        className="float-left w-100 faq-con position-relative padding-top padding-bottom main-box main-faq-con"
      >
        {' '}
        <div
          className="container wow fadeInDown"
          data-wow-duration="2s"
          data-wow-delay="0.3s"
        >
          {' '}
          <div className="heading-title-con text-center">
            {' '}
            <img
              src="/assets/images/special-img.png"
              alt="special icon"
              className="img-fluid text-center special-image wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.05s"
            />
            {' '}
            <h2
              className="text-size-60 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.05s"
            >
              {' '}
              Frequently Asked Questions
              {' '}
            </h2>
            {' '}
            <p className="wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.05s">
              {' '}
              Clear, straightforward answers about our process, security, and support.
              {' '}
            </p>
            {' '}
          </div>
          {' '}
          <div className="faq wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.05s">
            {' '}
            <div className="accordian-section-inner position-relative">
              {' '}
              <div className="accordian-inner">
                {' '}
                <div id="faq_accordion1">
                  {' '}
                  <div className="row">
                    {' '}
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
                      {' '}
                      <div className="accordion-card">
                        {' '}
                        <div className="card-header" id="headingOne">
                          {' '}
                          <a
                            href="#"
                            className="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            {' '}
                            <h3 className="text-size-20">
                              {' '}
                              Do You Store or Retain Any of Our Business Data?
                              {' '}
                            </h3>
                            {' '}
                          </a>
                          {' '}
                        </div>
                        {' '}
                        <div
                          id="collapseOne"
                          className="collapse"
                          aria-labelledby="headingOne"
                          data-parent="#faq_accordion1"
                          role="region"
                        >
                          {' '}
                          <div className="card-body">
                            {' '}
                            <p className="text-left mb-0">
                              {' '}
                              No, Opzio ensures that all your business and AI data is processed in real-time and never stored beyond necessary processing. We respect your privacy and maintain strict SaaS compliance standards.
                              {' '}
                            </p>
                            {' '}
                          </div>
                          {' '}
                        </div>
                        {' '}
                      </div>
                      {' '}
                      <div className="accordion-card">
                        {' '}
                        <div className="card-header" id="headingTwo">
                          {' '}
                          <a
                            href="#"
                            className="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            {' '}
                            <h3 className="text-size-20">
                              {' '}
                              What Happens After the 14-Day Implementation Is Complete?
                              {' '}
                            </h3>
                            {' '}
                          </a>
                          {' '}
                        </div>
                        {' '}
                        <div
                          id="collapseTwo"
                          className="show collapse"
                          aria-labelledby="headingTwo"
                          data-parent="#faq_accordion1"
                          role="region"
                        >
                          {' '}
                          <div className="card-body">
                            {' '}
                            <p className="text-left mb-0">
                              {' '}
                              At the end of the two-week build, you receive full documentation, system walkthroughs, and a structured handoff. We also provide a 30-day “hyper-care” support period to monitor performance, fine-tune workflows.
                              {' '}
                            </p>
                            {' '}
                          </div>
                          {' '}
                        </div>
                        {' '}
                      </div>
                      {' '}
                      <div className="accordion-card">
                        {' '}
                        <div className="card-header" id="headingThree">
                          {' '}
                          <a
                            href="#"
                            className="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            {' '}
                            <h3 className="text-size-20">
                              {' '}
                              How Do You Handle Integrations With Other SaaS Tools?
                              {' '}
                            </h3>
                            {' '}
                          </a>
                          {' '}
                        </div>
                        {' '}
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="headingThree"
                          data-parent="#faq_accordion1"
                          role="region"
                        >
                          {' '}
                          <div className="card-body">
                            {' '}
                            <p className="text-left mb-0">
                              {' '}
                              Opzio seamlessly connects your workflows with popular SaaS platforms and AI tools, ensuring smooth data flow and automation without any manual intervention. Our team configures and tests integrations to optimize performance and reliability.
                              {' '}
                            </p>
                            {' '}
                          </div>
                          {' '}
                        </div>
                        {' '}
                      </div>
                      {' '}
                      <div className="accordion-card mb-0">
                        {' '}
                        <div className="card-header" id="headingFour">
                          {' '}
                          <a
                            href="#"
                            className="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            {' '}
                            <h3 className="text-size-20">
                              {' '}
                              How Secure Are the Automation Pipelines You Build?
                              {' '}
                            </h3>
                            {' '}
                          </a>
                          {' '}
                        </div>
                        {' '}
                        <div
                          id="collapseFour"
                          className="collapse"
                          aria-labelledby="headingFour"
                          data-parent="#faq_accordion1"
                          role="region"
                        >
                          {' '}
                          <div className="card-body">
                            {' '}
                            <p className="text-left mb-0">
                              {' '}
                              Our automation pipelines are fully encrypted and adhere to top SaaS security standards, ensuring your startup data and AI models are protected.
                              {' '}
                            </p>
                            {' '}
                          </div>
                          {' '}
                        </div>
                        {' '}
                      </div>
                      {' '}
                    </div>
                    {' '}
                  </div>
                  {' '}
                </div>
                {' '}
              </div>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* CTA SECTION */}
      {' '}
      <section className="float-left w-100 position-relative cta-con main-box">
        {' '}
        <div className="main-container">
          {' '}
          <div
            className="cta-inner-con position-relative d-flex align-items-center justify-content-center"
          >
            {' '}
            <figure className="z-1 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.05s">
              {' '}
              <img src="/assets/images/cta-img.png" alt="workflow" className="img-fluid" />
              {' '}
            </figure>
            {' '}
            <div
              className="cta-right-con wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.05s"
            >
              {' '}
              <h2 className="text-size-80">
                {' '}
                Show us One
                {' '}
                <br />
                {' '}
                Messy Workflow.
                {' '}
              </h2>
              {' '}
              <p className="text-white">
                {' '}
                We’ll turn it into a clean, automated pipeline in just 14 days.
                {' '}
              </p>
              {' '}
              <Link href="/contact" className="primary_btn">
                {' '}
                Book an Automation Audit
                {' '}
              </Link>
              {' '}
              {/* cta right con */}
              {' '}
            </div>
            {' '}
          </div>
          {' '}
          {' '}
        </div>
        {' '}
        {/* cta con */}
        {' '}
      </section>
      {' '}
      {/* FOOTER SECTION */}
      {' '}
      <Footer />
      {' '}
      {/* PRE LOADER */}
      {' '}
      <div className="loader-mask">
        {' '}
        <div className="loader">
          {' '}
          <div></div>
          {' '}
          <div></div>
          {' '}
        </div>
        {' '}
      </div>
      {' '}
      {/* Latest compiled JavaScript */}
      {' '}
      {' '}
      {' '}
      {' '}
      {' '}
      {' '}
      {' '}
      {' '}
      {' '}
      {' '}
      {' '}
    </>
  );
}
