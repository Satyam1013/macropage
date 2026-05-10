export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  year: string;
  category: string;
  tags: string;
  description?: string;
  image?: string;
  client?: string;
  deliverables?: string[];
}

export interface Service {
  _id: string;
  title: string;
  description: string;
  order: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
