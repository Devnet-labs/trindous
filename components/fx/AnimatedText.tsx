"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Character-by-character scroll-reveal text.
 * Each character animates opacity 0.2 -> 1 as the paragraph scrolls through the viewport.
 */
export default function AnimatedText({
  text,
  className = "",
  style,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const chars = Array.from(text);

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((c, i) => {
        const start = i / chars.length;
        const end = (i + 1) / chars.length;
        return <Char key={i} progress={scrollYProgress} start={start} end={end} ch={c} />;
      })}
    </p>
  );
}

function Char({
  progress,
  start,
  end,
  ch,
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
  ch: string;
}) {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span style={{ opacity: 0 }}>{ch}</span>
      <motion.span style={{ position: "absolute", left: 0, top: 0, opacity }}>
        {ch}
      </motion.span>
    </span>
  );
}
