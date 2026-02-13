import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import { Figtree, Fredoka, Onest, Bricolage_Grotesque } from 'next/font/google';

// const onesta = localFont({
//   src: '../public/fonts/Onest-Regular.ttf',
//   variable: '--font-onesta',
//   display: 'swap',
// });

// const fredoka = localFont({
//   src: '../public/fonts/Fredoka-Regular.ttf',
//   variable: '--font-fredoka',
//   display: 'swap',
// });

// const figtree = localFont({
//   src: '../public/fonts/Fredoka-Regular.ttf',
//   variable: '--font-figtree',
//   display: 'swap',
// });

// const bicroLage = localFont({
//   src: '../public/fonts/BricolageGrotesque-Regular.ttf',
//   variable: '--font-bicroLage',
//   display: 'swap',
// });

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const onesta = Onest({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const bicroLage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Vmp',
  description:
    'VMP is the parent ecosystem behind Nurovet, VMP Marketing, VMP Finance, and VMP Insurance. Together, these solutions help veterinary clinics and hospitals manage operations, grow their practice, offer affordable care, and protect pets—through one connected ecosystem.',
  icons: 'public/icons/vmp-favicon.png',
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fredoka} ${onesta} ${figtree} ${bicroLage} antialiased`}>{children}</body>
    </html>
  );
}
