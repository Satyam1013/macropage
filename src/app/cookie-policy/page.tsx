import Link from "next/link";

const sections = [
  {
    title: "What Are Cookies?",
    body: "Cookies are small files stored on your device to improve website functionality and user experience.",
  },
  {
    title: "Essential Cookies",
    body: "Required for website operation. These cookies ensure the website functions correctly and cannot be switched off.",
  },
  {
    title: "Analytics Cookies",
    body: "Used to understand:\n• Website traffic\n• Visitor behavior\n• Performance metrics",
  },
  {
    title: "Functional Cookies",
    body: "Used to:\n• Remember preferences\n• Improve user experience",
  },
  {
    title: "Third-Party Cookies",
    body: "Our website may use:\n• Google Analytics\n• Meta Pixel\n• Third-party integrations",
  },
  {
    title: "Managing Cookies",
    body: "Users may disable cookies through browser settings.\n\nDisabling cookies may affect certain website features.",
  },
  {
    title: "Contact",
    body: "For any cookie-related queries, reach us at:\n\ninfo@macropage.in",
  },
];

export default function CookiePolicyPage() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{ borderBottom: "1px solid var(--border)" }}
        className="px-6 sm:px-10 pt-14 pb-10"
      >
        <p
          style={{ color: "var(--muted)" }}
          className="text-xs tracking-widest uppercase mb-3"
        >
          Legal · Effective Date: June 3, 2026
        </p>
        <h1
          style={{
            fontFamily: "var(--font-bebas)",
            color: "var(--text)",
            lineHeight: 0.9,
          }}
          className="text-[clamp(3rem,10vw,8rem)] tracking-wide mb-6"
        >
          Cookie{" "}
          <em
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            Policy
          </em>
        </h1>
        <p style={{ color: "var(--muted)" }} className="text-base max-w-xl leading-relaxed">
          We use cookies to improve your experience, understand how our site is used, and
          deliver better services. Here&apos;s how and why.
        </p>
      </section>

      {/* Content */}
      {sections.map((s, i) => (
        <section
          key={i}
          style={{ borderBottom: "1px solid var(--border)" }}
          className="grid grid-cols-1 lg:grid-cols-[280px_1fr] px-6 sm:px-10 py-12 gap-8"
        >
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              color: "var(--text)",
              lineHeight: 1.1,
            }}
            className="text-xl tracking-wide"
          >
            {s.title}
          </h2>
          <p
            style={{ color: "var(--muted)" }}
            className="text-base leading-relaxed whitespace-pre-line"
          >
            {s.body}
          </p>
        </section>
      ))}

      {/* CTA */}
      <section className="px-6 sm:px-10 py-16 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
        <h2
          style={{
            fontFamily: "var(--font-bebas)",
            color: "var(--text)",
            lineHeight: 0.95,
          }}
          className="text-[clamp(2rem,6vw,5rem)] tracking-wide"
        >
          Have questions?
          <br />
          <em style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>
            Let&apos;s talk.
          </em>
        </h2>
        <Link
          href="/contact"
          style={{ background: "var(--btn-bg)", color: "var(--btn-text)" }}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold relative overflow-hidden group transition-all active:scale-95 flex-shrink-0"
        >
          <span
            style={{ background: "var(--accent)" }}
            className="absolute inset-0 translate-y-full group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-300 ease-out rounded-full"
          />
          <span className="relative z-10">Contact Us →</span>
        </Link>
      </section>
    </main>
  );
}
