import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "MacroPage — Tech Studio India",
  description:
    "MacroPage builds bold digital products — web apps, mobile apps, AI integration, automation, and cloud infrastructure.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://macropage.in",
  ),
  openGraph: {
    title: "MacroPage — Tech Studio India",
    description: "We build digital products that scale.",
    url: "https://macropage.in",
    siteName: "MacroPage",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MacroPage",
    description: "Tech Studio — Web, App, AI, Cloud",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <div className="relative z-10" style={{ background: "var(--bg)" }}>
            <Navbar />
            <main>{children}</main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
