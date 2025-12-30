import { Project } from "@/lib/data";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  title: string;
  subtitle?: string;
}

const ProjectGrid = ({ projects, title, subtitle }: ProjectGridProps) => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-foreground mb-4 opacity-0 animate-fade-in">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
