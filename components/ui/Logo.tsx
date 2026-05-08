import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  invert?: boolean;
  className?: string;
}

export default function Logo({ invert = false, className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn('group flex items-center gap-3', className)}
      aria-label="MVK 前田バルブ工業 ホームへ"
    >
      <span
        className={cn(
          'relative inline-flex size-9 items-center justify-center border transition-colors duration-300',
          invert
            ? 'border-white/30 group-hover:border-aqua-400'
            : 'border-ink-300 group-hover:border-ink-900'
        )}
      >
        <svg viewBox="0 0 32 32" className="size-5" fill="none" aria-hidden>
          <path
            d="M6 7 L16 22 L26 7"
            stroke={invert ? 'white' : 'oklch(0.09 0.025 262)'}
            strokeWidth="1.6"
            strokeLinecap="square"
            fill="none"
          />
          <circle
            cx="16"
            cy="26"
            r="1.4"
            fill="oklch(0.62 0.15 207)"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display text-base font-semibold tracking-[0.05em]',
            invert ? 'text-white' : 'text-ink-900'
          )}
        >
          MVK
        </span>
        <span
          className={cn(
            'mt-1 font-mono text-[9px] tracking-[0.22em] uppercase',
            invert ? 'text-white/55' : 'text-ink-500'
          )}
        >
          Maeda Valve
        </span>
      </span>
    </Link>
  );
}
