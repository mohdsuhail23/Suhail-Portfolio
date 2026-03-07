
import { Globe, User, Layers, Zap, Shield, Workflow } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function About() {
  return (
    <section id="about" className="py-24 px-4 bg-muted/20 scroll-mt-24">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="space-y-4 max-w-3xl">
          <Badge variant="outline" className="px-4 py-1 rounded-full text-[10px] font-black tracking-[0.2em] uppercase text-primary border-primary/20">
            The Philosophy
          </Badge>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
            Efficiency Through <span className="text-primary italic">Intelligence</span>, <br /> Scale Through Design.
          </h2>
        </div>

        <div className="bento-grid">
          {/* Big Story Card */}
          <div className="md:col-span-2 md:row-span-2 glass-card p-10 flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Workflow className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-black tracking-tighter">The Automation Mindset</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I develop modern web applications using React, Next.js, Node.js, and Firebase while also building automation solutions with Google Apps Script to streamline business processes and improve productivity.
              </p>
            </div>
            <div className="pt-8 flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-primary">
              <Globe className="h-4 w-4" /> Full-Stack & Google Workspace Specialist
            </div>
          </div>

          {/* Quick Stats */}
          <div className="glass-card p-8 flex flex-col justify-center items-center text-center gap-4">
            <h4 className="text-6xl font-black tracking-tighter text-accent">06+</h4>
            <p className="text-sm font-bold uppercase tracking-widest opacity-60">Years Experience</p>
          </div>

          <div className="glass-card p-8 flex flex-col justify-center items-center text-center gap-4">
            <h4 className="text-6xl font-black tracking-tighter text-primary">40+</h4>
            <p className="text-sm font-bold uppercase tracking-widest opacity-60">Automations Deployed</p>
          </div>

          {/* Skills Card */}
          <div className="md:col-span-2 glass-card p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-accent/10 p-3 rounded-xl text-accent">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-black tracking-tighter">Strategic Tech Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Next.js 15", "Google Apps Script", "React 19", "Firebase", "MongoDB", "Express.js", "Workspace Automation", "Tailwind CSS", "TypeScript"].map(skill => (
                <Badge key={skill} variant="secondary" className="px-3 py-1 rounded-lg font-bold text-[10px] uppercase tracking-tighter">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Values Cards */}
          <div className="glass-card p-8 space-y-4 hover:border-primary/50 transition-colors">
            <Zap className="h-8 w-8 text-primary" />
            <h4 className="text-xl font-bold tracking-tighter">Zero Latency</h4>
            <p className="text-sm text-muted-foreground">Optimization is built into every layer, from database queries to front-end rendering.</p>
          </div>

          <div className="glass-card p-8 space-y-4 hover:border-accent/50 transition-colors">
            <Shield className="h-8 w-8 text-accent" />
            <h4 className="text-xl font-bold tracking-tighter">Bulletproof Logic</h4>
            <p className="text-sm text-muted-foreground">Mission-critical systems designed for 99.9% uptime and reliable performance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
