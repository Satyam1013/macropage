import Link from "next/link";

const projects = [
  {
    slug: "shopease",
    name: "ShopEase",
    year: "2025",
    category: "E-Commerce",
    tags: "Web App · UI/UX",
    color: "#e2dfd8",
  },
  {
    slug: "finbot-ai",
    name: "FinBot AI",
    year: "2025",
    category: "Fintech",
    tags: "AI Integration · Automation",
    color: "#d8dce2",
  },
  {
    slug: "carelink",
    name: "CareLink",
    year: "2025",
    category: "Healthcare",
    tags: "Mobile App · Cloud",
    color: "#dde2d8",
  },
  {
    slug: "logidash",
    name: "LogiDash",
    year: "2025",
    category: "Logistics",
    tags: "Dashboard · Automation",
    color: "#e2d8dc",
  },
];

export default function WorkPage() {
  return (
    <section className="px-10 py-16 max-w-6xl mx-auto">
      <p
        style={{ color: "var(--muted)" }}
        className="text-xs tracking-widest uppercase mb-2"
      >
        [ 02 ] Selected Work
      </p>
      <h1
        style={{
          fontFamily: "var(--font-bebas)",
          color: "var(--text)",
          lineHeight: 1,
        }}
        className="text-[clamp(3rem,8vw,6rem)] tracking-wide mb-12"
      >
        Our Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <Link key={p.slug} href={`/work/${p.slug}`} className="block group">
            <div
              style={{ background: p.color, borderRadius: 12 }}
              className="aspect-[4/3] relative overflow-hidden mb-3 transition-transform duration-300 group-hover:scale-[1.01]"
            >
              <div
                style={{
                  fontFamily: "var(--font-bebas)",
                  color: "rgba(0,0,0,0.1)",
                }}
                className="absolute inset-0 flex items-center justify-center text-8xl"
              >
                {p.name.slice(0, 2).toUpperCase()}
              </div>
              <div className="absolute inset-0 flex items-end p-5">
                <div>
                  <p
                    style={{ color: "rgba(0,0,0,0.5)" }}
                    className="text-xs mb-1 tracking-wide"
                  >
                    {p.year} · {p.category}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-bebas)",
                      color: "#111",
                      lineHeight: 1,
                    }}
                    className="text-3xl tracking-wide"
                  >
                    {p.name}
                  </h3>
                  <p
                    style={{ color: "rgba(0,0,0,0.5)" }}
                    className="text-xs mt-1"
                  >
                    {p.tags}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
