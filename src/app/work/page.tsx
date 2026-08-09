"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { workPageProjects as projects } from "@/data/projects";

const categories = Array.from(new Set(projects.map((p) => p.category)));

const filters = [
  { label: "ALL", count: projects.length },
  ...categories.map((c) => ({
    label: c,
    count: projects.filter((p) => p.category === c).length,
  })),
];

function ProjectRow({
  p,
  index,
  isActive,
  onActivate,
}: {
  p: (typeof projects)[number];
  index: number;
  isActive: boolean;
  onActivate: (i: number) => void;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  // Fires when this row crosses the vertical center band of the viewport —
  // the classic "scroll-spy" trigger, so the image panel updates purely
  // from scroll position (works identically on touch and desktop, unlike
  // a hover-only interaction).
  const inCenter = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (inCenter) onActivate(index);
  }, [inCenter, index, onActivate]);

  return (
    <Link
      ref={ref}
      href={`/work/${p.slug}`}
      aria-label={`View ${p.name} project`}
      style={{ borderTop: index === 0 ? "1px solid var(--border)" : undefined, borderBottom: "1px solid var(--border)" }}
      className="group flex items-center justify-between py-7 sm:py-9"
    >
      <div className="flex items-baseline gap-4 sm:gap-6 min-w-0">
        <span
          style={{ fontFamily: "var(--font-bebas)", color: isActive ? "var(--accent)" : "var(--border)" }}
          className="text-lg sm:text-xl flex-shrink-0 transition-colors duration-400"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3
          style={{
            fontFamily: "var(--font-bebas)",
            color: "var(--text)",
            lineHeight: 1,
          }}
          className="text-[clamp(1.7rem,3.6vw,2.75rem)] tracking-wide transition-all duration-400"
        >
          {p.name}
        </h3>
      </div>

      {/* Mobile-only inline thumbnail — no sticky split-view on narrow screens */}
      <div
        style={{ background: p.color }}
        className="lg:hidden relative h-14 w-20 flex-shrink-0 overflow-hidden ml-4"
      >
        <Image src={p.image} alt="" fill sizes="80px" className="object-cover object-top" />
      </div>

      <span
        style={{
          border: "1px solid var(--border)",
          color: isActive ? "var(--bg)" : "var(--muted)",
          background: isActive ? "var(--text)" : "transparent",
          borderColor: isActive ? "var(--text)" : "var(--border)",
        }}
        className="hidden lg:flex h-11 w-11 items-center justify-center text-lg flex-shrink-0 transition-all duration-400"
      >
        ↗
      </span>
    </Link>
  );
}

export default function WorkPage() {
  const [active, setActive] = useState("ALL");
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered =
    active === "ALL" ? projects : projects.filter((p) => p.category === active);

  const activeProject = filtered[activeIndex] ?? filtered[0];

  const handleFilter = (label: string) => {
    setActive(label);
    setActiveIndex(0);
  };

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

      {/* ── Filter tabs ── */}
      <div
        className="px-6 sm:px-10 flex flex-wrap"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        {filters.map((f) => (
          <button
            key={f.label}
            onClick={() => handleFilter(f.label)}
            style={{
              color: active === f.label ? "var(--text)" : "var(--muted)",
              fontWeight: active === f.label ? 600 : 400,
              borderRight: "1px solid var(--border)",
              position: "relative",
            }}
            className="text-xs uppercase tracking-widest px-6 py-5 transition-all hover:opacity-100"
          >
            {f.label}{" "}
            <span style={{ opacity: 0.6 }} className="font-normal">
              ({f.count})
            </span>
            {active === f.label && (
              <span
                style={{ background: "var(--text)" }}
                className="absolute bottom-0 left-0 right-0 h-[2px]"
              />
            )}
          </button>
        ))}
      </div>

      {/* ── Split view: sticky image panel (scroll-linked) + project list ── */}
      <div className="px-6 sm:px-10 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Left — sticky image, swaps as the active row changes on scroll */}
        <div className="hidden lg:block relative">
          <div className="sticky top-28 h-[65vh]">
            <AnimatePresence mode="wait">
              {activeProject && (
                <motion.div
                  key={activeProject.slug}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ background: activeProject.color }}
                  className="relative h-full w-full overflow-hidden"
                >
                  <Image
                    src={activeProject.image}
                    alt={`${activeProject.name} project screenshot`}
                    fill
                    sizes="50vw"
                    priority
                    className="object-cover object-top"
                  />
                  <div
                    style={{ background: activeProject.color }}
                    className="absolute inset-x-0 bottom-0 px-6 py-5 flex items-center justify-between"
                  >
                    <span className="text-xs font-semibold tracking-widest text-white/70 uppercase">
                      {activeProject.tags}
                    </span>
                    <span className="text-xs font-semibold tracking-widest text-white/70">
                      {String(activeIndex + 1).padStart(2, "0")} / {String(filtered.length).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right — project list */}
        <div>
          {filtered.map((p, i) => (
            <ProjectRow
              key={p.slug}
              p={p}
              index={i}
              isActive={i === activeIndex}
              onActivate={setActiveIndex}
            />
          ))}

          {filtered.length === 0 && (
            <div className="py-32 text-center">
              <p style={{ color: "var(--muted)" }} className="text-sm">
                No projects in this category yet.
              </p>
            </div>
          )}
        </div>
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
