"use client";

import { useState } from "react";
import AuditButton from "@/components/AuditButton";
import { cn } from "@/lib/cn";
import { PLANS, PLAN_GROUPS } from "@/content/pricing";

/**
 * The plans, one group at a time.
 *
 * Audits and ongoing QA are bought by different people for different reasons,
 * so showing all four at once asked every visitor to read past half of them.
 * The toggle is the same tablist as the case-study filter: one card set
 * filtered in state, not duplicated panes.
 */
export default function PricingCards({ className }) {
  const [group, setGroup] = useState(PLAN_GROUPS[0]);
  /* Hidden cards leave the grid flow entirely, so the track count follows the
     group on show rather than the four cards in the markup. */
  const visible = PLANS.filter((plan) => plan.group === group).length;

  return (
    <div className={className}>
      <div role="tablist" aria-label="Plan type" className="flex flex-wrap justify-center gap-3">
        {PLAN_GROUPS.map((name) => {
          const active = name === group;
          return (
            <button
              key={name}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setGroup(name)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200",
                active ? "vc-btn vc-btn-primary text-white" : "vc-btn vc-btn-outline text-white"
              )}
            >
              {name}
            </button>
          );
        })}
      </div>

      {/* Capped and centred: the old four-wide track left half the row empty
          for a group this size. */}
      <ul
        data-stagger
        className={cn(
          "m-0 mx-auto mt-10 grid list-none gap-6 p-0 md:grid-cols-2",
          visible > 2 ? "max-w-6xl lg:grid-cols-3" : "max-w-4xl"
        )}
      >
        {PLANS.map((plan) => (
        <li
          key={plan.name}
          className={cn(
            "vc-card vc-card-hover min-h-[23rem] flex-col p-6",
            /* Both groups stay in the markup so crawlers (and a JS-less
               visitor) get all four plans; the inactive one is hidden, not
               unmounted. flex and hidden are swapped as a pair because two
               competing display utilities resolve by stylesheet order. */
            plan.group === group ? "flex" : "hidden",
            plan.featured && "vc-card-accent"
          )}
        >
          <img src={plan.icon} alt="" aria-hidden="true" className="vc-card-art mb-5 h-12 w-12 object-contain" />
          <h3 className="text-xl font-semibold text-white">
            {plan.name}
            {plan.featured && <span className="ml-3 rounded-full border border-brand px-2 py-1 text-[10px] font-semibold uppercase text-brand">Featured</span>}
          </h3>

          <p className="mt-4 flex items-baseline gap-2 text-white">
            {plan.pricePrefix && <span className="text-sm text-muted">{plan.pricePrefix}</span>}
            <span className="text-2xl font-bold tracking-tight">{plan.price}</span>
            {plan.priceSuffix && <span className="text-sm text-muted">{plan.priceSuffix}</span>}
          </p>

          <p className="mt-3 text-base text-muted">{plan.summary}</p>

          <ul className="my-8 list-none space-y-3 border-t border-white/10 p-0 pt-8">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-base text-muted">
                    <i className={cn("fa-solid fa-check text-sm", plan.featured ? "text-brand" : "text-muted-3")} aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>

          <AuditButton className="mt-auto w-full">
            Request an audit
            <span className="sr-only"> {plan.name}</span>
          </AuditButton>
        </li>
        ))}
      </ul>
    </div>
  );
}
