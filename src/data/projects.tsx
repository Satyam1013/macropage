import type { ReactNode } from "react";

export interface WorkPageProject {
  slug: string;
  name: string;
  year: string;
  category: string;
  filter: string;
  tags: string;
  color: string;
  image: string;
  imageMobile: string;
  description: string;
  icon: ReactNode;
}

export const workPageProjects: WorkPageProject[] = [
  {
    slug: "macropage-connect-portal",
    name: "Macropage Connect Portal",
    year: "2026",
    category: "SaaS · CRM",
    filter: "WEB APP",
    tags: "Website · Features & Story",
    color: "#123a6b",
    image: "/projects/macropage-connect-portal.png",
    imageMobile: "/projects/macropage-connect-portal-mobile.png",
    description:
      "A connect portal that helps businesses manage leads, conversations, and follow-ups from one clean dashboard.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
        <path
          d="M8 14a5 5 0 015-5h22a5 5 0 015 5v15a5 5 0 01-5 5H20l-9 8V14z"
          fill="currentColor"
          opacity="0.12"
        />
        <path
          d="M8 14a5 5 0 015-5h22a5 5 0 015 5v15a5 5 0 01-5 5H20l-9 8V14z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <circle cx="18" cy="21.5" r="2.2" fill="currentColor" />
        <circle cx="24" cy="21.5" r="2.2" fill="currentColor" />
        <circle cx="30" cy="21.5" r="2.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    slug: "tritju",
    name: "Tritju",
    year: "2025",
    category: "HealthTech",
    filter: "WEB APP",
    tags: "Web App · Healthcare",
    color: "#a14e00",
    image: "/projects/tritju.png",
    imageMobile: "/projects/tritju-mobile.png",
    description:
      "A healthcare web app that makes booking, records, and doctor-patient communication fast and simple.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" fill="currentColor" opacity="0.1" />
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5" />
        <path
          d="M10 25h6l3-7 5 14 3-7h11"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    slug: "mr-fuels-transact",
    name: "Mr Fuels Transact",
    year: "2026",
    category: "Fuel Tech",
    filter: "WEB APP",
    tags: "Website · Dashboard",
    color: "#111111",
    image: "/projects/mr-fuels-transact-portal.png",
    imageMobile: "/projects/mr-fuels-transact-portal-mobile.png",
    description:
      "A fuel transaction dashboard giving station owners real-time visibility into sales, stock, and staff.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="10" width="18" height="30" rx="2" fill="currentColor" opacity="0.15" />
        <rect x="8" y="10" width="18" height="30" rx="2" stroke="currentColor" strokeWidth="2.5" />
        <path d="M13 17h8M13 23h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path
          d="M26 20h5l5 5v9a2 2 0 01-2 2h-1"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="38" r="2.5" fill="currentColor" />
        <circle cx="34" cy="38" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    slug: "mr-fuels-transact-app",
    name: "Mr Fuels Transact App",
    year: "2025",
    category: "Fuel Tech",
    filter: "MOBILE APP",
    tags: "Mobile App · Automation",
    color: "#6b1d1d",
    image: "/projects/mr-fuels-transact.png",
    imageMobile: "/projects/mr-fuels-transact-mobile.png",
    description:
      "The mobile companion app that automates fuel transactions and syncs instantly with the dashboard.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
        <rect x="14" y="5" width="20" height="38" rx="4" fill="currentColor" opacity="0.15" />
        <rect x="14" y="5" width="20" height="38" rx="4" stroke="currentColor" strokeWidth="2.5" />
        <path d="M25 13l-7 11h6l-2 11 9-14h-6l2-8z" fill="currentColor" />
      </svg>
    ),
  },
];
