"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin, Sparkles } from "lucide-react";
import Magnetic from "./Magnetic";
import { profile, stats } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[88svh] w-full items-center overflow-hidden pt-24 md:pt-28"
    >
      <div className="aurora opacity-60" />
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay" />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-[11px] text-muted"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          Available for senior roles · {profile.yearsExperience} years building products
        </motion.div>

        <h1 className="font-display text-[clamp(2.75rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.035em]">
          <motion.span
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            Talha
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="block text-gradient"
          >
            Shahzad.
          </motion.span>
        </h1>

        <div className="mt-8 grid gap-6 md:grid-cols-12 md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-7"
          >
            <p className="max-w-lg text-[15px] leading-relaxed text-fg/75 md:text-base">
              Senior <span className="text-fg font-medium">.NET Full-Stack Engineer</span> shipping
              enterprise platforms in recreation, transit, retail and eSports — powered by{" "}
              <span className="inline-flex items-center gap-1 text-accent">
                <Sparkles className="h-3.5 w-3.5" /> AI-augmented workflows
              </span>
              .
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="md:col-span-5"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center md:justify-end">
              <Magnetic strength={0.4}>
                <a
                  href="#work"
                  data-cursor="hover"
                  className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-accent px-5 py-3 text-[13px] font-medium text-bg transition"
                >
                  <span className="relative z-10">See my work</span>
                  <ArrowDown className="relative z-10 h-3.5 w-3.5 transition group-hover:translate-y-0.5" />
                  <span className="absolute inset-0 shine" />
                </a>
              </Magnetic>
              <Magnetic strength={0.4}>
                <a
                  href="#contact"
                  data-cursor="hover"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-[13px] font-medium text-fg/90 transition hover:bg-white/5"
                >
                  Get in touch
                </a>
              </Magnetic>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-[11px] text-muted md:justify-end">
              <MapPin className="h-3 w-3 text-accent" />
              {profile.location}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/[0.04] sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="group relative bg-bg/80 px-5 py-4">
              <div className="font-display text-2xl font-semibold tracking-tight">
                {s.value}
              </div>
              <div className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-muted">{s.label}</div>
              <div className="pointer-events-none absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted"
      >
        <span className="inline-block animate-pulse">Scroll</span>
      </motion.div>
    </section>
  );
}
