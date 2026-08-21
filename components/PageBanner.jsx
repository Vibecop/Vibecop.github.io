import Link from "next/link";
import Container from "@/components/ui/Container";

/**
 * The banner every sub-page opens with: title, lede, breadcrumb pill, over the
 * kit's wave artwork.
 *
 * The artwork is a decorative background rather than an `<img>`, so it is
 * `aria-hidden` and the text sits on its own layer with a scrim behind it —
 * the kit put white text straight onto the image, which failed contrast where
 * the wave is brightest.
 */
export default function PageBanner({ title, lede, breadcrumb }) {
  return (
    <section className="inner-banner relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[url('/assets/images/sub-banner-image.jpg')] bg-cover bg-bottom bg-no-repeat"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/45" />

      <Container className="py-20 text-center md:py-28 lg:py-32">
        <h1 className="text-display mx-auto max-w-5xl">{title}</h1>

        {lede && (
          <p className="mx-auto mt-6 max-w-3xl text-balance text-base font-medium text-white/90">
            {lede}
          </p>
        )}

        <nav aria-label="Breadcrumb" className="mt-8">
          <ol className="m-0 inline-flex list-none items-center gap-3 rounded-full border border-white/25 px-6 py-3 text-base">
            <li>
              <Link
                href="/"
                className="font-medium text-white no-underline transition-colors duration-200 hover:text-brand"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-white/40">
              /
            </li>
            <li aria-current="page" className="font-medium text-brand">
              {breadcrumb ?? title}
            </li>
          </ol>
        </nav>
      </Container>
    </section>
  );
}
