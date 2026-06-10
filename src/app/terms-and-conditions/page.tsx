import Link from "next/link";

const sections = [
  {
    title: "1. Introduction",
    body: 'Welcome to Macropage ("Company", "we", "our", or "us"), a brand operated by MR TECH SOLUTIONS PVT LTD.\n\nBy accessing or using our website, services, software, applications, automation solutions, WhatsApp API services, ERP/CRM systems, AI integrations, web development, app development, and related services, you agree to these Terms & Conditions.',
  },
  {
    title: "2. Services",
    body: "Macropage provides:\n• WhatsApp Business API Integration\n• Business Process Automation\n• AI Business Solutions\n• ERP Development & Implementation\n• CRM Development & Implementation\n• Mobile Application Development\n• Website Development\n• Custom Software Development\n• API Integration Services\n• Cloud Solutions\n• IT Consulting Services",
  },
  {
    title: "3. Client Responsibilities",
    body: "Clients agree to:\n• Provide accurate information\n• Provide required access and credentials\n• Review deliverables promptly\n• Make payments according to agreed schedules\n• Use our services lawfully",
  },
  {
    title: "4. Payments",
    body: "All invoices must be paid according to agreed payment terms.\n\nFailure to make payments may result in:\n• Suspension of services\n• Removal of access\n• Delayed project delivery",
  },
  {
    title: "5. Intellectual Property",
    body: "Unless otherwise agreed in writing:\n• Macropage retains ownership of proprietary frameworks and tools.\n• Clients retain ownership of their business data.\n• Custom-developed solutions may be transferred upon full payment.",
  },
  {
    title: "6. Limitation of Liability",
    body: "MR TECH SOLUTIONS PVT LTD shall not be liable for:\n• Indirect damages\n• Loss of profits\n• Business interruptions\n• Third-party platform failures\n• WhatsApp/Meta policy changes\n\nOur maximum liability shall not exceed the fees paid for the affected service.",
  },
  {
    title: "7. Termination",
    body: "Either party may terminate services by written notice.\n\nOutstanding dues remain payable upon termination.",
  },
  {
    title: "8. Governing Law",
    body: "These Terms shall be governed by the laws of India.\n\nAny disputes shall be subject to the jurisdiction of courts located in Raigarh, Chhattisgarh.",
  },
  {
    title: "9. Contact",
    body: "MR TECH SOLUTIONS PVT LTD\nBrand: Macropage\nEmail: info@macropage.in\nWebsite: macropage.in",
  },
];

export default function TermsAndConditionsPage() {
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
          Terms &{" "}
          <em
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            Conditions
          </em>
        </h1>
        <p style={{ color: "var(--muted)" }} className="text-base max-w-xl leading-relaxed">
          By accessing or using our services, you agree to the following terms and conditions
          governed under MR TECH SOLUTIONS PVT LTD.
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
