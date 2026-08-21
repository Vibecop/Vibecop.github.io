/**
 * Site navigation, in one place so the header, the footer and the mobile menu
 * cannot drift apart.
 *
 * The kit's menu also listed `/index2`–`/index5` and `/load-more`. Those pages
 * were never in the kit and every one of them 404s, so they are not carried
 * over. With them gone the "Home" entry has nothing under it and is a plain
 * link rather than a dropdown.
 */

export const MAIN_NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    children: [
      { label: "Services", href: "/services" },
      { label: "Single Services", href: "/single-services" },
    ],
  },
  {
    label: "Pages",
    children: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQs", href: "/faq" },
      { label: "Team", href: "/team" },
      { label: "Process", href: "/process" },
      { label: "Contact", href: "/contact" },
      { label: "Coming Soon", href: "/coming-soon" },
      { label: "404", href: "/404" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Terms of Use", href: "/term-of-use" },
    ],
  },
  {
    label: "Blog",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Single Blog", href: "/single-blog" },
      { label: "One Column", href: "/one-column" },
      { label: "Two Column", href: "/two-column" },
      { label: "Three Column", href: "/three-column" },
      { label: "Three Column Sidebar", href: "/three-column-sidebar" },
      { label: "Four Column", href: "/four-column" },
      { label: "Six Column", href: "/six-column-full-width" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
];

/** The theme vendor's checkout — the kit's own "Buy Now" target. */
export const BUY_URL = "https://designingmedia.com/checkout/?add-to-cart=38423";

export const FOOTER_NAV = [
  {
    heading: "Navigation",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Useful Links",
    links: [
      { label: "Process", href: "/process" },
      { label: "FAQs", href: "/faq" },
      { label: "Team", href: "/team" },
      { label: "Single Services", href: "/single-services" },
    ],
  },
];

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/", icon: "fa-brands fa-facebook-f" },
  { label: "Instagram", href: "https://www.instagram.com/", icon: "fa-brands fa-instagram" },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "fa-brands fa-linkedin-in" },
];
