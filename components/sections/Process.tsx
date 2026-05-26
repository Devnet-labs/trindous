"use client";

import Reveal, { Stagger, StaggerItem } from "../Reveal";

const steps = [
  {
    n: "01",
    title: "Discover",
    desc: "A quick call to understand your business, your customers, and what success looks like.",
  },
  {
    n: "02",
    title: "Design",
    desc: "Clean, on-brand mockups for your key pages — reviewed together until they feel right.",
  },
  {
    n: "03",
    title: "Develop",
    desc: "Hand-built on a modern stack: fast, responsive, SEO-ready, and easy to maintain.",
  },
  {
    n: "04",
    title: "Launch",
    desc: "We handle deployment, domain & SSL, and a thorough pre-launch QA pass.",
  },
  {
    n: "05",
    title: "Support",
    desc: "Ongoing tweaks, content updates, and improvements — no surprise invoices.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-navy-50/60 py-20 md:py-28">
      <div className="container-px">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">Our process</span>
            <h2 className="section-title mt-4">A simple path from idea to launch.</h2>
            <p className="mt-4 text-navy-700">
              Five clear steps — no jargon, no surprises. You always know what&apos;s
              happening and what&apos;s coming next.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-5" step={0.1}>
          {steps.map((s, i) => (
            <StaggerItem key={s.n} className="relative rounded-2xl border border-navy-100 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-glow">
              <div className="font-display text-3xl font-bold text-teal-500">{s.n}</div>
              <h3 className="mt-2 font-display text-lg font-semibold text-navy-900">{s.title}</h3>
              <p className="mt-2 text-sm text-navy-600">{s.desc}</p>
              {i < steps.length - 1 && (
                <span className="absolute right-[-10px] top-1/2 hidden h-px w-5 -translate-y-1/2 bg-navy-200 md:block" />
              )}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
