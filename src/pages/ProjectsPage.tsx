import Layout from "@/components/Layout";
import ProjectGrid from "@/components/ProjectGrid";
import { getProjectsByCategory } from "@/lib/data";

const ProjectsPage = () => {
  const projects = getProjectsByCategory("marketing");

  return (
    <Layout>
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-4 opacity-0 animate-fade-in">
              Marketing Projects
            </p>
            <h1 className="font-display text-5xl lg:text-6xl font-semibold text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Strategic Storytelling
            </h1>
            <p className="text-lg text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
              From brand identity to integrated campaigns, explore my work in crafting 
              compelling marketing narratives that drive results.
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

export default ProjectsPage;
