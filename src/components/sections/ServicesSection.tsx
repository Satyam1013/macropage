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
            background: "var(--bg)",
            border: "1px solid var(--border)",
            borderRadius: 20,
            minHeight: 320,
            position: "relative",
            overflow: "hidden",
          }}
          className="p-8 flex flex-col justify-between h-full transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl"
        >
          {/* Icon */}
          <div
            style={{
              color: "var(--accent)",
              width: 90,
              height: 90,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="mb-12 [&>svg]:w-24 [&>svg]:h-24"
          >
            {service.icon}
          </div>

          <div>
            <h3
              style={{ color: "var(--text)" }}
              className="text-xl font-semibold mb-3 leading-tight"
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
    <section style={{ background: "var(--bg2)" }} className="px-10 py-24">
      <div
        style={{ borderBottom: "1px solid var(--border)" }}
        className="flex justify-between items-end pb-4 mb-10 flex-wrap gap-3"
      >
        <div>
          <p
            style={{ color: "var(--muted)" }}
            className="text-xs tracking-widest uppercase mb-2"
          >
            [ 03 ] What We Do
          </p>
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              color: "var(--text)",
              lineHeight: 1,
            }}
            className="text-[clamp(2.5rem,6vw,4.5rem)] tracking-wide"
          >
            Services
          </h2>
        </div>
        <Link
          href="/services"
          style={{
            color: "var(--muted)",
            borderBottom: "1px solid var(--border)",
          }}
          className="text-sm pb-0.5 hover:opacity-100 transition-all"
        >
          See All Services →
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
