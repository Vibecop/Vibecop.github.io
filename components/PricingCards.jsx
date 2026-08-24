import AuditButton from "@/components/AuditButton";
import { cn } from "@/lib/cn";
import { PLANS } from "@/content/pricing";

export default function PricingCards({ className }) {
  return (
    <ul data-stagger className={cn("m-0 grid list-none gap-6 p-0 md:grid-cols-2 lg:grid-cols-4", className)}>
      {PLANS.map((plan) => (
        <li
          key={plan.name}
          className={cn(
            "vc-card vc-card-hover flex min-h-[23rem] flex-col p-6",
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
            <span className="sr-only"> — {plan.name}</span>
          </AuditButton>
        </li>
      ))}
    </ul>
  );
}
