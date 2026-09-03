"use client";

import { createContext, useCallback, useContext, useId, useRef, useState } from "react";
import Badge from "@/components/ui/Badge";
import Modal from "@/components/ui/Modal";
import { AUDIT_FIELDS, AUDIT_MODAL } from "@/content/audit";
import { cn } from "@/lib/cn";
import { submitForm } from "@/lib/web3forms";

/*
 * The audit application, as a modal.
 *
 * <AuditModalProvider/> sits in the site layout and owns the open state, so
 * the "Request an audit" CTAs scattered across the pages stay server
 * components and only <AuditButton/> is a client one.
 *
 * The dialog chrome backdrop, focus trap, scroll lock, portal is
 * <Modal/>, shared with the sample report.
 */
const AuditModalContext = createContext(null);

/** Null outside the provider <AuditButton/> falls back to /contact then. */
export function useAuditModal() {
  return useContext(AuditModalContext);
}

export function AuditModalProvider({ children }) {
  const [open, setOpen] = useState(false);
  const opener = useRef(null);

  const openModal = useCallback(() => {
    opener.current = document.activeElement;
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
    /* return focus to whichever CTA opened it */
    opener.current?.focus?.();
    opener.current = null;
  }, []);

  return (
    <AuditModalContext.Provider value={{ open: openModal, close: closeModal, isOpen: open }}>
      {children}
      {open && <AuditModal onClose={closeModal} />}
    </AuditModalContext.Provider>
  );
}

function AuditModal({ onClose }) {
  const base = useId();
  const firstField = useRef(null);
  const [status, setStatus] = useState(null);

  const inputClass = "vc-field w-full rounded-xl px-3.5 py-2 text-sm text-white placeholder:text-muted-3";

  return (
    <Modal
      onClose={onClose}
      labelledBy={`${base}-title`}
      initialFocus={firstField}
      className="max-w-3xl"
    >
      <ul className="m-0 flex list-none flex-wrap gap-2 p-0 pr-12">
        {AUDIT_MODAL.badges.map((badge) => (
          <li key={badge}>
            <Badge className="px-3 py-1.5 text-xs">
              <i className="fa-solid fa-check text-[9px] text-brand" aria-hidden="true" />
              {badge}
            </Badge>
          </li>
        ))}
      </ul>

      <h2 id={`${base}-title`} className="mt-5 text-h2">
        {AUDIT_MODAL.title}
      </h2>
      <p className="mt-3 text-sm text-muted">{AUDIT_MODAL.lede}</p>

      <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <h3 className="text-sm font-semibold text-white">{AUDIT_MODAL.pitchTitle}</h3>
        <p className="mt-2 text-sm text-muted">{AUDIT_MODAL.pitchBody}</p>
      </div>

      <form
        className="mt-6"
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.currentTarget;
          setStatus("sending");
          const ok = await submitForm(form, { subject: "New audit application vibecop.io" });
          setStatus(ok ? "ok" : "err");
          if (ok) form.reset();
        }}
      >
        <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="grid gap-4 sm:grid-cols-2">
          {AUDIT_FIELDS.map((field, i) => (
            <div key={field.id} className={field.full ? "sm:col-span-2" : undefined}>
              <label htmlFor={`${base}-${field.id}`} className="block text-sm font-medium text-white">
                {field.label}
                {field.required && (
                  <span aria-hidden="true" className="text-brand">
                    {" "}
                    *
                  </span>
                )}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  ref={i === 0 ? firstField : undefined}
                  id={`${base}-${field.id}`}
                  name={field.id}
                  rows={2}
                  required={field.required}
                  placeholder={field.placeholder}
                  className={cn(inputClass, "mt-1.5 resize-y")}
                />
              ) : field.type === "select" ? (
                <select
                  ref={i === 0 ? firstField : undefined}
                  id={`${base}-${field.id}`}
                  name={field.id}
                  required={field.required}
                  defaultValue=""
                  className={cn(inputClass, "mt-1.5")}
                >
                  <option value="" disabled>
                    {field.placeholder}
                  </option>
                  {field.options.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <input
                  ref={i === 0 ? firstField : undefined}
                  id={`${base}-${field.id}`}
                  name={field.id}
                  type={field.type}
                  required={field.required}
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                  className={cn(inputClass, "mt-1.5")}
                />
              )}
            </div>
          ))}
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="vc-btn vc-btn-primary mt-6 w-full rounded-full px-7 py-3 font-semibold text-white disabled:opacity-60 sm:w-auto"
        >
          {status === "sending" ? "Sending" : AUDIT_MODAL.submitLabel}
        </button>

        <p className="mt-3 text-xs text-muted-3">{AUDIT_MODAL.footnote}</p>

        <output
          aria-live="polite"
          className={cn("mt-3 block text-sm", status === "err" ? "text-red-400" : "text-brand")}
        >
          {status === "ok" && AUDIT_MODAL.sentNote}
          {status === "err" && AUDIT_MODAL.errorNote}
        </output>
      </form>
    </Modal>
  );
}
