import Link from "next/link";

const projects: Record<
  string,
  {
    name: string;
    year: string;
    category: string;
    tags: string;
    color: string;
    description: string;
    deliverables: string[];
  }
> = {
  shopease: {
    name: "ShopEase",
    year: "2025",
    category: "E-Commerce",
    tags: "Web App · UI/UX",
    color: "#e2dfd8",
    description:
      "A full-stack e-commerce platform built with Next.js and Stripe integration. Fast, SEO-optimized, and mobile-first design.",
    deliverables: [
      "Web Design",
      "Frontend Dev",
      "Backend API",
      "Payment Integration",
    ],
  },
  "finbot-ai": {
    name: "FinBot AI",
    year: "2025",
    category: "Fintech",
    tags: "AI Integration · Automation",
    color: "#d8dce2",
    description:
      "AI-powered financial assistant with LLM integration. Automated customer support and transaction analysis.",
    deliverables: ["AI Integration", "Chatbot", "Dashboard", "API Development"],
  },
  carelink: {
    name: "CareLink",
    year: "2025",
    category: "Healthcare",
    tags: "Mobile App · Cloud",
    color: "#dde2d8",
    description:
      "Cross-platform healthcare app built with Flutter. Patient management, appointments, and cloud sync.",
    deliverables: ["Mobile App", "Cloud Setup", "UI/UX Design", "AWS Deploy"],
  },
  logidash: {
    name: "LogiDash",
    year: "2025",
    category: "Logistics",
    tags: "Dashboard · Automation",
    color: "#e2d8dc",
    description:
      "Real-time logistics dashboard with automated workflow management and route optimization.",
    deliverables: ["Dashboard", "Automation", "Data Viz", "API Integration"],
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
    <section className="px-10 py-16 max-w-4xl mx-auto">
      {/* Back */}
      <Link
        href="/work"
        style={{ color: "var(--muted)" }}
        className="text-xs uppercase tracking-widest hover:opacity-100 transition-all mb-10 inline-block"
      >
        ← Back to Work
      </Link>

      {/* Hero image placeholder */}
      <div
        style={{ background: project.color, borderRadius: 16 }}
        className="w-full aspect-[16/7] flex items-center justify-center mb-10"
      >
        <span
          style={{ fontFamily: "var(--font-bebas)", color: "rgba(0,0,0,0.1)" }}
          className="text-[8rem]"
        >
          {project.name.slice(0, 2).toUpperCase()}
        </span>
      </div>

      {/* Meta */}
      <div
        style={{ borderBottom: "1px solid var(--border)" }}
        className="flex justify-between items-end pb-6 mb-8 flex-wrap gap-4"
      >
        <div>
          <p
            style={{ color: "var(--muted)" }}
            className="text-xs tracking-widest uppercase mb-2"
          >
            {project.year} · {project.category}
          </p>
          <h1
            style={{
              fontFamily: "var(--font-bebas)",
              color: "var(--text)",
              lineHeight: 1,
            }}
            className="text-[clamp(3rem,8vw,5rem)] tracking-wide"
          >
            {project.name}
          </h1>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.deliverables.map((d) => (
            <span
              key={d}
              style={{
                border: "1px solid var(--border)",
                color: "var(--muted)",
              }}
              className="text-xs px-3 py-1 rounded-full"
            >
              {d}
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <p
        style={{ color: "var(--muted)" }}
        className="text-base leading-relaxed max-w-xl"
      >
        {project.description}
      </p>
    </section>
  );
}

// Static paths generate karo
export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}
