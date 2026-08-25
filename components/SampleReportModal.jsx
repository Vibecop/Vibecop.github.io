"use client";

import { useId, useState } from "react";
import Badge from "@/components/ui/Badge";
import Modal from "@/components/ui/Modal";
import { useAuditModal } from "@/components/AuditModal";
import {
  SAMPLE_CATEGORIES,
  SAMPLE_FINDINGS,
  SAMPLE_REPORT,
  SAMPLE_REPORT_CTA,
  SAMPLE_ROADMAP,
  SAMPLE_SCORE,
  SAMPLE_SEVERITY_COUNTS,
  SAMPLE_SUMMARY,
} from "@/content/sample-report";
import { cn } from "@/lib/cn";

/*
 * The sample deliverable, opened from the hero's "Sample audit output" line.
 *
 * It is the one place on the site that shows the product rather than
 * describing it, so it is laid out as the report is: cover, score, summary,
 * findings, roadmap and it stops at sprint 2, because the rest is what the
 * audit is for.
 *
 * Chrome, focus trap and portal come from <Modal/>. Copy comes from
 * content/sample-report.js.
 */

/*
 * Severity is carried by hue, so it has to be legible without the label
 * beside it red for critical down to a plain white for low. These are the
 * only colours on the site outside the orange ramp, which is the point: a
 * finding list that is all brand orange reads as decoration.
 */
const SEVERITY = {
  critical: { label: "Critical", text: "text-[#ff7a70]", pill: "border-[#ff5f56]/40 bg-[#ff5f56]/15", bar: "bg-[#ff5f56]" },
  high: { label: "High", text: "text-[#ff9d5c]", pill: "border-[#f95b34]/40 bg-[#f95b34]/15", bar: "bg-[#f95b34]" },
  medium: { label: "Medium", text: "text-[#f2c14e]", pill: "border-[#f2c14e]/35 bg-[#f2c14e]/12", bar: "bg-[#f2c14e]" },
  low: { label: "Low", text: "text-white/70", pill: "border-white/20 bg-white/8", bar: "bg-white/45" },
};

/** The half-ring behind the overall score. `value` is a percentage. */
function ScoreGauge({ value }) {
  return (
    <svg viewBox="0 0 120 70" aria-hidden="true" className="w-44">
      <path
        d="M8 62a52 52 0 0 1 104 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        className="text-white/12"
      />
      <path
        d="M8 62a52 52 0 0 1 104 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        pathLength="100"
        strokeDasharray={`${value} 100`}
        className="text-[#ff5f56]"
      />
    </svg>
  );
}

/** Label, figure and a proportional rule used for the category scores. */
function ScoreBar({ label, score }) {
  return (
    <li>
      <p className="m-0 flex items-baseline justify-between gap-3">
        <span className="text-xs text-muted">{label}</span>
        <span className="text-sm font-bold tabular-nums text-white">{score}</span>
      </p>
      <span className="mt-1 block h-1.5 overflow-hidden rounded-full bg-white/8">
        <span
          className={cn("block h-full rounded-full", score < 40 ? "bg-[#ff5f56]" : "bg-brand")}
          style={{ width: `${score}%` }}
        />
      </span>
    </li>
  );
}

/*
 * One finding. Reuses the FAQ accordion's shell (`.faq-item`/`.faq-panel`) so
 * it opens with the same height animation and the closed body stays out of
 * the tab order.
 */
