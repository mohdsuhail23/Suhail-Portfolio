import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact | DevSphere Portfolio",
  description: "Get in touch for collaboration, hire opportunities, or technical inquiries.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-24 px-4">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter">Let's <span className="text-primary">Connect</span>.</h1>
              <p className="text-muted-foreground text-lg">
                Whether you have a specific project in mind or just want to 
                discuss the latest in tech, I'm always open to new conversations.
              </p>
            </div>
            
            <div className="space-y-4">
              <Link 
                href="mailto:hello@devsphere.io" 
                className="flex items-center gap-4 group p-4 rounded-xl border hover:border-primary/50 transition-all hover:bg-primary/5"
              >
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Email Me</p>
                  <p className="text-xl font-bold font-headline group-hover:text-primary transition-colors">hello@devsphere.io</p>
                </div>
                <ArrowRight className="h-5 w-5 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>

              <div className="flex gap-4">
                <Button asChild variant="outline" className="flex-1 h-16 rounded-xl gap-3">
                  <Link href="https://github.com" target="_blank">
                    <Github className="h-6 w-6" />
                    <span className="font-bold">GitHub</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="flex-1 h-16 rounded-xl gap-3">
                  <Link href="https://linkedin.com" target="_blank">
                    <Linkedin className="h-6 w-6 text-[#0077b5]" />
                    <span className="font-bold">LinkedIn</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 rounded-3xl p-8 space-y-8 border flex flex-col justify-center">
            <h3 className="text-2xl font-bold font-headline">Office Hours</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-border pb-4">
                <span className="text-muted-foreground">Monday - Friday</span>
                <span className="font-bold">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-4">
                <span className="text-muted-foreground">Saturday</span>
                <span className="font-bold">Closed</span>
              </div>
              <div className="flex justify-between items-center pb-4">
                <span className="text-muted-foreground">Timezone</span>
                <span className="font-bold">UTC+00 (Remote)</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic">
              "I typically respond to all inquiries within 24 hours."
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
