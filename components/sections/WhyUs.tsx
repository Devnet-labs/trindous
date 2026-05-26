"use client";

import { Clock, DollarSign, MessageSquare, Wrench, ShieldCheck, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Reveal, { Stagger, StaggerItem } from "../Reveal";

const reasons = [
  { icon: MessageSquare, title: "You talk to the developer", desc: "No account managers, no telephone game. Direct line, fast replies." },
  { icon: DollarSign, title: "Fair, fixed pricing", desc: "Clear quotes upfront. No hidden fees, no surprise invoices." },
  { icon: Clock, title: "Quick turnaround", desc: "Most websites launch within 2–4 weeks of kickoff." },
  { icon: Wrench, title: "Modern stack, future-proof", desc: "Built on Next.js — fast, secure, and easy to extend later." },
  { icon: ShieldCheck, title: "Honest advice", desc: "If you don't need it, we'll say so. We'd rather be useful than upsell." },
  { icon: MapPin, title: "Local & remote-friendly", desc: "Based in Australia, working with businesses anywhere in the country." },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-28">
      <div className="container-px">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">Why choose Trinodus</span>
            <h2 className="section-title mt-4">
              The benefits of working with a big agency,{" "}
              <span className="text-teal-600">without the agency overhead.</span>
            </h2>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {reasons.map((r) => (
            <StaggerItem key={r.title}>
              <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 22 }} className="card h-full">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600">
                  <r.icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">{r.title}</h3>
                <p className="mt-2 text-sm text-navy-600">{r.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
