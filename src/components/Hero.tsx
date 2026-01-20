import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-6 opacity-0 animate-fade-in">
              Brandeis University | Business & Film
            </p>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-[0.95] mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Allison Fuller
              <br />
              <span className="italic font-normal text-3xl md:text-5xl lg:text-6xl block mt-2">Digital Marketing & Content Strategist</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Passionate about turning creative ideas into high-impact storytelling.
              Building brands through strategic social media, content production, and data-driven marketing.
            </p>

            <div className="inline-block px-6 py-3 bg-accent/10 border border-accent/30 rounded-full mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "250ms" }}>
              <p className="text-accent font-medium">
                🎯 Seeking Summer 2026 Internship in Marketing, Brand Strategy, or Entertainment
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <a
                href="#work"
                className="px-8 py-4 bg-foreground text-background text-sm font-medium tracking-wide uppercase rounded-full hover:bg-accent transition-colors duration-300"
              >
                View My Work
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-accent text-accent text-sm font-medium tracking-wide uppercase rounded-full hover:bg-accent hover:text-background transition-colors duration-300"
              >
                View Resume
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] mx-auto">
              <div className="absolute inset-0 bg-accent/10 rounded-full blur-2xl transform translate-x-4 translate-y-4" />
              <img
                src="/headshot.png"
                alt="Allison Fuller"
                className="relative w-full h-full object-cover rounded-full border-4 border-background shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "800ms" }}>
        <a href="#work" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
