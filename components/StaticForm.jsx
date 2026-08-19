"use client";

/*
 * The kit's demo forms carry action="javascript:;" so a submit does nothing.
 * React treats a javascript: URL as unsafe, so the same "go nowhere" result is
 * expressed as a prevented submit instead. Markup and classes are unchanged.
 */
export default function StaticForm({ children, ...props }) {
  return (
    <form {...props} onSubmit={(e) => e.preventDefault()}>
      {children}
    </form>
  );
}
