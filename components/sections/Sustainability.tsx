import { Leaf, HeartHandshake, Recycle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

const PILLARS = [
  {
    icon: Leaf,
    title: '節水・省エネ製品',
    description: '使用水量と環境負荷を抑える、次世代バルブの研究開発。',
  },
  {
    icon: HeartHandshake,
    title: '健康経営',
    description: '優良法人 2026 認定。製品品質と同じ尺度で人を守る。',
  },
  {
    icon: Recycle,
    title: '工場の循環設計',
    description: '加工屑・冷却水のリサイクルを推進し、資源を循環させる。',
  },
];

export default function Sustainability() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <SectionHeading
            kicker="Sustainability"
            title={
              <>
                100 年企業へ、<br />
                <span className="gradient-text-aqua">水と人</span>を守る。
              </>
            }
            description="設立 70 年を節目に、私たちは次の 30 年で何を残すべきかを問い続けています。製品づくりだけでなく、人と地球の循環の中に、MVK の役割を再定義します。"
          />
        </div>

        <div className="grid gap-4">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-3xl border border-ink-100 bg-white p-6 transition-all duration-500 hover:border-leaf-500/40 hover:shadow-soft">
                  <div className="absolute -right-12 -top-12 size-40 rounded-full bg-leaf-500/10 blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                  <div className="relative flex items-start gap-5">
                    <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-leaf-500/20 to-aqua-500/10 text-leaf-500">
                      <Icon className="size-5" strokeWidth={1.6} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-ink-900">{p.title}</h3>
                      <p className="mt-1 text-sm text-ink-500">{p.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
