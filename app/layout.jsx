/*
 * One stylesheet. styles/theme.css is the whole design system Tailwind v4
 * plus the design's tokens and it pulls in the self-hosted Inter Tight faces.
 *
 * Bootstrap 4, the kit's 10k-line style.css, animate.css, Owl Carousel and
 * jQuery UI are all gone: the pages are Tailwind now and the behaviour those
 * bundles provided is React. Font Awesome stays, because the design uses its
 * glyphs throughout.
 */
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/styles/theme.css";
import { DESCRIPTION, DESCRIPTOR, ORGANIZATION_JSONLD } from "@/content/entity";

export const metadata = {
  metadataBase: new URL("https://vibecop.io"),
  title: {
    default: "Vibecop | Independent Software Audit Service",
    template: "%s | Vibecop",
  },
  description: DESCRIPTION,
  applicationName: DESCRIPTOR,
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
  themeColor: "#030202",
};

/*
 * Marks the document as safe to animate *before* first paint.
 *
 * The reveal styles hide `[data-reveal]` elements until they scroll into
 * view, which is only acceptable if something is guaranteed to reveal them.
 * Gating that on a class set here means the content renders plainly whenever
 * JS is off and the timer takes the class back off if MotionRuntime never
 * boots, so a hydration failure degrades to a visible page rather than a
 * blank one. Setting it in <head> rather than in an effect is what stops the
 * hero flashing in and then out on load.
 */
const MOTION_BOOT = `(function(){var r=document.documentElement;r.classList.add('motion-ready');setTimeout(function(){if(!r.dataset.motionBooted)r.classList.remove('motion-ready')},3000)})()`;

/* Apollo's website visitor tracker, verbatim from their install snippet:
   matches visiting companies by IP for sales follow-up. */
const APOLLO_TRACKER = `function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,o.onload=function(){window.trackingFunctions.onLoad({appId:"6adc96dc23818d0020484ba7"})},document.head.appendChild(o)}initApollo();`;

/* Google Analytics 4. Picks up utm_* params by itself, and its enhanced
   measurement counts client-side route changes as page views. */
const GA_ID = "G-641JBP0LMK";
const GA_BOOT = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      /*
       * The boot script below adds a class to this element before React
       * hydrates, so the server HTML and the client DOM deliberately differ
       * here. Without this, React reports it as a hydration mismatch on every
       * page load. It suppresses the warning for this element's own attributes
       * only not for anything inside it.
       */
      suppressHydrationWarning
      /*
       * `scroll-behavior: smooth` (set in theme.css, for in-page anchors) also
       * applies to route changes, which makes a navigation animate the whole
       * document instead of landing at the top. This tells Next to turn it off
       * for its own scroll restoration and keep it for everything else.
       */
      data-scroll-behavior="smooth"
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: MOTION_BOOT }} />
        {/* Sitewide, so every page carries the same entity definition: the
            name alone is ambiguous, this says which Vibecop. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSONLD) }}
        />
        <script dangerouslySetInnerHTML={{ __html: APOLLO_TRACKER }} />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script dangerouslySetInnerHTML={{ __html: GA_BOOT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
