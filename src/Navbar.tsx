import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md"
      : "text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 h-20 ${
        isScrolled
          ? "bg-[#ffffff08] backdrop-blur-[16px] border-b border-[#ffffff15] shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-20 flex justify-between items-center h-full">
        <Link
          className="font-code-md text-code-md font-bold text-on-surface-variant hover:text-primary transition-colors"
          to="/"
        >
          HLAbdulwahab
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink className={getNavLinkClass} to="/" end>
            Home
          </NavLink>
          <NavLink className={getNavLinkClass} to="/about">
            About
          </NavLink>
          <NavLink className={getNavLinkClass} to="/portfolio">
            Portfolio
          </NavLink>
          <NavLink className={getNavLinkClass} to="/contact">
            Contact
          </NavLink>
        </div>
        <div className="w-10"></div>
      </div>
    </nav>
  );
}
