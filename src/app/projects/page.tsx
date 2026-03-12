import { Navbar } from "@/components/Navbar";
import { FilteredProjects } from "@/components/FilteredProjects";
import { client } from "@/lib/sanity";
import { projectsQuery } from "@/lib/queries";
import { Project } from "@/types";
import { MOCK_PROJECTS } from "@/lib/mock-data";

export const metadata = {
  title: "Projects | Dev Suhail Portfolio",
  description: "Explore my portfolio of technical projects, from AI dashboards to business automations.",
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
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow py-32 px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="space-y-6 text-center">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter">
              The <span className="text-primary italic">Archive.</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-xl font-medium leading-relaxed">
              A curated collection of web applications and automated workflows 
              designed to solve real-world complexities.
            </p>
          </div>
          
          <FilteredProjects projects={displayProjects} />
        </div>
      </main>
    </div>
  );
}
