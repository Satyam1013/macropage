import Link from "next/link";

const sections = [
  {
    title: "1. Information We Collect",
    body: "We may collect: Name, email address, phone number, company name, and business details. Information submitted through contact forms, inquiries, support requests, or project discussions. Billing and transaction information when purchasing services. Technical information such as IP address, browser type, device information, and website usage data. Information provided through integrations with third-party platforms including WhatsApp Business Platform, CRM systems, ERP systems, cloud services, and automation tools.",
  },
  {
    title: "2. How We Use Information",
    body: "We use collected information to: Provide and manage our services. Develop, deploy, and maintain software solutions. Respond to inquiries and provide customer support. Improve website performance, security, and user experience. Send service-related communications and updates. Comply with legal obligations and regulatory requirements.",
  },
  {
    title: "3. WhatsApp API & Third-Party Services",
    body: "Our services may integrate with third-party platforms including Meta's WhatsApp Business Platform and other technology providers. Data processed through such integrations remains subject to the privacy policies and terms of the respective providers.",
  },
  {
    title: "4. Data Security",
    body: "We implement reasonable technical and organizational security measures to protect personal and business information from unauthorized access, disclosure, alteration, or destruction.",
  },
  {
    title: "5. Data Retention",
    body: "We retain information only as long as necessary to provide services, fulfill contractual obligations, comply with legal requirements, resolve disputes, and enforce agreements.",
  },
  {
    title: "6. Cookies & Analytics",
    body: "Our website may use cookies and analytics tools to understand visitor behavior, improve performance, and enhance user experience. Users may manage cookie preferences through their browser settings.",
  },
  {
    title: "7. Information Sharing",
    body: "We do not sell personal information. Information may be shared: With trusted service providers assisting in service delivery. When required by law, regulation, or legal process. During business restructuring, mergers, acquisitions, or asset transfers. With client-authorized third-party integrations.",
  },
  {
    title: "8. Your Rights",
    body: "Depending on applicable laws, users may have rights to: Access personal information. Request correction of inaccurate information. Request deletion of information where legally permissible. Withdraw consent where applicable.",
  },
  {
    title: "9. Children's Privacy",
    body: "Our services are not directed toward individuals under the age of 18. We do not knowingly collect personal information from children.",
  },
  {
    title: "10. International Data Transfers",
    body: "Where required for service delivery, information may be processed and stored in locations outside your country, subject to appropriate safeguards.",
  },
  {
    title: "11. Changes to This Policy",
    body: "We may update this Privacy Policy periodically. Updated versions will be published on our website with a revised effective date.",
  },
  {
    title: "12. Contact Information",
    body: "Company Name: MR TECH SOLUTION PVT LTD\nBrand Name: Macropage\nWebsite: macropage.in\nEmail: info@macropage.in\n\nBy using our website and services, you acknowledge that you have read and understood this Privacy Policy.",
  },
];

export default function PrivacyPolicyPage() {
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
          Privacy{" "}
          <em
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            Policy
          </em>
        </h1>
        <p style={{ color: "var(--muted)" }} className="text-base max-w-xl leading-relaxed">
          Macropage is a brand operated by MR TECH SOLUTION PVT LTD. This policy explains how
          we collect, use, store, disclose, and protect your information.
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
