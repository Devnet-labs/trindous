import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import TechMarquee from "@/components/sections/TechMarquee";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WorkOverview from "@/components/sections/WorkOverview";
import Redevelopment from "@/components/sections/Redevelopment";
import Process from "@/components/sections/Process";
import WhyUs from "@/components/sections/WhyUs";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <TechMarquee />
      <About />
      <Services />
      <WorkOverview />
      <Redevelopment />
      <Process />
      <WhyUs />
      <Contact />
    </>
  );
}
