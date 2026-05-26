"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Reveal from "../Reveal";

type Project = {
  title: string;
  client: string;
  category: "Web Development" | "Landing Page" | "Redevelopment";
  year: string;
  blurb: string;
  url?: string;
  accent: string;       // tailwind gradient classes for the preview tile
  stack: string[];
  isPlaceholder?: boolean;
};

// TODO: replace these with real projects as they ship.
const projects: Project[] = [
  {
    title: "Coastal Cafe — Storefront",
    client: "Coastal Cafe, Sydney",
    category: "Web Development",
    year: "2026",
    blurb:
      "Bookings-first cafe site with online menu, Google Maps, and Instagram feed. Sub-second load on mobile.",
    accent: "from-teal-500/30 via-teal-500/10 to-accent/20",
    stack: ["Next.js", "Tailwind", "Sanity CMS"],
    isPlaceholder: true,
  },
  {
    title: "NorthBuild Co. — Lead Page",
    client: "NorthBuild Constructions, QLD",
    category: "Landing Page",
    year: "2026",
    blurb:
      "Single-page lead magnet for a renovation campaign. 3.2× more enquiries vs. their old Wix page.",
    accent: "from-accent/30 via-navy-700/20 to-navy-900/30",
    stack: ["Next.js", "Framer Motion", "HubSpot"],
    isPlaceholder: true,
  },
  {
    title: "Ridgeway Legal — Refresh",
    client: "Ridgeway Legal, Melbourne",
    category: "Redevelopment",
    year: "2026",
    blurb:
      "Replaced a 2014 WordPress site with a clean Next.js build. Lighthouse jumped from 38 → 98.",
    accent: "from-navy-700/30 via-teal-500/20 to-teal-500/10",
    stack: ["Next.js", "Tailwind", "Vercel"],
    isPlaceholder: true,
  },
  {
    title: "Aurora Pilates — Studio Site",
    client: "Aurora Pilates, Perth",
    category: "Web Development",
    year: "2026",
    blurb:
      "Class timetable, online bookings, and recurring memberships through Stripe. Fully self-managed.",
    accent: "from-teal-400/30 via-accent/20 to-navy-700/30",
    stack: ["Next.js", "Stripe", "Supabase"],
    isPlaceholder: true,
  },
];

const filters = ["All", "Web Development", "Landing Page", "Redevelopment"] as const;
type Filter = (typeof filters)[number];

export default function Work() {
  const [active, setActive] = useState<Filter>("All");

  const visible = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="work" className="py-20 md:py-28">
      <div className="container-px">
        <Reveal>
          <span className="eyebrow">Our work</span>
          <h2 className="section-title mt-4">
            Recent projects we&apos;ve shipped.
          </h2>
          <p className="mt-4 max-w-2xl text-navy-700">
            A handful of websites and landing pages we&apos;ve put out into the
            wild — from brand-new builds to full redevelopments of dated sites.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2">
            {filters.map((f) => {
              const isActive = f === active;
              return (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "text-white"
                      : "text-navy-700 hover:text-navy-900"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="work-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-navy-900 shadow-soft"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  {f}
                </button>
              );
            })}
          </div>
        </Reveal>

        <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.article
                layout
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-soft transition hover:border-teal-500/40 hover:shadow-glow"
              >
                <div className={`relative h-56 bg-gradient-to-br ${p.accent}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.5),transparent_55%)]" />
                  {/* fake browser chrome */}
                  <div className="absolute left-6 right-6 top-6 rounded-xl bg-white/90 p-3 shadow-soft backdrop-blur">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-red-300" />
                      <span className="h-2 w-2 rounded-full bg-amber-300" />
                      <span className="h-2 w-2 rounded-full bg-emerald-300" />
                      <span className="ml-3 truncate text-[10px] text-navy-500">
                        {p.client.toLowerCase().replace(/[^a-z]/g, "")}.com.au
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 w-1/2 rounded-full bg-navy-200/80" />
                    <div className="mt-1.5 h-1.5 w-3/4 rounded-full bg-navy-200/60" />
                    <div className="mt-3 flex gap-1.5">
                      <span className="h-5 w-14 rounded-md bg-teal-500/70" />
                      <span className="h-5 w-10 rounded-md bg-navy-300/60" />
                    </div>
                  </div>
                  {p.isPlaceholder && (
                    <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-navy-700 shadow">
                      Sample
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-navy-500">
                    <span className="font-semibold uppercase tracking-wider text-teal-600">
                      {p.category}
                    </span>
                    <span>{p.year}</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold text-navy-900">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-navy-500">{p.client}</p>
                  <p className="mt-3 text-sm text-navy-700">{p.blurb}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-navy-50 px-2.5 py-1 text-[11px] font-medium text-navy-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <a
                      href={p.url || "#contact"}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-teal-600 transition group-hover:gap-2 group-hover:text-teal-700"
                    >
                      {p.url ? "Visit live site" : "Discuss a similar project"}
                      {p.url ? <ExternalLink size={14} /> : <ArrowUpRight size={14} />}
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-3xl border border-navy-100 bg-gradient-to-br from-navy-50 to-white p-6 text-center shadow-soft md:flex-row md:text-left">
            <div>
              <h3 className="font-display text-lg font-semibold text-navy-900">
                Want your project featured here next?
              </h3>
              <p className="mt-1 text-sm text-navy-600">
                We take on a small number of clients each month so every build gets full attention.
              </p>
            </div>
            <a href="#contact" className="btn-primary whitespace-nowrap">
              Start your project
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
