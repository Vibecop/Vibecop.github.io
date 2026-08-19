import Link from "next/link";
import StaticForm from "@/components/StaticForm";

export default function Footer() {
  return (
    <section className="footer-con position-relative float-left w-100 main-box">
      {' '}
      <div className="main-container">
        {' '}
        <div className="middle_portion">
          {' '}
          <div className="row">
            {' '}
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              {' '}
              <div className="logo-content">
                {' '}
                <Link href="/">
                  {' '}
                  <figure className="footer-logo">
                    {' '}
                    <img src="/assets/images/logo.png" alt="image" className="img-fluid" />
                    {' '}
                  </figure>
                  {' '}
                </Link>
                {' '}
                <p className="text-size-16 text">
                  {' '}
                  Practical, revenue-driven automation that quickly covers its own cost, built exclusively for scaling small & mid-sized businesses.
                  {' '}
                </p>
                {' '}
                <ul className="list-unstyled mb-0 social-icons">
                  {' '}
                  <li>
                    {' '}
                    <a href="https://www.facebook.com/" className="text-decoration-none">
                      <i className="fa-brands fa-facebook-f social-networks"></i>
                    </a>
                    {' '}
                  </li>
                  {' '}
                  <li>
                    {' '}
                    <a href="https://www.instagram.com/" className="text-decoration-none">
                      <i className="fa-brands fa-instagram social-networks"></i>
                    </a>
                    {' '}
                  </li>
                  {' '}
                  <li>
                    {' '}
                    <a href="https://www.linkedin.com/" className="text-decoration-none">
                      <i className="fa-brands fa-linkedin-in social-networks"></i>
                    </a>
                    {' '}
                  </li>
                  {' '}
                </ul>
                {' '}
              </div>
              {' '}
            </div>
            {' '}
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
              {' '}
              <div className="links">
                {' '}
                <h2 className="heading text-size-24">
                  Navigation
                </h2>
                {' '}
                <ul className="list-unstyled mb-0">
                  {' '}
                  <li>
                    {' '}
                    <i className="fa-solid fa-arrow-right"></i>
                    <Link href="/about" className="text-decoration-none">
                      About
                    </Link>
                    {' '}
                  </li>
                  {' '}
                  <li>
                    {' '}
                    <i className="fa-solid fa-arrow-right"></i>
                    <Link href="/services" className="text-decoration-none">
                      Services
                    </Link>
                    {' '}
                  </li>
                  {' '}
                  <li>
                    {' '}
                    <i className="fa-solid fa-arrow-right"></i>
                    <Link href="/case-studies" className="text-decoration-none">
                      Case Studies
                    </Link>
                    {' '}
                  </li>
                  {' '}
                  <li>
                    {' '}
                    <i className="fa-solid fa-arrow-right"></i>
                    <Link href="/pricing" className="text-decoration-none">
                      Pricing
                    </Link>
                    {' '}
                  </li>
                  {' '}
                </ul>
                {' '}
              </div>
              {' '}
            </div>
            {' '}
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
              {' '}
              <div className="links">
                {' '}
                <h2 className="heading text-size-24">
                  Useful Links
                </h2>
                {' '}
                <ul className="list-unstyled mb-0">
                  {' '}
                  <li>
                    {' '}
                    <i className="fa-solid fa-arrow-right"></i>
                    <Link href="/process" className="text-decoration-none">
                      Process
                    </Link>
                    {' '}
                  </li>
                  {' '}
                  <li>
                    {' '}
                    <i className="fa-solid fa-arrow-right"></i>
                    <Link href="/faq" className="text-decoration-none">
                      FAQs
                    </Link>
                    {' '}
                  </li>
                  {' '}
                  <li>
                    {' '}
                    <i className="fa-solid fa-arrow-right"></i>
                    <Link href="/team" className="text-decoration-none">
                      Team
                    </Link>
                    {' '}
                  </li>
                  {' '}
                  <li>
                    {' '}
                    <i className="fa-solid fa-arrow-right"></i>
                    <Link href="/single-services" className="text-decoration-none">
                      Single Services
                    </Link>
                    {' '}
                  </li>
                  {' '}
                </ul>
                {' '}
              </div>
              {' '}
            </div>
            {' '}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              {' '}
              <div className="email-form">
                {' '}
                <h2 className="heading text-size-24">
                  Newsletter Signup
                </h2>
                {' '}
                <StaticForm>
                  {' '}
                  <div className="form-group position-relative mb-0">
                    {' '}
                    <input
                      type="text"
                      className="form_style"
                      placeholder="Enter Your Email Address"
                      name="email"
                    />
                    {' '}
                    <button>
                      {' '}
                      <i className="send fa-sharp fa-solid fa-paper-plane"></i>
                      {' '}
                    </button>
                    {' '}
                  </div>
                  {' '}
                  <div className="form-group check-box mb-0">
                    {' '}
                    <input type="checkbox" id="term" />
                    {' '}
                    <label htmlFor="term">
                      I agree to the
                      {' '}
                      <Link href="/privacy-policy">
                        Privacy Policy
                      </Link>
                      .
                    </label>
                    {' '}
                  </div>
                  {' '}
                </StaticForm>
                {' '}
              </div>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
        <div className="copyright">
          {' '}
          <p className="mb-0">
            Copyright © 2026 Opzio. All Rights Reserved.
          </p>
          {' '}
        </div>
        {' '}
      </div>
      {' '}
    </section>
  );
}
