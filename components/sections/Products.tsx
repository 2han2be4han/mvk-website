import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import SpecRow from '../ui/SpecRow';
import BlueprintCorners from '../ui/BlueprintCorners';
import { cn } from '@/lib/utils';

interface Item {
  code: string;
  no: string;
  en: string;
  title: string;
  body: string;
  href: string;
  specs: { label: string; value: string; unit?: string }[];
  art: React.ReactNode;
}

const ITEMS: Item[] = [
  {
    code: 'MVK-RV-01',
    no: '01',
    en: 'Residential Ball Valve',
    title: '住宅用ボールバルブ',
    body: '生活インフラの基本。シート面の精密研磨により、長年の開閉でも漏れない構造を実現しました。',
    href: '/products',
    specs: [
      { label: 'Bore', value: '∅ 13–25', unit: 'mm' },
      { label: 'Press.', value: '1.0', unit: 'MPa' },
      { label: 'Material', value: 'C3771 / SUS304' },
      { label: 'Cycle', value: '100,000', unit: '回' },
    ],
    art: <BallValveArt />,
  },
  {
    code: 'MVK-EJ-04',
    no: '02',
    en: 'Pipe Elbow Joint',
    title: '銅・ステンレス継手',
    body: '配管同士を確実につなぐ精密継手。耐熱・耐圧の信頼性を、住宅から産業ラインまで保証します。',
    href: '/products#joints',
    specs: [
      { label: 'Angle', value: '90 / 45 / Y', unit: '°' },
      { label: 'Ø Range', value: '15–50', unit: 'mm' },
      { label: 'Temp.', value: '−10 → 95', unit: '°C' },
      { label: 'Standard', value: 'JIS B2301' },
    ],
    art: <ElbowJointArt />,
  },
  {
    code: 'MVK-EW-12',
    no: '03',
    en: 'Emergency Water Tap',
    title: '応急給水栓',
    body: '災害発生時、水道本管から直接給水できる仮設栓。避難所・公園に設置され、最後の一滴を届けます。',
    href: '/bousai',
    specs: [
      { label: 'Capacity', value: '300', unit: 'L/min' },
      { label: 'Storage', value: '10', unit: 'years' },
      { label: 'Mount', value: 'Vault / Surface' },
      { label: 'Cert.', value: 'JWWA B 137' },
    ],
    art: <EmergencyTapArt />,
  },
  {
    code: 'MOLDEX-SP-22',
    no: '04',
    en: 'Workplace Safety',
    title: 'MOLDEX スパークプラグステーション',
    body: 'スパークプラグの清掃・点検を安全に行うための作業ステーション。労働現場の生産性と安全性を両立します。',
    href: '/products',
    specs: [
      { label: 'Voltage', value: 'AC 100', unit: 'V' },
      { label: 'Air Press.', value: '0.4–0.7', unit: 'MPa' },
      { label: 'Footprint', value: '420×320', unit: 'mm' },
      { label: 'Origin', value: 'Made in Japan' },
    ],
    art: <MoldexArt />,
  },
];

