import Link from "next/link";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/design-news", label: "Design News" },
];

const socialLinks = [
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://twitter.com", label: "X (Twitter)" },
  { href: "mailto:hello@macropage.in", label: "Email" },
];

function HoverLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      style={{ color: "var(--text)" }}
      className="text-xs uppercase tracking-widest overflow-hidden relative h-4 flex flex-col group w-fit"
    >
      <span className="transition-transform duration-300 ease-out group-hover:-translate-y-full">
        {label}
      </span>
      <span
        className="absolute top-full transition-transform duration-300 ease-out group-hover:-translate-y-full"
        aria-hidden
      >
        {label}
      </span>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer
      style={{ borderTop: "1px solid var(--border)" }}
      className="w-full sticky bottom-0 min-h-screen flex flex-col justify-between"
    >
      <div
        style={{ borderBottom: "1px solid var(--border)" }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-10 px-6 sm:px-10 py-12 w-full"
      >
        {/* Col 1 — tagline + CTA */}
        <div className="flex flex-col justify-between gap-8">
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              color: "var(--text)",
              lineHeight: 1,
            }}
            className="text-[clamp(2rem,4vw,3rem)] tracking-wide"
          >
            Build it once.
            <br />
            <em
              style={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
              }}
            >
              Build it right.
            </em>
          </h2>

          <Link
            href="/contact"
            style={{ background: "var(--btn-bg)", color: "var(--btn-text)" }}
            className="inline-flex items-center justify-between px-6 py-4 rounded-xl text-sm font-semibold transition-all relative overflow-hidden group w-full sm:max-w-[260px]"
          >
            <span
              style={{ background: "var(--accent)" }}
              className="absolute inset-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-xl"
            />
            <span className="relative z-10">Let&apos;s Talk</span>
            <span className="relative z-10">→</span>
          </Link>

          <div>
            <p
              style={{ color: "var(--muted)" }}
              className="text-xs uppercase tracking-widest mb-1"
            >
              New Business
            </p>
            <a
              href="mailto:hello@macropage.in"
              style={{ color: "var(--text)" }}
              className="text-sm hover:opacity-60 transition-opacity"
            >
              hello@macropage.in
            </a>
          </div>
        </div>

        {/* Col 2 — Nav */}
        <div>
          <p
            style={{ color: "var(--muted)" }}
            className="text-xs uppercase tracking-widest mb-6"
          >
            Pages
          </p>
          <div className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <HoverLink key={l.href} href={l.href} label={l.label} />
            ))}
          </div>
        </div>

        {/* Col 3 — Social */}
        <div>
          <p
            style={{ color: "var(--muted)" }}
            className="text-xs uppercase tracking-widest mb-6"
          >
            Follow
          </p>
          <div className="flex flex-col gap-4">
            {socialLinks.map((l) => (
              <HoverLink key={l.href} href={l.href} label={l.label} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Big brand name — truly full width ── */}
      <div
        className="w-full overflow-hidden select-none px-6 flex-1 flex items-end"
        style={{ lineHeight: 0.82 }}
      >
        <svg
          viewBox="0 0 1000 160"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          style={{ display: "block" }}
        >
          <text
            x="0"
            y="148"
            fontFamily="'Bebas Neue', sans-serif"
            fontSize="165"
            fill="currentColor"
            letterSpacing="50"
          >
            MACROPAGE
          </text>
        </svg>
      </div>

      {/* ── Bottom bar ── */}
      <div
        style={{ borderTop: "1px solid var(--border)" }}
        className="flex flex-wrap justify-between items-center gap-3 px-6 sm:px-10 py-5 w-full"
      >
        <p style={{ color: "var(--muted)" }} className="text-xs">
          Aligarh, Uttar Pradesh, India
        </p>
        <p style={{ color: "var(--muted)" }} className="text-xs">
          © {new Date().getFullYear()} MacroPage. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
