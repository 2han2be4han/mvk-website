import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  index?: string;
  invert?: boolean;
}

export default function Eyebrow({ children, className, index, invert }: EyebrowProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] uppercase',
        invert ? 'text-white/60' : 'text-ink-500',
        className
      )}
    >
      {index && (
        <span className={cn('font-medium', invert ? 'text-white' : 'text-ink-900')}>
          [{index}]
        </span>
      )}
      <span className={cn('h-px w-6', invert ? 'bg-white/30' : 'bg-ink-300')} />
      <span>{children}</span>
    </div>
  );
}
