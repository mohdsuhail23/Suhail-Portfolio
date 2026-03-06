
import { 
  Zap, 
  Atom, 
  Database, 
  Code2, 
  Cloud, 
  Sparkles, 
  Hexagon, 
  ShieldCheck, 
  Palette, 
  FileCode2, 
  Share2,
  Terminal,
  Flame,
  Server,
  Leaf
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const STACK = [
  {
    name: "Next.js 15",
    icon: <Zap className="h-6 w-6 text-primary" />,
    category: "Frontend",
    description: "App Router, RSC, Server Actions"
  },
  {
    name: "React 19",
    icon: <Atom className="h-6 w-6 text-accent" />,
    category: "Frontend",
    description: "Concurrent rendering, Hooks"
  },
  {
    name: "TypeScript",
    icon: <ShieldCheck className="h-6 w-6 text-blue-500" />,
    category: "Language",
    description: "Type-safe development"
  },
  {
    name: "JavaScript (ES6+)",
    icon: <Code2 className="h-6 w-6 text-yellow-400" />,
    category: "Language",
    description: "Modern web standard"
  },
  {
    name: "Node.js",
    icon: <Hexagon className="h-6 w-6 text-green-500" />,
    category: "Backend",
    description: "Scalable server environments"
  },
  {
    name: "Express.js",
    icon: <Server className="h-6 w-6 text-gray-400" />,
    category: "Backend",
    description: "Minimalist web framework"
  },
  {
    name: "Firebase",
    icon: <Flame className="h-6 w-6 text-orange-500" />,
    category: "Cloud/DB",
    description: "Real-time apps & Auth"
  },
  {
    name: "MongoDB",
    icon: <Leaf className="h-6 w-6 text-green-600" />,
    category: "Database",
    description: "NoSQL document storage"
  },
  {
    name: "GraphQL",
    icon: <Share2 className="h-6 w-6 text-pink-500" />,
    category: "API",
    description: "Declarative data fetching"
  },
  {
    name: "Google Apps Script",
    icon: <FileCode2 className="h-6 w-6 text-yellow-500" />,
    category: "Automation",
    description: "Workspace & API Integration"
  },
  {
    name: "Tailwind CSS",
    icon: <Palette className="h-6 w-6 text-cyan-400" />,
    category: "Styling",
    description: "Utility-first modern UI"
  },
  {
    name: "Generative AI",
    icon: <Sparkles className="h-6 w-6 text-purple-400" />,
    category: "AI",
    description: "LLM & Genkit Integration"
  }
];

export function TechStack() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="space-y-4">
          <Badge variant="outline" className="px-4 py-1 rounded-full text-[10px] font-black tracking-[0.2em] uppercase text-primary border-primary/20">
            Technical Arsenal
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            Technologies <br /> I use to <span className="text-primary italic">Build.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {STACK.map((tech) => (
            <div 
              key={tech.name} 
              className="glass-card p-8 rounded-[2rem] space-y-6 group hover:bg-primary/5 transition-all duration-500"
            >
              <div className="flex items-start justify-between">
                <div className="p-4 rounded-2xl bg-foreground/5 group-hover:bg-background group-hover:scale-110 transition-all duration-500">
                  {tech.icon}
                </div>
                <Badge variant="secondary" className="text-[9px] font-black uppercase tracking-tighter opacity-50">
                  {tech.category}
                </Badge>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold tracking-tight">{tech.name}</h3>
                <p className="text-sm text-muted-foreground font-medium leading-tight">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
