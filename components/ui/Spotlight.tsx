'use client';
import { useRef, type MouseEvent, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SpotlightProps {
  children: ReactNode;
  className?: string;
  size?: number;
  color?: string;
}

export default function Spotlight({
  children,
  className,
  size = 500,
  color = 'oklch(0.66 0.15 205 / 0.25)',
}: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    ref.current?.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    ref.current?.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn('group relative', className)}
      style={
        {
          '--spotlight-size': `${size}px`,
          '--spotlight-color': color,
        } as React.CSSProperties
      }
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(var(--spotlight-size) circle at var(--mx) var(--my), var(--spotlight-color), transparent 60%)',
        }}
      />
      {children}
    </div>
  );
}
