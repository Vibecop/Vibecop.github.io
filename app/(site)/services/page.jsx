import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services | Opzio — SaaS & AI Startup Solutions for Smart Businesses",
};

export default function ServicesPage() {
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
              Services
            </h1>
            {' '}
            <p className="text-white">
              {' '}
              Outcome-first automation across ops, sales, e-commerce, and data.
              {' '}
              <br />
              {' '}
              Pick one or combine.
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
                  Services
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
      {/* FIND YOUR FIT SECTION */}
      {' '}
      <section
        className="float-left w-100 position-relative find-your-fit-con padding-top paadding-bottom main-box"
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
              Find Your Fit
              {' '}
            </h2>
            {' '}
            <p
              className="text-color wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.05s"
            >
              {' '}
              Discover the automation solutions that match your team’s workflow and goals.
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
              <label htmlFor="pain">
                What's your biggest pain right now?
              </label>
              {' '}
              <select id="pain">
                {' '}
                <option>
                  Manual data entry / copy-paste between tools
                </option>
                {' '}
                <option>
                  Other Pain Point
                </option>
                {' '}
              </select>
              {' '}
            </div>
            {' '}
            <div className="form-group">
              {' '}
              <label htmlFor="handle-time">
                Avg. handle time (min)
              </label>
              {' '}
              <select id="handle-time">
                {' '}
                <option>
                  1 - 5
                </option>
                {' '}
                <option>
                  5 - 10
                </option>
                {' '}
              </select>
              {' '}
            </div>
            {' '}
            <div className="form-group last-cn">
              {' '}
              <label htmlFor="return-rate">
                Return rate (%)
              </label>
              {' '}
              <select id="return-rate">
                {' '}
                <option>
                  Within 2 weeks
                </option>
                {' '}
                <option>
                  Within 1 month
                </option>
                {' '}
              </select>
              {' '}
            </div>
            {' '}
            <div className="form-group m-auto text-center">
              {' '}
              <button id="get-recommendation">
                Get a recommendation
              </button>
              {' '}
              {/* Result container */}
              {' '}
              <div
                id="recommendation-result"
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
        {/* find your fit con */}
        {' '}
      </section>
      {' '}
      {/* BLUEPRINTS SECTION */}
      {' '}
      <section
        className="float-left w-100 position-relative blueprints-con padding-top main-box"
      >
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
              Core Opzio Blueprints
              {' '}
            </h2>
            {' '}
          </div>
          {' '}
          <div className="row">
            {' '}
            <div
              className="col-lg-6 col-md-6 d-flex wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.03s"
            >
              {' '}
              <div
                className="blueprints-box w-100 d-flex align-items-center justify-content-between"
              >
                {' '}
                <div className="blueprint-content">
                  {' '}
                  <span className="blueprint-tag">
                    12h/wk
                  </span>
                  {' '}
                  <h3 className="text-size-28 text-white">
                    Invoicing
                  </h3>
                  {' '}
                  <ul className="list-unstyled p-0">
                    {' '}
                    <li className="font-weight-bold text-white">
                      {' '}
                      Trigger:
                      {' '}
                      <span className="d-inline-block font-weight-500 text-color">
                        Receipt Email
                      </span>
                      {' '}
                    </li>
                    {' '}
                    <li className="font-weight-bold text-white">
                      {' '}
                      Output:
                      {' '}
                      <span className="d-inline-block font-weight-500 text-color">
                        Ledger Entry
                      </span>
                      {' '}
                    </li>
                    {' '}
                    <li className="font-weight-bold text-white">
                      {' '}
                      KPI:
                      {' '}
                      <span className="d-inline-block font-weight-500 text-color">
                        100% Data Accuracy
                      </span>
                      {' '}
                    </li>
                    {' '}
                    {' '}
                  </ul>
                  {' '}
                  <Link href="/process" className="d-inline-block">
                    Pipeline Specs
                    {' '}
                    <i className="fa-solid fa-arrow-right ml-2"></i>
                  </Link>
                  {' '}
                  {/* blueprint content */}
                  {' '}
                </div>
                {' '}
                <figure className="position-relative z-1">
                  {' '}
                  <img src="/assets/images/blueprint-img1.png" alt="bluepritnt" className="img-fluid" />
                  {' '}
                </figure>
                {' '}
                {/* blueprints box */}
                {' '}
              </div>
              {' '}
              {/* col */}
              {' '}
            </div>
            {' '}
            <div
              className="col-lg-6 col-md-6 d-flex wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.04s"
            >
              {' '}
              <div
                className="blueprints-box w-100 d-flex align-items-center justify-content-between"
              >
                {' '}
                <div className="blueprint-content">
                  {' '}
                  <span className="blueprint-tag">
                    8h/wk
                  </span>
                  {' '}
                  <h3 className="text-size-28 text-white">
                    Lead Flow
                  </h3>
                  {' '}
                  <ul className="list-unstyled p-0">
                    {' '}
                    <li className="font-weight-bold text-white">
                      {' '}
                      Trigger:
                      {' '}
                      <span className="d-inline-block font-weight-500 text-color">
                        Form Submission
                      </span>
                      {' '}
                    </li>
                    {' '}
                    <li className="font-weight-bold text-white">
                      {' '}
                      Output:
                      {' '}
                      <span className="d-inline-block font-weight-500 text-color">
                        CRM Lead Card
                      </span>
                      {' '}
                    </li>
                    {' '}
                    <li className="font-weight-bold text-white">
                      {' '}
                      KPI:
                      {' '}
                      <span className="d-inline-block font-weight-500 text-color">
                        {' '}
                        1m Turnaround
                        {' '}
                      </span>
                      {' '}
                    </li>
                    {' '}
                    {' '}
                  </ul>
                  {' '}
                  <Link href="/process" className="d-inline-block">
                    Pipeline Specs
                    {' '}
                    <i className="fa-solid fa-arrow-right ml-2"></i>
                  </Link>
                  {' '}
                  {/* blueprint content */}
                  {' '}
                </div>
                {' '}
                <figure className="position-relative z-1">
                  {' '}
                  <img src="/assets/images/blueprint-img2.png" alt="bluepritnt" className="img-fluid" />
                  {' '}
                </figure>
                {' '}
                {/* blueprints box */}
                {' '}
              </div>
              {' '}
              {/* col */}
              {' '}
            </div>
            {' '}
            <div
              className="col-lg-6 col-md-6 d-flex wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.05s"
            >
              {' '}
              <div
                className="blueprints-box w-100 d-flex align-items-center justify-content-between"
              >
                {' '}
                <div className="blueprint-content">
                  {' '}
                  <span className="blueprint-tag">
                    15h/wk
                  </span>
                  {' '}
                  <h3 className="text-size-28 text-white">
                    Customer Ops
                  </h3>
                  {' '}
                  <ul className="list-unstyled p-0">
                    {' '}
                    <li className="font-weight-bold text-white">
                      {' '}
                      Trigger:
                      {' '}
                      <span className="d-inline-block font-weight-500 text-color">
                        Ticket Received
                      </span>
                      {' '}
                    </li>
                    {' '}
                    <li className="font-weight-bold text-white">
                      {' '}
                      Output:
                      {' '}
                      <span className="d-inline-block font-weight-500 text-color">
                        {' '}
                        Smart Triage
                      </span>
                      {' '}
                    </li>
                    {' '}
                    <li className="font-weight-bold text-white">
                      {' '}
                      KPI:
                      {' '}
                      <span className="d-inline-block font-weight-500 text-color">
                        {' '}
                        70% Self-Resolved
                        {' '}
                      </span>
                      {' '}
                    </li>
                    {' '}
                    {' '}
                  </ul>
                  {' '}
                  <Link href="/process" className="d-inline-block">
                    Pipeline Specs
                    {' '}
                    <i className="fa-solid fa-arrow-right ml-2"></i>
                  </Link>
                  {' '}
                  {/* blueprint content */}
                  {' '}
                </div>
                {' '}
                <figure className="position-relative z-1">
                  {' '}
                  <img src="/assets/images/blueprint-img3.png" alt="bluepritnt" className="img-fluid" />
                  {' '}
                </figure>
                {' '}
                {/* blueprints box */}
                {' '}
              </div>
              {' '}
              {/* col */}
              {' '}
            </div>
            {' '}
            <div
              className="col-lg-6 col-md-6 d-flex wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.06s"
            >
              {' '}
              <div
                className="blueprints-box w-100 d-flex align-items-center justify-content-between"
              >
                {' '}
                <div className="blueprint-content">
                  {' '}
                  <span className="blueprint-tag">
                    5h/wk
                  </span>
                  {' '}
                  <h3 className="text-size-28 text-white">
                    Reporting
                  </h3>
                  {' '}
                  <ul className="list-unstyled p-0">
                    {' '}
                    <li className="font-weight-bold text-white">
                      {' '}
                      Trigger:
                      {' '}
                      <span className="d-inline-block font-weight-500 text-color">
                        Date Threshold
                      </span>
                      {' '}
                    </li>
                    {' '}
                    <li className="font-weight-bold text-white">
                      {' '}
                      Output:
                      {' '}
                      <span className="d-inline-block font-weight-500 text-color">
                        {' '}
                        PDF Dashboard
                      </span>
                      {' '}
                    </li>
                    {' '}
                    <li className="font-weight-bold text-white">
                      {' '}
                      KPI:
                      {' '}
                      <span className="d-inline-block font-weight-500 text-color">
                        {' '}
                        Real-time Data
                        {' '}
                      </span>
                      {' '}
                    </li>
                    {' '}
                    {' '}
                  </ul>
                  {' '}
                  <Link href="/process" className="d-inline-block">
                    Pipeline Specs
                    {' '}
                    <i className="fa-solid fa-arrow-right ml-2"></i>
                  </Link>
                  {' '}
                  {/* blueprint content */}
                  {' '}
                </div>
                {' '}
                <figure className="position-relative z-1">
                  {' '}
                  <img src="/assets/images/blueprint-img4.png" alt="bluepritnt" className="img-fluid" />
                  {' '}
                </figure>
                {' '}
                {/* blueprints box */}
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
      {/* INVESTMENT SECTION */}
      {' '}
      <section
        className="float-left w-100 position-relative investment-con padding-top padding-bottom main-box"
      >
        {' '}
        <figure className="position-absolute investment-wave">
          {' '}
          <img
            src="/assets/images/investment-wave.png"
            alt="investment wave"
            className="img-fluid"
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
