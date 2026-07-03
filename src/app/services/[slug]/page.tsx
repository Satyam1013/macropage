import type { Metadata } from "next";
import Link from "next/link";
import { servicesDetail as services } from "@/data/services-detail";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.macropage.in";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services[params.slug];
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.name,
    description: service.description,
    keywords: [`${service.name} India`, `${service.name} agency`, ...service.tech],
    openGraph: {
      title: `${service.name} — MacroPage`,
      description: service.tagline,
      url: `${SITE_URL}/services/${params.slug}`,
    },
    alternates: { canonical: `${SITE_URL}/services/${params.slug}` },
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services[params.slug];

  if (!service) {
    return (
      <main>
        <section
          style={{ borderBottom: "1px solid var(--border)" }}
          className="px-6 sm:px-10 pt-14 pb-10 text-center"
        >
          <h1
            style={{ fontFamily: "var(--font-bebas)", color: "var(--text)" }}
            className="text-[clamp(3rem,10vw,8rem)] tracking-wide mb-6"
          >
            Service Not Found
          </h1>
          <Link
            href="/services"
            style={{ color: "var(--muted)" }}
            className="text-sm uppercase tracking-widest hover:opacity-60 transition-opacity"
          >
            ← Back to Services
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main>
      {/* ── Hero ── */}
      <section
        style={{ borderBottom: "1px solid var(--border)" }}
        className="px-6 sm:px-10 pt-14 pb-10"
      >
        <div className="flex items-center gap-4 mb-4">
          <Link
            href="/services"
            style={{ color: "var(--muted)" }}
            className="text-xs uppercase tracking-widest hover:opacity-60 transition-opacity"
          >
            ← Services
          </Link>
          <span style={{ color: "var(--border)" }}>|</span>
          <p
            style={{ color: "var(--muted)" }}
            className="text-xs uppercase tracking-widest"
          >
            [ {service.num} ]
          </p>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-bebas)",
            color: "var(--text)",
            lineHeight: 0.9,
          }}
          className="text-[clamp(3.5rem,10vw,8rem)] tracking-wide mb-5"
        >
          {service.name}
        </h1>

        <p
          style={{
            fontFamily: "var(--font-playfair)",
            color: "var(--muted)",
            fontStyle: "italic",
          }}
          className="text-xl max-w-lg"
        >
          {service.tagline}
        </p>
      </section>

      {/* ── Description + Tech ── */}
      <section
        style={{ borderBottom: "1px solid var(--border)" }}
        className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-0"
      >
        {/* Description */}
        <div
          style={{ borderRight: "1px solid var(--border)" }}
          className="px-6 sm:px-10 py-14"
        >
          <p
            style={{ color: "var(--muted)" }}
            className="text-xs uppercase tracking-widest mb-6"
          >
            Overview
          </p>
          <p
            style={{ color: "var(--text)" }}
            className="text-base leading-relaxed max-w-2xl"
          >
            {service.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="px-6 sm:px-8 py-14">
          <p
            style={{ color: "var(--muted)" }}
            className="text-xs uppercase tracking-widest mb-6"
          >
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {service.tech.map((t) => (
              <span
                key={t}
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                  background: "var(--bg2)",
                }}
                className="text-xs px-3 py-1.5 rounded-full font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section
        style={{ borderBottom: "1px solid var(--border)" }}
        className="px-6 sm:px-10 py-14"
      >
        <p
          style={{ color: "var(--muted)" }}
          className="text-xs uppercase tracking-widest mb-10"
        >
          Our Process
        </p>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{
            border: "1px solid var(--border)",
            background: "var(--border)",
          }}
        >
          {service.process.map((step, i) => (
            <div
              key={step}
              style={{ background: "var(--bg)" }}
              className="px-6 py-8 flex flex-col gap-3"
            >
              <span
                style={{
                  fontFamily: "var(--font-bebas)",
                  color: "var(--accent)",
                  lineHeight: 1,
                }}
                className="text-3xl"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                style={{ color: "var(--text)" }}
                className="text-sm font-medium leading-snug"
              >
                {step}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Macropage Connect Product Spotlight (WhatsApp API only) ── */}
      {service.product && (
        <section
          style={{ borderBottom: "1px solid var(--border)" }}
          className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-0"
        >
          <div
            style={{
              background: "var(--bg2)",
              borderRight: "1px solid var(--border)",
            }}
            className="px-6 sm:px-8 py-14 flex flex-col justify-between gap-8"
          >
            <div>
              <p
                style={{ color: "var(--muted)" }}
                className="text-xs uppercase tracking-widest mb-4"
              >
                [ Built by us ]
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-bebas)",
                  color: "var(--text)",
                  lineHeight: 1,
                }}
                className="text-4xl tracking-wide mb-2"
              >
                {service.product.name}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "var(--muted)",
                  fontStyle: "italic",
                }}
                className="text-sm"
              >
                {service.product.tagline}
              </p>
            </div>
            <a
              href={service.product.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "var(--btn-bg)", color: "var(--btn-text)" }}
              className="inline-flex items-center justify-between px-5 py-3.5 rounded-xl text-sm font-semibold relative overflow-hidden group transition-all active:scale-95 w-full"
            >
              <span
                style={{ background: "var(--accent)" }}
                className="absolute inset-0 translate-y-full group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-300 ease-out rounded-xl"
              />
              <span className="relative z-10">Visit Platform</span>
              <span className="relative z-10">↗</span>
            </a>
          </div>

          <div className="px-6 sm:px-10 py-14">
            <p
              style={{ color: "var(--text)" }}
              className="text-base leading-relaxed mb-8"
            >
              {service.product.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { stat: "1-Click", label: "WhatsApp onboarding" },
                { stat: "360°", label: "Customer conversation view" },
                { stat: "Live", label: "Broadcast & automation" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                  }}
                  className="px-5 py-6"
                >
                  <p
                    style={{
                      fontFamily: "var(--font-bebas)",
                      color: "var(--accent)",
                      lineHeight: 1,
                    }}
                    className="text-3xl mb-1"
                  >
                    {item.stat}
                  </p>
                  <p
                    style={{ color: "var(--muted)" }}
                    className="text-xs leading-snug"
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="px-6 sm:px-10 py-16 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
        <h2
          style={{
            fontFamily: "var(--font-bebas)",
            color: "var(--text)",
            lineHeight: 0.95,
          }}
          className="text-[clamp(2.5rem,7vw,6rem)] tracking-wide"
        >
          Interested in{" "}
          <em
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            {service.name}?
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
          <span className="relative z-10">Let&apos;s Try →</span>
        </Link>
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}
