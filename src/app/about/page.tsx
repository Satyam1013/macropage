export default function AboutPage() {
  return (
    <section className="px-10 py-16 max-w-3xl mx-auto">
      <p
        style={{ color: "var(--muted)" }}
        className="text-xs tracking-widest uppercase mb-2"
      >
        Who We Are
      </p>
      <h1
        style={{
          fontFamily: "var(--font-bebas)",
          color: "var(--text)",
          lineHeight: 0.95,
        }}
        className="text-[clamp(3rem,8vw,6rem)] tracking-wide mb-10"
      >
        We Build
        <br />
        <em style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>
          Bold
        </em>{" "}
        Products.
      </h1>
      <p
        style={{ color: "var(--muted)" }}
        className="text-base leading-relaxed mb-4"
      >
        MacroPage is a tech studio based in Aligarh, India. We partner with
        startups and businesses to build digital products that stand out — fast,
        scalable, and designed to grow.
      </p>
      <p
        style={{ color: "var(--muted)" }}
        className="text-base leading-relaxed"
      >
        We don&apos;t just write code. We think about your users, your goals,
        and your growth — then build the right solution.
      </p>
    </section>
  );
}
