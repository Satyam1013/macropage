const items = [
  "Web Development",
  "App Development",
  "AI Integration",
  "Business Automation",
  "UI/UX Designing",
  "Cloud Services",
  "Digital Marketing",
  "Social Media Marketing",
  // Duplicate for infinite loop
  "Web Development",
  "App Development",
  "AI Integration",
  "Business Automation",
  "UI/UX Designing",
  "Cloud Services",
  "Digital Marketing",
  "Social Media Marketing",
];

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
