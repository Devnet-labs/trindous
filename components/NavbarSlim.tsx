"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];

export default function NavbarSlim() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 z-50 transition ${
        scrolled ? "border-b border-mist/10 bg-ink/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-10 md:py-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Trinodus Technologies" width={120} height={120} className="h-14 w-14 object-contain sm:h-16 sm:w-16 md:h-20 md:w-20" priority />
          <span className="font-display text-xl font-bold uppercase tracking-wider text-mist md:text-2xl">
            Trinodus
          </span>
        </Link>
        <nav className="flex items-center gap-6 sm:gap-8 md:gap-12">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
