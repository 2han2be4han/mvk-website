import MagneticButton from '../ui/MagneticButton';
import Reveal from '../ui/Reveal';
import GradientMesh from '../ui/GradientMesh';

export default function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-ink-900 via-ink-800 to-aqua-700 py-28 text-white md:py-40">
      <GradientMesh variant="dark" className="opacity-60" />
      <div className="grain-overlay" />

      <div className="relative container-x text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-[0.25em] uppercase text-white/80">
            Get in touch
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[1.05] tracking-tight">
            次のインフラを、<br />
            <span className="gradient-text-aqua">一緒につくる。</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base text-white/70 md:text-lg">
            製品のお問い合わせ、共同開発のご相談、採用のご質問まで。
            <br />
            お気軽にご連絡ください。
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href="/contact" className="bg-white text-ink-900 hover:bg-ink-100">
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
    </section>
  );
}
