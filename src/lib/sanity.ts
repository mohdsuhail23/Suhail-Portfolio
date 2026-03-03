import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

// Ensure we don't crash the whole app if the projectId is missing during initialization
export const client = createClient({
  projectId: projectId || "placeholder",
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
});

if (!projectId || projectId === "placeholder") {
  console.warn("Sanity Project ID is missing or set to placeholder. Sanity features will not work correctly.");
}
