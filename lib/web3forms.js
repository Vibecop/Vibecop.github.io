/**
 * Submits a form's fields to Web3Forms, which emails them to the address the
 * access key is registered to. Used by every lead form on the site.
 *
 * Pass anything not already a named input as `extra`:
 *
 *   const ok = await submitForm(e.currentTarget, { subject: "New lead" });
 *
 * ponytail: the access key is public by design Web3Forms keys are meant to
 * ship in the bundle, and on a static export env vars inline identically, so
 * hiding it buys nothing. Worst case if scraped is spam to our own inbox.
 * Restrict the origin allowlist to vibecop.io in the Web3Forms dashboard.
 */
const ACCESS_KEY = "25f5c1fd-0819-4df2-9c44-31e49415fcc8";

export async function submitForm(form, extra = {}) {
  const body = new FormData(form);
  body.append("access_key", ACCESS_KEY);
  body.append("from_name", "vibecop.io");

  /* so hitting reply in the notification reaches the prospect */
  const email = body.get("email");
  if (email) body.append("replyto", email);

  for (const [key, value] of Object.entries(extra)) body.append(key, value);

  try {
    const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body });
    const json = await res.json().catch(() => ({}));
    return json.success === true;
  } catch {
    return false;
  }
}
