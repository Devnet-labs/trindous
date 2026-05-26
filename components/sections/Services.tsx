"use client";

import { motion } from "framer-motion";
import { Code2, LayoutTemplate, RefreshCw, ArrowRight } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "../Reveal";

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

export default function Services() {
  return (
    <section id="services" className="relative bg-navy-50/60 py-20 md:py-28">
      <div className="container-px">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">What we do</span>
            <h2 className="section-title mt-4">Three things, done properly.</h2>
            <p className="mt-4 text-navy-700">
              We keep our menu short on purpose. These are the services we focus
              on right now — each one delivered end-to-end by the same person
              who takes your first call.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="card flex h-full flex-col"
              >
                <motion.div
                  whileHover={{ rotate: -8, scale: 1.06 }}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600"
                >
                  <s.icon size={22} />
                </motion.div>
                <h3 className="mt-5 font-display text-xl font-semibold text-navy-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-navy-600">{s.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-navy-700">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-teal-500" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="group mt-6 inline-flex items-center gap-1 text-sm font-semibold text-teal-600 hover:text-teal-700"
                >
                  Discuss this project{" "}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
