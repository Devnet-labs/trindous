"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

type Tag = "div" | "section" | "article" | "li" | "header" | "nav" | "p" | "span" | "h1" | "h2" | "h3";

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: Tag;
  className?: string;
  style?: React.CSSProperties;
};

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = "div",
  className,
  style,
}: Props) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, x: reduce ? 0 : x, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ duration, ease: [0.25, 0.1, 0.25, 1], delay }}
      className={className}
      style={style}
    >
      {children}
    </MotionTag>
  );
}
