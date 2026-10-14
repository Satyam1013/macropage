"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { workPageProjects as projects } from "@/data/projects";
import { PROJECTS_SECTION_BG } from "@/constants";

// Card is slightly narrower than the viewport (desktop only) so the next
// project peeks in from the right edge as you scroll.
const CARD_W = 70;

function ProjectCard({
  p,
  index,
  style,
  className,
}: {
  p: (typeof projects)[number];
  index: number;
  style?: React.CSSProperties;
  className: string;
}) {
  return (
    <div
      style={style}
      className={`relative flex-shrink-0 flex items-center justify-center p-1 sm:p-1.5 ${className}`}
    >
      <Link
        href={`/work/${p.slug}`}
        aria-label={`View ${p.name} project`}
        style={{ border: "1px solid var(--border)" }}
        className="group relative flex h-[88%] w-full flex-col overflow-hidden rounded-[28px] sm:h-[72%] sm:flex-row"
      >
        {/* Text panel — the only opaque part of the card, so the dark panel
            below stays a true window onto the section's shared backdrop
            instead of just showing this card's own background. */}
        <div
          style={{ background: "var(--card)" }}
          className="order-2 flex min-w-0 flex-1 flex-col justify-start gap-6 p-6 sm:order-1 sm:justify-between sm:gap-5 sm:p-10"
        >
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

        {/* Dark panel — a frosted window onto the section's shared backdrop
            (see DesktopShowcase / MobileShowcase): blurred + softly tinted
            rather than a sharp view of it, carrying only the index number.
            The text panel above is this card's only fully opaque part. */}
        <div
          style={{
            borderColor: "var(--border)",
            background: "linear-gradient(145deg, rgba(0,0,0,0.38), rgba(0,0,0,0.12))",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
          className="relative order-1 h-[42%] w-auto flex-shrink-0 border-t sm:order-2 sm:h-auto sm:w-[44%] sm:border-l sm:border-t-0"
        >
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

// Pinned over the shared backdrop (not inside the sliding/stacking cards),
// so it stays in view the whole time you're scrolling through the cards —
// matching the reference, where the heading sits on the same dark image
// and never scrolls away.
function PinnedHeading() {
  return (
    <div className="pointer-events-none absolute left-6 top-8 z-[1] sm:left-10 sm:top-10">
      <p
        style={{ color: "rgba(255,255,255,0.55)" }}
        className="mb-2 text-xs uppercase tracking-widest"
      >
        [ 02 ] Selected Work
      </p>
      <h2
        style={{ fontFamily: "var(--font-bebas)", color: "#fff", lineHeight: 1 }}
        className="text-[clamp(2rem,4.5vw,3.5rem)] tracking-wide"
      >
        Our Projects
      </h2>
    </div>
  );
}

function ClosingCard({ style, className }: { style?: React.CSSProperties; className: string }) {
  return (
    <div
      style={style}
      className={`relative flex-shrink-0 flex items-center justify-center p-1 sm:p-1.5 ${className}`}
    >
      <div
        style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        className="flex h-[88%] w-full flex-col justify-center gap-8 rounded-[28px] px-8 sm:h-[72%] sm:px-16"
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
        {/* Shared backdrop — stays put on screen (it's a sibling of the
            sliding strip, not inside it) so each card's transparent dark
            panel acts as a window onto it as the strip moves past. */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${PROJECTS_SECTION_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <PinnedHeading />
        <motion.div style={{ x }} className="relative flex h-full">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} p={p} index={i} style={cardStyle} className="" />
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
    <div className="relative">
      {/* Shared backdrop. Sticky + a negative bottom margin pins it to the
          viewport for the whole stack's scroll range without reserving any
          layout height of its own (the stacked cards' z-index keeps it
          behind all of them). Each card's dark panel is a transparent
          window onto this one image, same idea as the desktop strip. */}
      <div
        className="sticky top-0 z-0"
        style={{
          height: "100dvh",
          marginBottom: "-100dvh",
          backgroundImage: `url(${PROJECTS_SECTION_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {projects.map((p, i) => (
        <StickyWrap key={p.slug} index={i}>
          <ProjectCard p={p} index={i} className="h-full w-full" />
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
