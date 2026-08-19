import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Team | Opzio — SaaS & AI Startup Solutions for Smart Businesses",
};

export default function TeamPage() {
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
              Team
            </h1>
            {' '}
            <p className="text-white">
              {' '}
              Meet the experts behind the automation pipelines we design
              {' '}
              <br />
              {' '}
              and deliver.
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
                  Team
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
                  <img src="/assets/images/team-person5.jpg" alt="team" className="img-fluid" />
                  {' '}
                </figure>
                {' '}
                <h3 className="text-size-22">
                  Michael Turner
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
                  <img src="/assets/images/team-person6.jpg" alt="team" className="img-fluid" />
                  {' '}
                </figure>
                {' '}
                <h3 className="text-size-22">
                  Alex Carter
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
                  <img src="/assets/images/team-person7.jpg" alt="team" className="img-fluid" />
                  {' '}
                </figure>
                {' '}
                <h3 className="text-size-22">
                  Kevin Brooks
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
                  <img src="/assets/images/team-person8.jpg" alt="team" className="img-fluid" />
                  {' '}
                </figure>
                {' '}
                <h3 className="text-size-22">
                  Sophia Renolds
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
