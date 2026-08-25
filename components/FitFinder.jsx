"use client";

import { useId, useState } from "react";
import { FIT_QUESTIONS } from "@/content/services";

/**
 * The kit's recommendation widget. It has no model behind it carousel.js
 * echoed the three selections straight back so it does the same here rather
 * than inventing advice it cannot support.
 */
export default function FitFinder() {
  const base = useId();
  const [answers, setAnswers] = useState(() =>
    Object.fromEntries(FIT_QUESTIONS.map((q) => [q.id, q.options[0]]))
  );
  const [result, setResult] = useState(null);

  return (
    <form
      data-reveal
      className="vc-card mx-auto mt-12 max-w-3xl p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setResult(answers);
      }}
    >
      <div className="grid gap-6 sm:grid-cols-3">
        {FIT_QUESTIONS.map((q) => (
          <div key={q.id}>
            <label htmlFor={`${base}-${q.id}`} className="block text-sm font-medium text-white">
              {q.label}
            </label>
            <select
              id={`${base}-${q.id}`}
              value={answers[q.id]}
              onChange={(e) => setAnswers((a) => ({ ...a, [q.id]: e.target.value }))}
              className="vc-field mt-2 w-full rounded-xl px-4 py-3 text-base text-white"
            >
              {q.options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          type="submit"
          className="vc-btn vc-btn-primary rounded-full px-8 py-3.5 font-semibold text-white"
        >
          Get a recommendation
        </button>
      </div>

      <output aria-live="polite" className="mt-6 block text-center text-base text-white">
        {result && (
          <>
            <strong className="block">Recommendation:</strong>
            {FIT_QUESTIONS.map((q) => (
              <span key={q.id} className="block text-muted">
                {q.label} {result[q.id]}
              </span>
            ))}
          </>
        )}
      </output>
    </form>
  );
}
