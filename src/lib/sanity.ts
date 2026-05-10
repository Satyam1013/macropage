import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
});

// Helper to fetch projects for the Work page
export async function getProjects() {
  return sanityClient.fetch(`*[_type == "project"] | order(year desc) {
    _id, title, slug, year, category, tags, "image": image.asset->url
  }`);
}

// Helper to fetch a single project
export async function getProject(slug: string) {
  return sanityClient.fetch(
    `*[_type == "project" && slug.current == $slug][0] {
      _id, title, slug, year, category, tags, description,
      "image": image.asset->url, client, deliverables
    }`,
    { slug }
  );
}

// Helper to fetch services
export async function getServices() {
  return sanityClient.fetch(`*[_type == "service"] | order(order asc) {
    _id, title, description, order
  }`);
}
