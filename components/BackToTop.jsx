"use client";

import { useEffect } from "react";

/* Port of assets/js/back-to-top-button.js — same markup, same `show` class,
 * same 300px threshold and 300ms scroll. */
export default function BackToTop() {
  useEffect(() => {
    const btn = document.getElementById("button");
    if (!btn) return undefined;

    const onScroll = () => {
      btn.classList.toggle("show", window.scrollY > 300);
    };
    const onClick = (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    btn.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      btn.removeEventListener("click", onClick);
    };
  }, []);

  return <a id="button"></a>;
}
