import Link from "next/link";

export default function CtaSection() {
  return (
    <section
      style={{ background: "var(--text)", color: "var(--bg)" }}
      className="px-10 py-24 text-center"
    >
      <h2
        style={{
          fontFamily: "var(--font-bebas)",
          lineHeight: 0.95,
          letterSpacing: "0.5px",
        }}
        className="text-[clamp(3.5rem,10vw,8rem)] mb-6"
      >
        So, are you ready
        <br />
        to{" "}
        <em style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>
          Stand Out?
        </em>
      </h2>

      <p style={{ opacity: 0.5 }} className="text-base mb-10">
        Build it once. Build it right.
      </p>

      <Link
        href="/contact"
        style={{ background: "var(--bg)", color: "var(--text)" }}
        className="inline-block px-10 py-4 rounded-full text-sm font-semibold hover:opacity-80 transition-all"
      >
        Let&apos;s Talk →
      </Link>

      <p style={{ opacity: 0.4 }} className="text-sm mt-6">
        New Business: hello@macropage.in
      </p>
    </section>
  );
}
