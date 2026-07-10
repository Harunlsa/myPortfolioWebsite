# 🌌 Harun L. Abdulwahab — Developer Portfolio

Welcome to the repository of my developer portfolio! This project is a modern, performance-oriented portfolio website designed to showcase my software engineering competencies, projects, and custom interactive components. Built with React, TypeScript, Vite, Tailwind CSS v4, and Framer Motion.

## 🚀 Features

- **Interactivity First**: Includes an **Interactive Bash Terminal** (`src/InteractiveTerminal.tsx`) that users can interact with directly from the home page. Run commands like `help`, `about`, `projects`, and `contact`.
- **Dynamic Typing Effect**: An optimized typing animation (`src/Home.tsx`) that cycles through professional titles without lag or layout shifts.
- **Atmospheric Visuals**: A custom-built **Shader Background** (`src/ShaderBackground.tsx`) using custom GPU shaders (GLSL) combined with soft aurora blurs for a sleek, premium, and cybernetic dark mode experience.
- **Scalable Design Tokens**: Full design system configuration outlined in `src/DESIGN.md`, adhering to strict layout grids, cohesive typography, and precise semantic colors.
- **Fast Build Times**: Developed using Vite with Oxlint integration for lightning-fast compilation and static code analysis.
- **Full Responsiveness**: Adaptive layouts spanning desktop, tablet, and mobile breakpoints.

---

## 🛠️ Tech Stack

- **Core & Logic**: React 19 (TypeScript)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Tooling**: Vite, TypeScript, Oxlint (Linter)

---

## 📂 Project Structure

```text
├── public/                 # Static assets & favicon
├── src/
│   ├── assets/             # Brand logos & icons
│   ├── About.tsx           # Identification, education & technical stack bento
│   ├── App.tsx             # Main routing and layout wrapper
│   ├── Contact.tsx         # Reach out/form component
│   ├── DESIGN.md           # Visual design tokens & specifications
│   ├── DesignDoc.tsx       # Live rendering component for design system documentation
│   ├── Footer.tsx          # Shared footer component
│   ├── Home.tsx            # Hero landing section & interactive terminal showcase
│   ├── InteractiveTerminal.tsx # Interactive terminal component
│   ├── Navbar.tsx          # Sticky navigation component
│   ├── Portfolio.tsx       # Complete list of featured projects
│   ├── ShaderBackground.tsx # WebGL fragment shaders for hero backgrounds
│   ├── index.css           # Global typography styles & custom keyframes
│   └── main.tsx            # App entry point
├── package.json            # Scripts & dependencies
└── tsconfig.json           # TS compiler options
```

---

## 🤝 Contact & Socials

- **Developer**: Harun L. Abdulwahab
- **Email**: [harun@example.com](mailto:harun@example.com)
- **GitHub**: [github.com/harunlsa](https://github.com/harunlsa)
- **Education**: B.Sc Software Engineering (First Class Honours) — Skyline University Nigeria
