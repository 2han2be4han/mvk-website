import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  speed?: 'slow' | 'normal' | 'fast';
  gap?: number;
}

export default function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
  speed = 'normal',
  gap = 48,
}: MarqueeProps) {
  const duration =
    speed === 'slow' ? '80s' : speed === 'fast' ? '20s' : '40s';

  return (
    <div
      className={cn(
        'group flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]',
        className
      )}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className={cn(
            'flex shrink-0 items-center',
            pauseOnHover && 'group-hover:[animation-play-state:paused]'
          )}
          style={{
            gap: `${gap}px`,
            paddingRight: `${gap}px`,
            animation: `marquee ${duration} linear infinite ${reverse ? 'reverse' : ''}`.trim(),
          }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