function Finding({ finding, expanded, onToggle, headingId, panelId }) {
  const tone = SEVERITY[finding.severity];

  return (
    <li className={cn("faq-item list-none overflow-hidden rounded-2xl", expanded && "is-open")}>
      <h4 className="m-0">
        <button
          id={headingId}
          type="button"
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full cursor-pointer items-start gap-3 p-4 text-left transition-colors duration-200 hover:text-brand"
        >
          <span className="min-w-0 flex-1">
            <span className="flex flex-wrap items-center gap-2">
              <span
                className={cn(
                  "inline-flex rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                  tone.pill,
                  tone.text
                )}
              >
                {tone.label}
              </span>
              <span className="font-mono text-[11px] text-muted-3">{finding.id}</span>
              <span className="text-[11px] uppercase tracking-wide text-muted-3">{finding.area}</span>
            </span>
            <span className="mt-1.5 block text-sm font-semibold text-white">{finding.title}</span>
          </span>

          <span
            aria-hidden="true"
            className={cn(
              "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border",
              "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
              expanded
                ? "rotate-45 border-transparent bg-brand text-white shadow-[0_0_1rem_rgb(249_91_52/45%)]"
                : "border-white/25 text-white"
            )}
          >
            <i className="fa-solid fa-plus text-[10px]" />
          </span>
        </button>
      </h4>

      {/* stays mounted so the height can animate; `inert` keeps the closed
          body out of the tab order and the accessibility tree */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={headingId}
        aria-hidden={!expanded}
        inert={!expanded}
        className="faq-panel"
      >
        <div>
          <dl className="m-0 space-y-3 px-4 pb-4">
            {[
              ["Description", finding.description],
              ["Business Impact", finding.impact],
              ["Recommendation", finding.recommendation],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-[11px] font-semibold uppercase tracking-wide text-muted-3">{label}</dt>
                <dd className="m-0 mt-1 text-sm text-muted">{value}</dd>
              </div>
            ))}
          </dl>

          <p className="m-0 border-t border-white/10 px-4 py-3 text-xs text-muted-3">
            Estimated effort: <span className="font-semibold text-white">{finding.effort}</span>
          </p>
        </div>
      </div>
    </li>
  );
}

/**
 * A CTA inside the report. Hands the reader to the application modal
 * closing this one first, since two dialogs open at once is neither good
 * keyboard behaviour nor good manners. Falls back to /contact where the
 * provider is not mounted.
 */
