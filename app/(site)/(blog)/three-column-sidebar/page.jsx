import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Three Column Sidebar | Opzio — SaaS & AI Startup Solutions for Smart Businesses",
};

export default function ThreeColumnSidebarPage() {
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
                  Three Column Sidebar
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
      {/* End Slider Section */}
      {' '}
      <section className="blog-posts blogpage-section light-violet-bg float-left w-100">
        {' '}
        <div className="container">
          {' '}
          <div className="row m-0">
            {' '}
            <div
              className="col-xl-9 col-lg-9 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.05s"
            >
              {' '}
              <div id="blog" className="three-column col-xl-12">
                {' '}
                <div className="row">
                  {' '}
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    {' '}
                    <div className="blog-box threecolumn-blog">
                      {' '}
                      <div className="post-image">
                        {' '}
                        <Link href="/single-blog">
                          {' '}
                          <img alt="blog image" src="/assets/images/standard_post_img01.jpg" loading="lazy" />
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
                            Business Growth
                          </span>
                          {' '}
                        </div>
                        {' '}
                        <p className="mb-0 text-size-16">
                          {' '}
                          Enhance your digital presence with smart business solutions. Opzio combines innovative strategies and modern tools to help businesses grow and stay competitive.
                          {' '}
                        </p>
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
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    {' '}
                    <div className="blog-box threecolumn-blog">
                      {' '}
                      <div className="post-item-wrap position-relative">
                        {' '}
                        <div id="blogslider" className="carousel slide" data-ride="carousel">
                          {' '}
                          <div className="carousel-inner">
                            {' '}
                            <div className="carousel-item">
                              {' '}
                              <img src="/assets/images/standard_post_img02.jpg" alt="blog image" loading="lazy" />
                              {' '}
                            </div>
                            {' '}
                            <div className="carousel-item active carousel-item-left">
                              {' '}
                              <img src="/assets/images/standard_post_img04.jpg" alt="blog image" loading="lazy" />
                              {' '}
                            </div>
                            {' '}
                            <div className="carousel-item carousel-item-next carousel-item-left">
                              {' '}
                              <img src="/assets/images/standard_post_img06.jpg" alt="blog image" loading="lazy" />
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
                              By : Opzio Team
                            </span>
                            {' '}
                            <i className="tag-mb fa-solid fa-tag"></i>
                            {' '}
                            <span className="text-size-14">
                              Data Security
                            </span>
                            {' '}
                          </div>
                          {' '}
                          <p className="mb-0 text-size-16">
                            {' '}
                            Security is our top priority. Opzio follows industry standards to protect data, ensure system reliability, and deliver safe and efficient digital solutions.
                            {' '}
                          </p>
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
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    {' '}
                    <div className="blog-box threecolumn-blog">
                      {' '}
                      <div className="post-image">
                        {' '}
                        <Link href="/single-blog">
                          {' '}
                          <img alt="blog image" src="/assets/images/standard_post_img03.jpg" loading="lazy" />
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
                            Project Efficiency
                          </span>
                          {' '}
                        </div>
                        {' '}
                        <p className="mb-0 text-size-16">
                          {' '}
                          Timely delivery matters. Opzio uses advanced tools and streamlined workflows to complete projects efficiently without compromising quality or performance.
                          {' '}
                        </p>
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
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    {' '}
                    <div className="blog-box threecolumn-blog">
                      {' '}
                      <div className="post-item-wrap position-relative">
                        {' '}
                        <div className="post-audio position-relative">
                          {' '}
                          <div className="post-image">
                            {' '}
                            <Link href="/single-blog">
                              {' '}
                              <img alt="blog image" src="/assets/images/standard_post_img05.jpg" loading="lazy" />
                              {' '}
                            </Link>
                            {' '}
                          </div>
                          {' '}
                          <span className="post-meta-category"></span>
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
                              Smart Solutions
                            </span>
                            {' '}
                          </div>
                          {' '}
                          <p className="mb-0 text-size-16">
                            {' '}
                            Opzio delivers cost-effective digital solutions with strong performance. Our expert team ensures scalability, reliability, and long-term value for modern businesses.
                            {' '}
                          </p>
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
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    {' '}
                    <div className="blog-box threecolumn-blog">
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
                              User Experience
                            </span>
                            {' '}
                          </div>
                          {' '}
                          <p className="mb-0 text-size-16">
                            {' '}
                            Choosing the right digital partner matters. Opzio focuses on seamless experience, smart integration, and dependable services for business success.
                            {' '}
                          </p>
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
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    {' '}
                    <div className="blog-box threecolumn-blog blogpost-box">
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
                                Tech Innovation
                              </span>
                              {' '}
                            </div>
                            {' '}
                            <p className="mb-0 text-size-16">
                              {' '}
                              Technology evolves rapidly. Opzio adopts modern trends, automation, and innovative approaches to build secure and future-ready digital solutions.
                              {' '}
                            </p>
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
            <div
              className="sidebar sticky-sidebar col-lg-3 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              {' '}
              <div className="theiaStickySidebar">
                {' '}
                <div className="widget widget-newsletter">
                  {' '}
                  <form id="widget-search-form-sidebar" className="form-inline">
                    {' '}
                    <div className="input-group">
                      {' '}
                      <input
                        type="text"
                        aria-required="true"
                        name="q"
                        className="form-control widget-search-form"
                        placeholder="Search for roofing tips..."
                      />
                      {' '}
                      <div className="input-group-append">
                        {' '}
                        <span className="input-group-btn">
                          {' '}
                          <button type="submit" id="widget-widget-search-form-button" className="btn">
                            {' '}
                            <i className="fa fa-search"></i>
                            {' '}
                          </button>
                          {' '}
                        </span>
                        {' '}
                      </div>
                      {' '}
                    </div>
                    {' '}
                  </form>
                  {' '}
                </div>
                {' '}
                <div className="widget">
                  {' '}
                  <div className="tabs">
                    {' '}
                    <ul className="nav nav-tabs" id="tabs-posts" role="tablist">
                      {' '}
                      <li className="nav-item">
                        {' '}
                        <a
                          className="nav-link active"
                          id="home-tab"
                          data-toggle="tab"
                          href="#popular"
                          role="tab"
                          aria-controls="popular"
                          aria-selected="true"
                        >
                          Popular
                        </a>
                        {' '}
                      </li>
                      {' '}
                      <li className="nav-item">
                        {' '}
                        <a
                          className="nav-link"
                          id="profile-tab"
                          data-toggle="tab"
                          href="#featured"
                          role="tab"
                          aria-controls="featured"
                          aria-selected="false"
                        >
                          Featured
                        </a>
                        {' '}
                      </li>
                      {' '}
                      <li className="nav-item">
                        {' '}
                        <a
                          className="nav-link"
                          id="contact-tab"
                          data-toggle="tab"
                          href="#recent"
                          role="tab"
                          aria-controls="recent"
                          aria-selected="false"
                        >
                          Recent
                        </a>
                        {' '}
                      </li>
                      {' '}
                    </ul>
                    {' '}
                    <div className="tab-content" id="tabs-posts-content">
                      {' '}
                      <div className="tab-pane fade show active" id="popular" role="tabpanel">
                        {' '}
                        <div className="post-thumbnail-list">
                          {' '}
                          <div className="post-thumbnail-entry">
                            {' '}
                            <img alt="blog image" src="/assets/images/side_post_img01.jpg" loading="lazy" />
                            {' '}
                            <div className="post-thumbnail-content">
                              {' '}
                              <Link href="/single-blog">
                                Top Strategies for Scaling Digital Business Growth
                              </Link>
                              {' '}
                              <span className="post-date">
                                <i className="far fa-clock"></i>
                                {' '}
                                1d ago
                              </span>
                              {' '}
                              <span className="post-category">
                                <i className="fa fa-tag"></i>
                                {' '}
                                Business Strategy
                              </span>
                              {' '}
                            </div>
                            {' '}
                          </div>
                          {' '}
                          <div className="post-thumbnail-entry">
                            {' '}
                            <img alt="blog image" src="/assets/images/side_post_img02.jpg" loading="lazy" />
                            {' '}
                            <div className="post-thumbnail-content">
                              {' '}
                              <Link href="/single-blog">
                                How Opzio Ensures Secure & Reliable Digital Systems
                              </Link>
                              {' '}
                              <span className="post-date">
                                <i className="far fa-clock"></i>
                                {' '}
                                3d ago
                              </span>
                              {' '}
                              <span className="post-category">
                                <i className="fa fa-tag"></i>
                                {' '}
                                Security & Systems
                              </span>
                              {' '}
                            </div>
                            {' '}
                          </div>
                          {' '}
                          <div className="post-thumbnail-entry">
                            {' '}
                            <img alt="blog image" src="/assets/images/side_post_img03.jpg" loading="lazy" />
                            {' '}
                            <div className="post-thumbnail-content">
                              {' '}
                              <Link href="/single-blog">
                                Signs Your Business Needs Digital Transformation
                              </Link>
                              {' '}
                              <span className="post-date">
                                <i className="far fa-clock"></i>
                                {' '}
                                5h ago
                              </span>
                              {' '}
                              <span className="post-category">
                                <i className="fa fa-tag"></i>
                                {' '}
                                Digital Growth
                              </span>
                              {' '}
                            </div>
                            {' '}
                          </div>
                          {' '}
                        </div>
                        {' '}
                      </div>
                      {' '}
                      <div className="tab-pane fade" id="featured" role="tabpanel">
                        {' '}
                        <div className="post-thumbnail-list">
                          {' '}
                          <div className="post-thumbnail-entry">
                            {' '}
                            <img alt="blog image" src="/assets/images/side_post_img03.jpg" loading="lazy" />
                            {' '}
                            <div className="post-thumbnail-content">
                              {' '}
                              <Link href="/single-blog">
                                Signs Your Business Needs Digital Transformation
                              </Link>
                              {' '}
                              <span className="post-date">
                                <i className="far fa-clock"></i>
                                {' '}
                                2d ago
                              </span>
                              {' '}
                              <span className="post-category">
                                <i className="fa fa-tag"></i>
                                {' '}
                                Digital Growth
                              </span>
                              {' '}
                            </div>
                            {' '}
                          </div>
                          {' '}
                          <div className="post-thumbnail-entry">
                            {' '}
                            <img alt="blog image" src="/assets/images/side_post_img02.jpg" loading="lazy" />
                            {' '}
                            <div className="post-thumbnail-content">
                              {' '}
                              <Link href="/single-blog">
                                How Opzio Ensures Secure & Reliable Digital Systems
                              </Link>
                              {' '}
                              <span className="post-date">
                                <i className="far fa-clock"></i>
                                {' '}
                                4h ago
                              </span>
                              {' '}
                              <span className="post-category">
                                <i className="fa fa-tag"></i>
                                {' '}
                                Security & Systems
                              </span>
                              {' '}
                            </div>
                            {' '}
                          </div>
                          {' '}
                          <div className="post-thumbnail-entry">
                            {' '}
                            <img alt="blog image" src="/assets/images/side_post_img01.jpg" loading="lazy" />
                            {' '}
                            <div className="post-thumbnail-content">
                              {' '}
                              <Link href="/single-blog">
                                Top Strategies for Scaling Digital Business Growth
                              </Link>
                              {' '}
                              <span className="post-date">
                                <i className="far fa-clock"></i>
                                {' '}
                                6h ago
                              </span>
                              {' '}
                              <span className="post-category">
                                <i className="fa fa-tag"></i>
                                {' '}
                                Business Strategy
                              </span>
                              {' '}
                            </div>
                            {' '}
                          </div>
                          {' '}
                        </div>
                        {' '}
                      </div>
                      {' '}
                      <div className="tab-pane fade" id="recent" role="tabpanel">
                        {' '}
                        <div className="post-thumbnail-list">
                          {' '}
                          <div className="post-thumbnail-entry">
                            {' '}
                            <img alt="blog image" src="/assets/images/side_post_img02.jpg" loading="lazy" />
                            {' '}
                            <div className="post-thumbnail-content">
                              {' '}
                              <Link href="/single-blog">
                                How Opzio Ensures Secure & Reliable Digital Systems
                              </Link>
                              {' '}
                              <span className="post-date">
                                <i className="far fa-clock"></i>
                                {' '}
                                1d ago
                              </span>
                              {' '}
                              <span className="post-category">
                                <i className="fa fa-tag"></i>
                                {' '}
                                Security & Systems
                              </span>
                              {' '}
                            </div>
                            {' '}
                          </div>
                          {' '}
                          <div className="post-thumbnail-entry">
                            {' '}
                            <img alt="blog image" src="/assets/images/side_post_img03.jpg" loading="lazy" />
                            {' '}
                            <div className="post-thumbnail-content">
                              {' '}
                              <Link href="/single-blog">
                                Signs Your Business Needs Digital Transformation
                              </Link>
                              {' '}
                              <span className="post-date">
                                <i className="far fa-clock"></i>
                                {' '}
                                7h ago
                              </span>
                              {' '}
                              <span className="post-category">
                                <i className="fa fa-tag"></i>
                                {' '}
                                Digital Growth
                              </span>
                              {' '}
                            </div>
                            {' '}
                          </div>
                          {' '}
                          <div className="post-thumbnail-entry">
                            {' '}
                            <img alt="blog image" src="/assets/images/side_post_img01.jpg" loading="lazy" />
                            {' '}
                            <div className="post-thumbnail-content">
                              {' '}
                              <Link href="/single-blog">
                                Top Strategies for Scaling Digital Business Growth
                              </Link>
                              {' '}
                              <span className="post-date">
                                <i className="far fa-clock"></i>
                                {' '}
                                9h ago
                              </span>
                              {' '}
                              <span className="post-category">
                                <i className="fa fa-tag"></i>
                                {' '}
                                Business Strategy
                              </span>
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
                {/* Categories */}
                {' '}
                <div className="widget widget-categories">
                  {' '}
                  <div className="widget-title font_weight_600">
                    Categories
                  </div>
                  {' '}
                  <ul>
                    {' '}
                    <li className="cat-item">
                      {' '}
                      <Link href="/services">
                        Web Development
                      </Link>
                      <span className="cat-count-span">
                        (12)
                      </span>
                      {' '}
                    </li>
                    {' '}
                    <li className="cat-item">
                      {' '}
                      <Link href="/services">
                        App Development
                      </Link>
                      <span className="cat-count-span">
                        (9)
                      </span>
                      {' '}
                    </li>
                    {' '}
                    <li className="cat-item">
                      {' '}
                      <Link href="/services">
                        Cyber Security
                      </Link>
                      <span className="cat-count-span">
                        (5)
                      </span>
                      {' '}
                    </li>
                    {' '}
                    <li className="cat-item">
                      {' '}
                      <Link href="/services">
                        UI/UX Design
                      </Link>
                      <span className="cat-count-span">
                        (7)
                      </span>
                      {' '}
                    </li>
                    {' '}
                    <li className="cat-item">
                      {' '}
                      <Link href="/services">
                        Cloud Solutions
                      </Link>
                      <span className="cat-count-span">
                        (10)
                      </span>
                      {' '}
                    </li>
                    {' '}
                    <li className="cat-item">
                      {' '}
                      <Link href="/services">
                        AI & Automation
                      </Link>
                      <span className="cat-count-span">
                        (4)
                      </span>
                      {' '}
                    </li>
                    {' '}
                    <li className="cat-item">
                      {' '}
                      <Link href="/services">
                        Consulting
                      </Link>
                      <span className="cat-count-span">
                        (6)
                      </span>
                      {' '}
                    </li>
                    {' '}
                    <li className="cat-item">
                      {' '}
                      <Link href="/services">
                        System Integration
                      </Link>
                      <span className="cat-count-span">
                        (8)
                      </span>
                      {' '}
                    </li>
                    {' '}
                    <li className="cat-item">
                      {' '}
                      <Link href="/services">
                        Maintenance
                      </Link>
                      <span className="cat-count-span">
                        (5)
                      </span>
                      {' '}
                    </li>
                    {' '}
                    <li className="cat-item">
                      {' '}
                      <Link href="/services">
                        Project Management
                      </Link>
                      <span className="cat-count-span">
                        (7)
                      </span>
                      {' '}
                    </li>
                    {' '}
                  </ul>
                  {' '}
                </div>
                {' '}
                {/* Tweets */}
                {' '}
                <div className="widget widget-tweeter">
                  {' '}
                  <div className="text-size-26 widget-title font_weight_600">
                    {' '}
                    Recent Tweets
                    {' '}
                  </div>
                  {' '}
                  <div id="twitter-cnt">
                    {' '}
                    <ul>
                      {' '}
                      <li>
                        {' '}
                        Opzio delivers smart digital solutions with performance, security, and scalability for modern businesses.
                        {' '}
                        <a href="https://t.co/opzio1" target="_blank">
                          https://t.co/opzio1
                        </a>
                        {' '}
                        <small>
                          Apr/01/2026
                        </small>
                        {' '}
                      </li>
                      {' '}
                      <li>
                        {' '}
                        Upgrade your systems with modern technology and automation to boost efficiency and growth.
                        {' '}
                        <a href="https://t.co/opzio2" target="_blank">
                          https://t.co/opzio2
                        </a>
                        {' '}
                        <small>
                          Mar/30/2026
                        </small>
                        {' '}
                      </li>
                      {' '}
                    </ul>
                    {' '}
                  </div>
                  {' '}
                </div>
                {' '}
                {/* Tags */}
                {' '}
                <div className="widget widget-tags">
                  {' '}
                  <h2 className="text-size-26 widget-title font_weight_600">
                    Tags
                  </h2>
                  {' '}
                  <div className="tags">
                    {' '}
                    <Link href="/services">
                      Web Development
                    </Link>
                    {' '}
                    <Link href="/services">
                      App Development
                    </Link>
                    {' '}
                    <Link href="/services">
                      Cyber Security
                    </Link>
                    {' '}
                    <Link href="/services">
                      UI/UX Design
                    </Link>
                    {' '}
                    <Link href="/services">
                      Cloud Solutions
                    </Link>
                    {' '}
                    <Link href="/services">
                      AI Automation
                    </Link>
                    {' '}
                    <Link href="/services">
                      Consulting
                    </Link>
                    {' '}
                    <Link href="/services">
                      Integration
                    </Link>
                    {' '}
                    <Link href="/services">
                      Maintenance
                    </Link>
                    {' '}
                    <Link href="/services">
                      Project Management
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
            {/* row */}
            {' '}
          </div>
          {' '}
        </div>
        {' '}
        {/* container */}
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
