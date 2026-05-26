"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { products } from "@/lib/products";
import ProductIcon from "@/components/ProductIcon";
import FadeIn from "@/components/fx/FadeIn";
import Tilt from "@/components/fx/Tilt";
import Spotlight from "@/components/fx/Spotlight";

export default function ProductsGridDark() {
  return (
    <section id="products-grid" className="relative overflow-hidden bg-ink py-20 md:py-28">
      <div className="container-px">
        <FadeIn delay={0} y={40}>
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/40 bg-teal-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-teal-300">
                Our Products
              </span>
              <h2
                className="mt-5 hero-heading font-black uppercase leading-[0.95] tracking-tight"
                style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
              >
                Nine platforms. Endless possibilities.
              </h2>
              <p className="mt-5 max-w-xl text-base font-light text-mist/70 md:text-lg">
                Each product is a production-ready foundation we can rebrand,
                extend, and deploy for your business in weeks instead of months.
              </p>
            </div>
            <p className="text-sm font-light text-mist/60 md:text-right">
              {products.length} products · mobile-native · white-label ready
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {products.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 0.06} y={40}>
              <Tilt className="h-full">
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-mist/15 bg-white/[0.03] backdrop-blur transition hover:border-teal-500/40"
                >
                  <Spotlight color="rgba(23,184,196,0.18)" size={400} />
                  <div className={`relative h-32 bg-gradient-to-br ${p.accent}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3),transparent_55%)]" />
                    <motion.div
                      whileHover={{ rotate: -6, scale: 1.08 }}
                      className="absolute bottom-[-22px] left-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-mist/20 bg-ink text-teal-300 shadow-soft"
                    >
                      <ProductIcon iconKey={p.iconKey} size={24} />
                    </motion.div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 pt-8">
                    <h3 className="font-display text-xl font-semibold text-mist">{p.name}</h3>
                    <p className="mt-1 text-sm font-medium text-teal-400">{p.tagline}</p>
                    <p className="mt-3 text-sm font-light text-mist/75">{p.description}</p>

                    <ul className="mt-5 grid gap-2 text-sm text-mist/85">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <Check size={14} className="mt-1 flex-none text-teal-400" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {p.industries.map((i) => (
                        <span
                          key={i}
                          className="rounded-full border border-mist/15 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-mist/80"
                        >
                          {i}
                        </span>
                      ))}
                    </div>

                    <a
                      href="/#contact"
                      className="group/cta mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold text-teal-400 transition hover:text-teal-300"
                    >
                      Enquire about {p.name}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover/cta:translate-x-1"
                      />
                    </a>
                  </div>
                </motion.article>
              </Tilt>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
