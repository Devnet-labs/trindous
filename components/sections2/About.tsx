"use client";

import FadeIn from "@/components/fx/FadeIn";
import AnimatedText from "@/components/fx/AnimatedText";
import ContactButton from "@/components/ui/ContactButton";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 py-20 sm:px-8 md:px-10"
    >
      {/* Decorative blobs (no external images required — pure CSS) */}
      <Blob className="left-[1%] top-[4%] h-[120px] w-[120px] sm:left-[2%] sm:h-[160px] sm:w-[160px] md:left-[4%] md:h-[210px] md:w-[210px]" delay={0.1} xFrom={-80} hue="teal" />
      <Blob className="right-[1%] top-[4%] h-[120px] w-[120px] sm:right-[2%] sm:h-[160px] sm:w-[160px] md:right-[4%] md:h-[210px] md:w-[210px]" delay={0.15} xFrom={80} hue="accent" />
      <Blob className="bottom-[8%] left-[3%] h-[100px] w-[100px] sm:left-[6%] sm:h-[140px] sm:w-[140px] md:left-[10%] md:h-[180px] md:w-[180px]" delay={0.25} xFrom={-80} hue="navy" />
      <Blob className="bottom-[8%] right-[3%] h-[130px] w-[130px] sm:right-[6%] sm:h-[170px] sm:w-[170px] md:right-[10%] md:h-[220px] md:w-[220px]" delay={0.3} xFrom={80} hue="teal" />

      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About us
          </h2>
        </FadeIn>

        <AnimatedText
          text="Trinodus Technologies is an independent Australian web studio. We focus on web development, landing pages and full website redevelopment — partnering with businesses that aim to stand out and present their best image. Let's build something incredible together."
          className="max-w-[640px] text-center font-medium leading-relaxed text-mist"
          style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
        />
      </div>

      <div className="mt-16 sm:mt-20 md:mt-24">
        <FadeIn delay={0.1} y={30}>
          <ContactButton href="#contact">Start a Project</ContactButton>
        </FadeIn>
      </div>
    </section>
  );
}

function Blob({
  className,
  delay,
  xFrom,
  hue,
}: {
  className: string;
  delay: number;
  xFrom: number;
  hue: "teal" | "accent" | "navy";
}) {
  const grad =
    hue === "teal"
      ? "from-teal-500/40 via-teal-400/15 to-transparent"
      : hue === "accent"
        ? "from-accent/40 via-accent/15 to-transparent"
        : "from-navy-700/50 via-navy-700/15 to-transparent";
  return (
    <FadeIn delay={delay} x={xFrom} y={0} duration={0.9} className={`pointer-events-none absolute rounded-full bg-gradient-to-br ${grad} blur-2xl ${className}`}>
      <span />
    </FadeIn>
  );
}
