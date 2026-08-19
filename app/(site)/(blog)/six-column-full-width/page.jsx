import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Six Column | Opzio — SaaS & AI Startup Solutions for Smart Businesses",
};

export default function SixColumnFullWidthPage() {
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
              Six Column
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
                  Six Column
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
      {/* End Slider Section */}
      {' '}
      <div className="blog-posts blogpage-section six-main-box float-left w-100">
        {' '}
        <div className="container-fluid">
          {' '}
          <div id="blog" className="col-xl-12">
            {' '}
            <div
              className="row wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              {' '}
              <div className="col-xl-2 col-lg-6 col-md-6">
                {' '}
                <div className="blog-box sixcolumn-blog float-left w-100 post-item mb-4">
                  {' '}
                  <div className="post-item-wrap position-relative">
                    {' '}
                    <div className="post-image">
                      {' '}
                      <Link href="/three-column-sidebar">
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
                          SaaS Strategy
                        </span>
                        {' '}
                      </div>
                      {' '}
                      <p className="mb-0 text-size-16">
                        {' '}
                        Build strong SaaS foundations with scalable architecture. Opzio helps startups design efficient systems with better performance, flexibility, and long-term digital growth.
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
              <div className="col-xl-2 col-lg-6 col-md-6">
                {' '}
                <div className="blog-box sixcolumn-blog float-left w-100 post-item mb-4">
                  {' '}
                  <div className="post-item-wrap position-relative">
                    {' '}
                    <div id="blogslider" className="carousel slide" data-ride="carousel">
                      {' '}
                      <div className="carousel-inner">
                        {' '}
                        <div className="carousel-item active">
                          {' '}
                          <img src="/assets/images/standard_post_img02.jpg" alt="blog image" loading="lazy" />
                          {' '}
                        </div>
                        {' '}
                        <div className="carousel-item">
                          {' '}
                          <img src="/assets/images/standard_post_img03.jpg" alt="blog image" loading="lazy" />
                          {' '}
                        </div>
                        {' '}
                        <div className="carousel-item">
                          {' '}
                          <img src="/assets/images/standard_post_img04.jpg" alt="blog image" loading="lazy" />
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
                          AI Innovation
                        </span>
                        {' '}
                      </div>
                      {' '}
                      <p className="mb-0 text-size-16">
                        {' '}
                        AI is reshaping modern businesses. Opzio integrates intelligent automation and machine learning to improve efficiency, decision-making, and product scalability.
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
              <div className="col-xl-2 col-lg-6 col-md-6">
                {' '}
                <div className="blog-box sixcolumn-blog float-left w-100 post-item mb-4">
                  {' '}
                  <div className="post-item-wrap position-relative">
                    {' '}
                    <div className="post-image">
                      {' '}
                      <Link href="/three-column-sidebar">
                        {' '}
                        <img alt="blog image" src="/assets/images/standard_post_img05.jpg" loading="lazy" />
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
                          Cloud Trends
                        </span>
                        {' '}
                      </div>
                      {' '}
                      <p className="mb-0 text-size-16">
                        {' '}
                        Stay ahead with modern cloud technologies. Opzio delivers scalable cloud solutions that enhance performance, security, and cost efficiency for startups.
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
              <div className="col-xl-2 col-lg-6 col-md-6">
                {' '}
                <div className="blog-box sixcolumn-blog float-left w-100 post-item mb-4">
                  {' '}
                  <div className="post-item-wrap position-relative">
                    {' '}
                    <div className="post-audio position-relative">
                      {' '}
                      <Link href="/three-column-sidebar">
                        {' '}
                        <img alt="blog image" src="/assets/images/standard_post_img06.jpg" loading="lazy" />
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
                          Product Growth
                        </span>
                        {' '}
                      </div>
                      {' '}
                      <p className="mb-0 text-size-16">
                        {' '}
                        Opzio ensures product success with optimized workflows, better system design, and continuous improvement strategies for SaaS-based applications.
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
              <div className="col-xl-2 col-lg-6 col-md-6">
                {' '}
                <div className="blog-box sixcolumn-blog float-left w-100 post-item mb-4">
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
                          Automation Systems
                        </span>
                        {' '}
                      </div>
                      {' '}
                      <p className="mb-0 text-size-16">
                        {' '}
                        Automation is key to efficiency. Opzio builds intelligent systems that reduce manual effort, improve accuracy, and accelerate digital transformation.
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
              <div className="col-xl-2 col-lg-6 col-md-6">
                {' '}
                <div className="blog-box sixcolumn-blog float-left w-100 post-item mb-4">
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
                          Security & Scale
                        </span>
                        {' '}
                      </div>
                      {' '}
                      <p className="mb-0 text-size-16">
                        {' '}
                        Security and scalability are core to SaaS success. Opzio ensures safe, reliable, and high-performance systems for modern digital businesses.
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
              <div className="col-xl-2 col-lg-6 col-md-6">
                {' '}
                <div className="blog-box sixcolumn-blog float-left w-100 post-item mb-4">
                  {' '}
                  <div className="post-item-wrap position-relative">
                    {' '}
                    <div className="post-audio position-relative">
                      {' '}
                      <Link href="/three-column-sidebar">
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
                          AI Architecture
                        </span>
                        {' '}
                      </div>
                      {' '}
                      <p className="mb-0 text-size-16">
                        {' '}
                        Opzio builds advanced AI-driven systems that optimize performance, automate workflows, and deliver scalable digital solutions for modern businesses.
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
              <div className="col-xl-2 col-lg-6 col-md-6">
                {' '}
                <div className="blog-box sixcolumn-blog float-left w-100 post-item mb-4">
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
                          SaaS Growth
                        </span>
                        {' '}
                      </div>
                      {' '}
                      <p className="mb-0 text-size-16">
                        {' '}
                        Scalable SaaS growth requires smart planning. Opzio helps businesses improve product performance with automation, analytics, and cloud-first strategies.
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
              <div className="col-xl-2 col-lg-6 col-md-6">
                {' '}
                <div className="blog-box sixcolumn-blog float-left w-100 post-item mb-4">
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
                            DevOps & Cloud
                          </span>
                          {' '}
                        </div>
                        {' '}
                        <p className="mb-0 text-size-16">
                          {' '}
                          Opzio strengthens infrastructure with modern DevOps practices, ensuring fast deployments, high reliability, and secure cloud environments.
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
              <div className="col-xl-2 col-lg-6 col-md-6">
                {' '}
                <div className="blog-box sixcolumn-blog float-left w-100 post-item mb-4">
                  {' '}
                  <div className="post-item-wrap position-relative">
                    {' '}
                    <div className="post-image">
                      {' '}
                      <Link href="/three-column-sidebar">
                        {' '}
                        <img alt="blog image" src="/assets/images/standard_post_img04.jpg" loading="lazy" />
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
                          Automation
                        </span>
                        {' '}
                      </div>
                      {' '}
                      <p className="mb-0 text-size-16">
                        {' '}
                        Automation is at the core of Opzio. We design intelligent systems that reduce manual effort and improve business efficiency across platforms.
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
              <div className="col-xl-2 col-lg-6 col-md-6">
                {' '}
                <div className="blog-box sixcolumn-blog float-left w-100 post-item mb-4">
                  {' '}
                  <div className="post-item-wrap position-relative">
                    {' '}
                    <div className="post-image">
                      {' '}
                      <Link href="/three-column-sidebar">
                        {' '}
                        <img alt="blog image" src="/assets/images/standard_post_img02.jpg" loading="lazy" />
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
                          Cloud Solutions
                        </span>
                        {' '}
                      </div>
                      {' '}
                      <p className="mb-0 text-size-16">
                        {' '}
                        Opzio delivers cloud-native solutions that enhance scalability, security, and performance for startups and enterprise-level applications.
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
              <div className="col-xl-2 col-lg-6 col-md-6">
                {' '}
                <div className="blog-box sixcolumn-blog float-left w-100 post-item mb-4">
                  {' '}
                  <div className="post-item-wrap position-relative">
                    {' '}
                    <div className="post-image">
                      {' '}
                      <Link href="/three-column-sidebar">
                        {' '}
                        <img alt="blog image" src="/assets/images/standard_post_img06.jpg" loading="lazy" />
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
                          Tech Insights
                        </span>
                        {' '}
                      </div>
                      {' '}
                      <p className="mb-0 text-size-16">
                        {' '}
                        Stay updated with Opzio insights on AI, SaaS, and modern software engineering practices that shape the future of digital products.
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
            {/* blog */}
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
