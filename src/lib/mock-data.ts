import { Project, Experience } from "@/types";
import { PlaceHolderImages } from "./placeholder-images";

const getPlaceholderImage = (id: string) => {
  return PlaceHolderImages.find(img => img.id === id)?.imageUrl || `https://picsum.photos/seed/${id}/800/600`;
};

export const MOCK_PROJECTS: Project[] = [
  {
    _id: "1",
    title: "AI Predictive Analytics Dashboard",
    slug: { current: "ai-dashboard" },
    mainImage: getPlaceholderImage("project-1"),
    summary: "A high-performance enterprise dashboard leveraging machine learning to predict market trends in real-time.",
    technologies: ["Next.js", "Python", "TensorFlow", "Tailwind CSS"],
    projectLink: "https://demo.example.com",
    githubLink: "https://github.com/example/ai-dashboard",
    featured: true,
    publishedAt: "2024-01-15T00:00:00Z"
  },
  {
    _id: "2",
    title: "E-Commerce Performance Suite",
    slug: { current: "ecommerce-suite" },
    mainImage: getPlaceholderImage("project-2"),
    summary: "Scalable e-commerce infrastructure with real-time inventory management and server-side rendering for optimal SEO.",
    technologies: ["React", "Node.js", "PostgreSQL", "Next.js"],
    projectLink: "https://shop.example.com",
    githubLink: "https://github.com/example/ecommerce",
    featured: true,
    publishedAt: "2023-11-20T00:00:00Z"
  },
  {
    _id: "3",
    title: "Collaborative Design Interface",
    slug: { current: "design-tool" },
    mainImage: getPlaceholderImage("project-3"),
    summary: "Real-time collaborative design environment built for distributed teams with complex vector manipulation.",
    technologies: ["TypeScript", "Canvas API", "WebSockets", "Rust"],
    githubLink: "https://github.com/example/design-tool",
    featured: false,
    publishedAt: "2023-08-10T00:00:00Z"
  }
];

export const MOCK_EXPERIENCE: Experience[] = [
  {
    _id: "e1",
    company: "TechNova Solutions",
    role: "Senior Full Stack Engineer",
    duration: "2022 - Present",
    order: 1,
    points: [
      "Led a team of 5 developers to migrate legacy monolith to microservices architecture.",
      "Improved platform performance by 40% through advanced caching and database optimization.",
      "Implemented CI/CD pipelines reducing deployment time from hours to minutes."
    ]
  },
  {
    _id: "e2",
    company: "WebFlow Interactive",
    role: "Frontend Developer",
    duration: "2020 - 2022",
    order: 2,
    points: [
      "Developed responsive UI components using React and styled-components for high-traffic sites.",
      "Collaborated with design teams to ensure pixel-perfect implementation of complex UX patterns.",
      "Optimized Core Web Vitals resulting in a 25% increase in organic search traffic."
    ]
  },
  {
    _id: "e3",
    company: "StartUp Hub",
    role: "Junior Software Engineer",
    duration: "2018 - 2020",
    order: 3,
    points: [
      "Contributed to the development of the company's flagship mobile-first web application.",
      "Participated in agile ceremonies and code reviews to maintain high quality standards.",
      "Wrote comprehensive unit tests achieving 90% code coverage."
    ]
  }
];
