"use client";

import { useState } from "react";
import { CASE_STUDIES, CASE_STUDY_FILTERS } from "@/content/case-studies";
import { cn } from "@/lib/cn";

/**
 * Filterable grid.
 *
 * The filter strip is a tablist: one card set, filtered in state, rather than
 * the kit's six duplicated Bootstrap tab panes.
 */
export default function CaseStudyGrid() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? CASE_STUDIES : CASE_STUDIES.filter((c) => c.category === filter);

  return (
    <>
      <div role="tablist" aria-label="Filter case studies" className="mt-10 flex flex-wrap justify-center gap-3">
        {CASE_STUDY_FILTERS.map((name) => {
          const active = name === filter;
          return (
            <button
              key={name}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(name)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200",
                active
                  ? "bg-brand text-white"
                  : "border border-white/15 text-white hover:border-brand hover:bg-brand"
              )}
            >
              {name}
            </button>
          );
        })}
      </div>

      <ul className="m-0 mt-12 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((study) => (
          <li
            key={study.slug}
            className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-colors duration-200 hover:border-brand/50"
          >
            <img
              src={study.image}
              alt=""
              loading="lazy"
              className="aspect-16/10 w-full object-cover"
            />

            <div className="flex flex-1 flex-col p-6">
              <p className="m-0 flex flex-wrap gap-2 text-sm">
                <span className="rounded-full bg-brand/15 px-3 py-1 font-semibold text-brand">
                  {study.category}
                </span>
                <span className="rounded-full border border-white/15 px-3 py-1 text-muted">
                  {study.sector}
                </span>
              </p>

              <h3 className="mt-4 text-h3">{study.title}</h3>
              <p className="mt-3 text-base text-muted">{study.body}</p>

              <ul className="m-0 mt-auto flex list-none flex-wrap gap-x-6 gap-y-2 border-t border-white/10 p-0 pt-5 text-sm font-semibold text-white">
                {study.stats.map((stat) => (
                  <li key={stat} className="flex items-center gap-2">
                    <i className="fa-solid fa-arrow-trend-up text-brand" aria-hidden="true" />
                    {stat}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
