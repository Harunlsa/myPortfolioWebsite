import { useState, useEffect, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About", end: false },
  { to: "/portfolio", label: "Portfolio", end: false },
  { to: "/contact", label: "Contact", end: false },
] as const;

const WHATSAPP_PATH =
  "M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z";

function WhatsAppIcon({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      className={className}
      aria-hidden="true"
    >
      <path d={WHATSAPP_PATH} />
    </svg>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    },
    [isMobileMenuOpen],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md"
      : "text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md";

  const getMobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-body-md text-lg tracking-wide transition-colors ${
      isActive
        ? "text-primary font-bold"
        : "text-on-surface-variant hover:text-primary"
    }`;

  return (
    <nav
      aria-label="Main navigation"
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
          aria-label="HLAbdulwahab — home"
        >
          HLAbdulwahab
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              className={getNavLinkClass}
              to={to}
              end={end}
              role="listitem"
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Desktop contact icons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+2349020838258"
              className="flex items-center text-on-surface-variant hover:text-primary transition-colors"
              aria-label="Call Harun"
            >
              <span
                className="material-symbols-outlined text-base"
                aria-hidden="true"
              >
                call
              </span>
            </a>
            <a
              href="mailto:harunlabdulwahab@gmail.com"
              className="flex items-center text-on-surface-variant hover:text-primary transition-colors"
              aria-label="Email Harun"
            >
              <span
                className="material-symbols-outlined text-base"
                aria-hidden="true"
              >
                mail
              </span>
            </a>
            <a
              href="https://wa.me/2349020838258"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-on-surface-variant hover:text-primary transition-colors"
              aria-label="WhatsApp Harun (opens in new tab)"
            >
              <WhatsAppIcon className="w-6 h-6 fill-current" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="flex md:hidden items-center text-on-surface-variant hover:text-primary transition-colors p-2 cursor-pointer"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className="material-symbols-outlined text-[28px]"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        className={`fixed inset-x-0 top-20 bg-background/95 backdrop-blur-xl border-b border-outline-variant/30 transition-all duration-300 md:hidden overflow-hidden ${
          isMobileMenuOpen
            ? "max-h-[320px] opacity-100 py-6 shadow-lg"
            : "max-h-0 opacity-0 py-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {NAV_LINKS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              className={getMobileNavLinkClass}
              to={to}
              end={end}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}

          {/* Mobile social icons */}
          <div className="flex items-center gap-6 mt-2 pt-4 border-t border-outline-variant/20 w-[80%] justify-center">
            <a
              href="tel:+2349020838258"
              className="flex items-center text-on-surface-variant hover:text-primary transition-colors"
              aria-label="Call Harun"
            >
              <span
                className="material-symbols-outlined text-lg"
                aria-hidden="true"
              >
                call
              </span>
            </a>
            <a
              href="mailto:harunlabdulwahab@gmail.com"
              className="flex items-center text-on-surface-variant hover:text-primary transition-colors"
              aria-label="Email Harun"
            >
              <span
                className="material-symbols-outlined text-lg"
                aria-hidden="true"
              >
                mail
              </span>
            </a>
            <a
              href="https://wa.me/2349020838258"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-on-surface-variant hover:text-primary transition-colors"
              aria-label="WhatsApp Harun (opens in new tab)"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
