import MagneticButton from '../ui/MagneticButton';
import Reveal from '../ui/Reveal';
import Eyebrow from '../ui/Eyebrow';

export default function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 py-28 text-white md:py-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-bg opacity-[0.05]" />
      <div className="grain-overlay" />

      {/* Massive watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 select-none text-center font-display text-[28vw] font-semibold leading-none -translate-y-1/2 bg-gradient-to-b from-white/[0.06] to-white/0 bg-clip-text text-transparent"
      >
        MVK
      </div>

      <div className="relative container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow index="07" invert>Get in touch</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display text-[clamp(2.75rem,7vw,6.5rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
              次のインフラを<br />
              <span className="gradient-text-aqua">一緒につくる</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-pretty text-base text-white/65 md:text-lg">
              製品のお問い合わせ、共同開発のご相談、採用のご質問まで。
              <br className="hidden md:block" />
              担当より 2 営業日以内にご連絡いたします。
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton href="/contact" className="bg-white text-ink-900 hover:bg-paper">
                お問い合わせ
              </MagneticButton>
              <MagneticButton
                href="/recruit"
                variant="outline"
                className="border-white/30 text-white hover:border-white"
              >
                採用情報
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
