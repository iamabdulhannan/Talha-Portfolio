"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.span
    initial={{ opacity: 0.15, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className="inline-block"
  >
    {children}
  </motion.span>
);

export default function About() {
  const words = profile.summary.split(" ");
  return (
    <section id="about" className="relative w-full py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between gap-8">
          <div>
            <p className="mb-2.5 text-[11px] uppercase tracking-[0.25em] text-accent">/ 01 — About</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Engineering with <span className="text-stroke">intent.</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-8">
            <p className="font-display text-lg leading-[1.45] tracking-tight text-fg/90 md:text-2xl">
              {words.map((w, i) => (
                <Reveal key={i} delay={i * 0.015}>
                  {w}&nbsp;
                </Reveal>
              ))}
            </p>
          </div>

          <div className="md:col-span-4">
            <div className="sticky top-28 space-y-5 text-[13px] leading-relaxed text-muted">
              <p>{profile.longSummary}</p>
              <div className="h-px w-full bg-white/10" />
              <div className="grid grid-cols-2 gap-4 text-[11px]">
                <div>
                  <div className="text-muted/60">Based in</div>
                  <div className="mt-0.5 text-fg">{profile.location}</div>
                </div>
                <div>
                  <div className="text-muted/60">Experience</div>
                  <div className="mt-0.5 text-fg">{profile.yearsExperience} years</div>
                </div>
                <div>
                  <div className="text-muted/60">Focus</div>
                  <div className="mt-0.5 text-fg">.NET · Cloud</div>
                </div>
                <div>
                  <div className="text-muted/60">Availability</div>
                  <div className="mt-0.5 text-fg">Open to roles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
