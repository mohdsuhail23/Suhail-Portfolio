export type Project = {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: string;
  summary: string;
  description?: any; // Portable text type
  technologies: string[];
  projectLink?: string;
  githubLink?: string;
  featured: boolean;
  publishedAt?: string;
};

export type Experience = {
  _id: string;
  company: string;
  role: string;
  duration: string;
  points: string[];
  order: number;
};
