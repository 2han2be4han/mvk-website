import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import MagneticButton from '@/components/ui/MagneticButton';
import TiltCard from '@/components/ui/TiltCard';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: '採用情報',
  description: 'MVK 前田バルブ工業の採用情報。あなたの手で、暮らしを支えませんか。',
};

const VALUES = [
  { title: '誠実', text: '人にも、製品にも、嘘をつかない。' },
  { title: '研鑽', text: '昨日より 1 ミクロン、自分を磨く。' },
  { title: '共生', text: 'ひとり勝ちより、長く続く強さを。' },
];

const POSITIONS = [
  { role: '機械設計エンジニア', type: '正社員', loc: '本社（古賀）' },
  { role: '生産技術／NC オペレーター', type: '正社員', loc: '本社（古賀）' },
  { role: '品質保証スタッフ', type: '正社員', loc: '本社（古賀）' },
  { role: '営業職（全国）', type: '正社員', loc: '本社／東京' },
  { role: '研究開発インターン', type: 'インターン', loc: '本社（古賀）' },
];

export default function RecruitPage() {
  return (
    <>
      <PageHero
        kicker="Careers"
        title={
          <>
            あなたの仕事は、<br className="hidden sm:block" />
            <span className="gradient-text-aqua">明日の蛇口</span>の信頼。
          </>
        }
        description="目立たないけれど、確かに人の暮らしに残る仕事。70 年磨いてきたものづくりを、あなたと次の世代へ繋いでいきたい。"
        variant="mixed"
      />

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <SectionHeading kicker="Values" title={<>3 つの<br />価値観。</>} />
          <div className="grid gap-5 sm:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <TiltCard className="rounded-3xl">
                  <div className="rounded-3xl border border-ink-100 bg-white p-7">
                    <div className="font-display text-5xl font-semibold gradient-text">
                      0{i + 1}
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-semibold text-ink-900">{v.title}</h3>
                    <p className="mt-2 text-sm text-ink-500">{v.text}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-50/60 border-y border-ink-100 py-24 md:py-32">
        <div className="container-x">
          <SectionHeading kicker="Open Positions" title="募集職種" />
          <div className="mt-12 divide-y divide-ink-100 border-y border-ink-100">
            {POSITIONS.map((p, i) => (
              <Reveal key={p.role} delay={i * 0.04}>
                <div className="grid grid-cols-[1fr_auto] items-center gap-4 py-5 sm:grid-cols-[1fr_auto_auto] sm:gap-8">
                  <span className="font-display text-lg font-medium text-ink-900 sm:text-xl">
                    {p.role}
                  </span>
                  <span className="rounded-full border border-ink-200 px-3 py-0.5 text-xs text-ink-600">
                    {p.type}
                  </span>
                  <span className="hidden text-sm text-ink-500 sm:inline">{p.loc}</span>
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
