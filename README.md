# Trinodus Technologies — Website

Modern marketing site for **Trinodus Technologies** — an Australian web studio
offering web development, landing page design, and website redevelopment.

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build & deploy

```bash
npm run build
npm run start
```

Deploy easily to **Vercel** (recommended), Netlify, or any Node host. Point
your domain (e.g. `trinodus.com.au`) at the deployment and you're live.

## Project structure

```
app/
  layout.tsx          # Root layout (Navbar + Footer)
  page.tsx            # Home — composes all sections
  globals.css         # Tailwind + custom utility classes
  api/contact/route.ts# Contact form endpoint (logs by default)
components/
  Navbar.tsx, Footer.tsx, Logo.tsx
  sections/
    Hero.tsx, About.tsx, Services.tsx,
    Redevelopment.tsx, Process.tsx, WhyUs.tsx, Contact.tsx
tailwind.config.ts    # Brand colors (navy + teal) pulled from the logo
```

## Things to swap in (placeholders)

Search the codebase for these and replace with your real details:

- **Contact email** — `hello@trinodus.com.au` (Footer, Contact)
- **Domain** — `trinodus.com.au` (layout metadata)
- **ABN** — currently `TBA` in the footer
- **Social links** — LinkedIn / GitHub anchors in `Footer.tsx`
- **Logo** — `components/Logo.tsx` is a stylised SVG inspired by your logo.
  Drop the official PNG into `/public` and swap the import if you prefer.

## Contact form

The `/api/contact` route currently just logs submissions to the server console
so nothing silently drops while you set things up. To deliver real email,
pick a provider and wire it in `app/api/contact/route.ts`:

- **Resend** (easiest) — `npm i resend`, add `RESEND_API_KEY` to `.env.local`.
- **SendGrid / SES / Postmark** — same pattern.

## Roadmap (future expansion)

- App development service page
- Dashboard / internal tools service page
- AI solutions service page
- Case studies / portfolio CMS
- Blog (MDX or Sanity)
```
