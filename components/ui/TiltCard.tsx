'use client';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react';
import { useRef, type MouseEvent, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
}

export default function TiltCard({
  children,
  className,
  intensity = 8,
  glare = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rx = useSpring(useTransform(py, [0, 1], [intensity, -intensity]), { stiffness: 200, damping: 25 });
  const ry = useSpring(useTransform(px, [0, 1], [-intensity, intensity]), { stiffness: 200, damping: 25 });
  const glareX = useTransform(px, (v) => `${v * 100}%`);
  const glareY = useTransform(py, (v) => `${v * 100}%`);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };
  const onLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d', perspective: 1000 }}
      className={cn('relative will-change-transform', className)}
    >
      <div style={{ transform: 'translateZ(0)' }} className="relative h-full w-full">
        {children}
        {glare && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 [mask-image:linear-gradient(white,white)] hover:opacity-100"
            style={{
              background: 'radial-gradient(220px circle at var(--gx) var(--gy), oklch(1 0 0 / 0.18), transparent 70%)',
              ['--gx' as string]: glareX,
              ['--gy' as string]: glareY,
            } as React.CSSProperties}
          />
        )}
      </div>
    </motion.div>
  );
}
