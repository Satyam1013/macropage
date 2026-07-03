import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.macropage.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MacroPage — Tech Studio India",
    template: "%s | MacroPage",
  },
  description:
    "MacroPage is a tech studio in India building bold digital products — web apps, mobile apps, AI integration, business automation, and cloud infrastructure for startups and businesses.",
  keywords: [
    "web development India",
    "mobile app development",
    "AI integration",
    "business automation",
    "UI UX design",
    "cloud services",
    "WhatsApp API",
    "Next.js development",
    "React development",
    "tech studio India",
    "software development Raigarh",
    "MacroPage",
  ],
  authors: [{ name: "MacroPage", url: SITE_URL }],
  creator: "MacroPage",
  publisher: "MR Tech Solution Pvt Ltd",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "MacroPage — Tech Studio India",
    description:
      "We build bold digital products — web apps, mobile apps, AI, automation & cloud. All under one roof.",
    url: SITE_URL,
    siteName: "MacroPage",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/logo.png", width: 800, height: 800, alt: "MacroPage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacroPage — Tech Studio India",
    description: "Bold digital products — Web, App, AI, Cloud & Automation.",
    images: ["/logo.png"],
  },
  alternates: { canonical: SITE_URL },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "MacroPage",
      legalName: "MR Tech Solution Pvt Ltd",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      email: "info@macropage.in",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Raigarh",
        addressRegion: "Chhattisgarh",
        addressCountry: "IN",
      },
      sameAs: [
        "https://instagram.com",
        "https://linkedin.com",
        "https://twitter.com",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "MacroPage",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <div className="relative z-10" style={{ background: "var(--bg)" }}>
            <Navbar />
            {children}
          </div>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
