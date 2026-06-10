import type { ComponentType } from "react";
import {
  WebDevIllustration,
  AppDevIllustration,
  AIIllustration,
  AutomationIllustration,
  UIUXIllustration,
  CloudIllustration,
  WhatsAppIllustration,
} from "@/components/ui/ServiceIllustrations";

export interface PageService {
  num: string;
  name: string;
  slug: string;
  detail: string;
  process: string[];
  tech: string[];
  Illustration: ComponentType;
}

export const pageServices: PageService[] = [
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
    tech: ["WhatsApp Business API", "Webhook / REST API"],
    Illustration: AppDevIllustration,
  },
];
