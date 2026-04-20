
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Download } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const TECH_STACK = [
  "Next.js", "React", "TypeScript", "JavaScript", "Node.js", "Express.js", 
  "GraphQL", "MongoDB", "Firebase", "Google Apps Script", "Workspace API", 
  "Tailwind", "Cloud Functions", "GenAI"
];

interface HeroProps {
  cvUrl?: string;
}

export function Hero({ cvUrl }: HeroProps) {
  const profileImg = PlaceHolderImages.find(img => img.id === "profile-photo")?.imageUrl || "/profileImage.png";

  const handleDownloadCV = () => {
    if (cvUrl) {
      window.open(cvUrl, '_blank');
    } else {
      alert("CV is being updated. Please check back shortly or contact me directly.");
    }
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-[80vh] xl:min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-28 pb-16 px-4">
      {/* Background Layer */}
      <div className="absolute inset-0 hero-grid -z-10 opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-20 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[180px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[180px]" />
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-primary animate-in fade-in slide-in-from-top-4 duration-1000">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new projects
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-black tracking-tighter leading-[0.95] gradient-text animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 uppercase">
              Building <br /> Scalable <br /> Web Apps & <br /> <span className="text-primary italic">Automations.</span>
            </h1>

            <p className="max-w-xl text-base md:text-lg lg:text-lg xl:text-xl text-muted-foreground font-black tracking-tight leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Full-Stack Developer & <br className="hidden md:block" /> 
              <span className="text-foreground">Google Apps Script Engineer</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Button asChild size="lg" className="rounded-full px-8 h-12 text-sm font-bold gap-3 group bg-primary hover:bg-primary/90 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
              <Link href="/projects">
                Explore Works
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild variant="outline" size="lg" className="rounded-full px-6 h-12 text-sm font-bold gap-3 glass-card hover:bg-foreground/5">
                <Link href="/contact">
                  Connect
                </Link>
              </Button>
              <Button 
                onClick={handleDownloadCV}
                variant="ghost" 
                size="lg" 
                className="rounded-full px-6 h-12 text-sm font-bold gap-3 border border-transparent hover:border-primary/20"
              >
                <Download className="h-4 w-4" />
                CV
              </Button>
            </div>
          </div>
        </div>

        {/* Optimized Profile Photo Container for Laptops */}
        <div className="relative flex justify-center lg:justify-end animate-in fade-in zoom-in-95 duration-1000 delay-500">
          <div className="relative w-full max-w-[260px] sm:max-w-[340px] lg:max-w-[280px] xl:max-w-[360px] aspect-[4/5] rounded-[2.5rem] overflow-hidden group border border-white/5 shadow-2xl">
            <Image
              src={profileImg}
              alt="Professional Portrait"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              priority
              data-ai-hint="professional portrait"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 280px, 360px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute bottom-4 left-4 right-4 p-4 glass rounded-xl border-white/10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[8px] font-black uppercase tracking-widest text-primary mb-1">Expert Developer</p>
                  <h4 className="text-base font-bold tracking-tighter">Full-Stack & GAS</h4>
                </div>
                <div className="flex gap-2">
                   <div className="w-7 h-7 rounded-lg bg-foreground/10 flex items-center justify-center">
                      <Code2 className="h-3.5 w-3.5" />
                   </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/10 rounded-full blur-[60px] -z-10" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-[60px] -z-10" />
        </div>
      </div>

      {/* Tech Marquee */}
      <div className="mt-16 lg:mt-20 w-full group">
        <div className="overflow-hidden w-full relative">
          <div className="flex whitespace-nowrap animate-marquee gap-12 items-center opacity-10 blur-[1px] grayscale group-hover:grayscale-0 group-hover:opacity-60 group-hover:blur-0 transition-all duration-700 cursor-default">
            {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
              <span key={i} className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter uppercase italic outline-text">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
