import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-6 opacity-0 animate-fade-in">
            Marketing & Film Creative
          </p>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-[0.95] mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
            Crafting Stories
            <br />
            <span className="italic font-normal">That Inspire</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
            A passionate storyteller specializing in marketing strategy, film production, 
            and social media management. Creating compelling narratives that connect brands with audiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <a
              href="#work"
              className="px-8 py-4 bg-foreground text-background text-sm font-medium tracking-wide uppercase rounded-full hover:bg-accent transition-colors duration-300"
            >
              View My Work
            </a>
            <a
              href="/about"
              className="px-8 py-4 border border-border text-foreground text-sm font-medium tracking-wide uppercase rounded-full hover:border-accent hover:text-accent transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "500ms" }}>
        <a href="#work" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
