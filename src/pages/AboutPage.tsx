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
                Digital Marketing
                <br />
                <span className="italic font-normal">& Content Strategist</span>
              </h1>

              <div className="space-y-6 text-lg text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <p>
                  I'm a digital marketing and content strategist passionate about
                  turning creative ideas into high-impact storytelling. Currently studying
                  Business (Marketing specialization) and Film/TV/Media at Brandeis University,
                  I'm building a strong foundation in brand strategy, media production, and
                  audience engagement.
                </p>
                <p>
                  I've managed social media and digital campaigns for brands in
                  entertainment, tech, and lifestyle — including developing multi-platform
                  strategy for four brands at Adamit Productions and contributing to digital
                  initiatives at Roc Nation. Whether I'm producing short-form content,
                  analyzing performance trends, creating brand identity guides, or supporting
                  cross-brand collaborations, I approach marketing with a balance of
                  creativity, data, and strategic thinking.
                </p>
                <p>
                  I'm especially interested in roles that combine brand storytelling,
                  social media, content production, and entertainment marketing. I love
                  working in fast-paced, collaborative environments where I can bring ideas
                  to life and help brands connect meaningfully with their audiences.
                </p>
              </div>

              <div className="mt-8 p-6 bg-accent/10 border border-accent/30 rounded-lg opacity-0 animate-fade-in" style={{ animationDelay: "250ms" }}>
                <p className="text-accent font-medium text-center">
                  🎯 Actively seeking a Summer 2026 internship in marketing, brand strategy, or entertainment
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
                  href="https://www.linkedin.com/in/allison-fuller-031075280/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
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
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4 text-center">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Brandeis University | Dual BA in Business (Marketing) & Film/TV/Media | GPA: 3.9<br />
            Presidential Scholar | Dean's List 2024-2025
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Marketing",
                skills: ["Social Media Strategy", "Brand Strategy", "Campaign Development", "SEO & Content Marketing", "Email Marketing", "A/B Testing", "Trend Analysis"],
              },
              {
                title: "Technical Tools",
                skills: ["Metricool", "Manychat", "Google Ads", "Mailchimp", "WordPress", "Click Up", "Microsoft Suite"],
              },
              {
                title: "Content & Production",
                skills: ["Adobe Premiere Pro", "CapCut", "Canva", "Video Editing", "Copywriting", "Content Creation", "Client Outreach"],
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
