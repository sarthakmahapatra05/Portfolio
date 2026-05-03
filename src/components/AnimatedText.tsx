import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText = ({ text, className = '' }: AnimatedTextProps) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, wordIndex) => {
        const start = wordIndex / words.length;
        const end = (wordIndex + 1) / words.length;

        return (
          <span key={wordIndex} className="relative inline-block mr-[0.25em]">
            <span className="opacity-20">{word}</span>
            <AnimatedWord
              word={word}
              progress={scrollYProgress}
              range={[start, end]}
            />
          </span>
        );
      })}
    </p>
  );
};

interface AnimatedWordProps {
  word: string;
  progress: any;
  range: [number, number];
}

const AnimatedWord = ({ word, progress, range }: AnimatedWordProps) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className="absolute left-0 top-0 text-[#D7E2EA]"
    >
      {word}
    </motion.span>
  );
};
