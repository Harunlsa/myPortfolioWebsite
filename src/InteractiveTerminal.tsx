import { useState, useRef, useEffect } from "react";

interface HistoryItem {
  type: "input" | "output";
  text: React.ReactNode;
}

export default function InteractiveTerminal() {
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      type: "output",
      text: (
        <div>
          Welcome to Harun's interactive terminal! Type{" "}
          <span className="text-primary font-bold">help</span> to begin.
        </div>
      ),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    const newHistory: HistoryItem[] = [
      ...history,
      { type: "input", text: cmd },
    ];

    if (cleanCmd === "help") {
      newHistory.push({
        type: "output",
        text: (
          <div>
            Available commands:{" "}
            <span className="text-secondary font-semibold">about</span>,{" "}
            <span className="text-secondary font-semibold">projects</span>,{" "}
            <span className="text-secondary font-semibold">contact</span>,{" "}
            <span className="text-secondary font-semibold">clear</span>
          </div>
        ),
      });
    } else if (cleanCmd === "about") {
      newHistory.push({
        type: "output",
        text: (
          <span>
            Harun is a software engineer specializing in building
            high-performance web applications, automation solutions, and
            AI-driven systems. He is dedicated to pixel-perfect visual design,
            efficient system architectures, and precise code quality.
          </span>
        ),
      });
    } else if (cleanCmd === "projects") {
      newHistory.push({
        type: "output",
        text: (
          <div className="space-y-1">
            <p className="font-semibold text-primary">
              1. Plastic Company ERP System
            </p>
            <p className="pl-4 text-on-surface-variant text-sm">
              A comprehensive manufacturing operational control center built to
              optimize automation and inventory workflows.
            </p>
            <p className="font-semibold text-primary">
              2. Football Pitch System
            </p>
            <p className="pl-4 text-on-surface-variant text-sm">
              SaaS scheduler with real-time slot bookings and automated checkout
              systems.
            </p>
            <p className="font-semibold text-primary">3. FPL AI Assistant</p>
            <p className="pl-4 text-on-surface-variant text-sm">
              A predictive machine learning system utilizing player history data
              for optimal Fantasy Premier League selections.
            </p>
          </div>
        ),
      });
    } else if (cleanCmd === "contact") {
      newHistory.push({
        type: "output",
        text: "Reach out via email at harunlabdulwahab@gmail.com, WhatsApp/call at +2349020838258 or connect through GitHub/LinkedIn!",
      });
    } else if (cleanCmd === "clear") {
      setHistory([]);
      setInputValue("");
      return;
    } else if (cleanCmd === "") {
      // Do nothing
    } else {
      newHistory.push({
        type: "output",
        text: `Command not found: "${cmd}". Type "help" for a list of available commands.`,
      });
    }

    setHistory(newHistory);
    setInputValue("");
  };

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden shadow-2xl w-full text-left ">
      {/* Terminal Header */}
      <div className="bg-surface-container px-4 py-2 flex items-center gap-2 border-b border-outline-variant">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-label-caps font-label-caps text-on-surface-variant opacity-60 text-xs">
            bash — visitor@harun
          </span>
        </div>
      </div>
      {/* Terminal Body */}
      <div
        ref={bodyRef}
        className="p-6 font-code-md text-code-md h-[240px] overflow-y-auto overflow-x-hidden bg-[#0e0e0e] space-y-3 scrollbar-thin scrollbar-thumb-surface-container-high"
      >
        {history.map((item, idx) => (
          <div key={idx}>
            {item.type === "input" ? (
              <div className="flex items-center gap-1">
                <span className="text-secondary font-medium">
                  visitor@harun
                </span>
                <span className="text-on-surface">:</span>
                <span className="text-primary">~</span>
                <span className="text-on-surface">$ {item.text}</span>
              </div>
            ) : (
              <div className="text-on-surface-variant leading-relaxed text-sm break-words whitespace-pre-wrap">
                {item.text}
              </div>
            )}
          </div>
        ))}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(inputValue);
          }}
          className="flex items-center gap-1"
        >
          <span className="text-secondary font-medium">visitor@harun</span>
          <span className="text-on-surface">:</span>
          <span className="text-primary">~</span>
          <span className="text-on-surface">$</span>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 min-w-0 bg-transparent border-none outline-none focus:ring-0 p-0 text-on-surface caret-primary focus:outline-none"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
}
