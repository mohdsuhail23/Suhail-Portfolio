import { Navbar } from "@/components/Navbar";
import { ProjectGrid } from "@/components/ProjectGrid";
import { MOCK_PROJECTS } from "@/lib/mock-data";

export const metadata = {
  title: "Projects | DevSphere Portfolio",
  description: "Explore my portfolio of technical projects, from AI dashboards to decentralized finance wallets.",
};

export default function ProjectsPage() {
  // In a production environment with Sanity configured, 
  // you would fetch data here using: 
  // const projects = await client.fetch(projectsQuery);
  const projects = MOCK_PROJECTS;

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
