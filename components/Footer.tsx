import Logo from "./Logo";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 bg-navy-950 text-navy-100">
      <div className="container-px grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <Logo className="h-9 w-9" />
            <span className="font-display text-lg font-bold text-white">
              Trinodus Technologies
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm text-navy-200">
            Modern websites and website redevelopment for Australian businesses.
            Built lean, shipped fast, made to grow with you.
          </p>
          <div className="mt-5 flex items-center gap-3 text-sm text-navy-200">
            <MapPin size={16} className="text-teal-400" />
            <span>Australia · Remote-first</span>
          </div>
          <div className="mt-2 flex items-center gap-3 text-sm text-navy-200">
            <Mail size={16} className="text-teal-400" />
            <a href="mailto:hello@trinodus.com.au" className="hover:text-teal-400">
              hello@trinodus.com.au
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Services
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-navy-200">
            <li><a className="hover:text-teal-400" href="#services">Web Development</a></li>
            <li><a className="hover:text-teal-400" href="#services">Landing Pages</a></li>
            <li><a className="hover:text-teal-400" href="#redevelopment">Website Redevelopment</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Company
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-navy-200">
            <li><a className="hover:text-teal-400" href="#about">About</a></li>
            <li><a className="hover:text-teal-400" href="#process">Process</a></li>
            <li><a className="hover:text-teal-400" href="#contact">Contact</a></li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a aria-label="LinkedIn" href="#" className="rounded-full border border-navy-700 p-2 hover:border-teal-400 hover:text-teal-400">
              <Linkedin size={16} />
            </a>
            <a aria-label="GitHub" href="#" className="rounded-full border border-navy-700 p-2 hover:border-teal-400 hover:text-teal-400">
              <Github size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-5 text-xs text-navy-300 md:flex-row">
          <p>© {new Date().getFullYear()} Trinodus Technologies. All rights reserved.</p>
          <p>ABN — TBA · Australia</p>
        </div>
      </div>
    </footer>
  );
}
