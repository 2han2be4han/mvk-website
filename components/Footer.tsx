import Link from 'next/link';
import { ArrowUpRight, MapPin, Phone } from 'lucide-react';
import Logo from './ui/Logo';
import GradientMesh from './ui/GradientMesh';

const InstagramIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);
const FacebookIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const YoutubeIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.35z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
);

const NAV_GROUPS = [
  {
    title: 'Company',
    items: [
      { href: '/about', label: '会社案内' },
      { href: '/about#history', label: '沿革・70周年' },
      { href: '/recruit', label: '採用情報' },
      { href: '/contact', label: 'お問い合わせ' },
    ],
  },
  {
    title: 'Products',
    items: [
      { href: '/products', label: '住宅用バルブ' },
      { href: '/products#joints', label: '管継手' },
      { href: '/bousai', label: '防災・消防製品' },
      { href: '/tech', label: '技術・製造' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { href: '#', label: 'カタログ・価格表' },
      { href: '#', label: 'CADデータ' },
      { href: '#', label: 'ニュース' },
      { href: '#', label: 'サステナビリティ' },
    ],
  },
];

const SOCIAL = [
  { href: '#', icon: InstagramIcon, label: 'Instagram' },
  { href: '#', icon: FacebookIcon, label: 'Facebook' },
  { href: '#', icon: YoutubeIcon, label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-ink-950 text-white">
      <GradientMesh variant="dark" className="opacity-50" />
      <div className="grain-overlay" />

      <div className="relative container-x py-20 md:py-28">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo invert />
            <p className="mt-8 max-w-sm text-pretty text-lg font-display leading-tight text-white/80 md:text-2xl">
              暮らしと、水を<br />むすぶ。
            </p>
            <p className="mt-3 max-w-sm text-sm text-white/50 leading-relaxed">
              MAEDA VALVE INDUSTRIES, LTD.<br />
              1956 — 70 years of engineering trust.
            </p>

            <div className="mt-10 flex flex-col gap-3 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <MapPin className="size-4 shrink-0 mt-0.5 text-aqua-400" />
                <span>〒811-3133<br />福岡県古賀市青柳町569-1</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-aqua-400" />
                <span>092-942-5331</span>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              {SOCIAL.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group inline-flex size-10 items-center justify-center rounded-full border border-white/10 transition-all hover:border-aqua-400 hover:bg-aqua-400/10"
                >
                  <Icon className="size-4 text-white/70 transition-colors group-hover:text-aqua-400" />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {NAV_GROUPS.map((group) => (
              <div key={group.title}>
                <h4 className="font-display text-xs uppercase tracking-[0.25em] text-white/40">
                  {group.title}
                </h4>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="group inline-flex items-center gap-1 text-sm text-white/80 transition-colors hover:text-white"
                      >
                        {item.label}
                        <ArrowUpRight className="size-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div
          aria-hidden
          className="my-16 select-none overflow-hidden text-center"
        >
          <span className="font-display text-[18vw] font-semibold leading-none tracking-tighter bg-gradient-to-b from-white/10 to-white/0 bg-clip-text text-transparent">
            MVK
          </span>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} MAEDA VALVE INDUSTRIES, LTD. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">プライバシーポリシー</Link>
            <Link href="#" className="hover:text-white">サイト利用規約</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
