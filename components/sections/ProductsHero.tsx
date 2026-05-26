"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import AnimatedGrid from "../fx/AnimatedGrid";
import Particles from "../fx/Particles";

export default function ProductsHero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-hero-radial" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[460px] bg-gradient-to-b from-navy-50/70 to-transparent" />
      <AnimatedGrid className="-z-10" />
      <Particles count={18} className="-z-10" />

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
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          <Sparkles size={14} /> Products by Trinodus
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-navy-900 md:text-6xl"
        >
          Mobile-native platforms,{" "}
          <span className="bg-gradient-to-r from-teal-500 via-accent to-navy-700 bg-clip-text text-transparent">
            built to ship real businesses.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-2xl text-lg text-navy-700"
        >
          A focused suite of products that we build, brand, and customise for
          clients across SaaS, retail, hospitality, healthcare, and finance —
          plus 100+ AI automations ready to plug into any business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href="#products-grid" className="btn-primary">
            Browse products <ArrowRight size={16} />
          </a>
          <a href="#ai-automations" className="btn-ghost">
            See 100+ AI automations
          </a>
        </motion.div>
      </div>
    </section>
  );
}
