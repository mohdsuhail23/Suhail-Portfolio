
import { Navbar } from "@/components/Navbar";
import { Timeline } from "@/components/Timeline";
import { client } from "@/lib/sanity";
import { experienceQuery } from "@/lib/queries";
import { Experience } from "@/types";
import { MOCK_EXPERIENCE } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Experience | Mohammad Suhail",
  description: "A chronological timeline of my professional career as a software engineer and automation specialist.",
};

// Set revalidate to 60 seconds to see changes quickly
export const revalidate = 60;

export default async function ExperiencePage() {
  let experiences: Experience[] = [];
  
  try {
    // Fetch experiences from Sanity
    experiences = await client.fetch(experienceQuery);
  } catch (error) {
    console.error("Failed to fetch experience from Sanity:", error);
  }

  // Use Sanity data if available, otherwise fallback to mock data for preview
  const displayExperiences = experiences && experiences.length > 0 ? experiences : MOCK_EXPERIENCE;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-8 mb-24">
            <Badge variant="outline" className="px-4 py-1 rounded-full text-[10px] font-black tracking-[0.3em] uppercase text-primary border-primary/20">
              The Trajectory
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] gradient-text uppercase">
              CAREER <br /> <span className="text-primary italic">JOURNEY.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed max-w-2xl">
              A timeline of my professional evolution, building scalable 
              systems and high-impact business automations.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Timeline experiences={displayExperiences} />
          </div>
        </div>
      </main>
    </div>
  );
}
