"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/*
 * Which nav entries carry the `active` class on each page. Copied from the
 * original HTML kit as-is, including its inconsistencies (e.g. /faq marks the
 * dropdown item but leaves the "Pages" toggle inactive).
 */
const ACTIVE_MAP = {
  "/": { nav: "home", item: "/index2" },
  "/about": { nav: "about" },
  "/services": { nav: "services", item: "/services" },
  "/single-services": { nav: "services", item: "/single-services" },
  "/case-studies": { nav: "pages", item: "/case-studies" },
  "/pricing": { nav: "pricing", item: "/pricing" },
  // the kit puts `active` on the menu itself here, not on the toggle
  "/faq": { item: "/faq", menu: "pages" },
  "/team": { nav: "pages", item: "/team" },
  "/process": { nav: "pages", item: "/process" },
  "/contact": { nav: "pages", item: "/contact" },
  "/privacy-policy": { nav: "pages", item: "/privacy-policy" },
  "/cookie-policy": { nav: "pages", item: "/cookie-policy" },
  "/term-of-use": { nav: "pages", item: "/term-of-use" },
  "/blog": { nav: "blog", item: "/blog" },
  "/single-blog": { nav: "blog", item: "/single-blog" },
  "/one-column": { nav: "blog", item: "/one-column" },
  "/two-column": { nav: "blog", item: "/two-column" },
  "/three-column": { nav: "blog", item: "/three-column" },
  "/three-column-sidebar": { nav: "blog", item: "/three-column-sidebar" },
  "/four-column": { nav: "blog", item: "/four-column" },
  "/six-column-full-width": { nav: "blog", item: "/six-column-full-width" },
};

