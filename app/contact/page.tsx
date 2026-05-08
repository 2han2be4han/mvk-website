import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: '製品・採用・取材など、MVK 前田バルブ工業へのお問い合わせはこちら。',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title={
          <>
            一通の<br className="hidden sm:block" />
            <span className="gradient-text-aqua">メッセージ</span>から。
          </>
        }
        description="製品・採用・取材・共同開発のお問い合わせを受け付けています。担当より 2 営業日以内にご連絡いたします。"
      />

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:items-start">
          <Reveal>
            <SectionHeading kicker="Channels" title={<>連絡先<br />窓口。</>} />
            <div className="mt-10 space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'info@mvk.co.jp' },
                { icon: Phone, label: 'Tel', value: '092-942-5331' },
                { icon: MapPin, label: 'Address', value: '〒811-3133 福岡県古賀市青柳町 569-1' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="inline-flex size-10 items-center justify-center rounded-2xl bg-aqua-500/10 text-aqua-600">
                    <Icon className="size-4" strokeWidth={1.6} />
                  </span>
                  <div>
                    <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-ink-400">
                      {label}
                    </div>
                    <div className="mt-1 text-ink-800">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
