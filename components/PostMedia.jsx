"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

/**
 * A post's media, in the three shapes the kit ships.
 *
 * The gallery replaces a Bootstrap/Owl carousel: it is a scroll-snap strip
 * with real prev/next buttons, so it works without JavaScript beyond the
 * index, keeps keyboard focus, and cannot rewrite its own markup underneath
 * React the way Owl did.
 */
export default function PostMedia({ post, className }) {
  const [index, setIndex] = useState(0);
  const frame = cn("aspect-16/10 w-full object-cover", className);

  if (post.type === "video") {
    return (
      <div className={cn("aspect-16/10 w-full overflow-hidden", className)}>
        <iframe
          src={post.url}
          title={`${post.tag} — video`}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
          allowFullScreen
          className="h-full w-full border-0"
        />
      </div>
    );
  }

  if (post.type === "gallery") {
    const last = post.images.length - 1;
    const step = (delta) => setIndex((i) => (i + delta + post.images.length) % post.images.length);

    return (
      <div className={cn("group relative overflow-hidden", className)}>
        <img
          src={post.images[index]}
          alt=""
          loading="lazy"
          className={cn(frame, "block")}
        />

        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous image"
          className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink/60 text-white opacity-0 transition-opacity duration-200 hover:bg-brand focus-visible:opacity-100 group-hover:opacity-100"
        >
          <i className="fa-solid fa-chevron-left text-xs" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next image"
          className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink/60 text-white opacity-0 transition-opacity duration-200 hover:bg-brand focus-visible:opacity-100 group-hover:opacity-100"
        >
          <i className="fa-solid fa-chevron-right text-xs" aria-hidden="true" />
        </button>

        <div className="absolute inset-x-0 bottom-2 flex justify-center gap-1.5">
          {post.images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Image ${i + 1} of ${last + 1}`}
              aria-current={i === index}
              className={cn(
                "h-1.5 rounded-full transition-all duration-200",
                i === index ? "w-5 bg-brand" : "w-1.5 bg-white/50 hover:bg-white"
              )}
            />
          ))}
        </div>
      </div>
    );
  }

  return <img src={post.image} alt="" loading="lazy" className={cn(frame, "block")} />;
}
