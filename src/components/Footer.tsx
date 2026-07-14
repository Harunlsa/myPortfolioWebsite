import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full py-16 bg-surface-container-lowest border-t border-outline-variant/30 relative z-10 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-5 md:px-20 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link
            className="font-code-md text-code-md text-on-surface-variant hover:text-primary transition-colors font-bold"
            to="/"
          >
            {/* <img href="C:\Users\HLAbdulwahab\Documents\GitHub\myPortfolioWebsite\public\favicon.png" /> */}
            <img
              src="./favicon.png"
              alt="logo"
              className="max-h-16 rounded-md"
            />
          </Link>
          <p className="text-on-surface-variant font-body-sm text-body-sm text-center md:text-left">
            © 2026 Harun Abdulwahab.
          </p>
        </div>
        <div className="flex gap-8">
          <a
            className="text-on-surface-variant hover:text-secondary font-body-sm text-body-sm transition-colors duration-300"
            href="https://github.com/Harunlsa"
          >
            GitHub
          </a>
          <a
            className="text-on-surface-variant hover:text-secondary font-body-sm text-body-sm transition-colors duration-300"
            href="https://linkedin.com/in/hlabdulwahab"
          >
            LinkedIn
          </a>
          <a
            className="text-on-surface-variant hover:text-secondary font-body-sm text-body-sm transition-colors duration-300"
            href="https://x.com/harun_la"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
