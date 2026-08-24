"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/cn";

/**
 * The site's one dialog shell: backdrop, glass panel, close button, focus
 * trap, scroll lock and portal. The audit application and the sample report
 * both render through it, so the two behave identically from the keyboard.
 *
 * It renders through a portal on <body> because the triggers sit inside
 * stacking contexts of their own (the hero, the CTA band, a card with a
 * transform on hover), and a fixed overlay nested in one of those is clipped
 * by it.
 *
 * `initialFocus` is an optional ref to the control that should take focus on
 * open — a form's first field. Without one the panel itself takes it, which
 * is right for a dialog you read rather than fill in.
 */
export default function Modal({
  onClose,
  labelledBy,
  initialFocus,
  className,
  bodyClassName,
  children,
}) {
  const panel = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  /* Escape closes and the page behind stops scrolling. */
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab") return;

      /* keep Tab inside the panel while it is up */
      const focusable = panel.current?.querySelectorAll(
        'a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    };

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  /*
   * Focus moves into the panel so the keyboard is not left back on the page —
   * and only once `mounted` has flipped, since the first render returns null
   * and there is nothing to focus yet.
   */
  useEffect(() => {
    if (mounted) (initialFocus?.current ?? panel.current)?.focus();
  }, [mounted, initialFocus]);

  const body = (
    <div
      className="vc-modal fixed inset-0 z-[200] flex items-center justify-center overflow-hidden p-4 sm:p-6"
      /* the backdrop closes, the panel does not — hence the target check */
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        /* focusable as a landing spot only, so the Tab query above skips it */
        tabIndex={-1}
        className={cn(
          "vc-modal-panel vc-card relative flex max-h-full w-full flex-col overflow-hidden outline-none",
          className
        )}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="vc-btn vc-btn-outline absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full text-white"
        >
          <i className="fa-solid fa-xmark text-sm" aria-hidden="true" />
        </button>

        {/* the one scrolling element: the panel's own body, so the scrollbar
            sits inside the glass rather than down the page behind it */}
        <div
          className={cn(
            "vc-modal-body min-h-0 flex-1 overflow-y-auto overscroll-contain p-6 sm:p-9",
            bodyClassName
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );

  /* portals need a document, which the server render does not have */
  return mounted ? createPortal(body, document.body) : null;
}
