// Trinodus Technologies — Product catalogue.
// Each entry powers one card on the /products page.

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  industries: string[];
  iconKey:
    | "tasks"
    | "car"
    | "skin"
    | "shop"
    | "portfolio"
    | "hotel"
    | "startup"
    | "booking"
    | "finance";
  accent: string; // tailwind gradient classes
};

export const products: Product[] = [
  {
    slug: "taskflow-pro",
    name: "TaskFlow Pro",
    tagline: "Smart Task & Project Management Platform for SMEs",
    description:
      "A mobile-native collaboration platform designed for startups and small businesses to manage tasks, teams, projects, approvals, and internal communication in one place. Inspired by the simplicity of chat apps, TaskFlow Pro combines real-time messaging, task tracking, file sharing, project timelines, and AI-powered productivity tools to streamline operations and improve team efficiency.",
    features: [
      "Real-time messaging & team channels",
      "Tasks, projects & approval workflows",
      "File sharing & project timelines",
      "Role management & granular permissions",
      "Notifications & analytics dashboards",
      "AI-powered productivity assistant",
    ],
    industries: ["Startups", "SMEs", "Agencies"],
    iconKey: "tasks",
    accent: "from-teal-500/30 via-teal-500/10 to-accent/20",
  },
  {
    slug: "autoresell-hub",
    name: "AutoResell Hub",
    tagline: "AI-Powered Car Reseller Marketplace Platform",
    description:
      "A complete mobile-native platform for car dealers and resellers to list, manage, and sell vehicles online. Built with a modern CMS for easy content and inventory management — and AI assistance baked in from pricing to lead handling.",
    features: [
      "Inventory & listings management",
      "Lead tracking & buyer chat",
      "EMI calculator & vehicle comparison",
      "AI-assisted pricing suggestions",
      "Booking & test-drive management",
      "Digital documentation support",
    ],
    industries: ["Dealerships", "Resellers", "Auto Marketplaces"],
    iconKey: "car",
    accent: "from-accent/30 via-navy-700/20 to-navy-900/30",
  },
  {
    slug: "dermacare-cms",
    name: "DermaCare CMS",
    tagline: "Skin Clinic Management & Patient Engagement Platform",
    description:
      "A comprehensive mobile-native platform for dermatology and aesthetic clinics. Manage appointments, patients, and treatments — and grow the clinic with built-in marketing automation and AI skin analysis integrations.",
    features: [
      "Appointment scheduling & patient records",
      "Treatment history & before/after galleries",
      "Billing & integrated CRM",
      "AI skin analysis integrations",
      "Marketing automation tools",
      "CMS for services, blogs, doctors & promos",
    ],
    industries: ["Dermatology", "Aesthetic Clinics", "Wellness"],
    iconKey: "skin",
    accent: "from-teal-400/30 via-teal-500/10 to-accent/20",
  },
  {
    slug: "commercecore",
    name: "CommerceCore",
    tagline: "Modern E-Commerce Platform with Advanced CMS",
    description:
      "A scalable mobile-native eCommerce solution built for modern businesses. From catalogue and checkout to AI-driven recommendations and a full marketing CMS — everything you need to run a serious online store.",
    features: [
      "Product, inventory & order management",
      "Payment & delivery integrations",
      "Customer analytics & cohorts",
      "AI-driven product recommendations",
      "Banners, blogs, offers & SEO CMS",
      "Marketing campaign tools",
    ],
    industries: ["Retail", "D2C Brands", "Marketplaces"],
    iconKey: "shop",
    accent: "from-navy-700/30 via-teal-500/20 to-teal-500/10",
  },
  {
    slug: "brandportfolio",
    name: "BrandPortfolio",
    tagline: "Personal & Company Portfolio Website Platform",
    description:
      "A premium mobile-native portfolio and business website solution for professionals, startups, agencies, and enterprises. Build a sharp online presence with a CMS, themes, lead capture, and SEO out of the box.",
    features: [
      "Customisable themes & layouts",
      "Service showcase & project galleries",
      "Testimonials, blogs & lead forms",
      "SEO optimisation & analytics",
      "Social media integration",
      "Self-serve CMS",
    ],
    industries: ["Professionals", "Agencies", "Enterprises"],
    iconKey: "portfolio",
    accent: "from-teal-500/20 via-accent/20 to-navy-700/30",
  },
  {
    slug: "smarthotel-suite",
    name: "SmartHotel Suite",
    tagline: "Hotel & Restaurant Management with POS & Delivery",
    description:
      "An all-in-one mobile-native management system for hotels, restaurants, cafés, and cloud kitchens. Front-of-house, back-of-house, delivery, and analytics — running on a single platform with automated billing.",
    features: [
      "POS billing & QR table ordering",
      "Kitchen order management (KOT)",
      "Online delivery integrations",
      "Inventory & staff management",
      "Customer loyalty & rewards",
      "Analytics & automated billing flows",
    ],
    industries: ["Hotels", "Restaurants", "Cloud Kitchens"],
    iconKey: "hotel",
    accent: "from-accent/30 via-teal-500/20 to-navy-700/20",
  },
  {
    slug: "startupsphere",
    name: "StartupSphere",
    tagline: "Startup Networking & Events Platform",
    description:
      "A mobile-native startup ecosystem platform inspired by modern incubator and accelerator communities. Showcase startups, connect founders to investors, and run programs end-to-end.",
    features: [
      "Startup showcasing & founder profiles",
      "Investor connections & DMs",
      "Event & program management",
      "Mentorship & application systems",
      "Community discussions",
      "AI-based startup matching",
    ],
    industries: ["Incubators", "Accelerators", "Communities"],
    iconKey: "startup",
    accent: "from-navy-700/30 via-accent/20 to-teal-500/10",
  },
  {
    slug: "staybook-cms",
    name: "StayBook CMS",
    tagline: "Hotel Room Booking Platform with Smart CMS",
    description:
      "A complete mobile-native hotel booking platform with room management, booking engine, online payments, and a CMS purpose-built for hotels, resorts, homestays, and serviced apartments.",
    features: [
      "Room management & booking engine",
      "Online payments & invoicing",
      "Seasonal pricing & availability calendars",
      "Customer communication & reviews",
      "Analytics & occupancy reports",
      "CMS for rooms, offers & content",
    ],
    industries: ["Hotels", "Resorts", "Homestays", "Serviced Apartments"],
    iconKey: "booking",
    accent: "from-teal-500/20 via-teal-400/20 to-accent/20",
  },
  {
    slug: "fintrack-ai",
    name: "FinTrack AI",
    tagline: "Personal Finance & Expense Management System",
    description:
      "A mobile-native finance management platform helping users track income, expenses, savings, investments, and budgets in real time — powered by AI insights and secure cloud sync.",
    features: [
      "Income, expense & budget tracking",
      "AI-powered financial insights",
      "Bill reminders & subscription monitoring",
      "Goal tracking & savings plans",
      "Spending analytics & reports",
      "Secure cloud synchronisation",
    ],
    industries: ["Consumers", "Freelancers", "Households"],
    iconKey: "finance",
    accent: "from-accent/30 via-teal-500/20 to-navy-700/20",
  },
];
