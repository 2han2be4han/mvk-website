'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Logo from './ui/Logo';
import MagneticButton from './ui/MagneticButton';
import { cn } from '@/lib/utils';

const NAV = [
  { href: '/about', label: '会社案内', en: 'About' },
  { href: '/products', label: '製品情報', en: 'Products' },
  { href: '/bousai', label: '防災・消防', en: 'Disaster Prev.' },
  { href: '/tech', label: '技術・製造', en: 'Technology' },
  { href: '/recruit', label: '採用情報', en: 'Careers' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled ? 'pt-3' : 'pt-5'
        )}
      >
        <div className="container-x">
          <div
            className={cn(
              'flex items-center justify-between border px-5 py-3 transition-all duration-500',
              scrolled
                ? 'border-ink-200 bg-paper/80 backdrop-blur-xl'
                : 'border-transparent bg-transparent'
            )}
          >
            <Logo />

            <nav className="hidden lg:flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.18em]">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative px-3.5 py-2 text-ink-600 transition-colors hover:text-ink-900"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span
                    aria-hidden
                    className="absolute inset-x-3.5 bottom-1 h-px scale-x-0 origin-left bg-ink-900 transition-transform duration-300 group-hover:scale-x-100"
                  />
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <MagneticButton href="/contact" variant="primary" className="px-5 py-2.5 text-sm">
                お問い合わせ
              </MagneticButton>
            </div>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="lg:hidden inline-flex size-10 items-center justify-center bg-ink-900 text-white"
              aria-label="メニューを開く"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-ink-950"
              initial={{ clipPath: 'circle(0% at 100% 0%)' }}
              animate={{ clipPath: 'circle(150% at 100% 0%)' }}
              exit={{ clipPath: 'circle(0% at 100% 0%)' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
            <div aria-hidden className="absolute inset-0 grid-bg opacity-[0.06]" />
            <div className="relative h-full flex flex-col">
              <div className="container-x flex items-center justify-between pt-8">
                <Logo invert />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex size-10 items-center justify-center border border-white/15 text-white"
                  aria-label="メニューを閉じる"
                >
                  <X className="size-5" />
                </button>
              </div>
              <nav className="container-x flex-1 flex flex-col justify-center gap-1">
                {NAV.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline justify-between border-b border-white/10 py-5"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                          0{i + 1}
                        </span>
                        <span className="font-display text-3xl text-white sm:text-5xl">
                          {item.label}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                        {item.en}
                      </span>
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.5 }}
                  className="mt-12 flex items-center justify-between border-t border-white/10 pt-8"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">
                    Get in touch
                  </span>
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-ink-900"
                  >
                    お問い合わせ →
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
