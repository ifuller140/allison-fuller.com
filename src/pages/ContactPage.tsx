import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
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
              Let's Work Together
            </h1>
            <p className="text-lg text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Have a project in mind? I'd love to hear about it. Send me a message 
              and let's create something amazing together.
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
                    href="mailto:hello@example.com"
                    className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>hello@example.com</span>
                  </a>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <MapPin className="w-5 h-5" />
                    <span>New York, NY</span>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <Phone className="w-5 h-5" />
                    <span>Available upon request</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Availability
                </h3>
                <p className="text-muted-foreground">
                  Currently accepting new projects. Response time is typically 
                  within 24-48 hours during business days.
                </p>
              </div>

              <div className="p-8 bg-card rounded-lg">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Quick Response
                </h3>
                <p className="text-muted-foreground text-sm">
                  For urgent inquiries or quick questions, feel free to reach out 
                  via email directly. I'm always happy to discuss potential collaborations.
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
