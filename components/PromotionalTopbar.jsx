export default function PromotionalTopbar() {
  return (
    <div className="promotional-topbar">
      {' '}
      <div className="promotional-topbar-icon">
        {' '}
        <i className="fa-solid fa-wand-magic-sparkles topbar-icon"></i>
        {' '}
        <p>
          Get Opzio today & Save Up to 26%
        </p>
        {' '}
      </div>
      {' '}
      <a
        className="buy_now text-decoration-none"
        target="_blank"
        href="https://designingmedia.com/checkout/?add-to-cart=38423"
      >
        {' '}
        <span className="label">
          Buy Now
        </span>
        {' '}
        <i className="fa-solid fa-arrow-right"></i>
        {' '}
      </a>
      {' '}
    </div>
  );
}
