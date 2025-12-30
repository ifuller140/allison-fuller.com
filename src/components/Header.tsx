import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Marketing", path: "/projects" },
  { label: "Film", path: "/film" },
  { label: "Social Media", path: "/social" },
  { label: "About", path: "/about" },
  { label: "Resume", path: "/resume.pdf" },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="font-display text-2xl font-semibold tracking-tight text-foreground hover:text-accent transition-colors"
          >
            Portfolio
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium tracking-wide uppercase transition-all duration-300",
                  "hover:text-accent relative",
                  "after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-accent after:transition-all after:duration-300",
                  "hover:after:w-full",
                  location.pathname === item.path
                    ? "text-foreground after:w-full"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden md:inline-flex px-6 py-2.5 bg-foreground text-background text-sm font-medium tracking-wide uppercase rounded-full hover:bg-accent transition-colors duration-300"
          >
            Contact
          </Link>

          <button className="md:hidden p-2">
            <div className="w-6 h-0.5 bg-foreground mb-1.5" />
            <div className="w-6 h-0.5 bg-foreground mb-1.5" />
            <div className="w-4 h-0.5 bg-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
