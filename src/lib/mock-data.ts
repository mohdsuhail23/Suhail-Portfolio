import { Project, Experience } from "@/types";

export const MOCK_PROJECTS: Project[] = [
  {
    _id: "1",
    title: "AI Predictive Analytics Dashboard",
    slug: { current: "ai-dashboard" },
    mainImage: "https://picsum.photos/seed/dashboard/800/600",
    summary: "A high-performance enterprise dashboard leveraging machine learning to predict market trends in real-time.",
    technologies: ["Next.js", "Python", "TensorFlow", "Tailwind CSS"],
    projectLink: "https://demo.example.com",
    githubLink: "https://github.com/example/ai-dashboard",
    featured: true,
    publishedAt: "2024-01-15T00:00:00Z"
  },
  {
    _id: "2",
    title: "EcoConnect Social Platform",
    slug: { current: "ecoconnect" },
    mainImage: "https://picsum.photos/seed/eco/800/600",
    summary: "Sustainable living social network with real-time carbon footprint tracking and community challenges.",
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    projectLink: "https://ecoconnect.example.com",
    githubLink: "https://github.com/example/ecoconnect",
    featured: true,
    publishedAt: "2023-11-20T00:00:00Z"
  },
  {
    _id: "3",
    title: "CryptoFlow Wallet",
    slug: { current: "cryptoflow" },
    mainImage: "https://picsum.photos/seed/crypto/800/600",
    summary: "Secure decentralized finance wallet with support for multiple chains and integrated DEX swapping.",
    technologies: ["TypeScript", "Solidity", "Ethers.js", "Web3"],
    githubLink: "https://github.com/example/cryptoflow",
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
