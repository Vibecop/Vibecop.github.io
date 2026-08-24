"use client";

import { useId, useState } from "react";
import { SCOPE_GROUPS } from "@/content/single-service";
import { cn } from "@/lib/cn";

/**
 * The kit's build-sheet widget. Like the services page's recommender, its
 * jQuery handler only echoed the selections back, so that is what this does —
 * as toggle buttons with proper pressed state rather than a class flipped
 * onto a div.
 */
export default function ScopeBuilder() {
  const base = useId();
  const [picked, setPicked] = useState(() =>
    Object.fromEntries(SCOPE_GROUPS.map((g) => [g.id, g.multiple ? [] : g.options[0]]))
  );
  const [sheet, setSheet] = useState(null);

  const toggle = (group, option) =>
    setPicked((state) => {
      if (!group.multiple) return { ...state, [group.id]: option };
      const current = state[group.id];
      return {
        ...state,
        [group.id]: current.includes(option)
          ? current.filter((o) => o !== option)
          : [...current, option],
      };
    });

  const isOn = (group, option) =>
    group.multiple ? picked[group.id].includes(option) : picked[group.id] === option;

  return (
    <form
      data-reveal
      className="vc-card mx-auto mt-12 max-w-3xl p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSheet(picked);
      }}
    >
      <div className="flex flex-col gap-7">
        {SCOPE_GROUPS.map((group) => (
          <fieldset key={group.id} className="m-0 border-0 p-0">
            <legend className="mb-3 text-sm font-medium text-white">{group.label}</legend>
            <div className="flex flex-wrap gap-3">
              {group.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={isOn(group, option)}
                  onClick={() => toggle(group, option)}
                  className={cn(
                    "rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200",
                    isOn(group, option)
                      ? "vc-btn vc-btn-primary text-white"
                      : "vc-btn vc-btn-outline text-white"
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          id={`${base}-submit`}
          type="submit"
          className="vc-btn vc-btn-primary rounded-full px-8 py-3.5 font-semibold text-white"
        >
          Generate Build Sheet
        </button>
      </div>

      <output aria-live="polite" className="mt-6 block text-center text-base">
        {sheet && (
          <>
            <strong className="block text-white">Build sheet:</strong>
            {SCOPE_GROUPS.map((group) => (
              <span key={group.id} className="block text-muted">
                {group.label}:{" "}
                {group.multiple
                  ? sheet[group.id].join(", ") || "none selected"
                  : sheet[group.id]}
              </span>
            ))}
          </>
        )}
      </output>
    </form>
  );
}
