import Link from "next/link";

export const metadata = {
  title: "404 | Opzio — SaaS & AI Startup Solutions for Smart Businesses",
};

export default function NotFound() {
  return (
    <>
      {' '}
      {/* 404 section start */}
      {' '}
      <section className="error-section w-100 float-left position-relative">
        {' '}
        <div className="container">
          {' '}
          <div className="row">
            {' '}
            <div className="col-xl-8 col-lg-10 col-12 mx-auto">
              {' '}
              <div
                className="error-con wow fadeInUp"
                data-wow-duration="3s"
                data-wow-delay="0.2s"
              >
                {' '}
                <figure>
                  <img
                    src="/assets/images/error-img.png"
                    alt="404"
                    className="img-fluid wow bounceIn"
                    data-wow-duration="3s"
                    data-wow-delay="0.05s"
                  />
                </figure>
                {' '}
                <h1
                  className="text-size-28 text-white wow fadeInLeft"
                  data-wow-duration="3s"
                  data-wow-delay="0.05s"
                >
                  We Could Not Find Page You’re Looking
                </h1>
                {' '}
                <p className="wow fadeInRight" data-wow-duration="3s" data-wow-delay="0.05s">
                  The link you’re trying to access is probably broken, or the page has been removed.
                  {' '}
                </p>
                {' '}
                <Link
                  href="/"
                  className="text-decoration-none primary_btn d-inline-block wow fadeInDown"
                  data-wow-duration="3s"
                  data-wow-delay="0.3s"
                >
                  {' '}
                  Back to Home
                  {' '}
                </Link>
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
      </section>
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
    </>
  );
}
