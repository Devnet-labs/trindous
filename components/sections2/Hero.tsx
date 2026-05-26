"use client";

import Image from "next/image";
import FadeIn from "@/components/fx/FadeIn";
import Magnet from "@/components/fx/Magnet";
import ContactButton from "@/components/ui/ContactButton";

const links = [
  { href: "#about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Hero() {
  return (
    <section className="flex h-screen flex-col" style={{ overflowX: "clip" }}>
      {/* Navbar */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="relative z-30 flex items-center justify-between px-6 pt-5 md:px-10 md:pt-7"
      >
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Trinodus Technologies"
            width={120}
            height={120}
            className="h-14 w-14 object-contain sm:h-16 sm:w-16 md:h-20 md:w-20"
            priority
          />
          <span className="hidden font-display text-2xl font-bold uppercase tracking-wider text-mist md:inline">
            Trinodus
          </span>
        </a>
        <div className="flex items-center justify-end gap-6 sm:gap-8 md:gap-12">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link relative z-30">
              {l.label}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* Massive heading */}
      <div className="overflow-hidden mt-6 sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading w-full whitespace-nowrap text-center font-black uppercase leading-none tracking-tight text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            trinodus
          </h1>
        </FadeIn>
      </div>

      {/* Bottom row */}
      <div className="mt-auto flex items-end justify-between px-6 pb-7 md:px-10 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-mist sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            an australian web studio crafting striking and unforgettable digital experiences
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton href="#contact">Get a Quote</ContactButton>
        </FadeIn>
      </div>

      {/* Centered magnetic portrait — use the brand logo as the futuristic centerpiece */}
      <FadeIn
        delay={0.6}
        y={30}
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:bottom-0 sm:translate-y-0"
      >
        <Magnet padding={150} strength={3} className="pointer-events-auto">
          <div className="relative w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]">
            {/* glow */}
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-teal-500/30 via-accent/30 to-transparent blur-3xl" />
            <Image
              src="/logo.svg"
              alt="Trinodus Logo"
              width={520}
              height={520}
              className="h-auto w-full select-none object-contain drop-shadow-[0_10px_60px_rgba(23,184,196,0.45)]"
              priority
            />
          </div>
        </Magnet>
      </FadeIn>
    </section>
  );
}
