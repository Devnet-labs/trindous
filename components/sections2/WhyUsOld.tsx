"use client";

import { motion } from "framer-motion";
import { Clock, DollarSign, MessageSquare, Wrench, ShieldCheck, MapPin } from "lucide-react";
import FadeIn from "@/components/fx/FadeIn";
import Tilt from "@/components/fx/Tilt";
import Spotlight from "@/components/fx/Spotlight";

const reasons = [
  { icon: MessageSquare, title: "You talk to the developer", desc: "No account managers, no telephone game. Direct line, fast replies." },
  { icon: DollarSign, title: "Fair, fixed pricing", desc: "Clear quotes upfront. No hidden fees, no surprise invoices." },
  { icon: Clock, title: "Quick turnaround", desc: "Most websites launch within 2–4 weeks of kickoff." },
  { icon: Wrench, title: "Modern stack, future-proof", desc: "Built on Next.js — fast, secure, and easy to extend later." },
  { icon: ShieldCheck, title: "Honest advice", desc: "If you don't need it, we'll say so. We'd rather be useful than upsell." },
  { icon: MapPin, title: "Local & remote-friendly", desc: "Based in Australia, working with businesses anywhere in the country." },
];

export default function WhyUsOld() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="container-px">
        <FadeIn delay={0} y={40}>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/40 bg-teal-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-teal-300">
              Why choose Trinodus
            </span>
            <h2
              className="mt-5 hero-heading font-black uppercase leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
            >
              Big-agency results, without the agency overhead.
            </h2>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-5 md:grid-cols-3 md:mt-16">
          {reasons.map((r, i) => (
            <FadeIn key={r.title} delay={i * 0.08} y={30}>
              <Tilt className="h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="relative h-full overflow-hidden rounded-3xl border border-mist/15 bg-white/[0.03] p-6 backdrop-blur transition hover:border-teal-500/40"
                >
                  <Spotlight color="rgba(23,184,196,0.18)" size={420} />
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/15 text-teal-300">
                    <r.icon size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-mist">{r.title}</h3>
                  <p className="mt-2 text-sm font-light text-mist/70">{r.desc}</p>
                </motion.div>
              </Tilt>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
