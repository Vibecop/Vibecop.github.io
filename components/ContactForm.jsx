"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";

const HELP_OPTIONS = ["Architecture", "Security", "Scale & production"];
const TIMELINES = ["Select", "ASAP", "1-2 Weeks", "1 Month"];

const FIELDS = [
  { id: "name", label: "Name", type: "text", required: true, autoComplete: "name" },
  { id: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
  { id: "product", label: "What are you building?", type: "textarea" },
  { id: "stack", label: "How was it built (Cursor, Claude Code, Lovable, internal team)?", type: "text" },
  { id: "concern", label: "Biggest technical concern right now", type: "textarea" },
];

// ponytail: public by design Web3Forms keys are meant to ship in the bundle,
// and on a static export env vars inline identically. Worst case if scraped is
// spam to our own inbox. Lock the origin allowlist to vibecop.io in their dashboard.
const ACCESS_KEY = "25f5c1fd-0819-4df2-9c44-31e49415fcc8";

/** The audit request form. Posts to Web3Forms, which emails the registered address. */
export default function ContactForm() {
  const base = useId();
  const [help, setHelp] = useState(HELP_OPTIONS[0]);
  const [status, setStatus] = useState(null);

  const inputClass =
    "vc-field w-full rounded-xl px-4 py-3 text-base text-white placeholder:text-muted-3";

  return (
    <form
      data-reveal
      className="vc-card p-8"
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const body = new FormData(form);
        body.append("help", help);
        body.append("replyto", body.get("email"));
        setStatus("sending");
        try {
          const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body });
          const json = await res.json().catch(() => ({}));
          setStatus(json.success ? "ok" : "err");
          if (json.success) form.reset();
        } catch {
          setStatus("err");
        }
      }}
    >
      <input type="hidden" name="access_key" value={ACCESS_KEY} />
      <input type="hidden" name="subject" value="New audit request vibecop.io" />
      <input type="hidden" name="from_name" value="vibecop.io" />
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <fieldset className="m-0 border-0 p-0">
        <legend className="mb-3 text-sm font-medium text-white">What do you need help with?</legend>
        <div className="flex flex-wrap gap-3">
          {HELP_OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={help === option}
              onClick={() => setHelp(option)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200",
                help === option
                  ? "vc-btn vc-btn-primary text-white"
                  : "vc-btn vc-btn-outline text-white"
              )}
            >
              {option}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        {FIELDS.map((field) => (
          <div key={field.id} className={field.type === "textarea" ? "sm:col-span-2" : undefined}>
            <label htmlFor={`${base}-${field.id}`} className="block text-sm font-medium text-white">
              {field.label}
              {field.required && (
                <span aria-hidden="true" className="text-brand">
                  {" "}
                  *
                </span>
              )}
            </label>

            {field.type === "textarea" ? (
              <textarea
                id={`${base}-${field.id}`}
                name={field.id}
                rows={3}
                className={cn(inputClass, "mt-2 resize-y")}
              />
            ) : (
              <input
                id={`${base}-${field.id}`}
                name={field.id}
                type={field.type}
                required={field.required}
                autoComplete={field.autoComplete}
                className={cn(inputClass, "mt-2")}
              />
            )}
          </div>
        ))}

        <div>
          <label htmlFor={`${base}-timeline`} className="block text-sm font-medium text-white">
            Ideal Timeline
          </label>
          <select id={`${base}-timeline`} name="timeline" className={cn(inputClass, "mt-2")}>
            {TIMELINES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="vc-btn vc-btn-primary mt-8 w-full rounded-full px-8 py-4 font-semibold text-white disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending" : "Send Request"}
      </button>

      <output
        aria-live="polite"
        className={cn("mt-4 block text-base", status === "err" ? "text-red-400" : "text-brand")}
      >
        {status === "ok" && "Thanks we got it. Expect a reply within 24 hours."}
        {status === "err" && "That did not send. Email us at hello@vibecop.io and we will pick it up."}
      </output>
    </form>
  );
}
