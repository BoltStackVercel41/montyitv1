import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TypingTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TypingText({ text, className = '', delay = 0 }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;
      
      const intervalId = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setIsTyping(false);
        }
      }, 25); // Schnellere Geschwindigkeit (vorher 50)

      return () => clearInterval(intervalId);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <div className={className}>
      {displayedText}
      {isTyping && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-0.5 h-4 bg-white ml-0.5 align-middle"
        />
      )}
    </div>
  );
}