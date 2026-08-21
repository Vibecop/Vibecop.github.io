import PageBanner from "@/components/PageBanner";
import LegalContent from "@/components/LegalContent";
import CallToAction from "@/components/CallToAction";
import { LEGAL } from "@/content/legal";

export const metadata = {
  title: "Privacy Policy",
  description: "Learn about Vibecop’s privacy practices, data protection, and how we handle your information securely.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner title="Privacy Policy" lede="Learn about Vibecop’s privacy practices, data protection, and how we handle your information securely." />
      <LegalContent sections={LEGAL["/privacy-policy"]} />
      <CallToAction />
    </>
  );
}
