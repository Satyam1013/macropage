import Link from "next/link";
import WorkScrollShowcase from "@/components/sections/WorkScrollShowcase";

export default function WorkSection() {
  return (
    <section className="py-12 lg:py-16">
      {/* Header */}
      <div
        style={{ borderBottom: "1px solid var(--border)" }}
        className="flex justify-between items-end pb-4 mb-8 lg:mb-10 flex-wrap gap-3 px-5 sm:px-10"
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
            className="text-[clamp(2rem,6vw,4.5rem)] tracking-wide"
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

      <WorkScrollShowcase />
    </section>
  );
}
