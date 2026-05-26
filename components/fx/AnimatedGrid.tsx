"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Faint animated grid with a slowly-drifting radial mask.
 * Sits behind hero sections to create a "futuristic" backdrop.
 */
export default function AnimatedGrid({
  className = "",
}: {
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,31,54,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,31,54,0.18) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 30%, transparent 75%)",
        }}
      />
      {/* drifting glow */}
      <motion.div
        className="absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-[50%] bg-teal-500/15 blur-3xl"
        animate={reduce ? {} : { x: ["-55%", "-45%", "-55%"], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* sweeping light beam */}
      <motion.div
        className="absolute -top-10 left-0 h-[640px] w-[260px] -skew-x-12 bg-gradient-to-r from-transparent via-teal-300/15 to-transparent blur-2xl"
        initial={{ x: "-30%" }}
        animate={reduce ? {} : { x: ["-30%", "120%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
      />
    </div>
  );
}
