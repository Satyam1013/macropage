"use client";

import Link from "next/link";
import WorkScrollShowcase from "@/components/sections/WorkScrollShowcase";

export default function WorkPage() {
  return (
    <main style={{ background: "var(--bg)" }}>
      {/* ── Hero Header ── */}
      <section className="px-6 sm:px-10 pt-16 pb-0">
        <p
          style={{ color: "var(--muted)" }}
          className="text-xs tracking-widest uppercase mb-4"
        >
          [ 02 ] Selected Work
        </p>
        <div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-10"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <h1
            style={{
              fontFamily: "var(--font-bebas)",
              color: "var(--text)",
              lineHeight: 0.9,
            }}
            className="text-[clamp(5rem,14vw,12rem)] tracking-wide"
          >
            Our{" "}
            <em
              style={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
              }}
            >
              Work
            </em>
          </h1>
          <p
            style={{ color: "var(--muted)" }}
            className="text-base max-w-xs leading-relaxed pb-2"
          >
            Where ideas turn into products — digital experiences that resonate
            and grow.
          </p>
        </div>
      </section>

      {/* ── Scroll-driven project showcase ── */}
      <WorkScrollShowcase />

      {/* ── Bottom CTA ── */}
      <section
        style={{
          borderTop: "1px solid var(--border)",
          background: "var(--text)",
          color: "var(--bg)",
        }}
        className="px-6 sm:px-10 py-16 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
      >
        <div>
          <p className="text-xs tracking-widest uppercase mb-3 opacity-50">
            Have a project in mind?
          </p>
          <h2
            style={{ fontFamily: "var(--font-bebas)", lineHeight: 0.95 }}
            className="text-[clamp(2.5rem,6vw,5rem)] tracking-wide"
          >
            Let&apos;s Build{" "}
            <em
              style={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
              }}
            >
              Together.
            </em>
          </h2>
        </div>
        <Link
          href="/contact"
          style={{
            background: "var(--bg)",
            color: "var(--text)",
            borderRadius: 999,
          }}
          className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold hover:opacity-80 transition-all flex-shrink-0"
        >
          Start a Project →
        </Link>
      </section>
    </main>
  );
}
