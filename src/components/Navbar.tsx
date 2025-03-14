import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import NavHeader from "@/components/ui/nav-header";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-gradient-to-r from-navy-500 to-navy-700 shadow-lg"
          : "py-6 bg-gradient-to-r from-navy-500/90 to-navy-700/90 backdrop-blur-sm"
      }`}
    >
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-white font-bold text-xl md:text-2xl transition-all hover:scale-105"
        >
          <span className="text-[#ffff33] font-bold">JXMStudio</span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex items-center">
            <NavHeader />
            <div className="ml-4">
              <Badge text="Let's Talk" to="/contact" />
            </div>
          </div>
        )}

        {/* Mobile Navigation Toggle */}
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={`absolute top-full left-0 right-0 bg-gradient-to-b from-navy-500 to-navy-700 shadow-lg transition-all duration-300 ${
            isMenuOpen ? "max-h-[500px] py-4" : "max-h-0 py-0 overflow-hidden"
          }`}
        >
          <div className="container px-4 mx-auto flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Button
                key={link.path}
                variant="ghost"
                asChild
                className={`justify-start text-white hover:bg-white/10 ${
                  location.pathname === link.path && "bg-white/10"
                }`}
              >
                <Link to={link.path}>{link.name}</Link>
              </Button>
            ))}
            <div className="mt-2">
              <Badge text="Let's Talk" to="/contact" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
