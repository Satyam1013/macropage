"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="px-10 pt-16 pb-12">
      {/* Top row */}
      <div className="flex justify-between items-start mb-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ color: "var(--muted)" }}
          className="text-xs tracking-widest uppercase"
        >
          [ 01 ] We Build Digital Products
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ color: "var(--muted)" }}
          className="text-xs max-w-[220px] text-right leading-relaxed"
        >
          From idea to scale — web, apps, AI, cloud & automation. All under one roof.
        </motion.p>
      </div>

      {/* Giant headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
        style={{
          fontFamily: "var(--font-bebas)",
          color: "var(--text)",
          lineHeight: 0.92,
          letterSpacing: "-1px",
        }}
        className="text-[clamp(5rem,13vw,10rem)]"
      >
        Strategy,
        <br />
        <em
          style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          className="text-[0.85em]"
        >
          Design,
        </em>
        <br />
        Performance
      </motion.h1>

      {/* Bottom row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex justify-between items-end mt-10 flex-wrap gap-6"
      >
        <p style={{ color: "var(--muted)" }} className="text-base max-w-sm leading-relaxed">
          We are a tech studio that helps businesses build bold digital products — fast, scalable,
          and designed to grow.
        </p>
        <Link
          href="/contact"
          style={{ background: "var(--btn-bg)", color: "var(--btn-text)" }}
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold hover:opacity-80 transition-all"
        >
          Start a Project →
        </Link>
      </motion.div>
    </section>
  );
}
