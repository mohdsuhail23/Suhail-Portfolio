import { Navbar } from "@/components/Navbar";
import { ProjectGrid } from "@/components/ProjectGrid";
import { client } from "@/lib/sanity";
import { projectsQuery } from "@/lib/queries";
import { Project } from "@/types";
import { MOCK_PROJECTS } from "@/lib/mock-data";

export const metadata = {
  title: "Projects | DevSphere Portfolio",
  description: "Explore my portfolio of technical projects, from AI dashboards to decentralized finance wallets.",
};

export const revalidate = 60;

export default async function ProjectsPage() {
  let projects: Project[] = [];
  
  try {
    projects = await client.fetch(projectsQuery);
  } catch (error) {
    console.warn("Failed to fetch projects from Sanity, using mock data.", error);
  }

  const displayProjects = projects.length > 0 ? projects : MOCK_PROJECTS;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6 mb-16 text-center">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
              My <span className="text-primary">Projects</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A detailed look at the software I've built. Each project represents 
              a specific challenge solved with modern technology.
            </p>
          </div>
          
          <ProjectGrid projects={displayProjects} />
        </div>
      </main>
    </div>
  );
}
