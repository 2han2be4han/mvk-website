import { ReactNode } from 'react';
import GradientMesh from './GradientMesh';
import Reveal from './Reveal';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  kicker: string;
  title: ReactNode;
  description?: ReactNode;
  variant?: 'aqua' | 'copper' | 'mixed';
  className?: string;
}

export default function PageHero({
  kicker,
  title,
  description,
  variant = 'aqua',
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative isolate overflow-hidden border-b border-ink-100 pb-20 pt-40 md:pb-28 md:pt-48',
        className
      )}
    >
      <GradientMesh variant={variant} className="opacity-80" />
      <div className="relative container-x">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/70 px-3 py-1 text-xs font-medium tracking-[0.25em] uppercase text-ink-600 backdrop-blur">
            <span className="size-1.5 rounded-full bg-aqua-500" />
            {kicker}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 font-display text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[1.05] tracking-tight text-ink-900 text-balance">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink-500 md:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
