import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, type Variants } from 'framer-motion';

const WORDS = [
  'Ideas',
  'Data',
  'Models',
  'Intelligence',
  'Automation',
  'Insight'
];

const variants: Variants = {
  enter: {
    opacity: 0,
    y: '55%',
    scale: 0.94,
  },
  center: {
    opacity: 1,
    y: '0%',
    scale: 1,
    transition: { duration: 0.65, ease: 'easeOut' }
  },
  exit: {
    opacity: 0,
    y: '-55%',
    scale: 1.04,
    transition: { duration: 0.5, ease: 'easeIn' }
  }
};

interface AnimatedHeadlineProps {
  className?: string;
  accentClassName?: string;
  cycleTime?: number; // ms per word
}

const AnimatedHeadline: React.FC<AnimatedHeadlineProps> = ({ className = '', accentClassName = '', cycleTime = 2600 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(prev => (prev + 1) % WORDS.length);
    }, cycleTime);
    return () => clearInterval(id);
  }, [cycleTime]);

  return (
    <div className={`relative inline-flex items-center justify-start ${className}`}>
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        {WORDS[index]}
      </span>
      {/* Reserve width for longest word to avoid layout shift */}
      <div className="relative h-[1.1em] w-[12ch] overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={WORDS[index]}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className={`absolute inset-0 font-bold tracking-tight will-change-transform ${accentClassName}`}
          >
            {WORDS[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnimatedHeadline;
