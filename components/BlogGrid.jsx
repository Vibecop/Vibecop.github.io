import BlogCard from "@/components/BlogCard";
import { cn } from "@/lib/cn";

/**
 * The post grid every blog layout shares. `columns` is the count at the widest
 * breakpoint; the steps down to it are fixed so the six layouts stay
 * consistent with each other instead of each inventing its own.
 */
const COLUMNS = {
  1: "grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  6: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6",
};

export default function BlogGrid({ posts, columns = 3, className }) {
  return (
    <div className={cn("grid gap-6", COLUMNS[columns], className)}>
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} layout={columns === 1 ? "wide" : "stacked"} />
      ))}
    </div>
  );
}
