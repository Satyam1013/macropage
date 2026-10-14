"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { workPageProjects as projects } from "@/data/projects";
import { PROJECTS_SECTION_BG } from "@/constants";

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
        className="group relative flex h-[68%] w-full flex-col overflow-hidden rounded-[28px] border sm:h-[72%] sm:flex-row"
      >
        {/* Text panel — the only opaque part of the card, so the dark panel
            below stays a true window onto the section's shared backdrop
            instead of just showing this card's own background. */}
        <div
          style={{ background: "var(--card)" }}
          className="order-1 flex min-w-0 flex-1 flex-col justify-start gap-6 p-6 sm:order-1 sm:justify-between sm:gap-5 sm:p-10"
        >
          <h3
            style={{ fontFamily: "var(--font-bebas)", color: "var(--text)", lineHeight: 1 }}
            className="text-[clamp(1.75rem,4vw,3rem)] tracking-wide"
          >
            {p.name}
          </h3>

          <div style={{ borderTop: "1.5px dashed var(--border)" }} />

          <div className="flex flex-col gap-4 sm:mt-auto">
            <div
              style={{ border: "1px solid var(--border)", color: "var(--text)" }}
              className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full"
            >
              {p.icon}
            </div>
            <p style={{ color: "var(--muted)" }} className="max-w-xs text-sm leading-relaxed">
              {p.description}
            </p>
          </div>
        </div>

        {/* Dark panel — a frosted window onto the section's shared backdrop
            (see ScrollShowcase): blurred + softly tinted rather than a
            sharp view of it, carrying only the index number. Flush against
            the text panel and the card's own edges — no border/inset of
            its own, just the outer Link's rounded corners. */}
        <div
          style={{
            background: "linear-gradient(145deg, rgba(0,0,0,0.38), rgba(0,0,0,0.12))",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
          className="relative order-2 h-[42%] w-auto flex-shrink-0 sm:h-auto sm:w-[44%]"
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
          className="text-[clamp(2.25rem,9vw,4.5rem)] tracking-wide"
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
        className="flex h-[68%] w-full flex-col justify-center gap-8 rounded-[28px] px-8 sm:h-[72%] sm:px-16"
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

// Horizontal scroll-jacking filmstrip, driven by vertical scroll — on touch
// devices this is just the normal swipe-down gesture, same as any other
// scroll; framer-motion reads it off scrollY regardless of input method.
// The section is pinned (sticky) while its cards slide through, same
// mechanism on mobile and desktop, just a wider card on mobile (less of
// the next one peeks in, since there's less width to spare).
function ScrollShowcase({ cardW }: { cardW: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const total = projects.length + 1; // +1 for the closing "Projects" card

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `${-(total - 1) * cardW}vw`]);
  const cardStyle: React.CSSProperties = { width: `${cardW}vw`, height: "100%" };

  return (
    <section ref={containerRef} style={{ height: `${total * 100}dvh` }} className="relative">
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
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

export default function WorkScrollShowcase() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return <ScrollShowcase cardW={isMobile ? 92 : 70} />;
}