export default function Header() {
  const pathname = usePathname();
  const active = ACTIVE_MAP[pathname] || {};
  const showContact = pathname === "/contact";

  const navCls = (key, base) => (active.nav === key ? base + " active" : base);
  const itemCls = (href) =>
    active.item === href ? "dropdown-item active" : "dropdown-item";
  const menuCls = (key) =>
    active.menu === key ? "dropdown-menu active" : "dropdown-menu";

  // The static kit reloaded the page on every click, which closed the mobile
  // menu and any open dropdown. Client-side routing keeps the DOM, so close
  // them by hand on navigation.
  useEffect(() => {
    document
      .getElementById("navbarSupportedContent")
      ?.classList.remove("show");
    const toggler = document.querySelector(".navbar-toggler");
    if (toggler) {
      toggler.classList.add("collapsed");
      toggler.setAttribute("aria-expanded", "false");
    }
    document
      .querySelectorAll(".navbar .dropdown-menu.show, .navbar .dropdown.show")
      .forEach((el) => el.classList.remove("show"));
  }, [pathname]);

  return (
    <header className="w-100 float-left header-con position-relative main-box">
      {' '}
      <div className="main-container">
        {' '}
        <nav className="navbar navbar-expand-lg navbar-light position-relative">
          {' '}
          {/* LOGO */}
          {' '}
          <Link className="navbar-brand" href="/">
            {' '}
            <figure className="mb-0">
              {' '}
              <img src="/assets/images/logo.png" alt="logo-icon" />
              {' '}
            </figure>
            {' '}
          </Link>
          {' '}
          {/* TOGGLER */}
          {' '}
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {' '}
            <span className="navbar-toggler-icon"></span>
            {' '}
            <span className="navbar-toggler-icon"></span>
            {' '}
            <span className="navbar-toggler-icon"></span>
            {' '}
          </button>
          {' '}
          {/* MENU */}
          {' '}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {' '}
            <ul className="navbar-nav ml-auto">
              {' '}
              <li className="nav-item dropdown mr-0">
                {' '}
                <Link
                  className={navCls("home", "nav-link dropdown-toggle p-0")}
                  href="/"
                  id="navbarDropdown7"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Home
                </Link>
                {' '}
                <div className="dropdown-menu" aria-labelledby="navbarDropdown7" role="menu">
                  {' '}
                  <Link className={itemCls("/")} href="/">
                    AI SaaS Platform
                  </Link>
                  {' '}
                  <a className={itemCls("/index2")} href="/index2">
                    Startup Solutions
                  </a>
                  {' '}
                  <a className={itemCls("/index3")} href="/index3">
                    Tech Innovation
                  </a>
                  {' '}
                  <a className={itemCls("/index4")} href="/index4">
                    Content Growth AI
                  </a>
                  {' '}
                  <a className={itemCls("/index5")} href="/index5">
                    AI Growth Engine
                  </a>
                  {' '}
                </div>
                {' '}
              </li>
              {' '}
              <li className="nav-item">
                {' '}
                <Link className={navCls("about", "nav-link p-0")} href="/about">
                  About
                </Link>
                {' '}
              </li>
              {' '}
              <li className="nav-item dropdown">
                {' '}
                <a
                  className={navCls("services", "nav-link dropdown-toggle p-0")}
                  href="#"
                  id="navbarDropdown6"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  {' '}
                  Services
                  {' '}
                </a>
                {' '}
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown6">
                  {' '}
                  <li>
                    {' '}
                    <Link className={itemCls("/services")} href="/services">
                      Services
                    </Link>
                    {' '}
                  </li>
                  {' '}
                  <li>
                    {' '}
                    <Link className={itemCls("/single-services")} href="/single-services">
                      Single Services
                    </Link>
                    {' '}
                  </li>
                  {' '}
                </ul>
                {' '}
              </li>
              {' '}
              {/* PAGES DROPDOWN */}
              {' '}
              <li className="nav-item dropdown">
                {' '}
                <a
                  className={navCls("pages", "nav-link dropdown-toggle p-0")}
                  href="#"
                  id="navbarDropdown5"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  {' '}
                  Pages
                  {' '}
                </a>
                {' '}
                <ul className={menuCls("pages")} aria-labelledby="navbarDropdown5">
                  {' '}
                  <li>
                    {' '}
                    <Link className={itemCls("/case-studies")} href="/case-studies">
                      Case Studies
                    </Link>
                    {' '}
                  </li>
                  {' '}
                  <li>
                    {' '}
                    <Link className={itemCls("/pricing")} href="/pricing">
                      Pricing
                    </Link>
                    {' '}
                  </li>
                  {' '}
                  <li>
                    <Link className={itemCls("/faq")} href="/faq">
                      FAQs
                    </Link>
                  </li>
                  {' '}
                  <li>
                    <Link className={itemCls("/team")} href="/team">
                      Team
                    </Link>
                  </li>
                  {' '}
                  {showContact && (
                    <li>
                      {' '}
                      <Link className={itemCls("/contact")} href="/contact">
                        Contact
                      </Link>
                      {' '}
                    </li>
                  )}
                  {' '}
                  <li>
                    {' '}
                    <Link className={itemCls("/process")} href="/process">
                      Process
                    </Link>
                    {' '}
                  </li>
                  {' '}
                  <li>
                    <Link className={itemCls("/404")} href="/404">
                      404
                    </Link>
                  </li>
                  {' '}
                  <li>
                    {' '}
                    <Link className={itemCls("/coming-soon")} href="/coming-soon">
                      Coming Soon
                    </Link>
                    {' '}
                  </li>
                  {' '}
                  <li>
                    {' '}
                    <Link className={itemCls("/privacy-policy")} href="/privacy-policy">
                      Privacy Policy
                    </Link>
                    {' '}
                  </li>
                  {' '}
                  <li>
                    {' '}
                    <Link className={itemCls("/cookie-policy")} href="/cookie-policy">
                      Cookie Policy
                    </Link>
                    {' '}
                  </li>
                  {' '}
                  <li>
                    {' '}
                    <Link className={itemCls("/term-of-use")} href="/term-of-use">
                      Terms of Use
                    </Link>
                    {' '}
                  </li>
                  {' '}
                </ul>
                {' '}
              </li>
              {' '}
              {/* BLOG DROPDOWN */}
              {' '}
              <li className="nav-item dropdown">
                {' '}
                <a
                  className={navCls("blog", "nav-link dropdown-toggle p-0")}
                  href="#"
                  id="navbarDropdown4"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  {' '}
                  Blog
                  {' '}
                </a>
                {' '}
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown4">
                  {' '}
                  <li>
                    <Link className={itemCls("/blog")} href="/blog">
                      Blog
                    </Link>
                  </li>
                  {' '}
                  <li>
                    {' '}
                    <a className={itemCls("/load-more")} href="/load-more">
                      Load More
                    </a>
                    {' '}
                  </li>
                  {' '}
                  <li>
                    {' '}
                    <Link className={itemCls("/single-blog")} href="/single-blog">
                      Single Blog
                    </Link>
                    {' '}
                  </li>
                  {' '}
                  <li>
                    {' '}
                    <Link className={itemCls("/one-column")} href="/one-column">
                      One Column
                    </Link>
                    {' '}
                  </li>
                  {' '}
                  <li>
                    {' '}
                    <Link className={itemCls("/two-column")} href="/two-column">
                      Two Column
                    </Link>
                    {' '}
                  </li>
                  {' '}
                  <li>
                    {' '}
                    <Link className={itemCls("/three-column")} href="/three-column">
                      Three Column
                    </Link>
                    {' '}
                  </li>
                  {' '}
                  <li>
                    {' '}
                    <Link className={itemCls("/three-column-sidebar")} href="/three-column-sidebar">
                      Three Column Sidebar
                    </Link>
                    {' '}
                  </li>
                  {' '}
                  <li>
                    {' '}
                    <Link className={itemCls("/four-column")} href="/four-column">
                      Four Column
                    </Link>
                    {' '}
                  </li>
                  {' '}
                  <li>
                    {' '}
                    <Link className={itemCls("/six-column-full-width")} href="/six-column-full-width">
                      Six Column
                    </Link>
                    {' '}
                  </li>
                  {' '}
                </ul>
                {' '}
              </li>
              {' '}
              <li className="nav-item">
                {' '}
                <Link className={navCls("pricing", "nav-link p-0")} href="/pricing">
                  Pricing
                </Link>
                {' '}
              </li>
              {' '}
            </ul>
            {' '}
          </div>
          {' '}
          {/* BUTTON */}
          {' '}
          <div className="header-contact">
            {' '}
            <ul className="list-unstyled mb-0 d-flex align-items-center">
              {' '}
              <li className="d-inline-block">
                {' '}
                <Link href="/contact" className="d-inline-block">
                  Contact Us
                </Link>
                {' '}
              </li>
              {' '}
              <li className="d-inline-block">
                {' '}
                <a
                  href="https://designingmedia.com/checkout/?add-to-cart=38423"
                  target="_blank"
                  className="contact-btn d-inline-block"
                >
                  {' '}
                  Buy Now for $17
                  {' '}
                </a>
                {' '}
              </li>
              {' '}
            </ul>
            {' '}
          </div>
          {' '}
        </nav>
        {' '}
      </div>
      {' '}
    </header>
  );
}
