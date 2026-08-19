import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Vibecop | Senior Supervision for Products built with AI",
};

export default function IndexPage() {
  return (
    <>
      {' '}
      {' '}
      {/* Back to top button */}
      {' '}
      {' '}
      {' '}
      <div className="home2-outer-wrapper float-left w-100 position-relative">
        {' '}
        <figure>
          {' '}
          <img
            src="/assets/images/home2-banner-vector.png"
            alt="banner glow"
            className="img-fluid position-absolute banner2-vector"
          />
          {' '}
        </figure>
        {' '}
        {/* HEADER SECTION */}
        {' '}
        <Header />
        {' '}
        <div className="clearfix"></div>
        {' '}
        {/* BANNER SECTION */}
        {' '}
        <div className="float-left w-100 position-relative banner2-con main-box">
          {' '}
          <div className="main-container">
            {' '}
            <div className="row align-items-center">
              {' '}
              <div className="col-lg-7 col-md-12">
                {' '}
                <div className="banner-inner-content">
                  {' '}
                  <ul className="list-unstyled p-0 top-badges">
                    {' '}
                    <li className="position-relative">
                      {' '}
                      <i className="fa-solid fa-check"></i>
                      {' '}
                      CRM-first
                      {' '}
                    </li>
                    {' '}
                    <li className="position-relative">
                      {' '}
                      <i className="fa-solid fa-check"></i>
                      {' '}
                      No spammy sequences
                      {' '}
                    </li>
                    {' '}
                    <li className="position-relative">
                      {' '}
                      <i className="fa-solid fa-check"></i>
                      {' '}
                      Reply handling
                      {' '}
                    </li>
                    {' '}
                  </ul>
                  {' '}
                  <h1 className="text-size-94">
                    {' '}
                    Turn Leads
                    {' '}
                    <br />
                    {' '}
                    into Booked Calls
                    {' '}
                    <br />
                    {' '}
                    Automatically.
                    {' '}
                  </h1>
                  {' '}
                  <p className="">
                    {' '}
                    CRM-first automation: route leads, handle replies, and attribute every
                    {' '}
                    <br />
                    {' '}
                    booked call without +spammy sequences.
                    {' '}
                  </p>
                  {' '}
                  <div className="d-flex align-items-center b2-outer-btn">
                    {' '}
                    <Link href="/contact" className="primary_btn d-inline-block">
                      {' '}
                      Book an Automation Audit
                      {' '}
                    </Link>
                    {' '}
                    <a href="" className="d-inline-block pipeline-link">
                      See Pipeline Stages
                      {' '}
                      <i className="fa-solid fa-arrow-right ml-2"></i>
                    </a>
                    {' '}
                  </div>
                  {' '}
                  {/* banner inner content */}
                  {' '}
                </div>
                {' '}
                {/* col */}
                {' '}
              </div>
              {' '}
              <div className="col-lg-5 col-md-12">
                {' '}
                <div className="banner2-right-content-con">
                  {' '}
                  <div className="dashboard-grid">
                    {' '}
                    {/* Meeting Card */}
                    {' '}
                    <div className="card-custom meeting-card">
                      {' '}
                      <figure>
                        {' '}
                        <img
                          src="/assets/images/video-recorder.png"
                          alt="video recorder"
                          className="img-fluid"
                        />
                        {' '}
                      </figure>
                      {' '}
                      <div className="meeting-title">
                        Sprint Planning
                      </div>
                      {' '}
                      <div className="meeting-time">
                        September 22, 2026 - 9:30 AM
                      </div>
                      {' '}
                      <div className="avatar-group mt-1">
                        {' '}
                        <img src="/assets/images/avatar1.png" alt="avatar" className="img-fluid" />
                        {' '}
                        <img src="/assets/images/avatar2.png" alt="avatar" className="img-fluid" />
                        {' '}
                        <img src="/assets/images/avatar3.png" alt="avatar" className="img-fluid" />
                        {' '}
                        <img src="/assets/images/avatar4.png" alt="avatar" className="img-fluid" />
                        {' '}
                      </div>
                      {' '}
                    </div>
                    {' '}
                    {/* Missed Followups */}
                    {' '}
                    <div className="missed-box">
                      {' '}
                      <div>
                        {' '}
                        <div className="missed-title">
                          Missed follow-ups
                        </div>
                        {' '}
                        <div className="missed-number">
                          23
                        </div>
                        {' '}
                      </div>
                      {' '}
                      <figure>
                        {' '}
                        <img src="/assets/images/missed-img.png" alt="follow up" className="img-fluid" />
                        {' '}
                      </figure>
                      {' '}
                    </div>
                    {' '}
                    {/* Curva */}
                    {' '}
                    <div className="curva-box">
                      {' '}
                      <div className="meeting-title">
                        Curva Technologies
                      </div>
                      {' '}
                      <div className="meeting-time">
                        {' '}
                        As a company we are locating
                        {' '}
                        <br />
                        {' '}
                        across the sea.
                        {' '}
                      </div>
                      {' '}
                      <div className="timeline-outer position-relative">
                        {' '}
                        <div className="timeline-item">
                          {' '}
                          <div className="timeline-title">
                            Meeting with James
                          </div>
                          {' '}
                          <div className="timeline-sub">
                            Yesterday at 8:30 AM
                          </div>
                          {' '}
                        </div>
                        {' '}
                        <div className="timeline-item">
                          {' '}
                          <div className="timeline-title">
                            Full-team meeting
                          </div>
                          {' '}
                          <div className="timeline-sub">
                            Monday at 8:30 AM
                          </div>
                          {' '}
                        </div>
                        {' '}
                        <div className="timeline-item">
                          {' '}
                          <div className="timeline-title">
                            Product Demo
                          </div>
                          {' '}
                          <div className="timeline-sub">
                            Monday at 10:30 AM
                          </div>
                          {' '}
                        </div>
                        {' '}
                      </div>
                      {' '}
                    </div>
                    {' '}
                    {/* Progress */}
                    {' '}
                    <div className="progress-card text-center">
                      {' '}
                      <div className="d-flex align-items-center justify-content-between">
                        {' '}
                        <div className="progress-card-title mb-0">
                          {' '}
                          Booked Call This Week:
                          {' '}
                        </div>
                        {' '}
                        <div className="missed-number">
                          47
                        </div>
                        {' '}
                      </div>
                      {' '}
                      <div className="progress-wrap mx-auto mt-3">
                        {' '}
                        <div className="progress-label left">
                          0%
                        </div>
                        {' '}
                        <div className="progress-label right">
                          100%
                        </div>
                        {' '}
                        <div className="progress-arc">
                          {' '}
                          <div className="progress-fill" id="progressFill"></div>
                          {' '}
                        </div>
                        {' '}
                        <div className="progress-center">
                          {' '}
                          <img src="/assets/images/progress-check.png" alt="check" className="img-fluid" />
                          {' '}
                        </div>
                        {' '}
                      </div>
                      {' '}
                      <div className="progress-percent">
                        +32%
                      </div>
                      {' '}
                      <div className="last-week">
                        vs last week
                      </div>
                      {' '}
                    </div>
                    {' '}
                    {/* Leads */}
                    {' '}
                    <div className="card-custom leads-box text-center">
                      {' '}
                      <img
                        src="/assets/images/qualifief-leds-img.png"
                        className="mx-auto img-fluid"
                        alt="qualified"
                      />
                      {' '}
                      <div className="quality-title">
                        Qualified Leads
                      </div>
                      {' '}
                      <div className="leads-number">
                        128
                      </div>
                      {' '}
                    </div>
                    {' '}
                    {/* Graph */}
                    {' '}
                    <div className="graph-box text-center">
                      {' '}
                      <img src="/assets/images/graph-img.png" alt="graph img" className="img-fluid" />
                      {' '}
                    </div>
                    {' '}
                  </div>
                  {' '}
                  {/* banner2 right content con */}
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
          {/* banner con */}
          {' '}
        </div>
        {' '}
        {/* home outer wrapper */}
        {' '}
      </div>
      {' '}
      {/* PIPELINE STAGE SECTION */}
      {' '}
      <section
        className="float-left w-100 position-relative pipeline-stage-con padding-top padding-bottom main-box"
      >
        {' '}
        <figure>
          {' '}
          <img
            src="/assets/images/pipeline-vector.png"
            alt="pipeline vector"
            className="img-fluid pipeline-vector position-absolute"
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
              Your Pipeline, With Health
              {' '}
              <br />
              {' '}
              at Every Stage
              {' '}
            </h2>
            {' '}
            <p
              className="text-color wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.05s"
            >
              {' '}
              We plug automations into each stage so fewer leads leak and more turn into booked calls.
              {' '}
            </p>
            {' '}
            {/* heading title con */}
            {' '}
          </div>
          {' '}
          <div
            className="stage-flex-con d-flex align-items-center justify-content-between wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.05s"
          >
            {' '}
            <div className="stage-box position-relative">
              {' '}
              <figure>
                {' '}
                <img
                  src="/assets/images/pipeline-icon1.png"
                  alt="pipeline icon"
                  className="img-fluid"
                />
                {' '}
              </figure>
              {' '}
              <h3 className="text-size-24 font-weight-bold mb-1">
                New
              </h3>
              {' '}
              <span className="d-block text-color font-weight-500 text-size-16">
                Inbound
              </span>
              {' '}
              <span className="d-inline-block bg-orange text-white font-weight-600">
                Auto-assign owner
                {' '}
              </span>
              {' '}
              {/* stage box */}
              {' '}
            </div>
            {' '}
            <div className="stage-box position-relative">
              {' '}
              <figure>
                {' '}
                <img
                  src="/assets/images/pipeline-icon2.png"
                  alt="pipeline icon"
                  className="img-fluid"
                />
                {' '}
              </figure>
              {' '}
              <h3 className="text-size-24 font-weight-bold mb-1">
                Qualified
              </h3>
              {' '}
              <span className="d-block text-color font-weight-500 text-size-16">
                Scored
              </span>
              {' '}
              <span className="d-inline-block bg-orange text-white font-weight-600">
                Enrichment + score
                {' '}
              </span>
              {' '}
              {/* stage box */}
              {' '}
            </div>
            {' '}
            <div className="stage-box position-relative">
              {' '}
              <figure>
                {' '}
                <img
                  src="/assets/images/pipeline-icon3.png"
                  alt="pipeline icon"
                  className="img-fluid"
                />
                {' '}
              </figure>
              {' '}
              <h3 className="text-size-24 font-weight-bold mb-1">
                Follow-up
              </h3>
              {' '}
              <span className="d-block text-color font-weight-500 text-size-16">
                SLA
              </span>
              {' '}
              <span className="d-inline-block bg-orange text-white font-weight-600">
                SLA timer + sequences
                {' '}
              </span>
              {' '}
              {/* stage box */}
              {' '}
            </div>
            {' '}
            <div className="stage-box position-relative">
              {' '}
              <figure>
                {' '}
                <img
                  src="/assets/images/pipeline-icon4.png"
                  alt="pipeline icon"
                  className="img-fluid"
                />
                {' '}
              </figure>
              {' '}
              <h3 className="text-size-24 font-weight-bold mb-1">
                Booked
              </h3>
              {' '}
              <span className="d-block text-color font-weight-500 text-size-16">
                Calls
              </span>
              {' '}
              <span className="d-inline-block bg-orange text-white font-weight-600">
                Calendar sync
                {' '}
              </span>
              {' '}
              {/* stage box */}
              {' '}
            </div>
            {' '}
            <div className="stage-box position-relative">
              {' '}
              <figure>
                {' '}
                <img
                  src="/assets/images/pipeline-icon5.png"
                  alt="pipeline icon"
                  className="img-fluid"
                />
                {' '}
              </figure>
              {' '}
              <h3 className="text-size-24 font-weight-bold mb-1">
                Won
              </h3>
              {' '}
              <span className="d-block text-color font-weight-500 text-size-16">
                Closed
              </span>
              {' '}
              <span className="d-inline-block bg-orange text-white font-weight-600">
                Attribution
                {' '}
              </span>
              {' '}
              {/* stage box */}
              {' '}
            </div>
            {' '}
            {/* stage flex con */}
            {' '}
          </div>
          {' '}
          {/* main container */}
          {' '}
        </div>
        {' '}
        {/* pipeline stage con */}
        {' '}
      </section>
      {' '}
      {/* BOOKED CALLS DETAIL SECTION */}
      {' '}
      <section
        className="float-left w-100 position-relative booked-calls-detail-con padding-top padding-bottom main-box"
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
              <div className="booked-detail-img-con">
                {' '}
                <figure>
                  {' '}
                  <img
                    src="/assets/images/booked-detail-img.png"
                    alt="booked-detail-img"
                    className="img-fluid"
                  />
                  {' '}
                </figure>
                {' '}
                {/* booked detail img con */}
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
              <div className="booked-content-con">
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
                    <span className="d-inline-block orange-text">
                      +32%
                    </span>
                    {' '}
                    Booked Calls in 6 Weeks
                    {' '}
                  </h2>
                  {' '}
                  <p
                    className="text-color wow fadeInLeft"
                    data-wow-duration="2s"
                    data-wow-delay="0.05s"
                  >
                    {' '}
                    A 45-person B2B agency was losing leads in the follow-up gap. We automated lead assignment, first-touch email with calendar link, and reply detection so reps never double-touch. Before/after reply time dropped from 4+ hours to under 15 minutes.
                    {' '}
                  </p>
                  {' '}
                  <div className="d-flex align-items-center detail-flex">
                    {' '}
                    <div className="booked-detail-box position-relative">
                      {' '}
                      <span className="d-block text-size-18 text-color">
                        Before
                      </span>
                      {' '}
                      <h3 className="text-size-40 text-white">
                        4 - 6 hrs
                      </h3>
                      {' '}
                      <span className="d-block text-size-14 text-color mb-0">
                        Avg. first reply time
                      </span>
                      {' '}
                      {/* booked detail box */}
                      {' '}
                    </div>
                    {' '}
                    <div className="booked-detail-box after position-relative">
                      {' '}
                      <span className="d-block text-size-18 text-color">
                        After
                      </span>
                      {' '}
                      <h3 className="text-size-40 orange-text">
                        15 min
                      </h3>
                      {' '}
                      <span className="d-block text-size-14 text-color mb-0">
                        Avg. first reply time
                      </span>
                      {' '}
                      {/* booked detail box */}
                      {' '}
                    </div>
                    {' '}
                    {' '}
                  </div>
                  {' '}
                </div>
                {' '}
                {/* booked content con */}
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
        {/* booked calls detail con */}
        {' '}
      </section>
      {' '}
      {/* CRM SECTION */}
      {' '}
      <section
        className="float-left w-100 position-relative work-with-stack-con padding-top main-box crm-con"
      >
        {' '}
        <div className="container">
          {' '}
          <div className="row align-items-center p-0">
            {' '}
            <div
              className="col-lg-6 col-md-6 wow fadeInLeft"
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
                    Which CRM Do
                    {' '}
                    <br />
                    {' '}
                    You Use?
                    {' '}
                  </h2>
                  {' '}
                  <p
                    className="text-color wow fadeInLeft"
                    data-wow-duration="2s"
                    data-wow-delay="0.05s"
                  >
                    {' '}
                    We connect directly to your existing CRM setup — no rip- and-replace required. Our automation pipelines are designed to integrate seamlessly with the tools you already rely on, whether that’s your sales CRM, marketing platform, or customer support system.
                    {' '}
                  </p>
                  {' '}
                  <Link href="/contact" className="primary_btn d-inline-block">
                    {' '}
                    Book an Automation Audit
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
              className="col-lg-6 col-md-6 wow fadeInRight"
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
      {/* INVESTMENT SECTION */}
      {' '}
      <section
        className="float-left w-100 position-relative investment-con padding-top main-box pricing-con"
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
              Pricing By Leads or Seats
              {' '}
            </h2>
            {' '}
            <p className="wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.05s">
              {' '}
              Scale with your pipeline as your business grows.
              {' '}
            </p>
            {' '}
          </div>
          {' '}
          <div className="row align-items-center">
            {' '}
            <div
              className="col-lg-4 col-md-6 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.05s"
            >
              {' '}
              <div className="investment-box position-relative">
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
                  2,495
                  {' '}
                </h3>
                {' '}
                <p>
                  Up to 500 leads/mo
                </p>
                {' '}
                <ul className="list-unstyled p-0">
                  {' '}
                  <li className="position-relative">
                    {' '}
                    <i className="fa-solid fa-check"></i>
                    {' '}
                    1 pipeline (inbound or outbound)
                    {' '}
                  </li>
                  {' '}
                  <li className="position-relative">
                    {' '}
                    <i className="fa-solid fa-check"></i>
                    {' '}
                    CRM sync + calendar
                    {' '}
                  </li>
                  {' '}
                  {' '}
                </ul>
                {' '}
                <Link href="/pricing" className="primary_btn d-inline-block">
                  {' '}
                  Get Started
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
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.05s"
            >
              {' '}
              <div className="investment-box position-relative">
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
                  4,995
                  {' '}
                </h3>
                {' '}
                <p>
                  Up to 2000 leads/mo
                </p>
                {' '}
                <ul className="list-unstyled p-0">
                  {' '}
                  <li className="position-relative">
                    {' '}
                    <i className="fa-solid fa-check"></i>
                    Inbound + outbound
                    {' '}
                  </li>
                  {' '}
                  <li className="position-relative">
                    {' '}
                    <i className="fa-solid fa-check"></i>
                    Reply handling + attribution
                    {' '}
                  </li>
                  {' '}
                  <li className="position-relative">
                    {' '}
                    <i className="fa-solid fa-check"></i>
                    Monthly optimization
                    {' '}
                  </li>
                  {' '}
                  {' '}
                </ul>
                {' '}
                <Link href="/pricing" className="primary_btn d-inline-block">
                  {' '}
                  Get Started
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
              className="col-lg-4 col-md-6 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.05s"
            >
              {' '}
              <div className="investment-box position-relative">
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
                  Custom
                </h3>
                {' '}
                <p>
                  High volume
                </p>
                {' '}
                <ul className="list-unstyled p-0">
                  {' '}
                  <li className="position-relative">
                    {' '}
                    <i className="fa-solid fa-check"></i>
                    {' '}
                    Multi-channel, multi-team
                    {' '}
                  </li>
                  {' '}
                  <li className="position-relative">
                    {' '}
                    <i className="fa-solid fa-check"></i>
                    {' '}
                    Dedicated success
                    {' '}
                  </li>
                  {' '}
                  {' '}
                </ul>
                {' '}
                <Link href="/pricing" className="primary_btn d-inline-block">
                  {' '}
                  Get Started
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
      {/* FOLLOW UP SECTION */}
      {' '}
      <section
        className="float-left w-100 position-relative follow-up-con padding-top padding-bottom main-box"
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
              One View: Leads, Conversion,
              {' '}
              <br />
              {' '}
              Follow-Ups
              {' '}
            </h2>
            {' '}
            <p className="wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.05s">
              {' '}
              Complete visibility into your sales pipeline from first touch to close.
              {' '}
            </p>
            {' '}
          </div>
          {' '}
          <div className="row wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.05s">
            {' '}
            <div className="col-lg-4 col-md-6 d-flex">
              {' '}
              <div className="follow-box w-100 position-relative">
                {' '}
                <div className="d-flex align-items-center justify-content-between follow-flex">
                  {' '}
                  <span className="d-inline-block text-white font-weight-600 text-size-16">
                    Leads this week
                    {' '}
                  </span>
                  {' '}
                  <span className="d-inline-block orange-text text-size-18 font-weight-500">
                    +18%
                    {' '}
                  </span>
                  {' '}
                  {' '}
                </div>
                {' '}
                <h3 className="text-size-46 text-white mb-0">
                  128
                </h3>
                {' '}
                {/* follow box */}
                {' '}
              </div>
              {' '}
              {/* col */}
              {' '}
            </div>
            {' '}
            <div className="col-lg-4 col-md-6 d-flex">
              {' '}
              <div className="follow-box w-100 position-relative">
                {' '}
                <div className="d-flex align-items-center justify-content-between follow-flex">
                  {' '}
                  <span className="d-inline-block text-white font-weight-600 text-size-16">
                    Booked calls
                    {' '}
                  </span>
                  {' '}
                  <span className="d-inline-block orange-text text-size-18 font-weight-500">
                    +32%
                    {' '}
                  </span>
                  {' '}
                  {' '}
                </div>
                {' '}
                <h3 className="text-size-46 text-white mb-0">
                  47
                </h3>
                {' '}
                {/* follow box */}
                {' '}
              </div>
              {' '}
              {/* col */}
              {' '}
            </div>
            {' '}
            <div className="col-lg-4 col-md-6 d-flex">
              {' '}
              <div className="follow-box w-100 position-relative">
                {' '}
                <div className="d-flex align-items-center justify-content-between follow-flex">
                  {' '}
                  <span className="d-inline-block text-white font-weight-600 text-size-16">
                    Missed follow-ups
                    {' '}
                  </span>
                  {' '}
                  <span className="d-inline-block orange-text text-size-18 font-weight-500">
                    Automation
                    {' '}
                  </span>
                  {' '}
                  {' '}
                </div>
                {' '}
                <h3 className="text-size-46 text-white mb-0">
                  23
                </h3>
                {' '}
                {/* follow box */}
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
        {/* follow up con */}
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
                              How Do You Handle Marketing Attribution and Source Tracking?
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
                              Every booked call and qualified lead is automatically tagged with its source and touchpoints. This gives you a clean, reliable view of what channels, campaigns, and sequences are actually driving pipeline.
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
                Bring Your Messy
                {' '}
                <br />
                {' '}
                Pipeline.
                {' '}
              </h2>
              {' '}
              <p className="text-white">
                {' '}
                We transform scattered processes into a reliable, revenue-ready engine.
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
      {/* <div class="loader-mask">
        <div class="loader">
          <div></div>
          <div></div>
        </div>
      </div> */}
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
