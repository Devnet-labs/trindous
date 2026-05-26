"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "@/components/fx/FadeIn";

const steps = [
  { n: "01", title: "Discover", desc: "A quick call to understand your business, your customers, and what success looks like." },
  { n: "02", title: "Design", desc: "Clean, on-brand mockups for your key pages — reviewed together until they feel right." },
  { n: "03", title: "Develop", desc: "Hand-built on a modern stack: fast, responsive, SEO-ready, and easy to maintain." },
  { n: "04", title: "Launch", desc: "We handle deployment, domain & SSL, and a thorough pre-launch QA pass." },
  { n: "05", title: "Support", desc: "Ongoing tweaks, content updates, and improvements — no surprise invoices." },
];

export default function ProcessOld() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="container-px">
        <FadeIn delay={0} y={40}>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/40 bg-teal-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-teal-300">
              Our Process
            </span>
            <h2
              className="mt-5 hero-heading font-black uppercase leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
            >
              A simple path from idea to launch.
            </h2>
            <p className="mt-5 text-base font-light text-mist/70 md:text-lg">
              Five clear steps — no jargon, no surprises. You always know what&apos;s
              happening and what&apos;s coming next.
            </p>
          </div>
        </FadeIn>

        <div ref={ref} className="relative mt-14 md:mt-16">
          {/* Animated connector line */}
          <svg
            className="pointer-events-none absolute left-0 top-[44px] hidden h-2 w-full md:block"
            viewBox="0 0 1000 8"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="proc-grad-dark" x1="0" x2="1">
                <stop offset="0%" stopColor="#17b8c4" />
                <stop offset="50%" stopColor="#1a73a8" />
                <stop offset="100%" stopColor="#3dd0d9" />
              </linearGradient>
            </defs>
            <motion.line
              x1="0"
              y1="4"
              x2="1000"
              y2="4"
              stroke="url(#proc-grad-dark)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="1000"
              initial={{ strokeDashoffset: 1000 }}
              animate={inView ? { strokeDashoffset: 0 } : {}}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </svg>

          <div className="grid gap-5 md:grid-cols-5">
            {steps.map((s, i) => (
              <FadeIn key={s.n} delay={i * 0.12} y={30}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="relative h-full rounded-2xl border border-mist/15 bg-white/[0.03] p-5 backdrop-blur transition hover:border-teal-500/40"
                >
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="inline-flex items-center justify-center rounded-xl bg-teal-500/15 px-3 py-1 font-display text-2xl font-bold text-teal-300"
                  >
                    {s.n}
                  </motion.div>
                  <h3 className="mt-3 font-display text-lg font-semibold text-mist">{s.title}</h3>
                  <p className="mt-2 text-sm font-light text-mist/70">{s.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
