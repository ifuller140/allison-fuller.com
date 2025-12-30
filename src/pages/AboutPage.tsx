import Layout from "@/components/Layout";
import { Mail, Linkedin, Instagram } from "lucide-react";

const AboutPage = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-4 opacity-0 animate-fade-in">
                About Me
              </p>
              <h1 className="font-display text-5xl lg:text-6xl font-semibold text-foreground mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
                Creative at Heart,
                <br />
                <span className="italic font-normal">Strategic in Mind</span>
              </h1>

              <div className="space-y-6 text-lg text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <p>
                  As a marketing and film major, I've developed a unique perspective
                  that bridges the gap between strategic thinking and creative execution.
                  My work is driven by a passion for storytelling and a commitment to
                  creating meaningful connections between brands and their audiences.
                </p>
                <p>
                  With experience spanning brand strategy, film production, and social
                  media management, I bring a holistic approach to every project. I believe
                  that the best marketing doesn't feel like marketing — it feels like a
                  story worth sharing.
                </p>
                <p>
                  When I'm not crafting campaigns or behind the camera, you'll find me
                  exploring new cities, attending film festivals, or diving deep into
                  the latest marketing trends and technologies.
                </p>
              </div>

              <div className="mt-12 flex items-center gap-6 opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
                <a
                  href="mailto:arfuller18@gmail.com"
                  className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="aspect-[3/4] bg-card rounded-lg overflow-hidden">
                <div className="w-full h-full bg-secondary" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-lg" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/5 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-display text-3xl font-semibold text-foreground mb-12 text-center">
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Marketing Strategy",
                skills: ["Brand Development", "Campaign Planning", "Market Research", "Content Strategy", "Analytics & Insights"],
              },
              {
                title: "Film Production",
                skills: ["Directing", "Screenwriting", "Cinematography", "Video Editing", "Color Grading"],
              },
              {
                title: "Social Media",
                skills: ["Content Creation", "Community Management", "Influencer Marketing", "Paid Advertising", "Platform Strategy"],
              },
            ].map((category, index) => (
              <div
                key={category.title}
                className="p-8 bg-background rounded-lg opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-muted-foreground flex items-center gap-3"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
