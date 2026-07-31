import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Anchor } from "lucide-react";
import { Button } from "@/react-app/components/ui/button";
import { businessInfo } from "@/react-app/data/business";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/#about" },
  { name: "Services", path: "/#services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Enquiry", path: "/enquiry" },
  { name: "Contact", path: "/#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    setIsMenuOpen(false);
    if (path.includes("#")) {
      const [pagePath, hash] = path.split("#");
      if (location.pathname === pagePath || (pagePath === "/" && location.pathname === "/")) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-primary"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-2 bg-accent rounded-lg group-hover:scale-105 transition-transform">
              <Anchor className="w-6 h-6 text-primary" />
            </div>
            <span
              className="text-lg md:text-xl font-semibold text-white tracking-wide"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {businessInfo.name.toUpperCase()}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-sm font-medium"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors font-medium"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
