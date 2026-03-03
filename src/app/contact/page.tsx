
"use client";

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ArrowRight, Send, Loader2 } from "lucide-react";
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
                Let's <span className="text-primary">Collaborate</span>.
              </h1>
              <p className="text-muted-foreground text-xl leading-relaxed max-w-lg">
                I'm currently available for freelance projects, full-time opportunities, 
                or just to chat about interesting technical challenges.
              </p>
            </div>
            
            <div className="space-y-6">
              <Link 
                href="mailto:hello@devsphere.io" 
                className="flex items-center gap-6 group p-6 rounded-2xl border bg-card/50 hover:border-primary/50 transition-all"
              >
                <div className="bg-primary/10 p-4 rounded-xl text-primary">
                  <Mail className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Direct Email</p>
                  <p className="text-2xl font-bold font-headline group-hover:text-primary transition-colors">hello@devsphere.io</p>
                </div>
                <ArrowRight className="h-6 w-6 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>

              <div className="grid grid-cols-2 gap-4">
                <Button asChild variant="outline" className="h-20 rounded-2xl gap-3 text-lg">
                  <Link href="https://github.com" target="_blank">
                    <Github className="h-6 w-6" />
                    <span className="font-bold">GitHub</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-20 rounded-2xl gap-3 text-lg">
                  <Link href="https://linkedin.com" target="_blank">
                    <Linkedin className="h-6 w-6 text-[#0077b5]" />
                    <span className="font-bold">LinkedIn</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 border rounded-[2.5rem] p-8 md:p-12">
            <h3 className="text-2xl font-bold font-headline mb-8 flex items-center gap-2">
              <Send className="h-5 w-5 text-primary" /> Send a Message
            </h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-bold uppercase tracking-wider opacity-70">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-background/50 h-12 rounded-xl" disabled={isSubmitting} />
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
                      <FormLabel className="text-sm font-bold uppercase tracking-wider opacity-70">Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} className="bg-background/50 h-12 rounded-xl" disabled={isSubmitting} />
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
                      <FormLabel className="text-sm font-bold uppercase tracking-wider opacity-70">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project..." 
                          className="min-h-[150px] bg-background/50 rounded-xl resize-none" 
                          {...field} 
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full h-14 rounded-xl text-lg font-bold" disabled={isSubmitting}>
                  {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : "Send Inquiry"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </main>
    </div>
  );
}
