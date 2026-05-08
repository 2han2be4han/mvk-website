import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import SectionHeading from '../ui/SectionHeading';
import Marquee from '../ui/Marquee';
import Reveal from '../ui/Reveal';

const NEWS = [
  { date: '2026.03.30', tag: 'CSR', title: '設立70周年記念 愛・地球博記念公園にて植樹を実施しました' },
  { date: '2026.03.18', tag: 'Award', title: '「健康経営優良法人 2026」に認定されました' },
  { date: '2026.02.02', tag: 'Product', title: '2026年4月改訂版 価格表を発刊しました' },
  { date: '2025.10.29', tag: 'Notice', title: '一部製品の定価および販売価格改定のご案内' },
  { date: '2025.06.20', tag: 'IR', title: '代表取締役社長交代のお知らせ' },
];

const KEYWORDS = [
  '70TH ANNIVERSARY', '健康経営優良法人', 'SDGs', 'JIS B 2301',
  'MOLDEX', '応急給水栓', 'MADE IN FUKUOKA', 'CARBON NEUTRAL',
];

export default function News() {
  return (
    <section className="bg-white py-28 hairline-t hairline-b md:py-40">
      <div className="container-x">
        <div className="grid gap-16 md:grid-cols-[1fr_auto] md:items-end">
          <SectionHeading
            index="06"
            kicker="Newsroom"
            title={<>MVK の<br className="sm:hidden" />最新の動き。</>}
          />
          <Reveal>
            <Link
              href="#"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-700 hover:text-ink-900"
            >
              View all
              <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 divide-y divide-ink-200 border-y border-ink-200">
          {NEWS.map((n, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <Link
                href="#"
                className="group flex flex-col gap-2 py-6 sm:grid sm:grid-cols-[7rem_5rem_1fr_auto] sm:items-center sm:gap-8"
              >
                <span className="font-mono text-xs tabular-nums text-ink-500">{n.date}</span>
                <span className="inline-flex w-fit items-center justify-center border border-ink-200 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-700">
                  {n.tag}
                </span>
                <span className="text-pretty text-[15px] text-ink-800 leading-snug group-hover:text-ink-900 sm:col-start-3">
                  {n.title}
                </span>
                <ArrowUpRight className="hidden size-4 text-ink-400 transition-all group-hover:text-ink-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:block" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-24 hairline-t bg-paper py-7">
        <Marquee speed="slow">
          {KEYWORDS.map((k, i) => (
            <span
              key={i}
              className="font-display text-3xl font-semibold tracking-tight text-ink-200 md:text-5xl lg:text-6xl"
            >
              <span className="mr-12">{k}</span>
              <span className="text-aqua-500">✦</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
