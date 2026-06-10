"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Faded tech illustration — SVG
function TechIllustration() {
  return (
    <svg
      viewBox="0 0 500 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", maxWidth: 550, opacity: 1 }}
    >
      {/* Browser window */}
      <rect
        x="60"
        y="20"
        width="380"
        height="260"
        rx="12"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect x="60" y="20" width="380" height="36" rx="12" fill="currentColor" />
      <rect x="60" y="44" width="380" height="12" fill="currentColor" />
      <circle cx="84" cy="38" r="5" fill="white" opacity="0.6" />
      <circle cx="100" cy="38" r="5" fill="white" opacity="0.6" />
      <circle cx="116" cy="38" r="5" fill="white" opacity="0.6" />
      <rect
        x="140"
        y="31"
        width="200"
        height="14"
        rx="7"
        fill="white"
        opacity="0.2"
      />

      {/* Code lines */}
      <rect
        x="88"
        y="76"
        width="60"
        height="8"
        rx="4"
        fill="currentColor"
        opacity="0.6"
      />
      <rect
        x="158"
        y="76"
        width="100"
        height="8"
        rx="4"
        fill="currentColor"
        opacity="0.3"
      />
      <rect
        x="268"
        y="76"
        width="60"
        height="8"
        rx="4"
        fill="currentColor"
        opacity="0.2"
      />

      <rect
        x="100"
        y="96"
        width="40"
        height="8"
        rx="4"
        fill="currentColor"
        opacity="0.4"
      />
      <rect
        x="150"
        y="96"
        width="140"
        height="8"
        rx="4"
        fill="currentColor"
        opacity="0.25"
      />

      <rect
        x="100"
        y="116"
        width="80"
        height="8"
        rx="4"
        fill="currentColor"
        opacity="0.5"
      />
      <rect
        x="190"
        y="116"
        width="80"
        height="8"
        rx="4"
        fill="currentColor"
        opacity="0.2"
      />
      <rect
        x="280"
        y="116"
        width="50"
        height="8"
        rx="4"
        fill="currentColor"
        opacity="0.3"
      />

      <rect
        x="88"
        y="136"
        width="60"
        height="8"
        rx="4"
        fill="currentColor"
        opacity="0.6"
      />
      <rect
        x="158"
        y="136"
        width="120"
        height="8"
        rx="4"
        fill="currentColor"
        opacity="0.2"
      />

      <rect
        x="100"
        y="156"
        width="100"
        height="8"
        rx="4"
        fill="currentColor"
        opacity="0.35"
      />
      <rect
        x="210"
        y="156"
        width="60"
        height="8"
        rx="4"
        fill="currentColor"
        opacity="0.2"
      />

      <rect
        x="100"
        y="176"
        width="60"
        height="8"
        rx="4"
        fill="currentColor"
        opacity="0.4"
      />
      <rect
        x="170"
        y="176"
        width="90"
        height="8"
        rx="4"
        fill="currentColor"
        opacity="0.25"
      />

      <rect
        x="88"
        y="196"
        width="50"
        height="8"
        rx="4"
        fill="currentColor"
        opacity="0.5"
      />
      <rect
        x="148"
        y="196"
        width="110"
        height="8"
        rx="4"
        fill="currentColor"
        opacity="0.2"
      />

      <rect
        x="100"
        y="216"
        width="80"
        height="8"
        rx="4"
        fill="currentColor"
        opacity="0.3"
      />
      <rect
        x="190"
        y="216"
        width="70"
        height="8"
        rx="4"
        fill="currentColor"
        opacity="0.2"
      />

      <rect
        x="88"
        y="236"
        width="60"
        height="8"
        rx="4"
        fill="currentColor"
        opacity="0.4"
      />
      <rect
        x="158"
        y="236"
        width="100"
        height="8"
        rx="4"
        fill="currentColor"
        opacity="0.2"
      />

      {/* Phone mockup */}
      <rect
        x="310"
        y="180"
        width="100"
        height="180"
        rx="14"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="318"
        y="196"
        width="84"
        height="140"
        rx="4"
        fill="currentColor"
        opacity="0.06"
      />
      <rect
        x="336"
        y="186"
        width="48"
        height="6"
        rx="3"
        fill="currentColor"
        opacity="0.3"
      />
      <circle cx="360" cy="350" r="8" stroke="currentColor" strokeWidth="1.5" />

      {/* Phone screen elements */}
      <rect
        x="324"
        y="204"
        width="72"
        height="10"
        rx="3"
        fill="currentColor"
        opacity="0.25"
      />
      <rect
        x="324"
        y="222"
        width="50"
        height="8"
        rx="3"
        fill="currentColor"
        opacity="0.15"
      />
      <rect
        x="324"
        y="240"
        width="72"
        height="36"
        rx="6"
        fill="currentColor"
        opacity="0.1"
      />
      <rect
        x="324"
        y="284"
        width="34"
        height="8"
        rx="3"
        fill="currentColor"
        opacity="0.2"
      />
      <rect
        x="324"
        y="300"
        width="72"
        height="8"
        rx="3"
        fill="currentColor"
        opacity="0.12"
      />
      <rect
        x="324"
        y="316"
        width="55"
        height="8"
        rx="3"
        fill="currentColor"
        opacity="0.15"
      />

      {/* Floating elements */}
      {/* AI chip */}
      <rect
        x="30"
        y="180"
        width="70"
        height="70"
        rx="10"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="44"
        y="194"
        width="42"
        height="42"
        rx="6"
        fill="currentColor"
        opacity="0.08"
      />
      <text
        x="51"
        y="222"
        fontSize="11"
        fill="currentColor"
        opacity="0.5"
        fontFamily="monospace"
      >
        AI
      </text>
      <line
        x1="30"
        y1="205"
        x2="18"
        y2="205"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="30"
        y1="215"
        x2="18"
        y2="215"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="30"
        y1="225"
        x2="18"
        y2="225"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="100"
        y1="205"
        x2="112"
        y2="205"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="100"
        y1="215"
        x2="112"
        y2="215"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="100"
        y1="225"
        x2="112"
        y2="225"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="55"
        y1="180"
        x2="55"
        y2="168"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="65"
        y1="180"
        x2="65"
        y2="168"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="75"
        y1="180"
        x2="75"
        y2="168"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="55"
        y1="250"
        x2="55"
        y2="262"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="65"
        y1="250"
        x2="65"
        y2="262"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="75"
        y1="250"
        x2="75"
        y2="262"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      {/* Cloud */}
      <path
        d="M380 310 a20 20 0 0 1 0-40 a15 15 0 0 1 28-8 a20 20 0 0 1 2 48z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <line
        x1="390"
        y1="330"
        x2="390"
        y2="350"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
      <line
        x1="400"
        y1="330"
        x2="400"
        y2="360"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
      <line
        x1="410"
        y1="330"
        x2="410"
        y2="345"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />

      {/* Connection dots */}
      <circle cx="160" cy="340" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="200" cy="370" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="240" cy="345" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="280" cy="360" r="3" fill="currentColor" opacity="0.3" />
      <line
        x1="160"
        y1="340"
        x2="200"
        y2="370"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.2"
      />
      <line
        x1="200"
        y1="370"
        x2="240"
        y2="345"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.2"
      />
      <line
        x1="240"
        y1="345"
        x2="280"
        y2="360"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.2"
      />

      {/* Orbit rings around center */}
      <circle
        cx="200"
        cy="355"
        r="30"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.1"
        strokeDasharray="4 4"
      />
      <circle
        cx="200"
        cy="355"
        r="50"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.07"
        strokeDasharray="4 4"
      />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="px-5 sm:px-8 lg:px-10 pt-14 sm:pt-16 pb-12 relative overflow-hidden">
      {/* Top row */}
      <div className="flex justify-between items-start mb-8 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ color: "var(--muted)" }}
          className="text-xs tracking-widest uppercase max-w-[140px] sm:max-w-none"
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
              color: "var(--text)",
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
            Performance
          </motion.h1>
        </div>

        {/* Right — faded illustration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none select-none"
          style={{
            width: "48%",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 60% 50%, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 80% at 60% 50%, black 30%, transparent 80%)",
            color: "var(--accent)",
          }}
        >
          <TechIllustration />
        </motion.div>
      </div>

      {/* Bottom row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex justify-between items-end mt-10 flex-wrap gap-6 relative z-10"
      >
        <p
          style={{ color: "var(--muted)" }}
          className="text-base max-w-sm leading-relaxed"
        >
          We are a tech studio that helps businesses build bold digital products
          — fast, scalable, and designed to grow.
        </p>
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
