import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import MagneticButton from '@/components/ui/MagneticButton';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: '採用情報',
  description: 'MVK 前田バルブ工業の採用情報。あなたの手で、暮らしを支えませんか。',
};

const VALUES = [
  { no: '01', en: 'Integrity', title: '誠実', text: '人にも、製品にも、嘘をつかない。' },
  { no: '02', en: 'Refinement', title: '研鑽', text: '昨日より 1 ミクロン、自分を磨く。' },
  { no: '03', en: 'Coexistence', title: '共生', text: 'ひとり勝ちより、長く続く強さを。' },
];

const POSITIONS = [
  { code: 'ENG-01', role: '機械設計エンジニア', type: '正社員', loc: '本社（古賀）' },
  { code: 'ENG-02', role: '生産技術 / NC オペレーター', type: '正社員', loc: '本社（古賀）' },
  { code: 'QC-01', role: '品質保証スタッフ', type: '正社員', loc: '本社（古賀）' },
  { code: 'SALE-01', role: '営業職（全国）', type: '正社員', loc: '本社 / 東京' },
  { code: 'INT-01', role: '研究開発インターン', type: 'インターン', loc: '本社（古賀）' },
];

export default function RecruitPage() {
  return (
    <>
      <PageHero
        index="E"
        kicker="Careers"
        title={
          <>
            あなたの仕事は<br className="hidden sm:block" />
            <span className="gradient-text-aqua">明日の蛇口</span>の信頼
          </>
        }
        description="目立たないけれど、確かに人の暮らしに残る仕事。70 年磨いてきたものづくりを、あなたと次の世代へ繋いでいきたい。"
        meta={[
          { label: 'Open', value: '5 positions' },
          { label: 'Location', value: 'Koga · Tokyo' },
          { label: 'Type', value: '正社員 / インターン' },
        ]}
      />

      <section className="py-28 md:py-40">
        <div className="container-x">
          <SectionHeading kicker="Values" title="3 つの価値観" />
          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-ink-200 bg-ink-200 md:grid-cols-3">
            {VALUES.map((v) => (
              <Reveal key={v.no}>
                <div className="group relative h-full bg-paper p-8 transition-colors hover:bg-paper-warm md:p-10">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
                    <span>{v.en}</span>
                    <span className="tabular-nums text-ink-900">{v.no} / 03</span>
                  </div>
                  <div className="mt-12 font-display text-[clamp(4rem,8vw,7rem)] font-semibold leading-[0.85] tracking-[-0.04em] gradient-text">
                    {v.no}
                  </div>
                  <h3 className="mt-10 font-display text-3xl font-semibold text-ink-900">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-500">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-28 hairline-t hairline-b md:py-40">
        <div className="container-x">
          <SectionHeading kicker="Open Positions" title="募集職種" />
          <div className="mt-12 border border-ink-200 bg-white">
            {POSITIONS.map((p) => (
              <Reveal key={p.code}>
                <div className="grid grid-cols-[6rem_1fr_auto] items-center gap-4 border-b border-ink-100 px-5 py-5 last:border-b-0 sm:grid-cols-[6rem_1fr_auto_8rem] sm:gap-8 sm:px-7">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-500">
                    [{p.code}]
                  </span>
                  <span className="font-display text-lg font-medium text-ink-900 sm:text-xl">
                    {p.role}
                  </span>
                  <span className="border border-ink-200 px-3 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-700">
                    {p.type}
                  </span>
                  <span className="hidden font-mono text-[12px] text-ink-500 sm:inline">
                    {p.loc}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-12">
              <MagneticButton href="/contact">エントリーする</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
