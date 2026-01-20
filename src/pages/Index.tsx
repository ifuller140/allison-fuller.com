import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import { projects } from "@/lib/data";

const Index = () => {
  const featuredProjects = projects.slice(0, 6);

  return (
    <Layout>
      <Hero />

      <div id="work">
        <ProjectGrid
          projects={featuredProjects}
          title="Selected Work"
          subtitle="A curated collection of projects across marketing, film, and social media."
        />
      </div>

      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-foreground mb-6">
                Let's Create
                <br />
                <span className="italic font-normal">Something Great</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                I'm a sophomore at Brandeis University studying Business and Film, and I'm
                actively seeking a Summer 2026 internship in digital marketing, brand strategy,
                or entertainment marketing.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you need strategic social media management, compelling content creation,
                or data-driven marketing insights, I'd love to bring my creativity and skills to your team.
              </p>
              <a
                href="/contact"
                className="inline-flex px-8 py-4 bg-foreground text-background text-sm font-medium tracking-wide uppercase rounded-full hover:bg-accent transition-colors duration-300"
              >
                Let's Connect
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square bg-secondary rounded-lg" />
                <div className="aspect-[4/3] bg-secondary rounded-lg" />
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] bg-secondary rounded-lg" />
                <div className="aspect-square bg-secondary rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
