import { ReactNode } from 'react';
import Reveal from './Reveal';
import Eyebrow from './Eyebrow';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  index?: string;
  kicker: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
  invert?: boolean;
}

export default function SectionHeading({
  index,
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
        'flex flex-col gap-6',
        align === 'center' ? 'items-center text-center' : 'items-start',
        className
      )}
    >
      <Reveal direction="up">
        <Eyebrow index={index} invert={invert}>{kicker}</Eyebrow>
      </Reveal>
      <Reveal direction="up" delay={0.08}>
        <h2
          className={cn(
            'font-display text-[clamp(2.25rem,5vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.025em] text-balance',
            invert ? 'text-white' : 'text-ink-900'
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal direction="up" delay={0.16}>
          <p
            className={cn(
              'max-w-2xl text-pretty text-[15px] md:text-base leading-relaxed',
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
