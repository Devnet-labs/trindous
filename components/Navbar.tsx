"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "./Logo";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
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
        scrolled
          ? "border-b border-navy-100/50 bg-white/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-px flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <motion.span whileHover={{ rotate: 12, scale: 1.08 }} transition={{ type: "spring", stiffness: 300 }}>
            <Logo className="h-9 w-9" />
          </motion.span>
          <span className="font-display text-lg font-bold tracking-tight text-black">
            Trinodus<span className="text-teal-500">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
          <a href="/#contact" className="btn-primary !py-2 !px-4">
            Get a quote
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden rounded-lg p-2 text-navy-900 hover:bg-navy-50"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-navy-100 bg-white">
          <div className="container-px flex flex-col gap-1 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-navy-800 hover:bg-navy-50"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 justify-center"
            >
              Get a quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
