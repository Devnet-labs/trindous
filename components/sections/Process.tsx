"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Reveal, { Stagger, StaggerItem } from "../Reveal";

const steps = [
  { n: "01", title: "Discover", desc: "A quick call to understand your business, your customers, and what success looks like." },
  { n: "02", title: "Design", desc: "Clean, on-brand mockups for your key pages — reviewed together until they feel right." },
  { n: "03", title: "Develop", desc: "Hand-built on a modern stack: fast, responsive, SEO-ready, and easy to maintain." },
  { n: "04", title: "Launch", desc: "We handle deployment, domain & SSL, and a thorough pre-launch QA pass." },
  { n: "05", title: "Support", desc: "Ongoing tweaks, content updates, and improvements — no surprise invoices." },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="bg-white/60 py-20 backdrop-blur md:py-28">
      <div className="container-px">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">Our process</span>
            <h2 className="section-title mt-4">A simple path from idea to launch.</h2>
            <p className="mt-4 text-black/70">
              Five clear steps — no jargon, no surprises. You always know what&apos;s
              happening and what&apos;s coming next.
            </p>
          </div>
        </Reveal>

        <div ref={ref} className="relative mt-12">
          {/* Animated connector line */}
          <svg
            className="pointer-events-none absolute left-0 top-[34px] hidden h-2 w-full md:block"
            viewBox="0 0 1000 8"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="proc-grad" x1="0" x2="1">
                <stop offset="0%" stopColor="#17b8c4" />
                <stop offset="50%" stopColor="#1a73a8" />
                <stop offset="100%" stopColor="#0f1f36" />
              </linearGradient>
            </defs>
            <motion.line
              x1="0" y1="4" x2="1000" y2="4"
              stroke="url(#proc-grad)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="1000"
              initial={{ strokeDashoffset: 1000 }}
              animate={inView ? { strokeDashoffset: 0 } : {}}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
          </svg>

          <Stagger className="grid gap-5 md:grid-cols-5" step={0.12}>
            {steps.map((s) => (
              <StaggerItem
                key={s.n}
                className="relative rounded-2xl border border-navy-100 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-glow"
              >
                <motion.div
                  className="inline-flex items-center justify-center rounded-xl bg-teal-500/10 px-3 py-1 font-display text-2xl font-bold text-teal-600"
                  whileHover={{ scale: 1.08, rotate: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  {s.n}
                </motion.div>
                <h3 className="mt-3 font-display text-lg font-semibold text-black">{s.title}</h3>
                <p className="mt-2 text-sm text-black/70">{s.desc}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
