import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

const PILLARS = [
  {
    no: '01',
    metric: '−30%',
    title: '節水・省エネ',
    en: 'Water Saving',
    body: '従来比 30% の流量削減を実現する次世代バルブ。日々の水使用に、目立たないけれど効く貢献を。',
  },
  {
    no: '02',
    metric: '2026',
    title: '健康経営',
    en: 'Healthy Workplace',
    body: '「健康経営優良法人 2026」認定取得。製品品質と同じ尺度で、人と組織の健全さを守る。',
  },
  {
    no: '03',
    metric: '92%',
    title: '工場の循環設計',
    en: 'Circular Manufacturing',
    body: '加工屑黄銅と冷却水のリサイクル率を 90% 以上で運用。資源を、循環させ続けるものづくり。',
  },
];

export default function Sustainability() {
  return (
    <section className="relative bg-paper py-28 md:py-40">
      <div className="container-x">
        <div className="grid gap-16 md:grid-cols-[1fr_auto] md:items-end">
          <SectionHeading
            index="05"
            kicker="Sustainability"
            title={
              <>
                100 年企業へ<br />
                <span className="gradient-text-aqua">水と人</span>を守る
              </>
            }
            description="設立 70 年を節目に、私たちは次の 30 年で何を残すべきかを問い続けています。製品づくりだけでなく、人と地球の循環の中に、MVK の役割を再定義します。"
          />
          <Reveal direction="left" delay={0.2}>
            <div className="hairline-l hairline-b hidden gap-6 px-6 pb-2 pt-1 font-mono text-[11px] text-ink-500 md:flex">
              <span>FIG.</span>
              <span>05 / 06</span>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-ink-200 bg-ink-200 md:grid-cols-3 lg:mt-24">
          {PILLARS.map((p) => (
            <Reveal key={p.no}>
              <div className="group relative h-full bg-paper p-8 transition-colors duration-300 hover:bg-paper-warm md:p-10">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
                  <span>{p.en}</span>
                  <span className="tabular-nums text-ink-900">{p.no} / 03</span>
                </div>
                <div className="mt-8 font-display text-[clamp(3.5rem,7vw,6rem)] font-semibold leading-[0.9] tracking-[-0.04em] text-ink-900">
                  {p.metric}
                </div>
                <h3 className="mt-8 font-display text-xl font-semibold text-ink-900">
                  {p.title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-ink-500">{p.body}</p>
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
  );
}
