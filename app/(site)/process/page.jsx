import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Process | Opzio — SaaS & AI Startup Solutions for Smart Businesses",
};

export default function ProcessPage() {
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
              Process
            </h1>
            {' '}
            <p className="text-white">
              {' '}
              From discovery to deployment, see how we design and
              {' '}
              <br />
              {' '}
              deliver automation pipelines.
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
                  {' '}
                  Process
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
      {/* VELOCITY PLAN SECTION */}
      {' '}
      <section
        className="float-left w-100 position-relative velocity-plan-con padding-top padding-bottom"
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
                    The 14-Day Velocity Plan of Us
                    {' '}
                  </h2>
                  {' '}
                </div>
                {' '}
                <div className="velocity-left-con position-relative">
                  {' '}
                  <div className="wf-item">
                    {' '}
                    <div className="wf-img">
                      {' '}
                      <img src="/assets/images/wf-circle.png" alt="circle" className="img-fluid" />
                      {' '}
                    </div>
                    {' '}
                    <div className="wf-content">
                      {' '}
                      <h3>
                        Days 1-2: Friction Audit
                      </h3>
                      {' '}
                      <p>
                        {' '}
                        We deep-dive into your tech stack to identify the manual bottlenecks slowing you down.
                        {' '}
                      </p>
                      {' '}
                    </div>
                    {' '}
                  </div>
                  {' '}
                  <div className="wf-item">
                    {' '}
                    <div className="wf-img">
                      {' '}
                      <img src="/assets/images/wf-circle.png" alt="circle" className="img-fluid" />
                      {' '}
                    </div>
                    {' '}
                    <div className="wf-content">
                      {' '}
                      <h3>
                        Days 3-7: Pipe Architecture
                      </h3>
                      {' '}
                      <p>
                        {' '}
                        We build the logic layers in a secure sandbox. No interruptions to your live workflows.
                        {' '}
                      </p>
                      {' '}
                    </div>
                    {' '}
                  </div>
                  {' '}
                  <div className="wf-item">
                    {' '}
                    <div className="wf-img">
                      {' '}
                      <img src="/assets/images/wf-circle.png" alt="circle" className="img-fluid" />
                      {' '}
                    </div>
                    {' '}
                    <div className="wf-content">
                      {' '}
                      <h3>
                        Days 8-12: Stress Testing
                      </h3>
                      {' '}
                      <p>
                        {' '}
                        Rigorous testing across edge cases to ensure data integrity and 99.9% uptime.
                        {' '}
                      </p>
                      {' '}
                    </div>
                    {' '}
                  </div>
                  {' '}
                  <div className="wf-item mb-0">
                    {' '}
                    <div className="wf-img">
                      {' '}
                      <img src="/assets/images/wf-check.png" alt="check" className="img-fluid" />
                      {' '}
                    </div>
                    {' '}
                    <div className="wf-content">
                      {' '}
                      <h3>
                        Day 14: Final Handoff
                      </h3>
                      {' '}
                      <p>
                        Your automated pipeline goes live.
                      </p>
                      {' '}
                    </div>
                    {' '}
                  </div>
                  {' '}
                </div>
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
      {/* AUTOMATION RESULT SECTION */}
      {' '}
      <section
        className="float-left w-100 position-relative automation-result-con padding-top padding-bottom main-box"
      >
        {' '}
        <div className="container">
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
              Handoff kit
              {' '}
            </h2>
            {' '}
            <p className="wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.05s">
              {' '}
              Everything you need to understand, manage, and confidently maintain your automation workflows.
              {' '}
            </p>
            {' '}
          </div>
          {' '}
          <div className="row position-relative">
            {' '}
            <div
              className="col-lg-4 col-md-6 d-flex wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.05s"
            >
              {' '}
              <div className="automate-box w-100 text-center">
                {' '}
                <figure>
                  {' '}
                  <img
                    src="/assets/images/handoff-kit-icon1.png"
                    alt="automation"
                    className="img-fluid"
                  />
                  {' '}
                </figure>
                {' '}
                <h3 className="text-size-24">
                  Docs
                </h3>
                {' '}
                <p className="mb-0">
                  Step-by-step and troubleshooting.
                </p>
                {' '}
                {/* automate box */}
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
              <div className="automate-box w-100 text-center">
                {' '}
                <figure>
                  {' '}
                  <img
                    src="/assets/images/handoff-kit-icon2.png"
                    alt="automation"
                    className="img-fluid"
                  />
                  {' '}
                </figure>
                {' '}
                <h3 className="text-size-24">
                  Diagrams
                </h3>
                {' '}
                <p className="mb-0">
                  Flow and connection maps.
                </p>
                {' '}
                {/* automate box */}
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
              <div className="automate-box w-100 text-center">
                {' '}
                <figure>
                  {' '}
                  <img
                    src="/assets/images/handoff-kit-icon3.png"
                    alt="automation"
                    className="img-fluid"
                  />
                  {' '}
                </figure>
                {' '}
                <h3 className="text-size-24">
                  Training
                </h3>
                {' '}
                <p className="mb-0">
                  Walkthrough and Q&A session.
                </p>
                {' '}
                {/* automate box */}
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
        {/* opzio-shift-con */}
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
