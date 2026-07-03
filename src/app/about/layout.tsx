import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "MacroPage is a tech studio from Raigarh, India — building scalable web apps, mobile apps, AI tools, and digital products for startups and growing businesses.",
  keywords: ["about MacroPage", "tech studio India", "software company Raigarh", "MR Tech Solution"],
  openGraph: {
    title: "About MacroPage — Tech Studio India",
    description: "A tech studio built on purpose. We help founders and businesses build bold digital products.",
    url: "https://www.macropage.in/about",
  },
  alternates: { canonical: "https://www.macropage.in/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
