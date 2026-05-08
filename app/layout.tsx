import type { Metadata } from 'next';
import { Inter, Noto_Sans_JP, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' });
const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'MVK | 前田バルブ工業株式会社',
    template: '%s | MVK 前田バルブ工業',
  },
  description:
    '暮らしと、水をむすぶ。70年にわたり日本の生活インフラを支える、住宅用バルブ・管継手・防災製品のリーディングメーカー。',
  keywords: ['バルブ', '管継手', '前田バルブ', 'MVK', '給水給湯', '消防製品', 'MOLDEX'],
  metadataBase: new URL('https://www.mvk.co.jp'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} ${outfit.variable} ${notoSansJP.variable} font-sans text-ink-900 antialiased`}
      >
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
