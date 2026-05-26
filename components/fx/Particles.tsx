"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

/**
 * Floating dot particles. Pure CSS/SVG — zero deps beyond framer-motion.
 */
export default function Particles({
  count = 22,
  color = "#17b8c4",
  className = "",
}: {
  count?: number;
  color?: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        // deterministic pseudo-random so it doesn't reflow on rerender
        x: ((i * 73) % 100),
        y: ((i * 137) % 100),
        size: 2 + ((i * 17) % 5),
        dur: 6 + ((i * 11) % 8),
        delay: ((i * 3) % 9) * 0.4,
        opacity: 0.25 + ((i * 7) % 50) / 100,
      })),
    [count]
  );
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {dots.map((d) => (
        <motion.span
          key={d.id}
          className="absolute rounded-full"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.size,
            height: d.size,
            background: color,
            boxShadow: `0 0 ${d.size * 4}px ${color}`,
            opacity: d.opacity,
          }}
          animate={
            reduce
              ? {}
              : {
                  y: [0, -30, 0],
                  opacity: [d.opacity, d.opacity * 1.8, d.opacity],
                }
          }
          transition={{
            duration: d.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: d.delay,
          }}
        />
      ))}
    </div>
  );
}
