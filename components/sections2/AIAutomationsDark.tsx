"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { Bot, Search, Sparkles } from "lucide-react";
import automations from "@/lib/automations.json";
import FadeIn from "@/components/fx/FadeIn";

type Automation = { id: number; name: string; category: string; industry: string };
const data: Automation[] = automations as Automation[];

const categoryColors: Record<string, string> = {
  "WhatsApp Automation": "bg-emerald-500/15 text-emerald-300 border-emerald-400/30",
  "Lead Automation": "bg-teal-500/15 text-teal-300 border-teal-400/30",
  "Customer Support": "bg-sky-500/15 text-sky-300 border-sky-400/30",
  "E-commerce": "bg-violet-500/15 text-violet-300 border-violet-400/30",
  "Marketing": "bg-rose-500/15 text-rose-300 border-rose-400/30",
  "HR": "bg-amber-500/15 text-amber-300 border-amber-400/30",
  "Document Processing": "bg-indigo-500/15 text-indigo-300 border-indigo-400/30",
  "Productivity": "bg-cyan-500/15 text-cyan-300 border-cyan-400/30",
  "Industry Specific": "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-400/30",
};

export default function AIAutomationsDark() {
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
    <section id="ai-automations" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="container-px">
        <FadeIn delay={0} y={40}>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/40 bg-teal-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-teal-300">
                <Sparkles size={14} /> AI Automation Suite
              </span>
              <h2
                className="mt-5 hero-heading font-black uppercase leading-[0.95] tracking-tight"
                style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
              >
                100+ AI business automations, ready to deploy.
              </h2>
              <p className="mt-5 text-base font-light text-mist/70 md:text-lg">
                An advanced collection of AI-powered automations designed to
                optimise operations, reduce manual work, and improve productivity.
                Covers customer support, marketing, HR, finance, sales, ops,
                lead-gen, reporting, scheduling, document processing, CRM
                workflows, and communication — and integrates with your
                existing business systems.
              </p>
            </div>

            <div className="rounded-2xl border border-mist/15 bg-white/[0.03] p-5 backdrop-blur md:min-w-[220px]">
              <div className="flex items-center gap-2 text-teal-300">
                <Bot size={18} />
                <p className="text-xs font-medium uppercase tracking-widest">Live catalogue</p>
              </div>
              <p className="mt-2 font-display text-4xl font-bold text-mist">{data.length}</p>
              <p className="text-sm text-mist/60">Automations across {allCategories.length} categories</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.05} y={20}>
          <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full max-w-md">
              <Search
                size={16}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-mist/50"
              />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search automations, industries…"
                className="w-full rounded-full border border-mist/20 bg-white/[0.03] py-3 pl-10 pr-4 text-sm text-mist outline-none backdrop-blur transition focus:border-teal-500"
              />
            </div>
            <p className="text-sm text-mist/70">
              Showing <span className="font-semibold text-mist">{filtered.length}</span> of {data.length}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {filters.map((f) => {
              const isActive = f === active;
              return (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium uppercase tracking-wider transition ${
                    isActive ? "text-ink" : "text-mist/70 hover:text-mist"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="auto-pill-dark"
                      className="absolute inset-0 -z-10 rounded-full bg-teal-400 shadow-glow"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  {f}
                  <span
                    className={`ml-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full px-1 text-[10px] font-bold ${
                      isActive ? "bg-ink/20 text-ink" : "bg-mist/10 text-mist/70"
                    }`}
                  >
                    {counts[f] || 0}
                  </span>
                </button>
              );
            })}
          </div>
        </FadeIn>

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
                className="group flex items-start gap-3 rounded-2xl border border-mist/15 bg-white/[0.03] p-4 backdrop-blur transition hover:border-teal-400/40"
              >
                <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-teal-500/15 font-display text-xs font-bold text-teal-300">
                  {String(a.id).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium leading-snug text-mist">{a.name}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-1.5">
                    <span
                      className={`rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${
                        categoryColors[a.category] || "border-mist/15 bg-white/5 text-mist/70"
                      }`}
                    >
                      {a.category}
                    </span>
                    <span className="text-[11px] text-mist/55">{a.industry}</span>
                  </div>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-mist/60">
            No automations match your search. Try a different keyword.
          </p>
        )}

        <FadeIn delay={0.1} y={20}>
          <div className="mt-14 flex flex-col items-center justify-between gap-4 rounded-3xl border border-mist/15 bg-white/[0.03] p-6 backdrop-blur md:flex-row md:text-left">
            <div>
              <h3 className="font-display text-lg font-semibold text-mist">
                Want a custom AI automation for your business?
              </h3>
              <p className="mt-1 text-sm text-mist/70">
                Tell us the workflow you&apos;d like to automate — we&apos;ll scope it,
                build it, and plug it straight into your tools.
              </p>
            </div>
            <a href="/#contact" className="btn-primary whitespace-nowrap">
              Talk to us
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
