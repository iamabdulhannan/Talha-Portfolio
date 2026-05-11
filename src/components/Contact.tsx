"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import Magnetic from "./Magnetic";
import { profile } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const items = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: profile.whatsapp,
      href: `https://wa.me/${profile.whatsapp.replace(/\D/g, "")}`,
    },
    { icon: Linkedin, label: "LinkedIn", value: "talha-bin-yahya", href: profile.linkedin },
  ];

  return (
    <section id="contact" className="relative w-full overflow-hidden pb-10 pt-20 md:pb-14 md:pt-28">
      <div className="aurora opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-8 flex flex-col gap-3">
          <p className="text-[11px] uppercase tracking-[0.25em] text-accent">/ 04 — Contact</p>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.25rem,6.5vw,4.75rem)] font-semibold leading-[0.95] tracking-[-0.035em]"
        >
          Let's build{" "}
          <span className="text-gradient">something real.</span>
        </motion.h2>

        <div className="mt-10 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="max-w-md text-[14px] leading-relaxed text-muted">
              Open to senior full-stack roles, remote engagements and serious side-projects. Drop a
              note — I usually reply within 24 hours.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <Magnetic strength={0.4}>
                <a
                  href={`mailto:${profile.email}`}
                  data-cursor="hover"
                  className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-accent px-5 py-3 text-[13px] font-medium text-bg"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Email me</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  <span className="absolute inset-0 shine" />
                </a>
              </Magnetic>
              <Magnetic strength={0.4}>
                <button
                  onClick={copy}
                  data-cursor="hover"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-[13px] font-medium text-fg/90 transition hover:bg-white/5"
                >
                  <Copy className="h-3.5 w-3.5" />
                  {copied ? "Copied!" : "Copy email"}
                </button>
              </Magnetic>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="grid gap-2.5 sm:grid-cols-2">
              {items.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    data-cursor="hover"
                    className="group relative overflow-hidden rounded-2xl border border-white/8 glass p-4 transition hover:border-white/25"
                  >
                    <div className="flex items-start justify-between">
                      <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 text-accent">
                        <Icon className="h-3.5 w-3.5" />
                      </div>
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                    </div>
                    <div className="mt-5 text-[10px] uppercase tracking-[0.2em] text-muted">{c.label}</div>
                    <div className="mt-0.5 truncate font-mono text-[13px] text-fg">{c.value}</div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-white/8 pt-5 text-[11px] text-muted sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Talha Shahzad</div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span>{profile.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
