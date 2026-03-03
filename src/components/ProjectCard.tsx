import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.mainImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <Link
            href={`/projects/${project.slug.current}`}
            className="p-3 bg-white rounded-full text-black hover:bg-primary hover:text-white transition-colors"
          >
            <ArrowUpRight className="h-6 w-6" />
          </Link>
        </div>
      </div>
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold font-headline group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {project.summary}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-secondary/50 text-[10px] uppercase tracking-wider font-bold">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0 flex gap-4">
        {project.githubLink && (
          <Link href={project.githubLink} className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="h-5 w-5" />
          </Link>
        )}
        {project.projectLink && (
          <Link href={project.projectLink} className="text-muted-foreground hover:text-foreground transition-colors">
            <ExternalLink className="h-5 w-5" />
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
