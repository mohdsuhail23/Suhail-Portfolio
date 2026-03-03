import { Project } from "@/types";
import { ProjectCard } from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  columns?: 2 | 3;
}

export function ProjectGrid({ projects, columns = 3 }: ProjectGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-8`}>
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
}
