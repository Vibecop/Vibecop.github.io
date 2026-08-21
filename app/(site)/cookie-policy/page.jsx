import PageBanner from "@/components/PageBanner";
import LegalContent from "@/components/LegalContent";
import CallToAction from "@/components/CallToAction";
import { LEGAL } from "@/content/legal";

export const metadata = {
  title: "Cookie Policy",
  description: "Learn about Vibecop’s privacy practices, data protection, and how we handle your information securely.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageBanner title="Cookie Policy" lede="Learn about Vibecop’s privacy practices, data protection, and how we handle your information securely." />
      <LegalContent sections={LEGAL["/cookie-policy"]} />
      <CallToAction />
    </>
  );
}
