"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Building2 } from "lucide-react";
import { experiences } from "@/lib/data";

function ExperienceCard({ exp, index }: { exp: (typeof experiences)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="group relative overflow-hidden rounded-2xl border border-white/8 glass p-6 md:p-8">
        <div className="pointer-events-none absolute -right-32 -top-32 h-60 w-60 rounded-full bg-accent/10 blur-3xl transition-opacity duration-700 group-hover:opacity-100 opacity-30" />

        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
              <Building2 className="h-4 w-4 text-accent" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted">
                {String(index + 1).padStart(2, "0")} / {String(experiences.length).padStart(2, "0")}
              </div>
              <div className="font-display text-[15px] font-medium">{exp.product}</div>
            </div>
          </div>
          <div className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-muted">
            {exp.period}
          </div>
        </div>

        <div className="mt-7 grid gap-6 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-[10px] uppercase tracking-[0.2em] text-accent">{exp.role}</div>
            <div className="mt-1.5 font-display text-xl font-semibold tracking-tight md:text-2xl">
              {exp.company}
            </div>
            <div className="mt-1 text-[13px] text-muted">
              Client: {exp.client} · {exp.location}
            </div>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {exp.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-fg/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-7">
            <p className="text-[14px] leading-relaxed text-fg/80">{exp.description}</p>
            <ul className="mt-5 space-y-2.5">
              {exp.highlights.map((h, i) => (
                <li key={i} className="flex gap-2.5 text-[13px] leading-relaxed text-muted">
                  <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-accent" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="work" className="relative w-full py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-3">
          <p className="text-[11px] uppercase tracking-[0.25em] text-accent">/ 02 — Selected Work</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Five products. <span className="text-stroke">Four countries.</span>
          </h2>
          <p className="mt-1 max-w-lg text-[14px] leading-relaxed text-muted">
            From transit operations in Germany to influencer platforms in the UK and recreation
            management in Canada — each role tightened my craft on backend depth, cloud, and
            shipping discipline.
          </p>
        </div>

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.product} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
