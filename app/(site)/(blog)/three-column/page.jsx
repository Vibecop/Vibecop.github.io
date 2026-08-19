import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Three Column | Opzio — SaaS & AI Startup Solutions for Smart Businesses",
};

export default function ThreeColumnPage() {
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
              Three Column
            </h1>
            {' '}
            <p className="text-white">
              {' '}
              AI-powered SaaS solutions designed for speed, scalability, and innovation. Helping startups
              {' '}
              <br />
              {' '}
              build smarter systems and grow with confidence in a digital-first world.
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
                  Three Column
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
      {/* MAIN SECTION */}
      {' '}
      <section className="blog-posts blogpage-section three-column-con float-left w-100">
        {' '}
        <div className="container">
          {' '}
          <div
            className="row wow fadeInUp"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            {' '}
            <div id="blog" className="col-xl-12">
              {' '}
              {/* threecolumn-blog */}
              {' '}
              <div className="row wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.4s">
                {' '}
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  {' '}
                  <div className="blog-box blog-box1">
                    {' '}
                    <figure className="blog-image mb-0">
                      {' '}
                      <img
                        src="/assets/images/gallery-img1.jpg"
                        alt="blog image"
                        className="img-fluid"
                        loading="lazy"
                      />
                      {' '}
                    </figure>
                    {' '}
                    <div className="lower-portion">
                      {' '}
                      <div className="span-i-con">
                        {' '}
                        <i className="fa-solid fa-user"></i>
                        {' '}
                        <span className="text-size-14 text-mr">
                          By : Opzio Team
                        </span>
                        {' '}
                        <i className="tag-mb fa-solid fa-tag"></i>
                        {' '}
                        <span className="text-size-14">
                          Digital Solutions
                        </span>
                        {' '}
                      </div>
                      {' '}
                      <Link href="/single-blog">
                        {' '}
                        <h2 className="text-size-22">
                          {' '}
                          Opzio’s Commitment to Scalable, Secure & High-Performance Digital Systems
                          {' '}
                        </h2>
                        {' '}
                      </Link>
                      {' '}
                    </div>
                    {' '}
                    <div className="button-portion">
                      {' '}
                      <div className="date">
                        {' '}
                        <i className="mb-0 calendar-ml fa-solid fa-calendar-days"></i>
                        {' '}
                        <span className="mb-0 text-size-14">
                          April 02, 2026
                        </span>
                        {' '}
                      </div>
                      {' '}
                      <div className="button">
                        {' '}
                        <Link className="mb-0 read_more text-decoration-none" href="/single-blog">
                          Read More
                        </Link>
                        {' '}
                      </div>
                      {' '}
                    </div>
                    {' '}
                  </div>
                  {' '}
                </div>
                {' '}
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  {' '}
                  <div className="blog-box blog-box2">
                    {' '}
                    <figure className="blog-image mb-0">
                      {' '}
                      <img
                        src="/assets/images/gallery-img2.jpg"
                        alt="blog image"
                        className="img-fluid"
                        loading="lazy"
                      />
                      {' '}
                    </figure>
                    {' '}
                    <div className="lower-portion">
                      {' '}
                      <div className="span-i-con">
                        {' '}
                        <i className="fa-solid fa-user"></i>
                        {' '}
                        <span className="text-size-14 text-mr">
                          By : Opzio Team
                        </span>
                        {' '}
                        <i className="tag-mb fa-solid fa-tag"></i>
                        {' '}
                        <span className="text-size-14">
                          Project Planning
                        </span>
                        {' '}
                      </div>
                      {' '}
                      <Link href="/single-blog">
                        {' '}
                        <h2 className="text-size-22">
                          {' '}
                          How Strategic Planning Improves Digital Project Efficiency & Quality
                          {' '}
                        </h2>
                        {' '}
                      </Link>
                      {' '}
                    </div>
                    {' '}
                    <div className="button-portion">
                      {' '}
                      <div className="date">
                        {' '}
                        <i className="mb-0 calendar-ml fa-solid fa-calendar-days"></i>
                        {' '}
                        <span className="mb-0 text-size-14">
                          April 02, 2026
                        </span>
                        {' '}
                      </div>
                      {' '}
                      <div className="button">
                        {' '}
                        <Link className="mb-0 read_more text-decoration-none" href="/single-blog">
                          Read More
                        </Link>
                        {' '}
                      </div>
                      {' '}
                    </div>
                    {' '}
                  </div>
                  {' '}
                </div>
                {' '}
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  {' '}
                  <div className="blog-box">
                    {' '}
                    <figure className="blog-image mb-0">
                      {' '}
                      <img
                        src="/assets/images/gallery-img3.jpg"
                        alt="blog image"
                        className="img-fluid"
                        loading="lazy"
                      />
                      {' '}
                    </figure>
                    {' '}
                    <div className="lower-portion">
                      {' '}
                      <div className="span-i-con">
                        {' '}
                        <i className="fa-solid fa-user"></i>
                        {' '}
                        <span className="text-size-14 text-mr">
                          By : Opzio Team
                        </span>
                        {' '}
                        <i className="tag-mb fa-solid fa-tag"></i>
                        {' '}
                        <span className="text-size-14">
                          Technology Stack
                        </span>
                        {' '}
                      </div>
                      {' '}
                      <Link href="/single-blog">
                        {' '}
                        <h2 className="text-size-22">
                          {' '}
                          Choosing the Right Technology Stack for Scalable Digital Growth
                          {' '}
                        </h2>
                        {' '}
                      </Link>
                      {' '}
                    </div>
                    {' '}
                    <div className="button-portion">
                      {' '}
                      <div className="date">
                        {' '}
                        <i className="mb-0 calendar-ml fa-solid fa-calendar-days"></i>
                        {' '}
                        <span className="mb-0 text-size-14">
                          April 02, 2026
                        </span>
                        {' '}
                      </div>
                      {' '}
                      <div className="button">
                        {' '}
                        <Link className="mb-0 read_more text-decoration-none" href="/single-blog">
                          Read More
                        </Link>
                        {' '}
                      </div>
                      {' '}
                    </div>
                    {' '}
                  </div>
                  {' '}
                </div>
                {' '}
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  {' '}
                  <div className="blog-box">
                    {' '}
                    <div className="post-item-wrap position-relative">
                      {' '}
                      <div className="post-audio position-relative">
                        {' '}
                        <Link href="/single-blog">
                          {' '}
                          <img
                            src="/assets/images/gallery-img4.jpg"
                            alt="blog image"
                            className="img-fluid"
                            loading="lazy"
                          />
                          {' '}
                        </Link>
                        {' '}
                      </div>
                      {' '}
                      <div className="lower-portion">
                        {' '}
                        <div className="span-i-con">
                          {' '}
                          <i className="fa-solid fa-user"></i>
                          {' '}
                          <span className="text-size-14 text-mr">
                            By : Opzio Team
                          </span>
                          {' '}
                          <i className="tag-mb fa-solid fa-tag"></i>
                          {' '}
                          <span className="text-size-14">
                            Maintenance Strategy
                          </span>
                          {' '}
                        </div>
                        {' '}
                        <Link href="/single-blog">
                          {' '}
                          <h2 className="text-size-22">
                            {' '}
                            Preventive System Maintenance That Enhances Performance & Stability
                            {' '}
                          </h2>
                          {' '}
                        </Link>
                        {' '}
                      </div>
                      {' '}
                      <div className="button-portion">
                        {' '}
                        <div className="date">
                          {' '}
                          <i className="mb-0 calendar-ml fa-solid fa-calendar-days"></i>
                          {' '}
                          <span className="mb-0 text-size-14">
                            April 02, 2026
                          </span>
                          {' '}
                        </div>
                        {' '}
                        <div className="button">
                          {' '}
                          <Link className="mb-0 read_more text-decoration-none" href="/single-blog">
                            Read More
                          </Link>
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
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  {' '}
                  <div className="blog-box">
                    {' '}
                    <div className="post-item-wrap position-relative">
                      {' '}
                      <div className="post-video">
                        {' '}
                        <div className="embed-container">
                          {' '}
                          <iframe src="https://player.vimeo.com/video/157467640?background=1"></iframe>
                          {' '}
                        </div>
                        {' '}
                      </div>
                      {' '}
                      <div className="lower-portion">
                        {' '}
                        <div className="span-i-con">
                          {' '}
                          <i className="fa-solid fa-user"></i>
                          {' '}
                          <span className="text-size-14 text-mr">
                            By : Opzio Team
                          </span>
                          {' '}
                          <i className="tag-mb fa-solid fa-tag"></i>
                          {' '}
                          <span className="text-size-14">
                            System Performance
                          </span>
                          {' '}
                        </div>
                        {' '}
                        <Link href="/single-blog">
                          {' '}
                          <h2 className="text-size-22">
                            {' '}
                            How Quality Development Practices Improve System Stability & Performance
                            {' '}
                          </h2>
                          {' '}
                        </Link>
                        {' '}
                      </div>
                      {' '}
                      <div className="button-portion">
                        {' '}
                        <div className="date">
                          {' '}
                          <i className="mb-0 calendar-ml fa-solid fa-calendar-days"></i>
                          {' '}
                          <span className="mb-0 text-size-14">
                            April 02, 2026
                          </span>
                          {' '}
                        </div>
                        {' '}
                        <div className="button">
                          {' '}
                          <Link className="mb-0 read_more text-decoration-none" href="/single-blog">
                            Read More
                          </Link>
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
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  {' '}
                  <div className="blog-box blogpost-box">
                    {' '}
                    <div className="post-item-wrap position-relative">
                      {' '}
                      <div className="post-video">
                        {' '}
                        <div className="fluid-width-video-wrapper">
                          {' '}
                          <iframe width="560" height="376" src="https://www.youtube.com/embed/dA8Smj5tZOQ"></iframe>
                          {' '}
                        </div>
                        {' '}
                      </div>
                      {' '}
                      <div className="infinite-blog float-left">
                        {' '}
                        <div className="lower-portion">
                          {' '}
                          <div className="span-i-con">
                            {' '}
                            <i className="fa-solid fa-user"></i>
                            {' '}
                            <span className="text-size-14 text-mr">
                              By : Opzio Team
                            </span>
                            {' '}
                            <i className="tag-mb fa-solid fa-tag"></i>
                            {' '}
                            <span className="text-size-14">
                              Industry Insights
                            </span>
                            {' '}
                          </div>
                          {' '}
                          <Link href="/single-blog">
                            {' '}
                            <h2 className="text-size-22">
                              {' '}
                              Why Professional Digital Services Matter for Modern Business Growth
                              {' '}
                            </h2>
                            {' '}
                          </Link>
                          {' '}
                        </div>
                        {' '}
                        <div className="button-portion">
                          {' '}
                          <div className="date">
                            {' '}
                            <i className="mb-0 calendar-ml fa-solid fa-calendar-days"></i>
                            {' '}
                            <span className="mb-0 text-size-14">
                              April 02, 2026
                            </span>
                            {' '}
                          </div>
                          {' '}
                          <div className="button">
                            {' '}
                            <Link className="mb-0 read_more text-decoration-none" href="/single-blog">
                              Read More
                            </Link>
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
