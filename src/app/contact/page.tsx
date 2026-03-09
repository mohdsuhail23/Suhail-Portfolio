
"use client";

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, ArrowRight, Send, Loader2, Phone } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/app/actions/contact";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const result = await submitContactForm(values);
      if (result.success) {
        toast({
          title: "Message Sent Successfully",
          description: result.message,
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Submission Error",
          description: result.message,
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-8">
              <Badge variant="outline" className="px-4 py-1 rounded-full text-[10px] font-black tracking-[0.3em] uppercase text-primary border-primary/20">
                Get In Touch
              </Badge>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] gradient-text uppercase">
                Let's <br /> <span className="text-primary italic">Collaborate.</span>
              </h1>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-lg">
                I'm currently available for freelance projects, full-time opportunities, 
                or just to chat about interesting technical challenges.
              </p>
            </div>
            
            <div className="space-y-6">
              <Link 
                href="mailto:mohdsuhail2762@gmail.com" 
                className="flex items-center gap-6 group p-8 rounded-[2rem] border bg-card/50 hover:border-primary/50 transition-all shadow-xl hover:shadow-primary/5"
              >
                <div className="bg-primary/10 p-4 rounded-2xl text-primary group-hover:scale-110 transition-transform">
                  <Mail className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-1">Direct Email</p>
                  <p className="text-xl sm:text-2xl font-black tracking-tighter group-hover:text-primary transition-colors">mohdsuhail2762@gmail.com</p>
                </div>
                <ArrowRight className="h-6 w-6 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>

              <div className="flex items-center gap-6 p-8 rounded-[2rem] border bg-card/50 shadow-xl">
                <div className="bg-accent/10 p-4 rounded-2xl text-accent">
                  <Phone className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-1">Direct Line</p>
                  <p className="text-2xl font-black tracking-tighter">+91-7054328427</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Button asChild variant="outline" className="h-24 rounded-[2rem] gap-4 text-lg font-black tracking-tighter border-white/5 bg-card/50 hover:bg-primary/5 hover:border-primary/20 transition-all">
                  <Link href="https://github.com/Suhail1102" target="_blank">
                    <Github className="h-8 w-8" />
                    <span>GitHub</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-24 rounded-[2rem] gap-4 text-lg font-black tracking-tighter border-white/5 bg-card/50 hover:bg-[#0077b5]/5 hover:border-[#0077b5]/20 transition-all">
                  <Link href="https://www.linkedin.com/in/mohammad-suhail-406a81250/" target="_blank">
                    <Linkedin className="h-8 w-8 text-[#0077b5]" />
                    <span>LinkedIn</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-[3rem] p-8 md:p-12 self-start sticky top-32">
            <div className="flex items-center gap-3 mb-12">
               <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Send className="h-6 w-6" />
               </div>
               <h3 className="text-3xl font-black tracking-tighter">Send an Inquiry</h3>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} className="bg-background/50 h-16 rounded-2xl border-white/5 focus:border-primary/50 text-lg font-medium" disabled={isSubmitting} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="hello@example.com" {...field} className="bg-background/50 h-16 rounded-2xl border-white/5 focus:border-primary/50 text-lg font-medium" disabled={isSubmitting} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Your Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe your project or just say hi..." 
                          className="min-h-[180px] bg-background/50 rounded-2xl border-white/5 focus:border-primary/50 text-lg font-medium resize-none p-6" 
                          {...field} 
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full h-18 rounded-2xl text-xl font-black uppercase tracking-widest shadow-2xl shadow-primary/20 group" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <><Loader2 className="mr-3 h-6 w-6 animate-spin" /> Processing...</>
                  ) : (
                    <span className="flex items-center gap-3">
                      Dispatch Message <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </main>
    </div>
  );
}
