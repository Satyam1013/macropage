export interface FAQ {
  q: string;
  a: string;
}

export interface Stat {
  num: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
}

export const faqs: FAQ[] = [
  {
    q: "What services does MacroPage provide?",
    a: "We build web apps, mobile apps, AI integrations, cloud infrastructure, business automation, and complete digital products from scratch.",
  },
  {
    q: "How does your development process work?",
    a: "We start with a discovery call, then move to design, development, testing, and launch — all with clear communication at every step.",
  },
  {
    q: "What is the typical project timeline?",
    a: "Simple websites take 2–3 weeks. Complex web apps or mobile apps typically take 6–12 weeks depending on scope.",
  },
  {
    q: "How much does a project cost?",
    a: "Projects start from ₹30,000 for landing pages and go up based on complexity. We provide a detailed quote after the discovery call.",
  },
  {
    q: "Can I see examples of your past work?",
    a: "Yes! Check out our Work page for case studies and live project links.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Absolutely. We offer maintenance packages and are available for ongoing support, updates, and scaling.",
  },
];

export const stats: Stat[] = [
  { num: "50+", label: "Web Apps Delivered" },
  { num: "30+", label: "Mobile Apps" },
  { num: "100+", label: "Projects Completed" },
  { num: "20+", label: "AI Integrations" },
  { num: "15+", label: "Automation Workflows" },
  { num: "5★", label: "Client Rating" },
];

export const team: TeamMember[] = [
  { name: "Satyam Rawat", role: "Founder & Tech Lead" },
  { name: "Priya Singh", role: "UI/UX Designer" },
  { name: "Rahul Verma", role: "Backend Engineer" },
  { name: "Ankit Sharma", role: "Mobile Developer" },
  { name: "Neha Gupta", role: "AI Engineer" },
  { name: "Vikram Joshi", role: "DevOps Engineer" },
];

export const tickerItems: string[] = [
  "Web Development",
  "App Development",
  "AI Integration",
  "Business Automation",
  "UI/UX Design",
  "Cloud Services",
  "WhatsApp API",
  "Social Media",
];

export const marqueeItems: string[] = [
  "Web Development",
  "App Development",
  "AI Integration",
  "Business Automation",
  "UI/UX Designing",
  "Cloud Services",
  "Whats App",
];
