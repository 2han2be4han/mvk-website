import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import SectionHeading from '../ui/SectionHeading';
import Marquee from '../ui/Marquee';
import Reveal from '../ui/Reveal';

const NEWS = [
  {
    date: '2026.03.30',
    tag: 'CSR',
    title: '設立70周年記念 愛・地球博記念公園にて植樹を実施しました',
  },
  {
    date: '2026.03.18',
    tag: 'Award',
    title: '「健康経営優良法人 2026」に認定されました',
  },
  {
    date: '2026.02.02',
    tag: 'Product',
    title: '2026年4月改訂版 価格表を発刊しました',
  },
  {
    date: '2025.10.29',
    tag: 'Notice',
    title: '一部製品の定価および販売価格改定のご案内',
  },
  {
    date: '2025.06.20',
    tag: 'IR',
    title: '代表取締役社長交代のお知らせ',
  },
];

const KEYWORDS = [
  '70TH ANNIVERSARY',
  '健康経営優良法人',
  'SDGs',
  'JIS規格',
  'MOLDEX',
  '応急給水栓',
  'メイドイン福岡',
  'CARBON NEUTRAL',
];

export default function News() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="Newsroom"
            title={
              <>
                MVK の<br className="sm:hidden" />
                最新の動き。
              </>
            }
          />
          <Reveal>
            <Link
              href="#"
              className="group inline-flex items-center gap-2 text-sm font-medium text-ink-700 hover:text-ink-900"
            >
              すべて見る
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 divide-y divide-ink-100 border-y border-ink-100">
          {NEWS.map((n, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <Link
                href="#"
                className="group flex flex-col gap-2 py-5 sm:grid sm:grid-cols-[auto_auto_1fr_auto] sm:items-center sm:gap-8"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-ink-500 sm:text-sm">{n.date}</span>
                  <span className="rounded-full border border-ink-200 px-3 py-0.5 text-[10px] font-medium tracking-wider text-ink-600 uppercase">
                    {n.tag}
                  </span>
                </div>
                <span className="text-pretty text-sm text-ink-800 group-hover:text-ink-900 sm:text-base sm:col-start-3">
                  {n.title}
                </span>
                <ArrowUpRight className="hidden size-4 text-ink-400 transition-all group-hover:text-ink-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:block" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-20 border-y border-ink-100 bg-white py-6">
        <Marquee speed="slow">
          {KEYWORDS.map((k, i) => (
            <span
              key={i}
              className="font-display text-2xl font-semibold tracking-tight text-ink-300 md:text-4xl lg:text-5xl"
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
