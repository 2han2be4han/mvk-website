import { cn } from '@/lib/utils';

interface BlueprintCornersProps {
  className?: string;
  size?: number;
  color?: string;
}

export default function BlueprintCorners({
  className,
  size = 14,
  color = 'currentColor',
}: BlueprintCornersProps) {
  const s = `${size}px`;
  const corner = (style: React.CSSProperties) => (
    <span
      aria-hidden
      className="absolute"
      style={{ width: s, height: s, ...style }}
    >
      <svg viewBox="0 0 14 14" className="size-full" fill="none">
        <path
          d="M0 0 H14 M0 0 V14"
          stroke={color}
          strokeWidth="1"
        />
      </svg>
    </span>
  );
  return (
    <div className={cn('pointer-events-none absolute inset-0', className)}>
      {corner({ top: 0, left: 0 })}
      {corner({ top: 0, right: 0, transform: 'scaleX(-1)' })}
      {corner({ bottom: 0, left: 0, transform: 'scaleY(-1)' })}
      {corner({ bottom: 0, right: 0, transform: 'scale(-1, -1)' })}
    </div>
  );
}
