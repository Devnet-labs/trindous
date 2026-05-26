import Hero from "@/components/sections2/Hero";
import Marquee from "@/components/sections2/Marquee";
import AboutOld from "@/components/sections2/AboutOld";
import ServicesOld from "@/components/sections2/ServicesOld";
import WorkOverviewOld from "@/components/sections2/WorkOverviewOld";
import RedevelopmentOld from "@/components/sections2/RedevelopmentOld";
import ProcessOld from "@/components/sections2/ProcessOld";
import WhyUsOld from "@/components/sections2/WhyUsOld";
import Projects from "@/components/sections2/Projects";
import ContactDark from "@/components/sections2/Contact";
import Stats from "@/components/sections/Stats";
import TechMarquee from "@/components/sections/TechMarquee";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Marquee />

      {/* Dark-themed content sections (old content, redesigned for theme) */}
      <AboutOld />
      <ServicesOld />
      <WorkOverviewOld />
      <RedevelopmentOld />
      <ProcessOld />
      <WhyUsOld />

      {/* Tech stack marquee */}
      <TechMarquee />

      {/* Projects sticky stack + dark contact */}
      <Projects />
      <ContactDark />
    </>
  );
}
