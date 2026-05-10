import Link from "next/link";

const footerLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://linkedin.com", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer
      style={{ borderTop: "1px solid var(--border)" }}
      className="flex flex-wrap items-center justify-between gap-4 px-10 py-7"
    >
      <Link
        href="/"
        style={{ fontFamily: "var(--font-bebas)", color: "var(--text)" }}
        className="text-xl tracking-widest"
      >
        MACROPAGE
      </Link>

      <div className="flex flex-wrap gap-6">
        {footerLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{ color: "var(--muted)" }}
            className="text-xs uppercase tracking-widest hover:opacity-100 transition-opacity"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <p style={{ color: "var(--muted)" }} className="text-xs">
        Aligarh · India © {new Date().getFullYear()} MacroPage
      </p>
    </footer>
  );
}
