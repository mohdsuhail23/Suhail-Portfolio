import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Terminal, Sparkles, Zap, Shield, Cpu } from "lucide-react";

const TECH_STACK = [
  "Next.js", "React", "TypeScript", "Node.js", "GraphQL", "PostgreSQL", 
  "AWS", "Docker", "Tailwind", "Python", "Rust", "GenAI"
];

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden pt-44 pb-24 px-4 text-center hero-gradient">
      <div className="max-w-5xl space-y-12 relative z-10">
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-primary/80 backdrop-blur-md animate-in fade-in slide-in-from-top-4 duration-1000">
          <Sparkles className="h-3 w-3 fill-primary" />
          Building High-Performance Systems
        </div>

        <div className="space-y-6">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] gradient-text animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            ENGINEERING <br /> <span className="text-primary">DIGITAL</span> EXCELLENCE.
          </h1>

          <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Full-stack architect specializing in high-concurrency 
            web ecosystems. I bridge the gap between complex 
            infrastructure and world-class user experiences.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <Button asChild size="lg" className="rounded-full px-10 h-14 text-base font-bold gap-3 group bg-primary hover:bg-primary/90">
            <Link href="/projects">
              Selected Works
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-14 text-base font-bold gap-3 glass-card hover:bg-white/5">
            <Link href="/contact">
              Let's Talk
            </Link>
          </Button>
        </div>

        {/* Tech Marquee */}
        <div className="pt-20 overflow-hidden w-full relative group">
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="flex whitespace-nowrap animate-marquee gap-12 items-center opacity-30 group-hover:opacity-60 transition-opacity">
            {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
              <span key={i} className="text-2xl font-black tracking-tighter uppercase italic">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[160px]" />
      </div>
    </section>
  );
}