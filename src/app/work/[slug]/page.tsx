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
  "macropage-connect": {
    name: "Macropage Connect",
    year: "2025",
    category: "SaaS · CRM",
    client: "MacroPage",
    tags: "Web App · WhatsApp API",
    color: "#d4e8df",
    description:
      "WhatsApp Business API CRM platform — manage conversations, run broadcast campaigns, and automate customer interactions from a unified dashboard.",
    challenge:
      "Businesses managing customer support on WhatsApp had no way to handle high volumes. Chats were scattered across multiple personal phones with no tracking, no automation, and no team collaboration.",
    solution:
      "Built Macropage Connect — a full-featured WhatsApp CRM. Unified team inbox, broadcast scheduling, automation flows, and real-time analytics. Deployed via WhatsApp Business API for enterprise-grade reliability.",
    deliverables: [
      "Web Platform",
      "WhatsApp API Integration",
      "Team Inbox",
      "Broadcast & Automation",
    ],
    tech: ["Next.js", "Node.js", "WhatsApp Business API", "PostgreSQL", "Redis"],
    nextSlug: "mr-fuels-transact",
    nextName: "Mr Fuels Transact",
    nextColor: "#e8e0d4",
  },
  "mr-fuels-transact": {
    name: "Mr Fuels Transact",
    year: "2025",
    category: "Fuel Tech",
    client: "Mr Fuels",
    tags: "Web App · Automation",
    color: "#e8e0d4",
    description:
      "End-to-end fuel transaction and fleet management platform. Real-time dispensing records, vendor management, and automated billing — replacing paper ledgers with digital precision.",
    challenge:
      "Fuel dispensing was tracked manually on paper. Reconciliation took days, discrepancies were common, and fleet operators had zero real-time visibility into fuel usage across sites.",
    solution:
      "Built a digital transaction platform with real-time dispensing records, automated reconciliation, and a vendor portal. Fleet operators now get live dashboards and automated billing — reducing manual work by 90%.",
    deliverables: [
      "Transaction Platform",
      "Fleet Dashboard",
      "Vendor Portal",
      "Billing Automation",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "AWS", "REST APIs"],
    nextSlug: "macropage-connect",
    nextName: "Macropage Connect",
    nextColor: "#d4e8df",
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
