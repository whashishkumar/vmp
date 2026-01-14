import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

const onesta = localFont({
  src: '../public/fonts/Onest-Regular.ttf',
  variable: '--font-onesta',
  display: 'swap',
});

const fredoka = localFont({
  src: '../public/fonts/Fredoka-Regular.ttf',
  variable: '--font-fredoka',
  display: 'swap',
});

const figtree = localFont({
  src: '../public/fonts/Fredoka-Regular.ttf',
  variable: '--font-figtree',
  display: 'swap',
});

const bicroLage = localFont({
  src: '../public/fonts/BricolageGrotesque-Regular.ttf',
  variable: '--font-bicroLage',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'vmp',
  description:
    'VMP is the parent ecosystem behind Nurovet, VMP Marketing, VMP Finance, and VMP Insurance. Together, these solutions help veterinary clinics and hospitals manage operations, grow their practice, offer affordable care, and protect pets—through one connected ecosystem.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fredoka.variable} ${onesta.variable} ${figtree.variable} ${bicroLage.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
