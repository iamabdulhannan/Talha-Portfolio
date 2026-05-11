"use client";

import { allSkills } from "@/lib/data";

export default function Marquee() {
  const items = [...allSkills, ...allSkills];
  return (
    <section className="relative isolate overflow-hidden border-y border-white/8 bg-bg py-6">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-bg to-transparent" />
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {items.map((s, i) => (
          <span
            key={`${s}-${i}`}
            className="font-display text-lg font-medium tracking-tight text-fg/30 transition hover:text-accent md:text-2xl"
          >
            {s}
            <span className="ml-10 text-accent/70">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
