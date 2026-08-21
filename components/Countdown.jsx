"use client";

import { useEffect, useState } from "react";

const UNITS = [
  ["Days", 24 * 60 * 60 * 1000],
  ["Hours", 60 * 60 * 1000],
  ["Minutes", 60 * 1000],
  ["Seconds", 1000],
];

/** The next 24 June, which is the date the kit's counter.js counted down to. */
function nextTarget(now = new Date()) {
  const year = now.getFullYear();
  const thisYear = new Date(year, 5, 24);
  return thisYear > now ? thisYear : new Date(year + 1, 5, 24);
}

function split(remaining) {
  let rest = Math.max(remaining, 0);
  return UNITS.map(([label, ms]) => {
    const value = Math.floor(rest / ms);
    rest -= value * ms;
    return { label, value };
  });
}

export default function Countdown() {
  // Rendered empty on the server: the remaining time differs between server
  // and client, and rendering it twice is a hydration mismatch.
  const [parts, setParts] = useState(null);

  useEffect(() => {
    const target = nextTarget().getTime();
    const tick = () => setParts(split(target - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <ul
      aria-label="Time until launch"
      className="m-0 flex list-none flex-wrap justify-center gap-4 p-0 sm:gap-6"
    >
      {(parts ?? UNITS.map(([label]) => ({ label, value: null }))).map(({ label, value }) => (
        <li
          key={label}
          className="min-w-24 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center"
        >
          <span className="block text-3xl font-bold tabular-nums text-white sm:text-4xl">
            {value === null ? "--" : String(value).padStart(2, "0")}
          </span>
          <span className="mt-1 block text-sm text-muted">{label}</span>
        </li>
      ))}
    </ul>
  );
}
