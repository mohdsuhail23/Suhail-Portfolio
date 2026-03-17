
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { client } from "@/lib/sanity";
import { projectBySlugQuery, projectsQuery } from "@/lib/queries";
import { Project } from "@/types";
import { Github, ExternalLink, ArrowLeft, Calendar, Tag, ImageOff, Layers } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MOCK_PROJECTS } from "@/lib/mock-data";
import { PortableText } from "@portabletext/react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60; // Ensure data is updated every minute

export async function generateStaticParams() {
  let projects: Project[] = [];
  try {
    projects = await client.fetch(projectsQuery);
  } catch (e) {
    console.error("Static Params Fetch Error:", e);
  }

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
      images: project.mainImage ? [{ url: project.mainImage }] : [],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  let project: Project | null = null;
  
  try {
    project = await client.fetch(projectBySlugQuery, { slug });
  } catch (e) {
    console.error("Project Fetch Error:", e);
  }

  if (!project) {
    project = MOCK_PROJECTS.find(p => p.slug.current === slug) || null;
  }

  if (!project) notFound();

  const publishDate = project.publishedAt 
    ? new Date(project.publishedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    : "Recently Published";

  const heroImage = project.mainImage || "https://picsum.photos/seed/placeholder-detail/1920/1080";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow pb-32">
        {/* Immersive Cinematic Hero */}
        <div className="relative h-[70vh] min-h-[600px] w-full flex items-end bg-muted/20">
          {project.mainImage ? (
            <Image
              src={heroImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/10">
              <ImageOff className="h-32 w-32" />
            </div>
          )}
          
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
                  {project.technologies?.slice(0, 3).map(tech => (
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
                
                <div className="space-y-6">
                  <p className="text-3xl md:text-4xl font-black tracking-tighter leading-tight italic">
                    "{project.summary}"
                  </p>

                  {/* Core Tech Stack in Overview */}
                  <div className="flex flex-wrap gap-3 py-4 border-y border-white/5">
                    <div className="flex items-center gap-2 text-muted-foreground mr-4">
                      <Layers className="h-4 w-4 text-primary" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Stack:</span>
                    </div>
                    {project.technologies?.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-primary/20 text-primary px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {project.description && (
                  <div className="prose prose-invert max-w-none text-muted-foreground text-xl leading-relaxed space-y-8">
                    <div className="sanity-content">
                      <PortableText value={project.description} />
                    </div>
                  </div>
                )}
              </section>

              {/* Large Immersive Breakout Image */}
              <div className="relative aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl bg-muted/10">
                {project.mainImage ? (
                  <Image 
                    src={heroImage} 
                    alt="Interface detail" 
                    fill 
                    className="object-cover opacity-80"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/5">
                    <ImageOff className="h-24 w-24" />
                  </div>
                )}
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
                      {publishDate}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-2">
                      <Tag className="h-4 w-4 text-accent" /> Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((tech) => (
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
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
