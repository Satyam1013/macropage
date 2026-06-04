"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const stats = [
  { num: "50+", label: "Web Apps Delivered" },
  { num: "30+", label: "Mobile Apps" },
  { num: "100+", label: "Projects Completed" },
  { num: "20+", label: "AI Integrations" },
  { num: "15+", label: "Automation Workflows" },
  { num: "5★", label: "Client Rating" },
];

const team = [
  { name: "Satyam Rawat", role: "Founder & Tech Lead" },
  { name: "Priya Singh", role: "UI/UX Designer" },
  { name: "Rahul Verma", role: "Backend Engineer" },
  { name: "Ankit Sharma", role: "Mobile Developer" },
  { name: "Neha Gupta", role: "AI Engineer" },
  { name: "Vikram Joshi", role: "DevOps Engineer" },
];

const tickerItems = [
  "Web Development",
  "App Development",
  "AI Integration",
  "Business Automation",
  "UI/UX Design",
  "Cloud Services",
  "WhatsApp API",
  "Social Media",
];

function AutoTicker() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const animRef = useRef<number>();

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const animate = () => {
      posRef.current += 0.6;
      if (posRef.current >= track.scrollWidth / 2) posRef.current = 0;
      track.style.transform = `translateX(-${posRef.current}px)`;
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current!);
  }, []);

  const doubled = [...tickerItems, ...tickerItems];

  return (
    <div className="overflow-hidden w-full">
      <div ref={trackRef} className="flex gap-0 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              borderRight: "1px solid var(--border)",
              color: "var(--muted)",
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(1.2rem,3vw,2rem)",
              letterSpacing: 2,
            }}
            className="px-8 py-5 inline-block"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        style={{ borderBottom: "1px solid var(--border)" }}
        className="px-6 sm:px-10 pt-14 pb-10"
      >
        <p
          style={{ color: "var(--muted)" }}
          className="text-xs tracking-widest uppercase mb-3"
        >
          [ 04 ] Who We Are
        </p>
        <h1
          style={{
            fontFamily: "var(--font-bebas)",
            color: "var(--text)",
            lineHeight: 0.9,
          }}
          className="text-[clamp(4rem,12vw,10rem)] tracking-wide mb-6"
        >
          About{" "}
          <em
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            Us
          </em>
        </h1>
        <p
          style={{ color: "var(--muted)" }}
          className="text-base max-w-xl leading-relaxed"
        >
          A tech studio built on purpose and the belief that great products
          start with great thinking.
        </p>
      </section>

      {/* ── Hero image placeholder ── */}
      <div
        style={{
          background: "var(--bg2)",
          borderBottom: "1px solid var(--border)",
          height: "clamp(280px, 50vw, 560px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-bebas)",
            color: "var(--border)",
            fontSize: "clamp(4rem,15vw,12rem)",
            letterSpacing: 4,
          }}
        >
          MACROPAGE
        </span>
      </div>

      {/* ── Studio Story ── */}
      <section
        style={{ borderBottom: "1px solid var(--border)" }}
        className="grid grid-cols-1 lg:grid-cols-[300px_1fr] px-6 sm:px-10 py-16 gap-10"
      >
        <div>
          <p
            style={{ color: "var(--muted)" }}
            className="text-xs tracking-widest uppercase"
          >
            Studio Story
          </p>
        </div>
        <div>
          <p
            style={{ color: "var(--text)" }}
            className="text-base leading-relaxed mb-6 max-w-2xl"
          >
            MacroPage was built on a simple belief — great technology isn&apos;t
            just something you use, it&apos;s something you feel. We work
            closely with founders, startups, and growing businesses to build
            digital products that are bold in thinking and refined in execution.
          </p>
          <p
            style={{ color: "var(--muted)" }}
            className="text-base leading-relaxed max-w-2xl"
          >
            Our process is hands-on and collaborative, combining clear strategy
            with technical instinct to create work that&apos;s thoughtful,
            scalable, and truly yours.
          </p>
        </div>
      </section>

      {/* ── Ticker ── */}
      <div style={{ borderBottom: "1px solid var(--border)" }}>
        <AutoTicker />
      </div>

      {/* ── Our Agency — 2 col ── */}
      <section
        style={{ borderBottom: "1px solid var(--border)" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-0"
      >
        {/* Left image */}
        <div
          style={{
            background: "var(--bg2)",
            borderRight: "1px solid var(--border)",
            minHeight: 400,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-bebas)",
              color: "var(--border)",
              fontSize: "clamp(3rem,8vw,7rem)",
              letterSpacing: 4,
            }}
          >
            [ MP ]
          </span>
        </div>

        {/* Right text */}
        <div className="px-6 sm:px-10 py-14 flex flex-col justify-between gap-10">
          <div>
            <p
              style={{ color: "var(--muted)" }}
              className="text-xs tracking-widest uppercase mb-4"
            >
              [ ! ] Our Agency
            </p>
            <p
              style={{ color: "var(--muted)" }}
              className="text-xs tracking-widest uppercase mb-6"
            >
              Where technology meets creativity.
            </p>
            <p
              style={{ color: "var(--text)" }}
              className="text-base leading-relaxed mb-4"
            >
              At MacroPage, we create digital experiences that are scalable,
              fast, and built to connect. Through thoughtful architecture and
              design systems, we help founders bring their ideas to life with
              clarity and purpose.
            </p>
            <p
              style={{ color: "var(--muted)" }}
              className="text-base leading-relaxed"
            >
              We believe great products should move with meaning. Our vision is
              to build platforms that lead — combining strategy, design, and
              engineering to shape the next wave of digital businesses.
            </p>
          </div>
          <Link
            href="/contact"
            style={{ background: "var(--btn-bg)", color: "var(--btn-text)" }}
            className="self-start px-8 py-3 rounded-full text-sm font-semibold relative overflow-hidden group transition-all"
          >
            <span
              style={{ background: "var(--accent)" }}
              className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"
            />
            <span className="relative z-10">Contact Us →</span>
          </Link>
        </div>
      </section>

      {/* ── Stats ── */}
      <section
        style={{ borderBottom: "1px solid var(--border)" }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
      >
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              borderRight:
                i < stats.length - 1 ? "1px solid var(--border)" : "none",
            }}
            className="px-6 py-10 flex flex-col gap-2"
          >
            <span
              style={{
                fontFamily: "var(--font-bebas)",
                color: "var(--accent)",
                lineHeight: 1,
              }}
              className="text-[clamp(2rem,4vw,3.5rem)]"
            >
              {s.num}
            </span>
            <span
              style={{ color: "var(--muted)" }}
              className="text-xs uppercase tracking-wide leading-snug"
            >
              {s.label}
            </span>
          </div>
        ))}
      </section>

      {/* ── Big quote ── */}
      <section
        style={{ borderBottom: "1px solid var(--border)" }}
        className="px-6 sm:px-10 py-16 overflow-hidden"
      >
        <p
          style={{
            fontFamily: "var(--font-bebas)",
            color: "var(--text)",
            lineHeight: 0.92,
            letterSpacing: "-1px",
          }}
          className="text-[clamp(2rem,6vw,5rem)]"
        >
          Great technology isn&apos;t what you see.
          <br />
          <em
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            It&apos;s what you feel
          </em>{" "}
          and never forget.
          <br />
          It earns trust, builds products and leaves
          <br />
          an impact that lasts.
        </p>
      </section>

      {/* ── Team ── */}
      <section
        style={{ borderBottom: "1px solid var(--border)" }}
        className="px-6 sm:px-10 py-16"
      >
        <p
          style={{ color: "var(--muted)" }}
          className="text-xs tracking-widest uppercase mb-10"
        >
          Our Team
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {team.map((member, i) => (
            <div key={i} className="flex flex-col gap-3">
              {/* Avatar placeholder */}
              <div
                style={{
                  background: "var(--bg2)",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  aspectRatio: "3/4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-bebas)",
                    color: "var(--border)",
                    fontSize: "2rem",
                  }}
                >
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <p
                  style={{ color: "var(--text)" }}
                  className="text-sm font-medium"
                >
                  {member.name}
                </p>
                <p style={{ color: "var(--muted)" }} className="text-xs mt-0.5">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section className="px-6 sm:px-10 py-16 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
        <h2
          style={{
            fontFamily: "var(--font-bebas)",
            color: "var(--text)",
            lineHeight: 0.95,
          }}
          className="text-[clamp(2.5rem,7vw,6rem)] tracking-wide"
        >
          Build it once.
          <br />
          <em
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            Build it right.
          </em>
        </h2>
        <Link
          href="/contact"
          style={{ background: "var(--btn-bg)", color: "var(--btn-text)" }}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold relative overflow-hidden group transition-all flex-shrink-0"
        >
          <span
            style={{ background: "var(--accent)" }}
            className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"
          />
          <span className="relative z-10">Let&apos;s Talk →</span>
        </Link>
      </section>
    </main>
  );
}
