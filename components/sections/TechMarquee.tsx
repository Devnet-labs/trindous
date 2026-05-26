"use client";

import { motion } from "framer-motion";
import Marquee from "../fx/Marquee";

const tech = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion",
  "Node.js", "PostgreSQL", "Supabase", "Stripe", "Vercel",
  "Prisma", "Sanity CMS", "OpenAI", "Anthropic Claude", "WhatsApp Cloud API",
  "HubSpot", "Shopify", "Figma", "GitHub Actions", "Cloudflare",
];

const services = [
  "Web Development", "Landing Pages", "Website Redevelopment",
  "Mobile-Native Platforms", "AI Automations", "Custom SaaS",
  "Dashboards", "E-commerce", "CMS Integration",
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-mist/20 bg-white/[0.04] px-5 py-2 text-sm font-medium uppercase tracking-wider text-mist backdrop-blur">
      {children}
    </span>
  );
}

function DarkPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-teal-400/40 bg-teal-500/[0.08] px-5 py-2 text-sm font-medium uppercase tracking-wider text-teal-300 backdrop-blur">
      {children}
    </span>
  );
}

export default function TechMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-mist/10 bg-ink py-14">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container-px mb-6 text-center text-xs font-medium uppercase tracking-[0.3em] text-mist/50"
      >
        Built with a modern stack · Trusted tools
      </motion.p>
      <Marquee
        duration={32}
        items={tech.map((t, i) => (
          <Pill key={`${t}-${i}`}>{t}</Pill>
        ))}
      />
      <div className="mt-5" />
      <Marquee
        duration={36}
        reverse
        items={services.map((s, i) => (
          <DarkPill key={`${s}-${i}`}>{s}</DarkPill>
        ))}
      />
    </section>
  );
}
