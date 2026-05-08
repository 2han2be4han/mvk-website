import Link from 'next/link';
import { ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react';
import Logo from './ui/Logo';

const InstagramIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);
const FacebookIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const YoutubeIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.35z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
);

const NAV_GROUPS = [
  {
    title: '01 Company',
    items: [
      { href: '/about', label: '会社案内' },
      { href: '/about#history', label: '沿革・70 周年' },
      { href: '/recruit', label: '採用情報' },
      { href: '/contact', label: 'お問い合わせ' },
    ],
  },
  {
    title: '02 Products',
    items: [
      { href: '/products', label: '住宅用バルブ' },
      { href: '/products#joints', label: '管継手' },
      { href: '/bousai', label: '防災・消防製品' },
      { href: '/tech', label: '技術・製造' },
    ],
  },
  {
    title: '03 Resources',
    items: [
      { href: '#', label: 'カタログ・価格表' },
      { href: '#', label: 'CAD データ' },
      { href: '#', label: 'ニュースリリース' },
      { href: '#', label: 'サステナビリティ' },
    ],
  },
];

const SOCIAL = [
  { href: '#', icon: InstagramIcon, label: 'Instagram' },
  { href: '#', icon: FacebookIcon, label: 'Facebook' },
  { href: '#', icon: YoutubeIcon, label: 'YouTube' },
];

const META = [
  { label: 'Founded', value: '1956' },
  { label: 'Coordinates', value: '33.7°N · 130.5°E' },
  { label: 'Cert.', value: 'ISO 9001 · 健康経営優良法人' },
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-ink-950 text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-bg opacity-[0.05]" />
      <div className="grain-overlay" />

      <div className="relative container-x py-20 md:py-28">
        <div className="grid gap-16 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Logo invert />
            <p className="mt-10 max-w-sm text-pretty font-display text-2xl font-medium leading-[1.15] text-white/85 md:text-3xl">
              暮らしと<br />水をむすぶ
            </p>
            <p className="mt-5 max-w-sm text-[13px] leading-relaxed text-white/45">
              MAEDA VALVE INDUSTRIES, LTD.<br />
              70 years of engineering trust — since 1956.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 text-[13px] text-white/70">
              <div className="flex items-start gap-3">
                <MapPin className="size-3.5 shrink-0 mt-1 text-aqua-400" strokeWidth={1.4} />
                <span>〒811-3133 福岡県古賀市青柳町 569-1</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="size-3.5 shrink-0 text-aqua-400" strokeWidth={1.4} />
                <span className="font-mono tabular-nums">092-942-5331</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-3.5 shrink-0 text-aqua-400" strokeWidth={1.4} />
                <span className="font-mono">info@mvk.co.jp</span>
              </div>
            </div>

            <div className="mt-10 flex gap-2">
              {SOCIAL.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group inline-flex size-10 items-center justify-center border border-white/10 transition-all hover:border-aqua-400 hover:bg-white/5"
                >
                  <Icon className="size-3.5 text-white/70 transition-colors group-hover:text-aqua-400" />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {NAV_GROUPS.map((group) => (
              <div key={group.title}>
                <h4 className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
                  {group.title}
                </h4>
                <ul className="mt-6 space-y-3.5">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="group inline-flex items-center gap-1 text-[14px] text-white/80 transition-colors hover:text-white"
                      >
                        {item.label}
                        <ArrowUpRight
                          className="size-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0"
                          strokeWidth={1.4}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-1 gap-x-10 gap-y-4 border-t border-white/10 pt-8 sm:grid-cols-3">
          {META.map((m) => (
            <div key={m.label} className="flex items-baseline gap-4">
              <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
                {m.label}
              </dt>
              <dd className="font-mono text-[13px] tabular-nums text-white/85">{m.value}</dd>
            </div>
          ))}
        </dl>

        <div
          aria-hidden
          className="my-16 select-none overflow-hidden text-center"
        >
          <span className="font-display text-[20vw] font-semibold leading-[0.85] tracking-[-0.04em] bg-gradient-to-b from-white/[0.07] to-white/0 bg-clip-text text-transparent">
            MVK
          </span>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-8 font-mono text-[11px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p className="uppercase tracking-[0.18em]">
            © {new Date().getFullYear()} Maeda Valve Industries, Ltd.
          </p>
          <div className="flex gap-6 uppercase tracking-[0.18em]">
            <Link href="#" className="hover:text-white">Privacy</Link>
            <Link href="#" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
