export interface WorkPageProject {
  slug: string;
  name: string;
  year: string;
  category: string;
  filter: string;
  tags: string;
  color: string;
  image: string;
}

export interface WorkSectionProject {
  slug: string;
  name: string;
  year: string;
  category: string;
  tags: string;
  color: string;
  image: string;
}

export const workPageProjects: WorkPageProject[] = [
  {
    slug: "macropage-connect",
    name: "Macropage Connect",
    year: "2025",
    category: "SaaS · CRM",
    filter: "WEB APP",
    tags: "Website · WhatsApp API",
    color: "#d4e8df",
    image: "/projects/macropage-connect.png",
  },
  {
    slug: "macropage-connect-app",
    name: "Macropage Connect App",
    year: "2025",
    category: "SaaS · CRM",
    filter: "WEB APP",
    tags: "Web App · WhatsApp API",
    color: "#c3ded0",
    image: "/projects/macropage-connect-portal.png",
  },
  {
    slug: "tritju",
    name: "Tritju",
    year: "2025",
    category: "HealthTech",
    filter: "WEB APP",
    tags: "Web App · Healthcare",
    color: "#f5e6c8",
    image: "/projects/tritju.png",
  },
  {
    slug: "mr-fuels-transact",
    name: "Mr Fuels Transact",
    year: "2025",
    category: "Fuel Tech",
    filter: "WEB APP",
    tags: "Website · Dashboard",
    color: "#e8e0d4",
    image: "/projects/mr-fuels-transact-portal.png",
  },
  {
    slug: "mr-fuels-transact-app",
    name: "Mr Fuels Transact App",
    year: "2025",
    category: "Fuel Tech",
    filter: "MOBILE APP",
    tags: "Mobile App · Automation",
    color: "#dcd3c4",
    image: "/projects/mr-fuels-transact.png",
  },
];

export const workSectionProjects: WorkSectionProject[] = workPageProjects.map((p) => ({
  slug: p.slug,
  name: p.name,
  year: p.year,
  category: p.category,
  tags: p.tags,
  color: p.color,
  image: p.image,
}));
