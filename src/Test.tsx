/**
 * Project Archive — Harun Abdulwahab
 *
 * Converted from static HTML to a React component.
 * Uses the custom Tailwind theme tokens (colors, fontFamily, fontSize, spacing,
 * borderRadius) defined in `tailwind.config.js` below — make sure that config
 * is merged into your project's Tailwind setup for the custom class names
 * (bg-primary-container, font-headline-lg, px-margin-desktop, etc.) to resolve.
 *
 * Note: the HTML you supplied was truncated — it only included the <head>
 * (theme config + global styles) and the aurora background + top nav from
 * the <body>. This component faithfully reproduces exactly that. If you have
 * the rest of the page (hero, project cards, filters, footer, etc.), send it
 * over and I'll extend this component to match.
 */

import AuroraBackground from "./AuroraBackground";
// import ShaderBackground from "./ShaderBackgrsound";

export default function Test() {
  return (
    <div className="font-body-md text-body-md bg-background text-on-background min-h-screen relative overflow-x-hidden opacity-80 transition-colors duration-300">
      {/* Aurora Blurs */}
      <AuroraBackground />
    </div>
  );
}
