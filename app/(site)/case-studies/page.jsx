import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Case Studies | Opzio — SaaS & AI Startup Solutions for Smart Businesses",
};

export default function CaseStudiesPage() {
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
              Case Studies
            </h1>
            {' '}
            <p className="text-white">
              {' '}
              Real outcomes: time saved, errors reduced, response times cut
              {' '}
              <br />
              {' '}
              across teams.
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
                  Case Studies
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
      {/* GALLERY SECTION */}
      {' '}
      <section
        className="float-left w-100 position-relative gallery-con padding-top padding-bottom main-box"
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
              Real Automation Results
              {' '}
            </h2>
            {' '}
            <p
              className="text-color wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.05s"
            >
              {' '}
              See how our automation pipelines deliver measurable improvements.
              {' '}
            </p>
            {' '}
            {/* heading title con */}
            {' '}
          </div>
          {' '}
          <div
            className="tabs-box tabs-options wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.05s"
          >
            {' '}
            <ul className="nav nav-tabs">
              {' '}
              <li>
                <a className="active" data-toggle="tab" href="#all">
                  All
                </a>
              </li>
              {' '}
              <li>
                <a data-toggle="tab" href="#Industry">
                  Industry
                </a>
              </li>
              {' '}
              <li>
                <a data-toggle="tab" href="#Invoices">
                  {' '}
                  Invoices
                </a>
              </li>
              {' '}
              <li>
                <a data-toggle="tab" href="#Support">
                  Support
                </a>
              </li>
              {' '}
              <li>
                <a data-toggle="tab" href="#Reporting">
                  Reporting
                </a>
              </li>
              {' '}
              <li>
                <a data-toggle="tab" href="#Sales">
                  Sales
                </a>
              </li>
              {' '}
            </ul>
            {' '}
            <div className="tab-content">
              {' '}
              <div id="all" className="tab-pane fade in active show">
                {' '}
                <div className="row">
                  {' '}
                  <div className="col-lg-4 col-md-6 d-flex">
                    {' '}
                    <div className="real-automation-box w-100">
                      {' '}
                      <div className="gallery-automation-inner-con position-relative">
                        {' '}
                        <figure>
                          {' '}
                          <img
                            src="/assets/images/gallery-img1.jpg"
                            alt="real automation"
                            className="img-fluid"
                          />
                          {' '}
                        </figure>
                        {' '}
                        <ul className="list-unstyled p-0 top-badges">
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            Invoices
                            {' '}
                          </li>
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            Logistics
                            {' '}
                          </li>
                          {' '}
                        </ul>
                        {' '}
                        <h3 className="text-size-28">
                          {' '}
                          18 hrs/week saved,
                          {' '}
                          <br />
                          {' '}
                          invoicing errors down 62%
                          {' '}
                        </h3>
                        {' '}
                        <p className="">
                          {' '}
                          Logistics SMB automated receipt-to-ledger and payment matching.
                          {' '}
                        </p>
                        {' '}
                        <span className="d-inline-block orange-text">
                          18h/wk saved
                          {' '}
                        </span>
                        <span>
                          {' '}
                          62% errors down
                        </span>
                        {' '}
                        {/* gallery automation inner con */}
                        {' '}
                      </div>
                      {' '}
                      {/* real automation box */}
                      {' '}
                    </div>
                    {' '}
                    {/* col */}
                    {' '}
                  </div>
                  {' '}
                  <div className="col-lg-4 col-md-6 d-flex">
                    {' '}
                    <div className="real-automation-box w-100">
                      {' '}
                      <div className="gallery-automation-inner-con position-relative">
                        {' '}
                        <figure>
                          {' '}
                          <img
                            src="/assets/images/gallery-img2.jpg"
                            alt="real automation"
                            className="img-fluid"
                          />
                          {' '}
                        </figure>
                        {' '}
                        <ul className="list-unstyled p-0 top-badges">
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            Reporting
                            {' '}
                          </li>
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            Agency
                            {' '}
                          </li>
                          {' '}
                        </ul>
                        {' '}
                        <h3 className="text-size-28">
                          {' '}
                          Reporting time cut from
                          {' '}
                          <br />
                          {' '}
                          6 hrs → 45 min
                          {' '}
                        </h3>
                        {' '}
                        <p className="">
                          {' '}
                          Agency ops automated weekly client reports from multiple sources.
                          {' '}
                        </p>
                        {' '}
                        <span className="d-inline-block orange-text">
                          ~5h saved/week
                          {' '}
                        </span>
                        <span>
                          Real-time data
                        </span>
                        {' '}
                        {/* gallery automation inner con */}
                        {' '}
                      </div>
                      {' '}
                      {/* real automation box */}
                      {' '}
                    </div>
                    {' '}
                    {/* col */}
                    {' '}
                  </div>
                  {' '}
                  <div className="col-lg-4 col-md-6 d-flex">
                    {' '}
                    <div className="real-automation-box w-100">
                      {' '}
                      <div className="gallery-automation-inner-con position-relative">
                        {' '}
                        <figure>
                          {' '}
                          <img
                            src="/assets/images/gallery-img3.jpg"
                            alt="real automation"
                            className="img-fluid"
                          />
                          {' '}
                        </figure>
                        {' '}
                        <ul className="list-unstyled p-0 top-badges">
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            Sales
                            {' '}
                          </li>
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            B2B
                            {' '}
                          </li>
                          {' '}
                        </ul>
                        {' '}
                        <h3 className="text-size-28">
                          {' '}
                          +32% booked calls, reply
                          {' '}
                          <br />
                          {' '}
                          time less than 15 min
                          {' '}
                        </h3>
                        {' '}
                        <p className="">
                          {' '}
                          Lead flow automation: form to CRM, calendar link, reply detection.
                          {' '}
                        </p>
                        {' '}
                        <span className="d-inline-block orange-text">
                          +32% booked
                          {' '}
                        </span>
                        <span>
                          Reply within 15m
                        </span>
                        {' '}
                        {/* gallery automation inner con */}
                        {' '}
                      </div>
                      {' '}
                      {/* real automation box */}
                      {' '}
                    </div>
                    {' '}
                    {/* col */}
                    {' '}
                  </div>
                  {' '}
                  {' '}
                  <div className="col-lg-4 col-md-6 d-flex">
                    {' '}
                    <div className="real-automation-box w-100">
                      {' '}
                      <div className="gallery-automation-inner-con position-relative">
                        {' '}
                        <figure>
                          {' '}
                          <img
                            src="/assets/images/gallery-img4.jpg"
                            alt="real automation"
                            className="img-fluid"
                          />
                          {' '}
                        </figure>
                        {' '}
                        <ul className="list-unstyled p-0 top-badges">
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            Support
                            {' '}
                          </li>
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            E-com
                            {' '}
                          </li>
                          {' '}
                        </ul>
                        {' '}
                        <h3 className="text-size-28">
                          {' '}
                          38% ticket deflection in
                          {' '}
                          <br />
                          {' '}
                          30 days
                          {' '}
                        </h3>
                        {' '}
                        <p className="">
                          {' '}
                          Triage, macros, and post-purchase flows. Fewer "Where's my order?" and return-status tickets.
                          {' '}
                        </p>
                        {' '}
                        <span className="d-inline-block orange-text">
                          38% deflection
                          {' '}
                        </span>
                        <span>
                          {' '}
                          Faster refunds
                        </span>
                        {' '}
                        {/* gallery automation inner con */}
                        {' '}
                      </div>
                      {' '}
                      {/* real automation box */}
                      {' '}
                    </div>
                    {' '}
                    {/* col */}
                    {' '}
                  </div>
                  {' '}
                  <div className="col-lg-4 col-md-6 d-flex">
                    {' '}
                    <div className="real-automation-box w-100">
                      {' '}
                      <div className="gallery-automation-inner-con position-relative">
                        {' '}
                        <figure>
                          {' '}
                          <img
                            src="/assets/images/gallery-img5.jpg"
                            alt="real automation"
                            className="img-fluid"
                          />
                          {' '}
                        </figure>
                        {' '}
                        <ul className="list-unstyled p-0 top-badges">
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            Finance
                            {' '}
                          </li>
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            SMB
                            {' '}
                          </li>
                          {' '}
                        </ul>
                        {' '}
                        <h3 className="text-size-28">
                          {' '}
                          Reconciliation from 2 days
                          {' '}
                          <br />
                          {' '}
                          to 2 hours
                          {' '}
                        </h3>
                        {' '}
                        <p className="">
                          {' '}
                          Bank feed + invoice matching. One summary for the accountant weekly.
                          {' '}
                        </p>
                        {' '}
                        <span className="d-inline-block orange-text">
                          {' '}
                          ~12h saved/week
                          {' '}
                        </span>
                        <span>
                          100% matched
                        </span>
                        {' '}
                        {/* gallery automation inner con */}
                        {' '}
                      </div>
                      {' '}
                      {/* real automation box */}
                      {' '}
                    </div>
                    {' '}
                    {/* col */}
                    {' '}
                  </div>
                  {' '}
                  <div className="col-lg-4 col-md-6 d-flex">
                    {' '}
                    <div className="real-automation-box w-100">
                      {' '}
                      <div className="gallery-automation-inner-con position-relative">
                        {' '}
                        <figure>
                          {' '}
                          <img
                            src="/assets/images/gallery-img6.jpg"
                            alt="real automation"
                            className="img-fluid"
                          />
                          {' '}
                        </figure>
                        {' '}
                        <ul className="list-unstyled p-0 top-badges">
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            Led gen
                            {' '}
                          </li>
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            SaaS
                            {' '}
                          </li>
                          {' '}
                        </ul>
                        {' '}
                        <h3 className="text-size-28">
                          {' '}
                          Missed follow-ups
                          {' '}
                          <br />
                          {' '}
                          prevented: 23/week
                          {' '}
                        </h3>
                        {' '}
                        <p className="">
                          {' '}
                          SLA timers and auto-sequences. No lead left without a touch within 24 hours.
                          {' '}
                        </p>
                        {' '}
                        <span className="d-inline-block orange-text">
                          23 saved/week
                          {' '}
                        </span>
                        <span>
                          SLA met
                        </span>
                        {' '}
                        {/* gallery automation inner con */}
                        {' '}
                      </div>
                      {' '}
                      {/* real automation box */}
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
              </div>
              {' '}
              <div id="Industry" className="tab-pane fade">
                {' '}
                <div className="row">
                  {' '}
                  <div className="col-lg-4 col-md-6 d-flex">
                    {' '}
                    <div className="real-automation-box w-100">
                      {' '}
                      <div className="gallery-automation-inner-con position-relative">
                        {' '}
                        <figure>
                          {' '}
                          <img
                            src="/assets/images/gallery-img1.jpg"
                            alt="real automation"
                            className="img-fluid"
                          />
                          {' '}
                        </figure>
                        {' '}
                        <ul className="list-unstyled p-0 top-badges">
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            Invoices
                            {' '}
                          </li>
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            Logistics
                            {' '}
                          </li>
                          {' '}
                        </ul>
                        {' '}
                        <h3 className="text-size-28">
                          {' '}
                          18 hrs/week saved,
                          {' '}
                          <br />
                          {' '}
                          invoicing errors down 62%
                          {' '}
                        </h3>
                        {' '}
                        <p className="">
                          {' '}
                          Logistics SMB automated receipt-to-ledger and payment matching.
                          {' '}
                        </p>
                        {' '}
                        <span className="d-inline-block orange-text">
                          18h/wk saved
                          {' '}
                        </span>
                        <span>
                          {' '}
                          62% errors down
                        </span>
                        {' '}
                        {/* gallery automation inner con */}
                        {' '}
                      </div>
                      {' '}
                      {/* real automation box */}
                      {' '}
                    </div>
                    {' '}
                    {/* col */}
                    {' '}
                  </div>
                  {' '}
                  <div className="col-lg-4 col-md-6 d-flex">
                    {' '}
                    <div className="real-automation-box w-100">
                      {' '}
                      <div className="gallery-automation-inner-con position-relative">
                        {' '}
                        <figure>
                          {' '}
                          <img
                            src="/assets/images/gallery-img2.jpg"
                            alt="real automation"
                            className="img-fluid"
                          />
                          {' '}
                        </figure>
                        {' '}
                        <ul className="list-unstyled p-0 top-badges">
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            Reporting
                            {' '}
                          </li>
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            Agency
                            {' '}
                          </li>
                          {' '}
                        </ul>
                        {' '}
                        <h3 className="text-size-28">
                          {' '}
                          Reporting time cut from
                          {' '}
                          <br />
                          {' '}
                          6 hrs → 45 min
                          {' '}
                        </h3>
                        {' '}
                        <p className="">
                          {' '}
                          Agency ops automated weekly client reports from multiple sources.
                          {' '}
                        </p>
                        {' '}
                        <span className="d-inline-block orange-text">
                          ~5h saved/week
                          {' '}
                        </span>
                        <span>
                          Real-time data
                        </span>
                        {' '}
                        {/* gallery automation inner con */}
                        {' '}
                      </div>
                      {' '}
                      {/* real automation box */}
                      {' '}
                    </div>
                    {' '}
                    {/* col */}
                    {' '}
                  </div>
                  {' '}
                  <div className="col-lg-4 col-md-6 d-flex">
                    {' '}
                    <div className="real-automation-box w-100">
                      {' '}
                      <div className="gallery-automation-inner-con position-relative">
                        {' '}
                        <figure>
                          {' '}
                          <img
                            src="/assets/images/gallery-img3.jpg"
                            alt="real automation"
                            className="img-fluid"
                          />
                          {' '}
                        </figure>
                        {' '}
                        <ul className="list-unstyled p-0 top-badges">
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            Sales
                            {' '}
                          </li>
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            B2B
                            {' '}
                          </li>
                          {' '}
                        </ul>
                        {' '}
                        <h3 className="text-size-28">
                          {' '}
                          +32% booked calls, reply
                          {' '}
                          <br />
                          {' '}
                          time less than 15 min
                          {' '}
                        </h3>
                        {' '}
                        <p className="">
                          {' '}
                          Lead flow automation: form to CRM, calendar link, reply detection.
                          {' '}
                        </p>
                        {' '}
                        <span className="d-inline-block orange-text">
                          +32% booked
                          {' '}
                        </span>
                        <span>
                          Reply within 15m
                        </span>
                        {' '}
                        {/* gallery automation inner con */}
                        {' '}
                      </div>
                      {' '}
                      {/* real automation box */}
                      {' '}
                    </div>
                    {' '}
                    {/* col */}
                    {' '}
                  </div>
                  {' '}
                </div>
                {' '}
              </div>
              {' '}
              <div id="Invoices" className="tab-pane fade">
                {' '}
                <div className="row">
                  {' '}
                  <div className="col-lg-4 col-md-6 d-flex">
                    {' '}
                    <div className="real-automation-box w-100">
                      {' '}
                      <div className="gallery-automation-inner-con position-relative">
                        {' '}
                        <figure>
                          {' '}
                          <img
                            src="/assets/images/gallery-img4.jpg"
                            alt="real automation"
                            className="img-fluid"
                          />
                          {' '}
                        </figure>
                        {' '}
                        <ul className="list-unstyled p-0 top-badges">
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            Support
                            {' '}
                          </li>
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            E-com
                            {' '}
                          </li>
                          {' '}
                        </ul>
                        {' '}
                        <h3 className="text-size-28">
                          {' '}
                          38% ticket deflection in
                          {' '}
                          <br />
                          {' '}
                          30 days
                          {' '}
                        </h3>
                        {' '}
                        <p className="">
                          {' '}
                          Triage, macros, and post-purchase flows. Fewer "Where's my order?" and return-status tickets.
                          {' '}
                        </p>
                        {' '}
                        <span className="d-inline-block orange-text">
                          38% deflection
                          {' '}
                        </span>
                        <span>
                          {' '}
                          Faster refunds
                        </span>
                        {' '}
                        {/* gallery automation inner con */}
                        {' '}
                      </div>
                      {' '}
                      {/* real automation box */}
                      {' '}
                    </div>
                    {' '}
                    {/* col */}
                    {' '}
                  </div>
                  {' '}
                  <div className="col-lg-4 col-md-6 d-flex">
                    {' '}
                    <div className="real-automation-box w-100">
                      {' '}
                      <div className="gallery-automation-inner-con position-relative">
                        {' '}
                        <figure>
                          {' '}
                          <img
                            src="/assets/images/gallery-img5.jpg"
                            alt="real automation"
                            className="img-fluid"
                          />
                          {' '}
                        </figure>
                        {' '}
                        <ul className="list-unstyled p-0 top-badges">
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            Finance
                            {' '}
                          </li>
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            SMB
                            {' '}
                          </li>
                          {' '}
                        </ul>
                        {' '}
                        <h3 className="text-size-28">
                          {' '}
                          Reconciliation from 2 days
                          {' '}
                          <br />
                          {' '}
                          to 2 hours
                          {' '}
                        </h3>
                        {' '}
                        <p className="">
                          {' '}
                          Bank feed + invoice matching. One summary for the accountant weekly.
                          {' '}
                        </p>
                        {' '}
                        <span className="d-inline-block orange-text">
                          {' '}
                          ~12h saved/week
                          {' '}
                        </span>
                        <span>
                          100% matched
                        </span>
                        {' '}
                        {/* gallery automation inner con */}
                        {' '}
                      </div>
                      {' '}
                      {/* real automation box */}
                      {' '}
                    </div>
                    {' '}
                    {/* col */}
                    {' '}
                  </div>
                  {' '}
                  <div className="col-lg-4 col-md-6 d-flex">
                    {' '}
                    <div className="real-automation-box w-100">
                      {' '}
                      <div className="gallery-automation-inner-con position-relative">
                        {' '}
                        <figure>
                          {' '}
                          <img
                            src="/assets/images/gallery-img6.jpg"
                            alt="real automation"
                            className="img-fluid"
                          />
                          {' '}
                        </figure>
                        {' '}
                        <ul className="list-unstyled p-0 top-badges">
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            Led gen
                            {' '}
                          </li>
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            SaaS
                            {' '}
                          </li>
                          {' '}
                        </ul>
                        {' '}
                        <h3 className="text-size-28">
                          {' '}
                          Missed follow-ups
                          {' '}
                          <br />
                          {' '}
                          prevented: 23/week
                          {' '}
                        </h3>
                        {' '}
                        <p className="">
                          {' '}
                          SLA timers and auto-sequences. No lead left without a touch within 24 hours.
                          {' '}
                        </p>
                        {' '}
                        <span className="d-inline-block orange-text">
                          23 saved/week
                          {' '}
                        </span>
                        <span>
                          SLA met
                        </span>
                        {' '}
                        {/* gallery automation inner con */}
                        {' '}
                      </div>
                      {' '}
                      {/* real automation box */}
                      {' '}
                    </div>
                    {' '}
                    {/* col */}
                    {' '}
                  </div>
                  {' '}
                </div>
                {' '}
              </div>
              {' '}
              <div id="Support" className="tab-pane fade">
                {' '}
                <div className="row">
                  {' '}
                  <div className="col-lg-4 col-md-6 d-flex">
                    {' '}
                    <div className="real-automation-box w-100">
                      {' '}
                      <div className="gallery-automation-inner-con position-relative">
                        {' '}
                        <figure>
                          {' '}
                          <img
                            src="/assets/images/gallery-img2.jpg"
                            alt="real automation"
                            className="img-fluid"
                          />
                          {' '}
                        </figure>
                        {' '}
                        <ul className="list-unstyled p-0 top-badges">
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            Reporting
                            {' '}
                          </li>
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            Agency
                            {' '}
                          </li>
                          {' '}
                        </ul>
                        {' '}
                        <h3 className="text-size-28">
                          {' '}
                          Reporting time cut from
                          {' '}
                          <br />
                          {' '}
                          6 hrs → 45 min
                          {' '}
                        </h3>
                        {' '}
                        <p className="">
                          {' '}
                          Agency ops automated weekly client reports from multiple sources.
                          {' '}
                        </p>
                        {' '}
                        <span className="d-inline-block orange-text">
                          ~5h saved/week
                          {' '}
                        </span>
                        <span>
                          Real-time data
                        </span>
                        {' '}
                        {/* gallery automation inner con */}
                        {' '}
                      </div>
                      {' '}
                      {/* real automation box */}
                      {' '}
                    </div>
                    {' '}
                    {/* col */}
                    {' '}
                  </div>
                  {' '}
                  <div className="col-lg-4 col-md-6 d-flex">
                    {' '}
                    <div className="real-automation-box w-100">
                      {' '}
                      <div className="gallery-automation-inner-con position-relative">
                        {' '}
                        <figure>
                          {' '}
                          <img
                            src="/assets/images/gallery-img3.jpg"
                            alt="real automation"
                            className="img-fluid"
                          />
                          {' '}
                        </figure>
                        {' '}
                        <ul className="list-unstyled p-0 top-badges">
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            Sales
                            {' '}
                          </li>
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            B2B
                            {' '}
                          </li>
                          {' '}
                        </ul>
                        {' '}
                        <h3 className="text-size-28">
                          {' '}
                          +32% booked calls, reply
                          {' '}
                          <br />
                          {' '}
                          time less than 15 min
                          {' '}
                        </h3>
                        {' '}
                        <p className="">
                          {' '}
                          Lead flow automation: form to CRM, calendar link, reply detection.
                          {' '}
                        </p>
                        {' '}
                        <span className="d-inline-block orange-text">
                          +32% booked
                          {' '}
                        </span>
                        <span>
                          Reply within 15m
                        </span>
                        {' '}
                        {/* gallery automation inner con */}
                        {' '}
                      </div>
                      {' '}
                      {/* real automation box */}
                      {' '}
                    </div>
                    {' '}
                    {/* col */}
                    {' '}
                  </div>
                  {' '}
                  <div className="col-lg-4 col-md-6 d-flex">
                    {' '}
                    <div className="real-automation-box w-100">
                      {' '}
                      <div className="gallery-automation-inner-con position-relative">
                        {' '}
                        <figure>
                          {' '}
                          <img
                            src="/assets/images/gallery-img6.jpg"
                            alt="real automation"
                            className="img-fluid"
                          />
                          {' '}
                        </figure>
                        {' '}
                        <ul className="list-unstyled p-0 top-badges">
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            Led gen
                            {' '}
                          </li>
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            SaaS
                            {' '}
                          </li>
                          {' '}
                        </ul>
                        {' '}
                        <h3 className="text-size-28">
                          {' '}
                          Missed follow-ups
                          {' '}
                          <br />
                          {' '}
                          prevented: 23/week
                          {' '}
                        </h3>
                        {' '}
                        <p className="">
                          {' '}
                          SLA timers and auto-sequences. No lead left without a touch within 24 hours.
                          {' '}
                        </p>
                        {' '}
                        <span className="d-inline-block orange-text">
                          23 saved/week
                          {' '}
                        </span>
                        <span>
                          SLA met
                        </span>
                        {' '}
                        {/* gallery automation inner con */}
                        {' '}
                      </div>
                      {' '}
                      {/* real automation box */}
                      {' '}
                    </div>
                    {' '}
                    {/* col */}
                    {' '}
                  </div>
                  {' '}
                </div>
                {' '}
              </div>
              {' '}
              <div id="Reporting" className="tab-pane fade">
                {' '}
                <div className="row">
                  {' '}
                  <div className="col-lg-4 col-md-6 d-flex">
                    {' '}
                    <div className="real-automation-box w-100">
                      {' '}
                      <div className="gallery-automation-inner-con position-relative">
                        {' '}
                        <figure>
                          {' '}
                          <img
                            src="/assets/images/gallery-img4.jpg"
                            alt="real automation"
                            className="img-fluid"
                          />
                          {' '}
                        </figure>
                        {' '}
                        <ul className="list-unstyled p-0 top-badges">
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            Support
                            {' '}
                          </li>
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            E-com
                            {' '}
                          </li>
                          {' '}
                        </ul>
                        {' '}
                        <h3 className="text-size-28">
                          {' '}
                          38% ticket deflection in
                          {' '}
                          <br />
                          {' '}
                          30 days
                          {' '}
                        </h3>
                        {' '}
                        <p className="">
                          {' '}
                          Triage, macros, and post-purchase flows. Fewer "Where's my order?" and return-status tickets.
                          {' '}
                        </p>
                        {' '}
                        <span className="d-inline-block orange-text">
                          38% deflection
                          {' '}
                        </span>
                        <span>
                          {' '}
                          Faster refunds
                        </span>
                        {' '}
                        {/* gallery automation inner con */}
                        {' '}
                      </div>
                      {' '}
                      {/* real automation box */}
                      {' '}
                    </div>
                    {' '}
                    {/* col */}
                    {' '}
                  </div>
                  {' '}
                  <div className="col-lg-4 col-md-6 d-flex">
                    {' '}
                    <div className="real-automation-box w-100">
                      {' '}
                      <div className="gallery-automation-inner-con position-relative">
                        {' '}
                        <figure>
                          {' '}
                          <img
                            src="/assets/images/gallery-img5.jpg"
                            alt="real automation"
                            className="img-fluid"
                          />
                          {' '}
                        </figure>
                        {' '}
                        <ul className="list-unstyled p-0 top-badges">
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            Finance
                            {' '}
                          </li>
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            SMB
                            {' '}
                          </li>
                          {' '}
                        </ul>
                        {' '}
                        <h3 className="text-size-28">
                          {' '}
                          Reconciliation from 2 days
                          {' '}
                          <br />
                          {' '}
                          to 2 hours
                          {' '}
                        </h3>
                        {' '}
                        <p className="">
                          {' '}
                          Bank feed + invoice matching. One summary for the accountant weekly.
                          {' '}
                        </p>
                        {' '}
                        <span className="d-inline-block orange-text">
                          {' '}
                          ~12h saved/week
                          {' '}
                        </span>
                        <span>
                          100% matched
                        </span>
                        {' '}
                        {/* gallery automation inner con */}
                        {' '}
                      </div>
                      {' '}
                      {/* real automation box */}
                      {' '}
                    </div>
                    {' '}
                    {/* col */}
                    {' '}
                  </div>
                  {' '}
                  <div className="col-lg-4 col-md-6 d-flex">
                    {' '}
                    <div className="real-automation-box w-100">
                      {' '}
                      <div className="gallery-automation-inner-con position-relative">
                        {' '}
                        <figure>
                          {' '}
                          <img
                            src="/assets/images/gallery-img6.jpg"
                            alt="real automation"
                            className="img-fluid"
                          />
                          {' '}
                        </figure>
                        {' '}
                        <ul className="list-unstyled p-0 top-badges">
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            Led gen
                            {' '}
                          </li>
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            SaaS
                            {' '}
                          </li>
                          {' '}
                        </ul>
                        {' '}
                        <h3 className="text-size-28">
                          {' '}
                          Missed follow-ups
                          {' '}
                          <br />
                          {' '}
                          prevented: 23/week
                          {' '}
                        </h3>
                        {' '}
                        <p className="">
                          {' '}
                          SLA timers and auto-sequences. No lead left without a touch within 24 hours.
                          {' '}
                        </p>
                        {' '}
                        <span className="d-inline-block orange-text">
                          23 saved/week
                          {' '}
                        </span>
                        <span>
                          SLA met
                        </span>
                        {' '}
                        {/* gallery automation inner con */}
                        {' '}
                      </div>
                      {' '}
                      {/* real automation box */}
                      {' '}
                    </div>
                    {' '}
                    {/* col */}
                    {' '}
                  </div>
                  {' '}
                </div>
                {' '}
              </div>
              {' '}
              <div id="Sales" className="tab-pane fade">
                {' '}
                <div className="row">
                  {' '}
                  <div className="col-lg-4 col-md-6 d-flex">
                    {' '}
                    <div className="real-automation-box w-100">
                      {' '}
                      <div className="gallery-automation-inner-con position-relative">
                        {' '}
                        <figure>
                          {' '}
                          <img
                            src="/assets/images/gallery-img1.jpg"
                            alt="real automation"
                            className="img-fluid"
                          />
                          {' '}
                        </figure>
                        {' '}
                        <ul className="list-unstyled p-0 top-badges">
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            Invoices
                            {' '}
                          </li>
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            Logistics
                            {' '}
                          </li>
                          {' '}
                        </ul>
                        {' '}
                        <h3 className="text-size-28">
                          {' '}
                          18 hrs/week saved,
                          {' '}
                          <br />
                          {' '}
                          invoicing errors down 62%
                          {' '}
                        </h3>
                        {' '}
                        <p className="">
                          {' '}
                          Logistics SMB automated receipt-to-ledger and payment matching.
                          {' '}
                        </p>
                        {' '}
                        <span className="d-inline-block orange-text">
                          18h/wk saved
                          {' '}
                        </span>
                        <span>
                          {' '}
                          62% errors down
                        </span>
                        {' '}
                        {/* gallery automation inner con */}
                        {' '}
                      </div>
                      {' '}
                      {/* real automation box */}
                      {' '}
                    </div>
                    {' '}
                    {/* col */}
                    {' '}
                  </div>
                  {' '}
                  <div className="col-lg-4 col-md-6 d-flex">
                    {' '}
                    <div className="real-automation-box w-100">
                      {' '}
                      <div className="gallery-automation-inner-con position-relative">
                        {' '}
                        <figure>
                          {' '}
                          <img
                            src="/assets/images/gallery-img2.jpg"
                            alt="real automation"
                            className="img-fluid"
                          />
                          {' '}
                        </figure>
                        {' '}
                        <ul className="list-unstyled p-0 top-badges">
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            Reporting
                            {' '}
                          </li>
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            Agency
                            {' '}
                          </li>
                          {' '}
                        </ul>
                        {' '}
                        <h3 className="text-size-28">
                          {' '}
                          Reporting time cut from
                          {' '}
                          <br />
                          {' '}
                          6 hrs → 45 min
                          {' '}
                        </h3>
                        {' '}
                        <p className="">
                          {' '}
                          Agency ops automated weekly client reports from multiple sources.
                          {' '}
                        </p>
                        {' '}
                        <span className="d-inline-block orange-text">
                          ~5h saved/week
                          {' '}
                        </span>
                        <span>
                          Real-time data
                        </span>
                        {' '}
                        {/* gallery automation inner con */}
                        {' '}
                      </div>
                      {' '}
                      {/* real automation box */}
                      {' '}
                    </div>
                    {' '}
                    {/* col */}
                    {' '}
                  </div>
                  {' '}
                  <div className="col-lg-4 col-md-6 d-flex">
                    {' '}
                    <div className="real-automation-box w-100">
                      {' '}
                      <div className="gallery-automation-inner-con position-relative">
                        {' '}
                        <figure>
                          {' '}
                          <img
                            src="/assets/images/gallery-img3.jpg"
                            alt="real automation"
                            className="img-fluid"
                          />
                          {' '}
                        </figure>
                        {' '}
                        <ul className="list-unstyled p-0 top-badges">
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            Sales
                            {' '}
                          </li>
                          {' '}
                          <li className="position-relative">
                            {' '}
                            <i className="fa-solid fa-check"></i>
                            {' '}
                            B2B
                            {' '}
                          </li>
                          {' '}
                        </ul>
                        {' '}
                        <h3 className="text-size-28">
                          {' '}
                          +32% booked calls, reply
                          {' '}
                          <br />
                          {' '}
                          time less than 15 min
                          {' '}
                        </h3>
                        {' '}
                        <p className="">
                          {' '}
                          Lead flow automation: form to CRM, calendar link, reply detection.
                          {' '}
                        </p>
                        {' '}
                        <span className="d-inline-block orange-text">
                          +32% booked
                          {' '}
                        </span>
                        <span>
                          Reply within 15m
                        </span>
                        {' '}
                        {/* gallery automation inner con */}
                        {' '}
                      </div>
                      {' '}
                      {/* real automation box */}
                      {' '}
                    </div>
                    {' '}
                    {/* col */}
                    {' '}
                  </div>
                  {' '}
                </div>
                {' '}
              </div>
              {' '}
              {/* tab content */}
              {' '}
            </div>
            {' '}
            {/* tabs box */}
            {' '}
          </div>
          {' '}
          {/* main container */}
          {' '}
        </div>
        {' '}
        {/* gallery con */}
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
