import Image from "next/image";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-mist">
      <div className="container-px grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Trinodus Technologies" width={56} height={56} className="h-12 w-12 object-contain" />
            <span className="font-display text-xl font-bold uppercase tracking-wider">Trinodus</span>
          </div>
          <p className="mt-5 max-w-md text-sm font-light leading-relaxed text-mist/70">
            An Australian web studio crafting striking and unforgettable digital
            experiences — web development, landing pages, redevelopment, AI
            automations, and custom platforms.
          </p>
          <div className="mt-6 space-y-2 text-sm text-mist/70">
            <p className="flex items-center gap-2"><MapPin size={14} className="text-teal-400" /> Australia · Remote-first</p>
            <p className="flex items-center gap-2">
              <Mail size={14} className="text-teal-400" />
              <a href="mailto:hello@trinodus.com.au" className="hover:text-teal-400">hello@trinodus.com.au</a>
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-medium uppercase tracking-widest text-mist">Studio</h4>
          <ul className="mt-4 space-y-2 text-sm text-mist/70">
            <li><a className="hover:text-teal-400" href="#about">About</a></li>
            <li><a className="hover:text-teal-400" href="#services">Services</a></li>
            <li><a className="hover:text-teal-400" href="#projects">Projects</a></li>
            <li><a className="hover:text-teal-400" href="/products">Products</a></li>
            <li><a className="hover:text-teal-400" href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-medium uppercase tracking-widest text-mist">Connect</h4>
          <div className="mt-4 flex gap-3">
            <a aria-label="LinkedIn" href="#" className="rounded-full border border-mist/30 p-2 transition hover:border-teal-400 hover:text-teal-400">
              <Linkedin size={16} />
            </a>
            <a aria-label="GitHub" href="#" className="rounded-full border border-mist/30 p-2 transition hover:border-teal-400 hover:text-teal-400">
              <Github size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-mist/10">
        <div className="container-px flex flex-col items-center justify-between gap-2 py-6 text-xs text-mist/50 md:flex-row">
          <p>© {new Date().getFullYear()} Trinodus Technologies. All rights reserved.</p>
          <p>ABN — TBA · Australia</p>
        </div>
      </div>
    </footer>
  );
}
