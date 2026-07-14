import AuroraBackground from "../components/AuroraBackground";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
// import ShaderBackground from "../components/ShaderBackground";

export default function About() {
  return (
    <div className="font-body-md text-body-md bg-transparent text-on-background min-h-screen relative overflow-x-hidden transition-colors duration-300">
      <AuroraBackground />

      <main className="pt-32 pb-24 max-w-max-width mx-auto px-5 md:px-20 relative z-10">
        {/* Hero Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-lcenter">
            <div className="lg:col-span-7">
              <span className="text-secondary font-label-caps text-label-caps tracking-[0.2em] mb-4 block">
                IDENTIFICATION
              </span>
              <h1 className="font-headline-xl text-headline-xl text-on-surface mb-8">
                Who am I?
              </h1>
              <div className="glass-card p-8 space-y-6">
                <p className="text-on-surface-variant">
                  I am a{" "}
                  <span className="text-primary font-medium">
                    Software Engineer
                  </span>{" "}
                  specializing in bridging the gap between robust architectural
                  logic and high-fidelity frontend execution. My approach is
                  rooted in mathematical precision and a deep‑seated curiosity
                  for how complex systems interact.
                </p>
                <p className="text-on-surface-variant">
                  With a focus on{" "}
                  <span className="text-secondary">
                    performance‑driven development
                  </span>
                  , I leverage modern frameworks and workflows to build software
                  that isn't just functional, but inherently scalable and
                  intuitive.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <div className="relative glass-card aspect-square overflow-hidden">
                  <img
                    alt="A high-end, minimalist professional workstation setup with a mechanical keyboard"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOyH0s6ML1CjitygRHGINLJm0c5t8d2HNcNOQ099uYS8rWURYSawxCncLRRD3lSuAs7OgwE2rUItG94py6baWS4RV_p6w4HAHLSkXeXppm_7U8Gct1-ETzDxjHTklhWgT3iGfydFj_q9xi6l4XEe-f0NY5pxmAYEfyFCHq5lFuNwUBzoyT0qEJWwAFoewhaihdu_j5roPNJa3A-8QpB1zpehs2QOdKXYoQ9jyaEyIjM3mkPFOSqvFkzA"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* What I enjoy building */}
            <div className="glass-card p-10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary">
                    terminal
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">
                  What do I enjoy building?
                </h2>
                <p className="text-on-surface-variant mb-6">
                  My passion lies in crafting high‑performance web ecosystems
                  and AI‑powered tools. I find immense satisfaction in
                  optimizing low‑level algorithms just as much as designing a
                  seamless, glassmorphic UI interaction.
                </p>
              </div>
              {/* <div className="flex flex-wrap gap-3">
                <span className="bg-surface-container px-3 py-1 rounded-full text-secondary font-code-md text-code-md">
                  Scalable Architectures
                </span>
                <span className="bg-surface-container px-3 py-1 rounded-full text-secondary font-code-md text-code-md">
                  AI Workflows
                </span>
                <span className="bg-surface-container px-3 py-1 rounded-full text-secondary font-code-md text-code-md">
                  Creative UI
                </span>
              </div> */}
            </div>

            {/* What makes me different */}
            <div className="glass-card p-10 flex flex-col justify-between border-primary/20">
              <div>
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-secondary">
                    psychology
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">
                  What makes me different?
                </h2>
                <p className="text-on-surface-variant mb-6">
                  Unlike traditional developers, I view software through a dual
                  lens of{" "}
                  <span className="text-primary">engineering rigor</span> and{" "}
                  <span className="text-secondary">artistic design</span>. This
                  multidisciplinary perspective ensures that technical
                  constraints never compromise the user's emotional experience.
                </p>
              </div>
              {/* <div className="grid grid-cols-3 gap-4 border-t border-outline-variant/30 pt-6">
                <div className="text-center">
                  <div className="text-primary font-bold text-headline-lg">
                    1%
                  </div>
                  <div className="text-[10px] font-label-caps text-on-surface-variant">
                    CODE PRECISION
                  </div>
                </div>
                <div className="text-center border-x border-outline-variant/30">
                  <div className="text-secondary font-bold text-headline-lg">
                    24/7
                  </div>
                  <div className="text-[10px] font-label-caps text-on-surface-variant">
                    LOGIC MONITOR
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-tertiary font-bold text-headline-lg">
                    ∞
                  </div>
                  <div className="text-[10px] font-label-caps text-on-surface-variant">
                    ITERATION
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* Stats & Personal Info */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Location */}
            <div className="glass-card p-8 relative overflow-hidden group">
              <div
                className="absolute inset-0 z-0 grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCdkJlnlOtSjLZ0Q-n5fdIDP9n_q75Xwuvb-JviNG23vWuzDuTC0XQJ8I4Oizw0fWl5Nj0ArIhUDq7kCC0E9LItJpOymwgvdNHXuvDDDK4dWg1cjxoq0_YuntsUWMMEKXbTEZxHruzqWY7hckCgLbNs93LE82xKF0Duu7FnNkQxzJmUQXxz2i8e0MEdlmK2Pbf3RO0Dm58JNdjvZPhgbhXPNiYk5oZ698Fm527KBWmUai_9xpxC9rG4lQ')",
                }}
              />
              <div className="relative z-10">
                <span className="material-symbols-outlined text-primary mb-4">
                  location_on
                </span>
                <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-1">
                  LOCATION
                </h3>
                <p className="text-on-surface font-headline-lg text-headline-lg">
                  Nigeria
                </p>
              </div>
            </div>
            {/* Languages */}
            <div className="glass-card p-8">
              <span className="material-symbols-outlined text-secondary mb-4">
                translate
              </span>
              <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-4">
                LANGUAGES
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-on-surface">English</span>
                  <span className="text-secondary font-code-md text-code-md">
                    Native
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-on-surface">Hausa</span>
                  <span className="text-secondary font-code-md text-code-md">
                    Native
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-on-surface">Spanish</span>
                  <span className="text-secondary font-code-md text-code-md">
                    Intermediate
                  </span>
                </div>
              </div>
            </div>
            {/* Education */}
            <div className="glass-card p-8 border-l-4 border-l-primary">
              <span className="material-symbols-outlined text-primary mb-4">
                school
              </span>
              <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-2">
                EDUCATION
              </h3>
              <p className="text-on-surface font-medium mb-1">
                Skyline University Nigeria
              </p>
              <p className="text-on-surface-variant text-body-sm mb-4">
                B.Sc Software Engineering
              </p>
              <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                First Class Honours
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-32" id="skills">
          <div className="text-center mb-16">
            <span className="text-secondary font-label-caps text-label-caps tracking-[0.2em] mb-4 block">
              TECH STACK
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface">
              Core Competencies
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Languages */}
            <div className="glass-card p-8">
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  code
                </span>{" "}
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-lg border border-outline-variant/30 font-code-md text-code-md">
                  Python
                </span>
                <span className="bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-lg border border-outline-variant/30 font-code-md text-code-md">
                  JS
                </span>
                <span className="bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-lg border border-outline-variant/30 font-code-md text-code-md">
                  TS
                </span>
                <span className="bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-lg border border-outline-variant/30 font-code-md text-code-md">
                  C/C++
                </span>
                <span className="bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-lg border border-outline-variant/30 font-code-md text-code-md">
                  SQL
                </span>
                <span className="bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-lg border border-outline-variant/30 font-code-md text-code-md">
                  HTML
                </span>
                <span className="bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-lg border border-outline-variant/30 font-code-md text-code-md">
                  CSS
                </span>
              </div>
            </div>
            {/* Frameworks */}
            <div className="glass-card p-8">
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">
                  layers
                </span>{" "}
                Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-lg border border-outline-variant/30 font-code-md text-code-md">
                  React
                </span>
                <span className="bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-lg border border-outline-variant/30 font-code-md text-code-md">
                  Node
                </span>
                <span className="bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-lg border border-outline-variant/30 font-code-md text-code-md">
                  Express
                </span>
                <span className="bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-lg border border-outline-variant/30 font-code-md text-code-md">
                  Bootstrap
                </span>
                <span className="bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-lg border border-outline-variant/30 font-code-md text-code-md">
                  Tailwind
                </span>
              </div>
            </div>
            {/* AI & Data */}
            {/* <div className="glass-card p-8">
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-tertiary">
                  memory
                </span>{" "}
                AI &amp; Data
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-lg border border-outline-variant/30 font-code-md text-code-md">
                  TensorFlow
                </span>
                <span className="bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-lg border border-outline-variant/30 font-code-md text-code-md">
                  PyTorch
                </span>
                <span className="bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-lg border border-outline-variant/30 font-code-md text-code-md">
                  OpenCV
                </span>
                <span className="bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-lg border border-outline-variant/30 font-code-md text-code-md">
                  Scikit-learn
                </span>
              </div>
            </div> */}
            {/* Tools */}
            <div className="glass-card p-8">
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  handyman
                </span>{" "}
                Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-lg border border-outline-variant/30 font-code-md text-code-md">
                  Git
                </span>
                <span className="bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-lg border border-outline-variant/30 font-code-md text-code-md">
                  Docker
                </span>
                <span className="bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-lg border border-outline-variant/30 font-code-md text-code-md">
                  Linux
                </span>
                <span className="bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-lg border border-outline-variant/30 font-code-md text-code-md">
                  VS Code
                </span>
                <span className="bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-lg border border-outline-variant/30 font-code-md text-code-md">
                  Figma
                </span>
              </div>
            </div>
            {/* Specialized */}
            {/* <div className="glass-card p-8">
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">
                  settings_input_component
                </span>{" "}
                Specialized
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-lg border border-outline-variant/30 font-code-md text-code-md">
                  REST APIs
                </span>
                <span className="bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-lg border border-outline-variant/30 font-code-md text-code-md">
                  UI/UX
                </span>
                <span className="bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-lg border border-outline-variant/30 font-code-md text-code-md">
                  Cybersecurity
                </span>
                <span className="bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-lg border border-outline-variant/30 font-code-md text-code-md">
                  CI/CD
                </span>
                <span className="bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-lg border border-outline-variant/30 font-code-md text-code-md">
                  Cloud Computing
                </span>
              </div>
            </div> */}
          </div>
        </section>

        {/* Dynamic Visualization (Code Block) */}
        <section className="mb-32">
          <div className="glass-card overflow-hidden">
            <div className="bg-surface-container px-4 py-2 flex items-center gap-2 border-b border-outline-variant/30 ">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <span className="text-[10px] font-label-caps text-on-surface-variant ml-4">
                Harun.js — Bio-Architecture
              </span>
            </div>
            <div className="p-8 font-code-md text-code-md leading-relaxed bg-linear-to-br from-transparent to-primary/5">
              {/* <pre className="overflow-x-hidden whitespace-pre-wrap"> */}
              {/* <code className="text-on-surface-variant"> */}
              <SyntaxHighlighter
                language="javascript"
                style={oneDark}
                // showLineNumbers
                wrapLongLines
                customStyle={{
                  background: "transparent",
                  padding: 0,
                  margin: 0,
                }}
                codeTagProps={{ style: { fontFamily: "inherit" } }}
              >
                {`const developer = {
  name: "Harun Abdulwahab",
  role: "Software Engineer",
  philosophy: "Bridges the gap between data and human intent",
  primary_trait: "Meticulous",
  execute() {
    return "Transforming abstract problems into high-performance solutions.";
  }
};

console.log(developer.execute());`}
              </SyntaxHighlighter>
              {/* </code> */}
              {/* </pre> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
