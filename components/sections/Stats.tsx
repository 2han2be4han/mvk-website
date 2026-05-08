import CountUp from '../ui/CountUp';
import Reveal from '../ui/Reveal';

const STATS = [
  { value: 70, suffix: '+', label: '創業からの歳月', sub: 'YEARS OF TRUST' },
  { value: 1200, suffix: '+', label: '取扱製品アイテム数', sub: 'PRODUCT ITEMS' },
  { value: 47, suffix: '都道府県', label: '全国流通ネットワーク', sub: 'NATIONWIDE' },
  { value: 99.8, suffix: '%', decimals: 1, label: '出荷品質適合率', sub: 'QC PASS RATE' },
];

export default function Stats() {
  return (
    <section className="relative isolate border-y border-ink-100 bg-white/60 py-16 md:py-24">
      <div className="container-x">
        <div className="grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="group relative">
                <div className="font-display text-5xl font-semibold tracking-tight text-ink-900 md:text-6xl lg:text-7xl">
                  <CountUp
                    to={s.value}
                    suffix={s.suffix}
                    decimals={s.decimals ?? 0}
                    className="bg-gradient-to-br from-ink-900 to-ink-600 bg-clip-text text-transparent"
                  />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="h-px w-8 bg-aqua-500" />
                  <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-aqua-600">
                    {s.sub}
                  </span>
                </div>
                <p className="mt-2 text-sm text-ink-500">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
