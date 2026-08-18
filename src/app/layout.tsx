import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: 'OdishaRank — Prepare Today. Rank Tomorrow.',
    template: '%s | OdishaRank',
  },
  description: 'Focused preparation for Odisha Government competitive examinations.',
  keywords: [
    'Odisha competitive exams',
    'Odisha government exams',
    'OSSC preparation',
    'OPSC preparation',
    'OSSSC preparation',
    'Odisha exam preparation',
    'OdishaRank',
  ],
  authors: [{ name: 'OdishaRank' }],
  creator: 'OdishaRank',
  publisher: 'OdishaRank',
  applicationName: 'OdishaRank',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'OdishaRank',
    title: 'OdishaRank — Prepare Today. Rank Tomorrow.',
    description: 'Focused preparation for Odisha Government competitive examinations.',
  },
  twitter: {
    card: 'summary',
    title: 'OdishaRank — Prepare Today. Rank Tomorrow.',
    description: 'Focused preparation for Odisha Government competitive examinations.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}