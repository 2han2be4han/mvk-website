import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import Spotlight from '@/components/ui/Spotlight';
import CTA from '@/components/sections/CTA';
import { Flame, Droplets, ShieldAlert, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: '防災・消防製品',
  description: '応急給水栓・消防スプリンクラー周辺機器など、災害時に確実に動く防災製品。',
};

const LINEUP = [
  { icon: Droplets, title: '応急給水栓', text: '災害発生時に水道本管から直接給水できる仮設栓。避難所・公園に設置。' },
  { icon: Flame, title: '連結送水管バルブ', text: '消防車から建物内に水を送るための要となる、信頼性最優先の弁。' },
  { icon: ShieldAlert, title: 'スプリンクラー周辺機器', text: '初期消火を支える各種弁・継手。長期備蓄に耐える耐久設計。' },
  { icon: Building2, title: 'ビル防災ライン', text: '高層ビル向け補給水槽・呼水槽の制御部品を製造。' },
];

export default function BousaiPage() {
  return (
    <>
      <PageHero
        kicker="Disaster Prevention"
        title={
          <>
            「その時」に<br className="hidden sm:block" />
            <span className="gradient-text-aqua">確実に動く</span>製品。
          </>
        }
        description="災害発生時、機器の信頼性は人命の信頼性と等しい。製品が動かなければ、消火も給水もできない。だから私たちは、防災製品を最も厳しい基準でつくります。"
        variant="aqua"
      />

      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading kicker="Lineup" title="主要ラインアップ" />
          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {LINEUP.map((l, i) => {
              const Icon = l.icon;
              return (
                <Reveal key={l.title} delay={i * 0.06}>
                  <Spotlight
                    className="h-full rounded-3xl border border-ink-100 bg-white p-8 transition-colors hover:border-aqua-400/40"
                    color="oklch(0.66 0.15 205 / 0.18)"
                  >
                    <div className="relative">
                      <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-aqua-400/20 to-aqua-700/10 text-aqua-600">
                        <Icon className="size-5" strokeWidth={1.6} />
                      </div>
                      <h3 className="mt-6 font-display text-2xl font-semibold text-ink-900">
                        {l.title}
                      </h3>
                      <p className="mt-3 text-sm text-ink-500 leading-relaxed">{l.text}</p>
                    </div>
                  </Spotlight>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink-950 py-24 md:py-32 text-white border-y border-ink-100">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            kicker="Quality"
            title="災害は、テストを許さない。"
            description="一度の出荷不良も、私たちにとっては「数千分の一」ではなく「現場の一回」。だからこそ、防災製品は全数検査・抜き取りに加えて、長期備蓄試験までを通過したものだけを世に出します。"
            invert
          />
          <Reveal>
            <div className="space-y-3">
              {[
                ['全数気密試験', '出荷前の漏れチェック'],
                ['10 年備蓄試験', '長期保管後の動作検証'],
                ['耐震・耐衝撃試験', '災害時の物理的負荷耐性'],
                ['国家規格適合', 'JIS / 消防認定取得'],
              ].map(([t, s]) => (
                <div
                  key={t}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <span className="font-medium">{t}</span>
                  <span className="text-xs uppercase tracking-wider text-white/50">{s}</span>
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
