"use client";

import { useState } from "react";
import AuditButton from "@/components/AuditButton";
import { cn } from "@/lib/cn";
import { AUDIT_PRICING_NOTE, BUNDLE, PLANS, PLAN_GROUPS } from "@/content/pricing";

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
            {/* The previous tier first, then only the audits this tier adds. */}
            {plan.includes && (
              <li className="flex items-center gap-3 text-base font-medium text-white">
                <i className={cn("fa-solid fa-check text-sm", plan.featured ? "text-brand" : "text-muted-3")} aria-hidden="true" />
                {plan.includes}
              </li>
            )}
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-base text-muted">
                    <i className={cn("fa-solid fa-check text-sm", plan.featured ? "text-brand" : "text-muted-3")} aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>

          {plan.upsell && (
            <a href="#confidence-package" className="mb-4 mt-auto text-sm font-medium text-brand underline underline-offset-4">
              {plan.upsell} →
            </a>
          )}

          <AuditButton className={cn("w-full", !plan.upsell && "mt-auto")}>
            Request an audit
            <span className="sr-only"> {plan.name}</span>
          </AuditButton>
        </li>
        ))}
      </ul>

      {/* Outside the toggle so it shows on both tabs. */}
      <div
        id="confidence-package"
        className="vc-card vc-card-accent mx-auto mt-10 grid max-w-6xl scroll-mt-28 gap-8 p-6 md:p-8 lg:grid-cols-[1.2fr_1fr_1fr]"
      >
        <div>
          <span className="rounded-full border border-brand px-2 py-1 text-[10px] font-semibold uppercase text-brand">Best value</span>
          <h3 className="mt-4 text-2xl font-semibold text-white">{BUNDLE.name}</h3>
          <p className="mt-2 text-base text-muted">{BUNDLE.tagline}</p>
          <p className="mt-5 flex items-baseline gap-2 text-white">
            <span className="text-sm text-muted">From</span>
            <span className="text-3xl font-bold tracking-tight">{BUNDLE.price}</span>
            <s className="text-base text-muted">{BUNDLE.was}</s>
          </p>
          <p className="mt-2 text-sm text-muted">
            <span className="font-semibold text-brand">{BUNDLE.saving}</span> · {BUNDLE.delivery}
          </p>
        </div>

        {BUNDLE.parts.map((part) => (
          <div key={part.name}>
            <h4 className="text-base font-semibold text-white">{part.name}</h4>
            <ul className="mt-4 list-none space-y-3 p-0">
              {part.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-base text-muted">
                  <i className="fa-solid fa-check text-sm text-brand" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center lg:col-span-3">
          <AuditButton>
            Get the {BUNDLE.name}
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </AuditButton>
          <p className="m-0 text-sm font-medium text-white">{BUNDLE.extra}</p>
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-muted">{AUDIT_PRICING_NOTE}</p>
    </div>
  );
}
