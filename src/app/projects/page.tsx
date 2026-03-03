import { Navbar } from "@/components/Navbar";
import { ProjectGrid } from "@/components/ProjectGrid";
import { client } from "@/lib/sanity";
import { projectsQuery } from "@/lib/queries";
import { Project } from "@/types";

export const metadata = {
  title: "Projects | DevSphere Portfolio",
  description: "Explore my portfolio of technical projects, from AI dashboards to decentralized finance wallets.",
};

export const revalidate = 60;

export default async function ProjectsPage() {
  const projects: Project[] = await client.fetch(projectsQuery);

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
          
          <ProjectGrid projects={projects} />
        </div>
      </main>
    </div>
  );
}
