import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: '技術・製造',
  description: 'MVK の精密加工・品質保証・研究開発体制をご紹介します。',
};

const STEPS = [
  { no: '01', title: '素材選定', text: '青銅・黄銅・ステンレスから、用途と環境に最適な素材を選定。' },
  { no: '02', title: '鍛造・鋳造', text: '高圧鍛造による緻密な結晶構造と、複雑形状の鋳造技術。' },
  { no: '03', title: '精密加工', text: '5 軸 NC マシンでミクロン単位の寸法を保証。' },
  { no: '04', title: '組立・検査', text: '熟練工とデジタル測定機の組合せで全数検査。' },
  { no: '05', title: '気密試験', text: '完成品ごとに加圧試験を実施。漏れゼロを保証。' },
  { no: '06', title: '出荷', text: 'トレーサビリティを保ったまま、全国に発送。' },
];

export default function TechPage() {
  return (
    <>
      <PageHero
        kicker="Technology"
        title={
          <>
            ミクロンの<br className="hidden sm:block" />
            <span className="gradient-text-aqua">精度</span>をつくる。
          </>
        }
        description="バルブの「止まる」「流れる」は、たった数ミクロンの寸法差に左右されます。MVK の製造現場では、人と機械の両方の感性で、その差を毎日確かめます。"
        variant="copper"
      />

      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading kicker="Process" title="6 ステップで完成する、信頼。" />
          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.no} delay={i * 0.06}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-ink-100 bg-white p-7 transition-all hover:border-ink-300 hover:shadow-soft">
                  <div className="font-display text-7xl font-semibold leading-none text-ink-100 transition-colors group-hover:text-aqua-300">
                    {s.no}
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-ink-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink-500 leading-relaxed">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-50/60 border-y border-ink-100 py-24 md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <SectionHeading
            kicker="R&D"
            title={<>研究開発で<br />30 年先を見る。</>}
            description="次世代の節水バルブ、IoT 対応スマート止水栓、リサイクル素材の活用など、バルブの未来は技術の積み重ねの先にあります。"
          />
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['節水バルブ', '従来比 -30% の流量設計'],
                ['IoT スマート止水', '漏水検知連動の自動止水機構'],
                ['再生素材', '廃材黄銅のリサイクル活用'],
                ['長寿命設計', '取替周期 2 倍の耐久構造'],
              ].map(([t, s]) => (
                <div key={t} className="rounded-2xl border border-ink-100 bg-white p-6">
                  <div className="font-display text-lg font-semibold text-ink-900">{t}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-aqua-600">{s}</div>
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
