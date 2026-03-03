import { Experience } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

interface TimelineProps {
  experiences: Experience[];
}

export function Timeline({ experiences }: TimelineProps) {
  const sortedExperiences = [...experiences].sort((a, b) => a.order - b.order);

  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/20 before:via-accent/20 before:to-transparent">
      {sortedExperiences.map((exp, idx) => (
        <div
          key={exp._id}
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
        >
          {/* Icon */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            <Briefcase className="h-5 w-5 text-primary" />
          </div>

          {/* Content Card */}
          <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 bg-card hover:border-primary/50 transition-colors">
            <CardContent className="p-2 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold font-headline">{exp.role}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <span className="text-sm font-semibold text-muted-foreground bg-muted px-2 py-1 rounded">
                  {exp.duration}
                </span>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-4">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