export default function Products() {
  return (
    <section className="relative bg-white py-28 md:py-40 hairline-t hairline-b">
      <div className="container-x">
        <div className="grid gap-16 md:grid-cols-[1fr_auto] md:items-end">
          <SectionHeading
            index="03"
            kicker="Catalog"
            title={
              <>
                暮らしの<span className="gradient-text-aqua">あらゆる水回り</span>に<br />
                MVK の精密が宿る
              </>
            }
            description="住宅用バルブから災害時の応急給水栓、労働安全用品まで。1,200 を超えるラインアップから 4 つの代表をご紹介します。"
          />
          <Reveal direction="left" delay={0.2}>
            <div className="hairline-l hairline-b hidden gap-6 px-6 pb-2 pt-1 font-mono text-[11px] text-ink-500 md:flex">
              <span>FIG.</span>
              <span>03 / 06</span>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 lg:mt-24">
          {ITEMS.map((it, i) => (
            <Reveal key={it.code} delay={i * 0.05}>
              <ProductRow item={it} reverse={i % 2 === 1} last={i === ITEMS.length - 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductRow({
  item,
  reverse,
  last,
}: {
  item: Item;
  reverse: boolean;
  last: boolean;
}) {
  return (
    <Link
      href={item.href}
      className={cn(
        'group relative grid gap-8 border-t border-ink-200 py-12 md:grid-cols-2 md:gap-16 md:py-20',
        last && 'border-b'
      )}
    >
      <div
        className={cn(
          'relative flex aspect-[5/4] items-center justify-center overflow-hidden bg-paper-warm',
          reverse ? 'md:order-2' : 'md:order-1'
        )}
      >
        <BlueprintCorners color="oklch(0.74 0.018 240)" />
        <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
          FIG. {item.no}
        </div>
        <div className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
          {item.code}
        </div>
        <div className="w-3/5 transition-transform duration-500 ease-out group-hover:scale-105">
          {item.art}
        </div>
      </div>

      <div className={cn('flex flex-col justify-between gap-8', reverse ? 'md:order-1' : 'md:order-2')}>
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-500">
            <span className="text-ink-900">[{item.no}]</span>
            <span className="mx-3 text-ink-300">/</span>
            <span>{item.en}</span>
          </div>
          <h3 className="mt-5 font-display text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink-900">
            {item.title}
          </h3>
          <p className="mt-5 max-w-md text-pretty text-[15px] leading-relaxed text-ink-500">
            {item.body}
          </p>
        </div>

        <div className="grid max-w-md gap-0">
          {item.specs.map((s) => (
            <SpecRow key={s.label} {...s} />
          ))}
        </div>

        <div className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-900">
          <span>View product</span>
          <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}

function BallValveArt() {
  return (
    <svg viewBox="0 0 280 220" className="w-full text-ink-700" fill="none">
      <g stroke="currentColor" strokeWidth="1">
        <path d="M30 100 H80 V70 H200 V100 H250 V150 H200 V180 H80 V150 H30 Z" />
        <circle cx="140" cy="125" r="38" />
        <circle cx="140" cy="125" r="28" />
        <path d="M112 125 H168" stroke="oklch(0.62 0.15 207)" strokeWidth="6" />
        <path d="M140 87 V60" strokeWidth="5" />
        <rect x="120" y="36" width="40" height="14" />
        <path d="M115 28 H165" />
        <g stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.5">
          <path d="M30 200 H250 M30 195 V205 M250 195 V205" />
          <path d="M268 70 V180 M263 70 H273 M263 180 H273" />
        </g>
      </g>
      <g
        fontFamily="var(--font-mono)"
        fontSize="8"
        fill="oklch(0.42 0.035 250)"
        letterSpacing="0.1em"
      >
        <text x="140" y="216" textAnchor="middle">220</text>
        <text x="278" y="125" textAnchor="middle" transform="rotate(-90 278 125)">110</text>
      </g>
    </svg>
  );
}

function ElbowJointArt() {
  return (
    <svg viewBox="0 0 260 220" className="w-full text-ink-700" fill="none">
      <g stroke="currentColor" strokeWidth="1">
        <path d="M30 110 H110 A30 30 0 0 1 140 140 V210" />
        <path d="M30 130 H110 A12 12 0 0 1 122 142 V210" />
        <path d="M122 210 H140" />
        <circle cx="30" cy="120" r="3" />
        <path d="M20 100 V140 M20 100 H40 M20 140 H40" />
        <path d="M120 200 H160 M120 220 H160 M160 200 V220" />
        <g stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.5">
          <path d="M30 60 H140 M30 55 V65 M140 55 V65" />
          <path d="M180 110 V210 M175 110 H185 M175 210 H185" />
          <path d="M110 100 A40 40 0 0 1 150 140" />
        </g>
      </g>
      <g
        fontFamily="var(--font-mono)"
        fontSize="8"
        fill="oklch(0.42 0.035 250)"
        letterSpacing="0.1em"
      >
        <text x="85" y="50" textAnchor="middle">L = 140</text>
        <text x="190" y="160" textAnchor="middle" transform="rotate(-90 190 160)">H = 100</text>
        <text x="118" y="78" fontSize="7">90°</text>
      </g>
    </svg>
  );
}

function EmergencyTapArt() {
  return (
    <svg viewBox="0 0 240 240" className="w-full text-ink-700" fill="none">
      <g stroke="currentColor" strokeWidth="1">
        <path d="M40 220 H200" strokeWidth="2" />
        <path d="M60 220 V160 H180 V220" />
        <path d="M70 160 V120 A50 50 0 0 1 170 120 V160" />
        <circle cx="120" cy="120" r="34" />
        <circle cx="120" cy="120" r="22" stroke="oklch(0.62 0.15 207)" />
        <path d="M120 86 V60 M105 60 H135" strokeWidth="2" />
        <circle cx="120" cy="50" r="8" fill="currentColor" />
        <path d="M86 120 H68 M152 120 H170" />
        <path d="M70 130 V140 H170 V130" />
      </g>
      <g
        fontFamily="var(--font-mono)"
        fontSize="8"
        fill="oklch(0.42 0.035 250)"
        letterSpacing="0.1em"
      >
        <text x="120" y="234" textAnchor="middle">GROUND LEVEL</text>
        <text x="92" y="120" textAnchor="end">∅ 68</text>
      </g>
    </svg>
  );
}

function MoldexArt() {
  return (
    <svg viewBox="0 0 260 220" className="w-full text-ink-700" fill="none">
      <g stroke="currentColor" strokeWidth="1">
        <rect x="40" y="40" width="180" height="160" rx="2" />
        <rect x="56" y="56" width="148" height="80" />
        <rect x="56" y="148" width="60" height="36" />
        <rect x="124" y="148" width="80" height="36" />
        <circle cx="86" cy="166" r="8" />
        <circle cx="86" cy="166" r="3" fill="oklch(0.62 0.15 207)" />
        <path d="M140 158 H190 M140 168 H180 M140 178 H190" strokeWidth="0.6" />
        <path d="M70 70 H190 M70 80 H160 M70 90 H180 M70 100 H140" strokeWidth="0.6" opacity="0.6" />
        <rect x="220" y="60" width="20" height="6" />
        <rect x="220" y="76" width="20" height="6" />
      </g>
      <g
        fontFamily="var(--font-mono)"
        fontSize="8"
        fill="oklch(0.42 0.035 250)"
        letterSpacing="0.1em"
      >
        <text x="48" y="36" textAnchor="start">MOLDEX</text>
        <text x="212" y="36" textAnchor="end">AC100V · 0.5MPa</text>
      </g>
    </svg>
  );
}
