import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us | Opzio — SaaS & AI Startup Solutions for Smart Businesses",
};

export default function ContactPage() {
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
              Contact
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
                  Contact
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
      {/* BOOK AN AUTOMATION AUDIT SECTION */}
      {' '}
      <section
        className="float-left w-100 position-relative padding-top padding-bottom main-box book-automation-audit-con"
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
              Book an Automation Audit
              {' '}
            </h2>
            {' '}
            <p className="wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.05s">
              {' '}
              15 minutes. We'll map one workflow and give you a clear next step. No pitch, no obligation.
              {' '}
            </p>
            {' '}
          </div>
          {' '}
          <div className="automation-audit-form">
            {' '}
            {/* Top badges */}
            {' '}
            <ul
              className="list-unstyled p-0 top-badges wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.05s"
            >
              {' '}
              <li className="position-relative">
                {' '}
                <i className="fa-solid fa-check"></i>
                {' '}
                15 min
                {' '}
              </li>
              {' '}
              <li className="position-relative">
                {' '}
                <i className="fa-solid fa-check"></i>
                {' '}
                No spam
                {' '}
              </li>
              {' '}
              <li className="position-relative">
                {' '}
                <i className="fa-solid fa-check"></i>
                {' '}
                You get a scope doc
                {' '}
              </li>
              {' '}
            </ul>
            {' '}
            <div
              className="form-box wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.05s"
            >
              {' '}
              <div className="form-inner-wrap">
                {' '}
                <h3 className="form-title">
                  What do you need help with?
                </h3>
                {' '}
                {/* Options */}
                {' '}
                <div className="option-buttons">
                  {' '}
                  <button className="option-btn active ml-0">
                    {' '}
                    Ops / back-office
                    {' '}
                  </button>
                  {' '}
                  <button className="option-btn">
                    Sales / lead gen
                  </button>
                  {' '}
                  <button className="option-btn mr-0">
                    E-commerce
                  </button>
                  {' '}
                </div>
                {' '}
                <form id="auditForm">
                  {' '}
                  {/* Name */}
                  {' '}
                  <div className="form-group custom-group">
                    {' '}
                    <label>
                      Name *
                    </label>
                    {' '}
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Kevin Andrew"
                      required={true}
                    />
                    {' '}
                  </div>
                  {' '}
                  {/* Email */}
                  {' '}
                  <div className="form-group custom-group">
                    {' '}
                    <label>
                      Email *
                    </label>
                    {' '}
                    <input
                      type="email"
                      className="form-control custom-input"
                      placeholder="kevinandrew@gmail.com"
                      required={true}
                    />
                    {' '}
                  </div>
                  {' '}
                  {/* Goal */}
                  {' '}
                  <div className="form-group custom-group">
                    {' '}
                    <label>
                      Goal (one workflow you want to automate first)
                    </label>
                    {' '}
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="e.g Form leads into CRM + calendar link"
                    />
                    {' '}
                  </div>
                  {' '}
                  {/* Tools */}
                  {' '}
                  <div className="form-group custom-group">
                    {' '}
                    <label>
                      Tools You Use (CRM, email, sheets, etc.)
                    </label>
                    {' '}
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="e.g Hubspot, Gmail, Google Sheets"
                    />
                    {' '}
                  </div>
                  {' '}
                  {/* Pain */}
                  {' '}
                  <div className="form-group custom-group">
                    {' '}
                    <label>
                      Biggest Pain Right Now
                    </label>
                    {' '}
                    <textarea
                      className="form-control custom-input textarea"
                      placeholder="e.g Leads sit for hours before anyone follows up"
                    ></textarea>
                    {' '}
                  </div>
                  {' '}
                  {/* Timeline */}
                  {' '}
                  <div className="form-group custom-group">
                    {' '}
                    <label>
                      Ideal Timeline
                    </label>
                    {' '}
                    <select className="form-control custom-input">
                      {' '}
                      <option>
                        Select
                      </option>
                      {' '}
                      <option>
                        ASAP
                      </option>
                      {' '}
                      <option>
                        1-2 Weeks
                      </option>
                      {' '}
                      <option>
                        1 Month
                      </option>
                      {' '}
                    </select>
                    {' '}
                  </div>
                  {' '}
                  {/* Submit */}
                  {' '}
                  <button type="submit" className="submit-btn">
                    Send Request
                  </button>
                  {' '}
                </form>
                {' '}
                {/* form-inner-wrap */}
                {' '}
              </div>
              {' '}
              {/* form box */}
              {' '}
            </div>
            {' '}
            {/* automation-audit-form */}
            {' '}
          </div>
          {' '}
          {/* main container */}
          {' '}
        </div>
        {' '}
        {/* book automation audit */}
        {' '}
      </section>
      {' '}
      {/* WHAT HAPPENS NEXT SECTION */}
      {' '}
      <section
        className="float-left w-100 position-relative automation-result-con padding-top padding-bottom main-box wt-happens-next-con"
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
              What Happens Next
              {' '}
            </h2>
            {' '}
            <p className="wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.05s">
              {' '}
              Understand the process and timeline after you reach out to us.
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
                <span className="text-size-40">
                  01
                </span>
                {' '}
                <h3 className="text-size-24">
                  {' '}
                  We reply within
                  {' '}
                  <br />
                  {' '}
                  24 hours
                  {' '}
                </h3>
                {' '}
                <p className="mb-0">
                  {' '}
                  We'll suggest a 15-min slot and ask for any extra context.
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
                <span className="text-size-40">
                  02
                </span>
                {' '}
                <h3 className="text-size-24">
                  {' '}
                  15-min
                  {' '}
                  <br />
                  {' '}
                  Audit call
                  {' '}
                </h3>
                {' '}
                <p className="mb-0">
                  {' '}
                  We map your workflow, tools, and success criteria. No pitch.
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
                <span className="text-size-40">
                  03
                </span>
                {' '}
                <h3 className="text-size-24">
                  {' '}
                  You Get
                  {' '}
                  <br />
                  {' '}
                  a Scope Doc
                  {' '}
                </h3>
                {' '}
                <p className="mb-0">
                  {' '}
                  Fixed scope, timeline, and price. You decide if you want to proceed.
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
