import { TIMELINE } from "@/content/process";

/**
 * The 3–7 business day delivery timeline: the artwork on one side, the drawn rail on
 * the other. Home and /process both tell this story, so they share one block
 * instead of each rendering TIMELINE its own way and drifting apart.
 *
 * Expects a `velocity-feature` section around it that class owns the glow
 * and the overflow clip.
 */
export default function VelocityPlan() {
  return (
    <div className="velocity-feature-grid">
      <div className="velocity-feature-art" data-reveal="left">
        <img src="/assets/images/velocity-plan-img.png" alt="Audit findings dashboard" />
      </div>

      <div className="velocity-feature-copy" data-reveal="right">
        <img src="/assets/images/special-img.png" alt="" aria-hidden="true" className="velocity-feature-mark" />
        <h2 className="text-h1">
          The 3-7 Business Day Production Readiness Plan
          <button
            type="button"
            className="tip-mark"
            aria-label="About the 3-7 business day window"
            aria-describedby="velocity-window-tip"
          >
            <i className="fa-solid fa-question" aria-hidden="true" />
            <span className="tip" id="velocity-window-tip" role="tooltip">
              An average, not a guarantee. Actual turnaround depends entirely on the size and
              complexity of your codebase. We confirm your window at scoping, before any work
              starts.
            </span>
          </button>
        </h2>

        <p className="velocity-feature-note">
          Typical scope-to-handoff time in business days. Larger or more tangled codebases
          run longer, and we tell you which side of the window you are on up front.
        </p>

        <ol className="velocity-timeline" data-draw>
          {TIMELINE.map((step, i) => (
            <li key={step.title} className={i === TIMELINE.length - 1 ? "is-final" : undefined}>
              <span className="velocity-timeline-dot" aria-hidden="true">
                {i === TIMELINE.length - 1 ? "✓" : ""}
              </span>
              <div>
                <h3>
                  {step.when}: {step.title}
                </h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
