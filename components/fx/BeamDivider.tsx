"use client";

import { motion } from "framer-motion";

/**
 * Animated SVG beam used as a section divider.
 * A glowing dot races along a thin gradient line.
 */
export default function BeamDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-12 w-full overflow-hidden ${className}`} aria-hidden>
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-navy-300/60 to-transparent" />
      <motion.div
        className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-teal-500"
        style={{ boxShadow: "0 0 20px 4px rgba(23,184,196,0.6)" }}
        initial={{ left: "-2%" }}
        animate={{ left: "102%" }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.8 }}
      />
      <motion.div
        className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-accent"
        style={{ boxShadow: "0 0 20px 4px rgba(26,115,168,0.6)" }}
        initial={{ left: "102%" }}
        animate={{ left: "-2%" }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.2 }}
      />
    </div>
  );
}
