import { cn } from "@/lib/cn";

/** The kit's content width (1417px), with the gutter it always had. */
export default function Container({ className, ...props }) {
  return <div className={cn("mx-auto w-full max-w-page px-4 sm:px-6", className)} {...props} />;
}
