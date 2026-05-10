"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        background: scrolled ? "var(--bg)" : "var(--bg)",
        borderBottom: "1px solid var(--border)",
      }}
      className="sticky top-0 z-50 flex items-center justify-between px-10 py-5 transition-all duration-300 backdrop-blur-sm"
    >
      <Link
        href="/"
        style={{ fontFamily: "var(--font-bebas)", color: "var(--text)" }}
        className="text-2xl tracking-widest"
      >
        MACROPAGE
      </Link>

      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              style={{ color: "var(--muted)" }}
              className="text-xs font-medium tracking-widest uppercase hover:opacity-100 transition-opacity"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            style={{ border: "1px solid var(--border)", color: "var(--muted)" }}
            className="text-xs px-4 py-2 rounded-full hover:opacity-80 transition-all font-medium"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        )}
        <Link
          href="/contact"
          style={{ background: "var(--btn-bg)", color: "var(--btn-text)" }}
          className="text-xs font-semibold px-5 py-2 rounded-full hover:opacity-80 transition-all tracking-wide"
        >
          Let&apos;s Talk
        </Link>
      </div>
    </nav>
  );
}
