import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ShaderBackground from "../components/ShaderBackground";
import InteractiveTerminal from "../components/InteractiveTerminal";
import TypingEffect from "../components/TypingEffect";
import ProjectCard from "../components/ProjectCard";
import type { Project } from "../components/ProjectCard";
import StatCard from "../components/StatCard";

import hartImgMain from "../assets/hartImgMain.webp";
import kssimsImgMain from "../assets/kssimsImgMainMockup.png";
import hmsImgMain from "../assets/hmsImgMain.png";

const PHRASES = [
  "Software Engineer",
  "AI Enthusiast",
  "Web Developer",
  "UI/UX Designer",
];

const STATS = [
  { value: "10+", label: "Projects", isPrimary: true },
  { value: "20+", label: "Technologies", isPrimary: false },
  { value: "8+", label: "Years of Experience", isPrimary: true },
  { value: "1000+", label: "Hours Coding", isPrimary: false },
];

const PROJECTS: Project[] = [
  {
    title: "Hart Industries Website / Catalogue",
    category: "Website / Webapp",
    description:
      "A modern, responsive website built for Hart Industries to showcase its products, company information, and contact details.",
    image: hartImgMain,
    imageAlt: "Hart website homepage",
    techStack: ["react", "javascript", "bootstrap"],
    link: "https://hart-industries.com",
  },
  {
    title: "Student Information Management System",
    category: "Hybrid Desktop/Web Application",
    description:
      "A Student Information Management System designed to modernise educational administration across secondary schools in Kano State.",
    image: kssimsImgMain,
    imageAlt: "Student Information Management System dashboard",
    techStack: ["react", "typescript", "tauri", "supabase"],
  },
  {
    title: "Hospital Management System",
    category: "Desktop Application",
    description:
      "A desktop-first hospital management system designed to streamline clinical workflows, digitise records, and improve operational efficiency.",
    image: hmsImgMain,
    imageAlt: "Hostpital Management System Patients Page",
    techStack: ["react", "typescript", "tailwindcss", "tauri", "sqlite"],
  },
];

export default function Home() {
  return (
    <div className="font-body-md text-body-md overflow-x-hidden bg-background text-on-background min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
        {/* Full-bleed Shader Background */}
        <ShaderBackground />

        <div className="max-w-max-width mx-auto px-5 md:px-20 text-center relative z-10 w-full flex flex-col items-center">
          <motion.h1
            className="font-headline-xl text-[40px] md:text-5xl text-on-surface hero-title mb-6 font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Hi, I'm <span className="text-primary">Harun L. Abdulwahab.</span>
          </motion.h1>

          <div className="h-12 mb-8">
            <TypingEffect phrases={PHRASES} />
          </div>

          <motion.p
            className="max-w-2xl mx-auto font-body-md text-body-md text-on-surface-variant mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            I build modern web applications, AI-powered tools, and automation
            solutions that solve real-world problems.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Link
              className="w-full sm:w-auto bg-primary-container text-on-primary-container px-10 py-4 rounded-xl font-label-caps text-label-caps hover:shadow-[0px_0px_20px_#2563eb60] text-center transition-all active:scale-95 duration-200"
              to="/portfolio"
            >
              View Projects
            </Link>
            <Link
              className="w-full sm:w-auto bg-[#ffffff08] backdrop-blur-lg border border-primary text-primary px-10 py-4 rounded-xl font-label-caps text-label-caps hover:bg-[#ffffff12] text-center transition-all active:scale-95 duration-200"
              to="/contact"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            className="mt-12 max-w-2xl mx-auto w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <InteractiveTerminal />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-surface-container-lowest relative z-10 border-y border-outline-variant/30 transition-colors duration-300">
        <div className="max-w-max-width mx-auto px-5 md:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
              <StatCard
                key={idx}
                value={stat.value}
                label={stat.label}
                isPrimary={stat.isPrimary}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-32 relative z-10" id="projects">
        <div className="max-w-max-width mx-auto px-5 md:px-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="font-headline-lg text-3xl text-on-surface mb-4 font-bold">
                Featured Projects
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Handpicked selection of my best work.
              </p>
            </div>
            <Link
              className="flex items-center gap-2 text-primary font-label-caps text-label-caps hover:underline"
              to="/portfolio"
            >
              View All Projects{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
