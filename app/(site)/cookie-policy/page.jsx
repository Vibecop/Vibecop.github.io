import PageBanner from "@/components/PageBanner";
import LegalContent from "@/components/LegalContent";
import CallToAction from "@/components/CallToAction";
import { LEGAL } from "@/content/legal";

export const metadata = {
  title: "Cookie Policy",
  description: "How Vibecop uses cookies, what they store, and how you control them.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageBanner title="Cookie Policy" lede="How Vibecop uses cookies, what they store, and how you control them." />
      <LegalContent sections={LEGAL["/cookie-policy"]} />
      <CallToAction />
    </>
  );
}
