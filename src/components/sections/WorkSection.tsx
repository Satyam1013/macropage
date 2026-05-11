"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const projects = [
  {
    slug: "shopease",
    name: "ShopEase",
    year: "2025",
    category: "E-Commerce",
    tags: "Web App · UI/UX",
    color: "#e2dfd8",
  },
  {
    slug: "finbot-ai",
    name: "FinBot AI",
    year: "2025",
    category: "Fintech",
    tags: "AI Integration · Automation",
    color: "#d8dce2",
  },
  {
    slug: "carelink",
    name: "CareLink",
    year: "2025",
    category: "Healthcare",
    tags: "Mobile App · Cloud",
    color: "#dde2d8",
  },
  {
    slug: "logidash",
    name: "LogiDash",
    year: "2025",
    category: "Logistics",
    tags: "Dashboard · Automation",
    color: "#e2d8dc",
  },
];

const HOLD = 2800;

export default function WorkSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const fillRef = useRef<ReturnType<typeof setTimeout>>();

  const goTo = (idx: number) => {
    if (animating) return;
    const next = (idx + projects.length) % projects.length;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(next);
      setAnimating(false);
    }, 600);
  };

  // Auto advance
  useEffect(() => {
    timerRef.current = setTimeout(() => goTo(current + 1), HOLD);
    return () => clearTimeout(timerRef.current);
  }, [current]);

  const getState = (i: number) => {
    const total = projects.length;
    const prev = (current - 1 + total) % total;
    const next = (current + 1) % total;
    if (i === current) return "center";
    if (i === prev) return "left";
    if (i === next) return "right";
    return "hidden";
  };

  const stateStyles: Record<string, React.CSSProperties> = {
    center: {
      position: "absolute",
      width: "42%",
      height: "100%",
      left: "29%",
      top: 0,
      zIndex: 10,
      opacity: 1,
      transform: "scale(1)",
      transition: "all 0.65s cubic-bezier(0.77,0,0.18,1)",
      borderRadius: 16,
      overflow: "hidden",
    },
    left: {
      position: "absolute",
      width: "26%",
      height: "88%", // 👈 82% → 88%
      left: "2%",
      top: "6%", // 👈 9% → 6%
      zIndex: 5,
      opacity: 0.55,
      transform: "scale(0.96)",
      transition: "all 0.65s cubic-bezier(0.77,0,0.18,1)",
      borderRadius: 14,
      overflow: "hidden",
    },
    right: {
      position: "absolute",
      width: "26%",
      height: "88%", // 👈 82% → 88%
      left: "72%",
      top: "6%", // 👈 9% → 6%
      zIndex: 5,
      opacity: 0.55,
      transform: "scale(0.96)",
      transition: "all 0.65s cubic-bezier(0.77,0,0.18,1)",
      borderRadius: 14,
      overflow: "hidden",
    },
    hidden: {
      position: "absolute",
      width: "26%",
      height: "88%", // 👈 82% → 88%
      top: "6%", // 👈 9% → 6%
      zIndex: 1,
      opacity: 0,
      transform: "scale(0.9)",
      transition: "all 0.65s cubic-bezier(0.77,0,0.18,1)",
      borderRadius: 14,
      overflow: "hidden",
    },
  };

  return (
    <section className="py-16 overflow-hidden">
      {/* Header */}
      <div
        style={{ borderBottom: "1px solid var(--border)" }}
        className="flex justify-between items-end pb-4 mb-10 flex-wrap gap-3 px-10"
      >
        <div>
          <p
            style={{ color: "var(--muted)" }}
            className="text-xs tracking-widest uppercase mb-2"
          >
            [ 02 ] Selected Work
          </p>
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              color: "var(--text)",
              lineHeight: 1,
            }}
            className="text-[clamp(2.5rem,6vw,4.5rem)] tracking-wide"
          >
            Our Projects
          </h2>
        </div>
        <Link
          href="/work"
          style={{
            color: "var(--muted)",
            borderBottom: "1px solid var(--border)",
          }}
          className="text-sm pb-0.5 hover:opacity-100 transition-all"
        >
          See All Projects →
        </Link>
      </div>

      {/* Carousel */}
      <div className="relative w-full" style={{ height: 480 }}>
        {projects.map((p, i) => {
          const state = getState(i);
          const hiddenLeft =
            (current - 2 + projects.length) % projects.length === i;
          const style: React.CSSProperties = {
            ...stateStyles[state],
            ...(state === "hidden"
              ? { left: hiddenLeft ? "-10%" : "110%" }
              : {}),
          };

          return (
            <div key={p.slug} style={style}>
              <Link
                href={`/work/${p.slug}`}
                className="block w-full h-full group"
              >
                <div
                  className="w-full h-full relative"
                  style={{ background: p.color }}
                >
                  {/* Big bg letters */}
                  <div
                    style={{
                      fontFamily: "var(--font-bebas)",
                      color: "rgba(0,0,0,0.07)",
                    }}
                    className="absolute inset-0 flex items-center justify-center text-[7rem] select-none"
                  >
                    {p.name.slice(0, 2).toUpperCase()}
                  </div>

                  {/* Info */}
                  <div className="absolute inset-0 flex items-end p-5">
                    <div>
                      <p
                        style={{ color: "rgba(0,0,0,0.5)" }}
                        className="text-xs mb-1 tracking-wide"
                      >
                        {p.year} · {p.category}
                      </p>
                      <h3
                        style={{
                          fontFamily: "var(--font-bebas)",
                          color: "#111",
                          lineHeight: 1,
                        }}
                        className="text-3xl tracking-wide"
                      >
                        {p.name}
                      </h3>
                      <p
                        style={{ color: "rgba(0,0,0,0.5)" }}
                        className="text-xs mt-1"
                      >
                        {p.tags}
                      </p>
                    </div>
                  </div>

                  {/* Hover overlay — only center */}
                  {state === "center" && (
                    <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/10 transition-all duration-300">
                      <span
                        style={{
                          background: "rgba(0,0,0,0.75)",
                          color: "#fff",
                          borderRadius: 999,
                        }}
                        className="text-xs px-4 py-2 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        View Project →
                      </span>
                    </div>
                  )}
                </div>
              </Link>

              {/* Side card click to focus */}
              {state !== "center" && (
                <div
                  className="absolute inset-0 cursor-pointer"
                  onClick={() => {
                    clearTimeout(timerRef.current);
                    goTo(i);
                  }}
                />
              )}
            </div>
          );
        })}

        {/* Nav arrows */}
        <button
          onClick={() => {
            clearTimeout(timerRef.current);
            goTo(current - 1);
          }}
          style={{
            position: "absolute",
            left: "29.5%",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 20,
            background: "rgba(255,255,255,0.85)",
            border: "1px solid #d8d5cc",
            borderRadius: "50%",
            width: 36,
            height: 36,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.1rem",
          }}
        >
          ‹
        </button>
        <button
          onClick={() => {
            clearTimeout(timerRef.current);
            goTo(current + 1);
          }}
          style={{
            position: "absolute",
            right: "29.5%",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 20,
            background: "rgba(255,255,255,0.85)",
            border: "1px solid #d8d5cc",
            borderRadius: "50%",
            width: 36,
            height: 36,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.1rem",
          }}
        >
          ›
        </button>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, i) => (
          <div
            key={i}
            onClick={() => {
              clearTimeout(timerRef.current);
              goTo(i);
            }}
            style={{
              height: 2,
              borderRadius: 2,
              cursor: "pointer",
              background: i === current ? "var(--text)" : "var(--border)",
              width: i === current ? 32 : 16,
              transition: "all 0.4s ease",
            }}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="flex justify-center mt-3">
        <div
          style={{
            width: 120,
            height: 1,
            background: "var(--border)",
            borderRadius: 1,
            overflow: "hidden",
          }}
        >
          <div
            key={current}
            style={{
              height: "100%",
              background: "var(--text)",
              borderRadius: 1,
              animation: `fillBar ${HOLD}ms linear forwards`,
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes fillBar {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </section>
  );
}
