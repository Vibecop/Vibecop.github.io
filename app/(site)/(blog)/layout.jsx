/*
 * assets/css/blog.css was linked only by the blog-layout pages in the original
 * kit. It restyles bare `a` and `.sub-banner li`, which appear on every page
 * and are styled nowhere else, so loading it globally would visibly change the
 * rest of the site.
 *
 * Importing it here scopes the request to these routes; <BlogCssScope /> then
 * switches the sheet off again on the way out, because Next leaves a segment's
 * CSS attached after navigation.
 */
import "@/styles/blog.css";
import BlogCssScope from "@/components/BlogCssScope";

export default function BlogLayout({ children }) {
  return (
    <>
      <BlogCssScope />
      {children}
    </>
  );
}
