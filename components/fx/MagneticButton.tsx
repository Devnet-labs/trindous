"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { type ReactNode, useRef } from "react";

/**
 * Button that subtly pulls toward the cursor on hover.
 */
export default function MagneticButton({
  children,
  href,
  className = "",
  strength = 0.3,
  as = "a",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  strength?: number;
  as?: "a" | "button";
}) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 250, damping: 18, mass: 0.4 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Tag: any = as === "a" ? motion.a : motion.button;
  return (
    <Tag
      ref={ref as any}
      href={href}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.96 }}
      className={className}
    >
      {children}
    </Tag>
  );
}
