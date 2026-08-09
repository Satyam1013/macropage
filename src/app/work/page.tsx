"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { workPageProjects as projects } from "@/data/projects";

const categories = Array.from(new Set(projects.map((p) => p.category)));

const filters = [
  { label: "ALL", count: projects.length },
  ...categories.map((c) => ({
    label: c,
    count: projects.filter((p) => p.category === c).length,
  })),
];

export default function WorkPage() {
  const [active, setActive] = useState("ALL");

  const filtered =
    active === "ALL" ? projects : projects.filter((p) => p.category === active);

  return (
    <main style={{ background: "var(--bg)" }}>
      {/* ── Hero Header ── */}
      <section className="px-6 sm:px-10 pt-16 pb-10">
        <p
          style={{ color: "var(--muted)" }}
          className="text-xs tracking-widest uppercase mb-4"
        >
          [ 02 ] Selected Work
        </p>
        <h1
          style={{
            fontFamily: "var(--font-bebas)",
            color: "var(--text)",
            lineHeight: 0.9,
          }}
          className="text-[clamp(5rem,14vw,12rem)] tracking-wide"
        >
          Our{" "}
          <em style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>
            Work
          </em>
        </h1>
      </section>

      {/* ── Filter pills ── */}
      <div
        className="px-6 sm:px-10 pb-8 flex flex-wrap gap-3"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        {filters.map((f) => (
          <button
            key={f.label}
            onClick={() => setActive(f.label)}
            style={{
              background: active === f.label ? "var(--btn-bg)" : "transparent",
              color: active === f.label ? "var(--btn-text)" : "var(--text)",
              border: `1px solid ${active === f.label ? "var(--btn-bg)" : "var(--border)"}`,
            }}
            className="text-xs font-semibold uppercase tracking-widest px-5 py-2.5 rounded-full transition-all hover:opacity-80"
          >
            {f.label}{" "}
            <span style={{ opacity: 0.6 }} className="font-normal">
              ({f.count})
            </span>
          </button>
        ))}
      </div>

      {/* ── Projects grid ── */}
      <div className="px-6 sm:px-10 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-12"
          >
            {filtered.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={`/work/${p.slug}`}
                  aria-label={`View ${p.name} project`}
                  className="group block"
                >
                  <div
                    style={{ background: p.color }}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                  >
                    <Image
                      src={p.image}
                      alt={`${p.name} project screenshot`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex items-start justify-between mt-4">
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-bebas)",
                          color: "var(--text)",
                          lineHeight: 1,
                        }}
                        className="text-3xl sm:text-4xl tracking-wide"
                      >
                        {p.name}
                      </h3>
                      <p style={{ color: "var(--muted)" }} className="text-sm mt-1">
                        {p.tags}
                      </p>
                    </div>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        border: "1px solid var(--border)",
                        color: "var(--muted)",
                      }}
                      className="flex items-center justify-center flex-shrink-0 text-lg group-hover:bg-[var(--text)] group-hover:border-[var(--text)] group-hover:text-[var(--bg)] transition-all"
                    >
                      →
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="py-32 text-center">
            <p style={{ color: "var(--muted)" }} className="text-sm">
              No projects in this category yet.
            </p>
          </div>
        )}
      </div>

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
            <em style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>
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
