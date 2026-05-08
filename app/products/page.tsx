import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import TiltCard from '@/components/ui/TiltCard';
import CTA from '@/components/sections/CTA';
import { Droplet, GitBranch, Sparkles, Wrench, Zap, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: '製品情報',
  description: '住宅用バルブ・管継手・MOLDEX 労働安全用品など、MVK の製品ラインアップ。',
};

const CATEGORIES = [
  { icon: Droplet, title: '住宅用バルブ', en: 'Residential Valves', text: '止水栓、ボール弁、ゲートバルブ。生活インフラの基本。', color: 'from-aqua-400/20 to-aqua-700/10', accent: 'text-aqua-600' },
  { icon: GitBranch, title: '管継手', en: 'Pipe Joints', text: '銅・ステンレス・樹脂継手の精密ライン。', color: 'from-copper-400/20 to-copper-600/10', accent: 'text-copper-600' },
  { icon: Wrench, title: '応急給水栓', en: 'Emergency Tap', text: '災害時の給水ライフラインを支える仮設栓。', color: 'from-ink-400/20 to-aqua-700/10', accent: 'text-ink-700' },
  { icon: Zap, title: 'MOLDEX', en: 'Workplace Safety', text: 'スパークプラグステーション他、労働安全用品。', color: 'from-leaf-500/20 to-aqua-500/10', accent: 'text-leaf-500' },
  { icon: Layers, title: '消防製品', en: 'Fire Protection', text: 'スプリンクラー周辺機器・連結送水管。', color: 'from-ink-500/20 to-copper-400/10', accent: 'text-ink-700' },
  { icon: Sparkles, title: 'OEM・特注', en: 'Custom', text: '貴社仕様に合わせた特注品の設計・製造。', color: 'from-aqua-300/20 to-copper-300/10', accent: 'text-aqua-600' },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        kicker="Products"
        title={
          <>
            水回りの<br className="hidden sm:block" />
            <span className="gradient-text-aqua">あらゆる役割</span>に。
          </>
        }
        description="住宅から災害現場、産業ラインまで。MVK は 1,200 を超える製品で、現場ごとの「確実」をつくります。"
      />

      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading kicker="Categories" title="製品カテゴリ" />

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3" id="joints">
            {CATEGORIES.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.title} delay={i * 0.06}>
                  <TiltCard className="h-full rounded-3xl">
                    <div className="group relative h-full overflow-hidden rounded-3xl border border-ink-100 bg-white p-7 transition-shadow duration-500 hover:shadow-deep">
                      <div className={`absolute -right-10 -top-10 size-40 rounded-full bg-gradient-to-br ${c.color} blur-2xl`} />
                      <div className="relative">
                        <div className={`inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br ${c.color} ${c.accent}`}>
                          <Icon className="size-5" strokeWidth={1.6} />
                        </div>
                        <div className="mt-6 text-[10px] font-medium uppercase tracking-[0.25em] text-ink-400">
                          {c.en}
                        </div>
                        <h3 className="mt-1 font-display text-2xl font-semibold text-ink-900">
                          {c.title}
                        </h3>
                        <p className="mt-3 text-sm text-ink-500">{c.text}</p>
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink-50/60 py-24 md:py-32 border-y border-ink-100">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <SectionHeading
            kicker="Catalog"
            title={<>カタログ・<br />CAD データ。</>}
            description="設計者・施工管理者向けに、最新の製品仕様書と CAD データを公開しています。"
          />
          <Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { t: '製品総合カタログ 2026', sub: 'PDF / 24MB' },
                { t: '価格表 2026.04', sub: 'PDF / 6MB' },
                { t: 'CAD データセット', sub: 'DXF / DWG' },
                { t: '取付・施工マニュアル', sub: 'PDF / 12MB' },
              ].map((c) => (
                <div
                  key={c.t}
                  className="group flex items-center justify-between rounded-2xl border border-ink-100 bg-white p-5 transition-all hover:border-ink-300 hover:shadow-soft"
                >
                  <div>
                    <div className="text-sm font-medium text-ink-900">{c.t}</div>
                    <div className="mt-0.5 text-xs text-ink-500">{c.sub}</div>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-aqua-600 transition-transform group-hover:translate-x-0.5">
                    DL ↗
                  </span>
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
