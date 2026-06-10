export interface WorkPageProject {
  slug: string;
  name: string;
  year: string;
  category: string;
  filter: string;
  tags: string;
  color: string;
  aspect: string;
  span: string;
}

export interface WorkSectionProject {
  slug: string;
  name: string;
  year: string;
  category: string;
  tags: string;
  color: string;
}

export const workPageProjects: WorkPageProject[] = [
  {
    slug: "shopease",
    name: "ShopEase",
    year: "2025",
    category: "E-Commerce",
    filter: "WEB APP",
    tags: "Web App · UI/UX",
    color: "#e8e4dc",
    aspect: "aspect-[4/3]",
    span: "col-span-2",
  },
  {
    slug: "finbot-ai",
    name: "FinBot AI",
    year: "2025",
    category: "Fintech",
    filter: "AI",
    tags: "AI Integration",
    color: "#dce0e8",
    aspect: "aspect-[3/4]",
    span: "col-span-1",
  },
  {
    slug: "carelink",
    name: "CareLink",
    year: "2025",
    category: "Healthcare",
    filter: "MOBILE APP",
    tags: "Mobile App · Cloud",
    color: "#dce8e0",
    aspect: "aspect-[3/4]",
    span: "col-span-1",
  },
  {
    slug: "logidash",
    name: "LogiDash",
    year: "2025",
    category: "Logistics",
    filter: "WEB APP",
    tags: "Dashboard · Automation",
    color: "#e8dce0",
    aspect: "aspect-[4/3]",
    span: "col-span-2",
  },
  {
    slug: "rideswift",
    name: "RideSwift",
    year: "2025",
    category: "Transport",
    filter: "MOBILE APP",
    tags: "Mobile App · Flutter",
    color: "#e8e8dc",
    aspect: "aspect-[4/3]",
    span: "col-span-1",
  },
  {
    slug: "datastack",
    name: "DataStack",
    year: "2025",
    category: "SaaS",
    filter: "AI",
    tags: "Cloud · AI Integration",
    color: "#dce8e8",
    aspect: "aspect-[4/3]",
    span: "col-span-1",
  },
  {
    slug: "edureach",
    name: "EduReach",
    year: "2025",
    category: "EdTech",
    filter: "WEB APP",
    tags: "Web App · UI/UX",
    color: "#e8dce8",
    aspect: "aspect-[4/3]",
    span: "col-span-1",
  },
  {
    slug: "quickbite",
    name: "QuickBite",
    year: "2025",
    category: "Food Tech",
    filter: "MOBILE APP",
    tags: "Mobile App · Automation",
    color: "#e8e0dc",
    aspect: "aspect-[4/3]",
    span: "col-span-1",
  },
];

export const workSectionProjects: WorkSectionProject[] = [
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
