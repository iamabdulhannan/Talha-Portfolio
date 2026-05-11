"use client";

import { motion } from "framer-motion";
import { skillGroups, education } from "@/lib/data";
import { Code2, Cloud, Database, Layers, Workflow, Brain, GraduationCap, GitBranch } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Backend: Code2,
  Frontend: Layers,
  "Cloud & DevOps": Cloud,
  Data: Database,
  Architecture: Workflow,
  Practices: GitBranch,
};

const accentMap: Record<string, string> = {
  accent: "text-accent",
  accent2: "text-accent2",
  violet: "text-violet",
};

export default function Stack() {
  return (
    <section id="stack" className="relative w-full py-20 md:py-28">
      <div className="absolute inset-0 dot-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-3">
          <p className="text-[11px] uppercase tracking-[0.25em] text-accent">/ 03 — Toolkit</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
            The stack <span className="text-stroke">behind</span> the products.
          </h2>
        </div>

        <div className="grid auto-rows-[minmax(0,1fr)] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {skillGroups.map((g, i) => {
            const Icon = iconMap[g.title] ?? Code2;
            const isWide = i === 0 || i === 3;
            const isTall = i === 2;
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className={[
                  "group relative overflow-hidden rounded-2xl border border-white/8 glass p-5 transition hover:border-white/20",
                  isWide ? "lg:col-span-3" : "lg:col-span-2",
                  isTall ? "lg:row-span-2" : "",
                ].join(" ")}
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent/5 blur-2xl transition group-hover:bg-accent/15" />

                <div className="flex items-center justify-between">
                  <div className={`grid h-9 w-9 place-items-center rounded-xl bg-white/5 ${accentMap[g.accent]}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-5">
                  <h3 className="font-display text-base font-semibold tracking-tight">{g.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {g.items.map((it) => (
                      <span
                        key={it}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[11px] text-fg/80 transition group-hover:border-white/20"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative col-span-1 overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-accent/15 to-transparent p-5 sm:col-span-2 lg:col-span-4"
          >
            <div className="flex items-start gap-3.5">
              <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl bg-accent text-bg">
                <Brain className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold tracking-tight">
                  AI-Augmented Development
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-fg/80">
                  GitHub Copilot, LLM-assisted workflows, automated testing and rapid prototyping —
                  applied strategically across the SDLC to compress time-to-production while
                  keeping architecture and business logic firmly in human hands.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="relative col-span-1 overflow-hidden rounded-2xl border border-white/8 glass p-5 sm:col-span-2 lg:col-span-2"
          >
            <div className="flex items-start gap-3.5">
              <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl bg-white/5 text-accent2">
                <GraduationCap className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted">Education</div>
                <h3 className="mt-0.5 font-display text-[15px] font-semibold tracking-tight">
                  {education.degree}
                </h3>
                <div className="mt-0.5 text-[13px] text-muted">{education.institution}</div>
                <div className="mt-0.5 text-[11px] text-muted/70">{education.period}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
