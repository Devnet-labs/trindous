import type { Metadata } from "next";
import ProductsHero from "@/components/sections/ProductsHero";
import ProductsGrid from "@/components/sections/ProductsGrid";
import CustomPlatforms from "@/components/sections/CustomPlatforms";
import AIAutomations from "@/components/sections/AIAutomations";
import BeamDivider from "@/components/fx/BeamDivider";

export const metadata: Metadata = {
  title: "Products — Trinodus Technologies",
  description:
    "Mobile-native platforms by Trinodus Technologies — TaskFlow Pro, AutoResell Hub, DermaCare CMS, CommerceCore, BrandPortfolio, SmartHotel Suite, StartupSphere, StayBook CMS, FinTrack AI — plus 100+ AI business automations.",
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <BeamDivider />
      <ProductsGrid />
      <CustomPlatforms />
      <BeamDivider />
      <AIAutomations />
    </>
  );
}
