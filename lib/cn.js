/**
 * Joins class names, dropping anything falsy so conditionals read inline:
 *
 *   cn("rounded-3xl", active && "ring-2 ring-brand", className)
 *
 * Deliberately not tailwind-merge: nothing here relies on a later utility
 * beating an earlier one, and a 4-line helper beats a dependency for that.
 */
export function cn(...parts) {
  return parts.filter(Boolean).join(" ");
}
