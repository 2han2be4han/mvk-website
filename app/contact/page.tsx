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

const CHANNELS = [
  { icon: Mail, code: 'CH-01', label: 'Email', value: 'info@mvk.co.jp' },
  { icon: Phone, code: 'CH-02', label: 'Tel', value: '092-942-5331' },
  { icon: MapPin, code: 'CH-03', label: 'Address', value: '〒811-3133 福岡県古賀市青柳町 569-1' },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        index="F"
        kicker="Contact"
        title={
          <>
            一通の<br className="hidden sm:block" />
            <span className="gradient-text-aqua">メッセージ</span>から
          </>
        }
        description="製品・採用・取材・共同開発のお問い合わせを受け付けています。担当より 2 営業日以内にご連絡いたします。"
        meta={[
          { label: 'Response', value: '2 営業日以内' },
          { label: 'Tel', value: '092-942-5331' },
          { label: 'Hours', value: 'Mon–Fri 9:00–17:30' },
        ]}
      />

      <section className="py-28 md:py-40">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:items-start">
          <Reveal>
            <SectionHeading kicker="Channels" title={<>連絡先<br />窓口</>} />
            <div className="mt-12 border border-ink-200 bg-white">
              {CHANNELS.map(({ icon: Icon, code, label, value }) => (
                <div
                  key={code}
                  className="grid grid-cols-[5rem_2.5rem_1fr] items-center gap-4 border-b border-ink-100 px-5 py-5 last:border-b-0"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
                    [{code}]
                  </span>
                  <span className="inline-flex size-9 items-center justify-center border border-ink-200 text-ink-700">
                    <Icon className="size-3.5" strokeWidth={1.4} />
                  </span>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
                      {label}
                    </div>
                    <div className="mt-0.5 text-[14px] text-ink-900">{value}</div>
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
