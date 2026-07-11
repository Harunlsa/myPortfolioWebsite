import ReactMarkdown from "react-markdown";
import designContent from "./DESIGN.md?raw";

export default function DesignDoc() {
  return (
    <div className="p-8 max-w-4xl mx-auto prose dark:prose-invert prose-headings:font-bold text-on-surface transition-colors duration-300">
      <ReactMarkdown>{designContent}</ReactMarkdown>
    </div>
  );
}
