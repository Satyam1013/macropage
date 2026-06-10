import { marqueeItems } from "@/data/content";

const items = [...marqueeItems, ...marqueeItems];

export default function MarqueeStrip() {
  return (
    <div
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "var(--bg2)",
      }}
      className="overflow-hidden py-3"
    >
      <div className="flex gap-12 w-max animate-marquee">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            <span
              style={{ color: "var(--text)" }}
              className="text-xs font-semibold tracking-widest uppercase whitespace-nowrap"
            >
              {item}
            </span>
            <span style={{ color: "var(--border)" }} className="text-xs">
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
