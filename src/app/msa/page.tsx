import Link from "next/link";

const sections = [
  {
    title: "1. Purpose",
    body: "This Agreement establishes the general terms under which Macropage provides services to clients.",
  },
  {
    title: "2. Services",
    body: "Services may include:\n• Software Development\n• Mobile App Development\n• Website Development\n• WhatsApp API Integration\n• AI Solutions\n• ERP Systems\n• CRM Systems\n• Business Automation\n• API Development\n• Cloud Services",
  },
  {
    title: "3. Statements of Work (SOW)",
    body: "Specific projects shall be governed through individual Statements of Work defining:\n• Scope\n• Deliverables\n• Timelines\n• Pricing\n• Support terms",
  },
  {
    title: "4. Payment Terms",
    body: "Clients agree to pay according to approved quotations and invoices.\n\nLate payments may result in service suspension.",
  },
  {
    title: "5. Confidentiality",
    body: "Both parties agree to maintain confidentiality of:\n• Business information\n• Source code\n• Customer data\n• Proprietary information",
  },
  {
    title: "6. Intellectual Property",
    body: "Upon full payment:\n• Client owns agreed deliverables.\n• Macropage retains ownership of proprietary frameworks and reusable components.",
  },
  {
    title: "7. Warranties",
    body: "Services are provided on a commercially reasonable basis.\n\nNo guarantee is provided regarding:\n• Third-party platform uptime\n• Regulatory changes\n• Meta/WhatsApp policy changes",
  },
  {
    title: "8. Limitation of Liability",
    body: "Maximum liability shall not exceed fees paid under the relevant project.",
  },
  {
    title: "9. Termination",
    body: "Either party may terminate with written notice.",
  },
  {
    title: "10. Governing Law",
    body: "Jurisdiction: Raigarh, Chhattisgarh, India.",
  },
];

export default function MSAPage() {
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
          Legal · MR TECH SOLUTIONS PVT LTD
        </p>
        <h1
          style={{
            fontFamily: "var(--font-bebas)",
            color: "var(--text)",
            lineHeight: 0.9,
          }}
          className="text-[clamp(3rem,10vw,8rem)] tracking-wide mb-6"
        >
          Master Service{" "}
          <em
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            Agreement
          </em>
        </h1>
        <p style={{ color: "var(--muted)" }} className="text-base max-w-xl leading-relaxed">
          This Master Service Agreement (MSA) establishes the general terms under which
          Macropage provides services to its clients.
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
          Ready to get{" "}
          <em style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>
            started?
          </em>
        </h2>
        <Link
          href="/contact"
          style={{ background: "var(--btn-bg)", color: "var(--btn-text)" }}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold relative overflow-hidden group transition-all flex-shrink-0"
        >
          <span
            style={{ background: "var(--accent)" }}
            className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"
          />
          <span className="relative z-10">Contact Us →</span>
        </Link>
      </section>
    </main>
  );
}
