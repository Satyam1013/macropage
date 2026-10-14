"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { workPageProjects as projects } from "@/data/projects";

// Card is slightly narrower than the viewport (desktop only) so the next
// project peeks in from the right edge as you scroll.
const CARD_W = 70;

function ProjectCard({
  p,
  index,
  style,
  className,
  priority,
  mobileImage,
}: {
  p: (typeof projects)[number];
  index: number;
  style?: React.CSSProperties;
  className: string;
  priority?: boolean;
  mobileImage?: boolean;
}) {
  return (
    <div
      style={{ background: "var(--bg)", ...style }}
      className={`relative flex-shrink-0 flex items-center justify-center p-1 sm:p-1.5 ${className}`}
    >
      <Link
        href={`/work/${p.slug}`}
        aria-label={`View ${p.name} project`}
        style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        className="group relative flex h-[88%] w-full flex-col overflow-hidden rounded-[28px] sm:h-[72%] sm:flex-row"
      >
        {/* Text panel */}
        <div className="order-2 flex min-w-0 flex-1 flex-col justify-start gap-6 p-6 sm:order-1 sm:justify-between sm:gap-5 sm:p-10">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p
                style={{ color: "var(--muted)" }}
                className="mb-2 text-[11px] uppercase tracking-widest"
              >
                {p.category} · {p.year}
              </p>
              <h3
                style={{ fontFamily: "var(--font-bebas)", color: "var(--text)", lineHeight: 1 }}
                className="text-[clamp(1.5rem,3vw,2.5rem)] tracking-wide"
              >
                {p.name}
              </h3>
            </div>
            <span
              style={{ border: "1px solid var(--border)", color: "var(--muted)" }}
              className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm transition-transform duration-300 group-hover:rotate-45"
            >
              ↗
            </span>
          </div>

          <div style={{ borderTop: "1.5px dashed var(--border)" }} />

          <div className="flex flex-col gap-4 sm:flex-1 sm:justify-end">
            <div
              style={{ border: "1px solid var(--border)", color: "var(--text)" }}
              className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full"
            >
              {p.icon}
            </div>
            <p style={{ color: "var(--muted)" }} className="max-w-xs text-sm leading-relaxed">
              {p.description}
            </p>
          </div>
        </div>

        {/* Dark image panel */}
        <div
          style={{ background: p.color }}
          className="relative order-1 mx-3 mt-3 h-[42%] w-auto flex-shrink-0 overflow-hidden rounded-[20px] sm:order-2 sm:mb-3 sm:ml-0 sm:mt-3 sm:h-auto sm:w-[44%]"
        >
          <Image
            src={mobileImage ? p.imageMobile : p.image}
            alt={`${p.name} project screenshot`}
            fill
            sizes="(max-width: 640px) 90vw, 45vw"
            priority={priority}
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/55 to-transparent" />
          <span
            style={{ fontFamily: "var(--font-bebas)", color: "var(--accent)" }}
            className="absolute left-4 top-3 text-[clamp(2rem,5vw,3.25rem)] leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </Link>
    </div>
  );
}

function ClosingCard({ style, className }: { style?: React.CSSProperties; className: string }) {
  return (
    <div
      style={{ background: "var(--bg)", ...style }}
      className={`relative flex-shrink-0 flex flex-col justify-center gap-8 px-8 sm:px-16 ${className}`}
    >
      <h2
        style={{ fontFamily: "var(--font-bebas)", color: "var(--text)", lineHeight: 1 }}
        className="text-[clamp(3rem,9vw,7rem)] tracking-wide"
      >
        Projects
      </h2>
      <p style={{ color: "var(--text)" }} className="max-w-7xl text-2xl sm:text-4xl leading-snug">
        These aren&apos;t just projects — they&apos;re stories of our clients, our work, and the
        impact we made.{" "}
        <Link
          href="/work"
          style={{ color: "var(--accent)" }}
          className="underline underline-offset-4 hover:opacity-70 transition-opacity whitespace-nowrap"
        >
          See More ↗
        </Link>
      </p>
    </div>
  );
}

// Desktop: horizontal scroll-jacking filmstrip, driven by vertical scroll.
function DesktopShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const total = projects.length + 1; // +1 for the closing "Projects" card

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `${-(total - 1) * CARD_W}vw`]);
  const cardStyle: React.CSSProperties = { width: `${CARD_W}vw`, height: "100%" };

  return (
    <section ref={containerRef} style={{ height: `${total * 100}vh` }} className="relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div style={{ x }} className="flex h-full">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} p={p} index={i} style={cardStyle} className="" priority={i === 0} />
          ))}
          <ClosingCard style={cardStyle} className="" />
        </motion.div>
      </div>
    </section>
  );
}

// Mobile: horizontal scroll-jacking is a bad fit for a narrow viewport (cards
// end up cramped), so instead each card is full height and pinned via
// `position: sticky` with an increasing z-index — same technique as the
// stacking sections on /services — so the next project scrolls up and
// covers the previous one instead of sliding in from the side. Each card
// sits in a slightly taller wrapper than the screen so there's a short pause
// (e.g. enough for the navbar's own hide-on-scroll) before the next one
// starts covering it, instead of the cover starting on the very first pixel
// of scroll.
const BUFFER_VH = 25;

function StickyWrap({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  return (
    <div style={{ position: "relative", height: `${100 + BUFFER_VH}dvh` }}>
      <div style={{ position: "sticky", top: 0, zIndex: index + 1, height: "100dvh" }}>
        {children}
      </div>
    </div>
  );
}

function MobileShowcase() {
  const total = projects.length + 1; // +1 for the closing "Projects" card

  return (
    <div>
      {projects.map((p, i) => (
        <StickyWrap key={p.slug} index={i}>
          <ProjectCard p={p} index={i} className="h-full w-full" priority={i === 0} mobileImage />
        </StickyWrap>
      ))}
      <StickyWrap index={total - 1}>
        <ClosingCard className="h-full w-full" />
      </StickyWrap>
    </div>
  );
}

export default function WorkScrollShowcase() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return isMobile ? <MobileShowcase /> : <DesktopShowcase />;
}
