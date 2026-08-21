/*
 * One stylesheet. styles/theme.css is the whole design system — Tailwind v4
 * plus the design's tokens — and it pulls in the self-hosted Inter Tight faces.
 *
 * Bootstrap 4, the kit's 10k-line style.css, animate.css, Owl Carousel and
 * jQuery UI are all gone: the pages are Tailwind now and the behaviour those
 * bundles provided is React. Font Awesome stays, because the design uses its
 * glyphs throughout.
 */
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/styles/theme.css";

export const metadata = {
  metadataBase: new URL("https://vibecop.io"),
  title: {
    default: "Vibecop — Senior Supervision for Products built with AI",
    template: "%s | Vibecop",
  },
  description:
    "Practical, revenue-driven automation that quickly covers its own cost, built exclusively for scaling small & mid-sized businesses.",
  icons: {
    icon: [16, 32, 96].map((s) => ({
      url: `/assets/images/favicon/favicon-${s}x${s}.png`,
      sizes: `${s}x${s}`,
      type: "image/png",
    })),
    apple: [57, 60, 72, 76, 114, 120, 144, 152, 180].map((s) => ({
      url: `/assets/images/favicon/apple-icon-${s}x${s}.png`,
      sizes: `${s}x${s}`,
    })),
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c0d13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
