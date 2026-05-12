"use client";

import { useRef, useEffect, useState } from "react";

const reviews = [
  {
    initials: "RS",
    color: "#6c63ff",
    name: "Rahul Sharma",
    company: "CEO, ShopEase India",
    text: "MacroPage ne hamari website sirf 3 hafte mein deliver ki — quality ekdum top-notch thi. Animations ne poora look badal diya!",
  },
  {
    initials: "PK",
    color: "#38bdf8",
    name: "Priya Kapoor",
    company: "Founder, FinBot Technologies",
    text: "AI chatbot integration amazing thi. Hamara customer support 60% automate ho gaya. ROI pehle hi month mein mila.",
  },
  {
    initials: "AM",
    color: "#34d399",
    name: "Arjun Mehta",
    company: "CTO, CareLink Health",
    text: "Design bilkul waise banaya jaise chahte the — aur communication poore project mein crystal clear tha.",
  },
  {
    initials: "SG",
    color: "#f472b6",
    name: "Sneha Gupta",
    company: "Operations Head, LogiDash",
    text: "Business automation se 20+ hours har week bachne lage. MacroPage ka setup ekdum seamless tha.",
  },
  {
    initials: "VT",
    color: "#fbbf24",
    name: "Vikram Tiwari",
    company: "Founder, RideSwift App",
    text: "Mobile app ka UI itna clean aur fast hai ki users khud compliment karte hain. Flutter performance smooth hai!",
  },
  {
    initials: "NK",
    color: "#a78bfa",
    name: "Neha Khanna",
    company: "Tech Lead, DataStack Co.",
    text: "Cloud migration zero downtime ke saath hui. AWS setup aur CI/CD ne deployment time aadha kar diya.",
  },
  {
    initials: "RV",
    color: "#fb923c",
    name: "Rohit Verma",
    company: "MD, QuickBite Foods",
    text: "Website redesign ke baad hamara conversion rate 40% badh gaya. MacroPage ka design sense ekdum sharp hai.",
  },
  {
    initials: "AS",
    color: "#e879f9",
    name: "Anita Singh",
    company: "CMO, EduReach India",
    text: "Social media campaigns ne hamare followers 3x kar diye sirf 2 mahine mein. Kaam ka team hai!",
  },
];

function ReviewCard({ r }: { r: (typeof reviews)[0] }) {
  return (
    <div
      style={{
        background: "var(--bg)",
        border: "1px solid var(--border)",
        borderRadius: 16,
        padding: "1.25rem",
        marginBottom: "1rem",
        flexShrink: 0,
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div className="flex gap-1 text-amber-400 text-sm mb-3">★★★★★</div>
      <p
        style={{ color: "var(--muted)" }}
        className="text-sm leading-relaxed mb-4"
      >
        &ldquo;{r.text}&rdquo;
      </p>
      <div
        style={{ borderTop: "1px solid var(--border)" }}
        className="flex items-center gap-3 pt-3"
      >
        <div
          style={{
            background: r.color,
            width: 38,
            height: 38,
            borderRadius: "50%",
            fontFamily: "var(--font-bebas)",
            color: "#fff",
            fontSize: "0.85rem",
            flexShrink: 0,
          }}
          className="flex items-center justify-center"
        >
          {r.initials}
        </div>
        <div style={{ minWidth: 0 }}>
          <p
            style={{
              color: "var(--text)",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            className="text-sm font-semibold"
          >
            {r.name}
          </p>
          <p
            style={{
              color: "var(--muted)",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            className="text-xs mt-0.5"
          >
            {r.company}
          </p>
        </div>
      </div>
    </div>
  );
}

function ScrollColumn({
  reviews,
  direction = "up",
  columnHeight,
}: {
  reviews: typeof col1;
  direction?: "up" | "down";
  columnHeight: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const animRef = useRef<number>();

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const halfH = track.scrollHeight / 2;
    posRef.current = direction === "up" ? 0 : halfH;

    const speed = 0.5;

    const animate = () => {
      if (direction === "up") {
        posRef.current += speed;
        if (posRef.current >= halfH) posRef.current = 0;
      } else {
        posRef.current -= speed;
        if (posRef.current <= 0) posRef.current = halfH;
      }
      track.style.transform = `translateY(-${posRef.current}px)`;
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    const pause = () => cancelAnimationFrame(animRef.current!);
    const resume = () => {
      animRef.current = requestAnimationFrame(animate);
    };
    track.parentElement?.addEventListener("mouseenter", pause);
    track.parentElement?.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animRef.current!);
      track.parentElement?.removeEventListener("mouseenter", pause);
      track.parentElement?.removeEventListener("mouseleave", resume);
    };
  }, [direction]);

  const doubled = [...reviews, ...reviews, ...reviews];

  return (
    <div
      className="overflow-hidden flex-1"
      style={{ height: columnHeight, minWidth: 0 }}
    >
      <div ref={trackRef}>
        {doubled.map((r, i) => (
          <ReviewCard key={i} r={r} />
        ))}
      </div>
    </div>
  );
}

// Column data
const col1 = reviews.slice(0, 3);
const col2 = reviews.slice(3, 6);
const col3 = reviews.slice(6, 8).concat(reviews.slice(0, 1));

export default function ReviewsSection() {
  const [cols, setCols] = useState(3);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setCols(1);
      else if (w < 1024) setCols(2);
      else setCols(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Column height: smaller on mobile
  const colHeight = cols === 1 ? 500 : cols === 2 ? 550 : 600;

  // Which columns to show
  const visibleCols = [
    { data: col1, direction: "up" as const },
    { data: col2, direction: "down" as const },
    { data: col3, direction: "up" as const },
  ].slice(0, cols);

  return (
    <section
      style={{ background: "var(--bg2)" }}
      className="px-4 sm:px-8 lg:px-10 py-12 lg:py-16"
    >
      {/* Header */}
      <div
        style={{ borderBottom: "1px solid var(--border)" }}
        className="flex justify-between items-end pb-4 mb-8 flex-wrap gap-3"
      >
        <div>
          <p
            style={{ color: "var(--muted)" }}
            className="text-xs tracking-widest uppercase mb-2"
          >
            [ 05 ] Client Reviews
          </p>
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              color: "var(--text)",
              lineHeight: 1,
            }}
            className="text-[clamp(2rem,6vw,4.5rem)] tracking-wide"
          >
            What Clients{" "}
            <em
              style={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
              }}
            >
              Say
            </em>
          </h2>
        </div>
        <p style={{ color: "var(--muted)" }} className="text-sm">
          {reviews.length}+ Happy Clients
        </p>
      </div>

      {/* Columns */}
      <div
        className="flex gap-3 sm:gap-4"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
        }}
      >
        {visibleCols.map((col, i) => (
          <ScrollColumn
            key={i}
            reviews={col.data}
            direction={col.direction}
            columnHeight={colHeight}
          />
        ))}
      </div>
    </section>
  );
}
