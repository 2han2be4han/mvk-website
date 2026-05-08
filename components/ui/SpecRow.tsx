import { cn } from '@/lib/utils';

interface SpecRowProps {
  label: string;
  value: string;
  unit?: string;
  invert?: boolean;
  className?: string;
}

export default function SpecRow({ label, value, unit, invert, className }: SpecRowProps) {
  return (
    <div
      className={cn(
        'flex items-baseline justify-between gap-4 border-b border-dashed py-2 text-[13px]',
        invert ? 'border-white/15' : 'border-ink-200',
        className
      )}
    >
      <span
        className={cn(
          'font-mono text-[10px] uppercase tracking-[0.18em]',
          invert ? 'text-white/50' : 'text-ink-500'
        )}
      >
        {label}
      </span>
      <span
        className={cn(
          'font-mono tabular-nums',
          invert ? 'text-white' : 'text-ink-900'
        )}
      >
        {value}
        {unit && (
          <span className={cn('ml-1 text-[10px]', invert ? 'text-white/50' : 'text-ink-500')}>
            {unit}
          </span>
        )}
      </span>
    </div>
  );
}
