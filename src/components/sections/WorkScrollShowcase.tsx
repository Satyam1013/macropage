"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { workPageProjects as projects } from "@/data/projects";

// Card is slightly narrower than the viewport so the next project peeks in
// at the edge; SIDE is the inset needed to center a card at rest.
const CARD_W = 92;
const SIDE = (100 - CARD_W) / 2;

export default function WorkScrollShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const total = projects.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `${-(total - 1) * CARD_W}vw`]);

  return (
    <section ref={containerRef} style={{ height: `${total * 100}vh` }} className="relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div
          style={{ x, paddingLeft: `${SIDE}vw`, paddingRight: `${SIDE}vw` }}
          className="flex h-full"
        >
          {projects.map((p) => (
            <div
              key={p.slug}
              style={{ background: p.color, width: `${CARD_W}vw` }}
              className="relative h-full flex-shrink-0"
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
                  sizes="92vw"
                  priority={p === projects[0]}
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Bottom info bar */}
                <div
                  style={{ background: p.color }}
                  className="absolute inset-x-0 bottom-0 flex flex-col gap-1 px-6 py-4 sm:px-10 sm:py-5"
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}
