import Hero from "@/components/sections/Hero";
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
