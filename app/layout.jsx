/*
 * Global stylesheets, imported in the exact order the static pages linked
 * them, so the cascade is unchanged. Everything is bundled by Next -- nothing
 * is served as a loose file from /public and nothing comes from a CDN.
 *
 * Bootstrap, Owl Carousel and Font Awesome come from npm (the kit's local
 * copies were byte-identical). styles/style.css holds all of this site's own
 * CSS; styles/animate.css stays local because the kit shipped a customised
 * build of it -- its fades travel 20px, where stock animate.css travels 100%.
 *
 * blog.css is deliberately absent: it is scoped to the blog-layout routes in
 * app/(site)/(blog)/layout.jsx, because it restyles bare `a` and
 * `.sub-banner li`, which would change every other page.
 *
 * tailwind.css comes last so utilities win at equal specificity. It ships
 * without preflight and on Bootstrap's breakpoints -- see the file for why.
 */
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/styles/style.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "@/styles/animate.css";
import "jquery-ui-dist/jquery-ui.css";

/* last, so a Tailwind utility beats the kit's CSS at equal specificity */
import "@/styles/tailwind.css";

import VendorScripts from "@/components/VendorScripts";

export const metadata = {
  title: {
    default: "Opzio — SaaS & AI Startup Solutions for Smart Businesses",
    template: "%s",
  },
  icons: {
    icon: [
      { url: "/assets/images/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/images/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/images/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/assets/images/favicon/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [57, 60, 72, 76, 114, 120, 144, 152, 180].map((s) => ({
      url: `/assets/images/favicon/apple-icon-${s}x${s}.png`,
      sizes: `${s}x${s}`,
    })),
  },
  other: {
    "msapplication-TileColor": "#ffffff",
    "msapplication-TileImage": "/ms-icon-144x144.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zxx">
      <body>
        {children}
        <VendorScripts />
      </body>
    </html>
  );
}
