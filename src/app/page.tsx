
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ProjectGrid } from "@/components/ProjectGrid";
import { TechStack } from "@/components/TechStack";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { client } from "@/lib/sanity";
import { projectsQuery, cvQuery } from "@/lib/queries";
import { Project } from "@/types";
import { MOCK_PROJECTS } from "@/lib/mock-data";

export const revalidate = 60; // Revalidate every minute

export default async function Home() {
  let projects: Project[] = [];
  let cvData: { fileUrl: string } | null = null;
  
  try {
    const [fetchedProjects, fetchedCv] = await Promise.all([
      client.fetch(projectsQuery),
      client.fetch(cvQuery)
    ]);
    projects = fetchedProjects;
    cvData = fetchedCv;
  } catch (error) {
    console.warn("Failed to fetch data from Sanity, using fallback logic.", error);
  }

  const hasSanityData = projects.length > 0;
  const displayProjects = hasSanityData ? projects : MOCK_PROJECTS;
  
  // Logic to show a minimum of 2 and maximum of 4 projects on home page
  // Prioritize featured projects, then fill with the most recent ones
  const featured = displayProjects.filter((p) => p.featured);
  const nonFeatured = displayProjects.filter((p) => !p.featured);
  
  const featuredProjects = [...featured, ...nonFeatured].slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero cvUrl={cvData?.fileUrl} />
        
        <About />

        <TechStack />
        
        <section className="py-32 px-4 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px] -z-10" />
          
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-primary font-black text-[10px] tracking-[0.3em] uppercase">
                  <Star className="h-4 w-4 fill-primary" /> Portfolio
                </div>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
                  Selected <span className="text-primary italic">Works</span>
                </h2>
                <p className="text-muted-foreground max-w-xl text-lg">
                  A high-level overview of some of the most challenging and impactful 
                  software solutions I've architected and deployed recently.
                </p>
              </div>
              <Button asChild variant="link" className="group p-0 h-auto text-lg font-bold gap-3 text-foreground hover:text-primary transition-colors">
                <Link href="/projects">
                  View full archive <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            
            <ProjectGrid projects={featuredProjects} columns={2} />

            <div className="mt-20 flex justify-center md:hidden">
              <Button asChild size="lg" className="w-full rounded-full h-14 font-bold">
                <Link href="/projects">Explore Full Archive</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-32 px-4 border-y bg-muted/10">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <blockquote className="text-3xl md:text-5xl font-black tracking-tighter leading-tight italic">
              "A true full-stack expert who understands that speed is a feature, 
              and reliability is non-negotiable."
            </blockquote>
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground">
                Ready to take your project to the next level?
              </p>
              <Button asChild size="lg" className="rounded-full px-12 h-16 text-lg font-bold">
                <Link href="/contact">Start a Conversation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-20 border-t glass mt-auto">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="space-y-4 text-center md:text-left">
            <Link href="/" className="text-2xl font-black tracking-tighter uppercase italic">
              Dev<span className="text-primary"> Suhail</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs font-medium">
              Architecting high-performance digital ecosystems for the modern web.
            </p>
          </div>
          <div className="flex gap-12">
            <div className="space-y-4">
              <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Social</h5>
              <div className="flex flex-col gap-2">
                <Link href="https://github.com/Suhail1102" className="text-sm font-bold hover:text-primary transition-colors" target="_blank">GitHub</Link>
                <Link href="https://www.linkedin.com/in/mohammad-suhail-406a81250/" className="text-sm font-bold hover:text-primary transition-colors" target="_blank">LinkedIn</Link>
              </div>
            </div>
            <div className="space-y-4">
              <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Explore</h5>
              <div className="flex flex-col gap-2">
                <Link href="/projects" className="text-sm font-bold hover:text-primary transition-colors">Projects</Link>
                <Link href="/experience" className="text-sm font-bold hover:text-primary transition-colors">Experience</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-white/5 text-center text-xs font-bold uppercase tracking-widest text-muted-foreground/50">
          <p>© {new Date().getFullYear()} Mohammad Suhail. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
