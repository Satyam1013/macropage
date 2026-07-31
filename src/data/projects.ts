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
    slug: "macropage-connect",
    name: "Macropage Connect",
    year: "2025",
    category: "SaaS · CRM",
    filter: "WEB APP",
    tags: "Web App · WhatsApp API",
    color: "#d4e8df",
    aspect: "aspect-[4/3]",
    span: "col-span-2",
  },
  {
    slug: "mr-fuels-transact",
    name: "Mr Fuels Transact",
    year: "2025",
    category: "Fuel Tech",
    filter: "WEB APP",
    tags: "Web App · Automation",
    color: "#e8e0d4",
    aspect: "aspect-[3/4]",
    span: "col-span-1",
  },
];

export const workSectionProjects: WorkSectionProject[] = [
  {
    slug: "macropage-connect",
    name: "Macropage Connect",
    year: "2025",
    category: "SaaS · CRM",
    tags: "Web App · WhatsApp API",
    color: "#d4e8df",
  },
  {
    slug: "mr-fuels-transact",
    name: "Mr Fuels Transact",
    year: "2025",
    category: "Fuel Tech",
    tags: "Web App · Automation",
    color: "#e8e0d4",
  },
];
