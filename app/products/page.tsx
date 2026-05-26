import type { Metadata } from "next";
import NavbarSlim from "@/components/NavbarSlim";
import ProductsHeroDark from "@/components/sections2/ProductsHeroDark";
import ProductsGridDark from "@/components/sections2/ProductsGridDark";
import CustomPlatformsDark from "@/components/sections2/CustomPlatformsDark";
import AIAutomationsDark from "@/components/sections2/AIAutomationsDark";

export const metadata: Metadata = {
  title: "Products — Trinodus Technologies",
  description:
    "Mobile-native platforms by Trinodus Technologies — TaskFlow Pro, AutoResell Hub, DermaCare CMS, CommerceCore, BrandPortfolio, SmartHotel Suite, StartupSphere, StayBook CMS, FinTrack AI — plus 100+ AI business automations.",
};

export default function ProductsPage() {
  return (
    <>
      <NavbarSlim />
      <ProductsHeroDark />
      <ProductsGridDark />
      <CustomPlatformsDark />
      <AIAutomationsDark />
    </>
  );
}
