import { useState } from "react";
import AuroraBackground from "./AuroraBackground";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("project");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API connection
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setSubject("project");
    setMessage("");
    setIsSubmitted(false);
  };

  return (
    <div className="font-body-md text-body-md bg-transparent text-on-background min-h-screen relative overflow-x-hidden transition-colors duration-300">
      <AuroraBackground />

      <main className="pt-32 pb-24 px-5 md:px-20 max-w-max-width mx-auto relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="font-headline-xl text-4xl md:text-5xl font-bold mb-6 tracking-tight text-on-background">
            Let's Build Something Exceptional.
          </h1>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
            Whether you're looking to start a new project, scale an existing
            platform, or just want to discuss technical architecture, I'm here
            to help translate your vision into robust code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-card p-8 rounded-xl transition-all duration-300">
              <h2 className="font-headline-lg text-2xl font-semibold mb-8 text-primary">
                Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="font-label-caps text-label-caps text-on-surface-variant text-xs font-semibold">
                      Email
                    </p>
                    <a
                      className="font-code-md text-code-md text-on-surface hover:text-secondary transition-colors"
                      href="mailto:harunlabdulwahab@gmail.com"
                    >
                      harunlabdulwahab@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="font-label-caps text-label-caps text-on-surface-variant text-xs font-semibold flex items-center gap-2">
                      Phone{" "}
                      <span className="text-[10px] bg-secondary/20 text-secondary px-1.5 py-0.5 rounded font-bold">
                        WhatsApp
                      </span>
                    </p>
                    <a
                      className="font-code-md text-code-md text-on-surface hover:text-secondary transition-colors"
                      href="tel:+2349020838258"
                    >
                      +234 902 083 8258
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">terminal</span>
                  </div>
                  <div>
                    <p className="font-label-caps text-label-caps text-on-surface-variant text-xs font-semibold">
                      GitHub
                    </p>
                    <a
                      className="font-code-md text-code-md text-on-surface hover:text-secondary transition-colors"
                      href="https://github.com/harunlsa"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/harunlsa
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">link</span>
                  </div>
                  <div>
                    <p className="font-label-caps text-label-caps text-on-surface-variant text-xs font-semibold">
                      LinkedIn
                    </p>
                    <a
                      className="font-code-md text-code-md text-on-surface hover:text-secondary transition-colors"
                      href="https://linkedin.com/in/hlabdulwahab"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/hlabdulwahab
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Abstract Visual */}
            <div className="glass-card p-2 rounded-xl h-48 overflow-hidden relative">
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <span className="font-label-caps text-label-caps text-secondary text-xs font-semibold uppercase tracking-wider">
                  System Status: Ready
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Open for new architectural challenges and collaborations.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-12 rounded-xl bg-surface-container-lowest">
              {!isSubmitted ? (
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label
                        className="font-label-caps text-label-caps text-on-surface-variant text-xs font-semibold ml-1 opacity-70"
                        htmlFor="name"
                      >
                        Full Name
                      </label>
                      <input
                        className="w-full form-input py-3 px-2 font-body-md text-on-surface focus:placeholder-transparent bg-surface-dim border border-outline-variant/30 rounded-lg focus:border-primary focus:outline-none transition-colors"
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className="font-label-caps text-label-caps text-on-surface-variant text-xs font-semibold ml-1 opacity-70"
                        htmlFor="email"
                      >
                        Email Address
                      </label>
                      <input
                        className="w-full form-input py-3 px-2 font-body-md text-on-surface focus:placeholder-transparent bg-surface-dim border border-outline-variant/30 rounded-lg focus:border-primary focus:outline-none transition-colors"
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      className="font-label-caps text-label-caps text-on-surface-variant text-xs font-semibold ml-1 opacity-70"
                      htmlFor="subject"
                    >
                      Inquiry Type
                    </label>
                    <select
                      className="w-full form-input py-3 px-2 font-body-md text-on-surface bg-surface-dim border border-outline-variant/30 rounded-lg focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer"
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    >
                      <option className="bg-surface-container" value="project">
                        New Project Inquiry
                      </option>
                      <option
                        className="bg-surface-container"
                        value="consultation"
                      >
                        Technical Consultation
                      </option>

                      <option className="bg-surface-container" value="other">
                        General Message
                      </option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label
                      className="font-label-caps text-label-caps text-on-surface-variant text-xs font-semibold ml-1 opacity-70"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="w-full form-input py-3 px-2 font-body-md text-on-surface resize-none focus:placeholder-transparent bg-surface-dim border border-outline-variant/30 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      id="message"
                      placeholder="Tell me about your project or inquiry..."
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    className="w-full bg-primary-container text-on-primary-container py-5 rounded-lg font-label-caps text-label-caps font-bold hover:bg-opacity-90 hover:shadow-[0px_0px_20px_rgba(37,99,235,0.4)] active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <span>
                      {isSubmitting ? "Processing..." : "Execute Connection"}
                    </span>
                    <span
                      className={`material-symbols-outlined text-[18px] ${isSubmitting ? "animate-spin" : ""}`}
                    >
                      {isSubmitting ? "sync" : "send"}
                    </span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-12 animate-in fade-in duration-500">
                  <div className="w-20 h-20 bg-secondary/20 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span
                      className="material-symbols-outlined text-4xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                  </div>
                  <h3 className="font-headline-lg text-2xl font-bold mb-2 text-on-background">
                    Message Sent Successfully
                  </h3>
                  <p className="text-on-surface-variant">
                    I'll get back to you within 24-48 hours. Looking forward to
                    our discussion.
                  </p>
                  <button
                    className="mt-8 font-label-caps text-label-caps text-primary hover:underline transition-all cursor-pointer font-bold"
                    onClick={handleReset}
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
