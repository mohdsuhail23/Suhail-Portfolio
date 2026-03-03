import { Navbar } from "@/components/Navbar";
import { Timeline } from "@/components/Timeline";
import { MOCK_EXPERIENCE } from "@/lib/mock-data";

export const metadata = {
  title: "Experience | DevSphere Portfolio",
  description: "A chronological timeline of my professional career as a software engineer.",
};

export default function ExperiencePage() {
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
          
          <Timeline experiences={MOCK_EXPERIENCE} />
        </div>
      </main>
    </div>
  );
}
