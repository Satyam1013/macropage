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
  },
];
