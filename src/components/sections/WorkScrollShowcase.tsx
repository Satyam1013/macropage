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
        style={{ borderColor: "var(--border)" }}
        className="group relative flex h-[88%] w-full flex-col gap-3 sm:h-[72%] sm:flex-row sm:gap-0 sm:overflow-hidden sm:rounded-[28px] sm:border"
      >
        {/* Text panel — the only opaque part of the card, so the dark panel
            below stays a true window onto the section's shared backdrop
            instead of just showing this card's own background. On mobile
            it's its own standalone rounded card, stacked above the dark
            panel rather than joined to it. */}
        <div
          style={{ background: "var(--card)", borderColor: "var(--border)" }}
          className="order-1 flex min-w-0 flex-1 flex-col justify-start gap-6 rounded-[28px] border p-6 sm:order-1 sm:justify-between sm:gap-5 sm:rounded-none sm:border-0 sm:p-10"
        >
          <div className="flex flex-col gap-3">
            <h3
              style={{ fontFamily: "var(--font-bebas)", color: "var(--text)", lineHeight: 1 }}
              className="text-[clamp(1.75rem,4vw,3rem)] tracking-wide"
            >
              {p.name}
            </h3>
            <div
              style={{ border: "1px solid var(--border)", color: "var(--text)" }}
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full"
            >
              {p.icon}
            </div>
          </div>

          <div style={{ borderTop: "1.5px dashed var(--border)" }} />

          <p style={{ color: "var(--muted)" }} className="max-w-xs text-sm leading-relaxed sm:mt-auto">
            {p.description}
          </p>
        </div>

        {/* Dark panel — a frosted window onto the section's shared backdrop
            (see DesktopShowcase / MobileShowcase): blurred + softly tinted
            rather than a sharp view of it, carrying only the index number.
            The text panel above is this card's only fully opaque part. On
            mobile it's its own standalone rounded card below the text
            panel; on desktop it rejoins as the right half of one card. */}
        <div
          style={{
            borderColor: "var(--border)",
            background: "linear-gradient(145deg, rgba(0,0,0,0.38), rgba(0,0,0,0.12))",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
          className="relative order-2 h-[42%] w-auto flex-shrink-0 overflow-hidden rounded-[28px] border sm:order-2 sm:h-auto sm:w-[44%] sm:rounded-none sm:border-0 sm:border-l"
        >
          <span
            style={{ fontFamily: "var(--font-bebas)", color: "var(--accent)" }}
            className="absolute left-4 top-3 text-[clamp(2.5rem,6vw,4.25rem)] leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
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
    <div className="pointer-events-none absolute inset-x-6 top-3 z-[1] flex items-start justify-between gap-4 sm:inset-x-10 sm:top-10">
      <div>
        <p
          style={{ color: "rgba(255,255,255,0.55)" }}
          className="mb-2 hidden text-xs uppercase tracking-widest sm:block"
        >
          [ 02 ] Selected Work
        </p>
        <h2
          style={{ fontFamily: "var(--font-bebas)", color: "#fff", lineHeight: 1 }}
          className="text-[clamp(1.25rem,4.5vw,3.5rem)] tracking-wide"
        >
          Our Projects
        </h2>
      </div>
      <Link
        href="/work"
        style={{ color: "rgba(255,255,255,0.8)", borderBottom: "1px solid rgba(255,255,255,0.4)" }}
        className="pointer-events-auto mt-2 hidden flex-shrink-0 text-sm pb-0.5 hover:opacity-100 transition-all sm:block"
      >
        See All Projects →
      </Link>
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

// Mobile: a native horizontal swipe carousel instead of vertical
// scroll-jacking — simpler, touch-friendly, and it matches the reference
// (cards swipe left/right over one shared backdrop, next card peeking in
// from the right). The section sits at a fixed height in the page's normal
// vertical flow; only the card row scrolls, via scroll-snap, so none of
// desktop's sticky-pinning tricks are needed here.
const mobileCardStyle: React.CSSProperties = { width: "88vw", height: "100%" };

function MobileShowcase() {
  return (
    <div
      className="relative h-[100dvh]"
      style={{
        backgroundImage: `url(${PROJECTS_SECTION_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <PinnedHeading />
      <div
        className="flex h-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} p={p} index={i} style={mobileCardStyle} className="snap-start" />
        ))}
        <ClosingCard style={mobileCardStyle} className="snap-start" />
      </div>
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
