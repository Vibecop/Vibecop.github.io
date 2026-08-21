import Link from "next/link";
import Container from "@/components/ui/Container";
import NewsletterForm from "@/components/NewsletterForm";
import { FOOTER_NAV, SOCIAL_LINKS } from "@/content/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface pt-16 md:pt-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" aria-label="Vibecop — home">
              <img src="/assets/images/logo.png" alt="Vibecop" className="h-9 w-auto" />
            </Link>
            <p className="mt-6 max-w-sm text-base text-muted">
              Practical, revenue-driven automation that quickly covers its own cost, built
              exclusively for scaling small &amp; mid-sized businesses.
            </p>
            <ul className="mt-6 flex list-none gap-3 p-0">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white no-underline transition-colors duration-200 hover:border-brand hover:bg-brand"
                  >
                    <i className={icon} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {FOOTER_NAV.map(({ heading, links }) => (
            <nav key={heading} aria-label={heading} className="lg:col-span-2">
              <h2 className="text-h3">{heading}</h2>
              <ul className="mt-5 list-none space-y-3 p-0">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="group inline-flex items-center gap-2 text-base text-muted no-underline transition-colors duration-200 hover:text-brand"
                    >
                      <i
                        className="fa-solid fa-arrow-right text-xs text-brand transition-transform duration-200 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="lg:col-span-4">
            <h2 className="text-h3">Newsletter Signup</h2>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 py-7 text-center">
          <p className="m-0 text-base text-muted">
            Copyright © {new Date().getFullYear()} Vibecop. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
