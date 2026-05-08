import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import SpecRow from '@/components/ui/SpecRow';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: '防災・消防製品',
  description: '応急給水栓・消防スプリンクラー周辺機器など、災害時に確実に動く防災製品。',
};

const LINEUP = [
  {
    no: '01',
    code: 'EM-WATER',
    title: '応急給水栓',
    en: 'Emergency Water Tap',
    text: '災害発生時に水道本管から直接給水できる仮設栓。避難所・公園で「最後の一滴」を担保します。',
    specs: [
      { label: 'Capacity', value: '300', unit: 'L/min' },
      { label: 'Storage', value: '10', unit: 'years' },
      { label: 'Mount', value: 'Vault / Surface' },
    ],
  },
  {
    no: '02',
    code: 'FIRE-CONN',
    title: '連結送水管バルブ',
    en: 'Fire Service Valve',
    text: '消防車から建物へ水を送る要の弁。動かないことが許されない、信頼性最優先の設計。',
    specs: [
      { label: 'Press.', value: '1.6', unit: 'MPa' },
      { label: 'Cycles', value: '50,000', unit: '回' },
      { label: 'Cert.', value: 'JIS B 8410' },
    ],
  },
  {
    no: '03',
    code: 'SPRK-AUX',
    title: 'スプリンクラー周辺機器',
    en: 'Sprinkler Auxiliary',
    text: '初期消火を支える各種弁・継手。長期備蓄に耐える耐久設計を採用。',
    specs: [
      { label: 'Temp.', value: '0 → 60', unit: '°C' },
      { label: 'Press.', value: '1.0', unit: 'MPa' },
      { label: 'Cert.', value: '消防認定' },
    ],
  },
  {
    no: '04',
    code: 'BLDG-LINE',
    title: 'ビル防災ライン',
    en: 'High-Rise Line',
    text: '高層ビル向け補給水槽・呼水槽の制御部品。最後の一階まで水を届け切る。',
    specs: [
      { label: 'Height', value: '~100', unit: 'm' },
      { label: 'Standard', value: '消防認定' },
      { label: 'Series', value: 'BLDG-100' },
    ],
  },
];

const TESTS = [
  { code: 'T-01', label: '全数気密試験', sub: 'Full leak inspection before shipment' },
  { code: 'T-02', label: '10 年備蓄試験', sub: 'Long-term storage simulation' },
  { code: 'T-03', label: '耐震・耐衝撃試験', sub: 'Earthquake-grade impact test' },
  { code: 'T-04', label: '国家規格適合', sub: 'JIS / 消防認定 certification' },
];

export default function BousaiPage() {
  return (
    <>
      <PageHero
        index="C"
        kicker="Disaster Prevention"
        title={
          <>
            「その時」に<br className="hidden sm:block" />
            <span className="gradient-text-aqua">確実に動く</span>製品。
          </>
        }
        description="災害発生時、機器の信頼性は人命の信頼性と等しい。製品が動かなければ、消火も給水もできない。だから私たちは、防災製品を最も厳しい基準でつくります。"
        meta={[
          { label: 'Test', value: '気密 / 耐震 / 備蓄' },
          { label: 'Storage', value: '10 years rated' },
          { label: 'Cert.', value: 'JIS B 8410' },
        ]}
      />

      <section className="py-28 md:py-40">
        <div className="container-x">
          <SectionHeading kicker="Lineup" title="主要ラインアップ" />
          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-ink-200 bg-ink-200 md:grid-cols-2">
            {LINEUP.map((l) => (
              <Reveal key={l.no}>
                <div className="group relative h-full bg-paper p-8 transition-colors hover:bg-paper-warm md:p-10">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
                    <span>{l.code}</span>
                    <span className="tabular-nums text-ink-900">{l.no} / 04</span>
                  </div>
                  <h3 className="mt-12 font-display text-2xl font-semibold leading-tight text-ink-900 md:text-3xl">
                    {l.title}
                  </h3>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-aqua-600">
                    {l.en}
                  </p>
                  <p className="mt-5 max-w-md text-[14px] leading-relaxed text-ink-500">{l.text}</p>
                  <div className="mt-7 max-w-sm">
                    {l.specs.map((s) => (
                      <SpecRow key={s.label} {...s} />
                    ))}
                  </div>
                  <span
                    aria-hidden
                    className="absolute bottom-0 left-0 h-px w-0 bg-aqua-600 transition-all duration-500 group-hover:w-full"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-950 py-28 text-white md:py-40">
        <div className="container-x grid gap-16 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            kicker="Quality"
            title={<>災害は、<br />テストを許さない。</>}
            description="一度の出荷不良も、私たちにとっては「数千分の一」ではなく「現場の一回」。だからこそ、防災製品は全数検査・抜き取りに加えて、長期備蓄試験までを通過したものだけを世に出します。"
            invert
          />
          <Reveal>
            <div className="border border-white/15">
              {TESTS.map((t) => (
                <div
                  key={t.code}
                  className="grid grid-cols-[5rem_1fr_auto] items-center gap-6 border-b border-white/10 px-6 py-5 last:border-b-0"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">
                    [{t.code}]
                  </span>
                  <div>
                    <div className="text-[15px] font-medium">{t.label}</div>
                    <div className="mt-0.5 font-mono text-[11px] text-white/50">{t.sub}</div>
                  </div>
                  <span className="size-1.5 bg-aqua-400" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
