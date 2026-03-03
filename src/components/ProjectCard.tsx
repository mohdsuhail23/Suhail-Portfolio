import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink, ArrowUpRight, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Project } from "@/types";
import { urlFor } from "@/lib/image";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  // Determine image source: Sanity object or direct URL string
  const imageSrc = typeof project.mainImage === 'string' 
    ? project.mainImage 
    : urlFor(project.mainImage).url();

  return (
    <Card className="group flex flex-col h-full overflow-hidden glass-card rounded-[2rem] hover:translate-y-[-4px]">
      <div className="relative aspect-[16/10] overflow-hidden m-4 rounded-[1.5rem]">
        <Image
          src={imageSrc}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
          <Link
            href={`/projects/${project.slug.current}`}
            className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0"
          >
            View Case Study <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      
      <CardContent className="px-8 py-6 space-y-4 flex-grow">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-primary font-bold text-[10px] tracking-[0.2em] uppercase">
            <Layers className="h-3 w-3" /> Featured Project
          </div>
          <h3 className="text-2xl md:text-3xl font-black tracking-tighter group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm font-medium leading-relaxed line-clamp-2">
            {project.summary}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="text-[10px] font-bold uppercase tracking-widest text-white/40">
              #{tech}
            </span>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="px-8 pb-8 pt-0 flex gap-6">
        {project.githubLink && (
          <Link href={project.githubLink} target="_blank" className="text-muted-foreground hover:text-white transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
            <Github className="h-4 w-4" /> Code
          </Link>
        )}
        {project.projectLink && (
          <Link href={project.projectLink} target="_blank" className="text-muted-foreground hover:text-white transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
            <ExternalLink className="h-4 w-4" /> Live Demo
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}