import { Navbar } from "@/components/Navbar";
import { Timeline } from "@/components/Timeline";
import { client } from "@/lib/sanity";
import { experienceQuery } from "@/lib/queries";
import { Experience } from "@/types";

export const metadata = {
  title: "Experience | DevSphere Portfolio",
  description: "A chronological timeline of my professional career as a software engineer.",
};

export const revalidate = 3600; // Hourly revalidation for career data

export default async function ExperiencePage() {
  const experiences: Experience[] = await client.fetch(experienceQuery);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6 mb-24 text-center">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter">Career <span className="text-accent">Journey</span></h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              My professional path through different companies and roles, 
              consistently pushing the boundaries of web engineering.
            </p>
          </div>
          
          <Timeline experiences={experiences} />
        </div>
      </main>
    </div>
  );
}
