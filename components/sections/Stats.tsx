"use client";

import { motion } from "framer-motion";
import { Rocket, Zap, Smile, Code2 } from "lucide-react";
import CountUp from "../fx/CountUp";
import Reveal from "../Reveal";

const stats = [
  { icon: Code2, value: 9, suffix: "+", label: "Products built" },
  { icon: Zap, value: 100, suffix: "+", label: "AI automations ready" },
  { icon: Rocket, value: 2, suffix: " weeks", label: "Avg. time to launch" },
  { icon: Smile, value: 100, suffix: "%", label: "Direct developer contact" },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-14">
      <div className="container-px">
        <Reveal>
          <div className="relative rounded-3xl border border-navy-100 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 p-8 text-white shadow-glow md:p-10">
            {/* moving sheen */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl"
            >
              <motion.div
                className="absolute -top-10 left-0 h-[260%] w-[260px] -skew-x-12 bg-gradient-to-r from-transparent via-teal-300/15 to-transparent blur-2xl"
                animate={{ x: ["-30%", "120%"] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
              />
            </motion.div>

            <div className="relative grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="text-center md:text-left"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/15 text-teal-300">
                    <s.icon size={18} />
                  </div>
                  <div className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </div>
                  <p className="mt-1 text-sm text-navy-200">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
