import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Trinodus Technologies — Web Development & Redesign for Australian Businesses",
  description:
    "Trinodus Technologies builds fast, modern websites and revives outdated ones. Web development, landing pages, and website redevelopment for growing Australian businesses.",
  keywords: [
    "web development Australia",
    "landing page design",
    "website redesign",
    "Next.js developer",
    "small business website",
  ],
  metadataBase: new URL("https://trinodus.com.au"),
  openGraph: {
    title: "Trinodus Technologies",
    description:
      "Modern websites and website redevelopment for Australian businesses.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
