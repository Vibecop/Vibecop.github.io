import { cn } from "@/lib/cn";

/*
 * The mini trend chart on the metric cards.
 *
 * Deliberately not a charting library: it is three numbers of decoration next
 * to a headline figure, so it is a hand-built SVG path no runtime, no
 * layout thrash, and it inherits the section's reveal for its draw-on
 * animation (`.vc-spark-line`, keyed off `[data-revealed]`).
 */

/* Catmull-Rom-ish smoothing: one control point per segment, which is enough
 * to take the corners off a 7-point series without it wandering. */
function smoothPath(points) {
  return points.reduce((d, [x, y], i, all) => {
    if (i === 0) return `M${x},${y}`;
    const [px, py] = all[i - 1];
    const cx = (px + x) / 2;
    return `${d} C${cx},${py} ${cx},${y} ${x},${y}`;
  }, "");
}

export default function Sparkline({
  /* series values in any range; they are normalised to the viewBox */
  values = [12, 26, 18, 34, 28, 46, 62],
  className,
  id,
}) {
  const width = 240;
  const height = 64;
  /* vertical breathing room only the series runs the full width so the
   * line and its fill reach the same edges as the baseline rules */
  const padY = 6;

  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;

  const points = values.map((value, i) => [
    +((i / (values.length - 1)) * width).toFixed(2),
    +(height - padY - ((value - min) / span) * (height - padY * 2)).toFixed(2),
  ]);

  const line = smoothPath(points);
  const area = `${line} L${width},${height} L0,${height} Z`;
  const gradientId = `spark-stroke-${id}`;
  const fillId = `spark-fill-${id}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      /* the series touches x=0 and x=240, so let the round caps sit
       * outside the viewBox instead of being sliced in half */
      className={cn("h-16 w-full overflow-visible", className)}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#b53d1e" />
          <stop offset="55%" stopColor="#f95b34" />
          <stop offset="100%" stopColor="#ff8a16" />
        </linearGradient>
        <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f95b34" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#f95b34" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* the faint baseline grid, two rules only */}
      <g stroke="currentColor" strokeWidth="1" className="text-white/8">
        <line x1="0" y1={height / 3} x2={width} y2={height / 3} />
        <line x1="0" y1={(height / 3) * 2} x2={width} y2={(height / 3) * 2} />
      </g>

      <path d={area} fill={`url(#${fillId})`} className="vc-spark-fill" />
      <path
        d={line}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        /* normalises the path to 240 units so the dash-offset draw in
         * theme.css lands exactly, whatever the series shape works out to.
         * Note: no non-scaling-stroke that would resolve the dash pattern
         * in screen space, where the stretched viewBox makes 240 units fall
         * short of the line and leave the tail undrawn. */
        pathLength="240"
        className="vc-spark-line"
      />
    </svg>
  );
}
