import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import handshandsLogo from "@/assets/handshands-logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  // Menu items are real <a href="#..."> anchors (better for SEO / Google Ads
  // sitelinks). We prevent the native jump to keep the smooth scroll and to
  // reflect the section in the URL hash without a hard reload.
  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();
    scrollToSection(id);
    window.history.pushState(null, "", `#${id}`);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-sm shadow-md" 
          : isMobileMenuOpen 
            ? "bg-background/5 backdrop-blur-md" 
            : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, "inicio")}
            className="flex items-center gap-3"
            aria-label="Hands-Hands - Carpet Cleaning & Water Extraction"
          >
            <img
              src={handshandsLogo}
              alt="Hands-Hands"
              className={`h-9 md:h-11 w-auto transition-all duration-300 ${
                isScrolled ? "[filter:invert(1)]" : ""
              }`}
            />
            <span
              className={`hidden lg:inline text-xs font-medium tracking-wide border-l pl-3 transition-colors duration-300 ${
                isScrolled
                  ? "text-muted-foreground border-border"
                  : "text-white/90 border-white/40"
              }`}
            >
              Carpet Cleaning &amp; Water Extraction
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, "inicio")}
              className={`${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors duration-300`}
            >
              Home
            </a>
            <a
              href="#servicios"
              onClick={(e) => handleNavClick(e, "servicios")}
              className={`${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors duration-300`}
            >
              Services
            </a>
            <a
              href="#portfolio"
              onClick={(e) => handleNavClick(e, "portfolio")}
              className={`${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors duration-300`}
            >
              Portfolio
            </a>
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, "contacto")}
              className={`${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors duration-300`}
            >
              Contact
            </a>
            <Button onClick={() => scrollToSection("contacto")}>
              Request Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, "inicio")}
              className={`block w-full text-left px-4 py-2 ${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors duration-300`}
            >
              Home
            </a>
            <a
              href="#servicios"
              onClick={(e) => handleNavClick(e, "servicios")}
              className={`block w-full text-left px-4 py-2 ${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors duration-300`}
            >
              Services
            </a>
            <a
              href="#portfolio"
              onClick={(e) => handleNavClick(e, "portfolio")}
              className={`block w-full text-left px-4 py-2 ${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors duration-300`}
            >
              Portfolio
            </a>
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, "contacto")}
              className={`block w-full text-left px-4 py-2 ${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors duration-300`}
            >
              Contact
            </a>
            <div className="px-4">
              <Button onClick={() => scrollToSection("contacto")} className="w-full">
                Request Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
