import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Code2, Cpu } from "lucide-react";

const TECH_STACK = [
  "Next.js", "React", "TypeScript", "Node.js", "GraphQL", "PostgreSQL", 
  "AWS", "Docker", "Tailwind", "Python", "Rust", "GenAI"
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-24 px-4 text-center">
      {/* Background Layer */}
      <div className="absolute inset-0 hero-grid -z-10 opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-20 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[180px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[180px]" />
      </div>

      <div className="max-w-6xl space-y-10 relative z-10">
        <div className="flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-black tracking-[0.2em] uppercase text-primary animate-in fade-in slide-in-from-top-4 duration-1000">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new projects
          </div>

          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter leading-[0.8] gradient-text animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            CRAFTING <br /> DIGITAL <br /> <span className="text-primary italic">FRONTIERS.</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            A Senior Software Architect dedicated to building 
            ultra-performance web systems and scalable AI-driven 
            infrastructure.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <Button asChild size="lg" className="rounded-full px-10 h-16 text-lg font-bold gap-3 group bg-primary hover:bg-primary/90 shadow-[0_0_40px_rgba(139,92,246,0.3)]">
            <Link href="/projects">
              Explore Works
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-16 text-lg font-bold gap-3 glass-card hover:bg-white/5">
            <Link href="/contact">
              Let's Connect
            </Link>
          </Button>
        </div>

        {/* Floating Icons Decor */}
        <div className="hidden lg:block">
          <div className="absolute top-20 -left-20 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl -rotate-12 animate-bounce duration-[3000ms]">
            <Code2 className="h-8 w-8 text-primary" />
          </div>
          <div className="absolute bottom-40 -right-20 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl rotate-12 animate-bounce duration-[4000ms]">
            <Cpu className="h-8 w-8 text-accent" />
          </div>
          <div className="absolute top-60 -right-10 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl -rotate-6 animate-pulse">
            <Terminal className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>

        {/* Tech Marquee */}
        <div className="pt-24 overflow-hidden w-full relative">
          <div className="flex whitespace-nowrap animate-marquee gap-16 items-center opacity-20 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default">
            {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
              <span key={i} className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic outline-text">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
