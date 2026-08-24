"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";

const HELP_OPTIONS = ["Ops / back-office", "Sales / lead gen", "E-commerce"];
const TIMELINES = ["Select", "ASAP", "1-2 Weeks", "1 Month"];

const FIELDS = [
  { id: "name", label: "Name", type: "text", required: true, autoComplete: "name" },
  { id: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
  { id: "goal", label: "Goal (one workflow you want to automate first)", type: "textarea" },
  { id: "tools", label: "Tools You Use (CRM, email, sheets, etc.)", type: "text" },
  { id: "pain", label: "Biggest Pain Right Now", type: "textarea" },
];

/**
 * The audit request form.
 *
 * There is no endpoint behind it — the kit's form posted to `javascript:;` —
 * so it validates, then reports success without claiming to have sent
 * anything. Point `onSubmit` at a real handler when one exists.
 */
export default function ContactForm() {
  const base = useId();
  const [help, setHelp] = useState(HELP_OPTIONS[0]);
  const [sent, setSent] = useState(false);

  const inputClass =
    "vc-field w-full rounded-xl px-4 py-3 text-base text-white placeholder:text-muted-3";

  return (
    <form
      data-reveal
      className="vc-card p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
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
        className="vc-btn vc-btn-primary mt-8 w-full rounded-full px-8 py-4 font-semibold text-white sm:w-auto"
      >
        Send Request
      </button>

      <output aria-live="polite" className="mt-4 block text-base text-brand">
        {sent && "Thanks — your details are captured. Connect a form handler to deliver them."}
      </output>
    </form>
  );
}
