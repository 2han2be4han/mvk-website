'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[100svh] overflow-hidden bg-paper pt-28 md:pt-32"
    >
      {/* Editorial frame */}
      <div className="grain-overlay" />
      <div aria-hidden className="dot-bg pointer-events-none absolute inset-0 opacity-50" />

      {/* Wave SVG — decorative water lines */}
      <svg
        aria-hidden
        className="absolute inset-x-0 bottom-0 z-0 h-[55vh] w-full"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="hero-wave" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.62 0.15 207)" stopOpacity="0" />
            <stop offset="100%" stopColor="oklch(0.62 0.15 207)" stopOpacity="0.55" />
          </linearGradient>
        </defs>
        {[
          { d: 'M-50 320 Q280 220 580 300 T1100 300 T1700 300', w: 1.4, dur: 3 },
          { d: 'M-50 400 Q280 320 580 380 T1100 380 T1700 380', w: 1.1, dur: 3.6 },
          { d: 'M-50 480 Q280 400 580 460 T1100 460 T1700 460', w: 0.9, dur: 4 },
          { d: 'M-50 560 Q280 500 580 540 T1100 540 T1700 540', w: 0.7, dur: 4.4 },
        ].map((p, i) => (
          <motion.path
            key={i}
            d={p.d}
            fill="none"
            stroke="url(#hero-wave)"
            strokeWidth={p.w}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: p.dur, ease: 'easeInOut', delay: i * 0.15 }}
          />
        ))}
      </svg>

      {/* Top edge label */}
      <div className="container-x absolute inset-x-0 top-28 z-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500 md:top-32">
        <div className="flex items-center gap-3">
          <span className="size-1.5 bg-aqua-600" />
          <span>EST. 1956</span>
          <span className="text-ink-300">·</span>
          <span>Anniv. 70th</span>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <span>FIG. 01 / 06</span>
          <span className="text-ink-300">·</span>
          <span>HERO</span>
        </div>
      </div>

      <motion.div
        className="container-x relative z-10 flex min-h-[calc(100svh-7rem)] flex-col justify-center pb-20 pt-20 md:pt-28"
        style={{ y, opacity }}
      >
        <h1 className="font-display text-[clamp(3rem,10.5vw,11rem)] font-semibold leading-[0.92] tracking-[-0.045em] text-ink-900">
          <SplitLine text="暮らしと" delay={0.15} />
          <br />
          <span className="inline-block">
            <SplitLine text="水を" delay={0.45} />
            <span className="gradient-text-aqua">
              <SplitLine text="むすぶ" delay={0.65} />
            </span>
          </span>
        </h1>

        <div className="mt-12 grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16 md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-pretty text-[15px] leading-[1.7] text-ink-600 md:text-base"
          >
            住宅用バルブ・管継手から防災・消防製品まで。
            70 年培った精密技術で、日本の<span className="font-medium text-ink-900">生活インフラ</span>を、
            静かに、しかし揺るぎなく支え続けます。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="grid grid-cols-3 gap-6 border-t border-ink-200 pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500 md:gap-8"
          >
            <div>
              <div className="font-display text-2xl font-semibold tabular-nums tracking-tight text-ink-900 md:text-3xl">
                70<span className="text-aqua-600">+</span>
              </div>
              <div className="mt-1">Years</div>
            </div>
            <div>
              <div className="font-display text-2xl font-semibold tabular-nums tracking-tight text-ink-900 md:text-3xl">
                1,200<span className="text-aqua-600">+</span>
              </div>
              <div className="mt-1">Items</div>
            </div>
            <div>
              <div className="font-display text-2xl font-semibold tabular-nums tracking-tight text-ink-900 md:text-3xl">
                47
              </div>
              <div className="mt-1">Pref.</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4 }}
          className="mt-14 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="/products">製品を見る</MagneticButton>
          <MagneticButton href="/about" variant="ghost">
            会社案内
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 right-6 z-10 hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500 md:flex"
      >
        <span>scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="size-3" strokeWidth={1.4} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function SplitLine({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <motion.span
        className="inline-block"
        initial={{ y: '105%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.95, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}
      </motion.span>
    </span>
  );
}
