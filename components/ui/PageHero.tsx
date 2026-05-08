import { ReactNode } from 'react';
import Reveal from './Reveal';
import Eyebrow from './Eyebrow';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  index: string;
  kicker: string;
  title: ReactNode;
  description?: ReactNode;
  meta?: { label: string; value: string }[];
  className?: string;
}

export default function PageHero({
  index,
  kicker,
  title,
  description,
  meta,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative isolate overflow-hidden border-b border-ink-200 bg-paper pb-16 pt-36 md:pb-24 md:pt-44',
        className
      )}
    >
      <div aria-hidden className="dot-bg pointer-events-none absolute inset-0 opacity-40" />
      <div className="grain-overlay" />

      <div className="relative container-x">
        <Reveal>
          <Eyebrow index={index}>{kicker}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-8 font-display text-[clamp(2.5rem,7.5vw,6.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-ink-900 text-balance">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-ink-500 md:text-lg">
              {description}
            </p>
          </Reveal>
        )}

        {meta && meta.length > 0 && (
          <Reveal delay={0.24}>
            <dl className="mt-14 flex flex-wrap gap-x-12 gap-y-4 border-t border-ink-200 pt-6">
              {meta.map((m) => (
                <div key={m.label} className="flex flex-col gap-1">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
                    {m.label}
                  </dt>
                  <dd className="font-mono text-sm tabular-nums text-ink-900">{m.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        )}
      </div>
    </section>
  );
}
