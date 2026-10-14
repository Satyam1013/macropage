"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="px-5 sm:px-8 lg:px-10 pt-14 sm:pt-16 pb-12 relative">
      {/* Backdrop — shown at full strength (not fogged with the page's own
          background), so the hero text below is hardcoded light/white
          rather than following the site's light/dark theme toggle; this
          section always reads as a dark, image-backed hero. Pulled up by
          exactly how far this section's own top edge sits from the very
          top of the page (i.e. the floating navbar's own reserved height —
          48px mobile, 64px desktop) so the image also shows behind the
          navbar instead of leaving the page's plain background showing
          through that gap. */}
      <div className="absolute inset-x-0 -top-12 bottom-0 overflow-hidden sm:-top-16">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/landing-bg.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.12)" }} />
      </div>

      {/* Top row */}
      <div className="flex justify-between items-start mb-8 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ color: "rgba(255,255,255,0.75)" }}
          className="text-xs tracking-widest uppercase max-w-[140px] sm:max-w-none"
        >
          [ 01 ] We Build Digital Products
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ color: "rgba(255,255,255,0.75)" }}
          className="text-xs max-w-[220px] text-right leading-relaxed"
        >
          From idea to scale — web, apps, AI, cloud & automation. All under one
          roof.
        </motion.p>
      </div>

      {/* Main content + illustration side by side */}
      <div className="relative flex items-center">
        {/* Left — headline */}
        <div className="relative z-10 flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
            style={{
              fontFamily: "var(--font-bebas)",
              color: "#ffffff",
              lineHeight: 0.92,
              letterSpacing: "-1px",
            }}
            className="text-[clamp(5rem,13vw,10rem)]"
          >
            Strategy,
            <br />
            <em
              style={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
              }}
              className="text-[0.85em]"
            >
              Design,
            </em>
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #4d7dfa, #1c76f2)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Performance
            </span>
          </motion.h1>
        </div>
      </div>

      {/* Bottom row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex justify-between items-end mt-10 flex-wrap gap-6 relative z-10"
      >
        <div className="flex flex-col gap-5">
          <p
            style={{ color: "rgba(255,255,255,0.8)" }}
            className="text-base max-w-sm leading-relaxed"
          >
            We are a tech studio that pairs strategy, design, and performance —
            helping businesses build bold digital products that are fast, scalable,
            and built to grow.
          </p>
          <Link
            href="/work"
            style={{ color: "rgba(255,255,255,0.9)" }}
            className="inline-flex items-center gap-3 w-fit group"
          >
            <span
              style={{ border: "1px solid rgba(255,255,255,0.5)" }}
              className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-colors group-hover:border-white"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M2 1.2v9.6a.6.6 0 00.92.51l7.6-4.8a.6.6 0 000-1.02l-7.6-4.8A.6.6 0 002 1.2z" />
              </svg>
            </span>
            <span
              style={{ borderColor: "rgba(255,255,255,0.5)" }}
              className="border-b pb-1 text-xs font-medium uppercase tracking-widest transition-colors group-hover:border-white"
            >
              Watch Our Work
            </span>
          </Link>
        </div>
        <Link
          href="/contact"
          style={{ background: "var(--btn-bg)", color: "var(--btn-text)" }}
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold transition-all relative overflow-hidden group active:scale-95"
        >
          <span
            style={{ background: "var(--accent)" }}
            className="absolute inset-0 w-full translate-y-full group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-300 ease-out rounded-full"
          />
          <span className="relative z-10">Start a Project →</span>
        </Link>
      </motion.div>
    </section>
  );
}
