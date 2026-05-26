"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, LayoutGrid } from "lucide-react";
import { products } from "@/lib/products";
import ProductIcon from "@/components/ProductIcon";
import FadeIn from "@/components/fx/FadeIn";
import Tilt from "@/components/fx/Tilt";
import Spotlight from "@/components/fx/Spotlight";

const featuredSlugs = ["taskflow-pro", "commercecore", "smarthotel-suite"];
const featured = featuredSlugs.map((s) => products.find((p) => p.slug === s)!).filter(Boolean);

export default function WorkOverviewOld() {
  return (
    <section id="work" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="container-px">
        <FadeIn delay={0} y={40}>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/40 bg-teal-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-teal-300">
                Our Work & Products
              </span>
              <h2
                className="mt-5 hero-heading font-black uppercase leading-[0.95] tracking-tight"
                style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
              >
                Platforms we&apos;ve built.
              </h2>
              <p className="mt-5 max-w-xl text-base font-light text-mist/70 md:text-lg">
                A glimpse at a few of our products. Each one is production-ready
                and can be branded, customised, and deployed for your business
                in weeks instead of months.
              </p>
            </div>
            <Link href="/products" className="btn-ghost whitespace-nowrap self-start md:self-auto">
              <LayoutGrid size={16} /> View all products
            </Link>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:mt-16">
          {featured.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 0.1} y={40}>
              <Tilt className="h-full">
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-mist/15 bg-white/[0.03] backdrop-blur transition hover:border-teal-500/40"
                >
                  <Spotlight color="rgba(23,184,196,0.20)" size={420} />
                  <div className={`relative h-28 bg-gradient-to-br ${p.accent}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]" />
                    <motion.div
                      whileHover={{ rotate: -6, scale: 1.08 }}
                      className="absolute bottom-[-22px] left-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-mist/20 bg-ink text-teal-300 shadow-soft"
                    >
                      <ProductIcon iconKey={p.iconKey} size={22} />
                    </motion.div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 pt-8">
                    <h3 className="font-display text-lg font-semibold text-mist">{p.name}</h3>
                    <p className="mt-1 text-sm font-medium text-teal-400">{p.tagline}</p>

                    <ul className="mt-4 grid gap-1.5 text-sm text-mist/80">
                      {p.features.slice(0, 3).map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <Check size={14} className="mt-1 flex-none text-teal-400" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/products"
                      className="group/cta mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-teal-400 transition hover:text-teal-300"
                    >
                      Explore on Products
                      <ArrowRight size={14} className="transition-transform group-hover/cta:translate-x-1" />
                    </Link>
                  </div>
                </motion.article>
              </Tilt>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.1} y={20}>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-3xl border border-mist/15 bg-white/[0.03] p-6 text-center backdrop-blur md:flex-row md:text-left">
            <div>
              <h3 className="font-display text-lg font-semibold text-mist">
                See all 9 products and 100+ AI automations
              </h3>
              <p className="mt-1 text-sm text-mist/70">
                Browse the full catalogue or tell us what you need — we&apos;ll build a custom platform around it.
              </p>
            </div>
            <Link href="/products" className="btn-primary whitespace-nowrap">
              Go to Products <ArrowRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
