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

export const footerNavLinks: NavLink[] = [...navLinks];

export const socialLinks: NavLink[] = [
  { href: "https://www.instagram.com/macropage_official", label: "Instagram" },
  { href: "https://www.youtube.com/@macropageconnect", label: "YouTube" },
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
