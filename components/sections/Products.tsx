'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import SectionHeading from '../ui/SectionHeading';

const CATEGORIES = [
  {
    no: '01',
    title: '住宅用バルブ',
    en: 'Residential Valves',
    description: '生活インフラの根幹を担う、確実な止水と耐久性。',
    href: '/products',
    art: <ValveArt />,
    color: 'from-aqua-400 to-aqua-700',
  },
  {
    no: '02',
    title: '管継手',
    en: 'Pipe Joints',
    description: '配管同士を確実につなぐ、精密設計の継手シリーズ。',
    href: '/products',
    art: <JointArt />,
    color: 'from-copper-400 to-copper-600',
  },
  {
    no: '03',
    title: '応急給水栓',
    en: 'Emergency Water',
    description: '災害時のライフラインを守る、給水のための備え。',
    href: '/bousai',
    art: <EmergencyArt />,
    color: 'from-ink-700 to-aqua-700',
  },
  {
    no: '04',
    title: 'MOLDEX',
    en: 'Workplace Safety',
    description: 'スパークプラグステーションなど、労働安全プロダクト。',
    href: '/products',
    art: <MoldexArt />,
    color: 'from-leaf-500 to-aqua-600',
  },
];

export default function Products() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section className="relative bg-ink-50/50 py-24 md:py-36">
      <div className="container-x">
        <SectionHeading
          kicker="Products"
          title={
            <>
              暮らしの<span className="gradient-text-aqua">あらゆる水回り</span>に、<br className="hidden sm:block" />
              MVK の精密が宿る。
            </>
          }
          description="住宅用バルブから災害時の応急給水栓まで。日々の安心を支えるラインアップ。"
        />
      </div>

      <div ref={containerRef} className="container-x mt-16 lg:mt-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <ProductIndicator progress={scrollYProgress} count={CATEGORIES.length} />
          </div>

          <div className="space-y-6">
            {CATEGORIES.map((cat, i) => (
              <Link
                href={cat.href}
                key={cat.no}
                className="group relative block overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-soft transition-all duration-500 hover:shadow-deep hover:-translate-y-1"
              >
                <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto]">
                  <div className="order-2 p-6 sm:order-1 sm:p-10">
                    <div className="flex items-center gap-3 text-xs font-medium tracking-[0.25em] text-ink-400 uppercase">
                      <span>{cat.no}</span>
                      <span className="h-px w-8 bg-ink-200" />
                      <span>{cat.en}</span>
                    </div>
                    <h3 className="mt-4 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
                      {cat.title}
                    </h3>
                    <p className="mt-3 max-w-md text-pretty text-ink-500">{cat.description}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink-900">
                      詳細を見る
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                  <div
                    className={`order-1 relative aspect-[16/9] w-full sm:order-2 sm:aspect-square sm:w-56 lg:w-80 bg-gradient-to-br ${cat.color}`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-white/90">
                      {cat.art}
                    </div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)] opacity-30" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductIndicator({
  progress,
  count,
}: {
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  count: number;
}) {
  const fill = useTransform(progress, [0, 1], ['0%', '100%']);
  return (
    <div className="hidden lg:block">
      <div className="rounded-2xl border border-ink-100 bg-white p-6">
        <div className="text-xs font-medium uppercase tracking-[0.3em] text-ink-400">
          Categories
        </div>
        <div className="mt-3 font-display text-4xl font-semibold text-ink-900">
          {count.toString().padStart(2, '0')}
        </div>
        <div className="mt-1 text-sm text-ink-500">主要製品カテゴリ</div>
        <div className="mt-6 h-1 overflow-hidden rounded-full bg-ink-100">
          <motion.div
            style={{ width: fill }}
            className="h-full bg-gradient-to-r from-aqua-500 to-copper-500"
          />
        </div>
      </div>
    </div>
  );
}

function ValveArt() {
  return (
    <svg viewBox="0 0 200 200" className="size-3/4" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="100" cy="100" r="60" />
      <circle cx="100" cy="100" r="36" opacity="0.5" />
      <path d="M100 40 v-20 M100 180 v-20 M40 100 h-20 M180 100 h-20" />
      <rect x="80" y="80" width="40" height="40" rx="4" />
      <circle cx="100" cy="100" r="6" fill="currentColor" />
    </svg>
  );
}
function JointArt() {
  return (
    <svg viewBox="0 0 200 200" className="size-3/4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M40 100 h40 a20 20 0 0 1 20 -20 v-40" />
      <path d="M100 60 h40 a20 20 0 0 1 20 20 v40" />
      <circle cx="40" cy="100" r="8" />
      <circle cx="100" cy="40" r="8" />
      <circle cx="160" cy="100" r="8" />
      <rect x="80" y="80" width="40" height="40" rx="6" opacity="0.4" />
    </svg>
  );
}
function EmergencyArt() {
  return (
    <svg viewBox="0 0 200 200" className="size-3/4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M60 160 h80 v-60 a40 40 0 0 0 -80 0 z" />
      <path d="M100 100 v-30 M85 85 h30" />
      <circle cx="100" cy="40" r="8" fill="currentColor" />
      <path d="M40 160 h120" strokeWidth="3" />
    </svg>
  );
}
function MoldexArt() {
  return (
    <svg viewBox="0 0 200 200" className="size-3/4" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="50" y="40" width="100" height="120" rx="14" />
      <path d="M70 80 h60 M70 100 h60 M70 120 h40" opacity="0.6" />
      <circle cx="100" cy="150" r="6" fill="currentColor" />
    </svg>
  );
}
