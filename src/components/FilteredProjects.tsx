"use client";

import { useState } from "react";
import { Project } from "@/types";
import { ProjectGrid } from "./ProjectGrid";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface FilteredProjectsProps {
  projects: Project[];
}

const CATEGORIES = ["all", "automation", "web app", "personal", "freelance"];

export function FilteredProjects({ projects }: FilteredProjectsProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category?.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="space-y-12">
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={cn(
              "px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all border",
              activeFilter === category
                ? "bg-primary text-primary-foreground border-primary shadow-[0_10px_30px_rgba(139,92,246,0.3)]"
                : "bg-muted/30 text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filteredProjects.length > 0 ? (
        <ProjectGrid projects={filteredProjects} />
      ) : (
        <div className="py-24 text-center space-y-4">
          <div className="text-4xl font-black tracking-tighter opacity-20">NO PROJECTS FOUND</div>
          <p className="text-muted-foreground">Try selecting a different category.</p>
        </div>
      )}
    </div>
  );
}
