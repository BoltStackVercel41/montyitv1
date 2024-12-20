import { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useInView as useFramerInView } from 'framer-motion';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  delay?: number;
}

export function AnimatedNumber({ value, duration = 2, delay = 0 }: AnimatedNumberProps) {
  const ref = useRef(null);
  const isInView = useFramerInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);
  
  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
    delay: delay * 1000
  });

  useEffect(() => {
    if (isInView) {
      spring.set(value);
      
      return spring.onChange((latest) => {
        if (typeof latest === 'number') {
          setDisplayValue(Math.floor(latest));
        }
      });
    }
  }, [spring, value, isInView]);

  return (
    <motion.span 
      ref={ref}
      className="tabular-nums"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {displayValue}
    </motion.span>
  );
}