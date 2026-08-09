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
  style,
  className,
  priority,
}: {
  p: (typeof projects)[number];
  style?: React.CSSProperties;
  className: string;
  priority?: boolean;
}) {
  return (
    <div
      style={{ background: p.color, ...style }}
      className={`relative flex-shrink-0 ${className}`}
    >
      <Link
        href={`/work/${p.slug}`}
        aria-label={`View ${p.name} project`}
        className="group block h-full w-full"
      >
        <Image
          src={p.image}
          alt={`${p.name} project screenshot`}
          fill
          sizes="100vw"
          priority={priority}
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />

        {/* Bottom info bar */}
        <div
          style={{ background: p.color }}
          className="absolute inset-x-0 bottom-0 flex flex-col gap-2 px-6 py-7 sm:px-10 sm:py-9"
        >
          <div className="flex flex-wrap items-center gap-3 sm:gap-8">
            <span className="text-xs font-semibold tracking-widest text-white/70">
              {p.year}
            </span>
            <span className="text-xs font-semibold tracking-widest text-white/70 uppercase">
              {p.category}
            </span>
            <span className="text-xs font-semibold tracking-widest text-white/70 uppercase">
              {p.tags}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <h2
              style={{ fontFamily: "var(--font-bebas)", color: "#fff", lineHeight: 1 }}
              className="text-[clamp(2.5rem,8vw,6rem)] tracking-wide"
            >
              {p.name}
            </h2>
            <span
              style={{ background: "#fff", color: "#111" }}
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-lg transition-transform duration-300 group-hover:rotate-45 sm:h-14 sm:w-14 sm:text-2xl"
            >
              ↗
            </span>
          </div>
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
            <ProjectCard key={p.slug} p={p} style={cardStyle} className="" priority={i === 0} />
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
          <ProjectCard p={p} className="h-full w-full" priority={i === 0} />
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
