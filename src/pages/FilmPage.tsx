import Layout from "@/components/Layout";
import ProjectGrid from "@/components/ProjectGrid";
import { getProjectsByCategory } from "@/lib/data";

const FilmPage = () => {
  const projects = getProjectsByCategory("film");

  return (
    <Layout>
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-4 opacity-0 animate-fade-in">
              Film & Video
            </p>
            <h1 className="font-display text-5xl lg:text-6xl font-semibold text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Visual Narratives
            </h1>
            <p className="text-lg text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Documentaries, short films, and music videos — each project explores 
              the art of visual storytelling and emotional connection.
            </p>
          </div>
        </div>
      </section>

      <ProjectGrid
        projects={projects}
        title=""
      />
    </Layout>
  );
};

export default FilmPage;
