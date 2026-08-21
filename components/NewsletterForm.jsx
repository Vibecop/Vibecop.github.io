"use client";

import Link from "next/link";
import { useId } from "react";

/**
 * The footer signup. There is no backend behind it — the kit's form carried
 * `action="javascript:;"` — so the submit is prevented rather than pointed at
 * an endpoint that does not exist. Wire `onSubmit` to a real handler when one
 * lands; the markup does not need to change.
 */
export default function NewsletterForm() {
  const emailId = useId();
  const termsId = useId();

  return (
    <form className="mt-5" onSubmit={(e) => e.preventDefault()}>
      <div className="relative">
        <label htmlFor={emailId} className="sr-only">
          Email address
        </label>
        <input
          id={emailId}
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="Enter Your Email Address"
          className="w-full rounded-full border border-white/15 bg-white/5 py-3.5 pl-5 pr-14 text-base text-white placeholder:text-muted-3 focus:border-brand focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="absolute right-1.5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white transition-colors duration-200 hover:bg-brand-dim"
        >
          <i className="fa-solid fa-paper-plane" aria-hidden="true" />
        </button>
      </div>

      <div className="mt-4 flex items-start gap-2.5">
        <input
          id={termsId}
          type="checkbox"
          required
          className="mt-1.5 h-4 w-4 shrink-0 accent-brand"
        />
        <label htmlFor={termsId} className="text-sm text-muted">
          I agree to the{" "}
          <Link href="/privacy-policy" className="text-brand underline underline-offset-2">
            Privacy Policy
          </Link>
          .
        </label>
      </div>
    </form>
  );
}
