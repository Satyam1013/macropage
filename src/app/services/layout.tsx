import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "MacroPage offers web development, app development, AI integration, business automation, UI/UX design, cloud services, and WhatsApp API solutions.",
  keywords: [
    "web development services India",
    "mobile app development",
    "AI integration services",
    "business automation",
    "UI UX design agency",
    "cloud services India",
    "WhatsApp API integration",
  ],
  openGraph: {
    title: "Services — MacroPage Tech Studio",
    description: "Web, App, AI, Automation, Cloud, UI/UX & WhatsApp API — all under one roof.",
    url: "https://www.macropage.in/services",
  },
  alternates: { canonical: "https://www.macropage.in/services" },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
