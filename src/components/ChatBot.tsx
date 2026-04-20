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
      content: "Hi! I'm Mohammad Suhail. How can I help you today? Feel free to ask about my work in full-stack development or business automation.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom whenever messages or loading state changes
  useEffect(() => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages, isLoading, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const currentMessage = input.trim();
    const newUserMessage: Message = { role: "user", content: currentMessage };
    
    // Save previous messages for history before updating local state
    const history = [...messages];
    
    // Optimistically update UI
    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const result = await chatWithAssistant({
        message: currentMessage,
        history: history,
      });

      if (result && result.response) {
        setMessages((prev) => [...prev, { role: "model", content: result.response }]);
      }
    } catch (error) {
      console.error("ChatBot Client Error:", error);
      setMessages((prev) => [
        ...prev, 
        { 
          role: "model", 
          content: "I'm having a slight technical issue. Please feel free to reach me directly via my contact page or email!" 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <Card className="mb-4 w-[calc(100vw-3rem)] sm:w-[400px] h-[600px] max-h-[80vh] shadow-2xl border-white/10 glass-card animate-in fade-in slide-in-from-bottom-4 duration-300 overflow-hidden flex flex-col">
          <CardHeader className="p-4 border-b flex flex-row items-center justify-between space-y-0 bg-primary/5 shrink-0">
            <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Direct Line: Suhail
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
          
          <CardContent className="p-0 flex-grow relative overflow-hidden bg-background/30">
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
                      "w-7 h-7 rounded-full flex items-center justify-center shrink-0 border",
                      msg.role === "user" ? "bg-primary border-primary" : "bg-accent/10 border-white/5"
                    )}>
                      {msg.role === "user" ? (
                        <User className="h-3.5 w-3.5 text-white" />
                      ) : (
                        <Sparkles className="h-3.5 w-3.5 text-accent" />
                      )}
                    </div>
                    <div
                      className={cn(
                        "p-3 rounded-2xl text-[13px] leading-relaxed",
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
                  <div className="flex gap-3 mr-auto items-center text-muted-foreground">
                    <div className="w-7 h-7 rounded-full bg-accent/10 border border-white/5 flex items-center justify-center">
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    </div>
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] animate-pulse">Suhail is typing...</span>
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
                placeholder="Ask me anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-background/50 border-white/5 h-10 text-xs sm:text-sm focus:border-primary/50 rounded-xl"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                size="icon" 
                className="shrink-0 h-10 w-10 rounded-xl shadow-lg"
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
          "h-14 w-14 md:h-16 md:w-16 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 border-4 border-background",
          isOpen ? "bg-foreground text-background" : "bg-primary text-white"
        )}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </Button>
    </div>
  );
}
