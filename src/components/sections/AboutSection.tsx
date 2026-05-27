"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { num: "120+", label: "Projects Done" },
  { num: "50+", label: "Happy Clients" },
  { num: "5+", label: "Years Exp." },
];

export default function AboutSection() {
  return (
    <section className="px-10 py-16">
      <p style={{ color: "var(--muted)" }} className="text-xs tracking-widest uppercase mb-10">
        [ 04 ] Who We Are
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Big text left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            style={{ fontFamily: "var(--font-bebas)", color: "var(--text)", lineHeight: 0.95 }}
            className="text-[clamp(3rem,8vw,6rem)] tracking-wide"
          >
            Designing
            <br />
            <em style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontSize: "0.9em" }}>
              Iconic
            </em>
            <br />
            Products
            <br />
            Daily.
          </h2>
        </motion.div>

        {/* Right content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <p style={{ color: "var(--muted)" }} className="text-base leading-relaxed mb-4">
            MacroPage is a tech studio based in Raigarh, India. We partner with startups, founders,
            and businesses to build digital products that stand out — products that are bold,
            functional, and built to last.
          </p>
          <p style={{ color: "var(--muted)" }} className="text-base leading-relaxed mb-8">
            We don&apos;t just write code. We think about your users, your goals, and your growth —
            then build the right solution.
          </p>

          {/* Stats */}
          <div className="flex gap-8 flex-wrap mb-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p
                  style={{ fontFamily: "var(--font-bebas)", color: "var(--text)", lineHeight: 1 }}
                  className="text-5xl"
                >
                  {s.num}
                </p>
                <p style={{ color: "var(--muted)" }} className="text-xs mt-1 tracking-wide">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            style={{ color: "var(--muted)", borderBottom: "1px solid var(--border)" }}
            className="text-sm pb-0.5 hover:opacity-100 transition-all"
          >
            Learn More →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
