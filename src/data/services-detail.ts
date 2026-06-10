export interface ServiceProduct {
  name: string;
  tagline: string;
  description: string;
  url: string;
}

export interface ServiceDetail {
  num: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  process: string[];
  product?: ServiceProduct;
}

export const servicesDetail: Record<string, ServiceDetail> = {
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
  "whatsapp-api": {
    num: "07",
    name: "WhatsApp API",
    tagline: "Connect with customers instantly at scale.",
    description:
      "Connect with customers instantly using the official WhatsApp Business API. From automated replies and bulk messaging to full chatbot flows — we build WhatsApp solutions that drive engagement and sales.",
    tech: [
      "WhatsApp Business API",
      "Webhook / REST API",
    ],
    process: [
      "Business API Account Setup",
      "Use Case & Flow Planning",
      "Chatbot & Automation Design",
      "CRM & Tool Integration",
      "Testing & Compliance Check",
      "Launch & Performance Monitoring",
    ],
    product: {
      name: "Macropage Connect",
      tagline: "Our own WhatsApp-based API Integration platform",
      description:
        "Macropage Connect is our in-house WhatsApp API Integration platform — built to help businesses manage customer conversations, automate follow-ups, run broadcast campaigns, and track leads all from one dashboard. It's the fastest way to go live with WhatsApp API without building from scratch.",
      url: "https://macropageconnect.com",
    },
  },
};
