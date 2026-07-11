import { useState, useEffect } from "react";

/**
 * AuroraBackground
 *
 * Renders two full-viewport, fixed, mouse-tracking radial gradient blobs that
 * create a dynamic aurora / glow effect behind page content.
 *
 * - Blue blob  (#2563eb) follows the cursor
 * - Cyan blob  (#00cbe6) mirrors it from the opposite corner
 * - Both sit at z-index 0 so page content (z-10+) renders above them
 */
export default function AuroraBackground() {
  const [mousePos, setMousePos] = useState({ x: 10, y: 10 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Blue blob — follows cursor */}
      <div
        className="fixed inset-0 w-full h-full opacity-15 pointer-events-none transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, #2563eb, transparent 40%)`,
          filter: "blur(10px)",
          zIndex: 0,
        }}
      />
      {/* Cyan blob — mirrors cursor */}
      <div
        className="fixed inset-0 w-full h-full opacity-20 pointer-events-none transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(circle at ${100 - mousePos.x}% ${100 - mousePos.y}%, #00cbe6, transparent 40%)`,
          filter: "blur(10px)",
          zIndex: 0,
        }}
      />
    </>
  );
}
