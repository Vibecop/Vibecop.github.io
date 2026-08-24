"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";

const FIELDS = [
  { id: "first-name", label: "First Name", type: "text", autoComplete: "given-name" },
  { id: "last-name", label: "Last Name", type: "text", autoComplete: "family-name" },
  { id: "email", label: "Email", type: "email", autoComplete: "email" },
  { id: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
];

/** Comment box. No backend in the kit, so it acknowledges rather than posts. */
export default function CommentForm() {
  const base = useId();
  const [sent, setSent] = useState(false);

  const inputClass =
    "vc-field mt-2 w-full rounded-xl px-4 py-3 text-base text-white placeholder:text-muted-3";

  return (
    <form
      className="mt-7"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
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
        className="vc-btn vc-btn-primary mt-7 rounded-full px-8 py-3.5 font-semibold text-white"
      >
        Post Comment
      </button>

      <output aria-live="polite" className="mt-4 block text-base text-brand">
        {sent && "Thanks — connect a comment backend to publish this."}
      </output>
    </form>
  );
}
