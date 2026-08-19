import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Pricing | Opzio — SaaS & AI Startup Solutions for Smart Businesses",
};

export default function PricingPage() {
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
              Pricing
            </h1>
            {' '}
            <p className="text-white">
              {' '}
              Fixed-scope projects. No monthly fees. You own the
              {' '}
              <br />
              {' '}
              workflows.
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
                <li className="breadcrumb-item active" aria-current="page">
                  {' '}
                  Pricing
                  {' '}
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
      {/* INVESTMENT SECTION */}
      {' '}
      <section
        className="float-left w-100 position-relative investment-con padding-top padding-bottom main-box"
      >
        {' '}
        <figure>
          {' '}
          <img
            src="/assets/images/work-cost-vector.png"
            alt="work cost vector"
            className="img-fluid position-absolute work-cost-vector"
          />
          {' '}
        </figure>
        {' '}
        <div className="main-container">
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
              Investment Built on ROI
              {' '}
            </h2>
            {' '}
            <p className="wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.05s">
              {' '}
              Fixed-scope projects. No monthly fees. You own the code.
              {' '}
            </p>
            {' '}
          </div>
          {' '}
          <div className="row">
            {' '}
            <div
              className="col-lg-4 col-md-6 d-flex wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.05s"
            >
              {' '}
              <div className="investment-box w-100 position-relative">
                {' '}
                <figure>
                  {' '}
                  <img
                    src="/assets/images/investment-icon1.png"
                    alt="investment icon"
                    className="img-fluid"
                  />
                  {' '}
                </figure>
                {' '}
                <span className="d-block plan-name text-white">
                  Starter
                </span>
                {' '}
                <h3 className="text-size-46">
                  {' '}
                  <span className="d-inline-block text-white text-size-24">
                    $
                  </span>
                  1,995
                  {' '}
                </h3>
                {' '}
                <p>
                  Best for single bottlenecks
                </p>
                {' '}
                <ul className="list-unstyled p-0">
                  {' '}
                  <li className="position-relative">
                    {' '}
                    <i className="fa-solid fa-check"></i>
                    {' '}
                    2 Core Pipelines
                    {' '}
                  </li>
                  {' '}
                  <li className="position-relative">
                    {' '}
                    <i className="fa-solid fa-check"></i>
                    {' '}
                    Standard API Connects
                    {' '}
                  </li>
                  {' '}
                  <li className="position-relative">
                    {' '}
                    <i className="fa-solid fa-check"></i>
                    {' '}
                    14 Day Delivery
                    {' '}
                  </li>
                  {' '}
                  {' '}
                </ul>
                {' '}
                <Link href="/pricing" className="primary_btn d-inline-block">
                  {' '}
                  Select Plan
                  {' '}
                </Link>
                {' '}
                {/* investment box */}
                {' '}
              </div>
              {' '}
              {/* col */}
              {' '}
            </div>
            {' '}
            <div
              className="col-lg-4 col-md-6 d-flex wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.05s"
            >
              {' '}
              <div className="investment-box w-100 position-relative">
                {' '}
                <figure>
                  {' '}
                  <img
                    src="/assets/images/investment-icon2.png"
                    alt="investment icon"
                    className="img-fluid"
                  />
                  {' '}
                </figure>
                {' '}
                <span className="d-block plan-name text-white">
                  Growth
                </span>
                {' '}
                <h3 className="text-size-46">
                  {' '}
                  <span className="d-inline-block text-white text-size-24">
                    $
                  </span>
                  4,495
                  {' '}
                </h3>
                {' '}
                <p>
                  Complete department automation
                </p>
                {' '}
                <ul className="list-unstyled p-0">
                  {' '}
                  <li className="position-relative">
                    {' '}
                    <i className="fa-solid fa-check"></i>
                    {' '}
                    5 Complex Pipelines
                    {' '}
                  </li>
                  {' '}
                  <li className="position-relative">
                    {' '}
                    <i className="fa-solid fa-check"></i>
                    {' '}
                    Monitoring Dashboard
                    {' '}
                  </li>
                  {' '}
                  <li className="position-relative">
                    {' '}
                    <i className="fa-solid fa-check"></i>
                    {' '}
                    Priority Maintenance
                    {' '}
                  </li>
                  {' '}
                  {' '}
                </ul>
                {' '}
                <Link href="/pricing" className="primary_btn d-inline-block">
                  {' '}
                  Select Plan
                  {' '}
                </Link>
                {' '}
                {/* investment box */}
                {' '}
              </div>
              {' '}
              {/* col */}
              {' '}
            </div>
            {' '}
            <div
              className="col-lg-4 col-md-6 d-flex wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.05s"
            >
              {' '}
              <div className="investment-box w-100 position-relative">
                {' '}
                <figure>
                  {' '}
                  <img
                    src="/assets/images/investment-icon3.png"
                    alt="investment icon"
                    className="img-fluid"
                  />
                  {' '}
                </figure>
                {' '}
                <span className="d-block plan-name text-white">
                  Scale
                </span>
                {' '}
                <h3 className="text-size-46">
                  {' '}
                  <span className="d-inline-block text-white text-size-24">
                    $
                  </span>
                  6,854
                  {' '}
                </h3>
                {' '}
                <p>
                  Enterprise-wide automation
                </p>
                {' '}
                <ul className="list-unstyled p-0">
                  {' '}
                  <li className="position-relative">
                    {' '}
                    <i className="fa-solid fa-check"></i>
                    {' '}
                    10+ Custom Pipes
                    {' '}
                  </li>
                  {' '}
                  <li className="position-relative">
                    {' '}
                    <i className="fa-solid fa-check"></i>
                    {' '}
                    RPA Bridge for Legacy
                    {' '}
                  </li>
                  {' '}
                  <li className="position-relative">
                    {' '}
                    <i className="fa-solid fa-check"></i>
                    {' '}
                    SLA Guarantee
                    {' '}
                  </li>
                  {' '}
                  {' '}
                </ul>
                {' '}
                <Link href="/pricing" className="primary_btn d-inline-block">
                  {' '}
                  Select Plan
                  {' '}
                </Link>
                {' '}
                {/* investment box */}
                {' '}
              </div>
              {' '}
              {/* col */}
              {' '}
            </div>
            {' '}
            {/* row */}
            {' '}
          </div>
          {' '}
          {/* main container */}
          {' '}
        </div>
        {' '}
        {/* investment-con */}
        {' '}
      </section>
      {' '}
      {/* FAQ SECTION */}
      {' '}
      <section
        className="float-left w-100 faq-con position-relative padding-top padding-bottom main-box"
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
      <section className="float-left w-100 position-relative cta-con main-box padding-top">
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
