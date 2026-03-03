
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { client } from "@/lib/sanity";
import { projectBySlugQuery, projectsQuery } from "@/lib/queries";
import { Project } from "@/types";
import { Github, ExternalLink, ArrowLeft, Calendar, Tag, Info, Cpu, Code2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MOCK_PROJECTS } from "@/lib/mock-data";
import { PortableText } from "@portabletext/react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  let projects: Project[] = [];
  try {
    projects = await client.fetch(projectsQuery);
  } catch (e) {}

  const displayProjects = projects.length > 0 ? projects : MOCK_PROJECTS;
  
  return displayProjects.map((project) => ({
    slug: project.slug.current,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  let project: Project | null = null;
  
  try {
    project = await client.fetch(projectBySlugQuery, { slug });
  } catch (e) {}

  if (!project) {
    project = MOCK_PROJECTS.find(p => p.slug.current === slug) || null;
  }

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Case Study`,
    description: project.summary,
    openGraph: {
      images: [{ url: project.mainImage }],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  let project: Project | null = null;
  
  try {
    project = await client.fetch(projectBySlugQuery, { slug });
  } catch (e) {}

  if (!project) {
    project = MOCK_PROJECTS.find(p => p.slug.current === slug) || null;
  }

  if (!project) notFound();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow pb-32">
        {/* Immersive Cinematic Hero */}
        <div className="relative h-[70vh] min-h-[600px] w-full flex items-end">
          <Image
            src={project.mainImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Masks */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent opacity-80" />
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20">
            <div className="max-w-4xl space-y-8">
              <Button asChild variant="ghost" className="bg-white/10 backdrop-blur-xl border border-white/10 hover:bg-white hover:text-black rounded-full px-6 transition-all mb-8">
                <Link href="/projects" className="gap-2 font-bold uppercase tracking-widest text-xs">
                  <ArrowLeft className="h-4 w-4" /> All Projects
                </Link>
              </Button>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md">
                      {tech}
                    </span>
                  ))}
                </div>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-white">
                  {project.title}
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Primary Analysis */}
            <div className="lg:col-span-8 space-y-16">
              <section className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-px flex-grow bg-white/10" />
                  <h2 className="text-sm font-black uppercase tracking-[0.4em] text-primary shrink-0">Overview</h2>
                  <div className="h-px w-12 bg-white/10" />
                </div>
                <p className="text-3xl md:text-4xl font-black tracking-tighter leading-tight italic">
                  "{project.summary}"
                </p>
                <div className="prose prose-invert max-w-none text-muted-foreground text-xl leading-relaxed space-y-8">
                  {project.description ? (
                    <div className="sanity-content">
                      <PortableText value={project.description} />
                    </div>
                  ) : (
                    <p>
                      This project involved building a highly scalable solution focused on performance and reliability.
                      Leveraging a modern tech stack, we delivered a seamless user experience that solved complex business logic.
                    </p>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                    <div className="space-y-4">
                      <h4 className="text-white font-bold flex items-center gap-2">
                        <Cpu className="h-5 w-5 text-primary" /> Technical Strategy
                      </h4>
                      <p className="text-base">
                        Implementation involved a decoupled architecture using high-performance 
                        edge workers to minimize latency and ensure global availability.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-white font-bold flex items-center gap-2">
                        <Code2 className="h-5 w-5 text-accent" /> Key Features
                      </h4>
                      <p className="text-base">
                        Real-time data synchronization, adaptive user interfaces, 
                        and a robust automated deployment pipeline.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Large Immersive Breakout Image */}
              <div className="relative aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                <Image 
                  src={project.mainImage} 
                  alt="Interface detail" 
                  fill 
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Interface Detail Overview</span>
                </div>
              </div>
            </div>

            {/* Sidebar Details Bento */}
            <div className="lg:col-span-4 space-y-8">
              <div className="sticky top-32 space-y-6">
                
                {/* Specs Card */}
                <div className="glass-card p-10 rounded-[2.5rem] space-y-10">
                  <div className="space-y-2">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" /> Published
                    </h3>
                    <p className="text-2xl font-black tracking-tighter">
                      {new Date(project.publishedAt).toLocaleDateString('en-US', {
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-2">
                      <Tag className="h-4 w-4 text-accent" /> Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="px-3 py-1 bg-white/5 border-none font-bold uppercase tracking-tighter text-[9px]">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-white/5">
                    {project.projectLink && (
                      <Button asChild size="lg" className="w-full gap-3 rounded-full h-14 text-sm font-black uppercase tracking-widest shadow-xl shadow-primary/20">
                        <Link href={project.projectLink} target="_blank">
                          Live Prototype <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                    {project.githubLink && (
                      <Button asChild variant="outline" size="lg" className="w-full gap-3 rounded-full h-14 text-sm font-black uppercase tracking-widest glass-card border-white/10">
                        <Link href={project.githubLink} target="_blank">
                          Source Code <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Additional context card */}
                <div className="glass-card p-8 rounded-[2.5rem] bg-accent/5 border-accent/20">
                   <h4 className="font-bold flex items-center gap-2 mb-4">
                     <Info className="h-4 w-4 text-accent" /> Role & Impact
                   </h4>
                   <p className="text-sm text-muted-foreground leading-relaxed">
                     As the Lead Architect, I oversaw the end-to-end delivery of this project, 
                     ensuring technical excellence and meeting all performance targets.
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
