"use client";

import { Globe2, HeartHandshake, Rocket } from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "../Reveal";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container-px grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <span className="eyebrow">About Trinodus</span>
          <h2 className="section-title mt-4">
            A small studio with one focus —
            <span className="text-teal-600"> getting your business online, properly.</span>
          </h2>
          <p className="mt-5 text-navy-700">
            Trinodus Technologies is an independent web studio based in
            Australia. We partner directly with small and growing businesses to
            craft websites that look modern, load fast, and actually bring in
            enquiries.
          </p>
          <p className="mt-4 text-navy-700">
            No bloated agencies, no endless handovers — just clean code, clear
            communication, and work we&apos;re proud to put our name on.
          </p>
        </Reveal>

        <Stagger className="grid gap-4 sm:grid-cols-2">
          <StaggerItem className="card">
            <Rocket className="text-teal-500" />
            <h3 className="mt-3 font-display text-lg font-semibold text-navy-900">Move fast</h3>
            <p className="mt-1 text-sm text-navy-600">From kickoff to launch in weeks, not months.</p>
          </StaggerItem>
          <StaggerItem className="card">
            <HeartHandshake className="text-accent" />
            <h3 className="mt-3 font-display text-lg font-semibold text-navy-900">Stay close</h3>
            <p className="mt-1 text-sm text-navy-600">You talk to the person building your site — every time.</p>
          </StaggerItem>
          <StaggerItem className="card sm:col-span-2">
            <Globe2 className="text-navy-700" />
            <h3 className="mt-3 font-display text-lg font-semibold text-navy-900">Built to grow</h3>
            <p className="mt-1 text-sm text-navy-600">
              Today: websites and landing pages. Tomorrow: web apps,
              dashboards, and AI-powered tools — when you&apos;re ready.
            </p>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
