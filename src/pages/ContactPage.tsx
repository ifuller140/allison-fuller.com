import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, UserPlus } from "lucide-react";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Environment variable for security
    const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_KEY;

    if (!FORMSPREE_ID || FORMSPREE_ID === "place_your_form_id_here") {
      toast({
        title: "Configuration Error",
        description: "Form ID is missing. Please set VITE_FORMSPREE_KEY in your environment.",
        variant: "destructive"
      });
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again or email me directly.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or email me directly.",
        variant: "destructive"
      });
    }
  };

  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-4 opacity-0 animate-fade-in">
              Get in Touch
            </p>
            <h1 className="font-display text-5xl lg:text-6xl font-semibold text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Let's Connect
            </h1>
            <p className="text-lg text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
              I'm actively seeking a Summer 2026 internship in digital marketing, brand strategy,
              or entertainment marketing. If you're working on something creative, strategic, or
              media-focused — I'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <form onSubmit={handleSubmit} className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-card border-border focus:border-accent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-card border-border focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="bg-card border-border focus:border-accent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-card border-border focus:border-accent resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full md:w-auto px-8 py-6 bg-foreground text-background hover:bg-accent text-sm font-medium tracking-wide uppercase rounded-full transition-colors"
              >
                Send Message
              </Button>
            </form>

            <div className="space-y-12 opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:arfuller18@gmail.com"
                    className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>arfuller18@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <MapPin className="w-5 h-5" />
                    <span>Great Neck, NY / Waltham, MA</span>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/allison-fuller-031075280/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <UserPlus className="w-5 h-5" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Availability
                </h3>
                <p className="text-muted-foreground">
                  Currently a sophomore at Brandeis University, seeking a Summer 2026 internship.
                  Available for full-time summer opportunities from May - August 2026.
                </p>
              </div>

              <div className="p-8 bg-card rounded-lg border border-accent/30">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  🎯 Summer 2026 Internship
                </h3>
                <p className="text-muted-foreground text-sm">
                  I'm actively seeking internship opportunities in digital marketing,
                  brand strategy, social media, or entertainment marketing. Let's discuss
                  how I can contribute to your team!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
