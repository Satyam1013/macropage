"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  { num: "01", name: "Web Development", desc: "Next.js, React, Node.js — fast, SEO-optimized, scalable web apps." },
  { num: "02", name: "App Development", desc: "iOS & Android apps built with React Native & Flutter." },
  { num: "03", name: "AI Integration", desc: "LLMs, chatbots, recommendation engines — AI that works for you." },
  { num: "04", name: "Business Automation", desc: "Automate workflows, integrate tools, save hundreds of hours." },
  { num: "05", name: "UI/UX Designing", desc: "Figma-first, pixel-perfect designs that look great and convert." },
  { num: "06", name: "Cloud Services", desc: "AWS, GCP, Docker, CI/CD — infrastructure built to scale." },
];

export default function ServicesSection() {
  return (
    <section style={{ background: "var(--bg2)" }} className="px-10 py-16">
      {/* Header */}
      <div
        style={{ borderBottom: "1px solid var(--border)" }}
        className="flex justify-between items-end pb-4 mb-4 flex-wrap gap-3"
      >
        <div>
          <p style={{ color: "var(--muted)" }} className="text-xs tracking-widest uppercase mb-2">
            [ 03 ] What We Do
          </p>
          <h2
            style={{ fontFamily: "var(--font-bebas)", color: "var(--text)", lineHeight: 1 }}
            className="text-[clamp(2.5rem,6vw,4.5rem)] tracking-wide"
          >
            Services
          </h2>
        </div>
        <Link
          href="/services"
          style={{ color: "var(--muted)", borderBottom: "1px solid var(--border)" }}
          className="text-sm pb-0.5 hover:opacity-100 transition-all"
        >
          See All Services →
        </Link>
      </div>

      {/* Rows */}
      {services.map((s, i) => (
        <motion.div
          key={s.num}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07 }}
        >
          <Link href="/services" className="block group">
            <div
              style={{ borderBottom: "1px solid var(--border)" }}
              className="flex items-center justify-between py-5 transition-all duration-200 group-hover:pl-2"
            >
              <div className="flex items-center gap-6">
                <span style={{ color: "var(--muted)" }} className="text-xs w-6">
                  {s.num}
                </span>
                <span
                  style={{ fontFamily: "var(--font-bebas)", color: "var(--text)", lineHeight: 1 }}
                  className="text-[clamp(1.8rem,4vw,2.8rem)] tracking-wide"
                >
                  {s.name}
                </span>
              </div>
              <span style={{ color: "var(--muted)" }} className="text-sm max-w-[260px] text-right leading-relaxed hidden md:block">
                {s.desc}
              </span>
              <span
                style={{ color: "var(--muted)" }}
                className="text-lg ml-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
              >
                ↗
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </section>
  );
}
