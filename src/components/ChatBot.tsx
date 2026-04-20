"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Loader2, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { chatWithAssistant } from "@/ai/flows/chat-flow";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "model";
  content: string;
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      content: "Hi! I'm Mohammad Suhail. How can I help you today? I can answer questions about my experience in full-stack development, automation, or discuss potential projects.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const currentInput = input;
    const userMsg: Message = { role: "user", content: currentInput };
    
    setInput("");
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      // Send history to provide context for conversational turns
      const response = await chatWithAssistant({
        message: currentInput,
        history: messages.slice(-4), // Limit history for stability
      });

      if (response && response.response) {
        setMessages((prev) => [...prev, { role: "model", content: response.response }]);
      } else {
        throw new Error("Invalid response");
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "model", content: "I'm having a slight technical issue with my chat system. Please feel free to reach me directly via the contact page!" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <Card className="mb-4 w-[calc(100vw-3rem)] sm:w-[420px] h-[550px] lg:h-[650px] max-h-[85vh] shadow-2xl border-white/10 glass-card animate-in fade-in slide-in-from-bottom-4 duration-300 overflow-hidden flex flex-col">
          <CardHeader className="p-4 border-b flex flex-row items-center justify-between space-y-0 bg-primary/5 shrink-0">
            <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Direct Chat with Suhail
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full hover:bg-foreground/10"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-0 flex-grow relative overflow-hidden">
            <ScrollArea className="h-full p-4" ref={scrollRef}>
              <div className="space-y-4 pb-4">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex gap-3 max-w-[85%]",
                      msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                    )}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border",
                      msg.role === "user" ? "bg-primary border-primary" : "bg-accent/10 border-white/5"
                    )}>
                      {msg.role === "user" ? (
                        <User className="h-4 w-4 text-white" />
                      ) : (
                        <Sparkles className="h-4 w-4 text-accent" />
                      )}
                    </div>
                    <div
                      className={cn(
                        "p-3.5 rounded-2xl text-[13px] md:text-sm font-medium leading-relaxed",
                        msg.role === "user"
                          ? "bg-primary text-white rounded-tr-none"
                          : "bg-muted text-foreground rounded-tl-none shadow-sm"
                      )}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3 mr-auto items-center text-muted-foreground animate-in fade-in">
                    <div className="w-8 h-8 rounded-full bg-accent/10 border border-white/5 flex items-center justify-center">
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] animate-pulse">Thinking...</span>
                  </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter className="p-4 border-t bg-muted/20 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex w-full items-center gap-2"
            >
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-background/50 border-white/5 h-12 text-sm focus:border-primary/50 rounded-xl"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                size="icon" 
                className="shrink-0 h-12 w-12 rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
                disabled={isLoading || !input.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="lg"
        className={cn(
          "h-16 w-16 rounded-full shadow-[0_15px_50px_rgba(139,92,246,0.4)] transition-all duration-500 hover:scale-110 active:scale-90 border-4 border-background",
          isOpen ? "bg-foreground text-background" : "bg-primary text-white"
        )}
      >
        {isOpen ? <X className="h-7 w-7" /> : <MessageSquare className="h-7 w-7" />}
      </Button>
    </div>
  );
}
