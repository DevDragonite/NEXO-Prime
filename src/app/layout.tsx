import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'NEXO PRIME | Meat & Meta',
  description: 'Steakhouse de lujo en Las Mercedes, Caracas. Fusionamos la alta cocina con tecnología blockchain y experiencias inmersivas.',
  openGraph: {
    title: 'NEXO PRIME | Meat & Meta',
    description: 'La primera experiencia gastronómica Crypto-Wagyu de Venezuela.',
    url: 'https://nexo-prime.vercel.app',
    siteName: 'NEXO PRIME',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&q=80&w=2070', // Wagyu A5 Image
        width: 1200,
        height: 630,
        alt: 'NEXO PRIME Experience',
      },
    ],
    locale: 'es_VE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEXO PRIME | Meat & Meta',
    description: 'Steakhouse de lujo en Las Mercedes, Caracas. Blockchain & Fine Dining.',
    images: ['https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&q=80&w=2070'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#0c0c0c] text-[#f2efea] font-sans antialiased selection:bg-[#bea98e] selection:text-black">
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
