'use client';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useRef, type MouseEvent, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  href?: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'outline';
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function MagneticButton({
  href,
  children,
  variant = 'primary',
  className,
  showArrow = true,
  onClick,
  type = 'button',
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.25);
    y.set((e.clientY - cy) * 0.25);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    'group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-medium text-[15px] transition-colors duration-300 will-change-transform';
  const variants = {
    primary:
      'bg-ink-900 text-white hover:bg-ink-800 shadow-[0_10px_40px_-10px_oklch(0.11_0.05_262_/_0.5)]',
    ghost: 'bg-white/70 text-ink-900 hover:bg-white border border-ink-200',
    outline: 'border border-ink-300 text-ink-900 hover:border-ink-900',
  };

  const inner = (
    <motion.span
      className="relative inline-flex items-center gap-2"
      style={{ x: springX, y: springY }}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2}
        />
      )}
    </motion.span>
  );

  if (href) {
    return (
      <Link
        ref={ref}
        href={href}
        className={cn(base, variants[variant], className)}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        {inner}
      </Link>
    );
  }
  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      className={cn(base, variants[variant], className)}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {inner}
    </button>
  );
}
