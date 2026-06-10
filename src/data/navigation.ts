export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export const footerNavLinks: NavLink[] = [
  ...navLinks,
  { href: "/design-news", label: "Design News" },
];

export const socialLinks: NavLink[] = [
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://twitter.com", label: "X (Twitter)" },
  { href: "mailto:info@macropage.in", label: "Email" },
];

export const legalLinks: NavLink[] = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/msa", label: "MSA" },
  { href: "/dpa", label: "DPA" },
];
