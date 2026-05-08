import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import SpecRow from '../ui/SpecRow';
import BlueprintCorners from '../ui/BlueprintCorners';
import { cn } from '@/lib/utils';

export default function Strengths() {
  return (
    <section className="relative bg-paper py-28 md:py-40">
      <div className="container-x">
        <div className="grid gap-16 md:grid-cols-[1fr_auto] md:items-end">
          <SectionHeading
            index="02"
            kicker="What we stand on"
            title={
              <>
                技術と信頼が<br className="hidden sm:block" />
                半世紀の差を生む
              </>
            }
            description="独自の精密加工と全数検査、そして 70 年積み重ねた現場の判断基準。MVK の強さは、見えないところに重ねた誠実の総量にあります。"
          />
          <Reveal direction="left" delay={0.2}>
            <div className="hairline-l hairline-b hidden gap-6 px-6 pb-2 pt-1 font-mono text-[11px] text-ink-500 md:flex">
              <span>FIG.</span>
              <span>02 / 06</span>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-ink-200 bg-ink-200 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          <Card01Precision />
          <Card02ISO />
          <Card03Network />
          <Card04Health />
          <Card05Sustainability />
          <Card06Origin />
        </div>
      </div>
    </section>
  );
}

function CardShell({
  children,
  className,
  span,
}: {
  children: React.ReactNode;
  className?: string;
  span?: string;
}) {
  return (
    <div
      className={cn(
        'group relative bg-paper p-7 md:p-9 transition-colors duration-300 hover:bg-paper-warm',
        span,
        className
      )}
    >
      {children}
    </div>
  );
}

function CardLabel({ index, kicker }: { index: string; kicker: string }) {
  return (
    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">
      <span>{kicker}</span>
      <span className="tabular-nums">{index} / 06</span>
    </div>
  );
}

function Card01Precision() {
  return (
    <CardShell span="lg:col-span-2 lg:row-span-2">
      <CardLabel index="01" kicker="Precision Engineering" />

      <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        <div>
          <h3 className="font-display text-3xl font-semibold leading-[1.05] tracking-tight text-ink-900 md:text-4xl">
            ミクロン単位の精度で<br />
            確実に止める
          </h3>
          <p className="mt-5 max-w-md text-pretty text-[15px] leading-relaxed text-ink-500">
            5 軸 NC マシンによるシート面加工と、人の手による最終仕上げ。
            機械の正確さと熟練工の感性を組合せ、漏れない構造を毎日つくります。
          </p>

          <div className="mt-8 max-w-sm">
            <SpecRow label="Tolerance" value="±0.005" unit="mm" />
            <SpecRow label="Material" value="C3771 / SUS304" />
            <SpecRow label="Rated Press." value="1.0" unit="MPa" />
            <SpecRow label="Cycle Test" value="100,000" unit="回" />
          </div>

          <div className="mt-8 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
            <span className="size-1.5 bg-aqua-600" />
            Patent JP-7,124,XXX
          </div>
        </div>

        <ValveCutawaySVG />
      </div>
    </CardShell>
  );
}

function Card02ISO() {
  return (
    <CardShell span="lg:col-span-2">
      <CardLabel index="02" kicker="Quality Assurance" />
      <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <div className="font-display text-[6.5rem] leading-[0.85] font-semibold tracking-[-0.04em] text-ink-900">
            1995
          </div>
          <p className="mt-3 max-w-xs text-sm text-ink-500">
            ISO 9001 認証取得。30 年以上にわたり、国際基準で品質マネジメントを運用しています。
          </p>
        </div>
        <SealSVG />
      </div>
    </CardShell>
  );
}

function Card03Network() {
  return (
    <CardShell span="lg:col-span-2">
      <CardLabel index="03" kicker="Distribution" />
      <div className="mt-6 grid grid-cols-[1fr_auto] gap-6 items-start">
        <div>
          <h3 className="font-display text-2xl font-semibold leading-tight text-ink-900">
            47 都道府県へ<br />
            止めない流通網
          </h3>
          <p className="mt-3 max-w-xs text-sm text-ink-500">
            全国の代理店・問屋様と協働し、計画備蓄から緊急出荷まで応えます。
          </p>
          <div className="mt-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
            <span><span className="text-ink-900 font-medium tabular-nums">47</span> Prefectures</span>
            <span className="size-1 rounded-full bg-ink-300" />
            <span><span className="text-ink-900 font-medium tabular-nums">3</span> Hubs</span>
          </div>
        </div>
        <JapanMapSVG />
      </div>
    </CardShell>
  );
}

function Card04Health() {
  return (
    <CardShell>
      <CardLabel index="04" kicker="Health Mgmt." />
      <div className="mt-6">
        <h3 className="font-display text-xl font-semibold leading-snug text-ink-900">
          健康経営<br />優良法人 2026
        </h3>
        <p className="mt-3 text-[13px] leading-relaxed text-ink-500">
          人が健康でなければ、製品も健康になりえない。
        </p>
        <div className="mt-6 inline-flex items-center gap-2 border border-ink-200 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-700">
          Cert · 2024 → 2026
        </div>
      </div>
    </CardShell>
  );
}

function Card05Sustainability() {
  return (
    <CardShell>
      <CardLabel index="05" kicker="Sustainability" />
      <div className="mt-6">
        <div className="flex items-baseline gap-1">
          <span className="font-display text-6xl font-semibold tracking-[-0.04em] text-ink-900">−30</span>
          <span className="font-display text-3xl font-semibold text-ink-500">%</span>
        </div>
        <p className="mt-2 text-[13px] text-ink-500">節水バルブの流量削減（従来比）</p>
        <BarChartSVG className="mt-6" />
      </div>
    </CardShell>
  );
}

