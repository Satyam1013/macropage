"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

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
];

export default function ReviewsSection() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section className="px-10 py-16">
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
        className="text-[clamp(2.5rem,6vw,4.5rem)] tracking-wide mb-8"
      >
        What Clients{" "}
        <em style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>
          Say
        </em>
      </h2>

      <div
        ref={ref}
        className="flex gap-5 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing"
        style={{ scrollSnapType: "x mandatory", scrollbarWidth: "thin" }}
      >
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            style={{
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              minWidth: 320,
              maxWidth: 320,
              scrollSnapAlign: "start",
            }}
            className="flex flex-col gap-4 p-7 flex-shrink-0 hover:-translate-y-1 transition-transform duration-200"
          >
            <div className="flex gap-1 text-amber-400">★★★★★</div>
            <p
              style={{ color: "var(--muted)" }}
              className="text-sm leading-relaxed flex-1"
            >
              &ldquo;{r.text}&rdquo;
            </p>
            <div
              style={{ borderTop: "1px solid var(--border)" }}
              className="flex items-center gap-3 pt-4"
            >
              <div
                style={{
                  background: r.color,
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  fontFamily: "var(--font-bebas)",
                  color: "#fff",
                  fontSize: "1rem",
                }}
                className="flex items-center justify-center flex-shrink-0"
              >
                {r.initials}
              </div>
              <div>
                <p
                  style={{ color: "var(--text)" }}
                  className="text-sm font-semibold"
                >
                  {r.name}
                </p>
                <p style={{ color: "var(--muted)" }} className="text-xs mt-0.5">
                  {r.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
