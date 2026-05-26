"use client";

import { motion } from "framer-motion";
import { Wand2, Layers, Rocket, Puzzle, ArrowRight } from "lucide-react";
import FadeIn from "@/components/fx/FadeIn";
import Tilt from "@/components/fx/Tilt";
import Spotlight from "@/components/fx/Spotlight";

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

export default function CustomPlatformsDark() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <motion.div
        aria-hidden
        className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute right-[-100px] bottom-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container-px relative">
        <FadeIn delay={0} y={40}>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/40 bg-teal-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-teal-300">
              <Wand2 size={14} /> Custom Platforms
            </span>
            <h2
              className="mt-5 hero-heading font-black uppercase leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
            >
              Don&apos;t see your idea here? We build custom platforms for your business.
            </h2>
            <p className="mt-5 text-base font-light text-mist/70 md:text-lg">
              Our 9 products are starting points — not the limit. Whether you
              need a SaaS tool, a marketplace, an internal dashboard, or a fully
              AI-powered workflow, we&apos;ll design and build it end-to-end around
              your business.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4 md:mt-16">
          {points.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08} y={30}>
              <Tilt className="h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="relative h-full overflow-hidden rounded-2xl border border-mist/15 bg-white/[0.03] p-6 backdrop-blur transition hover:border-teal-400/40"
                >
                  <Spotlight color="rgba(23,184,196,0.18)" size={420} />
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/15 text-teal-300">
                    <p.icon size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-mist">{p.title}</h3>
                  <p className="mt-2 text-sm font-light text-mist/70">{p.desc}</p>
                </motion.div>
              </Tilt>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.1} y={20}>
          <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-3xl border border-mist/15 bg-white/[0.03] p-6 backdrop-blur md:flex-row md:items-center">
            <div>
              <h3 className="font-display text-xl font-semibold text-mist">
                Have an idea? Let&apos;s scope it together.
              </h3>
              <p className="mt-1 text-sm text-mist/70">
                Send us a quick brief — we&apos;ll come back with a clear plan,
                timeline, and price.
              </p>
            </div>
            <a href="/#contact" className="btn-primary whitespace-nowrap">
              Start a custom build <ArrowRight size={16} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
