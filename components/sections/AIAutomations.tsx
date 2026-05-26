"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { Bot, Search, Sparkles } from "lucide-react";
import automations from "@/lib/automations.json";
import Reveal from "../Reveal";

type Automation = { id: number; name: string; category: string; industry: string };
const data: Automation[] = automations as Automation[];

const categoryColors: Record<string, string> = {
  "WhatsApp Automation": "bg-emerald-100 text-emerald-800",
  "Lead Automation": "bg-teal-100 text-teal-800",
  "Customer Support": "bg-sky-100 text-sky-800",
  "E-commerce": "bg-violet-100 text-violet-800",
  "Marketing": "bg-rose-100 text-rose-800",
  "HR": "bg-amber-100 text-amber-800",
  "Document Processing": "bg-indigo-100 text-indigo-800",
  "Productivity": "bg-cyan-100 text-cyan-800",
  "Industry Specific": "bg-fuchsia-100 text-fuchsia-800",
};

export default function AIAutomations() {
  const allCategories = useMemo(
    () => Array.from(new Set(data.map((d) => d.category))).sort(),
    []
  );
  const [active, setActive] = useState<string>("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return data.filter((d) => {
      const okCat = active === "All" || d.category === active;
      const okQ =
        !term ||
        d.name.toLowerCase().includes(term) ||
        d.industry.toLowerCase().includes(term) ||
        d.category.toLowerCase().includes(term);
      return okCat && okQ;
    });
  }, [active, q]);

  const filters = ["All", ...allCategories];
  const counts = useMemo(() => {
    const map: Record<string, number> = { All: data.length };
    for (const d of data) map[d.category] = (map[d.category] || 0) + 1;
    return map;
  }, []);

  return (
    <section id="ai-automations" className="relative overflow-hidden bg-navy-50/60 py-20 md:py-28">
      <div className="container-px">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow">
                <Sparkles size={14} /> AI Automation Suite
              </span>
              <h2 className="section-title mt-4">
                100+ AI business automations,{" "}
                <span className="text-teal-600">ready to deploy.</span>
              </h2>
              <p className="mt-4 text-navy-700">
                An advanced collection of AI-powered automations designed to
                optimise operations, reduce manual work, and improve productivity.
                Covers customer support, marketing, HR, finance, sales,
                operations, lead gen, reporting, scheduling, document processing,
                CRM workflows, and communication — and integrates with your
                existing business systems.
              </p>
            </div>

            <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-soft md:min-w-[220px]">
              <div className="flex items-center gap-2 text-teal-600">
                <Bot size={18} />
                <p className="text-xs font-semibold uppercase tracking-wider">Live catalogue</p>
              </div>
              <p className="mt-2 font-display text-3xl font-bold text-navy-900">
                {data.length}
              </p>
              <p className="text-sm text-navy-600">Automations across {allCategories.length} categories</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full max-w-md">
              <Search
                size={16}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy-400"
              />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search automations, industries…"
                className="w-full rounded-full border border-navy-200 bg-white py-3 pl-10 pr-4 text-sm text-navy-900 outline-none focus:border-teal-500"
              />
            </div>
            <p className="text-sm text-navy-600">
              Showing <span className="font-semibold text-navy-900">{filtered.length}</span> of {data.length}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {filters.map((f) => {
              const isActive = f === active;
              return (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold transition ${
                    isActive ? "text-white" : "text-navy-700 hover:text-navy-900"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="auto-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-navy-900 shadow-soft"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  {f}
                  <span
                    className={`ml-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full px-1 text-[10px] font-bold ${
                      isActive ? "bg-white/20 text-white" : "bg-navy-100 text-navy-600"
                    }`}
                  >
                    {counts[f] || 0}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <motion.ul layout className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((a, i) => (
              <motion.li
                layout
                key={a.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: Math.min(i, 12) * 0.02 }}
                whileHover={{ y: -3 }}
                className="group flex items-start gap-3 rounded-2xl border border-navy-100 bg-white p-4 shadow-soft transition hover:border-teal-500/40 hover:shadow-glow"
              >
                <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-teal-500/10 font-display text-xs font-bold text-teal-700">
                  {String(a.id).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-navy-900 leading-snug">{a.name}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-1.5">
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                        categoryColors[a.category] || "bg-navy-100 text-navy-700"
                      }`}
                    >
                      {a.category}
                    </span>
                    <span className="text-[11px] text-navy-500">{a.industry}</span>
                  </div>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-navy-500">
            No automations match your search. Try a different keyword.
          </p>
        )}

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col items-center justify-between gap-4 rounded-3xl border border-navy-100 bg-white p-6 shadow-soft md:flex-row md:text-left">
            <div>
              <h3 className="font-display text-lg font-semibold text-navy-900">
                Want a custom AI automation for your business?
              </h3>
              <p className="mt-1 text-sm text-navy-600">
                Tell us the workflow you&apos;d like to automate — we&apos;ll scope it,
                build it, and plug it straight into your tools.
              </p>
            </div>
            <a href="/#contact" className="btn-primary whitespace-nowrap">
              Talk to us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
