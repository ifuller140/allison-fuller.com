import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="font-display text-2xl font-semibold text-foreground">
              Allison Fuller
            </Link>
            <p className="mt-4 text-muted-foreground max-w-sm">
              Digital marketing and content strategist at Brandeis University.
              Seeking Summer 2026 internship opportunities.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-4">Navigation</h4>
            <ul className="space-y-3">
              {["Home", "Marketing", "Film", "Social Media", "About"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/in/allison-fuller-031075280/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:arfuller18@gmail.com"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <Link
                  to="/resume.pdf"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Allison Fuller. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Brandeis University '28
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
