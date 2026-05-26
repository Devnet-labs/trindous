import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Trinodus Technologies — Web Studio & Custom Platforms",
  description:
    "Trinodus Technologies is an Australian web studio crafting striking and unforgettable digital experiences. Web development, landing pages, website redevelopment, AI automations, and custom platforms.",
  metadataBase: new URL("https://trinodus.com.au"),
  openGraph: {
    title: "Trinodus Technologies",
    description: "An Australian web studio crafting striking and unforgettable digital experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ overflowX: "clip" }}>
        <ScrollProgress />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
