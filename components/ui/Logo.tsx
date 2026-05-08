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
      className={cn('group flex items-center gap-2.5', className)}
      aria-label="MVK 前田バルブ工業 ホームへ"
    >
      <span className="relative inline-flex size-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-ink-900 via-ink-700 to-aqua-700 shadow-[0_4px_20px_-4px_oklch(0.66_0.15_205_/_0.6)] transition-transform duration-500 group-hover:rotate-[8deg]">
        <svg viewBox="0 0 32 32" className="size-5 text-white" aria-hidden>
          <path
            d="M6 8 L16 22 L26 8"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="16" cy="6" r="1.4" fill="currentColor" />
        </svg>
        <span className="absolute inset-0 -translate-y-full bg-gradient-to-b from-aqua-400/40 to-transparent transition-transform duration-700 group-hover:translate-y-0" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display text-lg font-semibold tracking-tight',
            invert ? 'text-white' : 'text-ink-900'
          )}
        >
          MVK
        </span>
        <span
          className={cn(
            'mt-0.5 text-[10px] font-jp tracking-[0.25em]',
            invert ? 'text-white/60' : 'text-ink-500'
          )}
        >
          前田バルブ工業
        </span>
      </span>
    </Link>
  );
}
