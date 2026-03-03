
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Zap, MoveRight, ImageOff } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Project } from "@/types";
import { urlFor } from "@/lib/image";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const imageSrc = project.mainImage 
    ? (typeof project.mainImage === 'string' ? project.mainImage : urlFor(project.mainImage).url())
    : "https://picsum.photos/seed/placeholder/800/600";

  const displayDate = project.publishedAt 
    ? new Date(project.publishedAt).getFullYear() 
    : "Recent";

  return (
    <Card className="group relative overflow-hidden bg-transparent border-none shadow-none flex flex-col h-full rounded-[2.5rem]">
      {/* Image Container with premium frame */}
      <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[2.5rem] bg-muted/30 border border-white/5 group-hover:border-primary/50 transition-colors duration-700">
        {project.mainImage ? (
          <Image
            src={imageSrc}
            alt={project.title}
            fill
            className="object-cover transition-all duration-1000 group-hover:scale-105 group-hover:rotate-1"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/20">
            <ImageOff className="h-20 w-20 mb-4" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">No Preview Available</span>
          </div>
        )}
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center backdrop-blur-sm p-12 text-center">
          <p className="text-white/80 mb-8 font-medium text-lg leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            {project.summary}
          </p>
          <Link
            href={`/projects/${project.slug.current}`}
            className="flex items-center gap-3 px-8 py-4 bg-primary text-white font-black rounded-full hover:scale-105 transition-all transform translate-y-4 group-hover:translate-y-0 duration-500"
          >
            Explore Case Study <MoveRight className="h-5 w-5" />
          </Link>
        </div>

        {/* Top Badges */}
        <div className="absolute top-6 left-6 flex gap-2">
          {project.featured && (
            <div className="bg-primary/90 text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest backdrop-blur-md flex items-center gap-1.5">
              <Zap className="h-3 w-3 fill-white" /> Featured
            </div>
          )}
          <div className="bg-black/50 text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest backdrop-blur-md">
            {displayDate}
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="pt-8 px-4 space-y-4">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-3xl md:text-4xl font-black tracking-tighter leading-none group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-500">
            <ArrowUpRight className="h-6 w-6" />
          </div>
        </div>
        
        <div className="flex flex-wrap gap-x-6 gap-y-2 opacity-60 group-hover:opacity-100 transition-opacity">
          {project.technologies?.slice(0, 3).map((tech) => (
            <span key={tech} className="text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {tech}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
