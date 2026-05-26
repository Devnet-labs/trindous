"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/fx/FadeIn";
import LiveProjectButton from "@/components/ui/LiveProjectButton";

type Project = {
  n: string;
  name: string;
  category: string;
  blurb: string;
  href: string;
  col1: [string, string];
  col2: string;
};

// Three featured Trinodus products — each with themed imagery that matches
// the product's domain. Replace these with real client screenshots when you have them.
const projects: Project[] = [
  {
    n: "01",
    name: "TaskFlow Pro",
    category: "Smart Task & Project Management",
    blurb:
      "Mobile-native collaboration platform for SMEs — chat, tasks, projects, approvals, and AI-powered productivity tools in one place.",
    href: "/products#products-grid",
    col1: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&auto=format&fit=crop",
    ],
    col2:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop",
  },
  {
    n: "02",
    name: "CommerceCore",
    category: "Modern E-Commerce Platform",
    blurb:
      "Scalable mobile-native eCommerce — catalogue, orders, payments, AI recommendations, and a full marketing CMS.",
    href: "/products#products-grid",
    col1: [
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=900&auto=format&fit=crop",
    ],
    col2:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&auto=format&fit=crop",
  },
  {
    n: "03",
    name: "SmartHotel Suite",
    category: "Hotel & Restaurant Platform",
    blurb:
      "All-in-one hospitality system — POS, QR ordering, KOT, delivery, inventory, loyalty, and automated billing.",
    href: "/products#products-grid",
    col1: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551776235-dde6d482980b?w=900&auto=format&fit=crop",
    ],
    col2:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&auto=format&fit=crop",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-ink px-5 pt-16 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-20 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-24"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Projects
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p className="mx-auto mt-6 max-w-2xl text-center text-base font-light text-mist/70 md:text-lg">
          A glimpse of the platforms we&apos;ve built. Each one is production-ready
          and can be branded, customised, and deployed for your business.
        </p>
      </FadeIn>

      <div ref={containerRef} className="mt-12 md:mt-16">
        {projects.map((p, i) => (
          <Card key={p.n} project={p} index={i} total={projects.length} />
        ))}
      </div>

      <FadeIn delay={0.1} y={20} className="flex justify-center py-16 md:py-20">
        <Link
          href="/products"
          className="btn-primary group"
        >
          See All 9 Products
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </FadeIn>
    </section>
  );
}

function Card({
  project: p,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={ref} className="sticky h-[85vh]" style={{ top: `${96 + index * 8}px` }}>
      <motion.div
        style={{ scale }}
        className="relative mx-auto h-full max-w-7xl overflow-hidden rounded-[40px] border-2 border-mist/30 bg-ink p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        {/* glow ring */}
        <div className="pointer-events-none absolute -inset-px rounded-[40px] sm:rounded-[50px] md:rounded-[60px]">
          <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-br from-teal-500/20 via-transparent to-accent/20 opacity-60 blur-2xl" />
        </div>

        <div className="relative flex h-full flex-col">
          {/* Top row */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8">
            <motion.span
              className="hero-heading font-black"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)", lineHeight: 1 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              {p.n}
            </motion.span>
            <div className="min-w-[200px] flex-1">
              <p className="text-xs font-medium uppercase tracking-widest text-teal-400 md:text-sm">
                {p.category}
              </p>
              <h3
                className="mt-1 font-medium uppercase text-mist"
                style={{ fontSize: "clamp(1.25rem, 3vw, 2.2rem)" }}
              >
                {p.name}
              </h3>
              <p className="mt-2 max-w-2xl text-sm font-light text-mist/60 md:text-base">
                {p.blurb}
              </p>
            </div>
            <LiveProjectButton href={p.href} label="Explore Product" />
          </div>

          {/* Bottom row — image grid */}
          <div className="mt-6 flex flex-1 gap-3 md:mt-8 md:gap-5">
            <div className="flex w-[40%] flex-col gap-3 md:gap-5">
              <motion.img
                src={p.col1[0]}
                alt={`${p.name} preview 1`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="w-full flex-none rounded-[28px] object-cover sm:rounded-[40px] md:rounded-[50px]"
                style={{ height: "clamp(130px, 16vw, 230px)" }}
                loading="lazy"
              />
              <motion.img
                src={p.col1[1]}
                alt={`${p.name} preview 2`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="w-full flex-1 rounded-[28px] object-cover sm:rounded-[40px] md:rounded-[50px]"
                style={{ minHeight: "clamp(160px, 22vw, 340px)" }}
                loading="lazy"
              />
            </div>
            <motion.img
              src={p.col2}
              alt={`${p.name} preview 3`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="h-full w-full flex-1 rounded-[28px] object-cover sm:rounded-[40px] md:rounded-[50px]"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
