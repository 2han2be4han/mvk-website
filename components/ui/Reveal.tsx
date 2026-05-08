'use client';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  amount?: number;
  once?: boolean;
}

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  className,
  amount = 0.2,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();
  const offset = 32;
  const map: Record<Direction, { x: number; y: number }> = {
    up: { x: 0, y: offset },
    down: { x: 0, y: -offset },
    left: { x: offset, y: 0 },
    right: { x: -offset, y: 0 },
    none: { x: 0, y: 0 },
  };

  const variants: Variants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, ...map[direction], filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
