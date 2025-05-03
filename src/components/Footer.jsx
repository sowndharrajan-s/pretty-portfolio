import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12">
      <div className="container mx-auto relative">
        <p className="text-sm text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Sowndharrajan. All rights reserved.
        </p>
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] hover:scale-110 text-primary transition-all duration-300 absolute top-0 right-0"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="animate-bounce" />
        </a>
      </div>
    </footer>
  );
};