import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ShaderBackground from "./ShaderBackground";
import InteractiveTerminal from "./InteractiveTerminal";

function TypingEffect() {
  const phrases = ["Software Engineer", "AI Enthusiast", "Web Developer"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timer: number;

    if (isDeleting) {
      timer = window.setTimeout(() => {
        setText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 40);
    } else {
      timer = window.setTimeout(() => {
        setText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 80);
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      timer = window.setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <span className="typing-container font-code-md text-code-md text-secondary tracking-wider uppercase font-semibold">
      {text}
    </span>
  );
}

export default function Home() {
  return (
    <div className="font-body-md text-body-md overflow-x-hidden bg-[#131313] text-[#e5e2e1] min-h-screen">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
        {/* Full-bleed Shader Background */}
        <ShaderBackground />

        {/* Aurora Accents */}
        <div className="aurora-blur -top-20 -left-20"></div>
        <div
          className="aurora-blur bottom-0 -right-20"
          style={{
            background:
              "radial-gradient(circle, rgba(93, 230, 255, 0.1) 0%, transparent 100%)",
          }}
        ></div>

        <div className="max-w-[1200px] mx-auto px-5 md:px-20 text-center relative z-10 w-full flex flex-col items-center">
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
            I build modern web applications, AI-powered tools, and automation solutions that solve real-world problems.
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
              className="w-full sm:w-auto bg-[#ffffff08] backdrop-blur-[16px] border border-primary text-primary px-10 py-4 rounded-xl font-label-caps text-label-caps hover:bg-[#ffffff12] text-center transition-all active:scale-95 duration-200"
              to="/contact"
            >
              Contact Me
            </Link>
            <a
              className="w-full sm:w-auto text-on-surface hover:text-primary transition-colors font-label-caps text-label-caps flex items-center justify-center gap-2"
              href="#"
            >
              Download CV <span className="material-symbols-outlined">download</span>
            </a>
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
      <section className="py-16 bg-surface-container-lowest relative z-10 border-y border-[#ffffff10]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="font-headline-lg text-3xl text-primary mb-2 group-hover:scale-110 transition-transform font-bold">
                20+
              </div>
              <div className="font-label-caps text-label-caps text-on-surface-variant">
                Projects
              </div>
            </div>
            <div className="text-center group">
              <div className="font-headline-lg text-3xl text-secondary mb-2 group-hover:scale-110 transition-transform font-bold">
                5+
              </div>
              <div className="font-label-caps text-label-caps text-on-surface-variant">
                Technologies
              </div>
            </div>
            <div className="text-center group">
              <div className="font-headline-lg text-3xl text-primary mb-2 group-hover:scale-110 transition-transform font-bold">
                2+
              </div>
              <div className="font-label-caps text-label-caps text-on-surface-variant">
                Years Learning
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
        <div className="max-w-[1200px] mx-auto px-5 md:px-20">
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
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAxc_0dseC7y0lLUzMKR3EbvqKe4Tnrs2SF4jwqZtD6SB3zCGvDAQMmphmnd6n-7GTGEMHqm-6CUMjBHD2aC7U367ptMsmlNdBuS9mvguNruIwLL68t66q9XboM3jH8jz09eBkz6nElmJPkYfLSuAhOhVzLwSFr-NtoSAI0DXogTK6VR78jONQ76kjn4e59MGzbK2Kz7AzgE2VKG0fVnBlnKVUbBGo7x1olevY38swPtjctp-iQmEKRVg')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-code-md text-[10px] uppercase">
                    ERP System
                  </span>
                </div>
                <h3 className="font-headline-lg text-xl text-on-surface mb-3 font-semibold">
                  Plastic Company
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-1">
                  A comprehensive internal management system designed to streamline operations for a large-scale manufacturing plant.
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center">
                      <span className="material-symbols-outlined text-[14px]">
                        terminal
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center">
                      <span className="material-symbols-outlined text-[14px]">
                        database
                      </span>
                    </div>
                  </div>
                  <a className="text-primary hover:text-secondary transition-colors" href="#">
                    <span className="material-symbols-outlined">open_in_new</span>
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
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBO74uy92PiYX19QSM1ZbhLxGq5_cZ2g4i1BK3_SVCuQkVj96V2xwlCUkGNJBZjsp1AMyC93BjkXO89HGZ_u4P7ubKtN2M6O8PeQIvuCGnQW7bn26w_1BMOBZhwtWf6QFv7kxkm2otnMf-kEvGn91vSqsfiDEX0MFHBa1VCsQRViAgVz0ZjuyeH8_Ranrob2GryHez1Vq0NtY_VDvB2_IjQ3dME2cyWCZfyLZWhwrMREBoiQCQILc_M0Q')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-code-md text-[10px] uppercase">
                    SaaS
                  </span>
                </div>
                <h3 className="font-headline-lg text-xl text-on-surface mb-3 font-semibold">
                  Football Pitch System
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-1">
                  An automated booking and management solution for sports facilities with real-time availability tracking and payment integration.
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center">
                      <span className="material-symbols-outlined text-[14px]">
                        calendar_today
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center">
                      <span className="material-symbols-outlined text-[14px]">
                        payments
                      </span>
                    </div>
                  </div>
                  <a className="text-primary hover:text-secondary transition-colors" href="#">
                    <span className="material-symbols-outlined">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="glass-card rounded-2xl overflow-hidden flex flex-col">
              <div className="h-56 relative overflow-hidden group">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB5m3rKSu8NXzBJPPA1FSE1oWXV33NM_rOfQuDV4SzBP3CeVsEbGK1yOdi0Ye3P-Asi-6kEZfqoLbl83Z_lYSS8hbMQpWHKqv5exSodkFXj0kLzN45jJ_3ith2hm_uV2VniT8SebAp1MubDU_FcjUcZJ-jrOrT6TcIC74FF9X7t5crFI5KqvjZbF2eApyf-88Exj60xcjnd3OXVnxIAbq-9lTr71Px0PsUfGoeGb24NxN6mUtyFBDlXMQ')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-code-md text-[10px] uppercase">
                    AI / Python
                  </span>
                </div>
                <h3 className="font-headline-lg text-xl text-on-surface mb-3 font-semibold">
                  FPL AI Assistant
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-1">
                  A predictive modeling tool using machine learning to optimize Fantasy Premier League squad selection and transfer strategy.
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center">
                      <span className="material-symbols-outlined text-[14px]">
                        psychology
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center">
                      <span className="material-symbols-outlined text-[14px]">
                        monitoring
                      </span>
                    </div>
                  </div>
                  <a className="text-primary hover:text-secondary transition-colors" href="#">
                    <span className="material-symbols-outlined">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
