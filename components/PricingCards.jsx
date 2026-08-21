import Button from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { PLANS } from "@/content/pricing";

export default function PricingCards({ className }) {
  return (
    <ul className={cn("m-0 grid list-none gap-6 p-0 lg:grid-cols-3", className)}>
      {PLANS.map((plan) => (
        <li
          key={plan.name}
          className="flex flex-col rounded-3xl border border-white/10 bg-white/5 p-8 transition-colors duration-200 hover:border-brand/50"
        >
          <h3 className="text-h3">{plan.name}</h3>

          <p className="mt-4 flex items-start gap-1 text-white">
            <span className="mt-2 text-2xl font-semibold">$</span>
            <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
          </p>

          <p className="mt-3 text-base text-muted">{plan.summary}</p>

          <ul className="my-8 list-none space-y-3 border-t border-white/10 p-0 pt-8">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-base text-muted">
                <i className="fa-solid fa-check text-sm text-brand" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>

          <Button href="/contact" className="mt-auto w-full">
            Select Plan
            <span className="sr-only"> — {plan.name}</span>
          </Button>
        </li>
      ))}
    </ul>
  );
}
