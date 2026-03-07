
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
    category: "web app",
    mainImage: getPlaceholderImage("project-1"),
    summary: "A high-performance enterprise dashboard leveraging machine learning to predict market trends in real-time.",
    technologies: ["Next.js", "Node.js", "Firebase", "Tailwind CSS", "GraphQL"],
    projectLink: "https://demo.example.com",
    githubLink: "https://github.com/example/ai-dashboard",
    featured: true,
    publishedAt: "2024-01-15T00:00:00Z"
  },
  {
    _id: "2",
    title: "Google Sheets Inventory Sync",
    slug: { current: "sheets-sync" },
    category: "automation",
    mainImage: getPlaceholderImage("project-2"),
    summary: "Automated inventory synchronization between multiple retail platforms and Google Sheets using Apps Script.",
    technologies: ["Google Apps Script", "JavaScript", "REST APIs", "Node.js"],
    projectLink: "https://demo.example.com",
    githubLink: "https://github.com/example/automation",
    featured: true,
    publishedAt: "2024-02-10T00:00:00Z"
  },
  {
    _id: "3",
    title: "Client Portal for Law Firm",
    slug: { current: "client-portal" },
    category: "freelance",
    mainImage: getPlaceholderImage("project-3"),
    summary: "Custom built document management and communication portal for a mid-sized law firm.",
    technologies: ["React", "Firebase", "Express.js", "MongoDB"],
    githubLink: "https://github.com/example/portal",
    featured: false,
    publishedAt: "2023-11-05T00:00:00Z"
  },
  {
    _id: "4",
    title: "Personal Finance Tracker",
    slug: { current: "finance-tracker" },
    category: "personal",
    mainImage: getPlaceholderImage("project-1"),
    summary: "A personal project to track expenses and analyze spending habits with interactive charts.",
    technologies: ["Next.js", "MongoDB", "Express.js", "Tailwind"],
    githubLink: "https://github.com/example/finance",
    featured: false,
    publishedAt: "2023-09-12T00:00:00Z"
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
