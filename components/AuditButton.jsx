"use client";

import Button from "@/components/ui/Button";
import { useAuditModal } from "@/components/AuditModal";

/**
 * An audit CTA. Opens the application modal where the provider is mounted
 * (every page under the site layout) and links to /contact where it is not,
 * so the button is never dead.
 */
export default function AuditButton({ children, ...props }) {
  const audit = useAuditModal();

  if (!audit) {
    return (
      <Button href="/contact" {...props}>
        {children}
      </Button>
    );
  }

  return (
    <Button onClick={audit.open} {...props}>
      {children}
    </Button>
  );
}
