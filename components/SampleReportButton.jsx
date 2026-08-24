"use client";

import { useRef, useState } from "react";
import SampleReportModal from "@/components/SampleReportModal";
import { cn } from "@/lib/cn";

/**
 * The "Sample audit output" line under the hero collage, as a control.
 *
 * It owns its own open state rather than going through a provider the way
 * <AuditButton/> does: this is the one place the sample report opens from,
 * and a context for a single caller is a context too many.
 */
export default function SampleReportButton({ className }) {
  const [open, setOpen] = useState(false);
  const trigger = useRef(null);

  return (
    <>
      <button
        ref={trigger}
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "group inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-4 py-2",
          "text-xs font-semibold uppercase tracking-wide text-muted",
          "transition-colors duration-300 hover:border-brand/45 hover:text-white",
          className
        )}
      >
        Sample audit output
        <i
          aria-hidden="true"
          className="fa-solid fa-arrow-up-right-from-square text-[10px] text-brand transition-transform duration-300 group-hover:-translate-y-px"
        />
      </button>

      {open && (
        <SampleReportModal
          onClose={() => {
            setOpen(false);
            /* focus goes back to the line that opened it */
            trigger.current?.focus();
          }}
        />
      )}
    </>
  );
}
