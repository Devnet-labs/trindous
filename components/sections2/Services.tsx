"use client";

import FadeIn from "@/components/fx/FadeIn";

const services = [
  {
    n: "01",
    name: "Web Development",
    desc: "Fast, modern websites for growing Australian businesses — hand-built on Next.js and optimised to convert.",
  },
  {
    n: "02",
    name: "Landing Pages",
    desc: "High-impact pages designed around a single goal: turning visitors into leads, signups, or sales.",
  },
  {
    n: "03",
    name: "Website Redevelopment",
    desc: "Bring tired or outdated websites into 2026 — sharper design, faster speed, better results.",
  },
  {
    n: "04",
    name: "AI Automations",
    desc: "100+ ready-to-deploy AI workflows covering sales, support, marketing, HR and operations.",
  },
  {
    n: "05",
    name: "Custom Platforms",
    desc: "Bespoke mobile-native platforms and dashboards — built around your business and your customers.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] bg-white px-5 py-20 text-ink sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="text-center font-black uppercase leading-none tracking-tight text-ink"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="mx-auto mt-16 max-w-5xl sm:mt-20 md:mt-28">
        {services.map((s, i) => (
          <FadeIn key={s.n} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 border-b py-8 sm:py-10 md:py-12"
              style={{ borderColor: "rgba(12,12,12,0.15)" }}
            >
              <span
                className="font-black text-ink"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)", lineHeight: 1 }}
              >
                {s.n}
              </span>
              <div className="flex-1 pt-2 md:pt-4">
                <h3
                  className="font-medium uppercase text-ink"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)", lineHeight: 1.1 }}
                >
                  {s.name}
                </h3>
                <p
                  className="mt-3 max-w-2xl font-light leading-relaxed text-ink"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)", opacity: 0.6 }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
