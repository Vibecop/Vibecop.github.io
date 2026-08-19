import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blog | Opzio — SaaS & AI Startup Solutions for Smart Businesses",
};

export default function BlogPage() {
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
              Blog
            </h1>
            {' '}
            <p className="text-white">
              {' '}
              SaaS-driven innovation, AI-powered solutions, and scalable growth. Built for startups
              {' '}
              <br />
              {' '}
              to launch faster, optimize smarter, and grow without limits.
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
                  Blog
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
      {/* BLOG MAIN SECTION START HERE */}
      {' '}
      <section
        className="float-left w-100 position-relative news-and-articles-con padding-top padding-bottom main-box"
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
              Discover Knowledge, Tips,
              {' '}
              <br />
              {' '}
              & Inspiration in Our Blog
              {' '}
            </h2>
            {' '}
            <p className="wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.05s">
              {' '}
              Read our latest articles, tips, & expert insights to stay informed and inspired.
              {' '}
            </p>
            {' '}
          </div>
          {' '}
          <div className="row wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.05s">
            {' '}
            <div className="col-lg-4 col-md-6 d-flex">
              {' '}
              <div className="article-box w-100">
                {' '}
                <figure>
                  {' '}
                  <img
                    src="/assets/images/gallery-img1.jpg"
                    alt="article image"
                    className="img-fluid"
                  />
                  {' '}
                </figure>
                {' '}
                <div className="article-inner-text">
                  {' '}
                  <span className="d-block">
                    By Admin
                    {' '}
                    <span className="d-inline-block article-date">
                      January 25, 2026
                    </span>
                  </span>
                  {' '}
                  <Link href="/single-blog">
                    {' '}
                    <h3 className="text-size-26">
                      {' '}
                      Top SaaS Growth Strategies Every Startup Should Know
                      {' '}
                    </h3>
                    {' '}
                  </Link>
                  {' '}
                  <Link href="/single-blog" className="primary_btn d-inline-block">
                    {' '}
                    Learn More
                    {' '}
                  </Link>
                  {' '}
                </div>
                {' '}
                {/* article box */}
                {' '}
              </div>
              {' '}
              {/* col */}
              {' '}
            </div>
            {' '}
            <div className="col-lg-4 col-md-6 d-flex">
              {' '}
              <div className="article-box w-100">
                {' '}
                <figure>
                  {' '}
                  <img
                    src="/assets/images/gallery-img2.jpg"
                    alt="article image"
                    className="img-fluid"
                  />
                  {' '}
                </figure>
                {' '}
                <div className="article-inner-text">
                  {' '}
                  <span className="d-block">
                    By Admin
                    {' '}
                    <span className="d-inline-block article-date">
                      {' '}
                      January 30, 2026
                    </span>
                  </span>
                  {' '}
                  <Link href="/single-blog">
                    {' '}
                    <h3 className="text-size-26">
                      {' '}
                      How AI is Transforming Modern
                      {' '}
                      <br />
                      {' '}
                      Startups & Digital Products
                      {' '}
                    </h3>
                    {' '}
                  </Link>
                  {' '}
                  <Link href="/single-blog" className="primary_btn d-inline-block">
                    {' '}
                    Read More
                    {' '}
                  </Link>
                  {' '}
                </div>
                {' '}
                {/* article box */}
                {' '}
              </div>
              {' '}
              {/* col */}
              {' '}
            </div>
            {' '}
            <div className="col-lg-4 col-md-6 d-flex">
              {' '}
              <div className="article-box w-100">
                {' '}
                <figure>
                  {' '}
                  <img
                    src="/assets/images/gallery-img3.jpg"
                    alt="article image"
                    className="img-fluid"
                  />
                  {' '}
                </figure>
                {' '}
                <div className="article-inner-text">
                  {' '}
                  <span className="d-block">
                    By Admin
                    {' '}
                    <span className="d-inline-block article-date">
                      {' '}
                      February 01, 2026
                    </span>
                  </span>
                  {' '}
                  <Link href="/single-blog">
                    {' '}
                    <h3 className="text-size-26">
                      {' '}
                      Signs It’s Time to Integrate
                      {' '}
                      <br />
                      {' '}
                      AI Into Your Business
                      {' '}
                    </h3>
                    {' '}
                  </Link>
                  {' '}
                  <Link href="/single-blog" className="primary_btn d-inline-block">
                    {' '}
                    Read More
                    {' '}
                  </Link>
                  {' '}
                </div>
                {' '}
                {/* article box */}
                {' '}
              </div>
              {' '}
              {/* col */}
              {' '}
            </div>
            {' '}
            <div className="col-lg-4 col-md-6 d-flex">
              {' '}
              <div className="article-box w-100">
                {' '}
                <figure>
                  {' '}
                  <img
                    src="/assets/images/gallery-img4.jpg"
                    alt="article image"
                    className="img-fluid"
                  />
                  {' '}
                </figure>
                {' '}
                <div className="article-inner-text">
                  {' '}
                  <span className="d-block">
                    By Admin
                    {' '}
                    <span className="d-inline-block article-date">
                      {' '}
                      January 26, 2026
                    </span>
                  </span>
                  {' '}
                  <Link href="/single-blog">
                    {' '}
                    <h3 className="text-size-26">
                      {' '}
                      Choosing the Right
                      {' '}
                      <br />
                      {' '}
                      SaaS Tools for Your Startup
                      {' '}
                    </h3>
                    {' '}
                  </Link>
                  {' '}
                  <Link href="/single-blog" className="primary_btn d-inline-block">
                    {' '}
                    Read More
                    {' '}
                  </Link>
                  {' '}
                </div>
                {' '}
                {/* article box */}
                {' '}
              </div>
              {' '}
              {/* col */}
              {' '}
            </div>
            {' '}
            <div className="col-lg-4 col-md-6 d-flex">
              {' '}
              <div className="article-box w-100">
                {' '}
                <figure>
                  {' '}
                  <img
                    src="/assets/images/gallery-img5.jpg"
                    alt="article image"
                    className="img-fluid"
                  />
                  {' '}
                </figure>
                {' '}
                <div className="article-inner-text">
                  {' '}
                  <span className="d-block">
                    By Admin
                    {' '}
                    <span className="d-inline-block article-date">
                      {' '}
                      January 31, 2026
                    </span>
                  </span>
                  {' '}
                  <Link href="/single-blog">
                    {' '}
                    <h3 className="text-size-26">
                      {' '}
                      Expert Tips for Scaling
                      {' '}
                      <br />
                      {' '}
                      AI-Based Startup Solutions
                      {' '}
                    </h3>
                    {' '}
                  </Link>
                  {' '}
                  <Link href="/single-blog" className="primary_btn d-inline-block">
                    {' '}
                    Read More
                    {' '}
                  </Link>
                  {' '}
                </div>
                {' '}
                {/* article box */}
                {' '}
              </div>
              {' '}
              {/* col */}
              {' '}
            </div>
            {' '}
            <div className="col-lg-4 col-md-6 d-flex">
              {' '}
              <div className="article-box w-100">
                {' '}
                <figure>
                  {' '}
                  <img
                    src="/assets/images/gallery-img6.jpg"
                    alt="article image"
                    className="img-fluid"
                  />
                  {' '}
                </figure>
                {' '}
                <div className="article-inner-text">
                  {' '}
                  <span className="d-block">
                    By Admin
                    {' '}
                    <span className="d-inline-block article-date">
                      {' '}
                      February 02, 2026
                    </span>
                  </span>
                  {' '}
                  <Link href="/single-blog">
                    {' '}
                    <h3 className="text-size-26">
                      {' '}
                      Latest Trends in SaaS
                      {' '}
                      <br />
                      {' '}
                      & AI Startup Innovation
                      {' '}
                    </h3>
                    {' '}
                  </Link>
                  {' '}
                  <Link href="/single-blog" className="primary_btn d-inline-block">
                    {' '}
                    Read More
                    {' '}
                  </Link>
                  {' '}
                </div>
                {' '}
                {/* article box */}
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
          <ul className="pagination justify-content-center custom-pagination">
            {' '}
            <li className="page-item">
              {' '}
              <Link className="page-link" href="/single-blog">
                <i className="fas fa-angle-left"></i>
              </Link>
              {' '}
            </li>
            {' '}
            <li className="page-item active">
              {' '}
              <Link className="page-link" href="/one-column">
                1
              </Link>
              {' '}
            </li>
            {' '}
            <li className="page-item">
              {' '}
              <Link className="page-link" href="/two-column">
                2
              </Link>
              {' '}
            </li>
            {' '}
            <li className="page-item">
              {' '}
              <Link className="page-link" href="/three-column">
                3
              </Link>
              {' '}
            </li>
            {' '}
            <li className="page-item">
              {' '}
              <Link className="page-link" href="/four-column">
                <i className="fas fa-angle-right"></i>
              </Link>
              {' '}
            </li>
            {' '}
          </ul>
          {' '}
          {/* main container */}
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
