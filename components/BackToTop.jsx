"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Appears past 300px of scroll, as the kit's back-to-top-button.js did
 * but as ordinary React state rather than a class toggled onto a bare
 * `<a id="button">` from an effect.
 */
export default function BackToTop() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "vc-to-top fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full",
        "text-white",
        shown ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <i className="fa-solid fa-arrow-up" aria-hidden="true" />
    </button>
  );
}
