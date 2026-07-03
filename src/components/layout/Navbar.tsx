"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/navigation";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Top Navbar ── */}
      <nav
        style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}
        className="sticky top-0 z-50 flex items-center justify-between px-6 sm:px-10 py-5 backdrop-blur-sm"
      >
        {/* Brand */}
        <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
          <span
            style={{ fontFamily: "var(--font-bebas)", color: "var(--text)" }}
            className="text-2xl tracking-widest"
          >
            MACROPAGE
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                style={{ color: "var(--muted)" }}
                className="text-xs font-medium tracking-widest uppercase relative group"
              >
                {link.label}
                <span
                  style={{ background: "var(--accent)" }}
                  className="absolute -bottom-1 left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-300 ease-out"
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop right controls */}
        <div className="hidden md:flex items-center gap-3">
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
            className="text-xs font-semibold px-5 py-2 rounded-full relative overflow-hidden group active:scale-95 transition-all tracking-wide"
          >
            <span
              style={{ background: "var(--accent)" }}
              className="absolute inset-0 w-full translate-y-full group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-300 ease-out rounded-full"
            />
            <span className="relative z-10">Let&apos;s Talk</span>
          </Link>
        </div>

        {/* Mobile right — Let's Talk + Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          {/* Let's Talk button */}
          <Link
            href="/contact"
            style={{ background: "var(--btn-bg)", color: "var(--btn-text)" }}
            className="text-xs font-semibold px-4 py-2 rounded-full relative overflow-hidden group active:scale-95 transition-all tracking-wide"
          >
            <span
              style={{ background: "var(--accent)" }}
              className="absolute inset-0 w-full translate-y-full group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-300 ease-out rounded-full"
            />
            <span className="relative z-10">Let&apos;s Talk</span>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
            aria-label="Toggle menu"
          >
            <span
              style={{ background: "var(--text)" }}
              className={`block h-[1.5px] w-6 transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
            />
            <span
              style={{ background: "var(--text)" }}
              className={`block h-[1.5px] w-6 transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              style={{ background: "var(--text)" }}
              className={`block h-[1.5px] w-6 transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* ── Mobile menu overlay ── */}
      <div
        style={{ background: "var(--bg)" }}
        className={`fixed inset-0 z-[99] flex flex-col md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Menu top bar */}
        <div
          style={{ borderBottom: "1px solid var(--border)" }}
          className="flex items-center justify-between px-6 py-5 flex-shrink-0"
        >
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/logo.png"
                alt="MACROPAGE"
                width={36}
                height={36}
                className="object-cover"
                style={{ mixBlendMode: theme === "dark" ? "normal" : "multiply" }}
              />
            </div>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
          >
            <span style={{ background: "var(--text)" }} className="block h-[1.5px] w-6 rotate-45 translate-y-[3px]" />
            <span style={{ background: "var(--text)" }} className="block h-[1.5px] w-6 -rotate-45 -translate-y-[3px]" />
          </button>
        </div>

        {/* Nav links */}
        <div className="flex-1 flex flex-col justify-center px-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-bebas)",
                color: "var(--text)",
                borderBottom: "1px solid var(--border)",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.4s ease ${i * 0.06}s, transform 0.4s ease ${i * 0.06}s`,
              }}
              className="text-[clamp(2.8rem,10vw,4.5rem)] tracking-wide py-4 hover:opacity-40 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* ── Floating moon/sun — bottom right, mobile only ── */}
      {mounted && (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="fixed bottom-5 right-5 z-[98] md:hidden w-12 h-12 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
          style={{
            background: theme === "dark" ? "#ffffff" : "#111111",
            color: theme === "dark" ? "#111111" : "#ffffff",
          }}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      )}
    </>
  );
}
