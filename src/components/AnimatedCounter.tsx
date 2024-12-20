import { useEffect, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

function useAnimatedCount(targetNumber: number, duration: number) {
  const [displayValue, setDisplayValue] = useState('0');
  const count = useMotionValue(0);

  useEffect(() => {
    const animation = animate(count, targetNumber, {
      duration,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (latest) => {
        if (latest === targetNumber) {
          setDisplayValue(latest.toString());
        } else if (latest % 1 !== 0) {
          setDisplayValue(latest.toFixed(1));
        } else {
          setDisplayValue(Math.round(latest).toString());
        }
      },
    });

    return animation.stop;
  }, [count, targetNumber, duration]);

  return displayValue;
}

export default function AnimatedCounter({ value, duration = 2 }: AnimatedCounterProps) {
  const targetNumber = parseFloat(value.replace(/[^0-9.]/g, ''));
  const displayValue = useAnimatedCount(targetNumber, duration);

  return (
    <span>
      {displayValue}
      {value.includes('+') && '+'}
    </span>
  );
}