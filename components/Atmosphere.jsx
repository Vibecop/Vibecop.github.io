/*
 * The site's one decorative background layer: fixed behind the content, so
 * the glows, grid and grain read as a single environment the page scrolls
 * through rather than as per-section artwork.
 *
 * Inert by construction aria-hidden, pointer-events:none, and no layout
 * box of its own and mounted once per layout instead of repeated down the
 * page. The parallax factors are deliberately tiny: felt, not seen.
 */
export default function Atmosphere() {
  return (
    <div className="site-atmosphere" aria-hidden="true">
      <span className="atmo-glow atmo-glow--one" data-parallax="0.08" />
      <span className="atmo-glow atmo-glow--two" data-parallax="-0.05" />
      <span className="atmo-glow atmo-glow--three" data-parallax="0.04" />
      <span className="atmo-grid" />
      <span className="atmo-noise" />
    </div>
  );
}
