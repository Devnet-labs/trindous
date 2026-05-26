"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Logo from "../Logo";
import AnimatedGrid from "../fx/AnimatedGrid";
import Particles from "../fx/Particles";
import TextReveal from "../fx/TextReveal";
import MagneticButton from "../fx/MagneticButton";

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const mockY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -120]);
  const mockRot = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 4]);
  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: reduce ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
  });

  return (
    <section id="home" ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-hero-radial" />
      <AnimatedGrid className="-z-10" />
      <Particles count={20} className="-z-10" />

      {/* Floating gradient orbs */}
      <motion.div
        aria-hidden
        className="absolute -left-24 top-32 -z-10 h-72 w-72 rounded-full bg-teal-500/25 blur-3xl"
        animate={reduce ? {} : { y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute right-[-100px] top-10 -z-10 h-80 w-80 rounded-full bg-accent/25 blur-3xl"
        animate={reduce ? {} : { y: [0, -25, 0], x: [0, -15, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container-px grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
        <div>
          <motion.span {...fade(0)} className="eyebrow">
            <Sparkles size={14} /> Australian web studio
          </motion.span>

          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-black md:text-6xl">
            <TextReveal
              text="Websites that work as hard as your business does."
              highlight="as your business does."
              delay={0.1}
            />
          </h1>

          <motion.p {...fade(0.5)} className="mt-6 max-w-xl text-lg text-black/80">
            Trinodus Technologies designs and builds fast, modern websites for
            growing Australian businesses — and gives tired, outdated sites a
            second life.
          </motion.p>

          <motion.div {...fade(0.6)} className="mt-8 flex flex-wrap items-center gap-3">
            <MagneticButton href="#contact" className="btn-primary">
              Start your project <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton href="#work" className="btn-ghost">
              See our work
            </MagneticButton>
          </motion.div>

          <motion.div
            {...fade(0.7)}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-black/70"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
              </span>
              Built on Next.js & modern stack
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" /> Mobile-first & SEO-ready
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-navy-700" /> Direct line to the developer
            </div>
          </motion.div>
        </div>

        <motion.div
          style={{ y: mockY, rotate: mockRot }}
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="relative"
        >
          <motion.div
            aria-hidden
            className="absolute -inset-8 -z-10 rounded-[2rem] bg-gradient-to-br from-teal-500/30 via-transparent to-accent/30 blur-2xl"
            animate={reduce ? {} : { opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            animate={reduce ? {} : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-3xl border border-navy-100 bg-white p-6 shadow-soft"
          >
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-3 text-xs text-black/50">yourbusiness.com.au</span>
            </div>
            <div className="mt-5 rounded-2xl bg-grid-fade p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Logo className="h-7 w-7" />
                  <span className="text-sm font-semibold">YourBrand</span>
                </div>
                <div className="hidden gap-4 text-xs text-navy-200 md:flex">
                  <span>Home</span><span>Services</span><span>Contact</span>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-display text-2xl font-bold leading-tight">
                  Beautiful site. Booked-out calendar.
                </h3>
                <p className="mt-2 text-sm text-navy-200">
                  Designed to convert visitors into customers from day one.
                </p>
                <div className="mt-5 flex gap-2">
                  <motion.span whileHover={{ scale: 1.05 }} className="rounded-full bg-teal-500 px-3 py-1 text-xs font-semibold">
                    Book now
                  </motion.span>
                  <span className="rounded-full border border-navy-700 px-3 py-1 text-xs text-navy-100">Learn more</span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="h-14 rounded-lg bg-white/5 ring-1 ring-white/10"
                    animate={reduce ? {} : { y: [0, -6, 0], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
