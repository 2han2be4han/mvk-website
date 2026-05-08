import { ReactNode } from 'react';
import Reveal from './Reveal';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  kicker?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
  invert?: boolean;
}

export default function SectionHeading({
  kicker,
  title,
  description,
  align = 'left',
  className,
  invert = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5',
        align === 'center' ? 'items-center text-center' : 'items-start',
        className
      )}
    >
      {kicker && (
        <Reveal direction="up">
          <div
            className={cn(
              'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-[0.2em] uppercase',
              invert
                ? 'border-white/20 bg-white/5 text-white/80'
                : 'border-ink-200 bg-white/60 text-ink-600'
            )}
          >
            <span className={cn('size-1.5 rounded-full', invert ? 'bg-aqua-400' : 'bg-aqua-500')} />
            {kicker}
          </div>
        </Reveal>
      )}
      <Reveal direction="up" delay={0.1}>
        <h2
          className={cn(
            'font-display text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl text-balance',
            invert ? 'text-white' : 'text-ink-900'
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal direction="up" delay={0.2}>
          <p
            className={cn(
              'max-w-2xl text-pretty text-base md:text-lg leading-relaxed',
              invert ? 'text-white/70' : 'text-ink-500'
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
