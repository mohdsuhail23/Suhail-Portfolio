import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Button } from "@/components/ui/button";
import { MOCK_PROJECTS } from "@/lib/mock-data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredProjects = MOCK_PROJECTS.filter((p) => p.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Featured Projects Section */}
        <section className="py-24 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black">
                  Selected <span className="text-primary">Works</span>
                </h2>
                <p className="text-muted-foreground max-w-lg">
                  A collection of projects that demonstrate my technical expertise 
                  and approach to building production-grade software.
                </p>
              </div>
              <Button asChild variant="link" className="hidden md:flex gap-2">
                <Link href="/projects">
                  Explore All Projects <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <ProjectGrid projects={featuredProjects} columns={2} />

            <div className="mt-12 flex justify-center md:hidden">
              <Button asChild variant="outline" className="w-full">
                <Link href="/projects">See All Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Experience CTA Section */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              Over 6 years of <span className="text-accent">crafting</span> digital experiences.
            </h2>
            <p className="text-lg text-muted-foreground">
              I've worked with startups and established enterprises to deliver 
              scalable, user-centric applications across various industries.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/experience">View Professional History</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <footer className="py-12 border-t glass mt-auto">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} DevSphere. Built with Next.js & Tailwind.
          </p>
          <div className="flex gap-8">
            <Link href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">GitHub</Link>
            <Link href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">LinkedIn</Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
