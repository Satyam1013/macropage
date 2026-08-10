import type { Metadata } from "next";
import Image from "next/image";
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
    image: string;
    imageMobile: string;
    liveUrl?: string;
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
  "macropage-connect-portal": {
    name: "Macropage Connect Portal",
    year: "2026",
    category: "SaaS · CRM",
    client: "MacroPage",
    tags: "Website · Features & Story",
    color: "#123a6b",
    image: "/projects/macropage-connect-portal.png",
    imageMobile: "/projects/macropage-connect-portal-mobile.png",
    liveUrl: "https://www.macropageconnect.com",
    description:
      "The 'About' portal for Macropage Connect — the story behind the product, platform stats, and a deeper look at what it does for businesses on WhatsApp.",
    challenge:
      "Visitors who landed on the homepage and wanted more depth — the mission, the numbers, the team — had nowhere dedicated to go for that story before deciding to sign up.",
    solution:
      "Built a dedicated About/Portal page: mission statement, live platform stats (businesses onboarded, uptime, support response time), and a path to meet the team.",
    deliverables: [
      "About Page",
      "Platform Stats",
      "Brand Story",
      "Team Section",
    ],
    tech: ["Next.js", "Tailwind CSS"],
    nextSlug: "tritju",
    nextName: "Tritju",
    nextColor: "#a14e00",
  },
  tritju: {
    name: "Tritju",
    year: "2025",
    category: "HealthTech",
    client: "Tritju",
    tags: "Web App · Healthcare",
    color: "#a14e00",
    image: "/projects/tritju.png",
    imageMobile: "/projects/tritju-mobile.png",
    description:
      "Healthcare platform connecting patients with doctors, labs, and hospitals — book appointments, manage visits, and access care from one place.",
    challenge:
      "Patients had no single place to find doctors, book lab tests, or discover nearby hospitals — appointments were scattered across phone calls and walk-ins with zero tracking or visibility.",
    solution:
      "Built Tritju — a unified healthcare booking platform. Patients can find expert doctors, book lab services, and locate nearby hospitals from one dashboard, with every appointment tracked end-to-end.",
    deliverables: [
      "Web Platform",
      "Doctor & Lab Booking",
      "Hospital Directory",
      "Appointment Tracking",
    ],
    tech: ["React", "Node.js", "MongoDB"],
    nextSlug: "mr-fuels-transact",
    nextName: "Mr Fuels Transact",
    nextColor: "#111111",
  },
  "mr-fuels-transact": {
    name: "Mr Fuels Transact",
    year: "2025",
    category: "Fuel Tech",
    client: "Mr Fuels",
    tags: "Website · Dashboard",
    color: "#111111",
    image: "/projects/mr-fuels-transact-portal.png",
    imageMobile: "/projects/mr-fuels-transact-portal-mobile.png",
    liveUrl: "https://www.mrfuelstransact.com",
    description:
      "Website and web dashboard for Mr Fuels Transact — track fuel sales, manage tanks and staff, and view reports from any device.",
    challenge:
      "Fuel station owners needed to check business performance and manage operations without opening the full app — from a laptop, tablet, or on the go.",
    solution:
      "Built a responsive web dashboard covering sales, tank & stock levels, expenses, staff & shifts, and reports — fully synced with the mobile app.",
    deliverables: [
      "Web Dashboard",
      "Sales & Stock Reports",
      "Staff Management",
      "Cross-Device Sync",
    ],
    tech: ["React", "Node.js", "PostgreSQL"],
    nextSlug: "mr-fuels-transact-app",
    nextName: "Mr Fuels Transact App",
    nextColor: "#6b1d1d",
  },
  "mr-fuels-transact-app": {
    name: "Mr Fuels Transact App",
    year: "2026",
    category: "Fuel Tech",
    client: "Mr Fuels",
    tags: "Mobile App · Automation",
    color: "#6b1d1d",
    image: "/projects/mr-fuels-transact.png",
    imageMobile: "/projects/mr-fuels-transact-mobile.png",
    description:
      "End-to-end fuel transaction app for the station floor. Real-time dispensing records, collections, and shift tracking — replacing paper ledgers with digital precision.",
    challenge:
      "Fuel dispensing was tracked manually on paper. Reconciliation took days, discrepancies were common, and station staff had no quick way to log sales or close a shift.",
    solution:
      "Built a mobile-first app for daily operations — real-time dispensing records, cash collection tracking, and shift closing, all from the fuel station floor.",
    deliverables: [
      "Mobile App",
      "Real-Time Dispensing Records",
      "Shift & Cash Tracking",
      "Offline-Friendly Sync",
    ],
    tech: ["React Native", "Node.js", "PostgreSQL"],
    nextSlug: "macropage-connect-portal",
    nextName: "Macropage Connect Portal",
    nextColor: "#123a6b",
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        name: project.name,
        description: project.description,
        creator: { "@type": "Organization", name: "MacroPage", url: SITE_URL },
        about: project.category,
        url: `${SITE_URL}/work/${params.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Work", item: `${SITE_URL}/work` },
          { "@type": "ListItem", position: 2, name: project.name, item: `${SITE_URL}/work/${params.slug}` },
        ],
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
            {project.liveUrl && (
              <div>
                <p
                  style={{ color: "var(--muted)" }}
                  className="text-xs uppercase tracking-widest mb-1"
                >
                  Live Site
                </p>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent)" }}
                  className="text-sm font-medium hover:opacity-70 transition-opacity"
                >
                  Visit Site →
                </a>
              </div>
            )}
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
            <div>
              <p
                style={{ color: "var(--muted)" }}
                className="text-xs uppercase tracking-widest mb-1"
              >
                Share
              </p>
              <div className="flex gap-3">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`${project.name} — ${SITE_URL}/work/${params.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--text)" }}
                  className="text-sm hover:opacity-60 transition-opacity"
                >
                  WhatsApp
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${SITE_URL}/work/${params.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--text)" }}
                  className="text-sm hover:opacity-60 transition-opacity"
                >
                  LinkedIn
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(project.name)}&url=${encodeURIComponent(`${SITE_URL}/work/${params.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--text)" }}
                  className="text-sm hover:opacity-60 transition-opacity"
                >
                  X
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hero image ── */}
      <div className="px-6 sm:px-10 pt-8">
        <div
          style={{ background: project.color, borderRadius: 16, overflow: "hidden" }}
          className="w-full aspect-[16/8] relative"
        >
          <Image
            src={project.imageMobile}
            alt={`${project.name} project screenshot`}
            fill
            sizes="100vw"
            className="object-cover sm:hidden"
            priority
          />
          <Image
            src={project.image}
            alt={`${project.name} project screenshot`}
            fill
            sizes="100vw"
            className="object-cover hidden sm:block"
            priority
          />
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
              style={{ color: "rgba(255,255,255,0.6)" }}
              className="text-xs uppercase tracking-widest mb-2"
            >
              Next Project
            </p>
            <h2
              style={{
                fontFamily: "var(--font-bebas)",
                color: "#fff",
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
              background: "rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.5rem",
              color: "#fff",
              transition: "all 0.3s",
            }}
            className="group-hover:bg-white/25 group-hover:scale-110 flex-shrink-0"
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
