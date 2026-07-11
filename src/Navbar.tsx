import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize theme from localStorage or system preference
  const [theme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return systemPrefersDark ? "dark" : "light";
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update root element class when theme changes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [theme]);

  // const toggleTheme = () => {
  //   setTheme((prev) => (prev === "light" ? "dark" : "light"));
  // };

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md"
      : "text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 h-20 ${
        isScrolled
          ? "bg-surface/70 backdrop-blur-lg border-b border-outline-variant/30 shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-max-width mx-auto px-5 md:px-20 flex justify-between items-center h-full">
        <Link
          className="font-code-md text-code-md font-bold text-on-surface-variant hover:text-primary transition-colors"
          to="/"
          onClick={() => setIsMobileMenuOpen(false)}
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

        {/* Actions (Desktop: Contacts + Theme Toggle. Mobile: Theme Toggle + Hamburger) */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Theme Toggle Button (Commented out for now)
          <button
            onClick={toggleTheme}
            className="flex items-center text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-container-high/30 cursor-pointer"
            aria-label="Toggle Theme"
          >
            <span className="material-symbols-outlined text-[22px]">
              {theme === "light" ? "dark_mode" : "light_mode"}
            </span>
          </button>
          */}

          {/* Desktop Contact icons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+2349020838258"
              className="flex items-center text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-base">call</span>
            </a>
            <a
              href="mailto:harunlabdulwahab@gmail.com"
              className="flex items-center text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-base">mail</span>
            </a>
            <a
              href="https://wa.me/2349020838258"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-on-surface-variant hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="w-6 h-6 fill-current text-on-surface-variant hover:text-primary transition-colors"
              >
                <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" />
              </svg>
            </a>
          </div>

          {/* Mobile hamburger icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex md:hidden items-center text-on-surface-variant hover:text-primary transition-colors p-2 cursor-pointer"
            aria-label="Toggle Mobile Menu"
          >
            <span className="material-symbols-outlined text-[28px]">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div
        className={`fixed inset-x-0 top-20 bg-background/95 backdrop-blur-xl border-b border-outline-variant/30 transition-all duration-300 md:hidden overflow-hidden ${
          isMobileMenuOpen ? "max-h-[320px] opacity-100 py-6 shadow-lg" : "max-h-0 opacity-0 py-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          <NavLink
            className={({ isActive }) =>
              `font-body-md text-lg tracking-wide transition-colors ${
                isActive ? "text-primary font-bold" : "text-on-surface-variant hover:text-primary"
              }`
            }
            to="/"
            end
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-body-md text-lg tracking-wide transition-colors ${
                isActive ? "text-primary font-bold" : "text-on-surface-variant hover:text-primary"
              }`
            }
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-body-md text-lg tracking-wide transition-colors ${
                isActive ? "text-primary font-bold" : "text-on-surface-variant hover:text-primary"
              }`
            }
            to="/portfolio"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Portfolio
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-body-md text-lg tracking-wide transition-colors ${
                isActive ? "text-primary font-bold" : "text-on-surface-variant hover:text-primary"
              }`
            }
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </NavLink>

          {/* Mobile Social icons inside drawer */}
          <div className="flex items-center gap-6 mt-2 pt-4 border-t border-outline-variant/20 w-[80%] justify-center">
            <a
              href="tel:+2349020838258"
              className="flex items-center text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-lg">call</span>
            </a>
            <a
              href="mailto:harunlabdulwahab@gmail.com"
              className="flex items-center text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-lg">mail</span>
            </a>
            <a
              href="https://wa.me/2349020838258"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-on-surface-variant hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="w-5 h-5 fill-current text-on-surface-variant hover:text-primary transition-colors"
              >
                <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
