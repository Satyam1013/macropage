import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.macropage.in";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects[params.slug];
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.name,
    description: project.description,
    keywords: [project.name, project.category, project.tags, "MacroPage portfolio"],
    openGraph: {
      title: `${project.name} — MacroPage Work`,
      description: project.description,
      url: `${SITE_URL}/work/${params.slug}`,
    },
    alternates: { canonical: `${SITE_URL}/work/${params.slug}` },
  };
}

const projects: Record<
  string,
  {
    name: string;
    year: string;
    category: string;
    client: string;
    tags: string;
    color: string;
    description: string;
    challenge: string;
    solution: string;
    deliverables: string[];
    tech: string[];
    nextSlug: string;
    nextName: string;
    nextColor: string;
  }
> = {
  shopease: {
    name: "ShopEase",
    year: "2025",
    category: "E-Commerce",
    client: "ShopEase India",
    tags: "Web App · UI/UX",
    color: "#e8e4dc",
    description:
      "A full-stack e-commerce platform built with Next.js and Stripe integration. Fast, SEO-optimized, and mobile-first design that converts visitors into customers.",
    challenge:
      "The client needed a complete e-commerce overhaul — their old platform was slow, hard to navigate, and losing customers at checkout. Mobile experience was broken on most devices.",
    solution:
      "We rebuilt the entire platform from scratch using Next.js 14 with App Router, Stripe for payments, and a headless CMS for product management. Result: 3x faster load times and 40% better conversion.",
    deliverables: [
      "Web Design",
      "Frontend Dev",
      "Backend API",
      "Payment Integration",
    ],
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    nextSlug: "finbot-ai",
    nextName: "FinBot AI",
    nextColor: "#dce0e8",
  },
  "finbot-ai": {
    name: "FinBot AI",
    year: "2025",
    category: "Fintech",
    client: "FinBot Technologies",
    tags: "AI Integration · Automation",
    color: "#dce0e8",
    description:
      "AI-powered financial assistant with LLM integration. Automated customer support and real-time transaction analysis for a growing fintech startup.",
    challenge:
      "Customer support team was overwhelmed with repetitive queries. 80% of tickets were basic account and transaction questions that didn't need human agents.",
    solution:
      "We integrated GPT-4 with their existing backend to build an AI assistant that handles tier-1 support, transaction summaries, and anomaly detection — cutting support load by 60%.",
    deliverables: [
      "AI Integration",
      "Chatbot UI",
      "Dashboard",
      "API Development",
    ],
    tech: ["OpenAI GPT-4", "LangChain", "Python", "React", "FastAPI"],
    nextSlug: "carelink",
    nextName: "CareLink",
    nextColor: "#dce8e0",
  },
  carelink: {
    name: "CareLink",
    year: "2025",
    category: "Healthcare",
    client: "CareLink Health",
    tags: "Mobile App · Cloud",
    color: "#dce8e0",
    description:
      "Cross-platform healthcare app built with Flutter. Patient management, appointment booking, and real-time cloud sync across all devices.",
    challenge:
      "Doctors and patients had no unified system — appointments were managed on WhatsApp, records were scattered across spreadsheets, and follow-ups were missed constantly.",
    solution:
      "Built a Flutter app for iOS and Android with real-time sync on AWS. Doctors get a clean dashboard, patients get a simple booking interface, and everything stays in sync.",
    deliverables: [
      "Mobile App (iOS + Android)",
      "Cloud Infrastructure",
      "UI/UX Design",
      "AWS Deployment",
    ],
    tech: ["Flutter", "Dart", "AWS", "Firebase", "Figma"],
    nextSlug: "logidash",
    nextName: "LogiDash",
    nextColor: "#e8dce0",
  },
  logidash: {
    name: "LogiDash",
    year: "2025",
    category: "Logistics",
    client: "LogiDash Co.",
    tags: "Dashboard · Automation",
    color: "#e8dce0",
    description:
      "Real-time logistics dashboard with automated workflow management, route optimization, and live tracking for a fleet of 500+ vehicles.",
    challenge:
      "Operations team was juggling 4 different tools — no single view of fleet status, manual route assignment, and zero automation on repetitive dispatch tasks.",
    solution:
      "Built a unified dashboard with live GPS tracking, automated dispatch logic via n8n, and a reporting layer that saves the ops team 20+ hours per week.",
    deliverables: [
      "Dashboard UI",
      "Automation Pipelines",
      "Data Visualization",
      "API Integration",
    ],
    tech: ["React", "Node.js", "n8n", "PostgreSQL", "Mapbox"],
    nextSlug: "shopease",
    nextName: "ShopEase",
    nextColor: "#e8e4dc",
  },
  rideswift: {
    name: "RideSwift",
    year: "2025",
    category: "Transport",
    client: "RideSwift Inc.",
    tags: "Mobile App · Flutter",
    color: "#e8e8dc",
    description:
      "On-demand ride booking app built with Flutter. Real-time driver tracking, surge pricing, and seamless UX for riders and drivers alike.",
    challenge:
      "Existing app had 2.8 star rating due to poor UI and frequent crashes. Driver onboarding took 45 minutes and riders abandoned the app before completing first booking.",
    solution:
      "Complete redesign and rebuild in Flutter. Driver app and rider app unified in one codebase. Onboarding reduced to 8 minutes. Rating went from 2.8 to 4.6 in 3 months.",
    deliverables: ["Rider App", "Driver App", "Admin Panel", "UI/UX Design"],
    tech: ["Flutter", "Firebase", "Google Maps", "Stripe", "Node.js"],
    nextSlug: "datastack",
    nextName: "DataStack",
    nextColor: "#dce8e8",
  },
  datastack: {
    name: "DataStack",
    year: "2025",
    category: "SaaS",
    client: "DataStack Co.",
    tags: "Cloud · AI Integration",
    color: "#dce8e8",
    description:
      "AI-powered data pipeline SaaS platform. Connect any data source, transform with AI, and push to any destination — no code required.",
    challenge:
      "Data teams were spending 60% of time on ETL pipelines. Every new data source required custom engineering work that took weeks to build and maintain.",
    solution:
      "Built a visual pipeline builder with AI-assisted transformations. 50+ pre-built connectors, drag-and-drop interface, and GPT-powered data cleaning suggestions.",
    deliverables: [
      "SaaS Platform",
      "AI Integration",
      "Pipeline Builder",
      "Developer API",
    ],
    tech: ["Next.js", "Python", "OpenAI", "PostgreSQL", "AWS Lambda"],
    nextSlug: "shopease",
    nextName: "ShopEase",
    nextColor: "#e8e4dc",
  },
  edureach: {
    name: "EduReach",
    year: "2025",
    category: "EdTech",
    client: "EduReach India",
    tags: "Web App · UI/UX",
    color: "#e8dce8",
    description:
      "Online learning platform for Tier 2 and 3 cities. Vernacular content, offline mode, and gamified learning paths for students aged 10-18.",
    challenge:
      "Existing platforms were built for metro users with fast internet. 70% of target students had 2G connectivity and devices with limited storage.",
    solution:
      "Built with progressive web app (PWA) technology. Content downloads for offline use, ultra-compressed video, and a gamification system that increased daily active usage by 85%.",
    deliverables: [
      "Web App (PWA)",
      "Content CMS",
      "Gamification System",
      "Analytics Dashboard",
    ],
    tech: ["Next.js", "PWA", "Sanity CMS", "Vercel", "Tailwind CSS"],
    nextSlug: "quickbite",
    nextName: "QuickBite",
    nextColor: "#e8e0dc",
  },
  quickbite: {
    name: "QuickBite",
    year: "2025",
    category: "Food Tech",
    client: "QuickBite Foods",
    tags: "Mobile App · Automation",
    color: "#e8e0dc",
    description:
      "Cloud kitchen ordering platform with real-time order management, automated kitchen display, and smart delivery zone optimization.",
    challenge:
      "Cloud kitchen was losing 30% of orders due to manual order management. Kitchen staff were overwhelmed during peak hours and delivery estimates were wildly inaccurate.",
    solution:
      "Built an end-to-end platform — customer app, kitchen display system (KDS), and delivery optimization engine. Order accuracy went from 70% to 97% in the first month.",
    deliverables: [
      "Customer App",
      "Kitchen Display System",
      "Delivery Optimization",
      "Admin Dashboard",
    ],
    tech: ["React Native", "Node.js", "Redis", "PostgreSQL", "Google Maps API"],
    nextSlug: "shopease",
    nextName: "ShopEase",
    nextColor: "#e8e4dc",
  },
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug];

  if (!project) {
    return (
      <section className="px-10 py-16 text-center">
        <h1
          style={{ fontFamily: "var(--font-bebas)", color: "var(--text)" }}
          className="text-6xl mb-4"
        >
          Project Not Found
        </h1>
        <Link
          href="/work"
          style={{ color: "var(--muted)" }}
          className="text-sm underline"
        >
          ← Back to Work
        </Link>
      </section>
    );
  }

  return (
    <main>
      {/* ── Hero ── */}
      <section className="px-6 sm:px-10 pt-14 pb-0">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-10">
          <Link
            href="/work"
            style={{ color: "var(--muted)" }}
            className="text-xs uppercase tracking-widest hover:opacity-70 transition-all"
          >
            Work
          </Link>
          <span style={{ color: "var(--border)" }} className="text-xs">
            ·
          </span>
          <span
            style={{ color: "var(--text)" }}
            className="text-xs uppercase tracking-widest"
          >
            {project.name}
          </span>
        </div>

        {/* Title row */}
        <div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div>
            <p
              style={{ color: "var(--muted)" }}
              className="text-xs tracking-widest uppercase mb-3"
            >
              {project.year} · {project.category}
            </p>
            <h1
              style={{
                fontFamily: "var(--font-bebas)",
                color: "var(--text)",
                lineHeight: 0.9,
              }}
              className="text-[clamp(4rem,12vw,10rem)] tracking-wide"
            >
              {project.name}
            </h1>
          </div>
          {/* Meta right */}
          <div className="flex flex-col gap-3 pb-1 lg:items-end">
            <div>
              <p
                style={{ color: "var(--muted)" }}
                className="text-xs uppercase tracking-widest mb-1"
              >
                Client
              </p>
              <p
                style={{ color: "var(--text)" }}
                className="text-sm font-medium"
              >
                {project.client}
              </p>
            </div>
            <div>
              <p
                style={{ color: "var(--muted)" }}
                className="text-xs uppercase tracking-widest mb-1"
              >
                Services
              </p>
              <p style={{ color: "var(--text)" }} className="text-sm">
                {project.tags}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hero image ── */}
      <div className="px-6 sm:px-10 pt-8">
        <div
          style={{
            background: project.color,
            borderRadius: 16,
            overflow: "hidden",
          }}
          className="w-full aspect-[16/8] relative flex items-center justify-center"
        >
          <span
            style={{
              fontFamily: "var(--font-bebas)",
              color: "rgba(0,0,0,0.06)",
              lineHeight: 1,
            }}
            className="text-[clamp(8rem,25vw,20rem)] select-none"
          >
            {project.name.slice(0, 2).toUpperCase()}
          </span>
        </div>
      </div>

      {/* ── Overview + Deliverables ── */}
      <section
        className="px-6 sm:px-10 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        {/* Left — description */}
        <div className="lg:col-span-2">
          <p
            style={{ color: "var(--muted)" }}
            className="text-xs uppercase tracking-widest mb-4"
          >
            Overview
          </p>
          <p
            style={{ color: "var(--text)" }}
            className="text-xl leading-relaxed font-light"
          >
            {project.description}
          </p>
        </div>
        {/* Right — deliverables */}
        <div>
          <p
            style={{ color: "var(--muted)" }}
            className="text-xs uppercase tracking-widest mb-4"
          >
            Deliverables
          </p>
          <div className="flex flex-col gap-3">
            {project.deliverables.map((d, i) => (
              <div
                key={d}
                style={{ borderBottom: "1px solid var(--border)" }}
                className="flex items-center justify-between pb-3"
              >
                <span style={{ color: "var(--text)" }} className="text-sm">
                  {d}
                </span>
                <span style={{ color: "var(--muted)" }} className="text-xs">
                  0{i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Challenge + Solution ── */}
      <section
        className="px-6 sm:px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div>
          <p
            style={{ color: "var(--muted)" }}
            className="text-xs uppercase tracking-widest mb-4"
          >
            The Challenge
          </p>
          <p
            style={{ color: "var(--text)" }}
            className="text-base leading-relaxed"
          >
            {project.challenge}
          </p>
        </div>
        <div>
          <p
            style={{ color: "var(--muted)" }}
            className="text-xs uppercase tracking-widest mb-4"
          >
            Our Solution
          </p>
          <p
            style={{ color: "var(--text)" }}
            className="text-base leading-relaxed"
          >
            {project.solution}
          </p>
        </div>
      </section>

      {/* ── Second image ── */}
      <div className="px-6 sm:px-10 py-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          style={{ background: project.color, borderRadius: 16, opacity: 0.7 }}
          className="aspect-[4/3] flex items-center justify-center"
        >
          <span
            style={{
              fontFamily: "var(--font-bebas)",
              color: "rgba(0,0,0,0.07)",
            }}
            className="text-[8rem]"
          >
            {project.name.slice(0, 1)}
          </span>
        </div>
        <div
          style={{ background: project.color, borderRadius: 16, opacity: 0.5 }}
          className="aspect-[4/3] flex items-center justify-center"
        >
          <span
            style={{
              fontFamily: "var(--font-bebas)",
              color: "rgba(0,0,0,0.07)",
            }}
            className="text-[8rem]"
          >
            {project.name.slice(1, 2).toUpperCase()}
          </span>
        </div>
      </div>

      {/* ── Tech Stack ── */}
      <section
        className="px-6 sm:px-10 py-16"
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <p
          style={{ color: "var(--muted)" }}
          className="text-xs uppercase tracking-widest mb-6"
        >
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-3">
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                border: "1px solid var(--border)",
                color: "var(--text)",
                borderRadius: 999,
              }}
              className="text-sm px-5 py-2"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ── Next Project ── */}
      <Link href={`/work/${project.nextSlug}`} className="block group">
        <section
          style={{ background: project.nextColor }}
          className="px-6 sm:px-10 py-16 flex items-center justify-between transition-all duration-300"
        >
          <div>
            <p
              style={{ color: "rgba(0,0,0,0.45)" }}
              className="text-xs uppercase tracking-widest mb-2"
            >
              Next Project
            </p>
            <h2
              style={{
                fontFamily: "var(--font-bebas)",
                color: "#111",
                lineHeight: 1,
              }}
              className="text-[clamp(3rem,8vw,7rem)] tracking-wide"
            >
              {project.nextName}
            </h2>
          </div>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.5rem",
              color: "#111",
              transition: "all 0.3s",
            }}
            className="group-hover:bg-black/20 group-hover:scale-110 flex-shrink-0"
          >
            →
          </div>
        </section>
      </Link>
    </main>
  );
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}
