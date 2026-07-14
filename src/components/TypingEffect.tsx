import { useState, useEffect } from "react";

interface TypingEffectProps {
  phrases: string[];
}

export default function TypingEffect({ phrases }: TypingEffectProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (phrases.length === 0) return;
    const currentPhrase = phrases[phraseIndex];
    let timer: number;

    if (!isDeleting) {
      if (charIndex < currentPhrase.length) {
        timer = window.setTimeout(() => {
          setCharIndex((prev) => prev + 1);
        }, 80);
      } else {
        // Pause at the end of the phrase, then start deleting
        timer = window.setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (charIndex > 0) {
        timer = window.setTimeout(() => {
          setCharIndex((prev) => prev - 1);
        }, 40);
      } else {
        // Immediately switch to the next phrase
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex, phrases]);

  if (phrases.length === 0) return null;

  return (
    <span className="typing-container font-code-md text-code-md text-secondary tracking-wider uppercase font-semibold">
      {phrases[phraseIndex].substring(0, charIndex)}
    </span>
  );
}
