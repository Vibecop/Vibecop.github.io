import Link from "next/link";

export const metadata = {
  title: "Coming Soon | Opzio — SaaS & AI Startup Solutions for Smart Businesses",
};

export default function ComingSoonPage() {
  return (
    <>
      {' '}
      {/* SUB BANNER SECTION */}
      {' '}
      <section
        className="float-left w-100 coming-soon-con d-flex flex-column justify-content-center position-relative main-box"
      >
        {' '}
        <div className="container">
          {' '}
          <div className="row">
            {' '}
            <div className="col-xl-12 mx-auto">
              {' '}
              <div className="sub-content-con position-relative">
                {' '}
                <Link href="/" className="d-block">
                  {' '}
                  <img
                    src="/assets/images/logo.png"
                    alt="logo-icon"
                    className="img-fluid new-logo wow fadeInUp"
                    data-wow-duration="3s"
                    data-wow-delay="0.4s"
                  />
                </Link>
                {' '}
                <div className="position-relative coming-content-con">
                  {' '}
                  <h1
                    className="text-size-28 font-weight-600 text-white wow fadeInLeft"
                    data-wow-duration="3s"
                    data-wow-delay="0.5s"
                  >
                    The Website is under construction
                  </h1>
                  {' '}
                  <h2
                    className="text-size-160 wow fadeInRight"
                    data-wow-duration="3s"
                    data-wow-delay="0.6s"
                  >
                    Coming
                    {' '}
                    <br />
                    {' '}
                    Soon
                  </h2>
                  {' '}
                  <p
                    className="font-weight-600 text-size-20 text-white wow fadeInLeft"
                    data-wow-duration="2s"
                    data-wow-delay="0.5s"
                  >
                    Subscribe to the newsletter to stay with us.
                  </p>
                  {' '}
                  <div
                    className="check-mail-box d-flex wow fadeInDown"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                  >
                    {' '}
                    <input type="email" id="mail" placeholder="Enter Your Email Address" />
                    {' '}
                    <Link href="/contact" className="primary_btn d-inline-block">
                      {' '}
                      Subscribe
                      {' '}
                    </Link>
                    {' '}
                  </div>
                  {' '}
                  <div
                    id="compaign_countdown2"
                    className="compaign_countdown wow fadeInDown"
                    data-wow-duration="3s"
                    data-wow-delay="0.7s"
                  >
                    {' '}
                    <ul className="p-0 d-flex justify-content-around align-items-center">
                      {' '}
                      <li>
                        <span id="days" className="days"></span>
                        {' '}
                        Days
                      </li>
                      {' '}
                      <li>
                        <span id="hours" className="hours"></span>
                        Hours
                      </li>
                      {' '}
                      <li>
                        <span id="minutes" className="minutes"></span>
                        Minutes
                      </li>
                      {' '}
                      <li>
                        <span id="seconds" className="seconds"></span>
                        Seconds
                      </li>
                      {' '}
                    </ul>
                    {' '}
                  </div>
                  {' '}
                  {/* coming-content-con */}
                  {' '}
                </div>
                {' '}
                {/* sub content con */}
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
          {/* container */}
          {' '}
        </div>
        {' '}
        {/* coming soon con */}
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
      {' '}
    </>
  );
}
