"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-fit glass rounded-full px-4 h-14 flex items-center gap-6 shadow-2xl shadow-black/50 border-white/10">
        <Link href="/" className="flex items-center gap-2 group pr-2 border-r border-white/10">
          <div className="bg-primary p-1.5 rounded-full text-primary-foreground group-hover:rotate-12 transition-transform">
            <Code2 className="h-4 w-4" />
          </div>
          <span className="font-headline font-bold text-sm tracking-tighter hidden sm:inline-block">
            DevSphere
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "px-4 py-1.5 text-xs font-semibold transition-all rounded-full hover:bg-white/5",
                pathname === link.href
                  ? "bg-white/10 text-white shadow-inner"
                  : "text-muted-foreground hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground h-8 w-8 hover:bg-white/5 rounded-full"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        <Button asChild size="sm" className="hidden sm:flex rounded-full px-6 text-xs font-bold h-8">
          <Link href="/contact">Hire Me</Link>
        </Button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-20 z-40 md:hidden bg-background/80 backdrop-blur-xl p-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-2xl font-bold tracking-tighter p-4 rounded-2xl transition-all",
                  pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-white hover:bg-white/5"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}