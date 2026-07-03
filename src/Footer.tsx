import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full py-16 bg-[#131313] border-t border-[#ffffff15] relative z-10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-20 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link
            className="font-code-md text-code-md text-on-surface-variant hover:text-primary transition-colors font-bold"
            to="/"
          >
            HA_SYS
          </Link>
          <p className="text-on-surface-variant font-body-sm text-body-sm text-center md:text-left">
            © 2026 Harun Abdulwahab. Built with precision.
          </p>
        </div>
        <div className="flex gap-6">
          <a className="text-on-surface-variant hover:text-secondary transition-colors group" href="#">
            <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">
              terminal
            </span>
          </a>
          <a className="text-on-surface-variant hover:text-secondary transition-colors group" href="#">
            <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">
              code
            </span>
          </a>
          <a className="text-on-surface-variant hover:text-secondary transition-colors group" href="#">
            <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">
              mail
            </span>
          </a>
        </div>
        <div className="flex gap-8">
          <a className="text-on-surface-variant hover:text-secondary font-body-sm text-body-sm transition-colors duration-300" href="#">
            GitHub
          </a>
          <a className="text-on-surface-variant hover:text-secondary font-body-sm text-body-sm transition-colors duration-300" href="#">
            LinkedIn
          </a>
          <a className="text-on-surface-variant hover:text-secondary font-body-sm text-body-sm transition-colors duration-300" href="#">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
