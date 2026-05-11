import Link from "next/link";

const services: Record<
  string,
  {
    num: string;
    name: string;
    tagline: string;
    description: string;
    tech: string[];
    process: string[];
  }
> = {
  "web-development": {
    num: "01",
    name: "Web Development",
    tagline: "Fast, modern, SEO-ready websites & web apps.",
    description:
      "We build production-grade web applications using Next.js, React, and Node.js. Every project is optimized for speed, SEO, and scalability — from simple landing pages to complex SaaS platforms.",
    tech: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel",
    ],
    process: [
      "Discovery & Planning",
      "Wireframe & Design",
      "Development",
      "Testing & QA",
      "Deploy & Monitor",
    ],
  },
  "app-development": {
    num: "02",
    name: "App Development",
    tagline: "iOS & Android apps that users love.",
    description:
      "Cross-platform mobile apps built with React Native and Flutter. One codebase, two platforms — delivered faster without compromising on performance or user experience.",
    tech: [
      "React Native",
      "Flutter",
      "Expo",
      "Firebase",
      "Redux",
      "App Store",
      "Play Store",
    ],
    process: [
      "UX Research",
      "UI Design",
      "Development",
      "Testing on Devices",
      "Store Launch",
    ],
  },
  "ai-integration": {
    num: "03",
    name: "AI Integration",
    tagline: "LLMs, chatbots & automation that actually work.",
    description:
      "We integrate AI into your existing product or build AI-native tools from scratch. From chatbots and document analysis to recommendation engines and custom LLM workflows — we make AI practical.",
    tech: [
      "OpenAI GPT-4",
      "LangChain",
      "Python",
      "Pinecone",
      "Hugging Face",
      "FastAPI",
      "RAG",
    ],
    process: [
      "Use Case Analysis",
      "Model Selection",
      "Integration",
      "Fine-tuning",
      "Monitoring",
    ],
  },
  "business-automation": {
    num: "04",
    name: "Business Automation",
    tagline: "Save hundreds of hours every month.",
    description:
      "We connect your tools and automate repetitive workflows so your team can focus on what matters. Custom pipelines, API integrations, and no-code/low-code solutions tailored to your business.",
    tech: [
      "n8n",
      "Zapier",
      "Make",
      "REST APIs",
      "Webhooks",
      "Python",
      "Cron Jobs",
    ],
    process: [
      "Workflow Audit",
      "Tool Mapping",
      "Pipeline Build",
      "Testing",
      "Handover & Docs",
    ],
  },
  "ui-ux-designing": {
    num: "05",
    name: "UI/UX Designing",
    tagline: "Designs that look great and convert.",
    description:
      "Figma-first design process. We create wireframes, prototypes, and pixel-perfect UI that balances aesthetics with usability — tested and approved before a single line of code is written.",
    tech: [
      "Figma",
      "Framer",
      "Adobe XD",
      "Prototyping",
      "User Testing",
      "Design Systems",
    ],
    process: [
      "Research",
      "Wireframes",
      "Visual Design",
      "Prototype",
      "Handoff to Dev",
    ],
  },
  "cloud-services": {
    num: "06",
    name: "Cloud Services",
    tagline: "Infrastructure built to scale reliably.",
    description:
      "We set up and manage cloud infrastructure on AWS, GCP, or Azure. Automated CI/CD pipelines, Docker containers, monitoring, and security — so you ship faster and sleep better.",
    tech: [
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Cloudflare",
      "Terraform",
    ],
    process: [
      "Architecture Planning",
      "Setup & Config",
      "CI/CD Pipeline",
      "Monitoring",
      "Ongoing Support",
    ],
  },
};

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services[params.slug];

  if (!service) {
    return (
      <section className="px-10 py-16 text-center">
        <h1
          style={{ fontFamily: "var(--font-bebas)", color: "var(--text)" }}
          className="text-6xl mb-4"
        >
          Service Not Found
        </h1>
        <Link
          href="/services"
          style={{ color: "var(--muted)" }}
          className="text-sm underline"
        >
          ← Back to Services
        </Link>
      </section>
    );
  }

  return (
    <section className="px-10 py-16 max-w-4xl mx-auto">
      {/* Back */}
      <Link
        href="/services"
        style={{ color: "var(--muted)" }}
        className="text-xs uppercase tracking-widest hover:opacity-100 transition-all mb-10 inline-block"
      >
        ← All Services
      </Link>

      {/* Header */}
      <p
        style={{ color: "var(--muted)" }}
        className="text-xs tracking-widest uppercase mb-3"
      >
        {service.num} · Service
      </p>
      <h1
        style={{
          fontFamily: "var(--font-bebas)",
          color: "var(--text)",
          lineHeight: 0.95,
        }}
        className="text-[clamp(3rem,8vw,6rem)] tracking-wide mb-4"
      >
        {service.name}
      </h1>
      <p style={{ color: "var(--muted)" }} className="text-lg mb-12 italic">
        {service.tagline}
      </p>

      {/* Description */}
      <div
        style={{ borderTop: "1px solid var(--border)" }}
        className="pt-8 mb-12"
      >
        <p
          style={{ color: "var(--muted)" }}
          className="text-base leading-relaxed max-w-2xl"
        >
          {service.description}
        </p>
      </div>

      {/* Tech Stack */}
      <div className="mb-12">
        <p
          style={{ color: "var(--text)" }}
          className="text-xs tracking-widest uppercase mb-4 font-semibold"
        >
          Technologies
        </p>
        <div className="flex flex-wrap gap-2">
          {service.tech.map((t) => (
            <span
              key={t}
              style={{
                border: "1px solid var(--border)",
                color: "var(--muted)",
                background: "var(--bg2)",
              }}
              className="text-sm px-4 py-1.5 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Process */}
      <div>
        <p
          style={{ color: "var(--text)" }}
          className="text-xs tracking-widest uppercase mb-6 font-semibold"
        >
          Our Process
        </p>
        <div className="flex flex-wrap gap-3">
          {service.process.map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <div
                style={{
                  background: "var(--bg2)",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                }}
                className="px-4 py-2.5 flex items-center gap-2"
              >
                <span style={{ color: "var(--muted)" }} className="text-xs">
                  {i + 1}.
                </span>
                <span
                  style={{ color: "var(--text)" }}
                  className="text-sm font-medium"
                >
                  {step}
                </span>
              </div>
              {i < service.process.length - 1 && (
                <span style={{ color: "var(--border)" }}>→</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div
        style={{ borderTop: "1px solid var(--border)" }}
        className="mt-16 pt-8 flex items-center justify-between flex-wrap gap-4"
      >
        <p style={{ color: "var(--muted)" }} className="text-sm">
          Interested in {service.name}?
        </p>
        <Link
          href="/contact"
          style={{ background: "var(--btn-bg)", color: "var(--btn-text)" }}
          className="px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-80 transition-all"
        >
          Start a Project →
        </Link>
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}
