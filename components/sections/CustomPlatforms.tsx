"use client";

import { motion } from "framer-motion";
import { Wand2, Layers, Rocket, Puzzle, ArrowRight } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "../Reveal";

const points = [
  {
    icon: Wand2,
    title: "Custom-built around your business",
    desc: "Don't see exactly what you need? We design and build custom platforms tailored to your workflows, customers, and brand.",
  },
  {
    icon: Layers,
    title: "Start from a product, or from scratch",
    desc: "Use one of our 9 platforms as a head-start, or commission a fully bespoke build — whichever ships fastest for you.",
  },
  {
    icon: Puzzle,
    title: "Integrations & automations",
    desc: "We plug your platform into the tools you already use — payments, CRMs, WhatsApp, AI services, accounting, and more.",
  },
  {
    icon: Rocket,
    title: "Built to scale with you",
    desc: "Mobile-native, modular, and ready to grow from MVP to enterprise without rebuilding the foundation.",
  },
];

export default function CustomPlatforms() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
      <motion.div
        aria-hidden
        className="absolute -left-32 top-10 -z-10 h-72 w-72 rounded-full bg-teal-500/25 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute right-[-100px] bottom-0 -z-10 h-80 w-80 rounded-full bg-accent/25 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container-px">
        <Reveal>
          <div className="max-w-3xl">
            <span className="eyebrow !border-teal-400/40 !bg-teal-500/15 !text-teal-300">
              <Wand2 size={14} /> Custom Platforms
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
              Don&apos;t see your idea here?{" "}
              <span className="bg-gradient-to-r from-teal-400 to-accent bg-clip-text text-transparent">
                We build custom platforms for your business.
              </span>
            </h2>
            <p className="mt-5 text-lg text-navy-200">
              Our 9 products are starting points — not the limit. Whether you
              need a SaaS tool, a marketplace, an internal dashboard, or a fully
              AI-powered workflow, we&apos;ll design and build it end-to-end around
              your business.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4" step={0.08}>
          {points.map((p) => (
            <StaggerItem key={p.title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-teal-400/40 hover:bg-white/[0.08]"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/15 text-teal-300">
                  <p.icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-navy-200">{p.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:flex-row md:items-center">
            <div>
              <h3 className="font-display text-xl font-semibold text-white">
                Have an idea? Let&apos;s scope it together.
              </h3>
              <p className="mt-1 text-sm text-navy-200">
                Send us a quick brief — we&apos;ll come back with a clear plan,
                timeline, and price.
              </p>
            </div>
            <a href="/#contact" className="btn-primary whitespace-nowrap">
              Start a custom build <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
