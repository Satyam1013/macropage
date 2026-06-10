import Link from "next/link";

const sections = [
  {
    title: "1. General Policy",
    body: "Macropage primarily provides custom software and technology services.\n\nDue to the customized nature of our services, refunds are generally not available once work has commenced.",
  },
  {
    title: "2. Eligible Refund Situations",
    body: "Refunds may be considered when:\n• Work has not started\n• Duplicate payment was made\n• Billing error occurred",
  },
  {
    title: "3. Non-Refundable Services",
    body: "The following are non-refundable:\n• Software development\n• Website development\n• Mobile app development\n• WhatsApp API setup\n• AI integrations\n• ERP implementation\n• CRM implementation\n• Business automation services\n• Consulting fees\n• Third-party license fees",
  },
  {
    title: "4. Cancellation Process",
    body: "Cancellation requests must be sent to:\n\ninfo@macropage.in",
  },
  {
    title: "5. Partial Refunds",
    body: "If approved, refunds will be calculated after deducting:\n• Work completed\n• Platform fees\n• Licensing costs\n• Administrative costs",
  },
  {
    title: "6. Refund Timeline",
    body: "Approved refunds will be processed within 15–30 business days.",
  },
];

export default function RefundPolicyPage() {
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
          Refund &{" "}
          <em
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            Cancellation
          </em>
        </h1>
        <p style={{ color: "var(--muted)" }} className="text-base max-w-xl leading-relaxed">
          Due to the custom nature of our work, refunds are generally not available once a
          project has commenced. Read the full policy below.
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
