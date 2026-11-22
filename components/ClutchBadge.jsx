"use client";

import Script from "next/script";
import { cn } from "@/lib/cn";

/*
 * Clutch review badge. widget.js turns every `.clutch-widget` div into an
 * iframe, but only on the document's readystatechange, which client-side
 * navigation never fires again. `onReady` runs on first load *and* on every
 * remount, so each badge re-runs the scan; Destroy() first drops the iframes
 * already placed, so badges never double up.
 */
export default function ClutchBadge({ className }) {
  return (
    <>
      <div
        className={cn("clutch-widget", className)}
        data-url="https://widget.clutch.co"
        data-widget-type="2"
        data-height="45"
        data-nofollow="false"
        data-expandifr="true"
        data-darkbg="1"
        data-clutchcompany-id="2698423"
      />
      <Script
        src="https://widget.clutch.co/static/js/widget.js"
        strategy="afterInteractive"
        onReady={() => {
          window.CLUTCHCO?.Destroy();
          window.CLUTCHCO?.Init();
        }}
      />
    </>
  );
}
