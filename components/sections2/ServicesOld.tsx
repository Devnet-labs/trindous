"use client";

import { motion } from "framer-motion";
import { Code2, LayoutTemplate, RefreshCw, ArrowRight } from "lucide-react";
import FadeIn from "@/components/fx/FadeIn";
import Tilt from "@/components/fx/Tilt";
import Spotlight from "@/components/fx/Spotlight";

const services = [
  {
    icon: Code2,
    title: "Web Development for Businesses",
    desc: "Custom-built business websites — fast, responsive, and built to convert. From small business sites to multi-page brand experiences.",
    points: ["Next.js & modern stack", "SEO-ready out of the box", "Connected to your tools (forms, bookings, CRM)"],
  },
  {
    icon: LayoutTemplate,
    title: "Landing Page Design",
    desc: "High-impact landing pages designed around a single goal — turning visitors into leads, signups, or sales.",
    points: ["Conversion-focused copy & layout", "A/B-ready structure", "Analytics & tracking baked in"],
  },
  {
    icon: RefreshCw,
    title: "Website Redevelopment",
    desc: "Bring tired, slow, or outdated websites into 2026. Same brand — sharper design, faster speed, better results.",
    points: ["Modern design refresh", "Performance & mobile fixes", "Content & SEO preserved (and improved)"],
  },
];

export default function ServicesOld() {
  return (
    <section id="services" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="container-px">
        <FadeIn delay={0} y={40}>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/40 bg-teal-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-teal-300">
              What we do
            </span>
            <h2
              className="mt-5 hero-heading font-black uppercase leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2.25rem, 7vw, 5.5rem)" }}
            >
              Three things, done properly.
            </h2>
            <p className="mt-5 max-w-2xl text-base font-light text-mist/70 md:text-lg">
              We keep our menu short on purpose. These are the services we focus
              on right now — each one delivered end-to-end by the same person
              who takes your first call.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:mt-16">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1} y={40}>
              <Tilt className="h-full">
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-mist/15 bg-white/[0.03] p-6 backdrop-blur transition hover:border-teal-500/40"
                >
                  <Spotlight color="rgba(23,184,196,0.18)" size={420} />
                  <motion.div
                    whileHover={{ rotate: -10, scale: 1.08 }}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/15 text-teal-300"
                  >
                    <s.icon size={22} />
                  </motion.div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-mist">{s.title}</h3>
                  <p className="mt-2 text-sm font-light text-mist/70">{s.desc}</p>
                  <ul className="mt-5 space-y-2 text-sm text-mist/80">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-teal-400" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-teal-400 transition group-hover:text-teal-300"
                  >
                    Discuss this project
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </motion.article>
              </Tilt>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
