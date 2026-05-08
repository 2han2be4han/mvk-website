import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import CTA from '@/components/sections/CTA';
import { ArrowUpRight, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: '製品情報',
  description: '住宅用バルブ・管継手・MOLDEX 労働安全用品など、MVK の製品ラインアップ。',
};

const CATEGORIES = [
  { code: 'RV', no: '01', en: 'Residential Valves', title: '住宅用バルブ', text: '止水栓・ボール弁・ゲートバルブ。生活インフラの基本。', items: 240 },
  { code: 'EJ', no: '02', en: 'Pipe Joints', title: '管継手', text: '銅・ステンレス・樹脂継手の精密ライン。', items: 380 },
  { code: 'EW', no: '03', en: 'Emergency Tap', title: '応急給水栓', text: '災害時の給水ライフラインを支える仮設栓。', items: 18 },
  { code: 'MX', no: '04', en: 'MOLDEX Series', title: 'MOLDEX 労働安全', text: 'スパークプラグステーション他、安全用品。', items: 32 },
  { code: 'FP', no: '05', en: 'Fire Protection', title: '消防製品', text: 'スプリンクラー周辺機器・連結送水管。', items: 110 },
  { code: 'OEM', no: '06', en: 'Custom OEM', title: 'OEM・特注', text: '貴社仕様に合わせた特注品の設計・製造。', items: '∞' },
];

const DOWNLOADS = [
  { code: 'CT-01', t: '製品総合カタログ 2026', sub: 'PDF · 24 MB · 178p' },
  { code: 'PR-26', t: '価格表 2026.04 改訂版', sub: 'PDF · 6 MB · 64p' },
  { code: 'CAD-A', t: 'CAD データセット (A)', sub: 'DXF / DWG · 18 MB' },
  { code: 'IM-01', t: '取付・施工マニュアル', sub: 'PDF · 12 MB · 96p' },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        index="B"
        kicker="Products"
        title={
          <>
            水回りの<br className="hidden sm:block" />
            <span className="gradient-text-aqua">あらゆる役割</span>に
          </>
        }
        description="住宅から災害現場、産業ラインまで。MVK は 1,200 を超える製品で、現場ごとの「確実」をつくります。"
        meta={[
          { label: 'Lineup', value: '1,200+ items' },
          { label: 'Standard', value: 'JIS · 消防認定' },
          { label: 'Cycles', value: '100,000 tested' },
        ]}
      />

      <section className="py-28 md:py-40">
        <div className="container-x">
          <SectionHeading kicker="Categories" title="製品カテゴリ" />

          <div
            className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-ink-200 bg-ink-200 sm:grid-cols-2 lg:grid-cols-3"
            id="joints"
          >
            {CATEGORIES.map((c) => (
              <Reveal key={c.code}>
                <div className="group relative flex h-full flex-col bg-paper p-8 transition-colors hover:bg-paper-warm md:p-10">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
                    <span>{c.en}</span>
                    <span className="tabular-nums text-ink-900">{c.no} / 06</span>
                  </div>

                  <div className="mt-12 flex items-baseline gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-500">
                      MVK-{c.code}
                    </span>
                    <span className="size-1 rounded-full bg-ink-300" />
                    <span className="font-mono text-[11px] tabular-nums text-ink-500">
                      {c.items} items
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-ink-900 md:text-[1.7rem]">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-500">{c.text}</p>

                  <div className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-700 transition-colors group-hover:text-ink-900">
                    Browse
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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

      <section className="bg-paper py-28 hairline-t hairline-b md:py-40">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <SectionHeading
            kicker="Downloads"
            title={<>カタログ /<br />CAD データ</>}
            description="設計者・施工管理者向けに、最新の製品仕様書と CAD データを公開しています。"
          />
          <Reveal>
            <div className="overflow-hidden border border-ink-200 bg-white">
              {DOWNLOADS.map((d) => (
                <a
                  key={d.code}
                  href="#"
                  className="group grid grid-cols-[5rem_1fr_auto] items-center gap-6 border-b border-ink-100 px-5 py-5 last:border-b-0 hover:bg-paper-warm sm:px-7"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-500">
                    [{d.code}]
                  </span>
                  <div>
                    <div className="text-[15px] font-medium text-ink-900">{d.t}</div>
                    <div className="mt-0.5 font-mono text-[11px] tabular-nums text-ink-500">
                      {d.sub}
                    </div>
                  </div>
                  <span className="inline-flex size-9 items-center justify-center border border-ink-200 text-ink-700 transition-all group-hover:border-ink-900 group-hover:bg-ink-900 group-hover:text-white">
                    <Download className="size-3.5" strokeWidth={1.4} />
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
