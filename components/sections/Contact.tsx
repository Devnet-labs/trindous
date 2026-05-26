"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Failed");
      setStatus("sent");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setError(err.message || "Something went wrong");
    }
  }

  return (
    <section id="contact" className="bg-navy-50/60 py-20 md:py-28">
      <div className="container-px grid items-start gap-12 md:grid-cols-2">
        <div>
          <span className="eyebrow">Let&apos;s talk</span>
          <h2 className="section-title mt-4">
            Tell us about your project.
          </h2>
          <p className="mt-4 text-navy-700">
            Whether you need a brand-new website, a punchy landing page, or you
            just want your old site brought back to life — drop us a line.
            We&apos;ll get back within 1 business day.
          </p>

          <div className="mt-8 space-y-4 text-navy-800">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-navy-500">Email</p>
                <a href="mailto:hello@trinodus.com.au" className="font-semibold hover:text-teal-600">
                  hello@trinodus.com.au
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-navy-500">Based in</p>
                <p className="font-semibold">Australia · serving clients nationwide</p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft md:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Your name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Business name" name="business" />
            <Field label="Existing website (optional)" name="website" placeholder="https://" />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-navy-800">What do you need?</label>
            <select
              name="service"
              className="mt-1 w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 outline-none focus:border-teal-500"
              defaultValue=""
              required
            >
              <option value="" disabled>Select a service</option>
              <option>New website</option>
              <option>Landing page</option>
              <option>Website redevelopment / redesign</option>
              <option>Free website audit</option>
              <option>Not sure yet — let&apos;s chat</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-navy-800">Tell us a bit more</label>
            <textarea
              name="message"
              rows={5}
              required
              className="mt-1 w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 outline-none focus:border-teal-500"
              placeholder="What's the project about, and when would you like to launch?"
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
            <p className="mt-4 flex items-center gap-2 text-sm font-medium text-teal-700">
              <CheckCircle2 size={16} /> Thanks — we&apos;ll be in touch shortly.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm font-medium text-red-600">
              {error || "Something went wrong. Please email us directly."}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
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
      <label className="text-sm font-medium text-navy-800">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 outline-none focus:border-teal-500"
      />
    </div>
  );
}
