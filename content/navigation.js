/**
 * Site navigation, in one place so the header, the footer and the mobile menu
 * cannot drift apart.
 *
 * The kit's menu also listed `/index2`–`/index5` and `/load-more`. Those pages
 * were never in the kit and every one of them 404s, so they are not carried
 * over. With them gone the "Home" entry has nothing under it and is a plain
 * link rather than a dropdown.
 */

import { SERVICE_PAGES } from "@/content/service-pages";

export const MAIN_NAV = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    /* "All Services" rather than an href on the parent: <NavDropdown/> marks
       itself current from its children, so a parent href would leave the
       entry unhighlighted on every service detail page. */
    children: [
      { label: "All Services", href: "/services" },
      ...SERVICE_PAGES.map(({ navLabel, slug }) => ({
        label: navLabel,
        href: `/services/${slug}`,
      })),
    ],
  },
  {
    label: "Pages",
    children: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQs", href: "/faq" },
      // { label: "Team", href: "/team" },
      // { label: "Process", href: "/process" },
      // { label: "Contact", href: "/contact" },
      // { label: "Coming Soon", href: "/coming-soon" },
      // { label: "404", href: "/404" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Terms of Use", href: "/term-of-use" },
    ],
  },
  // {
  //   label: "Blog",
  //   children: [
  //     { label: "Blog", href: "/blog" },
  //     { label: "Single Blog", href: "/single-blog" },
  //     { label: "One Column", href: "/one-column" },
  //     { label: "Two Column", href: "/two-column" },
  //     { label: "Three Column", href: "/three-column" },
  //     { label: "Three Column Sidebar", href: "/three-column-sidebar" },
  //     { label: "Four Column", href: "/four-column" },
  //     { label: "Six Column", href: "/six-column-full-width" },
  //   ],
  // },
  { label: "Pricing", href: "/pricing" },
];

/* Two columns, no more: the footer grid gives each one `lg:col-span-2` beside
   a 4-wide logo block and a 4-wide newsletter panel, so a third would overflow
   the twelve. The services take one column and everything else the other. */
export const FOOTER_NAV = [
  {
    heading: "Services",
    links: [
      { label: "All Services", href: "/services" },
      ...SERVICE_PAGES.map(({ navLabel, slug }) => ({
        label: navLabel,
        href: `/services/${slug}`,
      })),
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Process", href: "/process" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQs", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/salman-haseeb/", icon: "fa-brands fa-linkedin-in" },
  { label: "X", href: "https://x.com/VibeCop_io", icon: "fa-brands fa-x-twitter" },
];
