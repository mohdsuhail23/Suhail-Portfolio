import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MOCK_PROJECTS } from "@/lib/mock-data";
import { Github, ExternalLink, ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = MOCK_PROJECTS.find((p) => p.slug.current === slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | DevSphere Portfolio`,
    description: project.summary,
    openGraph: {
      images: [{ url: project.mainImage }],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = MOCK_PROJECTS.find((p) => p.slug.current === slug);

  if (!project) notFound();

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "name": project.title,
    "description": project.summary,
    "programmingLanguage": project.technologies,
    "codeRepository": project.githubLink || undefined,
    "url": project.projectLink || undefined,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
        />
      </head>
      <main className="flex-grow pb-24">
        {/* Project Hero */}
        <div className="relative h-[50vh] min-h-[400px] w-full">
          <Image
            src={project.mainImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-4 md:p-12">
            <div className="max-w-5xl mx-auto space-y-6">
              <Button asChild variant="ghost" size="sm" className="bg-background/20 backdrop-blur-md text-white hover:bg-white hover:text-black">
                <Link href="/projects" className="gap-2">
                  <ArrowLeft className="h-4 w-4" /> Back to Projects
                </Link>
              </Button>
              <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-white drop-shadow-lg">
                {project.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold font-headline">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.summary}
              </p>
              <div className="prose prose-invert max-w-none text-muted-foreground">
                <p>
                  This project was designed with scalability and performance at its core. 
                  Leveraging modern architectural patterns, it addresses high-concurrency 
                  challenges while maintaining a seamless user experience. 
                </p>
                <p>
                  Key features include highly optimized data fetching, atomic design components,
                  and a rigorous focus on accessibility (WCAG 2.1 compliance).
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <div className="bg-card border rounded-2xl p-6 space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                  <Calendar className="h-4 w-4" /> Published
                </h3>
                <p className="font-bold">
                  {new Date(project.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric'
                  })}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-bold uppercase tracking-tighter text-[10px]">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t">
                {project.projectLink && (
                  <Button asChild className="w-full gap-2 rounded-xl">
                    <Link href={project.projectLink} target="_blank">
                      Live Preview <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
                {project.githubLink && (
                  <Button asChild variant="outline" className="w-full gap-2 rounded-xl">
                    <Link href={project.githubLink} target="_blank">
                      Source Code <Github className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