function ReportCta({ children, variant = "primary", className, onClose }) {
  const audit = useAuditModal();
  const classes = cn(
    "vc-btn inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white no-underline",
    variant === "primary" ? "vc-btn-primary" : "vc-btn-outline",
    className
  );

  if (!audit) {
    return (
      <a href="/contact" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      onClick={() => {
        onClose();
        audit.open();
      }}
    >
      {children}
    </button>
  );
}

export default function SampleReportModal({ onClose }) {
  const base = useId();
  const [open, setOpen] = useState(0);

  const total = SAMPLE_FINDINGS.length;

  return (
    <Modal onClose={onClose} labelledBy={`${base}-title`} className="max-w-5xl">
      {/* ── cover ─────────────────────────────────────────────── */}
      <div className="pr-12">
        <Badge className="px-3 py-1.5 text-xs">
          <i className="fa-solid fa-file-lines text-[10px] text-brand" aria-hidden="true" />
          {SAMPLE_REPORT.eyebrow}
        </Badge>
      </div>

      <h2 id={`${base}-title`} className="mt-4 text-h2">
        {SAMPLE_REPORT.title}
      </h2>

      {SAMPLE_REPORT.lede.map((line) => (
        <p key={line} className="mt-2 text-sm text-muted">
          {line}
        </p>
      ))}

      <dl className="mt-5 grid list-none grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {SAMPLE_REPORT.meta.map(({ label, value }) => (
          <div key={label} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5">
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-muted-3">{label}</dt>
            <dd className="m-0 mt-1 text-xs font-medium text-white">{value}</dd>
          </div>
        ))}
      </dl>

      {/* ── score ─────────────────────────────────────────────── */}
      <section className="mt-6 grid gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:grid-cols-2">
        <div className="text-center">
          <p className="m-0 text-xs font-semibold uppercase tracking-wide text-muted-3">
            {SAMPLE_SCORE.label}
          </p>

          <div className="mt-3 flex flex-col items-center">
            {/* the figure is centred in the arc rather than under it, so the
                two read as one dial */}
            <div className="relative">
              <ScoreGauge value={SAMPLE_SCORE.value} />
              <p className="absolute inset-x-0 bottom-0 m-0 flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold leading-none text-white">{SAMPLE_SCORE.value}</span>
                <span className="text-sm text-muted-3">/{SAMPLE_SCORE.outOf}</span>
              </p>
            </div>

            <p className="m-0 mt-3 inline-flex rounded-full border border-[#ff5f56]/40 bg-[#ff5f56]/15 px-3 py-1 text-xs font-semibold text-[#ff7a70]">
              {SAMPLE_SCORE.verdict}
            </p>
          </div>

          <ul className="m-0 mt-5 grid list-none grid-cols-4 gap-2 p-0">
            {SAMPLE_SEVERITY_COUNTS.map(({ severity, count }) => (
              <li key={severity} className="rounded-xl border border-white/10 bg-white/[0.03] py-2">
                <p className={cn("m-0 text-xl font-bold tabular-nums", SEVERITY[severity].text)}>{count}</p>
                <p className="m-0 text-[10px] uppercase tracking-wide text-muted-3">
                  {SEVERITY[severity].label}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <ul className="m-0 flex list-none flex-col justify-center gap-3 p-0">
          {SAMPLE_CATEGORIES.map((category) => (
            <ScoreBar key={category.label} {...category} />
          ))}
        </ul>
      </section>

      {/* ── executive summary ─────────────────────────────────── */}
      <section className="mt-7">
        <h3 className="text-h3">{SAMPLE_SUMMARY.title}</h3>
        {SAMPLE_SUMMARY.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="mt-3 text-sm text-muted">
            {paragraph}
          </p>
        ))}
      </section>

      {/* ── findings ──────────────────────────────────────────── */}
      <section className="mt-7">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="m-0 text-h3">
            Findings <span className="text-sm font-normal text-muted-3">click any finding to expand</span>
          </h3>
          <span className="text-xs font-semibold uppercase tracking-wide text-muted-3">{total} total</span>
        </div>

        <ul className="m-0 mt-4 flex list-none flex-col gap-3 p-0">
          {SAMPLE_FINDINGS.map((finding, i) => (
            <Finding
              key={finding.id}
              finding={finding}
              expanded={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
              headingId={`${base}-f-${i}`}
              panelId={`${base}-p-${i}`}
            />
          ))}
        </ul>
      </section>

      {/* ── roadmap ───────────────────────────────────────────── */}
      <section className="mt-7">
        <h3 className="text-h3">{SAMPLE_ROADMAP.title}</h3>
        <p className="mt-2 text-sm text-muted">{SAMPLE_ROADMAP.lede}</p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {SAMPLE_ROADMAP.sprints.map((sprint) => (
            <div key={sprint.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="m-0 text-sm font-semibold text-white">{sprint.title}</p>
              <ul className="m-0 mt-3 list-none space-y-2.5 p-0">
                {sprint.items.map((item) => (
                  <li key={item.id} className="flex gap-2.5">
                    <span className="mt-px shrink-0 rounded-md border border-white/12 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-muted">
                      {item.id}
                    </span>
                    <span className="text-xs text-muted">{item.task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── what the sample withholds, and the way in ─────────── */}
      <section className="mt-6 rounded-2xl border border-brand/35 bg-[linear-gradient(155deg,rgb(249_91_52/12%),rgb(255_255_255/3%))] p-5 text-center">
        <p className="m-0 text-sm font-semibold text-white">{SAMPLE_REPORT_CTA.teaserTitle}</p>
        <p className="m-0 mt-1.5 text-sm text-muted">{SAMPLE_REPORT_CTA.teaserBody}</p>
        <p className="m-0 mt-1 text-xs text-muted-3">{SAMPLE_REPORT_CTA.teaserNote}</p>

        <ReportCta className="mt-4" onClose={onClose}>
          {SAMPLE_REPORT_CTA.teaserLabel}
        </ReportCta>
      </section>

      <section className="mt-6 text-center">
        <h3 className="m-0 text-h3">{SAMPLE_REPORT_CTA.closingTitle}</h3>
        <p className="mt-2 text-sm text-muted">{SAMPLE_REPORT_CTA.closingBody}</p>

        <div className="mt-4">
          <ReportCta variant="outline" onClose={onClose}>
            {SAMPLE_REPORT_CTA.closingLabel}
            <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true" />
          </ReportCta>
        </div>
      </section>
    </Modal>
  );
}
