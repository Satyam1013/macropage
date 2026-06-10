"use client";

import Link from "next/link";
import { pageServices as services } from "@/data/services-page";

export default function ServicesPage() {
  return (
    <main>
      {/* ── Header ── */}
      <section
        style={{ borderBottom: "1px solid var(--border)" }}
        className="px-6 sm:px-10 pt-14 pb-10"
      >
        <p
          style={{ color: "var(--muted)" }}
          className="text-xs tracking-widest uppercase mb-3"
        >
          [ 03 ] What We Do
        </p>
        <h1
          style={{
            fontFamily: "var(--font-bebas)",
            color: "var(--text)",
            lineHeight: 0.9,
          }}
          className="text-[clamp(4rem,12vw,10rem)] tracking-wide"
        >
          Our{" "}
          <em
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            Services
          </em>
        </h1>
      </section>

      {/* ── Stacking scroll sections ── */}
      {services.map((s, i) => {
        const { Illustration } = s;
        return (
          <div
            key={s.num}
            style={{
              position: "sticky",
              top: "60px",
              zIndex: i + 1,
              background: "var(--bg)",
              borderBottom: "1px solid var(--border)",
              minHeight: "calc(100vh - 60px)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_320px] h-full min-h-[calc(100vh-60px)]">
              {/* ── Col 1 — Service list ── */}
              <aside
                style={{ borderRight: "1px solid var(--border)" }}
                className="px-6 sm:px-8 py-10 hidden lg:block"
              >
                <div
                  style={{
                    fontFamily: "var(--font-bebas)",
                    color: "var(--text)",
                    fontSize: "clamp(3rem,5vw,4rem)",
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </div>
                <div className="flex flex-col mt-4 gap-1">
                  {services.map((item) => (
                    <span
                      key={item.num}
                      style={{
                        color:
                          item.num === s.num ? "var(--text)" : "var(--muted)",
                        fontWeight: item.num === s.num ? 500 : 400,
                      }}
                      className="text-xs uppercase tracking-widest py-1"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </aside>

              {/* ── Col 2 — Detail ── */}
              <section className="px-6 sm:px-10 py-10">
                <p
                  style={{ color: "var(--muted)" }}
                  className="text-xs font-mono mb-3 lg:hidden"
                >
                  {s.num}
                </p>

                <h2
                  style={{
                    fontFamily: "var(--font-bebas)",
                    color: "var(--text)",
                    lineHeight: 0.92,
                  }}
                  className="text-[clamp(2.5rem,6vw,5rem)] tracking-wide mb-6"
                >
                  {s.name.toUpperCase()}
                </h2>

                <p
                  style={{ color: "var(--muted)" }}
                  className="text-sm leading-relaxed max-w-xl mb-8"
                >
                  {s.detail}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {s.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        border: "1px solid var(--border)",
                        color: "var(--muted)",
                      }}
                      className="text-xs px-3 py-1.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* ✅ Illustration — placeholder replace */}
                <div
                  style={{
                    background: "var(--bg2)",
                    border: "1px solid var(--border)",
                    borderRadius: 16,
                    height: 500,
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "2rem",
                    color: "var(--accent)",
                  }}
                >
                  <Illustration />
                </div>
              </section>

              {/* ── Col 3 — Process ── */}
              <aside
                style={{ borderLeft: "1px solid var(--border)" }}
                className="px-6 sm:px-8 py-10 hidden lg:flex flex-col justify-between"
              >
                <div>
                  <p
                    style={{ color: "var(--muted)" }}
                    className="text-xs tracking-widest uppercase mb-6"
                  >
                    Our Process
                  </p>
                  <div className="flex flex-col">
                    {s.process.map((step, j) => (
                      <div
                        key={j}
                        style={{ borderBottom: "1px solid var(--border)" }}
                        className="py-4 flex items-center gap-4"
                      >
                        <span
                          style={{ color: "var(--muted)" }}
                          className="text-xs font-mono flex-shrink-0"
                        >
                          {String(j + 1).padStart(2, "0")}
                        </span>
                        <span
                          style={{ color: "var(--text)" }}
                          className="text-xs uppercase tracking-wide"
                        >
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA — only on last service */}
                {i === services.length - 1 && (
                  <Link
                    href="/contact"
                    style={{
                      background: "var(--btn-bg)",
                      color: "var(--btn-text)",
                    }}
                    className="mt-10 w-full text-center py-4 rounded-xl text-sm font-semibold transition-all relative overflow-hidden group block"
                  >
                    <span
                      style={{ background: "var(--accent)" }}
                      className="absolute inset-0 w-full translate-y-full group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-300 ease-out rounded-xl"
                    />
                    <span className="relative z-10">
                      Let&apos;s Build Together →
                    </span>
                  </Link>
                )}
              </aside>
            </div>
          </div>
        );
      })}
    </main>
  );
}