function Card06Origin() {
  return (
    <CardShell>
      <CardLabel index="06" kicker="Origin" />
      <div className="mt-6">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-500">
          33.7°N · 130.5°E
        </div>
        <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-ink-900">
          Made in<br />Koga, Fukuoka
        </h3>
        <p className="mt-3 text-[13px] leading-relaxed text-ink-500">
          九州の小さな工場から、世界水準の品質を発信し続けています。
        </p>
        <CompassSVG className="mt-6" />
      </div>
    </CardShell>
  );
}

function ValveCutawaySVG() {
  return (
    <div className="relative">
      <BlueprintCorners color="oklch(0.74 0.018 240)" />
      <svg viewBox="0 0 280 280" className="size-full text-ink-700" fill="none">
        <g stroke="currentColor" strokeWidth="1">
          {/* outer body */}
          <path d="M40 100 H100 V60 H180 V100 H240 V180 H180 V220 H100 V180 H40 Z" />
          {/* internal chamber */}
          <circle cx="140" cy="140" r="48" />
          {/* ball with hole */}
          <circle cx="140" cy="140" r="36" />
          <path d="M104 140 H176" strokeWidth="6" stroke="oklch(0.62 0.15 207)" />
          {/* stem */}
          <path d="M140 92 V60" strokeWidth="6" />
          <rect x="120" y="36" width="40" height="16" />
          <path d="M112 28 H168" />
          {/* dimension lines */}
          <g stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.6">
            <path d="M40 240 H240" />
            <path d="M40 235 V245 M240 235 V245" />
            <path d="M260 60 V220" />
            <path d="M255 60 H265 M255 220 H265" />
          </g>
        </g>
        <g
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="oklch(0.42 0.035 250)"
          letterSpacing="0.05em"
        >
          <text x="140" y="258" textAnchor="middle">200 mm</text>
          <text x="270" y="142" textAnchor="middle" transform="rotate(-90 270 142)">
            160 mm
          </text>
          <text x="48" y="76" letterSpacing="0.18em">FIG.A</text>
          <text x="206" y="194" letterSpacing="0.05em">∅ 36</text>
        </g>
      </svg>
    </div>
  );
}

function SealSVG() {
  return (
    <svg viewBox="0 0 120 120" className="size-28 text-ink-300" fill="none">
      <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 3" />
      <circle cx="60" cy="60" r="42" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="60" cy="60" r="34" stroke="currentColor" strokeWidth="0.5" />
      <text
        x="60" y="56"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="12"
        fontWeight="600"
        fill="oklch(0.22 0.05 258)"
        letterSpacing="0.1em"
      >ISO</text>
      <text
        x="60" y="72"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="8"
        fill="oklch(0.42 0.035 250)"
        letterSpacing="0.18em"
      >9001:2015</text>
      <path d="M60 14 V20 M60 100 V106 M14 60 H20 M100 60 H106"
        stroke="currentColor" strokeWidth="0.8" />
    </svg>
  );
}

function JapanMapSVG() {
  return (
    <svg viewBox="0 0 140 160" className="h-32 w-auto text-ink-300" fill="none">
      <g fill="currentColor">
        {[
          [22, 30], [28, 36], [40, 28], [48, 38], [58, 32],
          [70, 44], [80, 50], [90, 58], [100, 70], [108, 82],
          [60, 64], [72, 72], [84, 80], [44, 60], [52, 72],
          [36, 76], [50, 90], [64, 100], [78, 110], [38, 110],
          [50, 122], [62, 132], [76, 140],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="1.5" />
        ))}
      </g>
      {/* Fukuoka highlighted */}
      <g>
        <circle cx="38" cy="110" r="4" fill="oklch(0.62 0.15 207)" />
        <circle cx="38" cy="110" r="8" fill="none" stroke="oklch(0.62 0.15 207)" strokeWidth="0.5" />
      </g>
      <text
        x="48" y="113"
        fontFamily="var(--font-mono)"
        fontSize="7"
        fill="oklch(0.42 0.035 250)"
        letterSpacing="0.1em"
      >FUKUOKA</text>
    </svg>
  );
}

function BarChartSVG({ className }: { className?: string }) {
  const bars = [70, 60, 55, 48, 42, 40];
  return (
    <svg viewBox="0 0 120 50" className={cn('h-12 w-full', className)}>
      <line x1="0" y1="48" x2="120" y2="48" stroke="oklch(0.88 0.01 240)" strokeWidth="0.5" />
      {bars.map((h, i) => (
        <rect
          key={i}
          x={i * 20 + 4}
          y={48 - h * 0.55}
          width="12"
          height={h * 0.55}
          fill={i === bars.length - 1 ? 'oklch(0.62 0.15 207)' : 'oklch(0.88 0.01 240)'}
        />
      ))}
    </svg>
  );
}

function CompassSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={cn('size-16 text-ink-300', className)} fill="none">
      <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="40" cy="40" r="24" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 2" />
      <path d="M40 12 L43 40 L40 68 L37 40 Z" fill="oklch(0.62 0.15 207)" opacity="0.9" />
      <path d="M12 40 L40 37 L68 40 L40 43 Z" fill="oklch(0.42 0.035 250)" opacity="0.6" />
      <text
        x="40" y="9"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="6"
        fill="oklch(0.22 0.05 258)"
        letterSpacing="0.2em"
      >N</text>
    </svg>
  );
}
