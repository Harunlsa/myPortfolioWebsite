import Navbar from "./Navbar";

export default function About() {
  return (
    <div className="font-body-md text-body-md bg-[#131313] text-[#e5e2e1] min-h-screen">
      <Navbar />
      <div className="max-w-[1200px] mx-auto px-5 md:px-20 pt-36 pb-16 text-center">
        <h1 className="font-headline-xl text-4xl md:text-5xl font-bold mb-8 text-white">About Me</h1>
        <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">
          This section is currently under development. Please check back later.
        </p>
      </div>
    </div>
  );
}
