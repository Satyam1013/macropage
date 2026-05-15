"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    slug: "shopease",
    name: "ShopEase",
    year: "2025",
    category: "E-Commerce",
    filter: "WEB APP",
    tags: "Web App · UI/UX",
    color: "#e8e4dc",
    aspect: "aspect-[4/3]",
    span: "col-span-2",
  },
  {
    slug: "finbot-ai",
    name: "FinBot AI",
    year: "2025",
    category: "Fintech",
    filter: "AI",
    tags: "AI Integration",
    color: "#dce0e8",
    aspect: "aspect-[3/4]",
    span: "col-span-1",
  },
  {
    slug: "carelink",
    name: "CareLink",
    year: "2025",
    category: "Healthcare",
    filter: "MOBILE APP",
    tags: "Mobile App · Cloud",
    color: "#dce8e0",
    aspect: "aspect-[3/4]",
    span: "col-span-1",
  },
  {
    slug: "logidash",
    name: "LogiDash",
    year: "2025",
    category: "Logistics",
    filter: "WEB APP",
    tags: "Dashboard · Automation",
    color: "#e8dce0",
    aspect: "aspect-[4/3]",
    span: "col-span-2",
  },
  {
    slug: "rideswift",
    name: "RideSwift",
    year: "2025",
    category: "Transport",
    filter: "MOBILE APP",
    tags: "Mobile App · Flutter",
    color: "#e8e8dc",
    aspect: "aspect-[4/3]",
    span: "col-span-1",
  },
  {
    slug: "datastack",
    name: "DataStack",
    year: "2025",
    category: "SaaS",
    filter: "AI",
    tags: "Cloud · AI Integration",
    color: "#dce8e8",
    aspect: "aspect-[4/3]",
    span: "col-span-1",
  },
  {
    slug: "edureach",
    name: "EduReach",
    year: "2025",
    category: "EdTech",
    filter: "WEB APP",
    tags: "Web App · UI/UX",
    color: "#e8dce8",
    aspect: "aspect-[4/3]",
    span: "col-span-1",
  },
  {
    slug: "quickbite",
    name: "QuickBite",
    year: "2025",
    category: "Food Tech",
    filter: "MOBILE APP",
    tags: "Mobile App · Automation",
    color: "#e8e0dc",
    aspect: "aspect-[4/3]",
    span: "col-span-1",
  },
];

const filters = [
  { label: "ALL", count: projects.length },
  {
    label: "WEB APP",
    count: projects.filter((p) => p.filter === "WEB APP").length,
  },
  {
    label: "MOBILE APP",
    count: projects.filter((p) => p.filter === "MOBILE APP").length,
  },
  { label: "AI", count: projects.filter((p) => p.filter === "AI").length },
];

export default function WorkPage() {
  const [active, setActive] = useState("ALL");

  const filtered =
    active === "ALL" ? projects : projects.filter((p) => p.filter === active);

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

      {/* ── Filter tabs ── */}
      <div
        className="px-6 sm:px-10 py-0 flex flex-wrap"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        {filters.map((f) => (
          <button
            key={f.label}
            onClick={() => setActive(f.label)}
            style={{
              borderRight: "1px solid var(--border)",
              color: active === f.label ? "var(--text)" : "var(--muted)",
              fontWeight: active === f.label ? 600 : 400,
              position: "relative",
            }}
            className="text-xs uppercase tracking-widest px-6 py-5 transition-all hover:opacity-100 flex items-center gap-2"
          >
            {f.label}
            <span
              style={{
                background:
                  active === f.label ? "var(--text)" : "var(--border)",
                color: active === f.label ? "var(--bg)" : "var(--muted)",
                borderRadius: 999,
                fontSize: "0.65rem",
                padding: "1px 7px",
                transition: "all 0.2s",
              }}
            >
              {f.count}
            </span>
            {active === f.label && (
              <span
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: "var(--text)",
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* ── Projects Grid ── */}
      <div className="px-6 sm:px-10 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {filtered.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.06,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={
                  p.span === "col-span-2" ? "lg:col-span-2" : "col-span-1"
                }
              >
                <Link href={`/work/${p.slug}`} className="block group">
                  {/* Image area */}
                  <div
                    style={{
                      background: p.color,
                      borderRadius: 12,
                      overflow: "hidden",
                      position: "relative",
                    }}
                    className={`${p.aspect} transition-all duration-500`}
                  >
                    {/* Big letters */}
                    <div
                      style={{
                        fontFamily: "var(--font-bebas)",
                        color: "rgba(0,0,0,0.06)",
                        fontSize: "clamp(6rem,18vw,14rem)",
                        lineHeight: 1,
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        userSelect: "none",
                      }}
                    >
                      {p.name.slice(0, 2).toUpperCase()}
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-400 flex items-center justify-center">
                      <span
                        style={{
                          background: "rgba(0,0,0,0.85)",
                          color: "#fff",
                          borderRadius: 999,
                        }}
                        className="text-xs px-5 py-2.5 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                      >
                        View Project →
                      </span>
                    </div>
                  </div>

                  {/* Info below image — dzinrstudio style */}
                  <div className="flex items-start justify-between mt-3 px-1">
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-bebas)",
                          color: "var(--text)",
                          lineHeight: 1,
                        }}
                        className="text-2xl tracking-wide"
                      >
                        {p.name}
                      </h3>
                      <p
                        style={{ color: "var(--muted)" }}
                        className="text-xs mt-1"
                      >
                        {p.category}
                      </p>
                    </div>
                    {/* Arrow button */}
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        border: "1px solid var(--border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--muted)",
                        fontSize: "1rem",
                        transition: "all 0.2s",
                      }}
                      className="group-hover:bg-[var(--text)] group-hover:border-[var(--text)] group-hover:text-[var(--bg)] flex-shrink-0 mt-0.5"
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
