import Link from "next/link";

const services = [
  {
    num: "01",
    name: "Web Development",
    slug: "web-development",
    detail:
      "Modern web applications built with the latest tech stack. From landing pages to complex dashboards — responsive, fast, and SEO-ready.",
    tech: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    num: "02",
    name: "App Development",
    slug: "app-development",
    detail:
      "Cross-platform mobile apps that feel native. One codebase, two platforms — delivered faster without compromising quality.",
    tech: ["React Native", "Flutter", "Expo", "Firebase"],
  },
  {
    num: "03",
    name: "AI Integration",
    slug: "ai-integration",
    detail:
      "Supercharge your product with AI. Chatbots, document analysis, recommendation systems, and custom LLM workflows.",
    tech: ["OpenAI", "LangChain", "Python", "Pinecone"],
  },
  {
    num: "04",
    name: "Business Automation",
    slug: "business-automation",
    detail:
      "Connect your tools, automate repetitive tasks, and free your team to focus on what matters.",
    tech: ["n8n", "Zapier", "Make", "REST APIs"],
  },
  {
    num: "05",
    name: "UI/UX Designing",
    slug: "ui-ux-designing",
    detail:
      "From wireframes to high-fidelity prototypes. Design that balances beauty with usability.",
    tech: ["Figma", "Framer", "Adobe XD", "Prototyping"],
  },
  {
    num: "06",
    name: "Cloud Services",
    slug: "cloud-services",
    detail:
      "Deploy with confidence. Scalable cloud infrastructure, automated pipelines, and monitoring.",
    tech: ["AWS", "GCP", "Docker", "GitHub Actions"],
  },
];

export default function ServicesPage() {
  return (
    <section className="px-10 py-16 max-w-5xl mx-auto">
      <p
        style={{ color: "var(--muted)" }}
        className="text-xs tracking-widest uppercase mb-2"
      >
        What We Do
      </p>
      <h1
        style={{
          fontFamily: "var(--font-bebas)",
          color: "var(--text)",
          lineHeight: 1,
        }}
        className="text-[clamp(3rem,8vw,6rem)] tracking-wide mb-12"
      >
        Our Services
      </h1>

      {services.map((s) => (
        <Link key={s.num} href={`/services/${s.slug}`} className="block group">
          {" "}
          {/* 👈 wrap in Link */}
          <div
            style={{ borderBottom: "1px solid var(--border)" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10 transition-all duration-200 group-hover:pl-2"
          >
            {/* Left */}
            <div>
              <p style={{ color: "var(--muted)" }} className="text-xs mb-3">
                {s.num}
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-bebas)",
                  color: "var(--text)",
                  lineHeight: 1,
                }}
                className="text-[clamp(2rem,4vw,3rem)] tracking-wide mb-4"
              >
                {s.name}
                <span
                  style={{ color: "var(--muted)" }}
                  className="text-2xl ml-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 inline-block"
                >
                  ↗
                </span>
              </h2>
              <p
                style={{ color: "var(--muted)" }}
                className="text-sm leading-relaxed"
              >
                {s.detail}
              </p>
            </div>

            {/* Right — tech tags */}
            <div className="flex flex-wrap gap-2 content-start md:justify-end">
              {s.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--muted)",
                  }}
                  className="text-xs px-3 py-1.5 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
