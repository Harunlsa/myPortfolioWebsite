import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ShaderBackground from "./ShaderBackground";
import InteractiveTerminal from "./InteractiveTerminal";
// import AuroraBackground from "./AuroraBackground";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBootstrap, faReact } from "@fortawesome/free-brands-svg-icons";
// import { RedhatIcon } from "@dev.icons/react";

import hartImgMain from "./assets/hartImgMain.webp";
import kssimsImgMain from "./assets/kssimsImgMain.png";
import hmsImgMain from "./assets/hmsImgMain.png";
// import hmsImgMain from "./assets/hmsImgMain.webp";
// import { faReact } from "@fortawesome/free-solid-svg-icons";
// import { byPrefixAndName } from "@awesome.me/kit-KIT_CODE/icons";
// import {byPrefixAndName}
const PHRASES = [
  "Software Engineer",
  "AI Enthusiast",
  "Web Developer",
  "UI/UX Designer",
];

function TypingEffect() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = PHRASES[phraseIndex];
    let timer: number;

    if (!isDeleting) {
      if (charIndex < currentPhrase.length) {
        timer = window.setTimeout(() => {
          setCharIndex((prev) => prev + 1);
        }, 80);
      } else {
        // Pause at the end of the phrase, then start deleting
        timer = window.setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (charIndex > 0) {
        timer = window.setTimeout(() => {
          setCharIndex((prev) => prev - 1);
        }, 40);
      } else {
        // Immediately switch to the next phrase
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <span className="typing-container font-code-md text-code-md text-secondary tracking-wider uppercase font-semibold">
      {PHRASES[phraseIndex].substring(0, charIndex)}
    </span>
  );
}

export default function Home() {
  return (
    <div className="font-body-md text-body-md overflow-x-hidden bg-background text-on-background min-h-screen transition-colors duration-300">
      {/* Aurora Blurs */}
      {/* <AuroraBackground /> */}

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
            <TypingEffect />
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
            {/* <a
              className="w-full sm:w-auto text-on-surface hover:text-primary transition-colors font-label-caps text-label-caps flex items-center justify-center gap-2"
              href="#"
            >
              Download CV{" "}
              <span className="material-symbols-outlined">download</span>
            </a> */}
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
            <div className="text-center group">
              <div className="font-headline-lg text-3xl text-primary mb-2 group-hover:scale-110 transition-transform font-bold">
                10+
              </div>
              <div className="font-label-caps text-label-caps text-on-surface-variant">
                Projects
              </div>
            </div>
            <div className="text-center group">
              <div className="font-headline-lg text-3xl text-secondary mb-2 group-hover:scale-110 transition-transform font-bold">
                20+
              </div>
              <div className="font-label-caps text-label-caps text-on-surface-variant">
                Technologies
              </div>
            </div>
            <div className="text-center group">
              <div className="font-headline-lg text-3xl text-primary mb-2 group-hover:scale-110 transition-transform font-bold">
                8+
              </div>
              <div className="font-label-caps text-label-caps text-on-surface-variant">
                Years of Experience
              </div>
            </div>
            <div className="text-center group">
              <div className="font-headline-lg text-3xl text-secondary mb-2 group-hover:scale-110 transition-transform font-bold">
                1000+
              </div>
              <div className="font-label-caps text-label-caps text-on-surface-variant">
                Hours Coding
              </div>
            </div>
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
            {/* Project 1 */}
            <div className="glass-card rounded-2xl overflow-hidden flex flex-col">
              <div className="h-56 relative overflow-hidden group">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{
                    backgroundImage: `url(${hartImgMain})`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-code-md text-[10px] uppercase">
                    Website / Webapp
                  </span>
                </div>
                <h3 className="font-headline-lg text-xl text-on-surface mb-3 font-semibold">
                  Hart Industries Website / Catalogue
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-1">
                  A modern, responsive website built for Hart Industries to
                  showcase its products, company information, and contact
                  details.
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center">
                      <TechIcon icon="react" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center">
                      <TechIcon icon="javascript" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center">
                      <TechIcon icon="bootstrap" />
                    </div>
                  </div>
                  <a
                    className="text-primary hover:text-secondary transition-colors"
                    href="https://hart-industries.com"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined">
                      open_in_new
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="glass-card rounded-2xl overflow-hidden flex flex-col">
              <div className="h-56 relative overflow-hidden group">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{
                    backgroundImage: `url(${kssimsImgMain})`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-code-md text-[10px] uppercase">
                    Hybrid Desktop/Web Application
                  </span>
                </div>
                <h3 className="font-headline-lg text-xl text-on-surface mb-3 font-semibold">
                  Student Information Management System
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-1">
                  A Student Information Management System designed to modernise
                  educational administration across secondary schools in Kano
                  State.
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center">
                      <TechIcon icon="react" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center">
                      <TechIcon icon="typescript" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center">
                      <TechIcon icon="tauri" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center">
                      <TechIcon icon="supabase" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="glass-card rounded-2xl overflow-hidden flex flex-col">
              <div className="h-56 relative overflow-hidden group">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{
                    backgroundImage: `url(${hmsImgMain})`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-code-md text-[10px] uppercase">
                    Desktop Application
                  </span>
                </div>
                <h3 className="font-headline-lg text-xl text-on-surface mb-3 font-semibold">
                  Hospital Management System
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-1">
                  A desktop-first hospital management system designed to
                  streamline clinical workflows, digitise records, and improve
                  operational efficiency.
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center">
                      <TechIcon icon="react" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center">
                      <TechIcon icon="typescript" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center">
                      <TechIcon icon="tailwindcss" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center">
                      <TechIcon icon="tauri" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center">
                      <TechIcon icon="sqlite" />
                    </div>
                  </div>
                  {/* <a
                    className="text-primary hover:text-secondary transition-colors"
                    href="#"
                  >
                    <span className="material-symbols-outlined">
                      open_in_new
                    </span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
type TechIconProps = {
  icon: string;
  coloured?: boolean;
};
function TechIcon({ icon, coloured = false }: TechIconProps) {
  return <i className={`devicon-${icon}-plain ${coloured ? "colored" : ""}`} />;
}
