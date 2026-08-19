import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Single Services | Opzio — SaaS & AI Startup Solutions for Smart Businesses",
};

export default function SingleServicesPage() {
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
              Single Service
            </h1>
            {' '}
            <p className="text-white">
              {' '}
              From form or email to CRM and calendar—first response in minutes,
              <br />
              {' '}
              not hours.
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
                  {' '}
                  <Link href="/services">
                    Services
                  </Link>
                  {' '}
                </li>
                {' '}
                <li className="breadcrumb-item active" aria-current="page">
                  {' '}
                  Service Detail
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
      {/* SCOPE BUILDER SECTION */}
      {' '}
      <section
        className="float-left w-100 position-relative scope-builder-con padding-top padding-botom main-box"
      >
        {' '}
        <figure>
          {' '}
          <img
            src="/assets/images/work-cost-vector.png"
            alt="work cost vector"
            className="img-fluid position-absolute scope-builder-vector"
          />
          {' '}
        </figure>
        {' '}
        <div className="main-container">
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
                Scope Builder
                {' '}
              </h2>
              {' '}
              <p
                className="text-color wow fadeInLeft"
                data-wow-duration="2s"
                data-wow-delay="0.05s"
              >
                {' '}
                Pick your triggers, tools, and outputs. We'll give you a build sheet.
                {' '}
              </p>
              {' '}
            </div>
            {' '}
            <div
              className="find-box wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.05s"
            >
              {' '}
              <div className="form-group">
                {' '}
                <label htmlFor="triggerSelect">
                  Trigger
                </label>
                {' '}
                <select id="triggerSelect">
                  {' '}
                  <option>
                    Form Submission
                  </option>
                  {' '}
                  <option>
                    Website Visit
                  </option>
                  {' '}
                </select>
                {' '}
              </div>
              {' '}
              <div className="form-group">
                {' '}
                <label>
                  Tools (we connect)
                </label>
                {' '}
                <div className="tools-box">
                  {' '}
                  <button className="tool-btn active" data-value="HubSpot">
                    {' '}
                    HubSpot
                    {' '}
                  </button>
                  {' '}
                  <button className="tool-btn" data-value="Calendly">
                    Calendly
                  </button>
                  {' '}
                  <button className="tool-btn" data-value="Slack">
                    Slack
                  </button>
                  {' '}
                </div>
                {' '}
              </div>
              {' '}
              <div className="form-group last-cn">
                {' '}
                <label htmlFor="outputSelect">
                  Output
                </label>
                {' '}
                <select id="outputSelect">
                  {' '}
                  <option>
                    CRM lead + calendar link email
                  </option>
                  {' '}
                  <option>
                    Slack Notification
                  </option>
                  {' '}
                </select>
                {' '}
              </div>
              {' '}
              <div className="form-group m-auto text-center">
                {' '}
                <button id="generateBuildBtn">
                  Generate Build Sheet
                </button>
                {' '}
                {/* Result container */}
                {' '}
                <div
                  id="buildResult"
                  style={{ marginTop: "14px", fontSize: "16px", color: "#fff" }}
                ></div>
                {' '}
              </div>
              {' '}
            </div>
            {' '}
            {/* main container */}
            {' '}
          </div>
          {' '}
          {/* main container */}
          {' '}
        </div>
        {' '}
        {/* scope builder con */}
        {' '}
      </section>
      {' '}
      {/* LEAD FLOW AUTOMATION SECTION */}
      {' '}
      <section
        className="float-left w-100 position-relative lead-flow-automation-con padding-top padding-bottom main-box"
      >
        {' '}
        <div className="main-container">
          {' '}
          <div className="row align-items-center">
            {' '}
            <div
              className="col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.05s"
            >
              {' '}
              <div className="lead-flow-img-con">
                {' '}
                <figure>
                  {' '}
                  <img
                    src="/assets/images/lead-flow-automation-img.png"
                    alt="lead flow automation"
                    className="img-fluid"
                  />
                  {' '}
                </figure>
                {' '}
                {/* lead flow img con */}
                {' '}
              </div>
              {' '}
              {/* col */}
              {' '}
            </div>
            {' '}
            {/* col */}
            {' '}
            <div
              className="col-lg-6 col-md-6 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.05s"
            >
              {' '}
              <div className="lead-flow-content-con">
                {' '}
                <div className="heading-title-con mb-0">
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
                    What includes in Lead
                    {' '}
                    <br />
                    {' '}
                    Flow Automation
                    {' '}
                  </h2>
                  {' '}
                  <p className="wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.05s">
                    {' '}
                    From form or email to CRM and calendar—first response in minutes, not hours.
                    {' '}
                  </p>
                  {' '}
                  <ul className="list-unstyled p-0">
                    {' '}
                    <li className="position-relative">
                      {' '}
                      <i className="fa-solid fa-check"></i>
                      Trigger-to-CRM flow (form or email) with field mapping
                      {' '}
                    </li>
                    {' '}
                    <li className="position-relative">
                      {' '}
                      <i className="fa-solid fa-check"></i>
                      {' '}
                      Auto-send calendar or follow-up email (compliant)
                      {' '}
                    </li>
                    {' '}
                    <li className="position-relative">
                      {' '}
                      <i className="fa-solid fa-check"></i>
                      {' '}
                      Optional: enrichment, round-robin assign, Slack/Teams alert
                      {' '}
                    </li>
                    {' '}
                    <li className="position-relative">
                      {' '}
                      <i className="fa-solid fa-check"></i>
                      Documentation and handover
                      {' '}
                    </li>
                    {' '}
                  </ul>
                  {' '}
                  <Link href="/contact" className="primary_btn d-inline-block">
                    {' '}
                    Book an Automation Audit
                    {' '}
                  </Link>
                  {' '}
                </div>
                {' '}
                {/* lead flow content con */}
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
      </section>
      {' '}
      {/* WORK WITH YOUR STACK SECTION */}
      {' '}
      <section
        className="float-left w-100 position-relative work-with-stack-con padding-top padding-bottom main-box"
      >
        {' '}
        <div className="main-container">
          {' '}
          <div className="row align-items-center">
            {' '}
            <div
              className="col-lg-7 col-md-7 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.05s"
            >
              {' '}
              <div className="stack-content-con">
                {' '}
                <div className="heading-title-con mb-0">
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
                    Works With Your Stack
                    {' '}
                  </h2>
                  {' '}
                  <p className="wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.05s">
                    {' '}
                    HubSpot, Salesforce, Pipedrive, Zoho, Monday. Zapier/Make. Calendly, Cal.com.
                    {' '}
                    <br />
                    {' '}
                    Slack, Teams.
                    {' '}
                  </p>
                  {' '}
                  <Link href="/single-services" className="primary_btn d-inline-block">
                    {' '}
                    Check My Tools
                    {' '}
                  </Link>
                  {' '}
                </div>
                {' '}
                {/* stack content con */}
                {' '}
              </div>
              {' '}
              {/* col */}
              {' '}
            </div>
            {' '}
            <div
              className="col-lg-5 col-md-5 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.05s"
            >
              {' '}
              <div className="stack-img-con">
                {' '}
                <figure>
                  {' '}
                  <img src="/assets/images/stack-img.png" alt="stack image" className="img-fluid" />
                  {' '}
                </figure>
                {' '}
                {/* stack img con */}
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
        {/* work-with-stack-con */}
        {' '}
      </section>
      {' '}
      {/* HOW IT WORKS SECTION */}
      {' '}
      <section
        className="float-left w-100 position-relative velocity-plan-con padding-top padding-bottom how-it-works-con"
      >
        {' '}
        <div className="main-container">
          {' '}
          <div className="row align-items-center">
            {' '}
            <div
              className="col-lg-7 col-md-7 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.05s"
            >
              {' '}
              <div className="velocity-img-con position-relative">
                {' '}
                <figure>
                  {' '}
                  <img
                    src="/assets/images/velocity-plan-img.png"
                    alt="velocity plan"
                    className="img-fluid z-1 position-relative"
                  />
                  {' '}
                </figure>
                {' '}
                {/* velocity img con */}
                {' '}
              </div>
              {' '}
              {/* col */}
              {' '}
            </div>
            {' '}
            <div
              className="col-lg-5 col-md-5 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.05s"
            >
              {' '}
              <div className="velocity-content-con">
                {' '}
                <div className="heading-title-con">
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
                    How it works
                    {' '}
                  </h2>
                  {' '}
                </div>
                {' '}
                <div className="velocity-left-con position-relative">
                  {' '}
                  <div className="wf-item">
                    {' '}
                    <div className="wf-circle">
                      01
                    </div>
                    {' '}
                    <div className="wf-content">
                      {' '}
                      <h3>
                        Audit
                      </h3>
                      {' '}
                      <p>
                        {' '}
                        We map your form/email source, CRM, and desired outcome.
                        {' '}
                      </p>
                      {' '}
                    </div>
                    {' '}
                  </div>
                  {' '}
                  <div className="wf-item">
                    {' '}
                    <div className="wf-circle">
                      02
                    </div>
                    {' '}
                    <div className="wf-content">
                      {' '}
                      <h3>
                        Build
                      </h3>
                      {' '}
                      <p>
                        We build and test in sandbox. No impact on live data.
                      </p>
                      {' '}
                    </div>
                    {' '}
                  </div>
                  {' '}
                  <div className="wf-item mb-0">
                    {' '}
                    <div className="wf-circle">
                      03
                    </div>
                    {' '}
                    <div className="wf-content">
                      {' '}
                      <h3>
                        QA & launch
                      </h3>
                      {' '}
                      <p>
                        You approve. We go live and hand over docs.
                      </p>
                      {' '}
                    </div>
                    {' '}
                  </div>
                  {' '}
                </div>
                {' '}
                <Link href="/services" className="primary_btn d-inline-block">
                  {' '}
                  Start this Service
                  {' '}
                </Link>
                {' '}
                {/* velocity-content con */}
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
        {/* velocity plan con */}
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
      <section className="float-left w-100 position-relative cta-con padding-top main-box">
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
