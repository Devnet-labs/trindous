"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import FadeIn from "@/components/fx/FadeIn";

export default function ProductsHeroDark() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-ink">
      <motion.div
        aria-hidden
        className="absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl"
        animate={reduce ? {} : { y: [0, 20, 0], x: [0, 18, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute right-[-120px] top-0 -z-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
        animate={reduce ? {} : { y: [0, -25, 0], x: [0, -15, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container-px py-20 md:py-28">
        <FadeIn delay={0} y={20}>
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/40 bg-teal-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-teal-300">
            <Sparkles size={14} /> Products by Trinodus
          </span>
        </FadeIn>

        <FadeIn delay={0.1} y={30}>
          <h1
            className="mt-5 hero-heading max-w-5xl font-black uppercase leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          >
            Mobile-native platforms, built to ship real businesses.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2} y={20}>
          <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-mist/80 md:text-lg">
            A focused suite of products that we build, brand, and customise for
            clients across SaaS, retail, hospitality, healthcare, and finance —
            plus 100+ AI automations ready to plug into any business.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} y={20}>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products-grid" className="btn-primary">
              Browse products <ArrowRight size={16} />
            </a>
            <a href="#ai-automations" className="btn-ghost">
              See 100+ AI automations
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
