"use client";

import { CheckCircle2, AlertTriangle, Zap, Smartphone, Search, ShieldCheck } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "../Reveal";

const oldSiteProblems = [
  "Looks outdated — doesn't match your current brand",
  "Slow on mobile, scares off visitors",
  "Built on old platforms that nobody maintains anymore",
  "Hard to update — every change goes through a developer",
  "No analytics, no SEO, no leads",
];

const newSiteWins = [
  { icon: Zap, title: "Faster", desc: "Optimised for Core Web Vitals & mobile performance." },
  { icon: Smartphone, title: "Mobile-first", desc: "Pixel-perfect on every screen size." },
  { icon: Search, title: "SEO-ready", desc: "Proper meta, sitemaps, and structured data." },
  { icon: ShieldCheck, title: "Secure & modern", desc: "Built on Next.js with auto SSL & hardened defaults." },
];

export default function Redevelopment() {
  return (
    <section id="redevelopment" className="py-20 md:py-28">
      <div className="container-px">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Website Redevelopment</span>
            <h2 className="section-title mt-4">
              Already have a website?{" "}
              <span className="text-teal-600">Let&apos;s give it a second life.</span>
            </h2>
            <p className="mt-5 text-navy-700">
              If your current website was built more than a few years ago, it&apos;s
              probably costing you customers — quietly. We rebuild outdated
              sites from the ground up using a modern stack, while keeping
              what already works (your content, your SEO, your brand).
            </p>

            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50/60 p-5">
              <div className="flex items-center gap-2 text-amber-700">
                <AlertTriangle size={18} />
                <p className="font-semibold">Signs your website needs a refresh</p>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-navy-700">
                {oldSiteProblems.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-amber-500" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-navy-100 bg-gradient-to-br from-white to-navy-50 p-6 shadow-soft">
              <div className="flex items-center gap-2 text-teal-600">
                <CheckCircle2 size={18} />
                <p className="font-semibold">After redevelopment</p>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {newSiteWins.map((w) => (
                  <div key={w.title} className="rounded-2xl bg-white p-5 ring-1 ring-navy-100">
                    <w.icon className="text-teal-500" size={20} />
                    <h4 className="mt-3 font-display font-semibold text-navy-900">{w.title}</h4>
                    <p className="mt-1 text-sm text-navy-600">{w.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-navy-950 p-5 text-navy-100">
                <p className="text-sm">
                  <span className="font-semibold text-white">Free audit:</span>{" "}
                  send us your current website and we&apos;ll send back a
                  short, honest review — what&apos;s working, what isn&apos;t, and what
                  it would take to bring it up to date.
                </p>
                <a href="#contact" className="btn-primary mt-4">Request a free audit</a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
