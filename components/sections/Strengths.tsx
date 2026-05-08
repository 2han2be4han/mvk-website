import { Cog, ShieldCheck, Network, Sparkles, Droplet, Award } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import TiltCard from '../ui/TiltCard';
import Reveal from '../ui/Reveal';
import { cn } from '@/lib/utils';

const ITEMS = [
  {
    icon: Cog,
    title: '独自の精密加工技術',
    description: '長年の研究と特許に裏打ちされた、ミクロン単位のバルブ・継手構造設計。',
    span: 'lg:col-span-2 lg:row-span-2',
    accent: 'aqua',
    big: true,
  },
  {
    icon: ShieldCheck,
    title: 'ISO品質保証',
    description: '全数検査と国際認証で支える揺るぎない信頼性。',
    span: '',
    accent: 'copper',
  },
  {
    icon: Network,
    title: '全国流通網',
    description: '47都道府県の配管インフラを支える供給体制。',
    span: '',
    accent: 'aqua',
  },
  {
    icon: Award,
    title: '健康経営優良法人2026',
    description: '人と組織の健全さを、製品品質と同じ尺度で守る。',
    span: 'lg:col-span-2',
    accent: 'leaf',
  },
  {
    icon: Droplet,
    title: 'サステナブル設計',
    description: '節水・省エネに寄与する次世代バルブ。',
    span: '',
    accent: 'aqua',
  },
  {
    icon: Sparkles,
    title: 'メイドイン福岡',
    description: '九州・古賀の工場から、世界水準の品質を発信。',
    span: '',
    accent: 'copper',
  },
];

const accentMap = {
  aqua: 'from-aqua-300/30 to-aqua-500/10 text-aqua-600',
  copper: 'from-copper-300/30 to-copper-500/10 text-copper-600',
  leaf: 'from-leaf-500/20 to-leaf-500/5 text-leaf-500',
} as const;

export default function Strengths() {
  return (
    <section className="relative py-24 md:py-36">
      <div className="container-x">
        <SectionHeading
          kicker="Our Strengths"
          title={
            <>
              技術と信頼が、<br className="hidden sm:block" />
              半世紀の差を生む。
            </>
          }
          description="MVKは、見えないところで暮らしを支える誇りを持って、独自の精密加工と全数検査を貫いてきました。"
          align="left"
        />

        <div className="mt-16 grid auto-rows-[14rem] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.06} className={cn('h-full', item.span)}>
                <TiltCard className="h-full rounded-3xl">
                  <div
                    className={cn(
                      'group relative h-full overflow-hidden rounded-3xl border border-ink-100 bg-white p-6 shadow-soft transition-shadow duration-500 hover:shadow-deep',
                      item.big && 'p-8'
                    )}
                  >
                    <div
                      className={cn(
                        'absolute -right-10 -top-10 size-48 rounded-full bg-gradient-to-br opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100',
                        accentMap[item.accent as keyof typeof accentMap]
                      )}
                    />
                    <div className="relative flex h-full flex-col justify-between gap-6">
                      <div
                        className={cn(
                          'inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br',
                          accentMap[item.accent as keyof typeof accentMap]
                        )}
                      >
                        <Icon className="size-5" strokeWidth={1.6} />
                      </div>
                      <div>
                        <h3
                          className={cn(
                            'font-display font-semibold text-ink-900',
                            item.big ? 'text-3xl md:text-4xl' : 'text-xl'
                          )}
                        >
                          {item.title}
                        </h3>
                        <p
                          className={cn(
                            'mt-2 text-pretty text-ink-500',
                            item.big ? 'text-base max-w-md' : 'text-sm'
                          )}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
