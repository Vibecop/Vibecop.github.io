"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";
import { submitForm } from "@/lib/web3forms";

const FIELDS = [
  { id: "first-name", label: "First Name", type: "text", autoComplete: "given-name" },
  { id: "last-name", label: "Last Name", type: "text", autoComplete: "family-name" },
  { id: "email", label: "Email", type: "email", autoComplete: "email" },
  { id: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
];

/*
 * Comment box. Emails the comment to us via Web3Forms nothing on the site
 * renders comments, so these are moderated in the sense that they land in an
 * inbox and never appear on the page. The copy says so rather than implying
 * the comment was published.
 */
export default function CommentForm() {
  const base = useId();
  const [status, setStatus] = useState(null);

  const inputClass =
    "vc-field mt-2 w-full rounded-xl px-4 py-3 text-base text-white placeholder:text-muted-3";

  return (
    <form
      className="mt-7"
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        setStatus("sending");
        const ok = await submitForm(form, { subject: "New blog comment vibecop.io" });
        setStatus(ok ? "ok" : "err");
        if (ok) form.reset();
      }}
    >
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-5 sm:grid-cols-2">
        {FIELDS.map((field) => (
          <div key={field.id}>
            <label htmlFor={`${base}-${field.id}`} className="block text-sm font-medium text-white">
              {field.label}
            </label>
            <input
              id={`${base}-${field.id}`}
              name={field.id}
              type={field.type}
              autoComplete={field.autoComplete}
              className={inputClass}
            />
          </div>
        ))}

        <div className="sm:col-span-2">
          <label htmlFor={`${base}-comment`} className="block text-sm font-medium text-white">
            Comment
          </label>
          <textarea
            id={`${base}-comment`}
            name="comment"
            rows={5}
            required
            className={cn(inputClass, "resize-y")}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="vc-btn vc-btn-primary mt-7 rounded-full px-8 py-3.5 font-semibold text-white disabled:opacity-60"
      >
        {status === "sending" ? "Sending" : "Post Comment"}
      </button>

      <output
        aria-live="polite"
        className={cn("mt-4 block text-base", status === "err" ? "text-red-400" : "text-brand")}
      >
        {status === "ok" && "Thanks your comment is with us for review."}
        {status === "err" && "That did not send. Try again in a moment."}
      </output>
    </form>
  );
}
