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
  { no: '01', code: 'MAT', title: '素材選定', text: '青銅・黄銅・ステンレスから、用途と環境に最適な素材を選定。' },
  { no: '02', code: 'FRG', title: '鍛造・鋳造', text: '高圧鍛造による緻密な結晶構造と、複雑形状の鋳造技術。' },
  { no: '03', code: 'NC', title: '精密加工', text: '5 軸 NC マシンでミクロン単位の寸法を保証。' },
  { no: '04', code: 'ASM', title: '組立・検査', text: '熟練工とデジタル測定機の組合せで全数検査。' },
  { no: '05', code: 'QC', title: '気密試験', text: '完成品ごとに加圧試験を実施。漏れゼロを保証。' },
  { no: '06', code: 'SHIP', title: '出荷', text: 'トレーサビリティを保ったまま、全国に発送。' },
];

const RND = [
  { code: 'R-01', t: '節水バルブ', s: '従来比 −30% の流量設計' },
  { code: 'R-02', t: 'IoT スマート止水', s: '漏水検知連動の自動止水機構' },
  { code: 'R-03', t: '再生素材', s: '廃材黄銅のリサイクル活用' },
  { code: 'R-04', t: '長寿命設計', s: '取替周期 2 倍の耐久構造' },
];

export default function TechPage() {
  return (
    <>
      <PageHero
        index="D"
        kicker="Technology"
        title={
          <>
            ミクロンの<br className="hidden sm:block" />
            <span className="gradient-text-aqua">精度</span>をつくる。
          </>
        }
        description="バルブの「止まる」「流れる」は、たった数ミクロンの寸法差に左右されます。MVK の製造現場では、人と機械の両方の感性で、その差を毎日確かめます。"
        meta={[
          { label: 'Tolerance', value: '±0.005 mm' },
          { label: 'Machine', value: '5-axis NC' },
          { label: 'QC', value: '全数検査' },
        ]}
      />

      <section className="py-28 md:py-40">
        <div className="container-x">
          <SectionHeading kicker="Process" title="6 ステップで完成する、信頼。" />
          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-ink-200 bg-ink-200 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((s) => (
              <Reveal key={s.no}>
                <div className="group relative h-full bg-paper p-8 transition-colors hover:bg-paper-warm md:p-10">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
                    <span>{s.code}</span>
                    <span className="tabular-nums text-ink-900">{s.no} / 06</span>
                  </div>
                  <div className="mt-10 font-display text-7xl font-semibold leading-none tabular-nums tracking-[-0.04em] text-ink-200 transition-colors duration-500 group-hover:text-aqua-500">
                    {s.no}
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-semibold text-ink-900">{s.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-500">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-28 hairline-t hairline-b md:py-40">
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <SectionHeading
            kicker="R&D"
            title={<>研究開発で<br />30 年先を見る。</>}
            description="次世代の節水バルブ、IoT 対応スマート止水栓、リサイクル素材の活用など、バルブの未来は技術の積み重ねの先にあります。"
          />
          <Reveal>
            <div className="grid grid-cols-1 gap-px overflow-hidden border border-ink-200 bg-ink-200 sm:grid-cols-2">
              {RND.map((r) => (
                <div key={r.code} className="bg-paper p-7">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
                    [{r.code}]
                  </div>
                  <div className="mt-6 font-display text-xl font-semibold text-ink-900">{r.t}</div>
                  <div className="mt-1 text-[13px] text-ink-500">{r.s}</div>
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
