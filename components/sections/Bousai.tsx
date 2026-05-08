import { Flame, Droplets, Siren } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import MagneticButton from '../ui/MagneticButton';
import GradientMesh from '../ui/GradientMesh';
import Spotlight from '../ui/Spotlight';

const FEATURES = [
  {
    icon: Flame,
    title: '消防製品',
    description: 'スプリンクラー周辺機器・連結送水管・補給水槽など。',
  },
  {
    icon: Droplets,
    title: '応急給水栓',
    description: '災害発生時に水道本管から直接給水できる仮設栓。',
  },
  {
    icon: Siren,
    title: '防災ライン',
    description: 'インフラの最後の砦として、長期備蓄に耐える信頼設計。',
  },
];

export default function Bousai() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 py-24 text-white md:py-36">
      <GradientMesh variant="dark" />
      <div className="grain-overlay" />

      <div className="relative container-x">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end">
          <SectionHeading
            kicker="Disaster Prevention"
            title={
              <>
                その瞬間に、<br />
                <span className="gradient-text-aqua">迷わず動く</span>製品。
              </>
            }
            description="災害発生時、機器の信頼性は人命の信頼性と等しい。70 年蓄積した精密技術で、最後の一点まで動く製品をつくります。"
            invert
          />
          <Reveal direction="left" delay={0.2}>
            <div className="lg:text-right">
              <MagneticButton
                href="/bousai"
                variant="ghost"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                防災製品を見る
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 0.1}>
                <Spotlight
                  className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-aqua-400/50"
                  size={400}
                >
                  <div className="relative">
                    <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-aqua-400/20 to-aqua-700/20 text-aqua-400">
                      <Icon className="size-5" strokeWidth={1.6} />
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-semibold">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{f.description}</p>
                  </div>
                </Spotlight>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
