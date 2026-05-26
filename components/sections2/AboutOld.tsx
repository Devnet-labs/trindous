"use client";

import { motion } from "framer-motion";
import { Globe2, HeartHandshake, Rocket, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/fx/FadeIn";
import AnimatedText from "@/components/fx/AnimatedText";
import Tilt from "@/components/fx/Tilt";
import Spotlight from "@/components/fx/Spotlight";

const cards = [
  {
    icon: Rocket,
    title: "Move fast",
    desc: "From kickoff to launch in weeks, not months.",
  },
  {
    icon: HeartHandshake,
    title: "Stay close",
    desc: "You talk to the person building your site — every time.",
  },
  {
    icon: Globe2,
    title: "Built to grow",
    desc:
      "Today: websites and landing pages. Tomorrow: web apps, dashboards, and AI-powered tools — when you're ready.",
  },
];

export default function AboutOld() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink py-24 md:py-32">
      {/* ambient glow */}
      <motion.div
        aria-hidden
        className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 18, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute right-[-120px] top-32 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
        animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container-px relative">
        <div className="grid items-start gap-12 md:grid-cols-2">
          {/* Left — heading + animated text + CTA */}
          <div>
            <FadeIn delay={0} y={30}>
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/40 bg-teal-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-teal-300">
                About Trinodus
              </span>
            </FadeIn>

            <FadeIn delay={0.1} y={30}>
              <h2
                className="mt-5 hero-heading font-black uppercase leading-[0.95] tracking-tight"
                style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
              >
                A small studio with one focus
              </h2>
            </FadeIn>

            <div className="mt-6 space-y-5">
              <AnimatedText
                text="Trinodus Technologies is an independent web studio based in Australia. We partner directly with small and growing businesses to craft websites that look modern, load fast, and actually bring in enquiries."
                className="text-base font-light leading-relaxed text-mist md:text-lg"
              />
              <AnimatedText
                text="No bloated agencies, no endless handovers — just clean code, clear communication, and work we're proud to put our name on."
                className="text-base font-light leading-relaxed text-mist/80 md:text-lg"
              />
            </div>

            <FadeIn delay={0.2} y={20}>
              <Link href="/products" className="btn-primary mt-8 inline-flex">
                Discover Our Work
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeIn>
          </div>

          {/* Right — three feature cards (the old content) */}
          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map((c, i) => (
              <FadeIn key={c.title} delay={0.15 + i * 0.1} y={30} className={i === 2 ? "sm:col-span-2" : ""}>
                <Tilt className="h-full">
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="group relative h-full overflow-hidden rounded-3xl border border-mist/15 bg-white/[0.03] p-6 backdrop-blur transition hover:border-teal-500/40"
                  >
                    <Spotlight color="rgba(23,184,196,0.18)" size={420} />
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/15 text-teal-300">
                      <c.icon size={22} />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold text-mist">{c.title}</h3>
                    <p className="mt-2 text-sm font-light text-mist/70">{c.desc}</p>
                  </motion.div>
                </Tilt>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
