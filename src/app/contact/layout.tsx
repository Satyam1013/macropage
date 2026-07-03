import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with MacroPage. Start a project, ask a question, or just say hello. We respond within 24 hours.",
  keywords: ["contact MacroPage", "hire tech studio India", "start a project", "web development inquiry"],
  openGraph: {
    title: "Contact MacroPage",
    description: "Ready to build something great? Let's talk. We respond within 24 hours.",
    url: "https://www.macropage.in/contact",
  },
  alternates: { canonical: "https://www.macropage.in/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
