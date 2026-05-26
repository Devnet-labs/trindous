"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  AlertTriangle,
  Zap,
  Smartphone,
  Search,
  ShieldCheck,
} from "lucide-react";
import FadeIn from "@/components/fx/FadeIn";
import Tilt from "@/components/fx/Tilt";

const oldSiteProblems = [
  "Looks outdated — doesn't match your current brand",
  "Slow on mobile, scares off visitors",
  "Built on old platforms that nobody maintains anymore",
  "Hard to update — every change goes through a developer",
  "No analytics, no SEO, no leads",
];

const newSiteWins = [
  { icon: Zap, title: "Faster", desc: "Optimised for Core Web Vitals & mobile performance." },
  { icon: Smartphone, title: "Mobile-first", desc: "Pixel-perfect on every screen size." },
  { icon: Search, title: "SEO-ready", desc: "Proper meta, sitemaps, and structured data." },
  { icon: ShieldCheck, title: "Secure & modern", desc: "Built on Next.js with auto SSL & hardened defaults." },
];

export default function RedevelopmentOld() {
  return (
    <section id="redevelopment" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="container-px">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <FadeIn delay={0} y={40}>
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/40 bg-teal-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-teal-300">
              Website Redevelopment
            </span>
            <h2
              className="mt-5 hero-heading font-black uppercase leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
            >
              Already have a website? Let&apos;s give it a second life.
            </h2>
            <p className="mt-5 max-w-xl text-base font-light text-mist/70 md:text-lg">
              If your current website was built more than a few years ago, it&apos;s
              probably costing you customers — quietly. We rebuild outdated
              sites from the ground up using a modern stack, while keeping
              what already works (your content, your SEO, your brand).
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 rounded-2xl border border-amber-400/30 bg-amber-500/[0.05] p-5 backdrop-blur"
            >
              <div className="flex items-center gap-2 text-amber-300">
                <AlertTriangle size={18} />
                <p className="font-semibold">Signs your website needs a refresh</p>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-mist/85">
                {oldSiteProblems.map((p, i) => (
                  <motion.li
                    key={p}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.06, duration: 0.4 }}
                    className="flex items-start gap-2"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-amber-400" />
                    <span>{p}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.15} y={40}>
            <div className="rounded-3xl border border-mist/15 bg-white/[0.03] p-6 backdrop-blur">
              <div className="flex items-center gap-2 text-teal-300">
                <CheckCircle2 size={18} />
                <p className="font-semibold">After redevelopment</p>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {newSiteWins.map((w, i) => (
                  <FadeIn key={w.title} delay={0.2 + i * 0.08} y={20}>
                    <Tilt className="h-full">
                      <div className="h-full rounded-2xl border border-mist/10 bg-ink/60 p-5">
                        <w.icon className="text-teal-400" size={20} />
                        <h4 className="mt-3 font-display font-semibold text-mist">{w.title}</h4>
                        <p className="mt-1 text-sm text-mist/70">{w.desc}</p>
                      </div>
                    </Tilt>
                  </FadeIn>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-br from-teal-500/15 via-accent/15 to-transparent p-5 ring-1 ring-teal-500/30">
                <p className="text-sm text-mist">
                  <span className="font-semibold text-mist">Free audit:</span>{" "}
                  send us your current website and we&apos;ll send back a short,
                  honest review — what&apos;s working, what isn&apos;t, and what it
                  would take to bring it up to date.
                </p>
                <a href="#contact" className="btn-primary mt-4 inline-flex">
                  Request a free audit
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
