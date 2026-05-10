"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  { slug: "shopease", name: "ShopEase", year: "2025", category: "E-Commerce", tags: "Web App · UI/UX", color: "#e2dfd8" },
  { slug: "finbot-ai", name: "FinBot AI", year: "2025", category: "Fintech", tags: "AI Integration · Automation", color: "#d8dce2" },
  { slug: "carelink", name: "CareLink", year: "2025", category: "Healthcare", tags: "Mobile App · Cloud", color: "#dde2d8" },
  { slug: "logidash", name: "LogiDash", year: "2025", category: "Logistics", tags: "Dashboard · Automation", color: "#e2d8dc" },
];

export default function WorkSection() {
  return (
    <section className="px-10 py-16">
      {/* Header */}
      <div
        style={{ borderBottom: "1px solid var(--border)" }}
        className="flex justify-between items-end pb-4 mb-10 flex-wrap gap-3"
      >
        <div>
          <p style={{ color: "var(--muted)" }} className="text-xs tracking-widest uppercase mb-2">
            [ 02 ] Selected Work
          </p>
          <h2
            style={{ fontFamily: "var(--font-bebas)", color: "var(--text)", lineHeight: 1 }}
            className="text-[clamp(2.5rem,6vw,4.5rem)] tracking-wide"
          >
            Our Projects
          </h2>
        </div>
        <Link
          href="/work"
          style={{ color: "var(--muted)", borderBottom: "1px solid var(--border)" }}
          className="text-sm pb-0.5 hover:opacity-100 transition-all"
        >
          See All Projects →
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link href={`/work/${p.slug}`} className="block group">
              <div
                style={{ background: p.color, borderRadius: 12 }}
                className="aspect-[4/3] relative overflow-hidden mb-3 transition-transform duration-300 group-hover:scale-[1.01]"
              >
                {/* Placeholder — replace with actual project image */}
                <div
                  style={{ fontFamily: "var(--font-bebas)", color: "rgba(0,0,0,0.1)" }}
                  className="absolute inset-0 flex items-center justify-center text-8xl"
                >
                  {p.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="absolute inset-0 flex items-end p-5">
                  <div>
                    <p style={{ color: "rgba(0,0,0,0.5)" }} className="text-xs mb-1 tracking-wide">
                      {p.year} · {p.category}
                    </p>
                    <h3
                      style={{ fontFamily: "var(--font-bebas)", color: "#111", lineHeight: 1 }}
                      className="text-3xl tracking-wide"
                    >
                      {p.name}
                    </h3>
                    <p style={{ color: "rgba(0,0,0,0.5)" }} className="text-xs mt-1">
                      {p.tags}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
