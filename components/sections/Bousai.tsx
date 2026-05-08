import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import MagneticButton from '../ui/MagneticButton';
import SpecRow from '../ui/SpecRow';
import { cn } from '@/lib/utils';

const ITEMS = [
  {
    no: '01',
    code: 'EM-WATER',
    title: '応急給水栓',
    en: 'Emergency Water Tap',
    body: '水道本管から直接給水できる仮設栓。避難所・公園で「最後の一滴」を担保します。',
    specs: [
      { label: 'Capacity', value: '300', unit: 'L/min' },
      { label: 'Storage', value: '10', unit: 'years' },
    ],
  },
  {
    no: '02',
    code: 'FIRE-CONN',
    title: '連結送水管バルブ',
    en: 'Fire Service Valve',
    body: '消防車から建物へ水を送る要の弁。動かないことが許されない、信頼性最優先の設計。',
    specs: [
      { label: 'Press.', value: '1.6', unit: 'MPa' },
      { label: 'Cert.', value: 'JIS B 8410' },
    ],
  },
  {
    no: '03',
    code: 'SPRK-AUX',
    title: 'スプリンクラー周辺機器',
    en: 'Sprinkler Auxiliary',
    body: '初期消火を支える各種弁・継手。長期備蓄に耐える耐久設計を採用しています。',
    specs: [
      { label: 'Temp.', value: '0 → 60', unit: '°C' },
      { label: 'Cycles', value: '50,000', unit: '回' },
    ],
  },
  {
    no: '04',
    code: 'BLDG-LINE',
    title: 'ビル防災ライン',
    en: 'High-Rise Line',
    body: '高層ビル向け補給水槽・呼水槽の制御部品。最後の一階まで水を届け切る。',
    specs: [
      { label: 'Height', value: '~100', unit: 'm' },
      { label: 'Standard', value: '消防認定' },
    ],
  },
];

export default function Bousai() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 py-28 text-white md:py-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-bg opacity-[0.08]" />
      <div className="grain-overlay" />

      <div className="relative container-x">
        <div className="grid gap-16 md:grid-cols-[1fr_auto] md:items-end">
          <SectionHeading
            index="04"
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
            <div className="hidden gap-6 border-l border-b border-white/15 px-6 pb-2 pt-1 font-mono text-[11px] text-white/50 md:flex">
              <span>FIG.</span>
              <span>04 / 06</span>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {ITEMS.map((it) => (
            <Reveal key={it.no}>
              <div className="group relative h-full bg-ink-950 p-7 transition-colors duration-300 hover:bg-ink-900 md:p-8">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                  <span>{it.code}</span>
                  <span className="tabular-nums text-white">{it.no} / 04</span>
                </div>
                <h3 className="mt-10 font-display text-2xl font-semibold leading-tight tracking-tight md:text-[1.6rem]">
                  {it.title}
                </h3>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-aqua-400">
                  {it.en}
                </p>
                <p className="mt-5 text-[13px] leading-relaxed text-white/65">{it.body}</p>
                <div className="mt-6">
                  {it.specs.map((s) => (
                    <SpecRow key={s.label} {...s} invert />
                  ))}
                </div>
                <div
                  aria-hidden
                  className="absolute bottom-0 left-0 h-px w-0 bg-aqua-400 transition-all duration-500 group-hover:w-full"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <p className="max-w-md text-pretty text-[15px] text-white/60 leading-relaxed">
              全数気密試験・10 年備蓄試験・耐震耐衝撃試験を経た製品のみが、現場へ向かいます。
            </p>
            <MagneticButton
              href="/bousai"
              variant="ghost"
              className="bg-white/10 text-white border-white/20 hover:bg-white/15"
            >
              防災製品を見る
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
