import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import CountUp from '@/components/ui/CountUp';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: '会社案内',
  description: '70年の歴史と未来へのコミットメント。MVK 前田バルブ工業の会社案内ページ。',
};

const HISTORY = [
  { year: '1956', title: '創業', text: '福岡県古賀市にてバルブ製造業を開始。' },
  { year: '1972', title: '工場拡張', text: '生産体制を強化し、全国流通を開始。' },
  { year: '1995', title: 'ISO9001 取得', text: '国際品質マネジメントシステムを導入。' },
  { year: '2010', title: '防災製品ライン', text: '応急給水栓・消防製品の本格展開。' },
  { year: '2020', title: 'MOLDEX 展開', text: '労働安全用品ブランドの市場投入。' },
  { year: '2026', title: '70 周年', text: '健康経営優良法人 2026 認定。次の 30 年へ。' },
];

const COMPANY: [string, string][] = [
  ['社名', 'MVK 前田バルブ工業株式会社 / MAEDA VALVE INDUSTRIES, LTD.'],
  ['設立', '1956 年'],
  ['本社', '〒811-3133 福岡県古賀市青柳町 569-1'],
  ['事業内容', '住宅用バルブ・管継手・防災消防製品・労働安全用品の製造販売'],
  ['認定', 'ISO9001 / 健康経営優良法人 2026'],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        index="A"
        kicker="About"
        title={
          <>
            70 年、暮らしの<br className="hidden sm:block" />
            背中側で支え続ける。
          </>
        }
        description="バルブと管継手は、決して目に触れない。けれどもそれが止まれば、街は止まる。だから私たちは、誰よりも厳しく自分たちを見続けてきました。"
        meta={[
          { label: 'Founded', value: '1956' },
          { label: 'HQ', value: 'Koga, Fukuoka' },
          { label: 'Cert.', value: 'ISO 9001 / 健康経営 2026' },
        ]}
      />

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <SectionHeading
            kicker="Mission"
            title={<>水を、確かに。<br />暮らしを、揺るぎなく。</>}
          />
          <Reveal>
            <div className="space-y-6 text-pretty text-ink-700 leading-relaxed">
              <p>
                私たち MVK は、住宅・公共インフラ・防災のあらゆる現場で「水を確実に流す／止める」ためのバルブと管継手をつくり続けてきました。
              </p>
              <p>
                目立つ製品ではないかもしれません。でも、その小さな金属部品の信頼性が、家族の朝のシャワーを守り、地震の夜の給水を支え、ビルの火災時に最後の一滴を届けます。
              </p>
              <p>
                70 年磨いた精密技術と、3 世代にわたる信頼を、これからの暮らしと地球の循環の中に繋いでいきます。
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="history" className="bg-ink-50/60 py-24 md:py-32 border-y border-ink-100">
        <div className="container-x">
          <SectionHeading kicker="History" title="MVK の歩み" />
          <div className="mt-16 relative">
            <div
              aria-hidden
              className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-aqua-500/0 via-aqua-500/50 to-aqua-500/0 md:left-1/2"
            />
            <ul className="space-y-12">
              {HISTORY.map((h, i) => (
                <Reveal key={h.year} delay={i * 0.05}>
                  <li className="relative grid gap-4 md:grid-cols-2 md:gap-12">
                    <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                      <div className="font-display text-5xl font-semibold text-ink-900">{h.year}</div>
                      <div className="mt-2 text-sm font-medium uppercase tracking-[0.25em] text-aqua-600">
                        {h.title}
                      </div>
                    </div>
                    <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pl-12' : 'md:order-1 md:text-right md:pr-12'}`}>
                      <p className="max-w-md text-ink-600 md:inline-block">{h.text}</p>
                    </div>
                    <span
                      aria-hidden
                      className="absolute left-4 top-2 size-3 -translate-x-1/2 rounded-full border-2 border-white bg-aqua-500 md:left-1/2"
                    />
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-12 md:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading kicker="Numbers" title={<>数字で見る<br />MVK</>} />
            <div className="mt-12 grid grid-cols-2 gap-8">
              {[
                { v: 70, s: '+', l: '創業からの年月' },
                { v: 1200, s: '+', l: '製品アイテム数' },
                { v: 47, s: '都道府県', l: '流通カバー' },
                { v: 99.8, s: '%', d: 1, l: '出荷品質適合率' },
              ].map((it) => (
                <div key={it.l}>
                  <div className="font-display text-4xl font-semibold text-ink-900 md:text-5xl">
                    <CountUp to={it.v} suffix={it.s} decimals={it.d ?? 0} />
                  </div>
                  <p className="mt-2 text-sm text-ink-500">{it.l}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading kicker="Company" title="会社概要" />
            <dl className="mt-12 divide-y divide-ink-100 border-y border-ink-100">
              {COMPANY.map(([k, v]) => (
                <div
                  key={k}
                  className="grid grid-cols-[8rem_1fr] gap-4 py-4 text-sm md:grid-cols-[10rem_1fr]"
                >
                  <dt className="font-medium uppercase tracking-wider text-ink-500 text-xs">{k}</dt>
                  <dd className="text-ink-800">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
