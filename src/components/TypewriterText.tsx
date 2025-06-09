import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  onComplete?: () => void;
}

export default function TypewriterText({ text, className = '', onComplete }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50); // Faster typing speed for the main heading

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, onComplete]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-blink text-purple-400">|</span>
    </span>
  );
} 