
import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Cpu, 
  Zap, 
  Sparkles,
  ArrowRight,
  GraduationCap,
  School,
  Award,
  Calendar,
  Workflow,
  Search
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { TechStack } from "@/components/TechStack";

export const metadata = {
  title: "About | Mohammad Suhail",
  description: "Learn more about the engineering philosophy and technical expertise behind Mohammad Suhail's work.",
};

export default function AboutPage() {
  const profileImg = PlaceHolderImages.find(img => img.id === "profile-photo")?.imageUrl || "/profileImage.png";

  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Khwaja Moinuddin Chishti Language University",
      period: "2021 — 2024",
      score: "CGPA: 7.28",
      description: "Studied computer science fundamentals including programming, software development, database management, and web technologies. Developed practical skills in full-stack development and problem solving through academic and project work.",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      degree: "Intermediate (Class XII)",
      institution: "St. Mary Public Inter College",
      period: "2020",
      score: "Percentage: 71%",
      description: "Completed higher secondary education with focus on core academic subjects while developing strong analytical and problem-solving skills.",
      icon: <School className="h-6 w-6" />
    },
    {
      degree: "High School (Class X)",
      institution: "St. Mary Public Inter College",
      period: "2018",
      score: "Percentage: 79.5%",
      description: "Built a strong academic foundation and developed early interest in technology and computer applications.",
      icon: <Award className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        {/* Intro Section */}
        <section className="px-6 mb-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-8">
              <Badge variant="outline" className="px-4 py-1 rounded-full text-[10px] font-black tracking-[0.3em] uppercase text-primary border-primary/20">
                The Architect
              </Badge>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] gradient-text uppercase">
                BRIDGING <br /> DATA & <br /> <span className="text-primary italic">AUTOMATION.</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed max-w-2xl">
                I develop modern web applications using React, Next.js, Node.js, and Firebase while also building automation solutions with Google Apps Script to streamline business processes and improve productivity.
              </p>
            </div>
            
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden group border border-white/5 shadow-2xl">
                <Image
                  src={profileImg}
                  alt="Mohammad Suhail Portrait"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-widest text-white">Open to Global Opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="px-6 py-32 border-y bg-muted/5">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="px-4 py-1 rounded-full text-[10px] font-black tracking-[0.2em] uppercase text-accent border-accent/20">
                The Narrative
              </Badge>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter">The Story <span className="text-accent italic">Behind the Code.</span></h2>
            </div>
            
            <div className="prose prose-invert max-w-none space-y-8 text-xl text-muted-foreground leading-relaxed font-medium">
              <p>
                My journey into technology began with full-stack web development, where I focused on building complete web applications from frontend interfaces to backend systems. I worked with modern technologies to create responsive user experiences, manage databases, and develop scalable APIs that support real-world products.
              </p>
              <p>
                While working on web projects, I became interested in improving workflows and reducing repetitive tasks. This led me to explore Google Apps Script, where I started building automation solutions that integrate with tools like Google Sheets and other Google Workspace services. These solutions helped automate data processing, reporting, and internal workflows.
              </p>
              <p>
                Alongside development, I also work professionally in Search Engine Optimization (SEO). In my role at a company, I focus on improving website visibility, optimizing technical SEO, and helping websites perform better in search engines through structured optimization strategies.
              </p>
              <p className="text-foreground font-black border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-2xl">
                Today, my work sits at the intersection of development, automation, and SEO, allowing me to build websites that are not only functional and scalable but also optimized for performance, efficiency, and search visibility.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Arsenal */}
        <div className="bg-background">
          <TechStack />
        </div>

        {/* Engineering Philosophy Bento */}
        <section className="px-6 py-32 bg-muted/5">
          <div className="max-w-7xl mx-auto space-y-16">
             <div className="max-w-3xl space-y-6">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Engineering <span className="text-accent italic">Philosophy</span></h2>
                <p className="text-xl text-muted-foreground">My approach to building software that lasts and empowers.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 glass-card p-12 rounded-[2.5rem] space-y-6 group">
                   <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-primary group-hover:rotate-6 transition-transform">
                      <Workflow className="h-8 w-8" />
                   </div>
                   <h3 className="text-3xl font-black tracking-tighter">The Automation Mindset</h3>
                   <p className="text-lg text-muted-foreground leading-relaxed">
                      I develop modern web applications using React, Next.js, Node.js, and Firebase while also building automation solutions with Google Apps Script to streamline business processes and improve productivity.
                   </p>
                </div>

                <div className="glass-card p-12 rounded-[2.5rem] space-y-6 bg-accent/5 flex flex-col justify-between">
                   <Search className="h-10 w-10 text-accent" />
                   <div className="space-y-4">
                      <h3 className="text-2xl font-black tracking-tighter">SEO Optimization</h3>
                      <p className="text-sm text-muted-foreground">I build with visibility in mind. Technical SEO isn't an afterthought—it's woven into the architecture of every project.</p>
                   </div>
                </div>

                <div className="glass-card p-12 rounded-[2.5rem] space-y-6 flex flex-col justify-between">
                   <Zap className="h-10 w-10 text-primary" />
                   <div className="space-y-4">
                      <h3 className="text-2xl font-black tracking-tighter">Velocity & Precision</h3>
                      <p className="text-sm text-muted-foreground">High-performance isn't just about code speed—it's about delivery speed without sacrificing quality.</p>
                   </div>
                </div>

                <div className="md:col-span-2 glass-card p-12 rounded-[2.5rem] space-y-8 flex flex-col md:flex-row gap-12 items-center">
                   <div className="space-y-6 flex-grow">
                      <div className="flex items-center gap-3 text-accent font-black text-[10px] tracking-widest uppercase">
                         <Sparkles className="h-4 w-4" /> The AI Edge
                      </div>
                      <h3 className="text-3xl font-black tracking-tighter">AI-Augmented Engineering</h3>
                      <p className="text-lg text-muted-foreground">
                         I integrate Large Language Models (LLMs) to create smarter applications—from 
                         automated data analysis in spreadsheets to intelligent, context-aware 
                         web interfaces.
                      </p>
                   </div>
                   <div className="shrink-0 bg-accent/10 p-10 rounded-full">
                      <Cpu className="h-16 w-16 text-accent" />
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="px-6 py-32 bg-background border-y">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="max-w-3xl space-y-6">
              <Badge variant="outline" className="px-4 py-1 rounded-full text-[10px] font-black tracking-[0.2em] uppercase text-primary border-primary/20">
                Academic Foundation
              </Badge>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Educational <span className="text-primary italic">Journey</span></h2>
              <p className="text-xl text-muted-foreground">Building the core principles of computer science and analytical thinking.</p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {education.map((item, index) => (
                <div 
                  key={index} 
                  className="glass-card p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row gap-8 md:gap-16 hover:bg-primary/5 transition-all duration-500 group"
                >
                  <div className="shrink-0">
                    <div className="w-20 h-20 rounded-[2rem] bg-background flex items-center justify-center text-primary shadow-xl border border-white/5 group-hover:scale-110 transition-transform duration-500">
                      {item.icon}
                    </div>
                  </div>
                  
                  <div className="space-y-6 flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <h3 className="text-2xl md:text-3xl font-black tracking-tighter">{item.degree}</h3>
                        <p className="text-primary font-bold text-lg flex items-center gap-2">
                          <School className="h-4 w-4" /> {item.institution}
                        </p>
                      </div>
                      <div className="flex flex-col md:items-end gap-2">
                        <Badge variant="secondary" className="w-fit px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest bg-primary/10 text-primary border-none">
                          <Calendar className="h-3 w-3 mr-2" /> {item.period}
                        </Badge>
                        <Badge variant="outline" className="w-fit px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest border-primary/30 text-foreground">
                          {item.score}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20">
           <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-12 md:p-24 text-center space-y-12 shadow-[0_40px_100px_rgba(139,92,246,0.4)]">
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white">
                 READY TO BUILD <br /> THE <span className="italic opacity-80">FUTURE?</span>
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-12 h-16 text-lg font-bold">
                    <Link href="/contact">Start a Conversation</Link>
                 </Button>
                 <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 rounded-full px-12 h-16 text-lg font-bold gap-3 group">
                    <Link href="/projects">
                       View My Work <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                 </Button>
              </div>
           </div>
        </section>
      </main>
    </div>
  );
}
