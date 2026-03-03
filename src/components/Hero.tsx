import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden py-24 md:py-32 lg:py-48 px-4 text-center">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1 text-sm font-medium text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Available for new opportunities
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9]">
          Architecting the <span className="gradient-text">Future</span> of Web.
        </h1>

        <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground font-body">
          Specialized in high-performance full-stack applications with Next.js, 
          Node.js, and TypeScript. I transform complex business requirements 
          into elegant, scalable solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="rounded-full px-8 gap-2 group">
            <Link href="/projects">
              View My Work
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 gap-2">
            <Link href="/contact">
              Get in Touch
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="rounded-full px-8 gap-2">
            <Link href="#" target="_blank">
              <Download className="h-4 w-4" />
              Download CV
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
