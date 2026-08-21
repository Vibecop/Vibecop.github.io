import Link from "next/link";
import Countdown from "@/components/Countdown";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Coming Soon",
  description: "The website is under construction. Subscribe to stay with us.",
};

export default function ComingSoonPage() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center py-16 text-center">
      <Container className="flex flex-col items-center gap-10">
        <Link href="/" aria-label="Vibecop — home">
          <img src="/assets/images/logo.png" alt="Vibecop" className="h-10 w-auto" />
        </Link>

        <div>
          <p className="m-0 text-lg font-medium text-brand">The Website is under construction</p>
          <h1 className="text-display mt-3">Coming Soon</h1>
        </div>

        <Countdown />

        <div className="w-full max-w-md">
          <p className="text-base text-muted">Subscribe to the newsletter to stay with us.</p>
          {/* No backend exists for this in the kit, so the submit goes nowhere. */}
          <form className="mt-4 flex flex-col gap-3 sm:flex-row" action="/contact">
            <label htmlFor="notify-email" className="sr-only">
              Email address
            </label>
            <input
              id="notify-email"
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="Enter Your Email Address"
              className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-base text-white placeholder:text-muted-3 focus:border-brand focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-brand px-7 py-3.5 font-semibold text-white transition-colors duration-200 hover:bg-brand-dim"
            >
              Subscribe
            </button>
          </form>
        </div>

        <Button href="/contact" variant="outline">
          Contact Us
        </Button>
      </Container>
    </section>
  );
}
