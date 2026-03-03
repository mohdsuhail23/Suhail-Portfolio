export const projectsQuery = `*[_type == "project"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  "mainImage": mainImage.asset->url,
  summary,
  description,
  technologies,
  projectLink,
  githubLink,
  featured,
  publishedAt
}`;

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  "mainImage": mainImage.asset->url,
  summary,
  description,
  technologies,
  projectLink,
  githubLink,
  featured,
  publishedAt
}`;

export const experienceQuery = `*[_type == "experience"] | order(order asc) {
  _id,
  company,
  role,
  duration,
  points,
  order
}`;
