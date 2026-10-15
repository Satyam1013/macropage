"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { sectionServices as services } from "@/data/services";
import { COLS } from "@/constants";

function ServiceCard({
  service,
  colIndex,
}: {
  service: (typeof services)[0];
  colIndex: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "0px 0px -150px 0px", // 👈 zyada scroll karne par trigger hoga
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }} // 👈 zyada neeche se aayega
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{
        duration: 0.8, // 👈 slow animation
        delay: isInView ? colIndex * 0.18 : (COLS - 1 - colIndex) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-full"
    >
      <Link href={`/services/${service.slug}`} className="block group h-full">
        <div
          style={{
            background: `linear-gradient(135deg,
              rgba(255,255,255,0.55),
              color-mix(in srgb, color-mix(in srgb, var(--accent) 18%, var(--card)) 55%, transparent) 45%,
              color-mix(in srgb, color-mix(in srgb, var(--accent) 42%, var(--card)) 30%, transparent))`,
            border: "1px solid rgba(255,255,255,0.55)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            borderRadius: 24,
            minHeight: 260,
            position: "relative",
            overflow: "hidden",
          }}
          className="p-7 flex flex-col justify-between h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
        >
          {/* Hover arrow */}
          <span
            style={{ border: "1px solid var(--border)", color: "var(--muted)" }}
            className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center overflow-hidden rounded-full text-sm transition-colors group-hover:border-transparent group-hover:text-[var(--bg)]"
          >
            <span
              style={{ background: "var(--text)" }}
              className="absolute inset-0 scale-0 rounded-full transition-transform duration-300 ease-out group-hover:scale-100"
            />
            <span className="relative transition-transform duration-300 group-hover:rotate-45">
              ↗
            </span>
          </span>

          {/* Icon chip */}
          <div
            style={{ background: "var(--bg)", color: "var(--accent)", borderRadius: 14 }}
            className="mb-8 flex h-14 w-14 items-center justify-center [&>svg]:h-7 [&>svg]:w-7"
          >
            {service.icon}
          </div>

          <div>
            <h3
              style={{ color: "var(--text)" }}
              className="text-lg font-semibold mb-2 leading-tight"
            >
              {service.name}
            </h3>
            <p
              style={{ color: "var(--muted)" }}
              className="text-sm leading-relaxed"
            >
              {service.desc}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ServicesSection() {
  const rows: (typeof services)[] = [];
  for (let i = 0; i < services.length; i += COLS) {
    rows.push(services.slice(i, i + COLS));
  }

  return (
    <section
      style={{
        background:
          "linear-gradient(160deg, color-mix(in srgb, var(--accent) 35%, var(--bg)), color-mix(in srgb, var(--accent) 10%, var(--bg)) 45%, var(--bg) 92%)",
      }}
      className="px-10 py-24"
    >
      <div className="flex justify-between items-end mb-14 flex-wrap gap-6">
        <div>
          <p
            style={{ color: "var(--muted)" }}
            className="text-xs tracking-widest uppercase mb-4 font-medium"
          >
            [ 03 ] What We Do
          </p>
          <h2
            style={{
              fontFamily: "var(--font-dm)",
              color: "var(--text)",
              lineHeight: 1.1,
            }}
            className="text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold tracking-tight max-w-xl"
          >
            Expertise across the digital stack.
          </h2>
        </div>
        <Link
          href="/services"
          style={{ color: "var(--text)" }}
          className="group inline-flex items-center gap-2 text-sm font-semibold"
        >
          See All Services
          <span
            style={{ border: "1px solid var(--border)", color: "var(--text)" }}
            className="relative flex h-7 w-7 flex-shrink-0 items-center justify-center overflow-hidden rounded-full text-xs transition-colors group-hover:border-transparent group-hover:text-[var(--bg)]"
          >
            <span
              style={{ background: "var(--text)" }}
              className="absolute inset-0 scale-0 rounded-full transition-transform duration-300 ease-out group-hover:scale-100"
            />
            <span className="relative transition-transform duration-300 group-hover:rotate-45">
              ↗
            </span>
          </span>
        </Link>
      </div>
      {/* Rows — each card knows its column index */}
      <div className="flex flex-col gap-5">
        {rows.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {row.map((s, colIdx) => (
              <ServiceCard key={s.num} service={s} colIndex={colIdx} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
