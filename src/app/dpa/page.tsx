import Link from "next/link";

const sections = [
  {
    title: "1. Parties",
    body: "Data Controller: Client\n\nData Processor: MR TECH SOLUTION PVT LTD (Macropage)",
  },
  {
    title: "2. Purpose",
    body: "This DPA governs processing of personal and business data by Macropage on behalf of clients. Applicable to WhatsApp API, ERP, CRM, AI Integrations, Automation Systems, and Software Services.",
  },
  {
    title: "3. Categories of Data",
    body: "May include:\n• Customer names\n• Phone numbers\n• Email addresses\n• Business records\n• CRM data\n• ERP data\n• WhatsApp communications\n• Support records",
  },
  {
    title: "4. Processing Activities",
    body: "Macropage may:\n• Store data\n• Process data\n• Transfer data\n• Analyze data\n• Automate workflows\n\nOnly as required to provide services.",
  },
  {
    title: "5. Security Measures",
    body: "Macropage shall implement reasonable safeguards including:\n• Access controls\n• Encryption where appropriate\n• Secure hosting\n• Monitoring and logging",
  },
  {
    title: "6. Subprocessors",
    body: "Macropage may engage:\n• Cloud providers\n• Hosting providers\n• Communication providers\n• AI service providers\n\nTo deliver services.",
  },
  {
    title: "7. Data Breach Notification",
    body: "Macropage will notify clients of known data breaches within a reasonable timeframe.",
  },
  {
    title: "8. Data Retention",
    body: "Data shall be retained only as long as necessary for:\n• Service delivery\n• Legal obligations\n• Contractual obligations",
  },
  {
    title: "9. Client Responsibilities",
    body: "Clients are responsible for:\n• Obtaining consent\n• Providing privacy notices\n• Compliance with applicable laws",
  },
  {
    title: "10. International Transfers",
    body: "Data may be processed outside India where required by service providers.",
  },
  {
    title: "11. Termination",
    body: "Upon termination, data may be returned or deleted according to contractual obligations and applicable law.",
  },
  {
    title: "Contact",
    body: "MR TECH SOLUTION PVT LTD\nBrand: Macropage\nEmail: info@macropage.in\nWebsite: macropage.in",
  },
];

export default function DPAPage() {
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
          Legal · MR TECH SOLUTION PVT LTD
        </p>
        <h1
          style={{
            fontFamily: "var(--font-bebas)",
            color: "var(--text)",
            lineHeight: 0.9,
          }}
          className="text-[clamp(3rem,10vw,8rem)] tracking-wide mb-6"
        >
          Data Processing{" "}
          <em
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            Agreement
          </em>
        </h1>
        <p style={{ color: "var(--muted)" }} className="text-base max-w-xl leading-relaxed">
          This Data Processing Agreement (DPA) governs how Macropage processes personal and
          business data on behalf of its clients, in compliance with applicable data protection laws.
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
