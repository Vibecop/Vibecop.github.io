import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Atmosphere from "@/components/Atmosphere";

export const metadata = { title: "404" };

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center py-16">
      {/* rendered outside (site) and (bare), so it brings its own background */}
      <Atmosphere />
      <Container className="flex flex-col items-center gap-8 text-center">
        <img
          src="/assets/images/error-img.png"
          alt=""
          aria-hidden="true"
          className="vc-float-slow w-full max-w-lg"
        />
        <h1 className="text-h1 max-w-3xl">We Could Not Find Page You’re Looking</h1>
        <p className="max-w-xl text-base text-muted">
          The link you’re trying to access is probably broken, or the page has been removed.
        </p>
        <Button href="/" size="lg">
          Back to Home
        </Button>
      </Container>
    </main>
  );
}
