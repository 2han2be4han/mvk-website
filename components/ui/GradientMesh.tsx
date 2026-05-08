import { cn } from '@/lib/utils';

interface GradientMeshProps {
  className?: string;
  variant?: 'aqua' | 'copper' | 'mixed' | 'dark';
}

export default function GradientMesh({ className, variant = 'mixed' }: GradientMeshProps) {
  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      {variant === 'aqua' && (
        <>
          <div className="absolute -left-[10%] top-[10%] size-[55vw] rounded-full bg-aqua-400/40 blur-[100px] animate-[float_12s_ease-in-out_infinite]" />
          <div className="absolute -right-[10%] top-[40%] size-[45vw] rounded-full bg-aqua-300/30 blur-[120px] animate-[float_16s_ease-in-out_infinite_reverse]" />
          <div className="absolute left-[30%] -bottom-[20%] size-[40vw] rounded-full bg-aqua-500/25 blur-[100px] animate-[pulse-glow_8s_ease-in-out_infinite]" />
        </>
      )}
      {variant === 'copper' && (
        <>
          <div className="absolute -left-[10%] top-[20%] size-[50vw] rounded-full bg-copper-400/30 blur-[120px] animate-[float_14s_ease-in-out_infinite]" />
          <div className="absolute right-[10%] -top-[10%] size-[40vw] rounded-full bg-copper-500/20 blur-[100px] animate-[float_18s_ease-in-out_infinite_reverse]" />
        </>
      )}
      {variant === 'mixed' && (
        <>
          <div className="absolute -left-[15%] top-[5%] size-[60vw] rounded-full bg-aqua-400/35 blur-[120px] animate-[float_14s_ease-in-out_infinite]" />
          <div className="absolute -right-[15%] top-[35%] size-[50vw] rounded-full bg-copper-400/25 blur-[120px] animate-[float_18s_ease-in-out_infinite_reverse]" />
          <div className="absolute left-[40%] -bottom-[20%] size-[45vw] rounded-full bg-ink-700/20 blur-[120px] animate-[pulse-glow_10s_ease-in-out_infinite]" />
        </>
      )}
      {variant === 'dark' && (
        <>
          <div className="absolute -left-[10%] top-[10%] size-[55vw] rounded-full bg-aqua-700/40 blur-[120px]" />
          <div className="absolute -right-[10%] bottom-[10%] size-[55vw] rounded-full bg-ink-700/60 blur-[140px]" />
        </>
      )}
    </div>
  );
}
