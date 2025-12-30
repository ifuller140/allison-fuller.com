import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { getProjectById, projects } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id || "");

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="font-display text-4xl font-semibold text-foreground mb-4">
              Project Not Found
            </h1>
            <Link to="/" className="text-accent hover:underline">
              Return Home
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const currentIndex = projects.findIndex((p) => p.id === id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const categoryLabel = {
    marketing: "Marketing",
    film: "Film",
    social: "Social Media",
  }[project.category];

  const categoryPath = {
    marketing: "/projects",
    film: "/film",
    social: "/social",
  }[project.category];

  return (
    <Layout>
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <Link
            to={categoryPath}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8 opacity-0 animate-fade-in"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm uppercase tracking-widest">Back to {categoryLabel}</span>
          </Link>

          <div className="max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
              {project.date} — {categoryLabel}
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "150ms" }}>
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
              {project.description}
            </p>
          </div>
        </div>

        <div className="mt-16 opacity-0 animate-fade-in" style={{ animationDelay: "250ms" }}>
          {project.category === "film" && project.videoUrl ? (
            <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src={project.videoUrl}
                title={project.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : project.mediaType === "slideshow" ? (
            <div className="w-full">
              <Carousel className="w-full max-w-5xl mx-auto">
                <CarouselContent>
                  {project.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-[16/9] bg-card rounded-lg overflow-hidden">
                        <img
                          src={image}
                          alt={`${project.title} - Slide ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          ) : (
            <div className="aspect-[21/9] bg-card overflow-hidden rounded-lg shadow-xl">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        <div className="container mx-auto px-6 lg:px-12 mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                About the Project
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {project.fullDescription}
              </p>
            </div>

            <div className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: "350ms" }}>
              {project.client && (
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-2">
                    Client
                  </h3>
                  <p className="text-foreground">{project.client}</p>
                </div>
              )}

              <div>
                <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-2">
                  Role
                </h3>
                <p className="text-foreground">{project.role}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-2">
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Images Grid for Social or general projects (if not slideshow) */}
          {project.mediaType !== "slideshow" && project.mediaType !== "video" && project.images.length > 0 && (
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className={`aspect-[4/3] bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ${index === 0 && project.images.length % 2 !== 0 ? "md:col-span-2" : ""
                    }`}
                >
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="container mx-auto px-6 lg:px-12 mt-20 pt-20 border-t border-border">
          <div className="flex justify-between items-center">
            {prevProject ? (
              <Link
                to={`/project/${prevProject.id}`}
                className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <p className="text-xs uppercase tracking-widest mb-1">Previous</p>
                  <p className="font-display text-lg text-foreground">{prevProject.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                to={`/project/${nextProject.id}`}
                className="group flex items-center gap-4 text-right text-muted-foreground hover:text-foreground transition-colors"
              >
                <div>
                  <p className="text-xs uppercase tracking-widest mb-1">Next</p>
                  <p className="font-display text-lg text-foreground">{nextProject.title}</p>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ProjectDetail;
