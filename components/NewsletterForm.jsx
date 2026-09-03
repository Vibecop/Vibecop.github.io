"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { cn } from "@/lib/cn";
import { submitForm } from "@/lib/web3forms";

/** The footer and sidebar signup. Posts to Web3Forms like the other forms. */
export default function NewsletterForm() {
  const emailId = useId();
  const termsId = useId();
  const [status, setStatus] = useState(null);

  return (
    <form
      className="mt-5"
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        setStatus("sending");
        const ok = await submitForm(form, { subject: "Newsletter signup vibecop.io" });
        setStatus(ok ? "ok" : "err");
        if (ok) form.reset();
      }}
    >
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

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
          className="vc-field w-full rounded-full py-3.5 pl-5 pr-14 text-base text-white placeholder:text-muted-3"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          disabled={status === "sending"}
          className="vc-btn vc-btn-primary absolute right-1.5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-white disabled:opacity-60"
        >
          <i className="fa-solid fa-paper-plane" aria-hidden="true" />
        </button>
      </div>

      <div className="mt-4 flex items-start gap-2.5">
        <input
          id={termsId}
          type="checkbox"
          name="consent"
          value="Agreed to the privacy policy"
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

      <output
        aria-live="polite"
        className={cn("mt-3 block text-sm", status === "err" ? "text-red-400" : "text-brand")}
      >
        {status === "ok" && "You are on the list."}
        {status === "err" && "That did not send. Try again in a moment."}
      </output>
    </form>
  );
}
