"use client";

import Link from "next/link";
import {
  WebDevIllustration,
  AppDevIllustration,
  AIIllustration,
  AutomationIllustration,
  UIUXIllustration,
  CloudIllustration,
  SocialMediaIllustration,
  WhatsAppIllustration,
} from "@/components/ui/ServiceIllustrations";

const services = [
  {
    num: "01",
    name: "Web Development",
    slug: "web-development",
    detail:
      "Modern web applications built with the latest tech stack. From landing pages to complex dashboards — responsive, fast, and SEO-ready. We architect systems that scale with your business and delight your users.",
    process: [
      "Discovery & Requirements",
      "Architecture & Tech Stack",
      "UI/UX Design & Prototyping",
      "Development & Testing",
      "Deployment & CI/CD",
      "Post-Launch Support",
    ],
    tech: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
    Illustration: WebDevIllustration,
  },
  {
    num: "02",
    name: "App Development",
    slug: "app-development",
    detail:
      "Cross-platform mobile apps that feel native. One codebase, two platforms — delivered faster without compromising quality or performance.",
    process: [
      "Platform Strategy",
      "UX Wireframing",
      "Native-feel UI Design",
      "Cross-platform Development",
      "App Store Submission",
      "Analytics & Monitoring",
    ],
    tech: ["React Native", "Flutter", "Expo", "Firebase"],
    Illustration: WhatsAppIllustration,
  },
  {
    num: "03",
    name: "AI Integration",
    slug: "ai-integration",
    detail:
      "Supercharge your product with AI. Chatbots, document analysis, recommendation systems, and custom LLM workflows tailored to your business.",
    process: [
      "Use Case Analysis",
      "Model Selection",
      "Data Pipeline Setup",
      "API Integration",
      "Testing & Fine-tuning",
      "Deployment & Monitoring",
    ],
    tech: ["OpenAI", "LangChain", "Python", "Pinecone"],
    Illustration: AIIllustration,
  },
  {
    num: "04",
    name: "Business Automation",
    slug: "business-automation",
    detail:
      "Connect your tools, automate repetitive tasks, and free your team to focus on what matters. We map, build, and deploy end-to-end workflows.",
    process: [
      "Process Audit",
      "Workflow Mapping",
      "Tool Integration",
      "Automation Build",
      "Testing & QA",
      "Handoff & Training",
    ],
    tech: ["n8n", "Zapier", "Make", "REST APIs"],
    Illustration: AutomationIllustration,
  },
  {
    num: "05",
    name: "UI/UX Designing",
    slug: "ui-ux-designing",
    detail:
      "From wireframes to high-fidelity prototypes. Design that balances beauty with usability — every pixel purposeful.",
    process: [
      "Research & Audit",
      "Information Architecture",
      "Wireframing",
      "Visual Design",
      "Prototyping",
      "Design Handoff",
    ],
    tech: ["Figma", "Framer", "Adobe XD", "Prototyping"],
    Illustration: UIUXIllustration,
  },
  {
    num: "06",
    name: "Cloud Services",
    slug: "cloud-services",
    detail:
      "Deploy with confidence. Scalable cloud infrastructure, automated pipelines, and 24/7 monitoring so you never miss a beat.",
    process: [
      "Infrastructure Audit",
      "Cloud Architecture",
      "Container Setup",
      "CI/CD Pipelines",
      "Security & Scaling",
      "Monitoring & Alerts",
    ],
    tech: ["AWS", "GCP", "Docker", "GitHub Actions"],
    Illustration: CloudIllustration,
  },
  {
    num: "07",
    name: "WhatsApp API",
    slug: "whatsapp-api",
    detail:
      "Connect with customers instantly using the official WhatsApp Business API. From automated replies and bulk messaging to full chatbot flows — we build WhatsApp solutions that drive engagement and sales.",
    process: [
      "Business API Account Setup",
      "Use Case & Flow Planning",
      "Chatbot & Automation Design",
      "CRM & Tool Integration",
      "Testing & Compliance Check",
      "Launch & Performance Monitoring",
    ],
    tech: [
      "WhatsApp Business API",
      "Twilio",
      "360dialog",
      "Webhook / REST API",
    ],
    Illustration: AppDevIllustration,
  },
  {
    num: "08",
    name: "Social Media Marketing",
    slug: "social-media-marketing",
    detail:
      "Build a brand people follow. We create scroll-stopping content, manage your presence, and run campaigns that turn followers into customers.",
    process: [
      "Brand Voice & Audit",
      "Platform Strategy",
      "Content Calendar",
      "Creative Production",
      "Community Management",
      "Performance Reporting",
    ],
    tech: ["Instagram", "LinkedIn", "Meta Business", "Canva Pro"],
    Illustration: SocialMediaIllustration,
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* ── Header ── */}
      <section
        style={{ borderBottom: "1px solid var(--border)" }}
        className="px-6 sm:px-10 pt-14 pb-10"
      >
        <p
          style={{ color: "var(--muted)" }}
          className="text-xs tracking-widest uppercase mb-3"
        >
          [ 03 ] What We Do
        </p>
        <h1
          style={{
            fontFamily: "var(--font-bebas)",
            color: "var(--text)",
            lineHeight: 0.9,
          }}
          className="text-[clamp(4rem,12vw,10rem)] tracking-wide"
        >
          Our{" "}
          <em
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            Services
          </em>
        </h1>
      </section>

      {/* ── Stacking scroll sections ── */}
      {services.map((s, i) => {
        const { Illustration } = s;
        return (
          <div
            key={s.num}
            style={{
              position: "sticky",
              top: "60px",
              zIndex: i + 1,
              background: "var(--bg)",
              borderBottom: "1px solid var(--border)",
              minHeight: "calc(100vh - 60px)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_320px] h-full min-h-[calc(100vh-60px)]">
              {/* ── Col 1 — Service list ── */}
              <aside
                style={{ borderRight: "1px solid var(--border)" }}
                className="px-6 sm:px-8 py-10 hidden lg:block"
              >
                <div
                  style={{
                    fontFamily: "var(--font-bebas)",
                    color: "var(--text)",
                    fontSize: "clamp(3rem,5vw,4rem)",
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </div>
                <div className="flex flex-col mt-4 gap-1">
                  {services.map((item) => (
                    <span
                      key={item.num}
                      style={{
                        color:
                          item.num === s.num ? "var(--text)" : "var(--muted)",
                        fontWeight: item.num === s.num ? 500 : 400,
                      }}
                      className="text-xs uppercase tracking-widest py-1"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </aside>

              {/* ── Col 2 — Detail ── */}
              <section className="px-6 sm:px-10 py-10">
                <p
                  style={{ color: "var(--muted)" }}
                  className="text-xs font-mono mb-3 lg:hidden"
                >
                  {s.num}
                </p>

                <h2
                  style={{
                    fontFamily: "var(--font-bebas)",
                    color: "var(--text)",
                    lineHeight: 0.92,
                  }}
                  className="text-[clamp(2.5rem,6vw,5rem)] tracking-wide mb-6"
                >
                  {s.name.toUpperCase()}
                </h2>

                <p
                  style={{ color: "var(--muted)" }}
                  className="text-sm leading-relaxed max-w-xl mb-8"
                >
                  {s.detail}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-10">
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

                {/* ✅ Illustration — placeholder replace */}
                <div
                  style={{
                    background: "var(--bg2)",
                    border: "1px solid var(--border)",
                    borderRadius: 16,
                    height: 500,
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "2rem",
                    color: "var(--accent)",
                  }}
                >
                  <Illustration />
                </div>
              </section>

              {/* ── Col 3 — Process ── */}
              <aside
                style={{ borderLeft: "1px solid var(--border)" }}
                className="px-6 sm:px-8 py-10 hidden lg:flex flex-col justify-between"
              >
                <div>
                  <p
                    style={{ color: "var(--muted)" }}
                    className="text-xs tracking-widest uppercase mb-6"
                  >
                    Our Process
                  </p>
                  <div className="flex flex-col">
                    {s.process.map((step, j) => (
                      <div
                        key={j}
                        style={{ borderBottom: "1px solid var(--border)" }}
                        className="py-4 flex items-center gap-4"
                      >
                        <span
                          style={{ color: "var(--muted)" }}
                          className="text-xs font-mono flex-shrink-0"
                        >
                          {String(j + 1).padStart(2, "0")}
                        </span>
                        <span
                          style={{ color: "var(--text)" }}
                          className="text-xs uppercase tracking-wide"
                        >
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA — only on last service */}
                {i === services.length - 1 && (
                  <Link
                    href="/contact"
                    style={{
                      background: "var(--btn-bg)",
                      color: "var(--btn-text)",
                    }}
                    className="mt-10 w-full text-center py-4 rounded-xl text-sm font-semibold transition-all relative overflow-hidden group block"
                  >
                    <span
                      style={{ background: "var(--border)" }}
                      className="absolute inset-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-xl"
                    />
                    <span className="relative z-10">
                      Let&apos;s Build Together →
                    </span>
                  </Link>
                )}
              </aside>
            </div>
          </div>
        );
      })}
    </main>
  );
}
