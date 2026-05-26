"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, LayoutGrid } from "lucide-react";
import { products } from "@/lib/products";
import ProductIcon from "../ProductIcon";
import Reveal, { Stagger, StaggerItem } from "../Reveal";

// Show a curated subset on the homepage — the rest live on /products.
const featuredSlugs = ["taskflow-pro", "commercecore", "smarthotel-suite"];
const featured = featuredSlugs
  .map((s) => products.find((p) => p.slug === s)!)
  .filter(Boolean);

export default function WorkOverview() {
  return (
    <section id="work" className="py-20 md:py-28">
      <div className="container-px">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow">Our Work & Products</span>
              <h2 className="section-title mt-4">
                Platforms we&apos;ve built —{" "}
                <span className="text-teal-600">ready to power your business.</span>
              </h2>
              <p className="mt-4 text-navy-700">
                A glimpse at a few of our products. Each one is production-ready
                and can be branded, customised, and deployed for your business
                in weeks instead of months.
              </p>
            </div>
            <Link
              href="/products"
              className="btn-ghost whitespace-nowrap self-start md:self-auto"
            >
              <LayoutGrid size={16} /> View all products
            </Link>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-3" step={0.08}>
          {featured.map((p) => (
            <StaggerItem key={p.slug}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-soft transition hover:border-teal-500/40 hover:shadow-glow"
              >
                <div className={`relative h-28 bg-gradient-to-br ${p.accent}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_55%)]" />
                  <motion.div
                    whileHover={{ rotate: -6, scale: 1.06 }}
                    className="absolute bottom-[-20px] left-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-navy-100 bg-white text-teal-600 shadow-soft"
                  >
                    <ProductIcon iconKey={p.iconKey} size={22} />
                  </motion.div>
                </div>

                <div className="flex flex-1 flex-col p-6 pt-7">
                  <h3 className="font-display text-lg font-semibold text-navy-900">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-teal-600">{p.tagline}</p>

                  <ul className="mt-4 grid gap-1.5 text-sm text-navy-700">
                    {p.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check size={14} className="mt-1 flex-none text-teal-500" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/products"
                    className="group/cta mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-teal-600 hover:text-teal-700"
                  >
                    Explore on Products
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover/cta:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-3xl border border-navy-100 bg-gradient-to-br from-navy-50 to-white p-6 text-center shadow-soft md:flex-row md:text-left">
            <div>
              <h3 className="font-display text-lg font-semibold text-navy-900">
                See all 9 products and 100+ AI automations
              </h3>
              <p className="mt-1 text-sm text-navy-600">
                Browse the full catalogue or tell us what you need — we&apos;ll build a custom platform around it.
              </p>
            </div>
            <Link href="/products" className="btn-primary whitespace-nowrap">
              Go to Products <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
