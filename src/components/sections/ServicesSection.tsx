"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    num: "01",
    slug: "web-development",
    name: "Web Development",
    desc: "Your website should work hard and look good. We design sites that are easy to use and built to grow with you.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect
          x="4"
          y="8"
          width="40"
          height="32"
          rx="4"
          fill="currentColor"
          opacity="0.15"
        />
        <rect x="4" y="8" width="40" height="10" rx="4" fill="currentColor" />
        <circle cx="11" cy="13" r="2" fill="white" />
        <circle cx="17" cy="13" r="2" fill="white" />
        <circle cx="23" cy="13" r="2" fill="white" />
        <path
          d="M10 26l6 4-6 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M22 34h12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    num: "02",
    slug: "app-development",
    name: "App Development",
    desc: "Cross-platform mobile apps that feel native. One codebase, two platforms — faster delivery.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect
          x="12"
          y="4"
          width="24"
          height="40"
          rx="4"
          fill="currentColor"
          opacity="0.15"
        />
        <rect
          x="12"
          y="4"
          width="24"
          height="40"
          rx="4"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <circle cx="24" cy="38" r="2" fill="currentColor" />
        <path
          d="M18 12h12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect
          x="17"
          y="18"
          width="14"
          height="10"
          rx="2"
          fill="currentColor"
          opacity="0.4"
        />
      </svg>
    ),
  },
  {
    num: "03",
    slug: "ai-integration",
    name: "AI Integration",
    desc: "LLMs, chatbots, recommendation engines — AI that actually works for your business.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="10" fill="currentColor" opacity="0.15" />
        <circle cx="24" cy="24" r="5" fill="currentColor" />
        <circle cx="24" cy="8" r="3" fill="currentColor" opacity="0.5" />
        <circle cx="24" cy="40" r="3" fill="currentColor" opacity="0.5" />
        <circle cx="8" cy="24" r="3" fill="currentColor" opacity="0.5" />
        <circle cx="40" cy="24" r="3" fill="currentColor" opacity="0.5" />
        <line
          x1="24"
          y1="11"
          x2="24"
          y2="19"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="24"
          y1="29"
          x2="24"
          y2="37"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="11"
          y1="24"
          x2="19"
          y2="24"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="29"
          y1="24"
          x2="37"
          y2="24"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    num: "04",
    slug: "business-automation",
    name: "Business Automation",
    desc: "Automate workflows, save hundreds of hours, and integrate all your tools seamlessly.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="16" width="14" height="10" rx="3" fill="currentColor" />
        <rect
          x="28"
          y="16"
          width="14"
          height="10"
          rx="3"
          fill="currentColor"
          opacity="0.5"
        />
        <rect
          x="17"
          y="30"
          width="14"
          height="10"
          rx="3"
          fill="currentColor"
          opacity="0.75"
        />
        <path
          d="M20 21h8"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M34 26v4h-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M14 26v4h5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    num: "05",
    slug: "ui-ux-designing",
    name: "UI/UX Designing",
    desc: "Figma-first, pixel-perfect designs. Tested and approved before a single line of code.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect
          x="6"
          y="6"
          width="36"
          height="36"
          rx="6"
          fill="currentColor"
          opacity="0.12"
        />
        <rect x="10" y="10" width="12" height="12" rx="3" fill="currentColor" />
        <rect
          x="26"
          y="10"
          width="12"
          height="12"
          rx="3"
          fill="currentColor"
          opacity="0.5"
        />
        <rect
          x="10"
          y="26"
          width="12"
          height="12"
          rx="3"
          fill="currentColor"
          opacity="0.5"
        />
        <rect
          x="26"
          y="26"
          width="12"
          height="12"
          rx="3"
          fill="currentColor"
          opacity="0.25"
        />
      </svg>
    ),
  },
  {
    num: "06",
    slug: "cloud-services",
    name: "Cloud Services",
    desc: "AWS, GCP, Docker, CI/CD — infrastructure built to scale reliably without downtime.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path
          d="M36 30a8 8 0 10-7.4-11A6 6 0 1014 30"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M20 34l4 4 4-4"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="24"
          y1="38"
          x2="24"
          y2="28"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    num: "07",
    slug: "digital-marketing",
    name: "Digital Marketing",
    desc: "SEO, Google Ads, email campaigns — data-driven marketing that brings the right audience.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path
          d="M8 34l10-12 8 6 8-14 8 8"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="8" cy="34" r="3" fill="currentColor" />
        <circle cx="40" cy="22" r="3" fill="currentColor" opacity="0.5" />
      </svg>
    ),
  },
  {
    num: "08",
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    desc: "Content strategy, reels, posts & paid campaigns across Instagram, LinkedIn & more.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="12" cy="24" r="5" fill="currentColor" />
        <circle cx="36" cy="12" r="5" fill="currentColor" opacity="0.6" />
        <circle cx="36" cy="36" r="5" fill="currentColor" opacity="0.6" />
        <line
          x1="17"
          y1="21"
          x2="31"
          y2="15"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="17"
          y1="27"
          x2="31"
          y2="33"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
];

const COLS = 4; // cards per row

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
