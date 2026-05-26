"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { products } from "@/lib/products";
import ProductIcon from "../ProductIcon";
import Reveal, { Stagger, StaggerItem } from "../Reveal";
import Spotlight from "../fx/Spotlight";

export default function ProductsGrid() {
  return (
    <section id="products-grid" className="py-20 md:py-28">
      <div className="container-px">
        <Reveal>
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow">Our Products</span>
              <h2 className="section-title mt-4">
                Nine platforms. <span className="text-teal-600">Endless possibilities.</span>
              </h2>
              <p className="mt-4 text-navy-700">
                Each product is a production-ready foundation we can rebrand,
                extend, and deploy for your business in weeks instead of months.
              </p>
            </div>
            <p className="text-sm text-navy-500 md:text-right">
              {products.length} products · mobile-native · white-label ready
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3" step={0.06}>
          {products.map((p) => (
            <StaggerItem key={p.slug}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-soft transition hover:border-teal-500/40 hover:shadow-glow"
              >
                <Spotlight color="rgba(23,184,196,0.10)" size={380} />
                {/* gradient header */}
                <div className={`relative h-32 bg-gradient-to-br ${p.accent}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_55%)]" />
                  <motion.div
                    whileHover={{ rotate: -6, scale: 1.06 }}
                    className="absolute bottom-[-22px] left-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-navy-100 bg-white text-teal-600 shadow-soft"
                  >
                    <ProductIcon iconKey={p.iconKey} size={24} />
                  </motion.div>
                </div>

                <div className="flex flex-1 flex-col p-6 pt-8">
                  <h3 className="font-display text-xl font-semibold text-navy-900">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-teal-600">{p.tagline}</p>
                  <p className="mt-3 text-sm text-navy-700">{p.description}</p>

                  <ul className="mt-5 grid gap-2 text-sm text-navy-700">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check size={14} className="mt-1 flex-none text-teal-500" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.industries.map((i) => (
                      <span
                        key={i}
                        className="rounded-full bg-navy-50 px-2.5 py-1 text-[11px] font-medium text-navy-700"
                      >
                        {i}
                      </span>
                    ))}
                  </div>

                  <a
                    href="/#contact"
                    className="group/cta mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold text-teal-600 hover:text-teal-700"
                  >
                    Enquire about {p.name}
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover/cta:translate-x-1"
                    />
                  </a>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
