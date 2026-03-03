import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { MOCK_PROJECTS } from "@/lib/mock-data";

export const metadata = {
  title: "Projects | DevSphere Portfolio",
  description: "Explore my portfolio of technical projects, from AI dashboards to decentralized finance wallets.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6 mb-16 text-center">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter">My <span className="text-primary">Projects</span></h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A detailed look at the software I've built. Each project represents 
              a specific challenge solved with modern technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_PROJECTS.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
