import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | Opzio — SaaS & AI Startup Solutions for Smart Businesses",
};

export default function AboutPage() {
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
              About Us
            </h1>
            {' '}
            <p className="text-white">
              {' '}
              Outcome-first, measurable, and fully documented. No lock-in, no long
              {' '}
              <br />
              {' '}
              contracts, ever.
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
                  About Us
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
      {/* OUR STORY SECTION */}
      {' '}
      <section
        className="float-left w-100 position-relative our-story-con padding-top padding-bottom main-box"
      >
        {' '}
        <figure>
          {' '}
          <img
            src="/assets/images/story-vector.png"
            alt="story vector"
            className="img-fluid position-absolute story-vector"
          />
          {' '}
        </figure>
        {' '}
        <div className="main-container">
          {' '}
          <div className="row align-items-center">
            {' '}
            <div
              className="col-lg-6 col-md-6 p-0 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.05s"
            >
              {' '}
              <div className="story-img-con">
                {' '}
                <figure>
                  {' '}
                  <img src="/assets/images/story-img.jpg" alt="story image" className="img-fluid" />
                  {' '}
                </figure>
                {' '}
                {/* story img con */}
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
              <div className="story-content-con">
                {' '}
                <div className="heading-title-con mb-0">
                  {' '}
                  <img
                    src="/assets/images/special-img.png"
                    alt="special icon"
                    className="img-fluid text-center special-image"
                  />
                  {' '}
                  <h2 className="text-size-60">
                    Our Story
                  </h2>
                  {' '}
                  <p>
                    {' '}
                    Opzio started from a simple frustration: SMBs drowning in manual admin and scattered tools, with no clear way to get from "we need automation" to "it's live and we can prove the ROI." We focus on one thing—designing and launching reliable workflows in 14 days—measured in hours saved, fewer errors, and faster responses.
                    {' '}
                  </p>
                  {' '}
                  <p>
                    {' '}
                    We don't sell platforms. We sell outcomes: your first (or next) automation, delivered on time, with documentation and a handoff you can run without us.
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
                {/* story content con */}
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
        {/* our story con */}
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
              Automation Built for Real Results
              {' '}
            </h2>
            {' '}
            <p className="wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.05s">
              {' '}
              Our pipelines focus on tangible improvements like time saved, errors reduced, and faster response times.
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
                  <img src="/assets/images/automate-icon1.png" alt="automation" className="img-fluid" />
                  {' '}
                </figure>
                {' '}
                <h3 className="text-size-24">
                  Outcome-First
                </h3>
                {' '}
                <p className="mb-0">
                  {' '}
                  We define success in your terms: hours saved, errors reduced, response time. No vague "efficiency.
                  {' '}
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
                  <img src="/assets/images/automate-icon2.png" alt="automation" className="img-fluid" />
                  {' '}
                </figure>
                {' '}
                <h3 className="text-size-24">
                  Measurable
                </h3>
                {' '}
                <p className="mb-0">
                  {' '}
                  Every delivery includes a way to track impact. We show you the before/after numbers.
                  {' '}
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
                  <img src="/assets/images/automate-icon3.png" alt="automation" className="img-fluid" />
                  {' '}
                </figure>
                {' '}
                <h3 className="text-size-24">
                  Documented
                </h3>
                {' '}
                <p className="mb-0">
                  {' '}
                  Full docs, diagrams, and handover. You own the workflow and can maintain or extend it.
                  {' '}
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
      {/* OUR TEAM SECTION */}
      {' '}
      <section
        className="float-left w-100 our-team-con padding-top padding-bottom position-relative main-box"
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
              Meet the Team
              {' '}
            </h2>
            {' '}
            <p className="wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.05s">
              {' '}
              The people designing smarter systems to remove busy work from your operations.
              {' '}
            </p>
            {' '}
          </div>
          {' '}
          <div className="row all_row">
            {' '}
            <div
              className="col-lg-3 col-md-6 all_column wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.05s"
            >
              {' '}
              <div className="team-box text-center position-relative all_boxes">
                {' '}
                <figure>
                  {' '}
                  <img src="/assets/images/team-person1.jpg" alt="team" className="img-fluid" />
                  {' '}
                </figure>
                {' '}
                <h3 className="text-size-22">
                  Emily Carter
                </h3>
                {' '}
                <span className="designation text-color d-block">
                  {' '}
                  Chief Executive Officer
                </span>
                {' '}
                <ul className="list-unstyled p-0 mb-0">
                  {' '}
                  <li className="d-inline-block">
                    {' '}
                    <a href="https://www.facebook.com/login/" className="ml-0">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    {' '}
                  </li>
                  {' '}
                  <li className="d-inline-block">
                    {' '}
                    <a href="https://www.instagram.com/">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    {' '}
                  </li>
                  {' '}
                  <li className="d-inline-block">
                    {' '}
                    <a href="https://www.linkedin.com/">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    {' '}
                  </li>
                  {' '}
                </ul>
                {' '}
                {/* team box */}
                {' '}
              </div>
              {' '}
              {/* col */}
              {' '}
            </div>
            {' '}
            <div
              className="col-lg-3 col-md-6 all_column wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.5s"
            >
              {' '}
              <div className="team-box text-center position-relative all_boxes">
                {' '}
                <figure>
                  {' '}
                  <img src="/assets/images/team-person2.jpg" alt="team" className="img-fluid" />
                  {' '}
                </figure>
                {' '}
                <h3 className="text-size-22">
                  James Thompson
                </h3>
                {' '}
                <span className="designation text-color d-block">
                  Head of Product
                </span>
                {' '}
                <ul className="list-unstyled p-0 mb-0">
                  {' '}
                  <li className="d-inline-block">
                    {' '}
                    <a href="https://www.facebook.com/login/" className="ml-0">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    {' '}
                  </li>
                  {' '}
                  <li className="d-inline-block">
                    {' '}
                    <a href="https://www.instagram.com/">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    {' '}
                  </li>
                  {' '}
                  <li className="d-inline-block">
                    {' '}
                    <a href="https://www.linkedin.com/">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    {' '}
                  </li>
                  {' '}
                </ul>
                {' '}
                {/* team box */}
                {' '}
              </div>
              {' '}
              {/* col */}
              {' '}
            </div>
            {' '}
            <div
              className="col-lg-3 col-md-6 all_column wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.6s"
            >
              {' '}
              <div className="team-box text-center position-relative all_boxes">
                {' '}
                <figure>
                  {' '}
                  <img src="/assets/images/team-person3.jpg" alt="team" className="img-fluid" />
                  {' '}
                </figure>
                {' '}
                <h3 className="text-size-22">
                  Olivia Brook
                </h3>
                {' '}
                <span className="designation text-color d-block">
                  Lead Software Engineer
                </span>
                {' '}
                <ul className="list-unstyled p-0 mb-0">
                  {' '}
                  <li className="d-inline-block">
                    {' '}
                    <a href="https://www.facebook.com/login/" className="ml-0">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    {' '}
                  </li>
                  {' '}
                  <li className="d-inline-block">
                    {' '}
                    <a href="https://www.instagram.com/">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    {' '}
                  </li>
                  {' '}
                  <li className="d-inline-block">
                    {' '}
                    <a href="https://www.linkedin.com/">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    {' '}
                  </li>
                  {' '}
                </ul>
                {' '}
                {/* team box */}
                {' '}
              </div>
              {' '}
              {/* col */}
              {' '}
            </div>
            {' '}
            <div
              className="col-lg-3 col-md-6 all_column wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.7s"
            >
              {' '}
              <div className="team-box text-center position-relative all_boxes">
                {' '}
                <figure>
                  {' '}
                  <img src="/assets/images/team-person4.jpg" alt="team" className="img-fluid" />
                  {' '}
                </figure>
                {' '}
                <h3 className="text-size-22">
                  Daniel Reed
                </h3>
                {' '}
                <span className="designation text-color d-block">
                  Director
                </span>
                {' '}
                <ul className="list-unstyled p-0 mb-0">
                  {' '}
                  <li className="d-inline-block">
                    {' '}
                    <a href="https://www.facebook.com/login/" className="ml-0">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    {' '}
                  </li>
                  {' '}
                  <li className="d-inline-block">
                    {' '}
                    <a href="https://www.instagram.com/">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    {' '}
                  </li>
                  {' '}
                  <li className="d-inline-block">
                    {' '}
                    <a href="https://www.linkedin.com/">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    {' '}
                  </li>
                  {' '}
                </ul>
                {' '}
                {/* team box */}
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
          {/* main-container */}
          {' '}
        </div>
        {' '}
        {/* our team con */}
        {' '}
      </section>
      {' '}
      {/* OPZIO SHIFT SECTION */}
      {' '}
      <section
        className="float-left w-100 position-relative opzio-shift-con padding-top padding-bottom main-box"
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
              The Opzio Shift
              {' '}
            </h2>
            {' '}
            <p className="wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.05s">
              {' '}
              We don't just "help"—we replace high-friction manual steps with low-maintenance digital pipes.
              {' '}
            </p>
            {' '}
          </div>
          {' '}
          <div className="row position-relative">
            {' '}
            <figure className="shift-elipse">
              {' '}
              <img src="/assets/images/shift-elipse.png" alt="shift elipse" className="img-fluid" />
              {' '}
            </figure>
            {' '}
            <div
              className="col-lg-6 col-md-6 d-flex wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.05s"
            >
              {' '}
              <div className="shift-box w-100">
                {' '}
                <div className="shift-content">
                  {' '}
                  <div className="shift-label bg-accent">
                    High Friction
                  </div>
                  {' '}
                  <h3 className="text-size-24 text-accent">
                    Manual: Leads
                  </h3>
                  {' '}
                  <p>
                    {' '}
                    Copy-pasting lead info from form emails to your CRM. Average
                    {' '}
                    <br />
                    {' '}
                    response time: 4-6 hours.
                    {' '}
                  </p>
                  {' '}
                  {/* shift content */}
                  {' '}
                </div>
                {' '}
                <div className="shift-content mb-0 pb-0 border-bottom-0">
                  {' '}
                  <div className="shift-label bg-accent">
                    Error Prone
                  </div>
                  {' '}
                  <h3 className="text-size-24 text-accent">
                    Manual: Finance
                  </h3>
                  {' '}
                  <p>
                    {' '}
                    Reviewing bank statements to manually mark invoices as paid
                    {' '}
                    <br />
                    {' '}
                    in your accounting software.
                    {' '}
                  </p>
                  {' '}
                  {/* shift content */}
                  {' '}
                </div>
                {' '}
                {/* shift box */}
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
              data-wow-delay="0.05s"
            >
              {' '}
              <div className="shift-box w-100 orange-var">
                {' '}
                <div className="shift-content">
                  {' '}
                  <div className="shift-label bg-orange">
                    Instant
                  </div>
                  {' '}
                  <h3 className="text-size-24 orange-text">
                    Opzio: Lead Flow
                  </h3>
                  {' '}
                  <p className="text-white">
                    {' '}
                    Auto-enrichment & CRM sync. Immediate Slack alert for the sales team.
                    {' '}
                    <br />
                    {' '}
                    Average response: 30 seconds.
                    {' '}
                  </p>
                  {' '}
                  {/* shift content */}
                  {' '}
                </div>
                {' '}
                <div className="shift-content mb-0 pb-0 border-bottom-0">
                  {' '}
                  <div className="shift-label bg-orange">
                    Silent Sync
                  </div>
                  {' '}
                  <h3 className="text-size-24 orange-text">
                    Opzio: Reconciliation
                  </h3>
                  {' '}
                  <p>
                    {' '}
                    Automatic matching of payments via API. One summary email sent
                    {' '}
                    <br />
                    {' '}
                    to your accountant weekly.
                    {' '}
                  </p>
                  {' '}
                  {/* shift content */}
                  {' '}
                </div>
                {' '}
                {/* shift box */}
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
