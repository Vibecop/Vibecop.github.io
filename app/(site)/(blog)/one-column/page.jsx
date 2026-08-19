import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "One Column | Opzio — SaaS & AI Startup Solutions for Smart Businesses",
};

export default function OneColumnPage() {
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
              One Column
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
                  One Column
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
      {/* ======================================= */}
      {' '}
      {/* ==========   {One Column*}   ========== */}
      {' '}
      {/* ======================================= */}
      {' '}
      <div className="blog-posts blogpage-section float-left w-100">
        {' '}
        <div className="container">
          {' '}
          <div className="row wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.02s">
            {' '}
            <div id="blog" className="col-xl-12">
              {' '}
              <div className="blog-box onecolumn-blog float-left w-100 post-item mb-4">
                {' '}
                <div className="post-item-wrap position-relative">
                  {' '}
                  <div className="post-image">
                    {' '}
                    <Link href="/single-blog">
                      <img alt="blog image" src="/assets/images/post-featured.jpg" loading="lazy" />
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
                        By : Admin
                      </span>
                      {' '}
                      <i className="tag-mb fa-solid fa-tag"></i>
                      {' '}
                      <span className="text-size-14">
                        Roofing Innovation
                      </span>
                      {' '}
                    </div>
                    {' '}
                    <p className="mb-0 text-size-16">
                      {' '}
                      Modern roofing is evolving rapidly. Discover how advanced materials, precision installation techniques, and energy-efficient solutions are shaping the future of construction — and how Roofora stays ahead in delivering durable, reliable roofing systems.
                      {' '}
                    </p>
                    {' '}
                  </div>
                  {' '}
                  <div className="button-portion loadone_twocol">
                    {' '}
                    <div className="date">
                      {' '}
                      <i className="mb-0 calendar-ml fa-solid fa-calendar-days"></i>
                      {' '}
                      <span className="mb-0 text-size-14">
                        April 02,2026
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
              <div className="blog-box onecolumn-blog float-left w-100 post-item mb-4">
                {' '}
                <div className="post-item-wrap position-relative">
                  {' '}
                  <div id="blogslider" className="carousel slide" data-ride="carousel">
                    {' '}
                    <div className="carousel-inner">
                      {' '}
                      <div className="carousel-item active">
                        {' '}
                        <img src="/assets/images/post-featured2.jpg" alt="blog image" loading="lazy" />
                        {' '}
                      </div>
                      {' '}
                      <div className="carousel-item">
                        {' '}
                        <img src="/assets/images/post-featured3.jpg" alt="blog image" loading="lazy" />
                        {' '}
                      </div>
                      {' '}
                      <div className="carousel-item">
                        {' '}
                        <img src="/assets/images/post-featured4.jpg" alt="blog image" loading="lazy" />
                        {' '}
                      </div>
                      {' '}
                    </div>
                    {' '}
                    <a className="carousel-control-prev" href="#blogslider" data-slide="prev">
                      {' '}
                      <span className="carousel-control-prev-icon"></span>
                      {' '}
                    </a>
                    {' '}
                    <a className="carousel-control-next" href="#blogslider" data-slide="next">
                      {' '}
                      <span className="carousel-control-next-icon"></span>
                      {' '}
                    </a>
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
                        By : Admin
                      </span>
                      {' '}
                      <i className="tag-mb fa-solid fa-tag"></i>
                      {' '}
                      <span className="text-size-14">
                        Construction Services
                      </span>
                      {' '}
                    </div>
                    {' '}
                    <p className="mb-0 text-size-16">
                      {' '}
                      Roofora delivers professional roofing and construction services tailored for modern buildings. From installation to repair, our expert team ensures long-lasting quality, structural strength, and complete customer satisfaction on every project.
                      {' '}
                    </p>
                    {' '}
                  </div>
                  {' '}
                  <div className="button-portion loadone_twocol">
                    {' '}
                    <div className="date">
                      {' '}
                      <i className="mb-0 calendar-ml fa-solid fa-calendar-days"></i>
                      {' '}
                      <span className="mb-0 text-size-14">
                        April 02,2026
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
              <div className="blog-box onecolumn-blog float-left w-100 post-item mb-4">
                {' '}
                <div className="post-item-wrap position-relative">
                  {' '}
                  <div className="post-image">
                    {' '}
                    <Link href="/single-blog">
                      <img alt="blog image" src="/assets/images/post-featured4.jpg" loading="lazy" />
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
                        By : Admin
                      </span>
                      {' '}
                      <i className="tag-mb fa-solid fa-tag"></i>
                      {' '}
                      <span className="text-size-14">
                        Project Insights
                      </span>
                      {' '}
                    </div>
                    {' '}
                    <p className="mb-0 text-size-16">
                      {' '}
                      At Roofora, we believe high-quality roofing doesn’t have to be costly. Explore how our efficient construction methods and premium materials help deliver strong, weather-resistant roofs while keeping projects affordable and reliable.
                      {' '}
                    </p>
                    {' '}
                  </div>
                  {' '}
                  <div className="button-portion loadone_twocol">
                    {' '}
                    <div className="date">
                      {' '}
                      <i className="mb-0 calendar-ml fa-solid fa-calendar-days"></i>
                      {' '}
                      <span className="mb-0 text-size-14">
                        April 02,2026
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
              <div className="blog-box onecolumn-blog float-left w-100 post-item mb-4">
                {' '}
                <div className="post-item-wrap position-relative">
                  {' '}
                  <div className="post-audio position-relative">
                    {' '}
                    <Link href="/single-blog">
                      <img alt="blog image" src="/assets/images/post-featured3.jpg" loading="lazy" />
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
                        By : Admin
                      </span>
                      {' '}
                      <i className="tag-mb fa-solid fa-tag"></i>
                      {' '}
                      <span className="text-size-14">
                        Maintenance Tips
                      </span>
                      {' '}
                    </div>
                    {' '}
                    <p className="mb-0 text-size-16">
                      {' '}
                      Keep your roof in top condition. Roofora provides expert maintenance tips, regular inspections, and smart repair solutions to help extend roof life and protect your property from weather damage.
                      {' '}
                    </p>
                    {' '}
                  </div>
                  {' '}
                  <div className="button-portion loadone_twocol">
                    {' '}
                    <div className="date">
                      {' '}
                      <i className="mb-0 calendar-ml fa-solid fa-calendar-days"></i>
                      {' '}
                      <span className="mb-0 text-size-14">
                        April 02,2026
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
              <div className="blog-box onecolumn-blog float-left w-100 post-item mb-4">
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
                        By : Admin
                      </span>
                      {' '}
                      <i className="tag-mb fa-solid fa-tag"></i>
                      {' '}
                      <span className="text-size-14">
                        Quality Standards
                      </span>
                      {' '}
                    </div>
                    {' '}
                    <p className="mb-0 text-size-16">
                      {' '}
                      Choosing the right roofing partner makes all the difference. Roofora focuses on safety, durability, and precision workmanship to ensure every roofing project meets the highest industry standards.
                      {' '}
                    </p>
                    {' '}
                  </div>
                  {' '}
                  <div className="button-portion loadone_twocol">
                    {' '}
                    <div className="date">
                      {' '}
                      <i className="mb-0 calendar-ml fa-solid fa-calendar-days"></i>
                      {' '}
                      <span className="mb-0 text-size-14">
                        April 02,2026
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
              <div className="blog-box onecolumn-blog float-left w-100 post-item mb-0">
                {' '}
                <div className="post-item-wrap position-relative">
                  {' '}
                  <div className="post-video">
                    {' '}
                    <div className="embed-container">
                      {' '}
                      <iframe width="560" height="376" src="https://www.youtube.com/embed/dA8Smj5tZOQ"></iframe>
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
                        By : Admin
                      </span>
                      {' '}
                      <i className="tag-mb fa-solid fa-tag"></i>
                      {' '}
                      <span className="text-size-14">
                        Construction Trends
                        {' '}
                      </span>
                      {' '}
                    </div>
                    {' '}
                    <p className="mb-0 text-size-16">
                      {' '}
                      With a commitment to innovation, sustainability, and client-focused solutions, Roofora continues to deliver modern roofing and construction services that meet the demands of today’s residential and commercial projects.
                      {' '}
                    </p>
                    {' '}
                  </div>
                  {' '}
                  <div className="button-portion loadone_twocol">
                    {' '}
                    <div className="date">
                      {' '}
                      <i className="mb-0 calendar-ml fa-solid fa-calendar-days"></i>
                      {' '}
                      <span className="mb-0 text-size-14">
                        April 02,2026
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
