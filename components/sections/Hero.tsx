'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import GradientMesh from '../ui/GradientMesh';
import MagneticButton from '../ui/MagneticButton';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-ink-50 via-white to-aqua-300/20 pt-32 pb-20 md:pt-40 md:pb-32"
    >
      <GradientMesh variant="aqua" className="opacity-90" />

      <motion.svg
        aria-hidden
        className="absolute inset-0 -z-10 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        style={{ scale }}
      >
        <defs>
          <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.66 0.15 205)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="oklch(0.66 0.13 47)" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <motion.path
          d="M-50,500 Q300,400 600,500 T1200,500 T1800,500"
          fill="none"
          stroke="url(#waveGrad)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: 'easeInOut' }}
        />
        <motion.path
          d="M-50,600 Q300,520 600,600 T1200,600 T1800,600"
          fill="none"
          stroke="url(#waveGrad)"
          strokeWidth="1.5"
          opacity="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3.5, ease: 'easeInOut', delay: 0.3 }}
        />
        <motion.path
          d="M-50,700 Q300,620 600,700 T1200,700 T1800,700"
          fill="none"
          stroke="url(#waveGrad)"
          strokeWidth="1"
          opacity="0.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, ease: 'easeInOut', delay: 0.6 }}
        />
      </motion.svg>

      <motion.div
        className="container-x relative z-10"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/70 px-4 py-1.5 backdrop-blur"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aqua-500 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-aqua-500" />
          </span>
          <span className="text-xs font-medium tracking-wider text-ink-700">
            EST. 1956 — 設立 70 周年
          </span>
        </motion.div>

        <h1 className="font-display text-[clamp(3rem,9vw,9rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-ink-900">
          <SplitLine text="暮らしと、" delay={0.2} />
          <br />
          <span className="inline-block">
            <SplitLine text="水を" delay={0.5} />
            <span className="gradient-text-aqua">
              <SplitLine text="むすぶ。" delay={0.7} />
            </span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-xl text-pretty text-base leading-relaxed text-ink-500 md:text-lg"
        >
          住宅用バルブ・管継手から防災・消防製品まで。
          <br />
          70 年培った精密技術で、日本の<span className="font-semibold text-ink-900">生活インフラ</span>を
          静かに、しかし揺るぎなく支え続けます。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="/products">製品を見る</MagneticButton>
          <MagneticButton href="/about" variant="ghost">
            会社案内
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-500"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="size-4" strokeWidth={1.5} />
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
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}
      </motion.span>
    </span>
  );
}
