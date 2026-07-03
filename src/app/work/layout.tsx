import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore MacroPage's portfolio — web apps, mobile apps, AI products, and dashboards built for startups and businesses across India.",
  keywords: ["MacroPage portfolio", "web app projects", "mobile app case studies", "tech studio work India"],
  openGraph: {
    title: "Our Work — MacroPage Portfolio",
    description: "Real projects, real results. See what we've built for our clients.",
    url: "https://www.macropage.in/work",
  },
  alternates: { canonical: "https://www.macropage.in/work" },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
