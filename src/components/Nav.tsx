"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Magnetic from "./Magnetic";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 200], [0, 0.85]);
  const blur = useTransform(scrollY, [0, 200], [0, 16]);
  const border = useTransform(scrollY, [0, 200], ["rgba(255,255,255,0)", "rgba(255,255,255,0.08)"]);

  return (
    <motion.header
      style={{
        backdropFilter: blur.get() ? `blur(${blur.get()}px)` : undefined,
        borderBottom: "1px solid",
        borderColor: border,
      }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <motion.div
        style={{
          backgroundColor: useTransform(bgOpacity, (v) => `rgba(8,8,11,${v})`),
        }}
        className="absolute inset-0"
      />
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative grid h-7 w-7 place-items-center rounded-full bg-accent text-bg font-display text-[13px] font-bold">
            T
            <span className="absolute inset-0 rounded-full bg-accent blur-md opacity-40 -z-10" />
          </span>
          <span className="font-display text-[13px] font-medium tracking-tight">
            Talha<span className="text-muted"> / Engineer</span>
          </span>
        </a>

        <nav className="hidden items-center gap-0.5 rounded-full glass px-1.5 py-1.5 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-cursor="hover"
              className="rounded-full px-3.5 py-1.5 text-[13px] text-fg/75 transition hover:bg-white/5 hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <Magnetic strength={0.3}>
          <a
            href="#contact"
            data-cursor="hover"
            className="hidden rounded-full bg-fg px-4 py-1.5 text-[13px] font-medium text-bg transition hover:bg-accent md:inline-flex"
          >
            Let's talk
          </a>
        </Magnetic>
      </div>
    </motion.header>
  );
}
