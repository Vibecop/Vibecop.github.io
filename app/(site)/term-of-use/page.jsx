import PageBanner from "@/components/PageBanner";
import LegalContent from "@/components/LegalContent";
import CallToAction from "@/components/CallToAction";
import { LEGAL } from "@/content/legal";

export const metadata = {
  title: "Terms of Use",
  description: "Understand how Vibecop works, including our AI solutions, service terms, and platform usage guidelines.",
};

export default function TermOfUsePage() {
  return (
    <>
      <PageBanner title="Terms of Use" lede="Understand how Vibecop works, including our AI solutions, service terms, and platform usage guidelines." />
      <LegalContent sections={LEGAL["/term-of-use"]} />
      <CallToAction />
    </>
  );
}
