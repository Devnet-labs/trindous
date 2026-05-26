"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

/**
 * Infinite horizontal scroller. Pass an array of items; we render twice for seamless loop.
 */
export default function Marquee({
  items,
  duration = 28,
  reverse = false,
  className = "",
}: {
  items: ReactNode[];
  duration?: number;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
      }}
    >
      <motion.div
        className="flex w-max gap-10"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((it, i) => (
          <div key={i} className="flex flex-none items-center">
            {it}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
