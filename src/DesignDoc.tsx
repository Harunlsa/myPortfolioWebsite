import ReactMarkdown from "react-markdown";
import designContent from "./DESIGN.md?raw";

export default function DesignDoc() {
  return (
    <div className="p-8 max-w-4xl mx-auto prose prose-invert prose-headings:font-bold prose-headings:text-white">
      <ReactMarkdown>{designContent}</ReactMarkdown>
    </div>
  );
}
