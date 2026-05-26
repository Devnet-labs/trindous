"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

/**
 * Splits text into words and reveals them with a stagger on mount or in-view.
 */
export default function TextReveal({
  text,
  className = "",
  inView = false,
  delay = 0,
  highlight,
  highlightClass = "bg-gradient-to-r from-teal-500 via-accent to-navy-700 bg-clip-text text-transparent",
}: {
  text: string;
  className?: string;
  inView?: boolean;
  delay?: number;
  highlight?: string; // substring to wrap with highlightClass
  highlightClass?: string;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const parent = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.06, delayChildren: delay },
    },
  };
  const child = {
    hidden: { opacity: 0, y: reduce ? 0 : 20, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const highlightWords = highlight ? highlight.split(" ") : [];

  return (
    <motion.span
      className={className}
      variants={parent}
      initial="hidden"
      {...(inView
        ? { whileInView: "show", viewport: { once: true, margin: "-80px" } }
        : { animate: "show" })}
    >
      {words.map((w, i) => {
        const isHi = highlightWords.includes(w.replace(/[.,!?]/g, ""));
        return (
          <motion.span
            key={`${w}-${i}`}
            variants={child}
            className={`inline-block whitespace-pre ${isHi ? highlightClass : ""}`}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        );
      })}
    </motion.span>
  );
}
