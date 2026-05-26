"use client";

import { useState } from "react";
import FadeIn from "@/components/fx/FadeIn";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-ink px-5 py-24 sm:px-8 md:px-10 md:py-32">
      <div className="container-px grid items-start gap-12 md:grid-cols-2">
        <div>
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 9vw, 110px)" }}
            >
              Let&apos;s talk
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} y={20}>
            <p className="mt-8 max-w-md text-lg font-light leading-relaxed text-mist/80">
              Got a project, a half-baked idea, or an outdated site that needs a
              second life? Send a quick brief — we&apos;ll get back within 1
              business day.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} y={20} className="mt-10 space-y-4">
            <Row icon={<Mail size={18} />} label="hello@trinodus.com.au" href="mailto:hello@trinodus.com.au" />
            <Row icon={<MapPin size={18} />} label="Australia · serving clients nationwide" />
          </FadeIn>
        </div>

        <FadeIn delay={0.15} y={30}>
          <form
            onSubmit={handleSubmit}
            className="rounded-[28px] border-2 border-mist/30 bg-white/[0.03] p-6 backdrop-blur md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Your name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Business" name="business" />
              <Field label="Website (optional)" name="website" placeholder="https://" />
            </div>
            <div className="mt-4">
              <label className="text-xs font-medium uppercase tracking-widest text-mist/70">
                Tell us about your project
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="mt-2 w-full rounded-2xl border border-mist/20 bg-ink/60 px-4 py-3 text-sm text-mist outline-none transition focus:border-teal-500"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary mt-6 w-full justify-center disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : (<>Send enquiry <Send size={16} /></>)}
            </button>
            {status === "sent" && (
              <p className="mt-4 text-sm font-medium text-teal-400">
                Thanks — we&apos;ll be in touch shortly.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-sm font-medium text-red-400">
                Something went wrong. Please email us directly.
              </p>
            )}
          </form>
        </FadeIn>
      </div>
    </section>
  );
}

function Row({ icon, label, href }: { icon: React.ReactNode; label: string; href?: string }) {
  const Inner = (
    <span className="flex items-center gap-3 text-sm text-mist/80 transition hover:text-teal-400">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-mist/30 text-teal-400">
        {icon}
      </span>
      {label}
    </span>
  );
  return href ? <a href={href}>{Inner}</a> : Inner;
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-widest text-mist/70">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-mist/20 bg-ink/60 px-4 py-3 text-sm text-mist outline-none transition focus:border-teal-500"
      />
    </div>
  );
}
